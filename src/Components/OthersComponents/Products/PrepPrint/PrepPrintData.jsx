import {
    FiClipboard, FiPercent, FiUploadCloud, FiPackage, FiPrinter, FiFileText, FiUser, FiGrid, FiHome,
    FiCreditCard, FiShoppingBag, FiTruck, FiMessageCircle, FiCheckSquare, FiShield, FiDatabase,
    FiUserCheck, FiActivity, FiStar, FiCheck, FiClock, FiUsers, FiGlobe, FiLayers, FiTag, FiBarChart2,
} from "react-icons/fi";

export const hero = {
    eyebrow: "Prepseed Presents · PrepPrint",
    title: ["Every job, every machine, every rupee —", "tracked to the last print."],
    subtitle:
        "A single, white-labeled printing & press management ERP — quotations, job tracking, design files, billing and stock, running natively on web and mobile. Sold under your own brand.",
    caption: "Print Shop & Press Management Platform · 2026 Edition",
    stats: [
        { value: "3", label: "apps — owner, operator & customer" },
        { value: "0", label: "paper dockets or WhatsApp screenshots" },
        { value: "Weeks", label: "not quarters, to go live" },
    ],
};

export const problems = [
    { icon: <FiClipboard />, title: "Orders scribbled on a paper docket", description: "Specs, quantity and deadline live on a slip of paper that can go missing.", slug: "orders-scribbled-paper-docket" },
    { icon: <FiPercent />, title: "Every quote worked out by hand", description: "Paper, plate and finishing costs recalculated on a calculator, every single time.", slug: "quote-worked-out-by-hand" },
    { icon: <FiUploadCloud />, title: "Artwork scattered across chats and folders", description: "\"Which file did the customer actually send?\" — asked on every reprint or reorder.", slug: "artwork-scattered-chats-folders" },
    { icon: <FiPackage />, title: "Nobody knows the paper stock till it runs out", description: "A job gets halfway printed before someone notices the roll is empty.", slug: "paper-stock-runs-out" },
    { icon: <FiPrinter />, title: "Machines double-booked, deadlines missed", description: "No shared view of which press is free, so urgent jobs queue behind slow ones.", slug: "machines-double-booked" },
    { icon: <FiFileText />, title: "GST billing done at the very end, in a rush", description: "Invoices hand-typed after the job ships, riddled with copy-paste errors.", slug: "gst-billing-rushed" },
    { icon: <FiUser />, title: "Repeat customers, zero history", description: "Their last design, size and rate live in someone's memory, not a record.", slug: "repeat-customers-zero-history" },
    { icon: <FiGrid />, title: "Walk-in, phone and online orders, scattered", description: "Three intake channels, three different registers — nothing reconciled.", slug: "orders-scattered-channels" },
    { icon: <FiHome />, title: "Owners can't see across branches", description: "No consolidated view of sales, job profitability or machine utilization.", slug: "owners-no-cross-branch-view" },
];

// Every module card links to its own dedicated detail page.
export const moduleGrid = [
    { icon: <FiClipboard />, title: "Order & Job Management", description: "Intake to dispatch, tracked stage by stage", slug: "order-job-management" },
    { icon: <FiPercent />, title: "Quotation & Estimation", description: "Instant rate-card pricing, every material", slug: "quotation-estimation" },
    { icon: <FiUploadCloud />, title: "Design & Artwork Upload", description: "Every job's artwork, attached and organized", slug: "design-artwork-upload" },
    { icon: <FiCreditCard />, title: "POS & GST Billing", description: "Counter billing, GST invoices, one tap", slug: "pos-gst-billing" },
    { icon: <FiPackage />, title: "Inventory & Stock", description: "Paper, ink, vinyl — low-stock alerts", slug: "inventory-stock" },
    { icon: <FiPrinter />, title: "Machine & Press Scheduling", description: "One queue, every press, zero clashes", slug: "machine-press-scheduling" },
    { icon: <FiUser />, title: "Customer & Order History", description: "Every past job, rate and design, on file", slug: "customer-order-history" },
    { icon: <FiShoppingBag />, title: "Vendor & Purchase", description: "Raw material POs and supplier ledgers", slug: "vendor-purchase" },
    { icon: <FiTruck />, title: "Delivery & Dispatch", description: "Pickup, courier and delivery tracking", slug: "delivery-dispatch" },
    { icon: <FiMessageCircle />, title: "WhatsApp Order Updates", description: "Order confirmations & ready-for-pickup alerts", slug: "whatsapp-order-updates" },
];

