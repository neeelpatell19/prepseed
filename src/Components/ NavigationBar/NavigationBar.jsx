import React, { useState } from "react";
import "./NavigationBar.css";
import NavigationNarLinksData from "./NavigationNarLinksData";
import NavigationTransition from "../NavigationTransition/NavigationTransition";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import ProductsData from "../OthersComponents/Products/ProductsData";

const NavigationBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileProductsOpen(false);
    };

    return (
        <nav className="navigation-bar">
            <div className="nav-container">
                {/* Logo Section */}
                <Link to="/">
                    <div className="nav-logo">
                        <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/PrepseedLogo.png" alt="Prepseed" className="logo-image" />
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="nav-links desktop-nav">
                    <div
                        className="nav-products"
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                    >
                        <button
                            className="nav-link nav-products-trigger"
                            onClick={() => setIsProductsOpen((prev) => !prev)}
                            aria-expanded={isProductsOpen}
                        >
                            Products
                            <FiChevronDown className={`nav-products-chevron ${isProductsOpen ? "open" : ""}`} />
                        </button>
                        <div className={`nav-products-panel ${isProductsOpen ? "open" : ""}`}>
                            <div className="nav-products-panel-card">
                                <div className="nav-products-panel-label">Ready to use products</div>
                                {ProductsData.map((product) => (
                                    product.status === "ready" ? (
                                        <Link
                                            key={product.slug}
                                            to={product.link}
                                            className="nav-product-row"
                                            onClick={() => setIsProductsOpen(false)}
                                        >
                                            <span className="nav-product-dot ready"></span>
                                            <span className="nav-product-copy">
                                                <span className="nav-product-name">{product.name}</span>
                                                <span className="nav-product-tagline">{product.tagline}</span>
                                            </span>
                                        </Link>
                                    ) : (
                                        <div key={product.slug} className="nav-product-row disabled">
                                            <span className="nav-product-dot"></span>
                                            <span className="nav-product-copy">
                                                <span className="nav-product-name">{product.name}</span>
                                                <span className="nav-product-tagline">{product.tagline}</span>
                                            </span>
                                            <span className="nav-product-badge">Coming soon</span>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                    <span className="nav-separator">•</span>
                    {NavigationNarLinksData.map((item, index) => (
                        <React.Fragment key={index}>
                            <NavigationTransition to={item.link} className="nav-link">
                                {item.name}
                            </NavigationTransition>
                            {index < NavigationNarLinksData.length - 1 && (
                                <span className="nav-separator">•</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Action Buttons */}
                <div className="nav-actions">
                    <Link to="tel:+919913382221" className="nav-btn primary-btn" style={{background:"black",color:"white"}}>Contact Prepseed</Link>
                    {/* <button className="nav-btn secondary-btn">View Services</button> */}
                    {/* <Link to="mailto:vivek@prepseed.com" className="nav-btn primary-btn">vivek@prepseed.com</Link> */}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-links">
                    <button
                        className="mobile-nav-link mobile-products-trigger"
                        onClick={() => setIsMobileProductsOpen((prev) => !prev)}
                        aria-expanded={isMobileProductsOpen}
                    >
                        Products
                        <FiChevronDown className={`nav-products-chevron ${isMobileProductsOpen ? "open" : ""}`} />
                    </button>
                    <div className={`mobile-products-panel ${isMobileProductsOpen ? "open" : ""}`}>
                        {ProductsData.map((product) => (
                            product.status === "ready" ? (
                                <Link
                                    key={product.slug}
                                    to={product.link}
                                    className="nav-product-row"
                                    onClick={closeMobileMenu}
                                >
                                    <span className="nav-product-dot ready"></span>
                                    <span className="nav-product-copy">
                                        <span className="nav-product-name">{product.name}</span>
                                        <span className="nav-product-tagline">{product.tagline}</span>
                                    </span>
                                </Link>
                            ) : (
                                <div key={product.slug} className="nav-product-row disabled">
                                    <span className="nav-product-dot"></span>
                                    <span className="nav-product-copy">
                                        <span className="nav-product-name">{product.name}</span>
                                        <span className="nav-product-tagline">{product.tagline}</span>
                                    </span>
                                    <span className="nav-product-badge">Coming soon</span>
                                </div>
                            )
                        ))}
                    </div>
                    {NavigationNarLinksData.map((item, index) => (
                        <NavigationTransition 
                            key={index} 
                            to={item.link} 
                            className="mobile-nav-link"
                            onClick={closeMobileMenu}
                        >
                            {item.name}
                        </NavigationTransition>
                    ))}
                </div>
                <div className="mobile-menu-actions">
                    <Link to="tel:+919913382221" className="nav-btn primary-btn" onClick={closeMobileMenu}>Contact Prepseed</Link>
                    {/* <button className="nav-btn secondary-btn">View Services</button> */}
                    {/* <Link to="mailto:vivek@prepseed.com" className="nav-btn primary-btn">vivek@prepseed.com</Link> */}
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;