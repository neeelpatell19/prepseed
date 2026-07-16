import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import "./RealEstateCRM.css";
import {
    hero, problems, moduleGrid, spotlights, integrations, moreIntegrations,
    roles, extraFeatures, whitelabelChecklist, replacedTools, migrationSteps,
    whyPrepseed,
} from "./RealEstateCRMData";
import {
    DashboardMockup, ActionCenterMockup, LeadManagerMockup, SiteVisitsMockup,
    BrokersMockup, WhatsAppMockup,
} from "./Mockups";

gsap.registerPlugin(ScrollTrigger);

const mockupMap = {
    dashboard: DashboardMockup,
    actionCenter: ActionCenterMockup,
    leadManager: LeadManagerMockup,
    siteVisits: SiteVisitsMockup,
    brokers: BrokersMockup,
};

const countUp = (el) => {
    const raw = el.dataset.countup;
    const match = raw && raw.match(/^([^\d]*)([\d,.]+)(.*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const decimals = (numStr.split(".")[1] || "").length;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const proxy = { val: 0 };
    gsap.to(proxy, {
        val: target,
        duration: 1.7,
        ease: "power2.out",
        onUpdate: () => {
            const formatted = decimals > 0
                ? proxy.val.toFixed(decimals)
                : Math.round(proxy.val).toLocaleString("en-US");
            el.textContent = `${prefix}${formatted}${suffix}`;
        },
    });
};

const SCROLL_KEY = "recrm-scroll-y";

const RealEstateCRM = () => {
    const pageRef = useRef(null);
    const location = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        // Back/forward navigation (e.g. "Back to overview" from a detail
        // page, or the browser back button) should land wherever the user
        // actually was — a scrolled-down anchor, mid-scroll on the grid,
        // wherever — not jump back to the top. Only force scroll-to-top on
        // a fresh PUSH (a nav-bar click, a card link from elsewhere), and
        // only force scroll-to-anchor when the URL actually names one.
        // A true fresh page load (e.g. someone opening a shared link
        // directly) also reports as "POP" — there's no prior in-app PUSH
        // for it to be a back-navigation from. Only take the restore path
        // when there's actually something saved to restore; otherwise fall
        // through to the hash/top-of-page handling below, same as any
        // other fresh navigation.

        // Both branches below can race against this page's own GSAP
        // ScrollTrigger setup: refreshing the pinned module-stack's
        // positions (on a rAF tick, fonts.ready, window's `load` event,
        // and a 600ms settle timer — all independent, see the
        // ScrollTrigger effect below) can call window.scrollTo() itself
        // and snap the page away from wherever this effect just put it —
        // whether that's a restored back-navigation position, or the top
        // of a fresh page reached by clicking in from somewhere already
        // scrolled down. Rather than guess which of those async refreshes
        // fires last, settleScrollTo re-asserts the target position for a
        // couple of seconds and only reveals the page once it's actually
        // held stable — hiding it meanwhile so the fight isn't visible.
        // hide:true (the back-navigation-restore case) is worth the
        // brief blank flash to avoid visibly jumping through the wrong
        // part of a long page. hide:false (every fresh navigation) must
        // NOT blank the page while it silently fights the same GSAP
        // quirk in the background — that flash was far more noticeable
        // than the odd one-pixel scroll correction ever was, since it's
        // the common case (every nav-bar/card click), not the rare one.
        const settleScrollTo = (y, { hide = true } = {}) => {
            const el = pageRef.current;
            if (hide && el) el.style.opacity = "0";
            window.scrollTo(0, y);

            let attempts = 0;
            let stableChecks = 0;
            const reveal = () => {
                if (!hide || !el) return;
                el.style.transition = "opacity 0.25s ease";
                el.style.opacity = "1";
            };
            const correct = () => {
                if (Math.abs(window.scrollY - y) > 20) {
                    window.scrollTo(0, y);
                    stableChecks = 0;
                } else {
                    stableChecks += 1;
                }
                attempts += 1;
                if (stableChecks >= 2 || attempts >= 12) {
                    clearInterval(interval);
                    reveal();
                }
            };
            const t = setTimeout(correct, 300);
            const interval = setInterval(correct, 200);
            return () => {
                clearTimeout(t);
                clearInterval(interval);
                if (hide && el) {
                    el.style.opacity = "";
                    el.style.transition = "";
                }
            };
        };

        if (navigationType === "POP" && sessionStorage.getItem(SCROLL_KEY) !== null) {
            return settleScrollTo(parseInt(sessionStorage.getItem(SCROLL_KEY), 10));
        }

        if (location.hash) {
            const id = location.hash.slice(1);
            requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView();
            });
            return;
        }

        return settleScrollTo(0, { hide: false });
    }, [navigationType, location.hash]);

    // Record scroll position at the moment of an actual outgoing click —
    // not via a live "scroll" listener. A live listener sounds simpler, but
    // it's corrupted by this page's own teardown: leaving unmounts the GSAP
    // context, which reverts the card-stack's pin-spacers and shrinks the
    // document, and the browser responds by clamping window.scrollY down to
    // the new (shorter) max — a genuine scroll event that a still-attached
    // listener captures with the wrong value, overwriting the correct one
    // right as we're leaving. A one-shot capture on click happens before any
    // of that teardown starts, so it isn't exposed to the race at all.
    useEffect(() => {
        const onClickCapture = (e) => {
            if (e.target.closest("a")) {
                sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
            }
        };
        document.addEventListener("click", onClickCapture, true);
        return () => document.removeEventListener("click", onClickCapture, true);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set(".reveal", { opacity: 1, y: 0 });
                document.querySelectorAll("[data-countup]").forEach((el) => {
                    el.textContent = el.dataset.countup;
                });
            });

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                // isDesktop is a plain runtime check (not gsap.matchMedia)
                // deliberately: an object-conditions gsap.matchMedia().add()
                // call here silently never invoked its callback at all when
                // every condition evaluated false (mobile + no reduced
                // motion) — every .reveal element on the page stayed stuck
                // at opacity 0 forever. Single-query mm.add() calls (like
                // this one) don't have that problem, so isDesktop is just
                // checked inline instead of being a second matchMedia query.
                const isDesktop = window.matchMedia("(min-width: 900px)").matches;

                // Hero intro timeline
                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
                tl.fromTo(".recrm-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
                    .fromTo(".recrm-hero-line", { yPercent: 115 }, { yPercent: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
                    .fromTo(".recrm-hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
                    .fromTo(".recrm-hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
                    .fromTo(".recrm-hero-stats", { opacity: 0, y: 20 }, {
                        opacity: 1, y: 0, duration: 0.6,
                        onComplete: () => document.querySelectorAll(".recrm-hero-stat-value[data-countup]").forEach(countUp),
                    }, "-=0.3")
                    .fromTo(".recrm-hero-visual", { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.9");

                // Generic scroll reveals — one trigger per element. (A single
                // ScrollTrigger.batch() call for the whole page was flaky for
                // sections far down the page: elements would stay stuck at
                // opacity 0 after a fast/instant scroll. Per-element triggers
                // are slower to set up but fire reliably regardless of how
                // the user reaches them.)
                gsap.utils.toArray(".reveal").forEach((el, i) => {
                    const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
                    const indexInParent = siblings.indexOf(el);
                    gsap.fromTo(el, { opacity: 0, y: 36 }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: Math.min(indexInParent, 4) * 0.08,
                        ease: "power3.out",
                        scrollTrigger: { trigger: el, start: "top 92%", once: true },
                    });
                });

                // Count-up stats further down the page
                document.querySelectorAll(".recrm-stat-block-value[data-countup]").forEach((el) => {
                    ScrollTrigger.create({
                        trigger: el,
                        start: "top 90%",
                        once: true,
                        onEnter: () => countUp(el),
                    });
                });

                // Subtle tilt on spotlight mockups + whatsapp phone (pointer devices only)
                if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                    const tiltEls = document.querySelectorAll(".recrm-tilt");
                    tiltEls.forEach((el) => {
                        const target = el.firstElementChild;
                        if (!target) return;
                        const xTo = gsap.quickTo(target, "rotationY", { duration: 0.6, ease: "power3" });
                        const yTo = gsap.quickTo(target, "rotationX", { duration: 0.6, ease: "power3" });
                        const onMove = (e) => {
                            const rect = el.getBoundingClientRect();
                            const px = (e.clientX - rect.left) / rect.width - 0.5;
                            const py = (e.clientY - rect.top) / rect.height - 0.5;
                            xTo(px * 8);
                            yTo(-py * 8);
                        };
                        const onLeave = () => { xTo(0); yTo(0); };
                        el.addEventListener("pointermove", onMove);
                        el.addEventListener("pointerleave", onLeave);
                        el._recrmCleanup = () => {
                            el.removeEventListener("pointermove", onMove);
                            el.removeEventListener("pointerleave", onLeave);
                        };
                    });
                }

                // Module spotlights stack: each card pins to the viewport
                // (GSAP pin, not CSS position:sticky — see the CSS comment
                // above the desktop stack rules for why) while the next one
                // slides up over it. As a card is about to be covered,
                // shrink + round + dim it so the stack reads as physical
                // depth rather than a hard cut.
                if (isDesktop) {
                    const wraps = gsap.utils.toArray(".recrm-stack-wrap:not(.is-last)");
                    wraps.forEach((wrap) => {
                        const item = wrap.querySelector(".recrm-stack-item");
                        const card = wrap.querySelector(".recrm-stack-card");
                        if (!item || !card) return;

                        // Dwell for exactly one viewport height: that's how
                        // long it takes the next card (immediately adjacent
                        // in the document, same height, no gap) to scroll up
                        // from below and fully cover this one.
                        const dwell = "+=100%";

                        ScrollTrigger.create({
                            trigger: item,
                            start: "top top",
                            end: dwell,
                            pin: true,
                            // The shared PageTransition wrapper (framer-motion)
                            // leaves `filter: blur(0px)` on itself at rest —
                            // a non-"none" filter, which per spec creates a
                            // containing block for position:fixed, same as a
                            // transform would. GSAP's default pin uses
                            // position:fixed and didn't detect that ancestor,
                            // so the pinned element scrolled away with the
                            // page instead of staying put. Forcing
                            // transform-based pinning sidesteps position
                            // entirely and is immune to this.
                            pinType: "transform",
                            // false: pinSpacing:true reserves extra document
                            // space AFTER the pin ends, which pushes the next
                            // card further down — the two cards then never
                            // occupy the viewport at the same time, so
                            // instead of stacking you just get a scroll-past.
                            // With it false, the next card's own (unshifted)
                            // position overlaps this pin's dwell range, so it
                            // visually slides up and over — an actual stack.
                            pinSpacing: false,
                            anticipatePin: 1,
                        });

                        gsap.fromTo(card,
                            { scale: 1, borderRadius: 0, filter: "brightness(1)" },
                            {
                                scale: 0.92,
                                borderRadius: 28,
                                filter: "brightness(0.85)",
                                ease: "none",
                                scrollTrigger: { trigger: item, start: "top top", end: dwell, scrub: true },
                            }
                        );
                    });
                }

                return () => {
                    document.querySelectorAll(".recrm-tilt").forEach((el) => el._recrmCleanup && el._recrmCleanup());
                };
            });

            // Trigger positions are computed against current layout. Web fonts
            // and late reflow further down this (very long) page can shift
            // everything below them, leaving distant sections' triggers
            // pointing at stale offsets — refresh once things settle.
            const refresh = () => ScrollTrigger.refresh();
            requestAnimationFrame(refresh);
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(refresh);
            }
            window.addEventListener("load", refresh);
            const settleTimer = setTimeout(refresh, 600);

            return () => {
                window.removeEventListener("load", refresh);
                clearTimeout(settleTimer);
                mm.revert();
            };
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="recrm-page" ref={pageRef}>
            {/* HERO */}
            <section className="recrm-hero recrm-fit">
                <div className="recrm-container recrm-hero-inner">
                    <div className="recrm-hero-copy">
                        <span className="recrm-eyebrow">{hero.eyebrow}</span>
                        <h1 className="recrm-hero-title">
                            <span className="recrm-hero-line-mask"><span className="recrm-hero-line">{hero.title[0]}</span></span>
                            <span className="recrm-hero-line-mask"><span className="recrm-hero-line">{hero.title[1]}</span></span>
                            <span className="recrm-hero-line-mask"><span className="recrm-hero-line recrm-accent">{hero.title[2]}</span></span>
                        </h1>
                        <div className="recrm-hero-sub">
                            <p>{hero.subtitle}</p>
                        </div>
                        <div className="recrm-hero-ctas">
                            <a href="tel:+919913382221" className="recrm-btn recrm-btn-primary">
                                Book a call <FiArrowRight />
                            </a>
                            <a href="#modules" className="recrm-btn recrm-btn-ghost">See what's inside</a>
                        </div>
                        <div className="recrm-hero-stats">
                            {hero.stats.map((s) => (
                                <div className="recrm-hero-stat" key={s.label}>
                                    <span className="recrm-hero-stat-value" data-countup={s.value}>{s.value}</span>
                                    <span className="recrm-hero-stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="recrm-hero-visual recrm-tilt">
                        <DashboardMockup />
                    </div>
                </div>
                <div className="recrm-scroll-cue" aria-hidden="true"><span /></div>
            </section>

            {/* PROBLEM */}
            <section className="recrm-section">
                <div className="recrm-container">
                    <div className="recrm-section-head reveal">
                        <span className="recrm-kicker kicker-red">The problem</span>
                        <h2 className="recrm-h2">Great real estate teams still lose <em>deals</em> to bad process.</h2>
                    </div>
                    <div className="recrm-problem-grid">
                        {problems.map((p) => (
                            <Link to={`/products/real-estate-crm/${p.slug}`} className="recrm-problem-card reveal" key={p.title}>
                                <span className="recrm-problem-icon">{p.icon}</span>
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION INTRO + MODULE GRID */}
            <section className="recrm-section recrm-section-light" id="modules">
                <div className="recrm-container">
                    <div className="recrm-section-head reveal">
                        <span className="recrm-kicker kicker-blue">Introducing</span>
                        <h2 className="recrm-h2">One platform. <em>Every lead, every visit, every deal.</em></h2>
                        <p className="recrm-section-sub">
                            Prepseed brings lead capture, follow-up, site visits, brokers and reporting into a single sales
                            workspace — built specifically for real estate.
                        </p>
                    </div>
                    <div className="recrm-module-grid">
                        {moduleGrid.map((m) => (
                            m.anchor ? (
                                <a href={m.anchor} className="recrm-module-card reveal" key={m.title}>
                                    <span className="recrm-module-icon">{m.icon}</span>
                                    <h4>{m.title}</h4>
                                    <p>{m.description}</p>
                                </a>
                            ) : (
                                <Link to={`/products/real-estate-crm/${m.slug}`} className="recrm-module-card reveal" key={m.title}>
                                    <span className="recrm-module-icon">{m.icon}</span>
                                    <h4>{m.title}</h4>
                                    <p>{m.description}</p>
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </section>

            {/* SPOTLIGHTS — stack on top of each other on desktop as you scroll */}
            <div className="recrm-stack">
                {spotlights.map((s, i) => {
                    const Mockup = mockupMap[s.mockup];
                    const isLast = i === spotlights.length - 1;
                    return (
                        <div className={`recrm-stack-wrap ${isLast ? "is-last" : ""}`} key={s.id} id={s.id}>
                            <div className="recrm-stack-item" style={{ zIndex: 10 + i }}>
                                <div className="recrm-stack-card">
                                    <div className={`recrm-container recrm-spotlight ${s.reversed ? "reversed" : ""}`}>
                                        <div className="recrm-spotlight-copy reveal">
                                            <span className="recrm-kicker kicker-blue">{s.eyebrow}</span>
                                            <h3 className="recrm-h3">{s.title}</h3>
                                            <p className="recrm-spotlight-desc">{s.description}</p>
                                            <ul className="recrm-check-list">
                                                {s.bullets.map((b) => (
                                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="recrm-spotlight-visual recrm-tilt reveal">
                                            <Mockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* INTEGRATIONS + WHATSAPP CONVERSATION */}
            <section className="recrm-section recrm-section-light" id="integrations">
                <div className="recrm-container">
                    <div className="recrm-section-head reveal">
                        <span className="recrm-kicker kicker-blue">Integrations</span>
                        <h2 className="recrm-h2">Leads arrive automatically. <em>Nobody copy-pastes.</em></h2>
                    </div>
                    <div className="recrm-integration-layout">
                        <div className="recrm-integration-cards">
                            {integrations.map((it) => (
                                <div className="recrm-integration-card reveal" key={it.name}>
                                    <div className="recrm-integration-status"><span className="recrm-live-dot" />{it.status}</div>
                                    <h4>{it.name}</h4>
                                    <p>{it.description}</p>
                                </div>
                            ))}
                            <div className="recrm-more-integrations reveal">
                                <span>More on request:</span>
                                <div className="recrm-chip-row">
                                    {moreIntegrations.map((chip) => <span className="recrm-chip" key={chip}>{chip}</span>)}
                                </div>
                            </div>
                        </div>
                        <div className="recrm-whatsapp-demo reveal">
                            <span className="recrm-kicker kicker-green">A tireless first responder, on WhatsApp</span>
                            <div className="recrm-tilt"><WhatsAppMockup /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROLES */}
            <section className="recrm-section">
                <div className="recrm-container">
                    <div className="recrm-section-head reveal">
                        <span className="recrm-kicker kicker-blue">Multi-user management</span>
                        <h2 className="recrm-h2">Built for teams — owners, managers, tele-callers, field execs.</h2>
                    </div>
                    <div className="recrm-roles-grid">
                        {roles.map((r) => (
                            <Link to={`/products/real-estate-crm/${r.slug}`} className="recrm-role-card reveal" key={r.name}>
                                <span className="recrm-role-icon">{r.icon}</span>
                                <h4>{r.name}</h4>
                                <p>{r.description}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="recrm-callout reveal">
                        <FiCheck className="recrm-callout-icon" />
                        <div>
                            <strong>No one sees the whole database except you.</strong>
                            <span>Every other role is scoped to their own leads and queue by default.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXTRA FEATURES */}
            <section className="recrm-section recrm-section-light">
                <div className="recrm-container">
                    <div className="recrm-section-head reveal">
                        <span className="recrm-kicker kicker-blue">Also built in</span>
                        <h2 className="recrm-h2">Everything else a sales floor runs on.</h2>
                    </div>
                    <div className="recrm-extra-grid">
                        {extraFeatures.map((f) => (
                            <Link to={`/products/real-estate-crm/${f.slug}`} className="recrm-extra-card reveal" key={f.title}>
                                <span className="recrm-module-icon">{f.icon}</span>
                                <h4>{f.title}</h4>
                                <p>{f.description}</p>
                                <ul className="recrm-mini-check">
                                    {f.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHITELABEL */}
            <section className="recrm-section recrm-section-light recrm-fit">
                <div className="recrm-container">
                    <div className="recrm-section-head reveal">
                        <span className="recrm-kicker kicker-blue">Whitelabel & customization</span>
                        <h2 className="recrm-h2">This isn't our product on your desk. <em>It's your product, built by us.</em></h2>
                        <p className="recrm-section-sub">
                            Every real estate CRM we deploy ships under the client's own brand — logo, colors, domain and app
                            store listing. Prepseed is the engine underneath, never the name on screen.
                        </p>
                    </div>
                    <div className="recrm-whitelabel-grid">
                        {whitelabelChecklist.map((w) => (
                            <div className="recrm-whitelabel-item reveal" key={w.title}>
                                <FiCheck className="recrm-check-dark" />
                                <div>
                                    <strong>{w.title}</strong>
                                    <span>{w.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ONE VENDOR */}
            <section className="recrm-section">
                <div className="recrm-container">
                    <div className="recrm-section-head reveal">
                        <span className="recrm-kicker kicker-red">One vendor, one platform</span>
                        <h2 className="recrm-h2">No third-party tools. <em>No stitched-together stack.</em></h2>
                        <p className="recrm-section-sub">
                            Most real estate teams pay for — and babysit — five different subscriptions just to run their
                            sales process. With Prepseed there's nothing else to buy, connect or troubleshoot.
                        </p>
                    </div>
                    <div className="recrm-replace-grid">
                        {replacedTools.map((t) => (
                            <div className="recrm-replace-item reveal" key={t.from}>
                                <span className="recrm-replace-from">{t.from}</span>
                                <FiArrowRight className="recrm-replace-arrow" />
                                <span className="recrm-replace-to">{t.to}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY PREPSEED */}
            <section className="recrm-section recrm-section-light recrm-fit">
                <div className="recrm-container">
                    <div className="recrm-section-head reveal">
                        <span className="recrm-kicker kicker-blue">Why Prepseed</span>
                        <h2 className="recrm-h2">Proven at scale, <em>built to be yours.</em></h2>
                    </div>
                    <div className="recrm-stats-grid">
                        {whyPrepseed.map((w) => (
                            <div className="recrm-stat-block reveal" key={w.label}>
                                <span className="recrm-stat-block-value" data-countup={w.value}>{w.value}</span>
                                <strong>{w.label}</strong>
                                <p>{w.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MIGRATION */}
            <section className="recrm-section recrm-section-light">
                <div className="recrm-container">
                    <div className="recrm-section-head reveal">
                        <span className="recrm-kicker kicker-blue">Switching made easy</span>
                        <h2 className="recrm-h2">Already on another CRM? We <em>migrate everything</em> — you just watch it happen.</h2>
                    </div>
                    <div className="recrm-migration-grid">
                        {migrationSteps.map((m) => (
                            <div className="recrm-migration-step reveal" key={m.step}>
                                <span className="recrm-migration-number">{m.step}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RealEstateCRM;
