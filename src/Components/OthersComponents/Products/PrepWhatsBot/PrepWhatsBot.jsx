import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import "./PrepWhatsBot.css";
import useSEO from "../useSEO";
import {
    hero, problems, moduleGrid, spotlights, integrations, moreIntegrations,
    roles, extraFeatures, complianceItems, whitelabelChecklist, replacedTools,
    migrationSteps, whyPrepseed,
} from "./PrepWhatsBotData";
import {
    QrConnectMockup, KnowledgeBaseMockup, AiReplyMockup, FlowBuilderMockup,
    BulkCampaignsMockup, SharedInboxMockup, TeamRolesMockup, AnalyticsMockup,
    IntegrationsMockup,
} from "./Mockups";

gsap.registerPlugin(ScrollTrigger);

const mockupMap = {
    connect: QrConnectMockup,
    knowledgeBase: KnowledgeBaseMockup,
    aiReply: AiReplyMockup,
    flowBuilder: FlowBuilderMockup,
    bulkCampaigns: BulkCampaignsMockup,
    sharedInbox: SharedInboxMockup,
    teamRoles: TeamRolesMockup,
    analytics: AnalyticsMockup,
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

const SCROLL_KEY = "pwb-scroll-y";

const PrepWhatsBot = () => {
    const pageRef = useRef(null);
    const location = useLocation();

    useSEO({
        title: "PrepWhatBot — AI WhatsApp Automation & Bulk Campaigns | Prepseed",
        description:
            "PrepWhatBot turns your WhatsApp number into an AI-trained rep — instant auto-replies grounded in your own content, a no-code flow builder, compliant bulk campaigns and a shared inbox with human handoff. Whitelabeled, live in weeks.",
        keywords: "WhatsApp automation, AI WhatsApp bot, WhatsApp Business API, bulk WhatsApp campaigns, WhatsApp chatbot, no-code flow builder, whitelabel WhatsApp bot, PrepWhatBot, Prepseed",
    });

    // See RealEstateCRM.jsx for the full rationale behind this restore
    // logic — same GSAP-pin-vs-scroll-position race applies here.
    useEffect(() => {
        // Back/forward navigation (e.g. "Back to overview" from a detail
        // page, or the browser back button) should land wherever the user
        // actually was — a scrolled-down anchor, mid-scroll on the grid,
        // wherever — not jump back to the top. Only force scroll-to-top on
        // a fresh PUSH (a nav-bar click, a card link from elsewhere), and
        // only force scroll-to-anchor when the URL actually names one.
        //
        // navigationType (react-router's useNavigationType) looks like the
        // obvious signal for "was this a PUSH or a POP", but it's unreliable
        // here: AnimatePresence's mode="wait" delays this page's mount until
        // the previous page's exit animation finishes, and by the time this
        // effect actually runs, navigationType reads "POP" even for a plain
        // forward nav-bar click (confirmed empirically — a real click that
        // only ever calls history.pushState, never popstate, still lands
        // here with navigationType === "POP"). Comparing history.state.idx
        // instead — the same primitive DetailPage.jsx's "Back to overview"
        // already trusts for this exact question — isn't subject to that
        // delayed-mount timing issue: idx only decreases on a genuine
        // backward step, so a fresh forward click (idx always increases)
        // can never be mistaken for one.
        const currentIdx = window.history.state && typeof window.history.state.idx === "number"
            ? window.history.state.idx
            : null;
        const saved = (() => {
            const raw = sessionStorage.getItem(SCROLL_KEY);
            if (!raw) return null;
            try {
                return JSON.parse(raw);
            } catch {
                return null;
            }
        })();
        const isGenuineBackStep = saved && currentIdx !== null && saved.idx !== null && currentIdx <= saved.idx;

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

        if (isGenuineBackStep) {
            return settleScrollTo(saved.y);
        }

        if (location.hash) {
            const id = location.hash.slice(1);
            requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
            });
            return;
        }

        return settleScrollTo(0, { hide: false });
    }, [location.hash, location.pathname]);

    useEffect(() => {
        const onClickCapture = (e) => {
            if (e.target.closest("a")) {
                const idx = window.history.state && typeof window.history.state.idx === "number"
                    ? window.history.state.idx
                    : null;
                sessionStorage.setItem(SCROLL_KEY, JSON.stringify({ y: window.scrollY, idx }));
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
                tl.fromTo(".pwb-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
                    .fromTo(".pwb-hero-line", { yPercent: 115 }, { yPercent: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
                    .fromTo(".pwb-hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
                    .fromTo(".pwb-hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
                    .fromTo(".pwb-hero-stats", { opacity: 0, y: 20 }, {
                        opacity: 1, y: 0, duration: 0.6,
                        onComplete: () => document.querySelectorAll(".pwb-hero-stat-value[data-countup]").forEach(countUp),
                    }, "-=0.3")
                    .fromTo(".pwb-hero-visual", { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.9");

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

                document.querySelectorAll(".pwb-stat-block-value[data-countup]").forEach((el) => {
                    ScrollTrigger.create({
                        trigger: el,
                        start: "top 90%",
                        once: true,
                        onEnter: () => countUp(el),
                    });
                });

                if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                    const tiltEls = document.querySelectorAll(".pwb-tilt");
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
                        el._pwbCleanup = () => {
                            el.removeEventListener("pointermove", onMove);
                            el.removeEventListener("pointerleave", onLeave);
                        };
                    });
                }

                if (isDesktop) {
                    const wraps = gsap.utils.toArray(".pwb-stack-wrap:not(.is-last)");
                    wraps.forEach((wrap) => {
                        const item = wrap.querySelector(".pwb-stack-item");
                        const card = wrap.querySelector(".pwb-stack-card");
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
                    document.querySelectorAll(".pwb-tilt").forEach((el) => el._pwbCleanup && el._pwbCleanup());
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
        <div className="pwb-page" ref={pageRef}>
            {/* HERO */}
            <section className="pwb-hero pwb-fit">
                <div className="pwb-container pwb-hero-inner">
                    <div className="pwb-hero-copy">
                        <span className="pwb-eyebrow">{hero.eyebrow}</span>
                        <h1 className="pwb-hero-title">
                            <span className="pwb-hero-line-mask"><span className="pwb-hero-line">{hero.title[0]}</span></span>
                            <span className="pwb-hero-line-mask"><span className="pwb-hero-line">{hero.title[1]}</span></span>
                            <span className="pwb-hero-line-mask"><span className="pwb-hero-line pwb-accent">{hero.title[2]}</span></span>
                        </h1>
                        <div className="pwb-hero-sub">
                            <p>{hero.subtitle}</p>
                        </div>
                        <div className="pwb-hero-ctas">
                            <a href="tel:+919913382221" className="pwb-btn pwb-btn-primary">
                                Book a call <FiArrowRight />
                            </a>
                            <a
                                href="#modules"
                                className="pwb-btn pwb-btn-ghost"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                See what's inside
                            </a>
                        </div>
                        <div className="pwb-hero-stats">
                            {hero.stats.map((s) => (
                                <div className="pwb-hero-stat" key={s.label}>
                                    <span className="pwb-hero-stat-value" data-countup={s.value}>{s.value}</span>
                                    <span className="pwb-hero-stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pwb-hero-visual pwb-tilt">
                        <AiReplyMockup />
                    </div>
                </div>
                <div className="pwb-scroll-cue" aria-hidden="true"><span /></div>
            </section>

            {/* PROBLEM */}
            <section className="pwb-section">
                <div className="pwb-container">
                    <div className="pwb-section-head reveal">
                        <span className="pwb-kicker kicker-red">The problem</span>
                        <h2 className="pwb-h2">Your best leads message you on WhatsApp — and <em>wait</em>.</h2>
                    </div>
                    <div className="pwb-problem-grid">
                        {problems.map((p) => (
                            <Link to={`/products/prepwhatsbot/${p.slug}`} className="pwb-problem-card reveal" key={p.title}>
                                <span className="pwb-problem-icon">{p.icon}</span>
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION INTRO + MODULE GRID */}
            <section className="pwb-section pwb-section-light" id="modules">
                <div className="pwb-container">
                    <div className="pwb-section-head reveal">
                        <span className="pwb-kicker kicker-wa">Introducing PrepWhatBot</span>
                        <h2 className="pwb-h2">One AI bot. <em>Every enquiry, every hour, every campaign.</em></h2>
                        <p className="pwb-section-sub">
                            PrepWhatBot connects to your WhatsApp number, learns from your own website and documents,
                            replies instantly around the clock, and lets your team run compliant bulk campaigns — all
                            from one dashboard.
                        </p>
                    </div>
                    <div className="pwb-module-grid">
                        {moduleGrid.map((m) => (
                            <Link to={`/products/prepwhatsbot/${m.slug}`} className="pwb-module-card reveal" key={m.title}>
                                <span className="pwb-module-icon">{m.icon}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SPOTLIGHTS — stack on top of each other on desktop as you scroll */}
            <div className="pwb-stack">
                {spotlights.map((s, i) => {
                    const Mockup = mockupMap[s.mockup];
                    const isLast = i === spotlights.length - 1;
                    return (
                        <div className={`pwb-stack-wrap ${isLast ? "is-last" : ""}`} key={s.id} id={s.id}>
                            <div className="pwb-stack-item" style={{ zIndex: 10 + i }}>
                                <div className="pwb-stack-card">
                                    <div className={`pwb-container pwb-spotlight ${s.reversed ? "reversed" : ""}`}>
                                        <div className="pwb-spotlight-copy reveal">
                                            <span className="pwb-kicker kicker-wa">{s.eyebrow}</span>
                                            <h3 className="pwb-h3">{s.title}</h3>
                                            <p className="pwb-spotlight-desc">{s.description}</p>
                                            <ul className="pwb-check-list">
                                                {s.bullets.map((b) => (
                                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pwb-spotlight-visual pwb-tilt reveal">
                                            <Mockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CRM INTEGRATIONS */}
            <section className="pwb-section pwb-section-light" id="integrations">
                <div className="pwb-container">
                    <div className="pwb-section-head reveal">
                        <span className="pwb-kicker kicker-wa">CRM Integrations</span>
                        <h2 className="pwb-h2">Every WhatsApp lead, already in <em>your CRM.</em></h2>
                        <p className="pwb-section-sub">
                            Native connections to the tools your team already runs on — no manual exports, no re-typing
                            leads.
                        </p>
                    </div>
                    <div className="pwb-integration-layout">
                        <div className="pwb-integration-cards">
                            {integrations.map((it) => (
                                <div className="pwb-integration-card reveal" key={it.name}>
                                    <div className="pwb-integration-status"><span className="pwb-live-dot" />{it.status}</div>
                                    <h4>{it.name}</h4>
                                    <p>{it.description}</p>
                                </div>
                            ))}
                            <div className="pwb-more-integrations reveal">
                                <span>More on request:</span>
                                <div className="pwb-chip-row">
                                    {moreIntegrations.map((chip) => <span className="pwb-chip" key={chip}>{chip}</span>)}
                                </div>
                            </div>
                        </div>
                        <div className="pwb-whatsapp-demo reveal">
                            <span className="pwb-kicker kicker-green">Your field mapping, one settings screen</span>
                            <div className="pwb-tilt"><IntegrationsMockup /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROLES */}
            <section className="pwb-section">
                <div className="pwb-container">
                    <div className="pwb-section-head reveal">
                        <span className="pwb-kicker kicker-wa">Team &amp; roles</span>
                        <h2 className="pwb-h2">Multiple agents. One number. <em>Zero confusion.</em></h2>
                    </div>
                    <div className="pwb-roles-grid pwb-roles-3">
                        {roles.map((r) => (
                            <Link to={`/products/prepwhatsbot/${r.slug}`} className="pwb-role-card reveal" key={r.name}>
                                <span className="pwb-role-icon">{r.icon}</span>
                                <h4>{r.name}</h4>
                                <p>{r.description}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="pwb-callout reveal">
                        <FiCheck className="pwb-callout-icon" />
                        <div>
                            <strong>No shared logins, no crossed wires.</strong>
                            <span>Owners see every conversation; agents only ever see the chats assigned to them.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXTRA FEATURES */}
            <section className="pwb-section pwb-section-light">
                <div className="pwb-container">
                    <div className="pwb-section-head reveal">
                        <span className="pwb-kicker kicker-wa">Also built in</span>
                        <h2 className="pwb-h2">Everything else a WhatsApp desk runs on.</h2>
                    </div>
                    <div className="pwb-extra-grid">
                        {extraFeatures.map((f) => (
                            <Link to={`/products/prepwhatsbot/${f.slug}`} className="pwb-extra-card reveal" key={f.title}>
                                <span className="pwb-module-icon">{f.icon}</span>
                                <h4>{f.title}</h4>
                                <p>{f.description}</p>
                                <ul className="pwb-mini-check">
                                    {f.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPLIANCE */}
            <section className="pwb-section">
                <div className="pwb-container">
                    <div className="pwb-section-head reveal">
                        <span className="pwb-kicker kicker-green">Compliance &amp; safety</span>
                        <h2 className="pwb-h2">Automated at scale — <em>without the ban risk.</em></h2>
                        <p className="pwb-section-sub">
                            Every message, bot or human, runs through the official WhatsApp Business API — nothing
                            here depends on an unofficial tool that could go dark overnight.
                        </p>
                    </div>
                    <div className="pwb-privacy-grid">
                        {complianceItems.map((it) => (
                            <div className="pwb-privacy-card reveal" key={it.title}>
                                <span className="pwb-privacy-icon">{it.icon}</span>
                                <h4>{it.title}</h4>
                                <p>{it.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHITELABEL */}
            <section className="pwb-section pwb-section-light pwb-fit">
                <div className="pwb-container">
                    <div className="pwb-section-head reveal">
                        <span className="pwb-kicker kicker-wa">Whitelabel &amp; customization</span>
                        <h2 className="pwb-h2">This isn't our bot on your number. <em>It's your bot, built by us.</em></h2>
                        <p className="pwb-section-sub">
                            Every PrepWhatBot deployment ships under the client's own brand — dashboard, WhatsApp
                            business profile, reports and PDFs. Prepseed is the engine underneath, never the name on
                            screen.
                        </p>
                    </div>
                    <div className="pwb-whitelabel-grid">
                        {whitelabelChecklist.map((w) => (
                            <div className="pwb-whitelabel-item reveal" key={w.title}>
                                <FiCheck className="pwb-check-dark" />
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
            <section className="pwb-section">
                <div className="pwb-container">
                    <div className="pwb-section-head reveal">
                        <span className="pwb-kicker kicker-red">One vendor, one platform</span>
                        <h2 className="pwb-h2">No third-party tools. <em>No stitched-together stack.</em></h2>
                        <p className="pwb-section-sub">
                            Most teams pay for — and babysit — a chatbot tool, a broadcast tool and a helpdesk, none of
                            which talk to each other. With PrepWhatBot there's nothing else to buy, connect or
                            troubleshoot.
                        </p>
                    </div>
                    <div className="pwb-replace-grid">
                        {replacedTools.map((t) => (
                            <div className="pwb-replace-item reveal" key={t.from}>
                                <span className="pwb-replace-from">{t.from}</span>
                                <FiArrowRight className="pwb-replace-arrow" />
                                <span className="pwb-replace-to">{t.to}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY PREPSEED */}
            <section className="pwb-section pwb-section-light pwb-fit">
                <div className="pwb-container">
                    <div className="pwb-section-head reveal">
                        <span className="pwb-kicker kicker-wa">Why Prepseed</span>
                        <h2 className="pwb-h2">Proven at scale, <em>built to be yours.</em></h2>
                    </div>
                    <div className="pwb-stats-grid">
                        {whyPrepseed.map((w) => (
                            <div className="pwb-stat-block reveal" key={w.label}>
                                <span className="pwb-stat-block-value" data-countup={w.value}>{w.value}</span>
                                <strong>{w.label}</strong>
                                <p>{w.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MIGRATION */}
            <section className="pwb-section pwb-section-light">
                <div className="pwb-container">
                    <div className="pwb-section-head reveal">
                        <span className="pwb-kicker kicker-wa">Switching made easy</span>
                        <h2 className="pwb-h2">Already on another WhatsApp tool? We <em>migrate everything</em> — you just watch it happen.</h2>
                    </div>
                    <div className="pwb-migration-grid">
                        {migrationSteps.map((m) => (
                            <div className="pwb-migration-step reveal" key={m.step}>
                                <span className="pwb-migration-number">{m.step}</span>
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

export default PrepWhatsBot;