export const alsoIncluded = [
    { label: "Rate Card & Bulk Pricing Rules", slug: "rate-card-bulk-pricing-rules" },
    { label: "Multi-Branch & Franchise Management", slug: "multi-branch-franchise-management" },
    { label: "Staff & Operator Management", slug: "staff-operator-management" },
    { label: "Online Ordering Portal", slug: "online-ordering-portal" },
    { label: "Barcode & Job-Ticket Tracking", slug: "barcode-job-ticket-tracking" },
    { label: "Reports & AI Insights", slug: "reports-ai-insights" },
];

export const spotlights = [
    {
        id: "order-job-management",
        eyebrow: "Module — Order & Job Management",
        title: "Every job, one queue — from intake to dispatch.",
        accent: "from intake to dispatch",
        tone: "indigo",
        description: "Walk-in, phone and online orders all land in the same tracked queue — New Order, Artwork Received, In Print, Finishing, Ready for Pickup — so nothing ships late and nothing gets lost.",
        bullets: [
            "Add jobs from any channel — walk-in, phone or online, every order lands in one queue.",
            "Deadline-aware ordering — urgent jobs surface automatically, so nothing ships late.",
            "Full job history — every status change, note and file logged against the job.",
            "Export anytime — one click to CSV for offline review or accounting.",
        ],
        mockup: "orderJob",
        reversed: false,
    },
    {
        id: "quotation-estimation",
        eyebrow: "Module — Quotation & Estimation",
        title: "A rate card that quotes itself.",
        accent: "quotes itself",
        tone: "blue",
        description: "Size, quantity and finishing auto-calculate the quote the instant they're entered — no back-of-envelope math, and an accepted quote becomes a live job with one tap.",
        bullets: [
            "Rate cards, per material — flex, vinyl, paper stock and lamination rates configured once, applied everywhere.",
            "Instant, accurate pricing — size, quantity and finishing auto-calculate the quote, no more back-of-envelope math.",
            "Bulk & slab pricing — set quantity breakpoints so larger orders price themselves correctly, automatically.",
            "One tap to convert to an order — an accepted quote becomes a live job, no re-entry, no mismatch.",
        ],
        mockup: "quote",
        reversed: true,
    },
    {
        id: "design-artwork-upload",
        eyebrow: "Module — Design & Artwork Upload",
        title: "Every file, attached to the right job.",
        accent: "attached to the right job",
        tone: "green",
        description: "Customers or designers drop artwork straight onto the job, and it stays tied there automatically — no digging through chats or folders to find out what a customer actually sent.",
        bullets: [
            "Upload from anywhere — customers or designers drop artwork straight onto the job, PDF, AI or high-res images.",
            "Every file, tied to the job — artwork stays attached to its order automatically, no digging through chats or folders.",
            "Straight to the operator — the uploaded file is right there at the press, no manual transfer, no USB drives.",
            "Reprints made simple — past artwork stays on file, ready to pull up for a repeat order in seconds.",
        ],
        mockup: "artwork",
        reversed: false,
    },
    {
        id: "pos-gst-billing",
        eyebrow: "Module — POS & GST Billing",
        title: "Counter billing that's already GST-ready.",
        accent: "already GST-ready",
        tone: "green",
        description: "Every invoice generates with the correct HSN codes and tax slabs applied automatically, split and partial payments are tracked from intake through pickup, and every counter rolls into one daily sales register.",
        bullets: [
            "GST invoices, auto-generated — HSN codes and tax slabs applied correctly, every time.",
            "Split & partial payments — advance at intake, balance on pickup, tracked automatically.",
            "UPI & card, right at the counter — accept any payment method, reconciled the same day.",
            "Multi-counter, one ledger — every counter and branch rolls into one daily sales register.",
        ],
        mockup: "billing",
        reversed: true,
    },
    {
        id: "inventory-stock",
        eyebrow: "Module — Inventory & Stock",
        title: "Never find out the stock is empty mid-job.",
        accent: "mid-job",
        tone: "red",
        description: "Paper, ink and vinyl usage deducts from stock the moment a job goes to print, and reorder levels trigger an alert before a job is halfway printed on an empty roll.",
        bullets: [
            "Auto-deduct on every job — paper, ink and vinyl usage is deducted from stock the moment a job goes to print.",
            "Low-stock alerts, before it's too late — reorder levels trigger a WhatsApp or app alert, never mid-print surprises.",
            "Per-branch stock visibility — owners see stock across every branch, and can transfer between them in a tap.",
            "Wastage & consumption reports — see exactly which jobs or materials are eating into margins.",
        ],
        mockup: "inventory",
        reversed: false,
    },
    {
        id: "machine-press-scheduling",
        eyebrow: "Module — Machine & Press Scheduling",
        title: "Every press, one shared schedule.",
        accent: "one shared schedule",
        tone: "indigo",
        description: "Every machine's current job, operator and ETA is visible on one shared queue, so urgent jobs never queue behind a slow one and every customer gets a pickup time based on the real schedule.",
        bullets: [
            "One queue, every machine — see exactly what's running and what's free, live.",
            "Realistic ETAs — customers get accurate pickup times, based on the real queue.",
            "No more double-booking — every job is assigned a press slot before it's confirmed.",
            "Operator accountability — every job is tied to the operator and machine that ran it.",
        ],
        mockup: "pressSchedule",
        reversed: true,
    },
    {
        id: "customer-order-history",
        eyebrow: "Module — Customer & Order History",
        title: "Every repeat customer, one file away.",
        accent: "one file away",
        tone: "blue",
        description: "A customer's lifetime value, preferred rate and payment history sit on one profile, so a repeat order — or a reprint of last year's design — never starts with a single question asked.",
        bullets: [
            "Every past order, one click away — reprint last year's design at the same spec without a single question asked.",
            "Custom rates per customer — set negotiated discounts or bulk rates that apply automatically on every quote.",
            "Payment reliability, at a glance — see who pays on time before extending credit on a rush order.",
            "Past designs, saved forever — every artwork file stays linked to the customer, ready to reuse or revise.",
        ],
        mockup: "customerHistory",
        reversed: false,
    },
    {
        id: "vendor-purchase",
        eyebrow: "Module — Vendor & Purchase Management",
        title: "Raw material buying, off the notebook.",
        accent: "off the notebook",
        tone: "purple",
        description: "A low-stock alert can become a purchase order in one tap, every supplier ledger stays current automatically, and purchase cost feeds straight into true job profitability.",
        bullets: [
            "POs raised straight from low stock — a reorder alert can become a purchase order in one tap.",
            "Supplier ledgers, always current — track what's owed to every vendor without a separate register.",
            "Delivery tracking, per PO — know what's ordered, in transit or delivered, at a glance.",
            "Cost-of-goods, tied to jobs — purchase cost feeds straight into true job profitability.",
        ],
        mockup: "vendorPurchase",
        reversed: true,
    },
    {
        id: "delivery-dispatch",
        eyebrow: "Module — Delivery & Dispatch",
        title: "From press to doorstep, tracked all the way.",
        accent: "tracked all the way",
        tone: "green",
        description: "Customers pick a fulfillment option at order time, a shipment hands off to a courier partner without leaving PrepPrint, and a WhatsApp ping fires the moment a job clears finishing.",
        bullets: [
            "Pickup or delivery, your choice — customers pick a fulfillment option at order time: walk-in, courier or home delivery.",
            "Courier & logistics partner sync — hand off to your courier partner and track the shipment without leaving PrepPrint.",
            "Proof-of-delivery on file — signature or photo confirmation attached to the job automatically.",
            "Ready-for-pickup alerts — customers get a WhatsApp ping the moment their job clears finishing.",
        ],
        mockup: "dispatch",
        reversed: false,
    },
];

