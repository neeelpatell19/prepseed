import React, { useState } from "react";
import "./NavigationBar.css";
import NavigationNarLinksData from "./NavigationNarLinksData";
import NavigationTransition from "../NavigationTransition/NavigationTransition";
import { Link } from "react-router-dom";
import {
    FiChevronDown,
    FiArrowRight,
    FiHome,
    FiUsers,
    FiVideo,
    FiMessageCircle,
    FiShoppingCart,
    FiAward,
    FiBookOpen,
    FiPrinter,
    FiMonitor,
    FiStar,
    FiBriefcase,
    FiCreditCard,
    FiTool,
    FiGrid,
} from "react-icons/fi";
import ProductsData from "../OthersComponents/Products/ProductsData";
import modulesData from "../OthersComponents/Modules/ModulesData";

const homeLink = NavigationNarLinksData.find((item) => item.name === "Home");
const servicesLink = NavigationNarLinksData.find((item) => item.name === "Services");
const restLinks = NavigationNarLinksData.filter(
    (item) => item.name !== "Home" && item.name !== "Services"
);
const ServicesData = Object.values(modulesData);

const PRODUCT_ICONS = {
    "real-estate-crm": FiHome,
    prepdesk: FiUsers,
    prepcam: FiVideo,
    prepwhatsbot: FiMessageCircle,
    prepcommerce: FiShoppingCart,
    prepjewellery: FiAward,
    prepschool: FiBookOpen,
    prepprint: FiPrinter,
};

const SERVICE_ICONS = {
    "Pre-schools": FiBookOpen,
    "Hostel Management": FiHome,
    "Printing and Document Management": FiPrinter,
    "Coachings, Schools, Educational Institutions": FiBookOpen,
    "Outdoor Media Agencies": FiMonitor,
    "Religious Application": FiStar,
    "Organisational Software": FiBriefcase,
    "HRMS Software": FiUsers,
    "Billing Software": FiCreditCard,
    "Manufacturing Industries": FiTool,
};

const SERVICE_TAGLINES = {
    "Pre-schools": "Daycare & pre-school management",
    "Hostel Management": "Hostel & accommodation management",
    "Printing and Document Management": "Print shop & document ERP",
    "Coachings, Schools, Educational Institutions": "School & coaching management",
    "Outdoor Media Agencies": "Outdoor ad campaign management",
    "Religious Application": "Temple & religious institution software",
    "Organisational Software": "Business operations software",
    "HRMS Software": "HR, payroll & attendance",
    "Billing Software": "Billing & invoicing automation",
    "Manufacturing Industries": "Production & inventory management",
};

const NavigationBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileProductsOpen(false);
        setIsMobileServicesOpen(false);
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
                    {homeLink && (
                        <>
                            <NavigationTransition to={homeLink.link} className="nav-link">
                                {homeLink.name}
                            </NavigationTransition>
                            <span className="nav-separator">•</span>
                        </>
                    )}
                    <div
                        className="nav-products"
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                    >
                        <NavigationTransition
                            to="/products"
                            className="nav-link nav-products-trigger"
                            onClick={() => setIsProductsOpen(false)}
                        >
                            Products
                            <FiChevronDown className={`nav-products-chevron ${isProductsOpen ? "open" : ""}`} />
                        </NavigationTransition>
                        <div className={`nav-products-panel ${isProductsOpen ? "open" : ""}`}>
                            <div className="nav-products-panel-card">
                                <div className="nav-products-panel-label">Ready to use products</div>
                                {ProductsData.map((product) => {
                                    const Icon = PRODUCT_ICONS[product.slug] || FiGrid;
                                    return product.status === "ready" ? (
                                        <Link
                                            key={product.slug}
                                            to={product.link}
                                            className="nav-product-row"
                                            onClick={() => setIsProductsOpen(false)}
                                        >
                                            <span className="nav-product-icon ready"><Icon /></span>
                                            <span className="nav-product-copy">
                                                <span className="nav-product-name">{product.name}</span>
                                                <span className="nav-product-tagline">{product.tagline}</span>
                                            </span>
                                        </Link>
                                    ) : (
                                        <div key={product.slug} className="nav-product-row disabled">
                                            <span className="nav-product-icon"><Icon /></span>
                                            <span className="nav-product-copy">
                                                <span className="nav-product-name">{product.name}</span>
                                                <span className="nav-product-tagline">{product.tagline}</span>
                                            </span>
                                            <span className="nav-product-badge">Coming soon</span>
                                        </div>
                                    );
                                })}
                                <Link
                                    to="/products"
                                    className="nav-products-view-all"
                                    onClick={() => setIsProductsOpen(false)}
                                >
                                    View all products
                                    <FiArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {servicesLink && (
                        <>
                            <span className="nav-separator">•</span>
                            <div
                                className="nav-products nav-services"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <NavigationTransition
                                    to={servicesLink.link}
                                    className="nav-link nav-products-trigger"
                                    onClick={() => setIsServicesOpen(false)}
                                >
                                    Services
                                    <FiChevronDown className={`nav-products-chevron ${isServicesOpen ? "open" : ""}`} />
                                </NavigationTransition>
                                <div className={`nav-products-panel ${isServicesOpen ? "open" : ""}`}>
                                    <div className="nav-products-panel-card">
                                        <div className="nav-products-panel-label">Solutions by industry</div>
                                        {ServicesData.map((industry) => {
                                            const Icon = SERVICE_ICONS[industry.title] || FiGrid;
                                            return (
                                                <Link
                                                    key={industry.title}
                                                    to={`/industry/${encodeURIComponent(industry.title)}`}
                                                    className="nav-product-row"
                                                    onClick={() => setIsServicesOpen(false)}
                                                >
                                                    <span className="nav-product-icon ready"><Icon /></span>
                                                    <span className="nav-product-copy">
                                                        <span className="nav-product-name">{industry.title}</span>
                                                        <span className="nav-product-tagline">{SERVICE_TAGLINES[industry.title] || industry.title}</span>
                                                    </span>
                                                </Link>
                                            );
                                        })}
                                        <Link
                                            to="/services"
                                            className="nav-products-view-all"
                                            onClick={() => setIsServicesOpen(false)}
                                        >
                                            View all services
                                            <FiArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {restLinks.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className="nav-separator">•</span>
                            <NavigationTransition to={item.link} className="nav-link">
                                {item.name}
                            </NavigationTransition>
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

            {/* Backdrop dims the page behind an open Products/Services dropdown */}
            <div className={`nav-dropdown-backdrop ${(isProductsOpen || isServicesOpen) ? "open" : ""}`}></div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-links">
                    {homeLink && (
                        <NavigationTransition
                            to={homeLink.link}
                            className="mobile-nav-link"
                            onClick={closeMobileMenu}
                        >
                            {homeLink.name}
                        </NavigationTransition>
                    )}
                    <button
                        className="mobile-nav-link mobile-products-trigger"
                        onClick={() => setIsMobileProductsOpen((prev) => !prev)}
                        aria-expanded={isMobileProductsOpen}
                    >
                        Products
                        <FiChevronDown className={`nav-products-chevron ${isMobileProductsOpen ? "open" : ""}`} />
                    </button>
                    <div className={`mobile-products-panel ${isMobileProductsOpen ? "open" : ""}`}>
                        {ProductsData.map((product) => {
                            const Icon = PRODUCT_ICONS[product.slug] || FiGrid;
                            return product.status === "ready" ? (
                                <Link
                                    key={product.slug}
                                    to={product.link}
                                    className="nav-product-row"
                                    onClick={closeMobileMenu}
                                >
                                    <span className="nav-product-icon ready"><Icon /></span>
                                    <span className="nav-product-copy">
                                        <span className="nav-product-name">{product.name}</span>
                                        <span className="nav-product-tagline">{product.tagline}</span>
                                    </span>
                                </Link>
                            ) : (
                                <div key={product.slug} className="nav-product-row disabled">
                                    <span className="nav-product-icon"><Icon /></span>
                                    <span className="nav-product-copy">
                                        <span className="nav-product-name">{product.name}</span>
                                        <span className="nav-product-tagline">{product.tagline}</span>
                                    </span>
                                    <span className="nav-product-badge">Coming soon</span>
                                </div>
                            );
                        })}
                        <Link
                            to="/products"
                            className="nav-products-view-all"
                            onClick={closeMobileMenu}
                        >
                            View all products
                            <FiArrowRight />
                        </Link>
                    </div>
                    {servicesLink && (
                        <>
                            <button
                                className="mobile-nav-link mobile-products-trigger"
                                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                                aria-expanded={isMobileServicesOpen}
                            >
                                Services
                                <FiChevronDown className={`nav-products-chevron ${isMobileServicesOpen ? "open" : ""}`} />
                            </button>
                            <div className={`mobile-products-panel ${isMobileServicesOpen ? "open" : ""}`}>
                                {ServicesData.map((industry) => {
                                    const Icon = SERVICE_ICONS[industry.title] || FiGrid;
                                    return (
                                        <Link
                                            key={industry.title}
                                            to={`/industry/${encodeURIComponent(industry.title)}`}
                                            className="nav-product-row"
                                            onClick={closeMobileMenu}
                                        >
                                            <span className="nav-product-icon ready"><Icon /></span>
                                            <span className="nav-product-copy">
                                                <span className="nav-product-name">{industry.title}</span>
                                                <span className="nav-product-tagline">{SERVICE_TAGLINES[industry.title] || industry.title}</span>
                                            </span>
                                        </Link>
                                    );
                                })}
                                <Link
                                    to="/services"
                                    className="nav-products-view-all"
                                    onClick={closeMobileMenu}
                                >
                                    View all services
                                    <FiArrowRight />
                                </Link>
                            </div>
                        </>
                    )}
                    {restLinks.map((item, index) => (
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