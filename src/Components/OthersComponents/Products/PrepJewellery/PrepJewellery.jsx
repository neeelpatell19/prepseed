import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheck, FiX } from "react-icons/fi";
import "./PrepJewellery.css";
import useSEO from "../useSEO";
import {
    hero, problems, moduleGrid, spotlights, maxsell, maxsellNotes, whatsappEvents, whatsappCallout,
    howItWorksSteps, howItWorksTiles, manualVsAutomated, appAccess, appAccessInfoTiles, integrations,
    moreIntegrations, complianceItems, extraFeatures, whitelabelChecklist, replacedTools,
    replaceInfoTiles, migrationSteps, migrationInfoTiles, whyPrepseed,
} from "./PrepJewelleryData";
import {
    BillingMockup, PurchaseMockup, InventoryMockup, ManufacturingMockup, KarigarMockup, CRMMockup,
    SchemesMockup, RepairsMockup, AccountsMockup, HRMockup, MaxSellMockup, IntegrationsMockup,
    OwnerDashboardMockup, CustomerAppMockup,
} from "./Mockups";

gsap.registerPlugin(ScrollTrigger);

const mockupMap = {
    billing: BillingMockup,
    purchase: PurchaseMockup,
    inventory: InventoryMockup,
    manufacturing: ManufacturingMockup,
    karigar: KarigarMockup,
    crm: CRMMockup,
    schemes: SchemesMockup,
    repairs: RepairsMockup,
    accounts: AccountsMockup,
    hr: HRMockup,
};

const toneKicker = { gold: "kicker-gold", blue: "kicker-blue", green: "kicker-green" };

// Wraps the first occurrence of `part` inside `text` in <em> so a single
// data-driven sentence can carry an inline accent — PrepCommerce hardcodes
// its <em> phrases directly in JSX, but the brief calls out a specific
// accent phrase per spotlight/section here, so this small helper renders
// that from data instead of duplicating each sentence in JSX twice.
const Highlighted = ({ text, part }) => {
    if (!part) return text;
    const idx = text.indexOf(part);
    if (idx === -1) return text;
    return (
        <>
            {text.slice(0, idx)}
            <em>{part}</em>
            {text.slice(idx + part.length)}
        </>
    );
};

const InfoTiles = ({ items, onDark }) => (
    <div className={`pjew-info-tiles ${onDark ? "on-dark" : ""}`}>
        {items.map((it) => (
            <div className="pjew-info-tile" key={it.title}>
                <span className="pjew-info-tile-icon">{it.icon}</span>
                <div>
                    <strong>{it.title}</strong>
                    <span>{it.description}</span>
                </div>
            </div>
        ))}
    </div>
);

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

const SCROLL_KEY = "pjew-scroll-y";