// ---------- Order & Job Management (kanban) mockup ----------
export const orderColumns = [
    { key: "new", title: "New Order", count: 14, cards: [
        { name: "Wedding Cards — Mehta", meta: "500 pcs · Due 18 Apr" },
        { name: "Flex Banner — Café Aroma", meta: "10×4 ft · Due 16 Apr" },
    ] },
    { key: "artwork", title: "Artwork Received", count: 9, cards: [
        { name: "Visiting Cards — Solanki", meta: "File uploaded · in queue" },
        { name: "Brochure — Nirvana Realty", meta: "Updated file uploaded" },
    ] },
    { key: "print", title: "In Print", count: 11, cards: [
        { name: "Stickers — Bloom Bakery", meta: "Press 2 · 40% done" },
        { name: "T-Shirts — College Fest", meta: "DTF Press · 200 pcs" },
    ] },
    { key: "finishing", title: "Finishing", count: 6, cards: [
        { name: "Invitations — Rane Family", meta: "Lamination & die-cut" },
    ] },
    { key: "pickup", title: "Ready for Pickup", count: 8, cards: [
        { name: "Letterheads — Vyas & Co.", meta: "Notified via WhatsApp" },
        { name: "Photo Prints — Iyer", meta: "Notified via WhatsApp" },
    ] },
];

