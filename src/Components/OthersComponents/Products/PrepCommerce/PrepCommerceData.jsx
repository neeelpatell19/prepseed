import {
    FiBox, FiShoppingCart, FiLock, FiGrid, FiTruck, FiTrendingUp, FiUsers, FiRotateCcw,
    FiBarChart2, FiArchive, FiShare2, FiStar, FiGlobe, FiShoppingBag, FiRefreshCw,
    FiCreditCard, FiMessageCircle, FiFileText, FiShield, FiUserCheck, FiCheckSquare,
    FiMapPin, FiGift, FiTag, FiDollarSign, FiActivity,
} from "react-icons/fi";

export const hero = {
    eyebrow: "Prepseed Presents · PrepCommerce",
    title: ["Your website, marketplaces &", "WhatsApp shop — now they", "finally talk to each other."],
    subtitle:
        "PrepCommerce unifies your storefront, inventory and orders across every channel — website, marketplaces, Instagram and WhatsApp — with built-in payments, shipping, abandoned-cart recovery and AI-driven insights, for every order, every channel, live.",
    stats: [
        { value: "400,000+", label: "users on the engine" },
        { value: "88%", label: "typical store health index" },
        { value: "weeks", label: "not quarters, to launch" },
    ],
};

export const problems = [
    {
        icon: <FiBox />,
        title: "Inventory drifts across every channel",
        description: "Stock updates lag between the website, marketplaces and the store counter, so an item sells twice — or shows in stock when it isn't.",
        slug: "inventory-drifts-across-channels",
    },
    {
        icon: <FiShoppingCart />,
        title: "Carts are abandoned and never chased",
        description: "Most shoppers leave at checkout, and most stores have no automated way to bring them back.",
        slug: "carts-abandoned-never-chased",
    },
    {
        icon: <FiLock />,
        title: "Catalog changes wait on a developer",
        description: "A price change or a new variant means raising a ticket instead of just editing a page.",
        slug: "catalog-changes-wait-on-developer",
    },
    {
        icon: <FiGrid />,
        title: "Orders scatter across five dashboards",
        description: "Website, WhatsApp, Instagram and marketplace orders never land in one place.",
        slug: "orders-scatter-across-dashboards",
    },
    {
        icon: <FiTruck />,
        title: "COD & courier reconciliation is a spreadsheet",
        description: "NDRs, RTOs and COD remittance get tracked manually, order by order.",
        slug: "cod-courier-reconciliation-spreadsheet",
    },
    {
        icon: <FiTrendingUp />,
        title: "Marketing spend isn't tied to revenue",
        description: "Coupons and campaigns run without ever confirming which one actually drove a sale.",
        slug: "marketing-spend-not-tied-to-revenue",
    },
    {
        icon: <FiUsers />,
        title: "Customer history resets on every channel",
        description: "A repeat buyer on Instagram looks like a total stranger on the website.",
        slug: "customer-history-resets-every-channel",
    },
    {
        icon: <FiRotateCcw />,
        title: "Returns & refunds run over email",
        description: "No unified workflow for pickup, quality check and refund status.",
        slug: "returns-refunds-run-over-email",
    },
];

