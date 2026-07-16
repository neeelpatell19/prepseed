import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheck, FiX } from "react-icons/fi";
import "./PrepPrint.css";
import useSEO from "../useSEO";
import {
    hero, problems, moduleGrid, alsoIncluded, spotlights,
    whatsappOrder, whatsappNotes,
    aiInsightsIntro, marginScore, aiInsights,
    threeAppsIntro, threeApps,
    integrations, integrationsInfoTiles, moreIntegrations,
    complianceItems, extraFeatures,
    brandChips, whitelabelChecklist,
    replacedTools, replaceInfoTiles,
    migrationSteps, migrationInfoTiles,
    whyPrepseed,
} from "./PrepPrintData";
import {
    OrderJobMockup, QuoteMockup, ArtworkMockup, BillingMockup, InventoryMockup, PressScheduleMockup,
    CustomerHistoryMockup, VendorPurchaseMockup, DispatchMockup, WhatsAppOrderMockup,
} from "./Mockups";

gsap.registerPlugin(ScrollTrigger);

const mockupMap = {
    orderJob: OrderJobMockup,
    quote: QuoteMockup,
    artwork: ArtworkMockup,
    billing: BillingMockup,
    inventory: InventoryMockup,
    pressSchedule: PressScheduleMockup,
    customerHistory: CustomerHistoryMockup,
    vendorPurchase: VendorPurchaseMockup,
    dispatch: DispatchMockup,
};

const toneKicker = { indigo: "kicker-indigo", blue: "kicker-blue", green: "kicker-green", red: "kicker-red", purple: "kicker-purple" };