// ---------- Quotation & Estimation mockup ----------
export const quoteForm = {
    title: "New Quote — Flex Banner",
    fields: [
        { label: "Size", value: "10 × 4 ft" },
        { label: "Material", value: "Star Flex" },
        { label: "Finishing", value: "Eyelets" },
    ],
    rows: [
        { item: "Flex printing (40 sq.ft)", rate: "₹14/sq.ft", amount: "₹560" },
        { item: "Eyelet finishing (12 pcs)", rate: "₹5/pc", amount: "₹60" },
        { item: "Design charge", rate: "Flat", amount: "₹150" },
    ],
    total: { label: "Total (incl. GST)", amount: "₹919" },
};

// ---------- Design & Artwork Upload mockup ----------
export const artworkJob = {
    title: "Wedding Cards — Mehta",
    badge: "3 files attached",
    previewName: "Card_Front.pdf",
    previewTag: "PDF",
    files: [
        { name: "Card_Front.pdf", uploaded: "14 Apr, 11:05 AM", format: "PDF" },
        { name: "Card_Back.pdf", uploaded: "14 Apr, 11:06 AM", format: "PDF" },
        { name: "Envelope_Design.ai", uploaded: "12 Apr, 10:20 AM", format: "AI" },
    ],
};

// ---------- POS & GST Billing mockup ----------
export const billingStats = [
    { label: "Orders Today", value: "42", tone: "blue" },
    { label: "Sales Today", value: "₹68,400", tone: "green" },
    { label: "Avg. Ticket", value: "₹1,629", tone: "indigo" },
    { label: "Pending Payment", value: "7", tone: "amber" },
    { label: "Online Payments", value: "61%", tone: "blue" },
];
export const billingRows = [
    { invoice: "INV-1042", customer: "Rane Family", job: "Invitations × 300", amount: "₹8,400", status: "Paid" },
    { invoice: "INV-1043", customer: "Vyas & Co.", job: "Letterheads × 500", amount: "₹2,100", status: "Paid" },
    { invoice: "INV-1044", customer: "Bloom Bakery", job: "Stickers × 1,000", amount: "₹3,600", status: "Balance due" },
];

