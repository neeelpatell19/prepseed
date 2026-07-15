import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigationType } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCheck, FiX, FiPhoneCall, FiMail, FiGlobe, FiMapPin } from "react-icons/fi";
import "./PrepSchool.css";
import useSEO from "../useSEO";
import {
    hero, problems, moduleGrid, alsoIncluded, spotlights,
    healthSafetyIntro, healthSafetyItems, healthSafetyCallout,
    staffIntro, staffRoles, staffRows,
    aiInsightsIntro, retentionScore, aiInsights,
    threeAppsIntro, threeApps,
    integrations, integrationsInfoTiles, moreIntegrations,
    complianceItems, extraFeatures,
    brandChips, whitelabelChecklist,
    replacedTools, replaceInfoTiles,
    migrationSteps, migrationInfoTiles,
    whyPrepseed, contact,
} from "./PrepSchoolData";
import {
    EnquiryMockup, StudentProfileMockup, AttendanceMockup, DiaryMockup, ParentAppMockup, FeeMockup,
    CurriculumMockup, TransportMockup,
} from "./Mockups";

gsap.registerPlugin(ScrollTrigger);

const mockupMap = {
    enquiry: EnquiryMockup,
    studentProfile: StudentProfileMockup,
    attendance: AttendanceMockup,
    diary: DiaryMockup,
    parentApp: ParentAppMockup,
    fee: FeeMockup,
    curriculum: CurriculumMockup,
    transport: TransportMockup,
};

const toneKicker = { orange: "kicker-orange", blue: "kicker-blue", green: "kicker-green", red: "kicker-red", purple: "kicker-purple" };

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

const Blobs = ({ variant = "a" }) => (
    <div className={`psch-blobs psch-blobs-${variant}`} aria-hidden="true">
        <span className="psch-blob psch-blob-1" />
        <span className="psch-blob psch-blob-2" />
    </div>
);