// Wraps the first occurrence of `part` inside `text` in <em> so a single
// data-driven sentence can carry an inline accent, same helper as the
// other product pages (see PrepJewellery.jsx for the full rationale).
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
    <div className={`pprint-info-tiles ${onDark ? "on-dark" : ""}`}>
        {items.map((it) => (
            <div className="pprint-info-tile" key={it.title}>
                <span className="pprint-info-tile-icon">{it.icon}</span>
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

const SCROLL_KEY = "pprint-scroll-y";

const PrepPrint = () => {
    const pageRef = useRef(null);
    const location = useLocation();
    const navigationType = useNavigationType();

    useSEO({
        title: "PrepPrint — Print Shop & Press Management ERP | Prepseed",
        description:
            "PrepPrint is a white-labeled printing & press management ERP — quotations, job tracking, design files, GST billing, stock and machine scheduling on one platform, running natively on web and mobile. Whitelabeled, live in weeks.",
        keywords: "print shop management software, press management erp, printing business software, print job tracking software, print shop billing software, PrepPrint, Prepseed",
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
                tl.fromTo(".pprint-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
                    .fromTo(".pprint-hero-line", { yPercent: 115 }, { yPercent: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
                    .fromTo(".pprint-hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
                    .fromTo(".pprint-hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
                    .fromTo(".pprint-hero-stats", { opacity: 0, y: 20 }, {
                        opacity: 1, y: 0, duration: 0.6,
                        onComplete: () => document.querySelectorAll(".pprint-hero-stat-value[data-countup]").forEach(countUp),
                    }, "-=0.3")
                    .fromTo(".pprint-hero-visual", { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.9");

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

                document.querySelectorAll(".pprint-stat-block-value[data-countup]").forEach((el) => {
                    ScrollTrigger.create({
                        trigger: el,
                        start: "top 90%",
                        once: true,
                        onEnter: () => countUp(el),
                    });
                });

                if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                    const tiltEls = document.querySelectorAll(".pprint-tilt");
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
                        el._pprintCleanup = () => {
                            el.removeEventListener("pointermove", onMove);
                            el.removeEventListener("pointerleave", onLeave);
                        };
                    });
                }

                if (isDesktop) {
                    const wraps = gsap.utils.toArray(".pprint-stack-wrap:not(.is-last)");
                    wraps.forEach((wrap) => {
                        const item = wrap.querySelector(".pprint-stack-item");
                        const card = wrap.querySelector(".pprint-stack-card");
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
                    document.querySelectorAll(".pprint-tilt").forEach((el) => el._pprintCleanup && el._pprintCleanup());
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
        <div className="pprint-page" ref={pageRef}>
            {/* HERO */}
            <section className="pprint-hero pprint-fit">
                <div className="pprint-container pprint-hero-inner">
                    <div className="pprint-hero-copy">
                        <span className="pprint-eyebrow">{hero.eyebrow}</span>
                        <h1 className="pprint-hero-title">
                            {hero.title.map((line, i) => (
                                <span className="pprint-hero-line-mask" key={line}>
                                    <span className={`pprint-hero-line ${i === hero.title.length - 1 ? "pprint-accent" : ""}`}>{line}</span>
                                </span>
                            ))}
                        </h1>
                        <div className="pprint-hero-sub">
                            <p>{hero.subtitle}</p>
                        </div>
                        <div className="pprint-hero-ctas">
                            <a href="tel:+919913382221" className="pprint-btn pprint-btn-primary">
                                Book a call <FiArrowRight />
                            </a>
                            <a href="#modules" className="pprint-btn pprint-btn-ghost">See what's inside</a>
                        </div>
                        <span className="pprint-hero-caption">{hero.caption}</span>
                        <div className="pprint-hero-stats">
                            {hero.stats.map((s) => (
                                <div className="pprint-hero-stat" key={s.label}>
                                    <span className="pprint-hero-stat-value" data-countup={s.value}>{s.value}</span>
                                    <span className="pprint-hero-stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pprint-hero-visual pprint-tilt">
                        <OrderJobMockup />
                    </div>
                </div>
                <div className="pprint-scroll-cue" aria-hidden="true"><span /></div>
            </section>

            {/* PROBLEM */}
            <section className="pprint-section">
                <div className="pprint-container">
                    <div className="pprint-section-head reveal">
                        <span className="pprint-kicker kicker-red">The problem</span>
                        <h2 className="pprint-h2">Print shops run on <em>job dockets and WhatsApp screenshots</em>, not a system.</h2>
                    </div>
                    <div className="pprint-problem-grid">
                        {problems.map((p) => (
                            <Link to={`/products/prepprint/${p.slug}`} className="pprint-problem-card reveal" key={p.title}>
                                <span className="pprint-problem-icon">{p.icon}</span>
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION INTRO + MODULE GRID */}
            <section className="pprint-section pprint-section-light" id="modules">
                <div className="pprint-container">
                    <div className="pprint-section-head reveal">
                        <span className="pprint-kicker kicker-indigo">Introducing PrepPrint</span>
                        <h2 className="pprint-h2"><em>One platform.</em> Every order, every press, every rupee.</h2>
                        <p className="pprint-section-sub">
                            PrepPrint brings quotations, job tracking, design files, billing and stock into a single
                            print shop workspace — built for owners, operators and customers alike.
                        </p>
                    </div>
                    <div className="pprint-module-grid">
                        {moduleGrid.map((m) => (
                            <Link to={`/products/prepprint/${m.slug}`} className="pprint-module-card reveal" key={m.title}>
                                <span className="pprint-module-icon">{m.icon}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="pprint-more-integrations reveal" style={{ marginTop: 28 }}>
                        <span>Also included in PrepPrint:</span>
                        <div className="pprint-chip-row">
                            {alsoIncluded.map((a) => (
                                <Link to={`/products/prepprint/${a.slug}`} className="pprint-chip" key={a.slug}>{a.label}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SPOTLIGHTS — stack on top of each other on desktop as you scroll */}
            <div className="pprint-stack">
                {spotlights.map((s, i) => {
                    const Mockup = mockupMap[s.mockup];
                    const isLast = i === spotlights.length - 1;
                    return (
                        <div className={`pprint-stack-wrap ${isLast ? "is-last" : ""}`} key={s.id} id={s.id}>
                            <div className="pprint-stack-item" style={{ zIndex: 10 + i }}>
                                <div className="pprint-stack-card">
                                    <div className={`pprint-container pprint-spotlight ${s.reversed ? "reversed" : ""}`}>
                                        <div className="pprint-spotlight-copy reveal">
                                            <span className={`pprint-kicker ${toneKicker[s.tone] || "kicker-indigo"}`}>{s.eyebrow}</span>
                                            <h3 className={`pprint-h3 pprint-h3-tone-${s.tone}`}><Highlighted text={s.title} part={s.accent} /></h3>
                                            <p className="pprint-spotlight-desc">{s.description}</p>
                                            <ul className="pprint-check-list">
                                                {s.bullets.map((b) => (
                                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pprint-spotlight-visual pprint-tilt reveal">
                                            <Mockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* WHATSAPP ORDER UPDATES — dark, standalone, not part of the stack */}
            <section className="pprint-section pprint-section-light">
                <div className="pprint-container">
                    <div className="pprint-spotlight">
                        <div className="pprint-spotlight-copy reveal">
                            <span className="pprint-kicker kicker-indigo">{whatsappOrder.kicker}</span>
                            <h2 className="pprint-h2"><Highlighted text={whatsappOrder.title} part={whatsappOrder.accent} /></h2>
                            <p className="pprint-section-sub">{whatsappOrder.subtitle}</p>
                        </div>
                        <div className="pprint-spotlight-visual pprint-tilt reveal">
                            <WhatsAppOrderMockup />
                        </div>
                    </div>
                    <div className="pprint-whitelabel-grid" style={{ marginTop: 40 }}>
                        {whatsappNotes.map((n) => (
                            <div className="pprint-whitelabel-item reveal" key={n.title}>
                                <FiCheck className="pprint-check-dark" />
                                <div>
                                    <strong>{n.title}</strong>
                                    <span>{n.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* REPORTS & AI INSIGHTS */}
            <section className="pprint-section">
                <div className="pprint-container">
                    <div className="pprint-section-head reveal">
                        <span className="pprint-kicker kicker-purple">{aiInsightsIntro.kicker}</span>
                        <h2 className="pprint-h2 pprint-h2-purple-em"><Highlighted text={aiInsightsIntro.title} part={aiInsightsIntro.accent} /></h2>
                        <p className="pprint-section-sub">{aiInsightsIntro.sub}</p>
                    </div>
                    <div className="pprint-insights-layout">
                        <div className="pprint-score-card reveal">
                            <span className="pprint-ring" style={{ "--pprint-ring-val": marginScore.value }}>
                                <span className="pprint-ring-inner"><b>{marginScore.value}%</b><span>{marginScore.label}</span></span>
                            </span>
                            <strong>{marginScore.title}</strong>
                            <p>{marginScore.sub}</p>
                        </div>
                        <div className="pprint-insight-cards">
                            {aiInsights.map((it) => (
                                <div className="pprint-insight-card reveal" key={it.title}>
                                    <span className="pprint-insight-icon">{it.icon}</span>
                                    <div>
                                        <h4>{it.title}</h4>
                                        <p>{it.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ONE PLATFORM, THREE APPS */}
            <section className="pprint-section pprint-section-light pprint-fit">
                <div className="pprint-container">
                    <div className="pprint-section-head reveal">
                        <span className="pprint-kicker kicker-indigo">{threeAppsIntro.kicker}</span>
                        <h2 className="pprint-h2">
                            Built for the <span className="pprint-accent">owner</span>, the operator and the customer.
                        </h2>
                    </div>
                    <div className="pprint-access-grid">
                        {threeApps.map((a) => (
                            <div className="pprint-access-card reveal" key={a.title}>
                                <span className="pprint-access-icon">{a.icon}</span>
                                <h4>{a.title}</h4>
                                <span style={{ fontSize: 12.5, color: "var(--pprint-muted)", fontWeight: 700 }}>{a.meta}</span>
                                <ul className="pprint-mini-check" style={{ marginTop: 12 }}>
                                    {a.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTEGRATIONS */}
            <section className="pprint-section" id="integrations">
                <div className="pprint-container">
                    <div className="pprint-section-head reveal">
                        <span className="pprint-kicker kicker-indigo">Integrations</span>
                        <h2 className="pprint-h2">Fits into the tools you <em>already use.</em></h2>
                        <p className="pprint-section-sub">
                            Native connections for payments, communication and logistics — no manual reconciliation, no re-typing.
                        </p>
                    </div>
                    <div className="pprint-integration-cards grid">
                        {integrations.map((it) => (
                            <div className="pprint-integration-card reveal" key={it.name}>
                                <div className="pprint-integration-status"><span className="pprint-live-dot" />{it.status}</div>
                                <h4>{it.name}</h4>
                                <p>{it.description}</p>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={integrationsInfoTiles} />
                    <div className="pprint-more-integrations reveal" style={{ marginTop: 28 }}>
                        <span>More integrations available on request:</span>
                        <div className="pprint-chip-row">
                            {moreIntegrations.map((chip) => <span className="pprint-chip" key={chip}>{chip}</span>)}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECURITY & DATA PRIVACY */}
            <section className="pprint-section pprint-section-light">
                <div className="pprint-container">
                    <div className="pprint-section-head reveal">
                        <span className="pprint-kicker kicker-blue">Security &amp; data privacy</span>
                        <h2 className="pprint-h2 pprint-h2-blue-em">Every design file and rate card, <em>kept exactly where it belongs.</em></h2>
                        <p className="pprint-section-sub">
                            PrepPrint is built around strict access controls and full auditability — customer artwork,
                            pricing and financial data stay visible only to the people who need them.
                        </p>
                    </div>
                    <div className="pprint-privacy-grid">
                        {complianceItems.map((it) => (
                            <div className="pprint-privacy-card reveal" key={it.title}>
                                <span className="pprint-privacy-icon">{it.icon}</span>
                                <h4>{it.title}</h4>
                                <p>{it.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALSO BUILT IN */}
            <section className="pprint-section">
                <div className="pprint-container">
                    <div className="pprint-section-head reveal">
                        <span className="pprint-kicker kicker-indigo">Also built in</span>
                        <h2 className="pprint-h2">Everything else a growing print shop runs on.</h2>
                    </div>
                    <div className="pprint-extra-grid">
                        {extraFeatures.map((f) => (
                            <Link to={`/products/prepprint/${f.slug}`} className="pprint-extra-card reveal" key={f.title}>
                                <span className="pprint-module-icon">{f.icon}</span>
                                <h4>{f.title}</h4>
                                <p>{f.description}</p>
                                <ul className="pprint-mini-check">
                                    {f.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHITELABEL & MULTI-BRANCH */}
            <section className="pprint-section pprint-section-light pprint-fit">
                <div className="pprint-container">
                    <div className="pprint-section-head reveal">
                        <span className="pprint-kicker kicker-indigo">Whitelabel &amp; multi-branch</span>
                        <h2 className="pprint-h2">This isn't our platform with your logo. <em>It's your print shop's platform, built by us.</em></h2>
                        <p className="pprint-section-sub">
                            Every PrepPrint deployment ships under your own brand — logo, colors, domain and apps. Run
                            one counter or twenty branches under a single franchise console, with Prepseed as the
                            engine underneath.
                        </p>
                    </div>
                    <div className="pprint-brand-grid">
                        {brandChips.map((b) => (
                            <div className="pprint-brand-card reveal" key={b.name}>
                                <div className="pprint-brand-name">
                                    <span className="pprint-brand-swatch" style={{ background: b.color }} />
                                    {b.name}
                                </div>
                                <div className="pprint-brand-skel" />
                                <div className="pprint-brand-skel short" />
                                <span className="pprint-brand-chip" style={{ background: b.color }} />
                            </div>
                        ))}
                    </div>
                    <div className="pprint-whitelabel-grid">
                        {whitelabelChecklist.map((w) => (
                            <div className="pprint-whitelabel-item reveal" key={w.title}>
                                <FiCheck className="pprint-check-dark" />
                                <div>
                                    <strong>{w.title}</strong>
                                    <span>{w.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ONE VENDOR, ONE PLATFORM */}
            <section className="pprint-section">
                <div className="pprint-container">
                    <div className="pprint-section-head reveal">
                        <span className="pprint-kicker kicker-red">One vendor, one platform</span>
                        <h2 className="pprint-h2">No third-party tools. <em>No stitched-together stack.</em></h2>
                        <p className="pprint-section-sub">
                            Most print shops juggle a billing app, a WhatsApp group, a paper notebook and a scattered
                            folder of design files, none of which talk to each other. With PrepPrint there's nothing
                            else to buy, connect or troubleshoot.
                        </p>
                    </div>
                    <div className="pprint-replace-grid">
                        {replacedTools.map((t) => (
                            <div className="pprint-replace-item reveal" key={t.from}>
                                <FiX className="pprint-replace-x" />
                                <span className="pprint-replace-from">{t.from}</span>
                                <FiArrowRight className="pprint-replace-arrow" />
                                <span className="pprint-replace-to">{t.to}</span>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={replaceInfoTiles} />
                </div>
            </section>

            {/* SWITCHING MADE EASY */}
            <section className="pprint-section pprint-section-light">
                <div className="pprint-container">
                    <div className="pprint-section-head reveal">
                        <span className="pprint-kicker kicker-indigo">Switching made easy</span>
                        <h2 className="pprint-h2">Still on dockets and spreadsheets? We <em>migrate everything</em> — you just watch it happen.</h2>
                        <p className="pprint-section-sub">
                            Switching shouldn't mean re-entering years of customer and rate data. Hand us access and
                            our team migrates every customer record, rate card and stock ledger into PrepPrint —
                            safely, without disrupting a single order.
                        </p>
                    </div>
                    <div className="pprint-migration-grid">
                        {migrationSteps.map((m) => (
                            <div className="pprint-migration-step reveal" key={m.step}>
                                <span className="pprint-migration-number">{m.step}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={migrationInfoTiles} />
                </div>
            </section>

            {/* WHY PREPSEED */}
            <section className="pprint-section pprint-section-light pprint-fit">
                <div className="pprint-container">
                    <div className="pprint-section-head reveal">
                        <span className="pprint-kicker kicker-indigo">Why Prepseed</span>
                        <h2 className="pprint-h2">Proven at scale, <em>built to be yours.</em></h2>
                        <p className="pprint-section-sub">
                            Prepseed is an AI-first, whitelabel software studio based in Ahmedabad, India — building
                            CRM, HRMS and custom platforms for EdTech, Real Estate, Healthcare and Enterprise teams.
                            PrepPrint runs on the same engine already trusted by 400,000+ users, so you get a mature,
                            battle-tested product from day one — not a first version.
                        </p>
                    </div>
                    <div className="pprint-stats-grid">
                        {whyPrepseed.map((w) => (
                            <div className="pprint-stat-block reveal" key={w.label}>
                                <span className="pprint-stat-block-value" data-countup={w.value}>{w.value}</span>
                                <strong>{w.label}</strong>
                                <p>{w.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PrepPrint;