// Every module card links to its own dedicated detail page.
export const moduleGrid = [
    { icon: <FiBarChart2 />, title: "Business Command Center", description: "GMV, orders & channel performance, one screen", slug: "business-command-center" },
    { icon: <FiGrid />, title: "Storefront & Catalog Builder", description: "No-code pages, unlimited product variants", slug: "storefront-catalog-builder" },
    { icon: <FiShoppingCart />, title: "Cart, Checkout & Payments", description: "One-page checkout, every payment method", slug: "cart-checkout-payments" },
    { icon: <FiBox />, title: "Order Management & Fulfillment", description: "Every channel's orders, one queue", slug: "order-management-fulfillment" },
    { icon: <FiArchive />, title: "Inventory & Multi-Warehouse Sync", description: "Stock accurate everywhere, instantly", slug: "inventory-multi-warehouse-sync" },
    { icon: <FiShare2 />, title: "Multi-Channel & Marketplace Sync", description: "Website, WhatsApp, Instagram, Amazon & more", slug: "multi-channel-marketplace-sync" },
    { icon: <FiTruck />, title: "Shipping, Logistics & Tracking", description: "Rate-shopping, branded tracking, NDR/RTO", slug: "shipping-logistics-tracking" },
    { icon: <FiTrendingUp />, title: "Marketing & Abandoned-Cart Recovery", description: "Coupons, bundles, automated win-backs", slug: "marketing-abandoned-cart-recovery" },
    { icon: <FiUsers />, title: "Customer Accounts, Loyalty & CRM", description: "One profile per customer, every channel", slug: "customer-accounts-loyalty-crm" },
    { icon: <FiStar />, title: "Reviews, Ratings & UGC", description: "Verified reviews, photos & product Q&A", slug: "reviews-ratings-ugc" },
];

