import React, { useEffect } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { FiArrowRight, FiArrowLeft, FiCheck, FiArrowUpRight } from "react-icons/fi";
import "./RealEstateCRM.css";
import "./DetailPage.css";
import { detailsBySlug } from "./RealEstateCRMDetailsData";
import { contact } from "./RealEstateCRMData";
import {
    DashboardMockup, ActionCenterMockup, LeadManagerMockup, SiteVisitsMockup, BrokersMockup,
} from "./Mockups";
import useSEO from "../useSEO";

const toneKicker = { red: "kicker-red", blue: "kicker-blue", green: "kicker-green" };

const mockupMap = {
    dashboard: DashboardMockup,
    actionCenter: ActionCenterMockup,
    leadManager: LeadManagerMockup,
    siteVisits: SiteVisitsMockup,
    brokers: BrokersMockup,
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

const OVERVIEW_PATH = "/products/real-estate-crm";

const DetailPage = () => {
    const { slug } = useParams();
    const entry = detailsBySlug[slug];
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // "Back to overview" should return to wherever the user actually came
    // from — a scrolled-down anchor on the overview page, a different
    // product page, wherever — the same way a browser back button would,
    // rather than always resetting to the top of the overview. history.state
    // is where React Router's data-router stashes its own entry index
    // (`idx`), which is the simplest reliable signal for "is there anywhere
    // in *this* session to go back to" — a bookmarked or shared link opens
    // with no such entry, so falling back to a normal forward navigation
    // avoids stranding those visitors outside the site.
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
        return <Navigate to="/products/real-estate-crm" replace />;
    }

    const Mockup = entry.mockup ? mockupMap[entry.mockup] : null;
    const isProblem = entry.category === "The Problem";

    return (
        <div className="recrm-page recrm-detail-page">
            <section className="recrm-detail-hero">
                <div className="recrm-container">
                    <nav className="recrm-detail-crumb">
                        <Link to={OVERVIEW_PATH}>Real Estate CRM</Link>
                        <span>/</span>
                        <span>{entry.category}</span>
                    </nav>
                    <span className={`recrm-kicker ${toneKicker[entry.tone] || "kicker-blue"}`}>{entry.category}</span>

                    {isProblem && (
                        <div className="recrm-detail-transform">
                            <span className="recrm-detail-old">{entry.title}</span>
                            <FiArrowRight />
                            <span className="recrm-detail-new">Automated &amp; under control</span>
                        </div>
                    )}

                    <div className="recrm-detail-heading">
                        <span className="recrm-detail-icon">{entry.icon}</span>
                        <h1 className="recrm-detail-title">{entry.seoTitle}</h1>
                    </div>
                    <p className="recrm-detail-lead">{entry.lead}</p>
                </div>
            </section>

            <section className="recrm-section">
                <div className="recrm-container">
                    <div className={`recrm-detail-layout ${Mockup ? "" : "no-visual"}`}>
                        <div className="recrm-detail-copy">
                            {entry.sections.map((s) => (
                                <div className="recrm-detail-block" key={s.heading}>
                                    <h2 className="recrm-h3">{s.heading}</h2>
                                    <p>{s.body}</p>
                                </div>
                            ))}

                            <ul className="recrm-check-list recrm-detail-list">
                                {entry.bullets.map((b) => (
                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                ))}
                            </ul>

                            {entry.stat && (
                                <div className="recrm-detail-stat">
                                    <span className="recrm-detail-stat-value">{entry.stat.value}</span>
                                    <span className="recrm-detail-stat-label">{entry.stat.label}</span>
                                </div>
                            )}
                        </div>

                        {Mockup && (
                            <div className="recrm-detail-visual recrm-tilt">
                                <Mockup />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {entry.faqs && entry.faqs.length > 0 && (
                <section className="recrm-section recrm-section-light">
                    <div className="recrm-container">
                        <div className="recrm-detail-body">
                            <span className="recrm-kicker kicker-blue">FAQs</span>
                            <h2 className="recrm-h2 recrm-faq-heading">Common questions</h2>
                            <br/>
                            <div className="recrm-faq-list">
                                {entry.faqs.map((f) => (
                                    <details className="recrm-faq-item" key={f.q}>
                                        <summary>
                                            <span>{f.q}</span>
                                            <FiArrowUpRight className="recrm-faq-arrow" />
                                        </summary>
                                        <p>{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="recrm-detail-cta">
                <div className="recrm-container recrm-detail-cta-inner">
                    <div>
                        <h2 className="recrm-h3 on-dark">See it inside the full platform.</h2>
                        <p className="recrm-section-sub on-dark">
                            Book a walkthrough, or head back to the overview to see everything else Prepseed for Real
                            Estate includes.
                        </p>
                    </div>
                    <div className="recrm-hero-ctas">
                        <a href="tel:+919913382221" className="recrm-btn recrm-btn-primary">
                            Call {contact.call} <FiArrowRight />
                        </a>
                        <button type="button" onClick={handleBack} className="recrm-btn recrm-btn-ghost">
                            <FiArrowLeft /> Back to overview
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;
