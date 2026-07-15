import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheck, FiPhoneCall, FiMail, FiGlobe, FiMapPin } from "react-icons/fi";
import "./PrepDesk.css";
import {
    hero, problems, moduleGrid, spotlights, osPlatforms, osInfoTiles, integrations,
    moreIntegrations, integrationsInfoTiles, aiScore, aiInsights, roles, privacyItems,
    extraFeatures, whitelabelChecklist, replacedTools, replaceInfoTiles, migrationSteps,
    migrationInfoTiles, whyPrepseed, contact,
} from "./PrepDeskData";
import {
    DashboardMockup, TimeTrackerMockup, AppUsageMockup, ScreenshotsMockup, AttendanceMockup,
    ProjectsMockup, IntegrationsMockup,
} from "./Mockups";

gsap.registerPlugin(ScrollTrigger);

const mockupMap = {
    dashboard: DashboardMockup,
    timeTracker: TimeTrackerMockup,
    appUsage: AppUsageMockup,
    screenshots: ScreenshotsMockup,
    attendance: AttendanceMockup,
    projects: ProjectsMockup,
};

const Blobs = ({ variant = "a" }) => (
    <div className={`pdsk-blobs pdsk-blobs-${variant}`} aria-hidden="true">
        <span className="pdsk-blob pdsk-blob-1" />
        <span className="pdsk-blob pdsk-blob-2" />
    </div>
);