// ---------- Inventory & Stock mockup ----------
export const inventoryRows = [
    { material: "Star Flex (roll)", stock: "4 rolls", reorder: "6 rolls", status: "Low stock" },
    { material: "Art Card 300gsm", stock: "820 sheets", reorder: "500 sheets", status: "OK" },
    { material: "Lamination Film (Matte)", stock: "2 rolls", reorder: "4 rolls", status: "Low stock" },
    { material: "Vinyl Sticker Sheet", stock: "310 sheets", reorder: "150 sheets", status: "OK" },
    { material: "DTF Ink — Cyan", stock: "1.2 L", reorder: "1 L", status: "Reorder soon" },
];

// ---------- Machine & Press Scheduling mockup ----------
export const pressRows = [
    { machine: "Offset Press 1", job: "Wedding Cards — Mehta (500 pcs)", operator: "Sanjay", eta: "2:30 PM", status: "Running" },
    { machine: "Offset Press 2", job: "Brochure — Nirvana Realty", operator: "Feroz", eta: "4:00 PM", status: "Running" },
    { machine: "Flex Printer", job: "Banner — Café Aroma", operator: "Kiran", eta: "1:15 PM", status: "Queued" },
    { machine: "DTF Press", job: "T-Shirts — College Fest", operator: "Ajay", eta: "5:45 PM", status: "Running" },
    { machine: "Sublimation Press", job: "—", operator: "—", eta: "—", status: "Free" },
];

// ---------- Customer & Order History mockup ----------
export const customerProfile = {
    name: "Rane Family",
    meta: "Customer since 2023 · 14 orders",
    tag: "Repeat customer",
    stats: [
        { label: "Lifetime Value", value: "₹42,600", tone: "indigo" },
        { label: "Preferred Rate", value: "Standard −5%", tone: "blue" },
        { label: "Payment History", value: "On time", tone: "green" },
    ],
    rows: [
        { job: "Wedding Invitations × 300", date: "14 Apr 2026", amount: "₹8,400" },
        { job: "Save-the-Date Cards × 100", date: "2 Mar 2026", amount: "₹2,200" },
        { job: "Return Gift Tags × 300", date: "18 Feb 2026", amount: "₹1,650" },
    ],
};

// ---------- Vendor & Purchase mockup ----------
export const purchaseRows = [
    { po: "PO-0341", vendor: "Shreeji Paper Traders", material: "Art Card 300gsm — 2,000 sheets", amount: "₹18,400", status: "Delivered" },
    { po: "PO-0342", vendor: "Colorworks Ink Supply", material: "DTF Ink — 5L (mixed)", amount: "₹9,750", status: "In transit" },
    { po: "PO-0343", vendor: "Star Flex Distributors", material: "Star Flex — 10 rolls", amount: "₹22,000", status: "Ordered" },
];

// ---------- Delivery & Dispatch mockup ----------
export const dispatchRows = [
    { job: "Brochures — Nirvana Realty", fulfillment: "Courier · BlueDart", status: "In transit" },
    { job: "Banner — Café Aroma", fulfillment: "Self pickup", status: "Ready" },
    { job: "Letterheads — Vyas & Co.", fulfillment: "Home delivery", status: "Out for delivery" },
    { job: "Photo Prints — Iyer", fulfillment: "Self pickup", status: "Picked up" },
];

// ---------- WhatsApp Order Updates ----------
export const whatsappOrder = {
    kicker: "One of several automations — WhatsApp Order Updates",
    title: "Every update, every order — straight to WhatsApp.",
    accent: "straight to WhatsApp",
    subtitle: "PrepPrint sends an automatic WhatsApp message at every order milestone — confirmation, artwork received, ready for pickup, payment due — so the counter stops fielding \"is my order ready?\" calls.",
    greeting: "Good afternoon",
    name: "Rane Family",
    tabs: ["Orders", "Files", "Invoices", "Chat"],
    timeline: [
        { label: "Order confirmed", meta: "Done", tone: "green" },
        { label: "Artwork uploaded", meta: "Received", tone: "indigo" },
        { label: "In print — Offset Press 1", meta: "2:30 PM", tone: "blue" },
    ],
    notices: [
        { title: "Your order just went to print", meta: "Tap to track progress", tag: "New" },
        { title: "Balance payment due", meta: "₹4,200 · tap to pay online", tag: "Due" },
    ],
};
export const whatsappNotes = [
    { title: "Order confirmations, instantly.", description: "Every new order gets an automatic WhatsApp confirmation with the estimate." },
    { title: "Artwork received, confirmed instantly.", description: "Customers get a WhatsApp confirmation the moment their file is uploaded and attached to the job." },
    { title: "Ready-for-pickup & delivery alerts.", description: "No more \"is my order ready?\" calls to the counter." },
    { title: "Payment links & receipts.", description: "Balance dues and paid receipts, sent the moment they're generated." },
];