export const spotlights = [
    {
        id: "business-command-center",
        eyebrow: "Module — Business Command Center",
        title: "See your entire commerce operation in one glance.",
        description:
            "GMV, orders and channel performance refreshed live — one screen instead of five different dashboards to reconcile.",
        bullets: [
            "GMV and order counts refreshed live, for today or any custom range.",
            "Channel-by-channel breakdown shows exactly where revenue is coming from.",
            "Role-aware — owners see the whole business; staff see only what their role permits.",
            "The same numbers power the seller app, so the picture never differs by device.",
        ],
        mockup: "dashboard",
        reversed: false,
    },
    {
        id: "storefront-catalog-builder",
        eyebrow: "Module — Storefront & Catalog Builder",
        title: "A storefront your team can update — no developer, no ticket.",
        description:
            "Drag-and-drop pages, unlimited product variants and built-in SEO — every change previewable before it goes live.",
        bullets: [
            "Drag-and-drop page builder — hero banners, collections and landing pages, edited live without code.",
            "Unlimited variants per product — size, color and material, each with its own price, stock and images.",
            "Built-in SEO & speed — fast-loading pages and clean metadata, out of the box.",
            "Preview before you publish — every change is previewable on desktop and mobile before it goes live.",
        ],
        mockup: "storefront",
        reversed: true,
    },
    {
        id: "cart-checkout-payments",
        eyebrow: "Module — Cart, Checkout & Payments",
        title: "A one-page checkout that doesn't lose the sale.",
        description:
            "Address, payment and confirmation in a single scroll, with every payment method that matters and PCI-DSS compliance by default.",
        bullets: [
            "One-page, mobile-first checkout — address, payment and confirmation in a single scroll, no redirects.",
            "Every payment method that matters — UPI, cards, net-banking, wallets, COD and BNPL, out of the box.",
            "Auto-saved addresses & one-click reorder — returning customers check out in seconds.",
            "PCI-DSS compliant, always — card data never touches your servers.",
        ],
        mockup: "cart",
        reversed: false,
    },
    {
        id: "order-management-fulfillment",
        eyebrow: "Module — Order Management & Fulfillment",
        title: "Every order, from every channel, in one queue.",
        description:
            "A single fulfillment view with a live status stepper per order, whether it came from the website, WhatsApp, Amazon or Instagram.",
        bullets: [
            "Every channel's orders land in the same queue — no switching between five dashboards.",
            "A live status stepper shows placed, packed, shipped and delivered per order.",
            "Filter and search across every channel, customer or status at once.",
            "Bulk actions — pack, ship or print labels for many orders at a time.",
        ],
        mockup: "orders",
        reversed: true,
    },
    {
        id: "inventory-multi-warehouse-sync",
        eyebrow: "Module — Inventory & Multi-Warehouse Sync",
        title: "Stock that's accurate everywhere, the moment it changes anywhere.",
        description:
            "A sale on Instagram updates stock on the website and every marketplace instantly — with low-stock alerts before a bestseller runs out.",
        bullets: [
            "Real-time sync across every channel — a sale on Instagram instantly updates stock everywhere else.",
            "Multi-warehouse & multi-location stock — route each order to the warehouse that can ship it fastest.",
            "Low-stock & reorder alerts — automatic nudges before a bestseller goes out of stock.",
            "Bundle & kit inventory — stock for combos and kits tracked against the components that make them.",
        ],
        mockup: "inventory",
        reversed: false,
    },
    {
        id: "multi-channel-marketplace-sync",
        eyebrow: "Module — Multi-Channel & Marketplace Sync",
        title: "Sell everywhere your customer already is.",
        description:
            "One catalog pushes to Amazon, Flipkart, Meesho, WhatsApp, Instagram and your in-store POS — all reading from the same live inventory.",
        bullets: [
            "One catalog, every marketplace — list once, push updates to Amazon, Flipkart, Meesho and more automatically.",
            "Native WhatsApp & Instagram storefronts — customers browse and buy without ever leaving the chat.",
            "In-store POS, same backend — walk-in sales deduct from the same inventory as your website.",
            "Channel-level pricing rules — adjust price or margin per channel without duplicating the catalog.",
        ],
        mockup: "channels",
        reversed: true,
    },
    {
        id: "shipping-logistics-tracking",
        eyebrow: "Module — Shipping, Logistics & Tracking",
        title: "The right courier, the right rate, every single order.",
        description:
            "Multi-courier rate shopping picks the best option automatically, with a branded tracking page and automated COD reconciliation.",
        bullets: [
            "Multi-courier rate shopping — every order routed to the cheapest or fastest courier automatically.",
            "Branded tracking page — customers track orders on a page that carries your brand, not the courier's.",
            "NDR & RTO management — automated retry workflows for failed and returned deliveries.",
            "COD reconciliation, automated — remittance matched against orders, no spreadsheet required.",
        ],
        mockup: "shipping",
        reversed: false,
    },
    {
        id: "marketing-abandoned-cart-recovery",
        eyebrow: "Module — Marketing & Abandoned-Cart Recovery",
        title: "Recover the sale before the customer forgets they wanted it.",
        description:
            "Automated WhatsApp, SMS and email nudges bring shoppers back to checkout, with every coupon and campaign traceable to real revenue.",
        bullets: [
            "Automated abandoned-cart recovery — WhatsApp, SMS and email nudges triggered within minutes.",
            "Coupons, bundles & flash sales — a built-in discount engine, no third-party plugin required.",
            "Campaigns tied to real revenue — see exactly which coupon or campaign drove which order.",
            "Customer segmentation — target first-time buyers, repeat customers or high-value segments differently.",
        ],
        mockup: "marketing",
        reversed: true,
    },
    {
        id: "customer-accounts-loyalty-crm",
        eyebrow: "Module — Customer Accounts, Loyalty & CRM",
        title: "One customer, one history — no matter where they bought.",
        description:
            "Every order across every channel lives on one timeline, with loyalty points, store credit and wishlists that follow the customer everywhere.",
        bullets: [
            "Unified customer profile — every order, across every channel, on one timeline.",
            "Loyalty points & store credit — configurable earn-and-burn rules, redeemable right at checkout.",
            "Wishlist & saved carts — bring customers back to exactly what they were looking at.",
            "CRM-ready customer data — segment, export, or push straight into your marketing tools.",
        ],
        mockup: "profile",
        reversed: false,
    },
    {
        id: "reviews-ratings-ugc",
        eyebrow: "Module — Reviews, Ratings & UGC",
        title: "Let your happiest customers do the selling.",
        description:
            "Verified-purchase reviews, photos and Q&A build trust on every product page — moderated before anything goes live.",
        bullets: [
            "Verified-purchase reviews — ratings tied to an actual order, not open to anyone.",
            "Photo & video reviews — customers upload real photos, shown right on the product page.",
            "Moderation queue — approve, respond to, or flag reviews before they go live.",
            "Q&A on every product page — shoppers get answers from you, or from other buyers.",
        ],
        mockup: "reviews",
        reversed: true,
    },
];