const InfoTiles = ({ items, onDark }) => (
    <div className={`pdsk-info-tiles ${onDark ? "on-dark" : ""}`}>
        {items.map((it) => (
            <div className="pdsk-info-tile" key={it.title}>
                <span className="pdsk-info-tile-icon">{it.icon}</span>
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

const SCROLL_KEY = "pdsk-scroll-y";

const PrepDesk = () => {
    const pageRef = useRef(null);
    const location = useLocation();
    const navigationType = useNavigationType();

    // See RealEstateCRM.jsx for the detailed rationale behind this
    // back/forward scroll-restoration dance — same GSAP pin-recalculation
    // quirk applies here since this page uses the identical pinned
    // module-stack technique.
    useEffect(() => {
        if (navigationType === "POP" && sessionStorage.getItem(SCROLL_KEY) !== null) {
            const y = parseInt(sessionStorage.getItem(SCROLL_KEY), 10);
            const el = pageRef.current;
            if (el) el.style.opacity = "0";

            let attempts = 0;
            let stableChecks = 0;
            const reveal = () => {
                if (!el) return;
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
                if (el) {
                    el.style.opacity = "";
                    el.style.transition = "";
                }
            };
        }

        if (location.hash) {
            const id = location.hash.slice(1);
            requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView();
            });
            return;
        }

        window.scrollTo(0, 0);
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
                tl.fromTo(".pdsk-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
                    .fromTo(".pdsk-hero-line", { yPercent: 115 }, { yPercent: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
                    .fromTo(".pdsk-hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
                    .fromTo(".pdsk-hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
                    .fromTo(".pdsk-hero-stats", { opacity: 0, y: 20 }, {
                        opacity: 1, y: 0, duration: 0.6,
                        onComplete: () => document.querySelectorAll(".pdsk-hero-stat-value[data-countup]").forEach(countUp),
                    }, "-=0.3")
                    .fromTo(".pdsk-hero-visual", { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.9");

                gsap.to(".pdsk-hero-grid", {
                    yPercent: 22,
                    ease: "none",
                    scrollTrigger: { trigger: ".pdsk-hero", start: "top top", end: "bottom top", scrub: true },
                });

                gsap.utils.toArray(".pdsk-blob").forEach((blob, i) => {
                    gsap.to(blob, {
                        x: i % 2 === 0 ? 40 : -30,
                        y: i % 2 === 0 ? -30 : 40,
                        duration: 8 + i * 2,
                        ease: "sine.inOut",
                        yoyo: true,
                        repeat: -1,
                    });
                });

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

                document.querySelectorAll(".pdsk-stat-block-value[data-countup]").forEach((el) => {
                    ScrollTrigger.create({
                        trigger: el,
                        start: "top 90%",
                        once: true,
                        onEnter: () => countUp(el),
                    });
                });

                if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                    const tiltEls = document.querySelectorAll(".pdsk-tilt");
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
                        el._pdskCleanup = () => {
                            el.removeEventListener("pointermove", onMove);
                            el.removeEventListener("pointerleave", onLeave);
                        };
                    });
                }

                if (isDesktop) {
                    const wraps = gsap.utils.toArray(".pdsk-stack-wrap:not(.is-last)");
                    wraps.forEach((wrap) => {
                        const item = wrap.querySelector(".pdsk-stack-item");
                        const card = wrap.querySelector(".pdsk-stack-card");
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
                    document.querySelectorAll(".pdsk-tilt").forEach((el) => el._pdskCleanup && el._pdskCleanup());
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
        <div className="pdsk-page" ref={pageRef}>
            {/* HERO */}
            <section className="pdsk-hero pdsk-fit">
                <div className="pdsk-hero-grid" />
                <Blobs variant="hero" />
                <div className="pdsk-container pdsk-hero-inner">
                    <div className="pdsk-hero-copy">
                        <span className="pdsk-eyebrow">{hero.eyebrow}</span>
                        <h1 className="pdsk-hero-title">
                            <span className="pdsk-hero-line-mask"><span className="pdsk-hero-line">{hero.title[0]}</span></span>
                            <span className="pdsk-hero-line-mask"><span className="pdsk-hero-line">{hero.title[1]}</span></span>
                            <span className="pdsk-hero-line-mask"><span className="pdsk-hero-line pdsk-accent">{hero.title[2]}</span></span>
                        </h1>
                        <div className="pdsk-hero-sub">
                            <p>{hero.subtitle}</p>
                        </div>
                        <div className="pdsk-hero-ctas">
                            <a href="tel:+919913382221" className="pdsk-btn pdsk-btn-primary">
                                Book a call <FiArrowRight />
                            </a>
                            <a href="#modules" className="pdsk-btn pdsk-btn-ghost">See what's inside</a>
                        </div>
                        <div className="pdsk-hero-stats">
                            {hero.stats.map((s) => (
                                <div className="pdsk-hero-stat" key={s.label}>
                                    <span className="pdsk-hero-stat-value" data-countup={s.value}>{s.value}</span>
                                    <span className="pdsk-hero-stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pdsk-hero-visual pdsk-tilt">
                        <DashboardMockup />
                    </div>
                </div>
                <div className="pdsk-scroll-cue" aria-hidden="true"><span /></div>
            </section>

            {/* PROBLEM */}
            <section className="pdsk-section">
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-red">The problem</span>
                        <h2 className="pdsk-h2">Hybrid teams run on <em>guesswork</em>, not data.</h2>
                    </div>
                    <div className="pdsk-problem-grid">
                        {problems.map((p) => (
                            <Link to={`/products/prepdesk/${p.slug}`} className="pdsk-problem-card reveal" key={p.title}>
                                <span className="pdsk-problem-icon">{p.icon}</span>
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION INTRO + MODULE GRID */}
            <section className="pdsk-section pdsk-section-light" id="modules">
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-blue">Introducing PrepDesk</span>
                        <h2 className="pdsk-h2">One platform. <em>Every hour, every app, every team member.</em></h2>
                        <p className="pdsk-section-sub">
                            PrepDesk brings automatic time tracking, attendance, productivity monitoring and AI reporting into a
                            single workforce workspace — running natively on every OS.
                        </p>
                    </div>
                    <div className="pdsk-module-grid">
                        {moduleGrid.map((m) => (
                            <Link to={`/products/prepdesk/${m.slug}`} className="pdsk-module-card reveal" key={m.title}>
                                <span className="pdsk-module-icon">{m.icon}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SPOTLIGHTS — stack on top of each other on desktop as you scroll */}
            <div className="pdsk-stack">
                {spotlights.map((s, i) => {
                    const Mockup = mockupMap[s.mockup];
                    const isLast = i === spotlights.length - 1;
                    return (
                        <div className={`pdsk-stack-wrap ${isLast ? "is-last" : ""}`} key={s.id} id={s.id}>
                            <div className="pdsk-stack-item" style={{ zIndex: 10 + i }}>
                                <div className="pdsk-stack-card">
                                    <div className={`pdsk-container pdsk-spotlight ${s.reversed ? "reversed" : ""}`}>
                                        <div className="pdsk-spotlight-copy reveal">
                                            <span className="pdsk-kicker kicker-blue">{s.eyebrow}</span>
                                            <h3 className="pdsk-h3">{s.title}</h3>
                                            <p className="pdsk-spotlight-desc">{s.description}</p>
                                            <ul className="pdsk-check-list">
                                                {s.bullets.map((b) => (
                                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pdsk-spotlight-visual pdsk-tilt reveal">
                                            <Mockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CROSS-PLATFORM */}
            <section className="pdsk-section" id="platforms">
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-blue">One app. Every operating system.</span>
                        <h2 className="pdsk-h2">Native agents for <em>Windows, Mac & Linux</em> — not a browser plugin.</h2>
                        <p className="pdsk-section-sub">
                            Whatever your team runs, PrepDesk runs on it. Same features, same accuracy, same lightweight
                            footprint — across every machine in the company.
                        </p>
                    </div>
                    <div className="pdsk-os-grid">
                        {osPlatforms.map((os) => (
                            <div className="pdsk-os-card reveal" key={os.name}>
                                <span className="pdsk-os-icon">{os.icon}</span>
                                <h4>{os.name}</h4>
                                <span className="pdsk-os-sub">{os.sub}</span>
                                <ul className="pdsk-os-list">
                                    {os.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={osInfoTiles} />
                </div>
            </section>

            {/* INTEGRATIONS */}
            <section className="pdsk-section pdsk-section-light" id="integrations">
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-blue">Integrations</span>
                        <h2 className="pdsk-h2">Fits into the stack you <em>already use.</em></h2>
                    </div>
                    <div className="pdsk-integration-layout">
                        <div className="pdsk-integration-cards">
                            {integrations.map((it) => (
                                <div className="pdsk-integration-card reveal" key={it.name}>
                                    <div className="pdsk-integration-status"><span className="pdsk-live-dot" />{it.status}</div>
                                    <h4>{it.name}</h4>
                                    <p>{it.description}</p>
                                </div>
                            ))}
                            <div className="pdsk-more-integrations reveal">
                                <span>More on request:</span>
                                <div className="pdsk-chip-row">
                                    {moreIntegrations.map((chip) => <span className="pdsk-chip" key={chip}>{chip}</span>)}
                                </div>
                            </div>
                        </div>
                        <div className="pdsk-side-demo reveal">
                            <span className="pdsk-kicker kicker-green">Connected accounts, at a glance</span>
                            <div className="pdsk-tilt"><IntegrationsMockup /></div>
                        </div>
                    </div>
                    <InfoTiles items={integrationsInfoTiles} />
                </div>
            </section>

            {/* AI INSIGHTS & REPORTING */}
            <section className="pdsk-section">
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-blue">AI Insights & Reporting</span>
                        <h2 className="pdsk-h2">Data that <em>explains itself</em>, in plain English.</h2>
                        <p className="pdsk-section-sub">
                            PrepDesk doesn't just log activity — it reads the patterns and tells managers what actually needs
                            attention, before it becomes a problem.
                        </p>
                    </div>
                    <div className="pdsk-insights-layout">
                        <div className="pdsk-score-card reveal" style={{ "--pdsk-score": aiScore.value }}>
                            <span className="pdsk-score-ring"><span className="pdsk-score-value">{aiScore.value}%</span></span>
                            <strong>{aiScore.label}</strong>
                            <p>{aiScore.sub}</p>
                        </div>
                        <div className="pdsk-insight-cards">
                            {aiInsights.map((it) => (
                                <div className="pdsk-insight-card reveal" key={it.title}>
                                    <span className="pdsk-insight-icon">{it.icon}</span>
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

            {/* ROLES */}
            <section className="pdsk-section pdsk-section-light">
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-blue">Multi-user management</span>
                        <h2 className="pdsk-h2">Built for every layer — owners, HR, team leads, employees.</h2>
                    </div>
                    <div className="pdsk-roles-grid">
                        {roles.map((r) => (
                            <Link to={`/products/prepdesk/${r.slug}`} className="pdsk-role-card reveal" key={r.name}>
                                <span className="pdsk-role-icon">{r.icon}</span>
                                <h4>{r.name}</h4>
                                <p>{r.description}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="pdsk-callout reveal">
                        <FiCheck className="pdsk-callout-icon" />
                        <div>
                            <strong>Monitoring depth is configurable per role.</strong>
                            <span>Screenshots, app tracking and reporting granularity can all be tuned separately for each team or role.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRIVACY & COMPLIANCE */}
            <section className="pdsk-section">
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-green">Privacy & compliance</span>
                        <h2 className="pdsk-h2">Monitoring your team should still feel <em>fair.</em></h2>
                        <p className="pdsk-section-sub">
                            PrepDesk is built to be transparent by default — every employee can see exactly what's tracked about
                            them, and every organization controls exactly how deep that tracking goes.
                        </p>
                    </div>
                    <div className="pdsk-privacy-grid">
                        {privacyItems.map((it) => (
                            <div className="pdsk-privacy-item reveal" key={it.title}>
                                <span className="pdsk-privacy-icon">{it.icon}</span>
                                <h4>{it.title}</h4>
                                <p>{it.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALSO BUILT IN */}
            <section className="pdsk-section pdsk-section-light">
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-blue">Also built in</span>
                        <h2 className="pdsk-h2">Everything else a workforce runs on.</h2>
                    </div>
                    <div className="pdsk-extra-grid">
                        {extraFeatures.map((f) => (
                            <Link to={`/products/prepdesk/${f.slug}`} className="pdsk-extra-card reveal" key={f.title}>
                                <span className="pdsk-module-icon">{f.icon}</span>
                                <h4>{f.title}</h4>
                                <p>{f.description}</p>
                                <ul className="pdsk-mini-check">
                                    {f.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHITELABEL */}
            <section className="pdsk-section pdsk-section-dark pdsk-fit">
                <Blobs variant="dark" />
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-light">Whitelabel & customization</span>
                        <h2 className="pdsk-h2 on-dark">This isn't our product on your desk. <em>It's your product, built by us.</em></h2>
                        <p className="pdsk-section-sub on-dark">
                            Every PrepDesk deployment ships under the client's own brand — logo, colors, domain and installers.
                            Prepseed is the engine underneath, never the name on screen.
                        </p>
                    </div>
                    <div className="pdsk-whitelabel-grid">
                        {whitelabelChecklist.map((w) => (
                            <div className="pdsk-whitelabel-item reveal" key={w.title}>
                                <FiCheck className="pdsk-check-dark" />
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
            <section className="pdsk-section">
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-red">One vendor, one platform</span>
                        <h2 className="pdsk-h2">No third-party tools. <em>No stitched-together stack.</em></h2>
                        <p className="pdsk-section-sub">
                            Most companies pay for — and babysit — five different subscriptions just to track time, attendance
                            and productivity. With PrepDesk there's nothing else to buy, connect or troubleshoot.
                        </p>
                    </div>
                    <div className="pdsk-replace-grid">
                        {replacedTools.map((t) => (
                            <div className="pdsk-replace-item reveal" key={t.from}>
                                <span className="pdsk-replace-from">{t.from}</span>
                                <FiArrowRight className="pdsk-replace-arrow" />
                                <span className="pdsk-replace-to">{t.to}</span>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={replaceInfoTiles} />
                </div>
            </section>

            {/* WHY PREPSEED */}
            <section className="pdsk-section pdsk-section-dark pdsk-fit">
                <Blobs variant="dark" />
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-light">Why Prepseed</span>
                        <h2 className="pdsk-h2 on-dark">Proven at scale, <em>built to be yours.</em></h2>
                    </div>
                    <div className="pdsk-stats-grid">
                        {whyPrepseed.map((w) => (
                            <div className="pdsk-stat-block reveal" key={w.label}>
                                <span className="pdsk-stat-block-value" data-countup={w.value}>{w.value}</span>
                                <strong>{w.label}</strong>
                                <p>{w.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MIGRATION */}
            <section className="pdsk-section pdsk-section-light">
                <div className="pdsk-container">
                    <div className="pdsk-section-head reveal">
                        <span className="pdsk-kicker kicker-blue">Switching made easy</span>
                        <h2 className="pdsk-h2">Already on another tracker? We <em>migrate everything</em> — you just watch it happen.</h2>
                    </div>
                    <div className="pdsk-migration-grid">
                        {migrationSteps.map((m) => (
                            <div className="pdsk-migration-step reveal" key={m.step}>
                                <span className="pdsk-migration-number">{m.step}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={migrationInfoTiles} />
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="pdsk-final-cta pdsk-fit">
                <div className="pdsk-hero-grid" />
                <Blobs variant="dark" />
                <div className="pdsk-container">
                    <div className="pdsk-final-inner reveal">
                        <span className="pdsk-kicker kicker-light">Let's build your platform</span>
                        <h2 className="pdsk-h2 on-dark">Your workforce platform. Your brand. <span className="pdsk-accent">Live in weeks.</span></h2>
                        <p className="pdsk-section-sub on-dark">
                            Book a walkthrough and we'll map PrepDesk's time tracking, attendance and AI reporting to your teams,
                            your OS mix and your brand.
                        </p>
                        <div className="pdsk-hero-ctas">
                            <a href="tel:+919913382221" className="pdsk-btn pdsk-btn-primary">
                                Call {contact.call} <FiArrowRight />
                            </a>
                            <Link to="/about" className="pdsk-btn pdsk-btn-ghost">Learn about Prepseed</Link>
                        </div>
                        <div className="pdsk-final-contact">
                            <a href="tel:+919913382221"><FiPhoneCall /> {contact.call}</a>
                            <a href="mailto:vivek@prepseed.com"><FiMail /> {contact.email}</a>
                            <a href="https://prepseed.com" target="_blank" rel="noreferrer"><FiGlobe /> {contact.web}</a>
                            <span><FiMapPin /> {contact.studio}</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrepDesk;