const PrepJewellery = () => {
    const pageRef = useRef(null);
    const location = useLocation();
    const navigationType = useNavigationType();

    useSEO({
        title: "PrepJewellery ERP — Automation-First Jewellery ERP | Prepseed",
        description:
            "PrepJewellery ERP runs sales, purchase, karigar, manufacturing, repairs and gold exchange on one automation engine — with a direct hardware link to MaxSell gold-testing machines, GST billing, hallmarking compliance and WhatsApp automation built in. Whitelabeled, live in weeks.",
        keywords: "jewellery erp software, gold rate billing software, hallmarking compliance software, karigar management software, maxsell integration, jewellery shop software, gold shop billing software, PrepJewellery, Prepseed",
    });

    // See PrepCommerce.jsx for the full rationale behind this restore
    // logic — same GSAP-pin-vs-scroll-position race applies here.
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
                const isDesktop = window.matchMedia("(min-width: 900px)").matches;

                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
                tl.fromTo(".pjew-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
                    .fromTo(".pjew-hero-line", { yPercent: 115 }, { yPercent: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
                    .fromTo(".pjew-hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
                    .fromTo(".pjew-hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
                    .fromTo(".pjew-hero-stats", { opacity: 0, y: 20 }, {
                        opacity: 1, y: 0, duration: 0.6,
                        onComplete: () => document.querySelectorAll(".pjew-hero-stat-value[data-countup]").forEach(countUp),
                    }, "-=0.3")
                    .fromTo(".pjew-hero-visual", { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.9");

                gsap.utils.toArray(".reveal").forEach((el) => {
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

                document.querySelectorAll(".pjew-stat-block-value[data-countup]").forEach((el) => {
                    ScrollTrigger.create({
                        trigger: el,
                        start: "top 90%",
                        once: true,
                        onEnter: () => countUp(el),
                    });
                });

                if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                    const tiltEls = document.querySelectorAll(".pjew-tilt");
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
                        el._pjewCleanup = () => {
                            el.removeEventListener("pointermove", onMove);
                            el.removeEventListener("pointerleave", onLeave);
                        };
                    });
                }

                if (isDesktop) {
                    const wraps = gsap.utils.toArray(".pjew-stack-wrap:not(.is-last)");
                    wraps.forEach((wrap) => {
                        const item = wrap.querySelector(".pjew-stack-item");
                        const card = wrap.querySelector(".pjew-stack-card");
                        if (!item || !card) return;

                        const dwell = "+=100%";

                        ScrollTrigger.create({
                            trigger: item,
                            start: "top top",
                            end: dwell,
                            pin: true,
                            pinType: "transform",
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
                    document.querySelectorAll(".pjew-tilt").forEach((el) => el._pjewCleanup && el._pjewCleanup());
                };
            });

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
        <div className="pjew-page" ref={pageRef}>
            {/* HERO */}
            <section className="pjew-hero pjew-fit">
                <div className="pjew-container pjew-hero-inner">
                    <div className="pjew-hero-copy">
                        <span className="pjew-eyebrow">{hero.eyebrow}</span>
                        <h1 className="pjew-hero-title">
                            <span className="pjew-hero-line-mask"><span className="pjew-hero-line">{hero.title[0]}</span></span>
                            <span className="pjew-hero-line-mask"><span className="pjew-hero-line">{hero.title[1]}</span></span>
                            <span className="pjew-hero-line-mask"><span className="pjew-hero-line pjew-accent">{hero.title[2]}</span></span>
                        </h1>
                        <div className="pjew-hero-sub">
                            <p>{hero.subtitle}</p>
                        </div>
                        <div className="pjew-hero-ctas">
                            <a href="tel:+919913382221" className="pjew-btn pjew-btn-primary">
                                Book a call <FiArrowRight />
                            </a>
                            <a href="#modules" className="pjew-btn pjew-btn-ghost">See what's inside</a>
                        </div>
                        <span className="pjew-hero-caption">{hero.caption}</span>
                        <div className="pjew-hero-stats">
                            {hero.stats.map((s) => (
                                <div className="pjew-hero-stat" key={s.label}>
                                    <span className="pjew-hero-stat-value" data-countup={s.value}>{s.value}</span>
                                    <span className="pjew-hero-stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pjew-hero-visual pjew-tilt">
                        <BillingMockup />
                    </div>
                </div>
                <div className="pjew-scroll-cue" aria-hidden="true"><span /></div>
            </section>

            {/* PROBLEM */}
            <section className="pjew-section">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-red">The problem</span>
                        <h2 className="pjew-h2">Every counter routine still runs on <em>a human copying a number.</em></h2>
                    </div>
                    <div className="pjew-problem-grid">
                        {problems.map((p) => (
                            <Link to={`/products/prepjewellery/${p.slug}`} className="pjew-problem-card reveal" key={p.title}>
                                <span className="pjew-problem-icon">{p.icon}</span>
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION INTRO + MODULE GRID */}
            <section className="pjew-section pjew-section-light" id="modules">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-gold">Introducing PrepJewellery ERP</span>
                        <h2 className="pjew-h2"><em>One automation engine.</em> Every counter, every branch, every gold exchange.</h2>
                        <p className="pjew-section-sub">
                            PrepJewellery ERP connects sales, purchase, karigar, manufacturing, repairs and accounts
                            into a single event pipeline — with a direct hardware link to MaxSell gold-testing machines.
                        </p>
                    </div>
                    <div className="pjew-module-grid">
                        {moduleGrid.map((m) => (
                            <Link to={`/products/prepjewellery/${m.slug}`} className="pjew-module-card reveal" key={m.title}>
                                <span className="pjew-module-icon">{m.icon}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SPOTLIGHTS — stack on top of each other on desktop as you scroll */}
            <div className="pjew-stack">
                {spotlights.map((s, i) => {
                    const Mockup = mockupMap[s.mockup];
                    const isLast = i === spotlights.length - 1;
                    return (
                        <div className={`pjew-stack-wrap ${isLast ? "is-last" : ""}`} key={s.id} id={s.id}>
                            <div className="pjew-stack-item" style={{ zIndex: 10 + i }}>
                                <div className="pjew-stack-card">
                                    <div className={`pjew-container pjew-spotlight ${s.reversed ? "reversed" : ""}`}>
                                        <div className="pjew-spotlight-copy reveal">
                                            <span className={`pjew-kicker ${toneKicker[s.tone] || "kicker-gold"}`}>{s.eyebrow}</span>
                                            <h3 className={`pjew-h3 pjew-h3-tone-${s.tone}`}><Highlighted text={s.title} part={s.accent} /></h3>
                                            <p className="pjew-spotlight-desc">{s.description}</p>
                                            <ul className="pjew-check-list">
                                                {s.bullets.map((b) => (
                                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pjew-spotlight-visual pjew-tilt reveal">
                                            <Mockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* HARDWARE INTEGRATION — MaxSell (dark, standalone, not part of the stack) */}
            <section className="pjew-section pjew-section-light">
                <div className="pjew-container">
                    <div className="pjew-spotlight">
                        <div className="pjew-spotlight-copy reveal">
                            <span className="pjew-kicker kicker-gold">{maxsell.kicker}</span>
                            <h2 className="pjew-h2"><Highlighted text={maxsell.title} part={maxsell.accent} /></h2>
                            <p className="pjew-section-sub">{maxsell.subtitle}</p>
                        </div>
                        <div className="pjew-spotlight-visual pjew-tilt reveal">
                            <MaxSellMockup />
                        </div>
                    </div>
                    <div className="pjew-whitelabel-grid" style={{ marginTop: 40 }}>
                        {maxsellNotes.map((n) => (
                            <div className="pjew-whitelabel-item reveal" key={n.title}>
                                <FiCheck className="pjew-check-dark" />
                                <div>
                                    <strong>{n.title}</strong>
                                    <span>{n.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHATSAPP AUTOMATION */}
            <section className="pjew-section">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-gold">WhatsApp automation</span>
                        <h2 className="pjew-h2">12 business events fire a WhatsApp message <em>automatically.</em></h2>
                        <p className="pjew-section-sub">
                            The actual PDF, receipt or invoice attached, at the moment the transaction happens —
                            not a marketing chatbot bolted on afterwards.
                        </p>
                    </div>
                    <div className="pjew-event-table-wrap reveal">
                        <div className="pjew-event-table">
                            <div className="pjew-event-row pjew-event-head">
                                <span>#</span><span>Event</span><span>Module</span><span>Trigger</span><span>Status</span>
                            </div>
                            {whatsappEvents.map((e) => (
                                <div className="pjew-event-row" key={e.n}>
                                    <span className="muted">{e.n}</span>
                                    <span>{e.event}</span>
                                    <span className="muted">{e.module}</span>
                                    <span className="muted">{e.trigger}</span>
                                    <span className={`pjew-event-status ${e.status.toLowerCase()}`}>{e.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pjew-callout reveal" style={{ marginTop: 24 }}>
                        <span className="pjew-callout-icon"><FiCheck /></span>
                        <div>
                            <strong>{whatsappCallout.title}</strong>
                            <span>{whatsappCallout.description}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS — event pipeline */}
            <section className="pjew-section pjew-section-light">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-gold">How it works</span>
                        <h2 className="pjew-h2">One event pipeline powers <em>every automated action</em> in the platform.</h2>
                        <p className="pjew-section-sub">
                            From a WhatsApp receipt to an incentive credit to a stock-release block — built to be
                            boring and reliable, not clever.
                        </p>
                    </div>
                    <div className="pjew-howitworks-grid">
                        {howItWorksSteps.map((s) => (
                            <div className="pjew-howitworks-step reveal" key={s.step}>
                                <span className="pjew-howitworks-number">{s.step}</span>
                                <h4>{s.title}</h4>
                                <p>{s.description}</p>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={howItWorksTiles} />
                </div>
            </section>

            {/* MANUAL VS AUTOMATED */}
            <section className="pjew-section">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-green">Manual vs. automated</span>
                        <h2 className="pjew-h2 pjew-h2-green-em">The same counter moment — <em>before and after PrepJewellery ERP.</em></h2>
                    </div>
                    <div className="pjew-replace-grid">
                        {manualVsAutomated.map((t) => (
                            <div className="pjew-replace-item reveal" key={t.from}>
                                <FiX className="pjew-replace-x" />
                                <span className="pjew-replace-from">{t.from}</span>
                                <FiArrowRight className="pjew-replace-arrow" />
                                <span className="pjew-replace-to">{t.to}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WEB, SELLER APP & CUSTOMER APP */}
            <section className="pjew-section">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-gold">Web, seller app &amp; mobile app</span>
                        <h2 className="pjew-h2">Run the automation from a <em>phone,</em> or from the counter.</h2>
                    </div>
                    <div className="pjew-access-grid">
                        {appAccess.map((a) => (
                            <div className="pjew-access-card reveal" key={a.title}>
                                <span className="pjew-access-icon">{a.icon}</span>
                                <h4>{a.title}</h4>
                                <p>{a.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="pjew-appdemo-layout">
                        <div className="pjew-tilt reveal"><OwnerDashboardMockup /></div>
                        <div className="pjew-tilt reveal"><CustomerAppMockup /></div>
                    </div>
                    <InfoTiles items={appAccessInfoTiles} />
                </div>
            </section>

            {/* INTEGRATIONS */}
            <section className="pjew-section pjew-section-light" id="integrations">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-gold">Integrations</span>
                        <h2 className="pjew-h2">Connects to the hardware and tools you <em>already run.</em></h2>
                        <p className="pjew-section-sub">
                            PrepJewellery ERP sits alongside your gold-testing hardware, payment gateway and
                            accounting tools — it doesn't ask you to replace them.
                        </p>
                    </div>
                    <div className="pjew-integration-layout">
                        <div className="pjew-integration-cards">
                            {integrations.map((it) => (
                                <div className="pjew-integration-card reveal" key={it.name}>
                                    <div className="pjew-integration-status"><span className="pjew-live-dot" />{it.status}</div>
                                    <h4>{it.name}</h4>
                                    <p>{it.description}</p>
                                </div>
                            ))}
                            <div className="pjew-more-integrations reveal">
                                <span>More on request:</span>
                                <div className="pjew-chip-row">
                                    {moreIntegrations.map((chip) => <span className="pjew-chip" key={chip}>{chip}</span>)}
                                </div>
                            </div>
                        </div>
                        <div className="pjew-side-demo reveal">
                            <span className="pjew-kicker kicker-green">Your stack, connected in one settings screen</span>
                            <div className="pjew-tilt"><IntegrationsMockup /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECURITY & COMPLIANCE */}
            <section className="pjew-section">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-green">Security &amp; compliance</span>
                        <h2 className="pjew-h2">Jewellery infrastructure that takes compliance <em>seriously.</em></h2>
                        <p className="pjew-section-sub">
                            Every bill carries a customer's money and a store's gold — PrepJewellery ERP is
                            engineered to protect both by default.
                        </p>
                    </div>
                    <div className="pjew-privacy-grid">
                        {complianceItems.map((it) => (
                            <div className="pjew-privacy-card reveal" key={it.title}>
                                <span className="pjew-privacy-icon">{it.icon}</span>
                                <h4>{it.title}</h4>
                                <p>{it.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALSO BUILT IN */}
            <section className="pjew-section pjew-section-light">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-gold">Also built in</span>
                        <h2 className="pjew-h2">Everything else a growing jewellery business runs on.</h2>
                    </div>
                    <div className="pjew-extra-grid">
                        {extraFeatures.map((f) => (
                            <Link to={`/products/prepjewellery/${f.slug}`} className="pjew-extra-card reveal" key={f.title}>
                                <span className="pjew-module-icon">{f.icon}</span>
                                <h4>{f.title}</h4>
                                <p>{f.description}</p>
                                <ul className="pjew-mini-check">
                                    {f.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHITELABEL */}
            <section className="pjew-section pjew-section-light pjew-fit">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-gold">Whitelabel &amp; customization</span>
                        <h2 className="pjew-h2">This isn't our dashboard with your logo on it. <em>It's your ERP, built by us.</em></h2>
                        <p className="pjew-section-sub">
                            Every PrepJewellery ERP deployment ships under the client's own brand — logo, colors,
                            domain and invoices. Prepseed is the engine underneath, never the name on screen.
                        </p>
                    </div>
                    <div className="pjew-whitelabel-grid">
                        {whitelabelChecklist.map((w) => (
                            <div className="pjew-whitelabel-item reveal" key={w.title}>
                                <FiCheck className="pjew-check-dark" />
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
            <section className="pjew-section">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-red">One vendor, one platform</span>
                        <h2 className="pjew-h2">No third-party plugins. <em>No stitched-together stack.</em></h2>
                        <p className="pjew-section-sub">
                            Most jewellers pay for — and babysit — a standalone gold-rate board, a hallmarking
                            register, a karigar notebook and an incentive spreadsheet, all disconnected from each
                            other. With PrepJewellery ERP there's nothing else to buy, connect or troubleshoot.
                        </p>
                    </div>
                    <div className="pjew-replace-grid">
                        {replacedTools.map((t) => (
                            <div className="pjew-replace-item reveal" key={t.from}>
                                <span className="pjew-replace-from">{t.from}</span>
                                <FiArrowRight className="pjew-replace-arrow" />
                                <span className="pjew-replace-to">{t.to}</span>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={replaceInfoTiles} />
                </div>
            </section>

            {/* WHY PREPSEED */}
            <section className="pjew-section pjew-section-light pjew-fit">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-gold">Why Prepseed</span>
                        <h2 className="pjew-h2">Proven at scale, <em>built to be yours.</em></h2>
                    </div>
                    <div className="pjew-stats-grid">
                        {whyPrepseed.map((w) => (
                            <div className="pjew-stat-block reveal" key={w.label}>
                                <span className="pjew-stat-block-value" data-countup={w.value}>{w.value}</span>
                                <strong>{w.label}</strong>
                                <p>{w.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DEPLOYMENT */}
            <section className="pjew-section pjew-section-light">
                <div className="pjew-container">
                    <div className="pjew-section-head reveal">
                        <span className="pjew-kicker kicker-gold">Deployment made easy</span>
                        <h2 className="pjew-h2">Nothing to migrate blind. <em>We build around your branches.</em></h2>
                    </div>
                    <div className="pjew-migration-grid">
                        {migrationSteps.map((m) => (
                            <div className="pjew-migration-step reveal" key={m.step}>
                                <span className="pjew-migration-number">{m.step}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={migrationInfoTiles} />
                </div>
            </section>

        </div>
    );
};

export default PrepJewellery;
