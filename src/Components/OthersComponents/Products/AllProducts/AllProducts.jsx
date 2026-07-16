import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    FiHome, FiClock, FiVideo, FiMessageCircle,
    FiShoppingCart, FiAward, FiBookOpen, FiPrinter,
} from "react-icons/fi";
import "./AllProducts.css";
import useSEO from "../useSEO";
import ProductsData from "../ProductsData";

const iconBySlug = {
    "real-estate-crm": FiHome,
    "prepdesk": FiClock,
    "prepcam": FiVideo,
    "prepwhatsbot": FiMessageCircle,
    "prepcommerce": FiShoppingCart,
    "prepjewellery": FiAward,
    "prepschool": FiBookOpen,
    "prepprint": FiPrinter,
};

const AllProducts = () => {
    useSEO({
        title: "All Products — Prepseed",
        description: "Explore Prepseed's full product suite — whitelabeled, industry-specific software for real estate, workforce management, video AI, WhatsApp automation, commerce, jewellery, education and print businesses.",
        keywords: "Prepseed products, whitelabel software products, PrepDesk, PrepCam, PrepWhatBot, PrepCommerce, PrepJewellery, PrepSchool, PrepPrint, real estate CRM",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="MainContainer paddingBottom50 all-products-section paddingTop">
            <div className="Container">
                <div className="flex-column-widthGap maxWidth600">
                    <h2 className="textCenter">All <span>Products</span></h2>
                    <p className="textCenter paraWeight">
                        Whitelabeled, industry-specific software — built to run your operations and ready to carry your brand.
                    </p>
                </div>

                <div className="all-products-grid paddingTop50">
                    {ProductsData.map((product) => {
                        const Icon = iconBySlug[product.slug];
                        const isReady = product.status === "ready";
                        const Card = isReady ? Link : "div";
                        const cardProps = isReady ? { to: product.link } : {};

                        return (
                            <Card
                                key={product.slug}
                                {...cardProps}
                                className={`all-products-card ${!isReady ? "disabled" : ""}`}
                            >
                                <div className="all-products-card-image">
                                    {Icon && <Icon />}
                                </div>
                                <div className="all-products-card-content">
                                    <h3 className="all-products-card-title">{product.name}</h3>
                                    <p className="all-products-card-description">
                                        {product.description}
                                    </p>
                                    <div className="all-products-card-action">
                                        <span className="all-products-action-text">
                                            {isReady ? "View Product" : "Coming soon"}
                                        </span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                                        </svg>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
