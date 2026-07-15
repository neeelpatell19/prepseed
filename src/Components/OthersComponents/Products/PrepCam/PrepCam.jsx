import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheck, FiPhoneCall, FiMail, FiGlobe, FiMapPin } from "react-icons/fi";
import "./PrepCam.css";
import useSEO from "../useSEO";
import {
    hero, problems, moduleGrid, spotlights, integrations, moreIntegrations,
    roles, extraFeatures, privacyChecklist, whitelabelChecklist, replacedTools,
    deploymentSteps, whyPrepseed, contact,
} from "./PrepCamData";
import {
    RtspFeedMockup, SopMockup, PhoneDetectionMockup, AttendanceMockup, HeatmapMockup,
    AlertsMockup, LiveDashboardMockup,
} from "./Mockups";

gsap.registerPlugin(ScrollTrigger);

const mockupMap = {
    rtsp: RtspFeedMockup,
    sop: SopMockup,
    phone: PhoneDetectionMockup,
    attendance: AttendanceMockup,
    heatmap: HeatmapMockup,
};

const Blobs = ({ variant = "a" }) => (
    <div className={`pcam-blobs pcam-blobs-${variant}`} aria-hidden="true">
        <span className="pcam-blob pcam-blob-1" />
        <span className="pcam-blob pcam-blob-2" />
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

const SCROLL_KEY = "pcam-scroll-y";

const PrepCam = () => {
    const pageRef = useRef(null);
    const location = useLocation();
    const navigationType = useNavigationType();

    useSEO({
        title: "PrepCam — AI Video Intelligence for Physical Operations | Prepseed",
        description:
            "PrepCam turns the RTSP/CCTV cameras you already have into SOP compliance checks, mobile-phone detection, touchless attendance, zone analytics and AI-driven reporting — whitelabeled, live in weeks.",
        keywords: "AI video intelligence, SOP compliance software, CCTV analytics, face recognition attendance, mobile phone detection retail, PPE compliance detection, whitelabel video AI, PrepCam, Prepseed",
    });

    useEffect(() => {
        // See RealEstateCRM.jsx for the full rationale behind this restore
        // logic — same GSAP-pin-vs-scroll-position race applies here.
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
                tl.fromTo(".pcam-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
                    .fromTo(".pcam-hero-line", { yPercent: 115 }, { yPercent: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
                    .fromTo(".pcam-hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
                    .fromTo(".pcam-hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
                    .fromTo(".pcam-hero-stats", { opacity: 0, y: 20 }, {
                        opacity: 1, y: 0, duration: 0.6,
                        onComplete: () => document.querySelectorAll(".pcam-hero-stat-value[data-countup]").forEach(countUp),
                    }, "-=0.3")
                    .fromTo(".pcam-hero-visual", { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.9");

                gsap.to(".pcam-hero-grid", {
                    yPercent: 22,
                    ease: "none",
                    scrollTrigger: { trigger: ".pcam-hero", start: "top top", end: "bottom top", scrub: true },
                });

                gsap.utils.toArray(".pcam-blob").forEach((blob, i) => {
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

                document.querySelectorAll(".pcam-stat-block-value[data-countup]").forEach((el) => {
                    ScrollTrigger.create({
                        trigger: el,
                        start: "top 90%",
                        once: true,
                        onEnter: () => countUp(el),
                    });
                });

                if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                    const tiltEls = document.querySelectorAll(".pcam-tilt");
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
                        el._pcamCleanup = () => {
                            el.removeEventListener("pointermove", onMove);
                            el.removeEventListener("pointerleave", onLeave);
                        };
                    });
                }

                if (isDesktop) {
                    const wraps = gsap.utils.toArray(".pcam-stack-wrap:not(.is-last)");
                    wraps.forEach((wrap) => {
                        const item = wrap.querySelector(".pcam-stack-item");
                        const card = wrap.querySelector(".pcam-stack-card");
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
                    document.querySelectorAll(".pcam-tilt").forEach((el) => el._pcamCleanup && el._pcamCleanup());
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
        <div className="pcam-page" ref={pageRef}>
            {/* HERO */}
            <section className="pcam-hero pcam-fit">
                <div className="pcam-hero-grid" />
                <Blobs variant="hero" />
                <div className="pcam-container pcam-hero-inner">
                    <div className="pcam-hero-copy">
                        <span className="pcam-eyebrow">{hero.eyebrow}</span>
                        <h1 className="pcam-hero-title">
                            <span className="pcam-hero-line-mask"><span className="pcam-hero-line">{hero.title[0]}</span></span>
                            <span className="pcam-hero-line-mask"><span className="pcam-hero-line">{hero.title[1]}</span></span>
                            <span className="pcam-hero-line-mask"><span className="pcam-hero-line pcam-accent">{hero.title[2]}</span></span>
                        </h1>
                        <div className="pcam-hero-sub">
                            <p>{hero.subtitle}</p>
                        </div>
                        <div className="pcam-hero-ctas">
                            <a href="tel:+919913382221" className="pcam-btn pcam-btn-primary">
                                Book a call <FiArrowRight />
                            </a>
                            <a href="#modules" className="pcam-btn pcam-btn-ghost">See what's inside</a>
                        </div>
                        <div className="pcam-hero-stats">
                            {hero.stats.map((s) => (
                                <div className="pcam-hero-stat" key={s.label}>
                                    <span className="pcam-hero-stat-value" data-countup={s.value}>{s.value}</span>
                                    <span className="pcam-hero-stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="pcam-hero-visual pcam-tilt">
                        <LiveDashboardMockup />
                    </div>
                </div>
                <div className="pcam-scroll-cue" aria-hidden="true"><span /></div>
            </section>

            {/* PROBLEM */}
            <section className="pcam-section">
                <div className="pcam-container">
                    <div className="pcam-section-head reveal">
                        <span className="pcam-kicker kicker-red">The problem</span>
                        <h2 className="pcam-h2">Every location runs on a camera <em>nobody actually watches</em>.</h2>
                    </div>
                    <div className="pcam-problem-grid">
                        {problems.map((p) => (
                            <Link to={`/products/prepcam/${p.slug}`} className="pcam-problem-card reveal" key={p.title}>
                                <span className="pcam-problem-icon">{p.icon}</span>
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION INTRO + MODULE GRID */}
            <section className="pcam-section pcam-section-light" id="modules">
                <div className="pcam-container">
                    <div className="pcam-section-head reveal">
                        <span className="pcam-kicker kicker-cam">Introducing PrepCam</span>
                        <h2 className="pcam-h2">One AI layer. <em>Every camera, every SOP, every shift.</em></h2>
                        <p className="pcam-section-sub">
                            PrepCam connects to your existing RTSP/CCTV cameras and turns live video into compliance
                            scores, attendance, alerts and AI reporting — no new hardware to install.
                        </p>
                    </div>
                    <div className="pcam-module-grid">
                        {moduleGrid.map((m) => (
                            <Link to={`/products/prepcam/${m.slug}`} className="pcam-module-card reveal" key={m.title}>
                                <span className="pcam-module-icon">{m.icon}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SPOTLIGHTS — stack on top of each other on desktop as you scroll */}
            <div className="pcam-stack">
                {spotlights.map((s, i) => {
                    const Mockup = mockupMap[s.mockup];
                    const isLast = i === spotlights.length - 1;
                    return (
                        <div className={`pcam-stack-wrap ${isLast ? "is-last" : ""}`} key={s.id} id={s.id}>
                            <div className="pcam-stack-item" style={{ zIndex: 10 + i }}>
                                <div className="pcam-stack-card">
                                    <div className={`pcam-container pcam-spotlight ${s.reversed ? "reversed" : ""}`}>
                                        <div className="pcam-spotlight-copy reveal">
                                            <span className="pcam-kicker kicker-cam">{s.eyebrow}</span>
                                            <h3 className="pcam-h3">{s.title}</h3>
                                            <p className="pcam-spotlight-desc">{s.description}</p>
                                            <ul className="pcam-check-list">
                                                {s.bullets.map((b) => (
                                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pcam-spotlight-visual pcam-tilt reveal">
                                            <Mockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* INTEGRATIONS + REAL-TIME ALERTS */}
            <section className="pcam-section pcam-section-light" id="integrations">
                <div className="pcam-container">
                    <div className="pcam-section-head reveal">
                        <span className="pcam-kicker kicker-cam">Integrations</span>
                        <h2 className="pcam-h2">Fits into the stack you already run. <em>No stitched-together mess.</em></h2>
                    </div>
                    <div className="pcam-integration-layout">
                        <div className="pcam-integration-cards">
                            {integrations.map((it) => (
                                <div className="pcam-integration-card reveal" key={it.name}>
                                    <div className="pcam-integration-status"><span className="pcam-live-dot" />{it.status}</div>
                                    <h4>{it.name}</h4>
                                    <p>{it.description}</p>
                                </div>
                            ))}
                            <div className="pcam-more-integrations reveal">
                                <span>More on request:</span>
                                <div className="pcam-chip-row">
                                    {moreIntegrations.map((chip) => <span className="pcam-chip" key={chip}>{chip}</span>)}
                                </div>
                            </div>
                        </div>
                        <div className="pcam-alerts-demo reveal">
                            <span className="pcam-kicker kicker-red">Every violation arrives with its own proof</span>
                            <AlertsMockup />
                        </div>
                    </div>
                </div>
            </section>

            {/* ROLES */}
            <section className="pcam-section">
                <div className="pcam-container">
                    <div className="pcam-section-head reveal">
                        <span className="pcam-kicker kicker-cam">Multi-location management</span>
                        <h2 className="pcam-h2">Built for teams — owners, regional managers, store managers, safety leads.</h2>
                    </div>
                    <div className="pcam-roles-grid">
                        {roles.map((r) => (
                            <Link to={`/products/prepcam/${r.slug}`} className="pcam-role-card reveal" key={r.name}>
                                <span className="pcam-role-icon">{r.icon}</span>
                                <h4>{r.name}</h4>
                                <p>{r.description}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="pcam-callout reveal">
                        <FiCheck className="pcam-callout-icon" />
                        <div>
                            <strong>No one sees the whole company except you.</strong>
                            <span>Every other role is scoped to their own location, cameras and queue by default.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXTRA FEATURES */}
            <section className="pcam-section pcam-section-light">
                <div className="pcam-container">
                    <div className="pcam-section-head reveal">
                        <span className="pcam-kicker kicker-cam">Also built in</span>
                        <h2 className="pcam-h2">Everything else a physical operation runs on.</h2>
                    </div>
                    <div className="pcam-extra-grid">
                        {extraFeatures.map((f) => (
                            <Link to={`/products/prepcam/${f.slug}`} className="pcam-extra-card reveal" key={f.title}>
                                <span className="pcam-module-icon">{f.icon}</span>
                                <h4>{f.title}</h4>
                                <p>{f.description}</p>
                                <ul className="pcam-mini-check">
                                    {f.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRIVACY & COMPLIANCE */}
            <section className="pcam-section">
                <div className="pcam-container">
                    <div className="pcam-section-head reveal">
                        <span className="pcam-kicker kicker-cam">Privacy &amp; compliance</span>
                        <h2 className="pcam-h2">Video intelligence that stays <em>responsible</em>.</h2>
                        <p className="pcam-section-sub">
                            Cameras already exist in these spaces — PrepCam is engineered to add intelligence
                            without adding new privacy risk.
                        </p>
                    </div>
                    <div className="pcam-privacy-grid">
                        {privacyChecklist.map((p) => (
                            <div className="pcam-privacy-card reveal" key={p.title}>
                                <span className="pcam-privacy-icon">{p.icon}</span>
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHITELABEL */}
            <section className="pcam-section pcam-section-dark pcam-fit">
                <Blobs variant="dark" />
                <div className="pcam-container">
                    <div className="pcam-section-head reveal">
                        <span className="pcam-kicker kicker-light">Whitelabel &amp; customization</span>
                        <h2 className="pcam-h2 on-dark">This isn't our product on your dashboard. <em>It's your product, built by us.</em></h2>
                        <p className="pcam-section-sub on-dark">
                            Every PrepCam deployment ships under the client's own brand — logo, colors, domain and
                            reports. Prepseed is the engine underneath, never the name on screen.
                        </p>
                    </div>
                    <div className="pcam-whitelabel-grid">
                        {whitelabelChecklist.map((w) => (
                            <div className="pcam-whitelabel-item reveal" key={w.title}>
                                <FiCheck className="pcam-check-dark" />
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
            <section className="pcam-section">
                <div className="pcam-container">
                    <div className="pcam-section-head reveal">
                        <span className="pcam-kicker kicker-red">One vendor, one platform</span>
                        <h2 className="pcam-h2">No third-party tools. <em>No stitched-together stack.</em></h2>
                        <p className="pcam-section-sub">
                            Most operators pay for — and babysit — a separate video analytics box, a biometric
                            attendance device and a mystery-shopper service. With PrepCam there's nothing else to
                            buy, connect or troubleshoot.
                        </p>
                    </div>
                    <div className="pcam-replace-grid">
                        {replacedTools.map((t) => (
                            <div className="pcam-replace-item reveal" key={t.from}>
                                <span className="pcam-replace-from">{t.from}</span>
                                <FiArrowRight className="pcam-replace-arrow" />
                                <span className="pcam-replace-to">{t.to}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY PREPSEED */}
            <section className="pcam-section pcam-section-dark pcam-fit">
                <Blobs variant="dark" />
                <div className="pcam-container">
                    <div className="pcam-section-head reveal">
                        <span className="pcam-kicker kicker-light">Why Prepseed</span>
                        <h2 className="pcam-h2 on-dark">Proven at scale, <em>built to be yours.</em></h2>
                    </div>
                    <div className="pcam-stats-grid">
                        {whyPrepseed.map((w) => (
                            <div className="pcam-stat-block reveal" key={w.label}>
                                <span className="pcam-stat-block-value" data-countup={w.value}>{w.value}</span>
                                <strong>{w.label}</strong>
                                <p>{w.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DEPLOYMENT */}
            <section className="pcam-section pcam-section-light">
                <div className="pcam-container">
                    <div className="pcam-section-head reveal">
                        <span className="pcam-kicker kicker-cam">Deployment made easy</span>
                        <h2 className="pcam-h2">Nothing to rewire. <em>We connect to what's already there.</em></h2>
                    </div>
                    <div className="pcam-migration-grid">
                        {deploymentSteps.map((m) => (
                            <div className="pcam-migration-step reveal" key={m.step}>
                                <span className="pcam-migration-number">{m.step}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="pcam-final-cta pcam-fit">
                <div className="pcam-hero-grid" />
                <Blobs variant="dark" />
                <div className="pcam-container">
                    <div className="pcam-final-inner reveal">
                        <span className="pcam-kicker kicker-light">Let's put your cameras to work</span>
                        <h2 className="pcam-h2 on-dark">Your cameras. Your SOPs. <span className="pcam-accent">Live in weeks.</span></h2>
                        <p className="pcam-section-sub on-dark">
                            Book a walkthrough and we'll map PrepCam's SOP detection, attendance and AI insights to
                            your cameras, your locations and your brand.
                        </p>
                        <div className="pcam-hero-ctas">
                            <a href="tel:+919913382221" className="pcam-btn pcam-btn-primary">
                                Call {contact.call} <FiArrowRight />
                            </a>
                            <Link to="/about" className="pcam-btn pcam-btn-ghost">Learn about Prepseed</Link>
                        </div>
                        <div className="pcam-final-contact">
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

export default PrepCam;