// ---------- Reports & AI Insights ----------
export const aiInsightsIntro = {
    kicker: "Reports & AI Insights",
    title: "Data that explains itself, in plain English.",
    accent: "explains itself",
    sub: "PrepPrint doesn't just log orders — it reads the patterns across jobs, machines and stock, and tells owners what actually needs attention.",
};
export const marginScore = {
    value: 34,
    label: "MARGIN",
    title: "Average Job Margin",
    sub: "Rolling 30-day average across all branches and job types.",
};
export const aiInsights = [
    { icon: <FiActivity />, title: "Flex banner jobs are your thinnest margin line", description: "Material cost has risen 9% this quarter without a rate-card update — worth revisiting pricing." },
    { icon: <FiClock />, title: "Offset Press 2 sits idle most afternoons", description: "Utilization drops below 40% after 2 PM — a scheduling gap worth filling with smaller jobs." },
    { icon: <FiCheckSquare />, title: "3 customers are overdue on balance payments", description: "Flagged for a follow-up before their next order is accepted on credit." },
    { icon: <FiStar />, title: "Satellite branch has your best margin this month", description: "34.8% average, driven by strong visiting-card and stationery volume — worth replicating." },
];

// ---------- One Platform, Three Apps ----------
export const threeAppsIntro = {
    kicker: "One Platform, Three Apps",
    title: "Built for the owner, the operator and the customer.",
};
export const threeApps = [
    { icon: <FiHome />, title: "Owner / Admin Web App", meta: "Any browser · every branch", bullets: [
        "Consolidated dashboard across all branches and presses",
        "Sales, job margin and stock reports, live",
        "Role-based access for managers and counter staff",
    ] },
    { icon: <FiPrinter />, title: "Operator App", meta: "iOS & Android", bullets: [
        "The day's press queue, right on the shop floor",
        "Mark jobs started, paused or completed in a tap",
        "Flag material shortages straight to inventory",
    ] },
    { icon: <FiMessageCircle />, title: "Customer Portal", meta: "Web & WhatsApp", bullets: [
        "Upload artwork and track job status live",
        "Pay invoices and download receipts online",
        "Reorder a past job in a single tap",
    ] },
];

// ---------- Integrations ----------
export const integrations = [
    { name: "Razorpay / Payment Gateways", status: "Connected · billing & advances", description: "UPI, cards and net banking accepted at the counter or online, with receipts generated automatically." },
    { name: "WhatsApp Business API", status: "Connected · order & file updates", description: "Order confirmations, artwork-received alerts and pickup notifications delivered where customers actually reply." },
    { name: "Courier & Logistics Partners", status: "Connected · dispatch & tracking", description: "Hand off deliveries to your courier partner and track shipments without leaving PrepPrint." },
];
export const integrationsInfoTiles = [
    { icon: <FiCheck />, title: "Set up in a day", description: "Connect accounts once — no developer needed." },
    { icon: <FiCheckSquare />, title: "Zero double entry", description: "Payments, files and dispatch stay in sync automatically." },
    { icon: <FiFileText />, title: "Accounting-ready exports", description: "Sales ledgers flow straight into Tally, Zoho Books or QuickBooks." },
    { icon: <FiClock />, title: "Always in sync", description: "Data refreshes automatically, 24/7, across every branch." },
];
export const moreIntegrations = ["SMS Gateways", "Google Workspace", "Canva / Adobe file import", "Barcode Scanners", "Tally / Zoho Books", "Zapier / Webhooks"];

