import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import "./PrepCommerce.css";
import useSEO from "../useSEO";
import {
    hero, problems, moduleGrid, spotlights, appAccess, appAccessInfoTiles, integrations,
    moreIntegrations, aiInsights, complianceItems, extraFeatures, whitelabelChecklist,
    replacedTools, replaceInfoTiles, migrationSteps, migrationInfoTiles, whyPrepseed,
} from "./PrepCommerceData";
import {
    DashboardMockup, StorefrontMockup, CartMockup, OrdersMockup, InventoryMockup,
    ChannelsMockup, ShippingMockup, MarketingMockup, ProfileMockup, ReviewsMockup,
    IntegrationsMockup, StoreHealthRing,
} from "./Mockups";

gsap.registerPlugin(ScrollTrigger);

const mockupMap = {
    dashboard: DashboardMockup,
    storefront: StorefrontMockup,
    cart: CartMockup,
    orders: OrdersMockup,
    inventory: InventoryMockup,
    channels: ChannelsMockup,
    shipping: ShippingMockup,
    marketing: MarketingMockup,
    profile: ProfileMockup,
    reviews: ReviewsMockup,
};

const InfoTiles = ({ items, onDark }) => (
    <div className={`pcom-info-tiles ${onDark ? "on-dark" : ""}`}>
        {items.map((it) => (
            <div className="pcom-info-tile" key={it.title}>
                <span className="pcom-info-tile-icon">{it.icon}</span>
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

const SCROLL_KEY = "pcom-scroll-y";

const PrepCommerce = () => {
    const pageRef = useRef(null);
    const location = useLocation();
    const navigationType = useNavigationType();

    useSEO({
        title: "PrepCommerce — AI-Native Commerce Operating System | Prepseed",
        description:
            "PrepCommerce unifies your storefront, inventory and orders across website, marketplaces, Instagram and WhatsApp — with payments, shipping, abandoned-cart recovery and AI insights built in. Whitelabeled, live in weeks.",
        keywords: "commerce operating system, multi channel ecommerce platform, whatsapp shop software, marketplace sync software, whitelabel ecommerce platform, PrepCommerce, Prepseed",
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
                tl.fromTo(".pcom-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
                    .fromTo(".pcom-hero-line", { yPercent: 115 }, { yPercent: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
                    .fromTo(".pcom-hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
                    .fromTo(".pcom-hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
                    .fromTo(".pcom-hero-stats", { opacity: 0, y: 20 }, {
                        opacity: 1, y: 0, duration: 0.6,
                        onComplete: () => document.querySelectorAll(".pcom-hero-stat-value[data-countup]").forEach(countUp),
                    }, "-=0.3")
                    .fromTo(".pcom-hero-visual", { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.9");

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

                document.querySelectorAll(".pcom-stat-block-value[data-countup]").forEach((el) => {
                    ScrollTrigger.create({
                        trigger: el,
                        start: "top 90%",
                        once: true,
                        onEnter: () => countUp(el),
                    });
                });

                if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                    const tiltEls = document.querySelectorAll(".pcom-tilt");
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
                        el._pcomCleanup = () => {
                            el.removeEventListener("pointermove", onMove);
                            el.removeEventListener("pointerleave", onLeave);
                        };
                    });
                }

                if (isDesktop) {
                    const wraps = gsap.utils.toArray(".pcom-stack-wrap:not(.is-last)");
                    wraps.forEach((wrap) => {
                        const item = wrap.querySelector(".pcom-stack-item");
                        const card = wrap.querySelector(".pcom-stack-card");
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
                    document.querySelectorAll(".pcom-tilt").forEach((el) => el._pcomCleanup && el._pcomCleanup());
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
        <div className="pcom-page" ref={pageRef}>
            {/* HERO */}
            <section className="pcom-hero pcom-fit">
                <div className="pcom-container pcom-hero-inner">
                    <div className="pcom-hero-copy">
                        <span className="pcom-eyebrow">{hero.eyebrow}</span>
                        <h1 className="pcom-hero-title">
                            <span className="pcom-hero-line-mask"><span className="pcom-hero-line">{hero.title[0]}</span></span>
                            <span className="pcom-hero-line-mask"><span className="pcom-hero-line">{hero.title[1]}</span></span>
                            <span className="pcom-hero-line-mask"><span className="pcom-hero-line pcom-accent">{hero.title[2]}</span></span>
                        </h1>
                        <div className="pcom-hero-sub">
                            <p>{hero.subtitle}</p>
                        </div>
                        <div className="pcom-hero-ctas">
                            <a href="tel:+919913382221" className="pcom-btn pcom-btn-primary">
                                Book a call <FiArrowRight />
                            </a>
                            <a href="#modules" className="pcom-btn pcom-btn-ghost">See what's inside</a>
                        </div>
                        <div className="pcom-hero-stats">
                            {hero.stats.map((s) => (
                                <div className="pcom-hero-stat" key={s.label}>
                                    <span className="pcom-hero-stat-value" data-countup={s.value}>{s.value}</span>
                                    <span className="pcom-hero-stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pcom-hero-visual pcom-tilt">
                        <DashboardMockup />
                    </div>
                </div>
                <div className="pcom-scroll-cue" aria-hidden="true"><span /></div>
            </section>

            {/* PROBLEM */}
            <section className="pcom-section">
                <div className="pcom-container">
                    <div className="pcom-section-head reveal">
                        <span className="pcom-kicker kicker-red">The problem</span>
                        <h2 className="pcom-h2">Every growing store runs on channels that <em>don't talk to each other</em>.</h2>
                    </div>
                    <div className="pcom-problem-grid">
                        {problems.map((p) => (
                            <Link to={`/products/prepcommerce/${p.slug}`} className="pcom-problem-card reveal" key={p.title}>
                                <span className="pcom-problem-icon">{p.icon}</span>
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION INTRO + MODULE GRID */}
            <section className="pcom-section pcom-section-light" id="modules">
                <div className="pcom-container">
                    <div className="pcom-section-head reveal">
                        <span className="pcom-kicker kicker-comm">Introducing PrepCommerce</span>
                        <h2 className="pcom-h2">One commerce engine. <em>Every channel, every order, every customer.</em></h2>
                        <p className="pcom-section-sub">
                            PrepCommerce connects your storefront, marketplaces and social channels into a single
                            catalog, inventory and order pipeline — with payments, shipping and AI insights built in.
                        </p>
                    </div>
                    <div className="pcom-module-grid">
                        {moduleGrid.map((m) => (
                            <Link to={`/products/prepcommerce/${m.slug}`} className="pcom-module-card reveal" key={m.title}>
                                <span className="pcom-module-icon">{m.icon}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SPOTLIGHTS — stack on top of each other on desktop as you scroll */}
            <div className="pcom-stack">
                {spotlights.map((s, i) => {
                    const Mockup = mockupMap[s.mockup];
                    const isLast = i === spotlights.length - 1;
                    return (
                        <div className={`pcom-stack-wrap ${isLast ? "is-last" : ""}`} key={s.id} id={s.id}>
                            <div className="pcom-stack-item" style={{ zIndex: 10 + i }}>
                                <div className="pcom-stack-card">
                                    <div className={`pcom-container pcom-spotlight ${s.reversed ? "reversed" : ""}`}>
                                        <div className="pcom-spotlight-copy reveal">
                                            <span className="pcom-kicker kicker-comm">{s.eyebrow}</span>
                                            <h3 className="pcom-h3">{s.title}</h3>
                                            <p className="pcom-spotlight-desc">{s.description}</p>
                                            <ul className="pcom-check-list">
                                                {s.bullets.map((b) => (
                                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pcom-spotlight-visual pcom-tilt reveal">
                                            <Mockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* STOREFRONT, SELLER APP & CUSTOMER APP */}
            <section className="pcom-section">
                <div className="pcom-container">
                    <div className="pcom-section-head reveal">
                        <span className="pcom-kicker kicker-comm">Storefront, seller app &amp; customer app</span>
                        <h2 className="pcom-h2">Shop from a phone. <em>Run the store from a phone.</em></h2>
                    </div>
                    <div className="pcom-access-grid">
                        {appAccess.map((a) => (
                            <div className="pcom-access-card reveal" key={a.title}>
                                <span className="pcom-access-icon">{a.icon}</span>
                                <h4>{a.title}</h4>
                                <p>{a.description}</p>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={appAccessInfoTiles} />
                </div>
            </section>

            {/* INTEGRATIONS */}
            <section className="pcom-section pcom-section-light" id="integrations">
                <div className="pcom-container">
                    <div className="pcom-section-head reveal">
                        <span className="pcom-kicker kicker-comm">Integrations</span>
                        <h2 className="pcom-h2">Fits into the stack you <em>already run.</em></h2>
                        <p className="pcom-section-sub">
                            PrepCommerce sits alongside your existing payment gateway, courier and accounting tools —
                            it doesn't ask you to replace them.
                        </p>
                    </div>
                    <div className="pcom-integration-layout">
                        <div className="pcom-integration-cards">
                            {integrations.map((it) => (
                                <div className="pcom-integration-card reveal" key={it.name}>
                                    <div className="pcom-integration-status"><span className="pcom-live-dot" />{it.status}</div>
                                    <h4>{it.name}</h4>
                                    <p>{it.description}</p>
                                </div>
                            ))}
                            <div className="pcom-more-integrations reveal">
                                <span>More on request:</span>
                                <div className="pcom-chip-row">
                                    {moreIntegrations.map((chip) => <span className="pcom-chip" key={chip}>{chip}</span>)}
                                </div>
                            </div>
                        </div>
                        <div className="pcom-side-demo reveal">
                            <span className="pcom-kicker kicker-green">Your stack, connected in one settings screen</span>
                            <div className="pcom-tilt"><IntegrationsMockup /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REPORTS & AI INSIGHTS */}
            <section className="pcom-section">
                <div className="pcom-container">
                    <div className="pcom-section-head reveal">
                        <span className="pcom-kicker kicker-comm">Reports &amp; AI insights</span>
                        <h2 className="pcom-h2">Commerce data that <em>explains itself</em>, in plain English.</h2>
                        <p className="pcom-section-sub">
                            PrepCommerce doesn't just record sales — it reads the patterns across products, channels
                            and customers, and tells owners what actually needs attention.
                        </p>
                    </div>
                    <div className="pcom-insights-layout">
                        <div className="pcom-score-card reveal">
                            <StoreHealthRing />
                            <strong>Company Health Index</strong>
                            <p>Rolling 7-day blend of conversion, fulfillment SLA and repeat-purchase rate.</p>
                        </div>
                        <div className="pcom-insight-cards">
                            {aiInsights.map((it) => (
                                <div className="pcom-insight-card reveal" key={it.title}>
                                    <span className="pcom-insight-icon">{it.icon}</span>
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

            {/* SECURITY & COMPLIANCE */}
            <section className="pcom-section pcom-section-light">
                <div className="pcom-container">
                    <div className="pcom-section-head reveal">
                        <span className="pcom-kicker kicker-green">Security &amp; compliance</span>
                        <h2 className="pcom-h2">Commerce infrastructure that takes payments <em>seriously.</em></h2>
                        <p className="pcom-section-sub">
                            Every order carries money and personal data — PrepCommerce is engineered to protect both
                            by default.
                        </p>
                    </div>
                    <div className="pcom-privacy-grid">
                        {complianceItems.map((it) => (
                            <div className="pcom-privacy-card reveal" key={it.title}>
                                <span className="pcom-privacy-icon">{it.icon}</span>
                                <h4>{it.title}</h4>
                                <p>{it.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALSO BUILT IN */}
            <section className="pcom-section">
                <div className="pcom-container">
                    <div className="pcom-section-head reveal">
                        <span className="pcom-kicker kicker-comm">Also built in</span>
                        <h2 className="pcom-h2">Everything else a growing store runs on.</h2>
                    </div>
                    <div className="pcom-extra-grid">
                        {extraFeatures.map((f) => (
                            <Link to={`/products/prepcommerce/${f.slug}`} className="pcom-extra-card reveal" key={f.title}>
                                <span className="pcom-module-icon">{f.icon}</span>
                                <h4>{f.title}</h4>
                                <p>{f.description}</p>
                                <ul className="pcom-mini-check">
                                    {f.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHITELABEL */}
            <section className="pcom-section pcom-section-light pcom-fit">
                <div className="pcom-container">
                    <div className="pcom-section-head reveal">
                        <span className="pcom-kicker kicker-comm">Whitelabel &amp; customization</span>
                        <h2 className="pcom-h2">This isn't our storefront with your logo on it. <em>It's your store, built by us.</em></h2>
                        <p className="pcom-section-sub">
                            Every PrepCommerce deployment ships under the client's own brand — logo, colors, domain
                            and invoices. Prepseed is the engine underneath, never the name on screen.
                        </p>
                    </div>
                    <div className="pcom-whitelabel-grid">
                        {whitelabelChecklist.map((w) => (
                            <div className="pcom-whitelabel-item reveal" key={w.title}>
                                <FiCheck className="pcom-check-dark" />
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
            <section className="pcom-section">
                <div className="pcom-container">
                    <div className="pcom-section-head reveal">
                        <span className="pcom-kicker kicker-red">One vendor, one platform</span>
                        <h2 className="pcom-h2">No third-party plugins. <em>No stitched-together stack.</em></h2>
                        <p className="pcom-section-sub">
                            Most stores pay for — and babysit — a cart-abandonment plugin, a loyalty app, a review
                            widget and a courier dashboard, all bolted onto their storefront. With PrepCommerce
                            there's nothing else to buy, connect or troubleshoot.
                        </p>
                    </div>
                    <div className="pcom-replace-grid">
                        {replacedTools.map((t) => (
                            <div className="pcom-replace-item reveal" key={t.from}>
                                <span className="pcom-replace-from">{t.from}</span>
                                <FiArrowRight className="pcom-replace-arrow" />
                                <span className="pcom-replace-to">{t.to}</span>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={replaceInfoTiles} />
                </div>
            </section>

            {/* WHY PREPSEED */}
            <section className="pcom-section pcom-section-light pcom-fit">
                <div className="pcom-container">
                    <div className="pcom-section-head reveal">
                        <span className="pcom-kicker kicker-comm">Why Prepseed</span>
                        <h2 className="pcom-h2">Proven at scale, <em>built to be yours.</em></h2>
                    </div>
                    <div className="pcom-stats-grid">
                        {whyPrepseed.map((w) => (
                            <div className="pcom-stat-block reveal" key={w.label}>
                                <span className="pcom-stat-block-value" data-countup={w.value}>{w.value}</span>
                                <strong>{w.label}</strong>
                                <p>{w.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DEPLOYMENT */}
            <section className="pcom-section pcom-section-light">
                <div className="pcom-container">
                    <div className="pcom-section-head reveal">
                        <span className="pcom-kicker kicker-comm">Deployment made easy</span>
                        <h2 className="pcom-h2">Nothing to migrate blind. <em>We build around your catalog.</em></h2>
                    </div>
                    <div className="pcom-migration-grid">
                        {migrationSteps.map((m) => (
                            <div className="pcom-migration-step reveal" key={m.step}>
                                <span className="pcom-migration-number">{m.step}</span>
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

export default PrepCommerce;