// ---------- Business command center / seller dashboard mockup ----------
export const dashboardStats = [
    { label: "GMV Today", value: "₹1.84L", sub: "across all channels", tone: "comm" },
    { label: "Orders", value: "142", sub: "today", tone: "green" },
    { label: "Avg Order Value", value: "₹1,296", sub: "today", tone: "blue" },
];
export const dashboardChannels = [
    { channel: "Website", orders: "68", gmv: "₹92k" },
    { channel: "WhatsApp", orders: "41", gmv: "₹51k" },
];

// ---------- Storefront mockup ----------
export const storefrontProducts = [
    { name: "Classic Tee — Navy", price: "₹799", oldPrice: null, badge: "NEW" },
    { name: "Relaxed Chinos", price: "₹1,499", oldPrice: "₹1,999", badge: "SALE" },
    { name: "Everyday Sneakers", price: "₹2,299", oldPrice: null, badge: null },
];

// ---------- Cart / checkout mockup ----------
export const cartItems = [
    { name: "Classic Tee — Navy, M", meta: "Qty 2", amount: "₹1,598" },
    { name: "Relaxed Chinos — 32", meta: "Qty 1", amount: "₹1,499" },
    { name: "Canvas Tote Bag", meta: "Qty 1", amount: "₹649" },
];
export const cartTotal = "₹3,746";
export const paymentMethods = [
    { name: "UPI", color: "#ff6b35" },
    { name: "Cards", color: "#2f6fed" },
    { name: "Wallets", color: "#667eea" },
    { name: "Net Banking", color: "#f5a524" },
    { name: "BNPL", color: "#16b866" },
    { name: "COD", color: "#9aa6bb" },
];

// ---------- Order management mockup ----------
export const orderSteps = [
    { label: "Placed", time: "9:02 AM", status: "done" },
    { label: "Packed", time: "11:40 AM", status: "done" },
    { label: "Shipped", time: "Today, 2:15 PM", status: "active" },
    { label: "Out for delivery", time: "—", status: "pending" },
    { label: "Delivered", time: "—", status: "pending" },
];
export const orderRows = [
    { order: "#PC-10482", channel: "Website", customer: "Aarav Shah", initial: "A", color: "#2f6fed", amount: "₹3,746", status: "Shipped" },
    { order: "#PC-10481", channel: "WhatsApp", customer: "Meera Joshi", initial: "M", color: "#667eea", amount: "₹1,499", status: "Delivered" },
    { order: "#PC-10480", channel: "Amazon", customer: "Rohan Iyer", initial: "R", color: "#f5a524", amount: "₹2,299", status: "Packed" },
    { order: "#PC-10479", channel: "Instagram", customer: "Priya Nair", initial: "P", color: "#16b866", amount: "₹649", status: "Placed" },
];

// ---------- Inventory mockup ----------
export const inventoryStats = [
    { label: "Total SKUs", value: "1,284", tone: "comm" },
    { label: "Low Stock", value: "18", tone: "red" },
    { label: "Warehouses", value: "3", tone: "blue" },
];
export const inventoryRows = [
    { product: "Classic Tee — Navy, M", mumbai: "42", delhi: "18", bengaluru: "4", lowIn: "bengaluru" },
    { product: "Relaxed Chinos — 32", mumbai: "26", delhi: "31", bengaluru: "19", lowIn: null },
    { product: "Everyday Sneakers — 9", mumbai: "2", delhi: "14", bengaluru: "11", lowIn: "mumbai" },
    { product: "Canvas Tote Bag", mumbai: "88", delhi: "52", bengaluru: "60", lowIn: null },
];