// ---------- Security & Data Privacy ----------
export const complianceItems = [
    { icon: <FiUserCheck />, title: "Role-scoped access", description: "Operators see only their press queue; counter staff see only their branch." },
    { icon: <FiUploadCloud />, title: "Design files, access-controlled", description: "Customer artwork is visible only to assigned staff and the customer themselves." },
    { icon: <FiShield />, title: "Rate cards, kept confidential", description: "Negotiated pricing and margins are visible only to owners and managers." },
    { icon: <FiDatabase />, title: "Automatic backups", description: "Every order, invoice and design file is backed up continuously." },
    { icon: <FiCheckSquare />, title: "Full audit trail", description: "Every access to pricing, files or payment data is logged." },
    { icon: <FiUser />, title: "Owner-only financial view", description: "Full margin and revenue data is visible only to the owner's login." },
];

// ---------- Also built in ----------
export const extraFeatures = [
    {
        icon: <FiPercent />,
        title: "Rate Card & Bulk Pricing Rules",
        description: "Rate cards per material with quantity breakpoints, so bulk orders price themselves correctly without a manual recalculation.",
        bullets: ["Rates configured once, applied to every quote", "Bulk & slab pricing breakpoints, automatic", "No back-of-envelope math at the counter"],
        slug: "rate-card-bulk-pricing-rules",
        mockup: "quote",
    },
    {
        icon: <FiLayers />,
        title: "Multi-Branch & Franchise Management",
        description: "One franchise console rolls up every branch — settings, staff and reports, replicated or reviewed from a single dashboard.",
        bullets: ["Add branches and replicate rate cards from one console", "Consolidated sales, margin and stock reports", "Custom job types and tax rules per branch"],
        slug: "multi-branch-franchise-management",
        mockup: null,
    },
    {
        icon: <FiUsers />,
        title: "Staff & Operator Management",
        description: "Operators see only their press queue; managers and counter staff see only their own branch — role-scoped from day one.",
        bullets: ["Role-based access for every staff type", "Operator accountability tied to every job", "Attendance and shift visibility per branch"],
        slug: "staff-operator-management",
        mockup: null,
    },
    {
        icon: <FiGlobe />,
        title: "Online Ordering Portal",
        description: "A branded ordering portal lets customers upload artwork, get an instant quote and track their job — without a phone call.",
        bullets: ["Customers quote and order without calling the counter", "Artwork upload built into the same portal", "Job status visible to the customer, live"],
        slug: "online-ordering-portal",
        mockup: null,
    },
    {
        icon: <FiTag />,
        title: "Barcode & Job-Ticket Tracking",
        description: "Every job prints its own barcode ticket, so scanning a job at any stage pulls up its full status instantly.",
        bullets: ["Every job gets a scannable ticket on intake", "Scan to update stage, no manual lookup", "Reduces mix-ups between similar jobs"],
        slug: "barcode-job-ticket-tracking",
        mockup: null,
    },
    {
        icon: <FiBarChart2 />,
        title: "Reports & AI Insights",
        description: "PrepPrint reads the patterns across jobs, machines and stock, and tells owners what actually needs attention, in plain English.",
        bullets: ["Margin, utilization and payment insights, automatic", "Branch-to-branch comparison, without a spreadsheet", "Flagged issues before they become a bigger problem"],
        slug: "reports-ai-insights",
        mockup: null,
    },
];

