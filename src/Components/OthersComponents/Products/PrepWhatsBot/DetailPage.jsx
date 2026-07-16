import React, { useEffect } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { FiArrowRight, FiArrowLeft, FiCheck, FiArrowUpRight } from "react-icons/fi";
import "./PrepWhatsBot.css";
import "./DetailPage.css";
import { detailsBySlug } from "./PrepWhatsBotDetailsData";
import { contact } from "./PrepWhatsBotData";
import {
    QrConnectMockup, KnowledgeBaseMockup, AiReplyMockup, FlowBuilderMockup,
    BulkCampaignsMockup, SharedInboxMockup, TeamRolesMockup, AnalyticsMockup,
    IntegrationsMockup,
} from "./Mockups";
import useSEO from "../useSEO";

const toneKicker = { red: "kicker-red", blue: "kicker-blue", green: "kicker-green" };

const mockupMap = {
    connect: QrConnectMockup,
    knowledgeBase: KnowledgeBaseMockup,
    aiReply: AiReplyMockup,
    flowBuilder: FlowBuilderMockup,
    bulkCampaigns: BulkCampaignsMockup,
    sharedInbox: SharedInboxMockup,
    teamRoles: TeamRolesMockup,
    analytics: AnalyticsMockup,
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

const OVERVIEW_PATH = "/products/prepwhatsbot";

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
        <div className="pwb-page pwb-detail-page">
            <section className="pwb-detail-hero">
                <div className="pwb-container">
                    <nav className="pwb-detail-crumb">
                        <Link to={OVERVIEW_PATH}>PrepWhatBot</Link>
                        <span>/</span>
                        <span>{entry.category}</span>
                    </nav>
                    <span className={`pwb-kicker ${toneKicker[entry.tone] || "kicker-blue"}`}>{entry.category}</span>

                    {isProblem && (
                        <div className="pwb-detail-transform">
                            <span className="pwb-detail-old">{entry.title}</span>
                            <FiArrowRight />
                            <span className="pwb-detail-new">Automated &amp; under control</span>
                        </div>
                    )}

                    <div className="pwb-detail-heading">
                        <span className="pwb-detail-icon">{entry.icon}</span>
                        <h1 className="pwb-detail-title">{entry.seoTitle}</h1>
                    </div>
                    <p className="pwb-detail-lead">{entry.lead}</p>
                </div>
            </section>

            <section className="pwb-section">
                <div className="pwb-container">
                    <div className={`pwb-detail-layout ${Mockup ? "" : "no-visual"}`}>
                        <div className="pwb-detail-copy">
                            {entry.sections.map((s) => (
                                <div className="pwb-detail-block" key={s.heading}>
                                    <h2 className="pwb-h3">{s.heading}</h2>
                                    <p>{s.body}</p>
                                </div>
                            ))}

                            <ul className="pwb-check-list pwb-detail-list">
                                {entry.bullets.map((b) => (
                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                ))}
                            </ul>

                            {entry.stat && (
                                <div className="pwb-detail-stat">
                                    <span className="pwb-detail-stat-value">{entry.stat.value}</span>
                                    <span className="pwb-detail-stat-label">{entry.stat.label}</span>
                                </div>
                            )}
                        </div>

                        {Mockup && (
                            <div className="pwb-detail-visual pwb-tilt">
                                <Mockup />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {entry.faqs && entry.faqs.length > 0 && (
                <section className="pwb-section pwb-section-light">
                    <div className="pwb-container">
                        <div className="pwb-detail-body">
                            <span className="pwb-kicker kicker-blue">FAQs</span>
                            <h2 className="pwb-h2 pwb-faq-heading">Common questions</h2>
                            <br/>
                            <div className="pwb-faq-list">
                                {entry.faqs.map((f) => (
                                    <details className="pwb-faq-item" key={f.q}>
                                        <summary>
                                            <span>{f.q}</span>
                                            <FiArrowUpRight className="pwb-faq-arrow" />
                                        </summary>
                                        <p>{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="pwb-detail-cta">
                <div className="pwb-container pwb-detail-cta-inner">
                    <div>
                        <h2 className="pwb-h3 on-dark">See it inside the full platform.</h2>
                        <p className="pwb-section-sub on-dark">
                            Book a walkthrough, or head back to the overview to see everything else PrepWhatBot
                            includes.
                        </p>
                    </div>
                    <div className="pwb-hero-ctas">
                        <a href="tel:+919913382221" className="pwb-btn pwb-btn-primary">
                            Call {contact.call} <FiArrowRight />
                        </a>
                        <button type="button" onClick={handleBack} className="pwb-btn pwb-btn-ghost">
                            <FiArrowLeft /> Back to overview
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;
