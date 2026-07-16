import React, { useEffect } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { FiArrowRight, FiArrowLeft, FiCheck, FiArrowUpRight } from "react-icons/fi";
import "./PrepJewellery.css";
import "./DetailPage.css";
import { detailsBySlug } from "./PrepJewelleryDetailsData";
import { contact } from "./PrepJewelleryData";
import {
    BillingMockup, PurchaseMockup, InventoryMockup, ManufacturingMockup, KarigarMockup, CRMMockup,
    SchemesMockup, RepairsMockup, AccountsMockup, HRMockup,
} from "./Mockups";
import useSEO from "../useSEO";

const toneKicker = { red: "kicker-red", blue: "kicker-blue", green: "kicker-green", gold: "kicker-gold" };

const mockupMap = {
    billing: BillingMockup,
    purchase: PurchaseMockup,
    inventory: InventoryMockup,
    manufacturing: ManufacturingMockup,
    karigar: KarigarMockup,
    crm: CRMMockup,
    schemes: SchemesMockup,
    repairs: RepairsMockup,
    accounts: AccountsMockup,
    hr: HRMockup,
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

const OVERVIEW_PATH = "/products/prepjewellery";

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
        <div className="pjew-page pjew-detail-page">
            <section className="pjew-detail-hero">
                <div className="pjew-container">
                    <nav className="pjew-detail-crumb">
                        <Link to={OVERVIEW_PATH}>PrepJewellery ERP</Link>
                        <span>/</span>
                        <span>{entry.category}</span>
                    </nav>
                    <span className={`pjew-kicker ${toneKicker[entry.tone] || "kicker-gold"}`}>{entry.category}</span>

                    {isProblem && (
                        <div className="pjew-detail-transform">
                            <span className="pjew-detail-old">{entry.title}</span>
                            <FiArrowRight />
                            <span className="pjew-detail-new">Automated &amp; under control</span>
                        </div>
                    )}

                    <div className="pjew-detail-heading">
                        <span className="pjew-detail-icon">{entry.icon}</span>
                        <h1 className="pjew-detail-title">{entry.seoTitle}</h1>
                    </div>
                    <p className="pjew-detail-lead">{entry.lead}</p>
                </div>
            </section>

            <section className="pjew-section">
                <div className="pjew-container">
                    <div className={`pjew-detail-layout ${Mockup ? "" : "no-visual"}`}>
                        <div className="pjew-detail-copy">
                            {entry.sections.map((s) => (
                                <div className="pjew-detail-block" key={s.heading}>
                                    <h2 className="pjew-h3">{s.heading}</h2>
                                    <p>{s.body}</p>
                                </div>
                            ))}

                            <ul className="pjew-check-list pjew-detail-list">
                                {entry.bullets.map((b) => (
                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                ))}
                            </ul>

                            {entry.stat && (
                                <div className="pjew-detail-stat">
                                    <span className="pjew-detail-stat-value">{entry.stat.value}</span>
                                    <span className="pjew-detail-stat-label">{entry.stat.label}</span>
                                </div>
                            )}
                        </div>

                        {Mockup && (
                            <div className="pjew-detail-visual pjew-tilt">
                                <Mockup />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {entry.faqs && entry.faqs.length > 0 && (
                <section className="pjew-section pjew-section-light">
                    <div className="pjew-container">
                        <div className="pjew-detail-body">
                            <span className="pjew-kicker kicker-gold">FAQs</span>
                            <h2 className="pjew-h2 pjew-faq-heading">Common questions</h2>
                            <br/>
                            <div className="pjew-faq-list">
                                {entry.faqs.map((f) => (
                                    <details className="pjew-faq-item" key={f.q}>
                                        <summary>
                                            <span>{f.q}</span>
                                            <FiArrowUpRight className="pjew-faq-arrow" />
                                        </summary>
                                        <p>{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="pjew-detail-cta">
                <div className="pjew-container pjew-detail-cta-inner">
                    <div>
                        <h2 className="pjew-h3 on-dark">See it inside the full platform.</h2>
                        <p className="pjew-section-sub on-dark">
                            Book a walkthrough, or head back to the overview to see everything else PrepJewellery
                            ERP includes.
                        </p>
                    </div>
                    <div className="pjew-hero-ctas">
                        <a href="tel:+919913382221" className="pjew-btn pjew-btn-primary">
                            Call {contact.call} <FiArrowRight />
                        </a>
                        <button type="button" onClick={handleBack} className="pjew-btn pjew-btn-ghost">
                            <FiArrowLeft /> Back to overview
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;