// ---------- Whitelabel & multi-branch ----------
export const brandChips = [
    { name: "PrintHub", color: "#5b53f0" },
    { name: "ColorCraft", color: "#8b5cf6" },
    { name: "Impress Press", color: "#16b866" },
    { name: "Printomatic", color: "#1f2937" },
];
export const whitelabelChecklist = [
    { title: "Your logo & brand color", description: "Applied across the web app, operator app and customer portal." },
    { title: "Your domain", description: "admin.yourbrand.com — customers never see \"Prepseed.\"" },
    { title: "Franchise console", description: "One dashboard to add branches, replicate rate cards and roll up reports." },
    { title: "Your policies", description: "Custom rate cards, job types and tax rules per branch." },
    { title: "Your branded apps", description: "Operator & customer apps published to app stores under your name." },
    { title: "Your invoices", description: "Every exported PDF and receipt carries your branding." },
    { title: "Your support line", description: "Customers and staff reach you — never Prepseed." },
    { title: "Your pricing", description: "You decide what to charge each branch or franchisee." },
];

// ---------- One vendor / replaced tools ----------
export const replacedTools = [
    { from: "Paper job dockets", to: "Order & Job Management" },
    { from: "Calculator-based quoting", to: "Quotation & Estimation" },
    { from: "Artwork scattered across chats", to: "Design & Artwork Upload" },
    { from: "Standalone billing software", to: "POS & GST Billing" },
    { from: "Notebook stock registers", to: "Inventory & Stock" },
    { from: "Whiteboard press schedules", to: "Machine & Press Scheduling" },
    { from: "Separate courier tracking apps", to: "Delivery & Dispatch" },
    { from: "Excel sales & margin trackers", to: "Reports & AI Insights" },
];
export const replaceInfoTiles = [
    { icon: <FiCreditCard />, title: "One vendor, one bill", description: "No juggling five renewals and five support tickets." },
    { icon: <FiCheckSquare />, title: "Nothing breaks in between", description: "No API limits, sync failures or automation glue to babysit." },
    { icon: <FiShield />, title: "Job data stays in one place", description: "Never scattered across five vendors' servers." },
    { icon: <FiUserCheck />, title: "One team accountable", description: "Prepseed builds, hosts and supports all of it — no finger-pointing." },
];

// ---------- Deployment / migration ----------
export const migrationSteps = [
    { step: 1, title: "Share access", description: "Read-only access to your current registers, rate cards or another billing app. No downtime." },
    { step: 2, title: "We migrate everything", description: "Customer records, rate cards, stock ledgers and open jobs — mapped and moved by our team." },
    { step: 3, title: "You watch it happen", description: "Track migration progress in real time — nothing goes live until you've reviewed and approved it." },
    { step: 4, title: "Go live, old tools retired", description: "Your counter and press floor start on PrepPrint from day one — zero data loss." },
];
export const migrationInfoTiles = [
    { icon: <FiCheckSquare />, title: "Zero data loss", description: "Every record accounted for, verified before go-live." },
    { icon: <FiClock />, title: "Old system stays live", description: "Nothing is switched off until you're fully ready." },
    { icon: <FiCheck />, title: "Free, done-for-you", description: "No extra cost, no work for your staff beyond granting access." },
    { icon: <FiUsers />, title: "Dedicated migration team", description: "A real person owns your switch-over, start to finish." },
];

// ---------- Why Prepseed (company-wide, reused verbatim) ----------
export const whyPrepseed = [
    { value: "400,000+", label: "Users", description: "Powering platforms across EdTech, Enterprise, Healthcare and Real Estate." },
    { value: "$1.2M", label: "Trusted backing", description: "Investor-backed (2022) engineering team, not a freelance build." },
    { value: "0", label: "Downtime", description: "Running on US military-grade servers with automatic failover — always on." },
    { value: "2", label: "Continents", description: "Primary data stored in India; encrypted backups held in the US." },
    { value: "50", label: "Branches, one platform", description: "From one counter to fifty branches, same platform — no re-platforming later." },
    { value: "1", label: "Role sees it all", description: "No one but you sees the full financial database — every other role stays scoped." },
    { value: "24/7", label: "Real support, real people", description: "A dedicated team for setup, migration and ongoing customization." },
    { value: "Weeks", label: "Not quarters", description: "Whitelabeled & live in weeks, not quarters." },
];

export const contact = {
    call: "+91 99133 82221",
    email: "vivek@prepseed.com",
    web: "prepseed.com",
    studio: "Ahmedabad, Gujarat",
};
