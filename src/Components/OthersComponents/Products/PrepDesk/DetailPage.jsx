import React, { useEffect } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { FiArrowRight, FiArrowLeft, FiCheck, FiArrowUpRight } from "react-icons/fi";
import "./PrepDesk.css";
import "./DetailPage.css";
import { detailsBySlug } from "./PrepDeskDetailsData";
import { contact } from "./PrepDeskData";
import {
    DashboardMockup, TimeTrackerMockup, AppUsageMockup, ScreenshotsMockup, AttendanceMockup,
    ProjectsMockup, IntegrationsMockup,
} from "./Mockups";
import useSEO from "../useSEO";

const toneKicker = { red: "kicker-red", blue: "kicker-blue", green: "kicker-green" };

const mockupMap = {
    dashboard: DashboardMockup,
    timeTracker: TimeTrackerMockup,
    appUsage: AppUsageMockup,
    screenshots: ScreenshotsMockup,
    attendance: AttendanceMockup,
    projects: ProjectsMockup,
    integrations: IntegrationsMockup,
};

const useFaqSchema = (faqs) => {
    useEffect(() => {
        if (!faqs || !faqs.length) return;
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
        });
        document.head.appendChild(script);
        return () => document.head.removeChild(script);
    }, [faqs]);
};

const OVERVIEW_PATH = "/products/prepdesk";

const DetailPage = () => {
    const { slug } = useParams();
    const entry = detailsBySlug[slug];
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // See RealEstateCRM/DetailPage.jsx for the rationale: history.state.idx
    // is React Router's own signal for "is there anywhere in this session to
    // go back to" — a bookmarked/shared link has no such entry, so it falls
    // through to a normal forward navigation instead of stranding the visitor.
    const handleBack = () => {
        const hasHistory = typeof window !== "undefined" && window.history.state && window.history.state.idx > 0;
        if (hasHistory) {
            navigate(-1);
        } else {
            navigate(OVERVIEW_PATH);
        }
    };

    useSEO(entry ? {
        title: entry.metaTitle,
        description: entry.metaDescription,
        keywords: entry.keywords,
    } : {});

    useFaqSchema(entry && entry.faqs);

    if (!entry) {
        return <Navigate to={OVERVIEW_PATH} replace />;
    }

    const Mockup = entry.mockup ? mockupMap[entry.mockup] : null;
    const isProblem = entry.category === "The Problem";

    return (
        <div className="pdsk-page pdsk-detail-page">
            <section className="pdsk-detail-hero">
                <div className="pdsk-hero-grid" />
                <div className="pdsk-container">
                    <nav className="pdsk-detail-crumb">
                        <Link to={OVERVIEW_PATH}>PrepDesk</Link>
                        <span>/</span>
                        <span>{entry.category}</span>
                    </nav>
                    <span className={`pdsk-kicker ${toneKicker[entry.tone] || "kicker-blue"}`}>{entry.category}</span>

                    {isProblem && (
                        <div className="pdsk-detail-transform">
                            <span className="pdsk-detail-old">{entry.title}</span>
                            <FiArrowRight />
                            <span className="pdsk-detail-new">Automated &amp; under control</span>
                        </div>
                    )}

                    <div className="pdsk-detail-heading">
                        <span className="pdsk-detail-icon">{entry.icon}</span>
                        <h1 className="pdsk-detail-title">{entry.seoTitle}</h1>
                    </div>
                    <p className="pdsk-detail-lead">{entry.lead}</p>
                </div>
            </section>

            <section className="pdsk-section">
                <div className="pdsk-container">
                    <div className={`pdsk-detail-layout ${Mockup ? "" : "no-visual"}`}>
                        <div className="pdsk-detail-copy">
                            {entry.sections.map((s) => (
                                <div className="pdsk-detail-block" key={s.heading}>
                                    <h2 className="pdsk-h3">{s.heading}</h2>
                                    <p>{s.body}</p>
                                </div>
                            ))}

                            <ul className="pdsk-check-list pdsk-detail-list">
                                {entry.bullets.map((b) => (
                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                ))}
                            </ul>

                            {entry.stat && (
                                <div className="pdsk-detail-stat">
                                    <span className="pdsk-detail-stat-value">{entry.stat.value}</span>
                                    <span className="pdsk-detail-stat-label">{entry.stat.label}</span>
                                </div>
                            )}
                        </div>

                        {Mockup && (
                            <div className="pdsk-detail-visual pdsk-tilt">
                                <Mockup />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {entry.faqs && entry.faqs.length > 0 && (
                <section className="pdsk-section pdsk-section-light">
                    <div className="pdsk-container">
                        <div className="pdsk-detail-body">
                            <span className="pdsk-kicker kicker-blue">FAQs</span>
                            <h2 className="pdsk-h2 pdsk-faq-heading">Common questions</h2>
                            <br/>
                            <div className="pdsk-faq-list">
                                {entry.faqs.map((f) => (
                                    <details className="pdsk-faq-item" key={f.q}>
                                        <summary>
                                            <span>{f.q}</span>
                                            <FiArrowUpRight className="pdsk-faq-arrow" />
                                        </summary>
                                        <p>{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="pdsk-detail-cta">
                <div className="pdsk-container pdsk-detail-cta-inner">
                    <div>
                        <h2 className="pdsk-h3 on-dark">See it inside the full platform.</h2>
                        <p className="pdsk-section-sub on-dark">
                            Book a walkthrough, or head back to the overview to see everything else PrepDesk includes.
                        </p>
                    </div>
                    <div className="pdsk-hero-ctas">
                        <a href="tel:+919913382221" className="pdsk-btn pdsk-btn-primary">
                            Call {contact.call} <FiArrowRight />
                        </a>
                        <button type="button" onClick={handleBack} className="pdsk-btn pdsk-btn-ghost">
                            <FiArrowLeft /> Back to overview
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;
