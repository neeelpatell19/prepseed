import React, { useEffect } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { FiArrowRight, FiArrowLeft, FiCheck, FiArrowUpRight } from "react-icons/fi";
import "./PrepSchool.css";
import "./DetailPage.css";
import { detailsBySlug } from "./PrepSchoolDetailsData";
import { contact } from "./PrepSchoolData";
import {
    EnquiryMockup, StudentProfileMockup, AttendanceMockup, DiaryMockup, ParentAppMockup, FeeMockup,
    CurriculumMockup, TransportMockup,
} from "./Mockups";
import useSEO from "../useSEO";

const toneKicker = { red: "kicker-red", blue: "kicker-blue", green: "kicker-green", orange: "kicker-orange", purple: "kicker-purple" };

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

const OVERVIEW_PATH = "/products/prepschool";

const DetailPage = () => {
    const { slug } = useParams();
    const entry = detailsBySlug[slug];
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // See PrepCommerce/DetailPage.jsx for the rationale: history.state.idx
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
        <div className="psch-page psch-detail-page">
            <section className="psch-detail-hero">
                <div className="psch-hero-grid" />
                <div className="psch-container">
                    <nav className="psch-detail-crumb">
                        <Link to={OVERVIEW_PATH}>PrepSchool</Link>
                        <span>/</span>
                        <span>{entry.category}</span>
                    </nav>
                    <span className={`psch-kicker ${toneKicker[entry.tone] || "kicker-orange"}`}>{entry.category}</span>

                    {isProblem && (
                        <div className="psch-detail-transform">
                            <span className="psch-detail-old">{entry.title}</span>
                            <FiArrowRight />
                            <span className="psch-detail-new">Automated &amp; under control</span>
                        </div>
                    )}

                    <div className="psch-detail-heading">
                        <span className="psch-detail-icon">{entry.icon}</span>
                        <h1 className="psch-detail-title">{entry.seoTitle}</h1>
                    </div>
                    <p className="psch-detail-lead">{entry.lead}</p>
                </div>
            </section>

            <section className="psch-section">
                <div className="psch-container">
                    <div className={`psch-detail-layout ${Mockup ? "" : "no-visual"}`}>
                        <div className="psch-detail-copy">
                            {entry.sections.map((s) => (
                                <div className="psch-detail-block" key={s.heading}>
                                    <h2 className="psch-h3">{s.heading}</h2>
                                    <p>{s.body}</p>
                                </div>
                            ))}

                            <ul className="psch-check-list psch-detail-list">
                                {entry.bullets.map((b) => (
                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                ))}
                            </ul>

                            {entry.stat && (
                                <div className="psch-detail-stat">
                                    <span className="psch-detail-stat-value">{entry.stat.value}</span>
                                    <span className="psch-detail-stat-label">{entry.stat.label}</span>
                                </div>
                            )}
                        </div>

                        {Mockup && (
                            <div className="psch-detail-visual psch-tilt">
                                <Mockup />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {entry.faqs && entry.faqs.length > 0 && (
                <section className="psch-section psch-section-light">
                    <div className="psch-container">
                        <div className="psch-detail-body">
                            <span className="psch-kicker kicker-orange">FAQs</span>
                            <h2 className="psch-h2 psch-faq-heading">Common questions</h2>
                            <br/>
                            <div className="psch-faq-list">
                                {entry.faqs.map((f) => (
                                    <details className="psch-faq-item" key={f.q}>
                                        <summary>
                                            <span>{f.q}</span>
                                            <FiArrowUpRight className="psch-faq-arrow" />
                                        </summary>
                                        <p>{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="psch-detail-cta">
                <div className="psch-container psch-detail-cta-inner">
                    <div>
                        <h2 className="psch-h3 on-dark">See it inside the full platform.</h2>
                        <p className="psch-section-sub on-dark">
                            Book a walkthrough, or head back to the overview to see everything else PrepSchool includes.
                        </p>
                    </div>
                    <div className="psch-hero-ctas">
                        <a href="tel:+919913382221" className="psch-btn psch-btn-primary">
                            Call {contact.call} <FiArrowRight />
                        </a>
                        <button type="button" onClick={handleBack} className="psch-btn psch-btn-ghost">
                            <FiArrowLeft /> Back to overview
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;