const InfoTiles = ({ items, onDark }) => (
    <div className={`psch-info-tiles ${onDark ? "on-dark" : ""}`}>
        {items.map((it) => (
            <div className="psch-info-tile" key={it.title}>
                <span className="psch-info-tile-icon">{it.icon}</span>
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

const SCROLL_KEY = "psch-scroll-y";

const PrepSchool = () => {
    const pageRef = useRef(null);
    const location = useLocation();
    const navigationType = useNavigationType();

    useSEO({
        title: "PrepSchool — Preschool & Daycare Management Platform | Prepseed",
        description:
            "PrepSchool is a white-labeled preschool & daycare ERP — admissions, attendance, fees, the digital diary, parent communication, transport tracking and staff payroll on one platform, running natively on web and mobile. Whitelabeled, live in weeks.",
        keywords: "preschool management software, daycare management app, preschool erp software, school parent communication app, digital diary app for preschool, preschool fee management software, PrepSchool, Prepseed",
    });

    // See PrepCommerce.jsx for the full rationale behind this restore
    // logic — same GSAP-pin-vs-scroll-position race applies here.
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
                tl.fromTo(".psch-eyebrow", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
                    .fromTo(".psch-hero-line", { yPercent: 115 }, { yPercent: 0, duration: 0.9, stagger: 0.12 }, "-=0.3")
                    .fromTo(".psch-hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
                    .fromTo(".psch-hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
                    .fromTo(".psch-hero-stats", { opacity: 0, y: 20 }, {
                        opacity: 1, y: 0, duration: 0.6,
                        onComplete: () => document.querySelectorAll(".psch-hero-stat-value[data-countup]").forEach(countUp),
                    }, "-=0.3")
                    .fromTo(".psch-hero-visual", { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, "-=0.9");

                gsap.to(".psch-hero-grid", {
                    yPercent: 22,
                    ease: "none",
                    scrollTrigger: { trigger: ".psch-hero", start: "top top", end: "bottom top", scrub: true },
                });

                gsap.utils.toArray(".psch-blob").forEach((blob, i) => {
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

                document.querySelectorAll(".psch-stat-block-value[data-countup]").forEach((el) => {
                    ScrollTrigger.create({
                        trigger: el,
                        start: "top 90%",
                        once: true,
                        onEnter: () => countUp(el),
                    });
                });

                if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                    const tiltEls = document.querySelectorAll(".psch-tilt");
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
                        el._pschCleanup = () => {
                            el.removeEventListener("pointermove", onMove);
                            el.removeEventListener("pointerleave", onLeave);
                        };
                    });
                }

                if (isDesktop) {
                    const wraps = gsap.utils.toArray(".psch-stack-wrap:not(.is-last)");
                    wraps.forEach((wrap) => {
                        const item = wrap.querySelector(".psch-stack-item");
                        const card = wrap.querySelector(".psch-stack-card");
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
                    document.querySelectorAll(".psch-tilt").forEach((el) => el._pschCleanup && el._pschCleanup());
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
        <div className="psch-page" ref={pageRef}>
            {/* HERO */}
            <section className="psch-hero psch-fit">
                <div className="psch-hero-grid" />
                <Blobs variant="hero" />
                <div className="psch-container psch-hero-inner">
                    <div className="psch-hero-copy">
                        <span className="psch-eyebrow">{hero.eyebrow}</span>
                        <h1 className="psch-hero-title">
                            {hero.title.map((line, i) => (
                                <span className="psch-hero-line-mask" key={line}>
                                    <span className={`psch-hero-line ${i === hero.title.length - 1 ? "psch-accent" : ""}`}>{line}</span>
                                </span>
                            ))}
                        </h1>
                        <div className="psch-hero-sub">
                            <p>{hero.subtitle}</p>
                        </div>
                        <div className="psch-hero-ctas">
                            <a href="tel:+919913382221" className="psch-btn psch-btn-primary">
                                Book a call <FiArrowRight />
                            </a>
                            <a href="#modules" className="psch-btn psch-btn-ghost">See what's inside</a>
                        </div>
                        <span className="psch-hero-caption">{hero.caption}</span>
                        <div className="psch-hero-stats">
                            {hero.stats.map((s) => (
                                <div className="psch-hero-stat" key={s.label}>
                                    <span className="psch-hero-stat-value" data-countup={s.value}>{s.value}</span>
                                    <span className="psch-hero-stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="psch-hero-visual psch-tilt">
                        <EnquiryMockup />
                    </div>
                </div>
                <div className="psch-scroll-cue" aria-hidden="true"><span /></div>
            </section>

            {/* PROBLEM */}
            <section className="psch-section">
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className="psch-kicker kicker-red">The problem</span>
                        <h2 className="psch-h2">Preschools run on <em>registers and group chats</em>, not a system.</h2>
                    </div>
                    <div className="psch-problem-grid">
                        {problems.map((p) => (
                            <Link to={`/products/prepschool/${p.slug}`} className="psch-problem-card reveal" key={p.title}>
                                <span className="psch-problem-icon">{p.icon}</span>
                                <h4>{p.title}</h4>
                                <p>{p.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTION INTRO + MODULE GRID */}
            <section className="psch-section psch-section-light" id="modules">
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className="psch-kicker kicker-orange">Introducing PrepSchool</span>
                        <h2 className="psch-h2"><em>One platform.</em> Every child, every classroom, every branch.</h2>
                        <p className="psch-section-sub">
                            PrepSchool brings admissions, attendance, fees, the digital diary and parent communication into
                            a single preschool workspace — built for owners, teachers and parents alike.
                        </p>
                    </div>
                    <div className="psch-module-grid">
                        {moduleGrid.map((m) => (
                            <Link to={`/products/prepschool/${m.slug}`} className="psch-module-card reveal" key={m.title}>
                                <span className="psch-module-icon">{m.icon}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="psch-more-integrations reveal" style={{ marginTop: 28 }}>
                        <span>Also included in PrepSchool:</span>
                        <div className="psch-chip-row">
                            {alsoIncluded.map((a) => (
                                <Link to={`/products/prepschool/${a.slug}`} className="psch-chip" key={a.slug}>{a.label}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SPOTLIGHTS — stack on top of each other on desktop as you scroll */}
            <div className="psch-stack">
                {spotlights.map((s, i) => {
                    const Mockup = mockupMap[s.mockup];
                    const isLast = i === spotlights.length - 1;
                    return (
                        <div className={`psch-stack-wrap ${isLast ? "is-last" : ""}`} key={s.id} id={s.id}>
                            <div className="psch-stack-item" style={{ zIndex: 10 + i }}>
                                <div className="psch-stack-card">
                                    <div className={`psch-container psch-spotlight ${s.reversed ? "reversed" : ""}`}>
                                        <div className="psch-spotlight-copy reveal">
                                            <span className={`psch-kicker ${toneKicker[s.tone] || "kicker-orange"}`}>{s.eyebrow}</span>
                                            <h3 className={`psch-h3 psch-h3-tone-${s.tone}`}><Highlighted text={s.title} part={s.accent} /></h3>
                                            <p className="psch-spotlight-desc">{s.description}</p>
                                            <ul className="psch-check-list">
                                                {s.bullets.map((b) => (
                                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="psch-spotlight-visual psch-tilt reveal">
                                            <Mockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* HEALTH, SAFETY & INCIDENT MANAGEMENT */}
            <section className="psch-section" id="health-safety-incident-management">
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className={`psch-kicker ${toneKicker[healthSafetyIntro.tone]}`}>{healthSafetyIntro.kicker}</span>
                        <h2 className="psch-h2 psch-h2-red-em"><Highlighted text={healthSafetyIntro.title} part={healthSafetyIntro.accent} /></h2>
                    </div>
                    <div className="psch-privacy-grid">
                        {healthSafetyItems.map((it) => (
                            <div className="psch-privacy-card reveal" key={it.title}>
                                <span className="psch-privacy-icon" style={{ background: "var(--psch-red-light)", color: "var(--psch-red)" }}>{it.icon}</span>
                                <h4>{it.title}</h4>
                                <p>{it.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="psch-callout reveal" style={{ marginTop: 24, background: "var(--psch-red-light)" }}>
                        <span className="psch-callout-icon" style={{ color: "var(--psch-red)" }}><FiX /></span>
                        <div>
                            <strong>{healthSafetyCallout.title}</strong>
                            <span>{healthSafetyCallout.description}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* STAFF, HR & PAYROLL */}
            <section className="psch-section psch-section-light" id="staff-hr-payroll">
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className={`psch-kicker ${toneKicker[staffIntro.tone]}`}>{staffIntro.kicker}</span>
                        <h2 className="psch-h2 psch-h2-blue-em"><Highlighted text={staffIntro.title} part={staffIntro.accent} /></h2>
                    </div>
                    <div className="psch-roles-grid">
                        {staffRoles.map((r) => (
                            <div className="psch-role-card reveal" key={r.title}>
                                <span className="psch-role-icon">{r.icon}</span>
                                <h4>{r.title}</h4>
                                <p>{r.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="psch-table staff reveal">
                        <div className="psch-table-head"><span>Name</span><span>Role</span><span>Branch</span><span>Attendance (Mar)</span><span>Status</span></div>
                        {staffRows.map((r) => (
                            <div className="psch-table-row" key={r.name}>
                                <span><span className="psch-avatar" style={{ background: "var(--psch-orange)" }}>{r.name[0]}</span>{r.name}</span>
                                <span className="muted">{r.role}</span>
                                <span className="muted">{r.branch}</span>
                                <span>{r.attendance}</span>
                                <span className="psch-status-pill status-active">{r.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI INSIGHTS & REPORTS */}
            <section className="psch-section">
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className="psch-kicker kicker-purple">{aiInsightsIntro.kicker}</span>
                        <h2 className="psch-h2 psch-h2-purple-em"><Highlighted text={aiInsightsIntro.title} part={aiInsightsIntro.accent} /></h2>
                        <p className="psch-section-sub">{aiInsightsIntro.sub}</p>
                    </div>
                    <div className="psch-insights-layout">
                        <div className="psch-score-card reveal">
                            <span className="psch-ring" style={{ "--psch-ring-val": retentionScore.value }}>
                                <span className="psch-ring-inner"><b>{retentionScore.value}%</b><span>{retentionScore.label}</span></span>
                            </span>
                            <strong>{retentionScore.title}</strong>
                            <p>{retentionScore.sub}</p>
                        </div>
                        <div className="psch-insight-cards">
                            {aiInsights.map((it) => (
                                <div className="psch-insight-card reveal" key={it.title}>
                                    <span className="psch-insight-icon">{it.icon}</span>
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
            <section className="psch-section psch-section-dark psch-fit">
                <Blobs variant="dark" />
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className="psch-kicker kicker-light">{threeAppsIntro.kicker}</span>
                        <h2 className="psch-h2 on-dark">
                            Built for the <span className="psch-accent">owner</span>, the teacher and the parent.
                        </h2>
                    </div>
                    <div className="psch-access-grid">
                        {threeApps.map((a) => (
                            <div className="psch-access-card reveal" key={a.title}>
                                <span className="psch-access-icon">{a.icon}</span>
                                <h4>{a.title}</h4>
                                <span style={{ fontSize: 12.5, color: "var(--psch-muted)", fontWeight: 700 }}>{a.meta}</span>
                                <ul className="psch-mini-check" style={{ marginTop: 12 }}>
                                    {a.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTEGRATIONS */}
            <section className="psch-section" id="integrations">
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className="psch-kicker kicker-orange">Integrations</span>
                        <h2 className="psch-h2">Fits into the tools you <em>already use.</em></h2>
                        <p className="psch-section-sub">
                            Native connections for payments, communication and hardware — no manual reconciliation, no re-typing.
                        </p>
                    </div>
                    <div className="psch-integration-cards grid">
                        {integrations.map((it) => (
                            <div className="psch-integration-card reveal" key={it.name}>
                                <div className="psch-integration-status"><span className="psch-live-dot" />{it.status}</div>
                                <h4>{it.name}</h4>
                                <p>{it.description}</p>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={integrationsInfoTiles} />
                    <div className="psch-more-integrations reveal" style={{ marginTop: 28 }}>
                        <span>More integrations available on request:</span>
                        <div className="psch-chip-row">
                            {moreIntegrations.map((chip) => <span className="psch-chip" key={chip}>{chip}</span>)}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECURITY & CHILD-SAFETY COMPLIANCE */}
            <section className="psch-section psch-section-light">
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className="psch-kicker kicker-green">Security &amp; child-safety compliance</span>
                        <h2 className="psch-h2">A child's data deserves <em>the same care as the child.</em></h2>
                        <p className="psch-section-sub">
                            PrepSchool is built around strict access controls and full auditability — every piece of a
                            child's record is visible only to the people who need it.
                        </p>
                    </div>
                    <div className="psch-privacy-grid">
                        {complianceItems.map((it) => (
                            <div className="psch-privacy-card reveal" key={it.title}>
                                <span className="psch-privacy-icon">{it.icon}</span>
                                <h4>{it.title}</h4>
                                <p>{it.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ALSO BUILT IN */}
            <section className="psch-section">
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className="psch-kicker kicker-orange">Also built in</span>
                        <h2 className="psch-h2">No third-party tools. <em>No stitched-together stack.</em></h2>
                        <p className="psch-section-sub">
                            Most preschools pay for — and babysit — a fee app, an attendance app, a transport tracker
                            and a WhatsApp group, none of which talk to each other. With PrepSchool there's nothing
                            else to buy, connect or troubleshoot.
                        </p>
                    </div>
                    <div className="psch-extra-grid">
                        {extraFeatures.map((f) => (
                            <Link to={`/products/prepschool/${f.slug}`} className="psch-extra-card reveal" key={f.title}>
                                <span className="psch-module-icon">{f.icon}</span>
                                <h4>{f.title}</h4>
                                <p>{f.description}</p>
                                <ul className="psch-mini-check">
                                    {f.bullets.map((b) => <li key={b}>{b}</li>)}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHITELABEL & MULTI-BRANCH */}
            <section className="psch-section psch-section-dark psch-fit">
                <Blobs variant="dark" />
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className="psch-kicker kicker-light">Whitelabel &amp; multi-branch</span>
                        <h2 className="psch-h2 on-dark">This isn't our platform with your logo. <em>It's your school's platform, built by us.</em></h2>
                        <p className="psch-section-sub on-dark">
                            Every PrepSchool deployment ships under your own brand — logo, colors, domain and apps.
                            Run one campus or twenty under a single franchise console, with Prepseed as the engine underneath.
                        </p>
                    </div>
                    <div className="psch-brand-grid">
                        {brandChips.map((b) => (
                            <div className="psch-brand-card reveal" key={b.name}>
                                <div className="psch-brand-name">
                                    <span className="psch-brand-swatch" style={{ background: b.color }} />
                                    {b.name}
                                </div>
                                <div className="psch-brand-skel" />
                                <div className="psch-brand-skel short" />
                                <span className="psch-brand-chip" style={{ background: b.color }} />
                            </div>
                        ))}
                    </div>
                    <div className="psch-whitelabel-grid">
                        {whitelabelChecklist.map((w) => (
                            <div className="psch-whitelabel-item reveal" key={w.title}>
                                <FiCheck className="psch-check-dark" />
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
            <section className="psch-section">
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className="psch-kicker kicker-red">One vendor, one platform</span>
                        <h2 className="psch-h2">No third-party tools. <em>No stitched-together stack.</em></h2>
                    </div>
                    <div className="psch-replace-grid">
                        {replacedTools.map((t) => (
                            <div className="psch-replace-item reveal" key={t.from}>
                                <FiX className="psch-replace-x" />
                                <span className="psch-replace-from">{t.from}</span>
                                <FiArrowRight className="psch-replace-arrow" />
                                <span className="psch-replace-to">{t.to}</span>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={replaceInfoTiles} />
                </div>
            </section>

            {/* SWITCHING MADE EASY */}
            <section className="psch-section psch-section-light">
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className="psch-kicker kicker-orange">Switching made easy</span>
                        <h2 className="psch-h2">Still on registers and spreadsheets? We <em>migrate everything</em> — you just watch it happen.</h2>
                        <p className="psch-section-sub">
                            Switching shouldn't mean re-entering years of student records. Hand us access and our team
                            migrates every enrollment, fee history and staff record into PrepSchool — safely, without
                            disrupting a single term.
                        </p>
                    </div>
                    <div className="psch-migration-grid">
                        {migrationSteps.map((m) => (
                            <div className="psch-migration-step reveal" key={m.step}>
                                <span className="psch-migration-number">{m.step}</span>
                                <h4>{m.title}</h4>
                                <p>{m.description}</p>
                            </div>
                        ))}
                    </div>
                    <InfoTiles items={migrationInfoTiles} />
                </div>
            </section>

            {/* WHY PREPSEED */}
            <section className="psch-section psch-section-dark psch-fit">
                <Blobs variant="dark" />
                <div className="psch-container">
                    <div className="psch-section-head reveal">
                        <span className="psch-kicker kicker-light">Why Prepseed</span>
                        <h2 className="psch-h2 on-dark">Proven at scale, <em>built to be yours.</em></h2>
                        <p className="psch-section-sub on-dark">
                            Prepseed is an AI-first, whitelabel software studio based in Ahmedabad, India — building
                            CRM, HRMS and custom platforms for EdTech, Real Estate, Healthcare and Enterprise teams.
                            PrepSchool runs on the same engine already trusted by 400,000+ users, so you get a
                            mature, battle-tested product from day one — not a first version.
                        </p>
                    </div>
                    <div className="psch-stats-grid">
                        {whyPrepseed.map((w) => (
                            <div className="psch-stat-block reveal" key={w.label}>
                                <span className="psch-stat-block-value" data-countup={w.value}>{w.value}</span>
                                <strong>{w.label}</strong>
                                <p>{w.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="psch-final-cta psch-fit">
                <div className="psch-hero-grid" />
                <Blobs variant="dark" />
                <div className="psch-container">
                    <div className="psch-final-inner reveal">
                        <span className="psch-kicker kicker-light">Let's build your platform</span>
                        <h2 className="psch-h2 on-dark">Your preschool platform. Your brand. <span className="psch-accent">Live in weeks.</span></h2>
                        <p className="psch-section-sub on-dark">
                            Book a walkthrough and we'll map PrepSchool's admissions, attendance, fees and parent app
                            to your branches, your classrooms and your brand.
                        </p>
                        <div className="psch-hero-ctas">
                            <a href="tel:+919913382221" className="psch-btn psch-btn-primary">
                                Call {contact.call} <FiArrowRight />
                            </a>
                        </div>
                        <div className="psch-final-contact">
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

export default PrepSchool;
