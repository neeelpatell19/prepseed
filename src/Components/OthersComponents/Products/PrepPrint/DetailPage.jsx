import React, { useEffect } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { FiArrowRight, FiArrowLeft, FiCheck, FiArrowUpRight } from "react-icons/fi";
import "./PrepPrint.css";
import "./DetailPage.css";
import { detailsBySlug } from "./PrepPrintDetailsData";
import { contact } from "./PrepPrintData";
import {
    OrderJobMockup, QuoteMockup, ArtworkMockup, BillingMockup, InventoryMockup, PressScheduleMockup,
    CustomerHistoryMockup, VendorPurchaseMockup, DispatchMockup, WhatsAppOrderMockup,
} from "./Mockups";
import useSEO from "../useSEO";

const toneKicker = { red: "kicker-red", blue: "kicker-blue", green: "kicker-green", indigo: "kicker-indigo", purple: "kicker-purple" };

const mockupMap = {
    orderJob: OrderJobMockup,
    quote: QuoteMockup,
    artwork: ArtworkMockup,
    billing: BillingMockup,
    inventory: InventoryMockup,
    pressSchedule: PressScheduleMockup,
    customerHistory: CustomerHistoryMockup,
    vendorPurchase: VendorPurchaseMockup,
    dispatch: DispatchMockup,
    whatsappOrder: WhatsAppOrderMockup,
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

const OVERVIEW_PATH = "/products/prepprint";

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
        <div className="pprint-page pprint-detail-page">
            <section className="pprint-detail-hero">
                <div className="pprint-container">
                    <nav className="pprint-detail-crumb">
                        <Link to={OVERVIEW_PATH}>PrepPrint</Link>
                        <span>/</span>
                        <span>{entry.category}</span>
                    </nav>
                    <span className={`pprint-kicker ${toneKicker[entry.tone] || "kicker-indigo"}`}>{entry.category}</span>

                    {isProblem && (
                        <div className="pprint-detail-transform">
                            <span className="pprint-detail-old">{entry.title}</span>
                            <FiArrowRight />
                            <span className="pprint-detail-new">Automated &amp; under control</span>
                        </div>
                    )}

                    <div className="pprint-detail-heading">
                        <span className="pprint-detail-icon">{entry.icon}</span>
                        <h1 className="pprint-detail-title">{entry.seoTitle}</h1>
                    </div>
                    <p className="pprint-detail-lead">{entry.lead}</p>
                </div>
            </section>

            <section className="pprint-section">
                <div className="pprint-container">
                    <div className={`pprint-detail-layout ${Mockup ? "" : "no-visual"}`}>
                        <div className="pprint-detail-copy">
                            {entry.sections.map((s) => (
                                <div className="pprint-detail-block" key={s.heading}>
                                    <h2 className="pprint-h3">{s.heading}</h2>
                                    <p>{s.body}</p>
                                </div>
                            ))}

                            <ul className="pprint-check-list pprint-detail-list">
                                {entry.bullets.map((b) => (
                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                ))}
                            </ul>

                            {entry.stat && (
                                <div className="pprint-detail-stat">
                                    <span className="pprint-detail-stat-value">{entry.stat.value}</span>
                                    <span className="pprint-detail-stat-label">{entry.stat.label}</span>
                                </div>
                            )}
                        </div>

                        {Mockup && (
                            <div className="pprint-detail-visual pprint-tilt">
                                <Mockup />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {entry.faqs && entry.faqs.length > 0 && (
                <section className="pprint-section pprint-section-light">
                    <div className="pprint-container">
                        <div className="pprint-detail-body">
                            <span className="pprint-kicker kicker-indigo">FAQs</span>
                            <h2 className="pprint-h2 pprint-faq-heading">Common questions</h2>
                            <br/>
                            <div className="pprint-faq-list">
                                {entry.faqs.map((f) => (
                                    <details className="pprint-faq-item" key={f.q}>
                                        <summary>
                                            <span>{f.q}</span>
                                            <FiArrowUpRight className="pprint-faq-arrow" />
                                        </summary>
                                        <p>{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="pprint-detail-cta">
                <div className="pprint-container pprint-detail-cta-inner">
                    <div>
                        <h2 className="pprint-h3 on-dark">See it inside the full platform.</h2>
                        <p className="pprint-section-sub on-dark">
                            Book a walkthrough, or head back to the overview to see everything else PrepPrint includes.
                        </p>
                    </div>
                    <div className="pprint-hero-ctas">
                        <a href="tel:+919913382221" className="pprint-btn pprint-btn-primary">
                            Call {contact.call} <FiArrowRight />
                        </a>
                        <button type="button" onClick={handleBack} className="pprint-btn pprint-btn-ghost">
                            <FiArrowLeft /> Back to overview
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;