// ---------- Multi-channel mockup ----------
export const channels = [
    { name: "Website", status: "Synced" },
    { name: "WhatsApp Shop", status: "Synced" },
    { name: "Instagram", status: "Synced" },
    { name: "Amazon", status: "Synced" },
    { name: "Flipkart", status: "Synced" },
    { name: "In-Store POS", status: "Synced" },
];

// ---------- Shipping mockup ----------
export const shippingRates = [
    { courier: "Delhivery", eta: "2 days", rate: "₹42", selected: true },
    { courier: "Shiprocket", eta: "2 days", rate: "₹48", selected: false },
    { courier: "Xpressbees", eta: "3 days", rate: "₹39", selected: false },
    { courier: "Ecom Express", eta: "2 days", rate: "₹45", selected: false },
];

// ---------- Marketing / funnel mockup ----------
export const funnelSteps = [
    { label: "Cart created", value: "2,140", pct: 100, color: "var(--pcom-comm)" },
    { label: "Checkout started", value: "1,455", pct: 68, color: "var(--pcom-amber)" },
    { label: "Payment started", value: "984", pct: 46, color: "var(--pcom-blue)" },
    { label: "Order completed", value: "728", pct: 34, color: "var(--pcom-green)" },
];
export const cartRecoveryInsight = {
    title: "WhatsApp recovery nudge sent to 412 abandoned carts",
    description: "112 completed checkout within 24 hours — a 27% recovery rate.",
};

// ---------- Customer profile mockup ----------
export const customerProfile = {
    name: "Meera Joshi",
    meta: "Customer since Mar 2024 · Website + WhatsApp + Instagram",
    stats: [
        { label: "Lifetime Orders", value: "14", tone: "blue" },
        { label: "Lifetime Value", value: "₹28.4k", tone: "green" },
        { label: "Loyalty Points", value: "1,240", tone: "amber" },
    ],
    orders: [
        { order: "#PC-10481", channel: "WhatsApp", amount: "₹1,499" },
        { order: "#PC-9902", channel: "Website", amount: "₹2,299" },
        { order: "#PC-9714", channel: "Instagram", amount: "₹899" },
    ],
};

// ---------- Reviews mockup ----------
export const reviews = [
    {
        stars: 5,
        who: "Rohan Iyer · Verified Purchase — Classic Tee, Navy",
        text: "Fits true to size and the fabric feels heavier than I expected for the price. Ordered two more colors already.",
        thumbs: true,
    },
    {
        stars: 4,
        who: "Priya Nair · Verified Purchase — Everyday Sneakers",
        text: "Comfortable out of the box. Delivery took a day longer than promised, otherwise no complaints.",
        thumbs: false,
    },
];

// ---------- App access section ----------
export const appAccess = [
    { icon: <FiGlobe />, title: "Works in any browser", description: "Storefront, dashboard & reports — nothing for shoppers or staff to install." },
    { icon: <FiUsers />, title: "Seller / owner app", description: "Orders, inventory and GMV, wherever the owner is." },
    { icon: <FiShoppingBag />, title: "Customer shopping app", description: "Browse, cart and reorder — under your own brand." },
];

export const appAccessInfoTiles = [
    { icon: <FiGlobe />, title: "Published under your domain", description: "shop.yourbrand.com — PrepCommerce stays invisible." },
    { icon: <FiRefreshCw />, title: "Real-time sync", description: "Mirrors exactly what every channel sells, live." },
];

// ---------- Integrations settings mockup ----------
export const settingsRows = [
    { name: "Razorpay", initial: "R", color: "#02042b" },
    { name: "Shiprocket", initial: "S", color: "#5a31f4" },
    { name: "WhatsApp Business API", initial: "W", color: "#25d366" },
];

