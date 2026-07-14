import React, { useEffect } from "react";
import { useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { FiArrowRight, FiArrowLeft, FiCheck, FiArrowUpRight } from "react-icons/fi";
import "./PrepCommerce.css";
import "./DetailPage.css";
import { detailsBySlug } from "./PrepCommerceDetailsData";
import { contact } from "./PrepCommerceData";
import {
    DashboardMockup, StorefrontMockup, CartMockup, OrdersMockup, InventoryMockup,
    ChannelsMockup, ShippingMockup, MarketingMockup, ProfileMockup, ReviewsMockup,
} from "./Mockups";
import useSEO from "../useSEO";

const toneKicker = { red: "kicker-red", blue: "kicker-blue", green: "kicker-green" };

const mockupMap = {
    dashboard: DashboardMockup,
    storefront: StorefrontMockup,
    cart: CartMockup,
    orders: OrdersMockup,
    inventory: InventoryMockup,
    channels: ChannelsMockup,
    shipping: ShippingMockup,
    marketing: MarketingMockup,
    profile: ProfileMockup,
    reviews: ReviewsMockup,
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

const OVERVIEW_PATH = "/products/prepcommerce";

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
        <div className="pcom-page pcom-detail-page">
            <section className="pcom-detail-hero">
                <div className="pcom-hero-grid" />
                <div className="pcom-container">
                    <nav className="pcom-detail-crumb">
                        <Link to={OVERVIEW_PATH}>PrepCommerce</Link>
                        <span>/</span>
                        <span>{entry.category}</span>
                    </nav>
                    <span className={`pcom-kicker ${toneKicker[entry.tone] || "kicker-blue"}`}>{entry.category}</span>

                    {isProblem && (
                        <div className="pcom-detail-transform">
                            <span className="pcom-detail-old">{entry.title}</span>
                            <FiArrowRight />
                            <span className="pcom-detail-new">Automated &amp; under control</span>
                        </div>
                    )}

                    <div className="pcom-detail-heading">
                        <span className="pcom-detail-icon">{entry.icon}</span>
                        <h1 className="pcom-detail-title">{entry.seoTitle}</h1>
                    </div>
                    <p className="pcom-detail-lead">{entry.lead}</p>
                </div>
            </section>

            <section className="pcom-section">
                <div className="pcom-container">
                    <div className={`pcom-detail-layout ${Mockup ? "" : "no-visual"}`}>
                        <div className="pcom-detail-copy">
                            {entry.sections.map((s) => (
                                <div className="pcom-detail-block" key={s.heading}>
                                    <h2 className="pcom-h3">{s.heading}</h2>
                                    <p>{s.body}</p>
                                </div>
                            ))}

                            <ul className="pcom-check-list pcom-detail-list">
                                {entry.bullets.map((b) => (
                                    <li key={b}><FiCheck /><span>{b}</span></li>
                                ))}
                            </ul>

                            {entry.stat && (
                                <div className="pcom-detail-stat">
                                    <span className="pcom-detail-stat-value">{entry.stat.value}</span>
                                    <span className="pcom-detail-stat-label">{entry.stat.label}</span>
                                </div>
                            )}
                        </div>

                        {Mockup && (
                            <div className="pcom-detail-visual pcom-tilt">
                                <Mockup />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {entry.faqs && entry.faqs.length > 0 && (
                <section className="pcom-section pcom-section-light">
                    <div className="pcom-container">
                        <div className="pcom-detail-body">
                            <span className="pcom-kicker kicker-blue">FAQs</span>
                            <h2 className="pcom-h2 pcom-faq-heading">Common questions</h2>
                            <br/>
                            <div className="pcom-faq-list">
                                {entry.faqs.map((f) => (
                                    <details className="pcom-faq-item" key={f.q}>
                                        <summary>
                                            <span>{f.q}</span>
                                            <FiArrowUpRight className="pcom-faq-arrow" />
                                        </summary>
                                        <p>{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <section className="pcom-detail-cta">
                <div className="pcom-container pcom-detail-cta-inner">
                    <div>
                        <h2 className="pcom-h3 on-dark">See it inside the full platform.</h2>
                        <p className="pcom-section-sub on-dark">
                            Book a walkthrough, or head back to the overview to see everything else PrepCommerce
                            includes.
                        </p>
                    </div>
                    <div className="pcom-hero-ctas">
                        <a href="tel:+919913382221" className="pcom-btn pcom-btn-primary">
                            Call {contact.call} <FiArrowRight />
                        </a>
                        <button type="button" onClick={handleBack} className="pcom-btn pcom-btn-ghost">
                            <FiArrowLeft /> Back to overview
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;
