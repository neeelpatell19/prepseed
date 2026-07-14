import React, { useEffect } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { FiArrowRight, FiArrowLeft, FiCheck, FiArrowUpRight } from "react-icons/fi";
import "./PrepCam.css";
import "./DetailPage.css";
import { detailsBySlug } from "./PrepCamDetailsData";
import { contact } from "./PrepCamData";
import {
    RtspFeedMockup, SopMockup, PhoneDetectionMockup, PpeComplianceMockup, AttendanceMockup,
    HeatmapMockup, AlertsMockup, LocationsMockup, LiveDashboardMockup,
} from "./Mockups";
import useSEO from "../useSEO";

const toneKicker = { red: "kicker-red", cam: "kicker-cam", green: "kicker-green", amber: "kicker-cam" };

const mockupMap = {
    rtsp: RtspFeedMockup,
    sop: SopMockup,
    phone: PhoneDetectionMockup,
    ppe: PpeComplianceMockup,
    attendance: AttendanceMockup,
    heatmap: HeatmapMockup,
    alerts: AlertsMockup,
    locations: LocationsMockup,
    live: LiveDashboardMockup,
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

const OVERVIEW_PATH = "/products/prepcam";

const DetailPage = () => {
    const { slug } = useParams();
    const entry = detailsBySlug[slug];
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // See RealEstateCRM/DetailPage.jsx for the full rationale — same
    // "return to wherever the user actually came from" behavior.
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
        return <Navigate to="/products/prepcam" replace />;
    }

    const Mockup = entry.mockup ? mockupMap[entry.mockup] : null;
    const isProblem = entry.category === "The Problem";

    return (
        <div className="pcam-page pcam-detail-page">
            <section className="pcam-detail-hero">
                <div className="pcam-hero-grid" />
                <div className="pcam-container">
                    <nav className="pcam-detail-crumb">
                        <Link to={OVERVIEW_PATH}>PrepCam</Link>
                        <span>/</span>
                        <span>{entry.category}</span>
                    </nav>
                    <span className={`pcam-kicker ${toneKicker[entry.tone] || "kicker-cam"}`}>{entry.category}</span>

                    {isProblem && (
                        <div className="pcam-detail-transform">
                            <span className="pcam-detail-old">{entry.title}</span>
                            <FiArrowRight />
                            <span className="pcam-detail-new">Automated &amp; under control</span>
                        </div>
                    )}

                    <div className="pcam-detail-heading">
                        <span className="pcam-detail-icon">{entry.icon}</span>
                        <h1 className="pcam-detail-title">{entry.seoTitle}</h1>
                    </div>
                    <p className="pcam-detail-lead">{entry.lead}</p>
                </div>
            </section>

            <section className="pcam-section">
                <div className="pcam-container">
                    <div className={`pcam-detail-layout ${Mockup ? "" : "no-visual"}`}>
                        <div className="pcam-detail-copy">
                            {entry.sections.map((s) => (
                                <div className="pcam-detail-block" key={s.heading}>
                                    <h2 className="pcam-h3">{s.heading}</h2>
                                    <p>{s.body}</p>
                                </div>
                            ))}

                            <ul className="pcam-check-list pcam-detail-list">
                                {entry.bullets.map((b) => (
                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                ))}
                            </ul>

                            {entry.stat && (
                                <div className="pcam-detail-stat">
                                    <span className="pcam-detail-stat-value">{entry.stat.value}</span>
                                    <span className="pcam-detail-stat-label">{entry.stat.label}</span>
                                </div>
                            )}
                        </div>

                        {Mockup && (
                            <div className="pcam-detail-visual pcam-tilt">
                                <Mockup />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {entry.faqs && entry.faqs.length > 0 && (
                <section className="pcam-section pcam-section-light">
                    <div className="pcam-container">
                        <div className="pcam-detail-body">
                            <span className="pcam-kicker kicker-cam">FAQs</span>
                            <h2 className="pcam-h2 pcam-faq-heading">Common questions</h2>
                            <br/>
                            <div className="pcam-faq-list">
                                {entry.faqs.map((f) => (
                                    <details className="pcam-faq-item" key={f.q}>
                                        <summary>
                                            <span>{f.q}</span>
                                            <FiArrowUpRight className="pcam-faq-arrow" />
                                        </summary>
                                        <p>{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="pcam-detail-cta">
                <div className="pcam-container pcam-detail-cta-inner">
                    <div>
                        <h2 className="pcam-h3 on-dark">See it inside the full platform.</h2>
                        <p className="pcam-section-sub on-dark">
                            Book a walkthrough, or head back to the overview to see everything else PrepCam includes.
                        </p>
                    </div>
                    <div className="pcam-hero-ctas">
                        <a href="tel:+919913382221" className="pcam-btn pcam-btn-primary">
                            Call {contact.call} <FiArrowRight />
                        </a>
                        <button type="button" onClick={handleBack} className="pcam-btn pcam-btn-ghost">
                            <FiArrowLeft /> Back to overview
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;