export const integrations = [
    {
        name: "Payment gateways",
        status: "Connected · Razorpay, PayU, Stripe",
        description: "Razorpay, PayU, Stripe and more — connect the one you already use.",
    },
    {
        name: "Courier aggregators",
        status: "Connected · rate-shopped live",
        description: "Shiprocket, Delhivery, Xpressbees and more, rate-shopped automatically.",
    },
    {
        name: "WhatsApp Business API",
        status: "Connected · native",
        description: "Order confirmations, tracking updates and cart-recovery nudges.",
    },
];

export const moreIntegrations = ["Amazon / Flipkart / Meesho", "Tally / Zoho Books", "Open API / Webhooks"];

export const storeHealth = { value: 88, label: "Store Health", sub: "Company Health Index — rolling 7-day blend of conversion, fulfillment SLA and repeat-purchase rate." };

export const aiInsights = [
    {
        icon: <FiActivity />,
        title: "Store B's cart abandonment is 22% higher than Store A",
        description: "Same campaign, different checkout speed — worth investigating page load on mobile.",
    },
    {
        icon: <FiMessageCircle />,
        title: "WhatsApp Shop converts 2x better than Instagram",
        description: "Redirect ad spend toward the higher-converting channel this month.",
    },
    {
        icon: <FiBox />,
        title: "Restock \"Classic Tee — Navy, M\" within 3 days",
        description: "Selling out twice a week at current velocity across all channels.",
    },
    {
        icon: <FiTrendingUp />,
        title: "18% of repeat orders traced to an abandoned-cart nudge",
        description: "Your highest-ROI campaign this quarter, by a wide margin.",
    },
];

export const complianceItems = [
    { icon: <FiCreditCard />, title: "PCI-DSS compliant payments", description: "Card data is tokenized at the gateway — it never touches your servers." },
    { icon: <FiLock />, title: "Encrypted at rest & in transit", description: "Customer and order data protected end to end, always." },
    { icon: <FiFileText />, title: "GST-ready invoicing", description: "Every order generates a compliant tax invoice automatically." },
    { icon: <FiShield />, title: "DPDP Act aligned data handling", description: "Customer data collected, stored and purged in line with Indian data-protection law." },
    { icon: <FiUserCheck />, title: "Role-based access control", description: "Staff, managers and owners see only what their role permits." },
    { icon: <FiCheckSquare />, title: "Full audit trail", description: "Every order edit, refund and access is logged against the account that made it." },
];

export const extraFeatures = [
    {
        icon: <FiFileText />,
        title: "GST-Ready Invoicing",
        description: "Every order generates a compliant tax invoice automatically, no manual bookkeeping.",
        bullets: ["Compliant invoice on every order", "Syncs with Tally / Zoho Books", "No manual GST calculation"],
        slug: "gst-ready-invoicing",
    },
    {
        icon: <FiMapPin />,
        title: "Branded Tracking Page",
        description: "Customers track orders on a page that carries your brand, not the courier's.",
        bullets: ["Your logo and colors, not the courier's", "Live status pulled from every courier", "Reduces \"where is my order\" support tickets"],
        slug: "branded-tracking-page",
    },
    {
        icon: <FiGift />,
        title: "Loyalty & Store Credit",
        description: "Configurable earn-and-burn rules, redeemable right at checkout.",
        bullets: ["Points earned per order automatically", "Store credit redeemable at checkout", "Configurable earn-and-burn rules"],
        slug: "loyalty-store-credit",
    },
    {
        icon: <FiTag />,
        title: "Coupons & Flash Sales",
        description: "A built-in discount engine for coupons, bundles and flash sales — no third-party plugin required.",
        bullets: ["Coupons, bundles and flash sales, native", "Every campaign traceable to real revenue", "No third-party discount plugin needed"],
        slug: "coupons-flash-sales",
    },
];

export const whitelabelChecklist = [
    { title: "Your logo & brand color", description: "Applied across the storefront, checkout and both mobile apps." },
    { title: "Your domain", description: "shop.yourbrand.com — customers never see \"Prepseed.\"" },
    { title: "Your notifications", description: "WhatsApp, SMS & email sent under your brand name." },
    { title: "Your payment gateway", description: "Keep the gateway and merchant account you already have." },
    { title: "Your invoice templates", description: "Every invoice and shipping label carries your branding." },
    { title: "Your support line", description: "Your customers reach you — never Prepseed." },
    { title: "Your courier partners, kept", description: "No forced switch — PrepCommerce works with the couriers you already use." },
    { title: "Your pricing", description: "You decide what to charge your own customers or sub-sellers." },
];

export const replacedTools = [
    { from: "Cart-abandonment plugin", to: "WhatsApp & SMS recovery — built in" },
    { from: "Standalone loyalty app", to: "Loyalty points & store credit, native" },
    { from: "Review-widget subscription", to: "Reviews, ratings & UGC — built in" },
    { from: "Courier aggregator dashboard", to: "Shipping & rate-shopping, built in" },
    { from: "Excel-based inventory tracker", to: "Real-time multi-warehouse sync" },
    { from: "Standalone CRM tool", to: "Customer accounts & CRM, native" },
    { from: "Marketplace listing tool", to: "Multi-channel & marketplace sync" },
    { from: "Separate analytics subscription", to: "Reports & AI Insights, built in" },
];

export const replaceInfoTiles = [
    { icon: <FiDollarSign />, title: "One vendor, one bill", description: "No juggling separate renewals and support tickets." },
    { icon: <FiCheckSquare />, title: "No plugin conflicts", description: "Nothing breaks your storefront on the next theme or plugin update." },
    { icon: <FiShield />, title: "Your data stays in one place", description: "Never scattered across multiple point-solution vendors." },
    { icon: <FiUserCheck />, title: "One team accountable", description: "Prepseed builds, hosts and supports all of it — no finger-pointing." },
];

export const migrationSteps = [
    { step: 1, title: "Share your catalog & channels", description: "Product data, existing marketplace listings and current payment/shipping setup." },
    { step: 2, title: "We configure store, payments & shipping", description: "Storefront, checkout, couriers and tax rules set up around how you already operate." },
    { step: 3, title: "Pilot with real orders", description: "Live on one channel first, so pricing, tax and fulfillment are verified before scale." },
    { step: 4, title: "Roll out across every channel", description: "Same catalog, same dashboard, across web, marketplaces and social — live within weeks." },
];

export const migrationInfoTiles = [
    { icon: <FiCheckSquare />, title: "Zero downtime", description: "Your existing storefront keeps selling throughout migration." },
    { icon: <FiShield />, title: "Verified before scale", description: "Nothing rolls out company-wide until the pilot proves out." },
    { icon: <FiRefreshCw />, title: "No vendor lock-in", description: "Works with the payment gateway and couriers you already use." },
    { icon: <FiUsers />, title: "Dedicated rollout team", description: "A real person owns your migration, start to finish." },
];

export const whyPrepseed = [
    { value: "400,000+", label: "Users", description: "Powering platforms across EdTech, Enterprise, Healthcare and Real Estate." },
    { value: "$1.2M", label: "Trusted backing", description: "Investor-backed (2022) engineering team, not a freelance build." },
    { value: "0", label: "Downtime", description: "US military-grade servers with automatic failover — always on, even during flash sales." },
    { value: "2", label: "Continents", description: "Primary data in India; encrypted backups held in the US." },
    { value: "Scale", label: "Built in from day one", description: "From a single storefront to hundreds of SKUs and channels — same platform, no re-platforming later." },
    { value: "1", label: "Role sees it all", description: "No one but you sees the full company database — every other role stays scoped." },
    { value: "24/7", label: "Real support", description: "A dedicated team for setup, tuning and ongoing customization." },
    { value: "Weeks", label: "Not quarters", description: "Whitelabeled & live in weeks, not quarters." },
];

export const contact = {
    call: "+91 99133 82221",
    email: "vivek@prepseed.com",
    web: "prepseed.com",
    studio: "Ahmedabad, Gujarat",
};
