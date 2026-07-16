import {
    FiRefreshCw, FiClock, FiCheckSquare, FiGrid, FiCreditCard, FiTag, FiUsers, FiDollarSign,
    FiTrendingUp, FiShield, FiStar, FiTool, FiGift, FiUserCheck, FiMessageCircle, FiMapPin,
    FiFileText, FiLock, FiActivity, FiCpu, FiGlobe, FiShoppingBag,
} from "react-icons/fi";

export const hero = {
    eyebrow: "Prepseed Presents · PrepJewellery ERP",
    title: ["Every gold rate, every purity reading,", "every follow-up —", "automated, never retyped."],
    subtitle:
        "PrepJewellery ERP runs sales, purchase, karigar, manufacturing, repairs and gold exchange on one automation engine — with a direct hardware link to MaxSell gold-testing machines, so a purity reading never gets copied by hand again.",
    caption: "The Automation-First Jewellery ERP · 2026 Edition",
    stats: [
        { value: "12", label: "WhatsApp events automated" },
        { value: "0", label: "hand-retyped purity readings" },
        { value: "Weeks", label: "not quarters, to go live" },
    ],
};

export const problems = [
    {
        icon: <FiRefreshCw />,
        title: "Purity readings copied by hand",
        description: "A transposed digit off the gold-testing machine changes what the store owes a customer.",
        slug: "purity-readings-copied-by-hand",
    },
    {
        icon: <FiClock />,
        title: "Gold rate updated twice",
        description: "Once on paper, again in the register — every counter, every morning.",
        slug: "gold-rate-updated-twice",
    },
    {
        icon: <FiCheckSquare />,
        title: "Hallmarking tracked, not enforced",
        description: "A paper checklist doesn't stop non-compliant stock from reaching the shelf.",
        slug: "hallmarking-tracked-not-enforced",
    },
    {
        icon: <FiGrid />,
        title: "Reorder by walking the shelves",
        description: "Low stock is spotted by a manager's eye, not by the system.",
        slug: "reorder-by-walking-shelves",
    },
    {
        icon: <FiCreditCard />,
        title: "Incentives on a spreadsheet",
        description: "Sales staff earnings reconciled by hand, once a month.",
        slug: "incentives-on-spreadsheet",
    },
    {
        icon: <FiTag />,
        title: "\"Is my repair ready?\"",
        description: "Customers call the store because there's nowhere else to check.",
        slug: "is-my-repair-ready",
    },
    {
        icon: <FiUsers />,
        title: "Walk-ins never followed up",
        description: "A thank-you or a nudge depends entirely on staff remembering.",
        slug: "walk-ins-never-followed-up",
    },
    {
        icon: <FiDollarSign />,
        title: "Bank statements matched by hand",
        description: "Reconciliation happens line by line, at month-end.",
        slug: "bank-statements-matched-by-hand",
    },
    {
        icon: <FiCheckSquare />,
        title: "DC cancellations, no trail",
        description: "A verbal manager sign-off leaves nothing to audit later.",
        slug: "dc-cancellations-no-trail",
    },
];

// Every module card links to its own dedicated detail page.
export const moduleGrid = [
    { icon: <FiTrendingUp />, title: "Sales & POS", description: "Live gold rate, GST billing, incentives", slug: "sales-pos" },
    { icon: <FiShield />, title: "Purchase & Hallmarking", description: "DC flow, QC, HUID approval gate", slug: "purchase-hallmarking" },
    { icon: <FiGrid />, title: "Inventory", description: "Multi-branch stock, reorder alerts", slug: "inventory" },
    { icon: <FiStar />, title: "Manufacturing", description: "BOM, metal flow, B2B/B2C orders", slug: "manufacturing" },
    { icon: <FiTool />, title: "Karigar Management", description: "Jobs, ledger, settlements", slug: "karigar-management" },
    { icon: <FiUsers />, title: "CRM & Customer", description: "Walk-ins, proposals, loyalty", slug: "crm-customer" },
    { icon: <FiGift />, title: "Savings Schemes", description: "Amount & weight schemes, Razorpay", slug: "savings-schemes" },
    { icon: <FiClock />, title: "Repairs & Tracking", description: "Public portal, WhatsApp alerts", slug: "repairs-tracking" },
    { icon: <FiCreditCard />, title: "Accounts & Finance", description: "Double-entry, bank reconciliation", slug: "accounts-finance" },
    { icon: <FiUserCheck />, title: "HR & Payroll", description: "Attendance to payroll, in one flow", slug: "hr-payroll" },
];

export const spotlights = [
    {
        id: "sales-pos",
        eyebrow: "Module — Sales & POS",
        title: "Live gold rate, GST billing, and incentives that credit themselves.",
        accent: "credit themselves",
        tone: "gold",
        description: "Every counter runs on the same live gold rate, and every qualifying bill credits the sales incentive wallet the moment it closes — no spreadsheet, no month-end reconciliation.",
        bullets: [
            "Live gold rate across every counter — One rate update refreshes every open bill in the store, instantly.",
            "Incentive wallet credits on every bill — No month-end spreadsheet — staff earnings post the moment a sale closes.",
            "Coupon rules enforced at billing — Validity and redemption checked automatically, not by memory.",
            "Sale returns confirm over WhatsApp — A refund triggers an automatic customer confirmation.",
        ],
        mockup: "billing",
        reversed: false,
    },
    {
        id: "purchase-hallmarking",
        eyebrow: "Module — Purchase & Hallmarking",
        title: "Stock doesn't reach the shelf until HUID and purity are on file.",
        accent: "HUID and purity are on file",
        tone: "gold",
        description: "A delivery challan can't clear into sellable stock until quality, hallmarking and purity are all confirmed — the release gate is enforced in software, not left to a manager's memory.",
        bullets: [
            "Multi-stage delivery challan flow — DCs, purchase invoices and credit notes tracked end to end.",
            "Hallmarking approval gate — Stock release blocks automatically until HUID is captured.",
            "MaxSell purity capture, built in — XRF readings feed straight into purchase intake.",
            "Vendor scorecards, auto-updated — QC outcomes and returns score every supplier automatically.",
        ],
        mockup: "purchase",
        reversed: true,
    },
    {
        id: "inventory",
        eyebrow: "Module — Inventory",
        title: "Stock that reorders before a shelf goes empty.",
        accent: "before",
        tone: "blue",
        description: "Reorder alerts fire by product and branch the moment stock crosses its minimum — no manager needs to walk the shelves to find out.",
        bullets: [
            "Reorder Dashboard, automatic — Alerts fire by product and branch the moment stock crosses the minimum.",
            "Stock transfers post themselves — Matching accounting entries land at both branches automatically.",
            "Physical verification locks stock — No silent adjustments until variance is signed off.",
            "Diamond QC workflow gated — Issue-to-karigar waits on recorded approval.",
        ],
        mockup: "inventory",
        reversed: false,
    },
    {
        id: "manufacturing",
        eyebrow: "Module — Manufacturing",
        title: "Bill of Materials to finished piece — metal flow reconciled at every stage.",
        accent: "at every stage",
        tone: "gold",
        description: "A manufacturing job opens against a Bill of Materials and closes only once metal issued matches metal returned, cast, and finished — for both B2B and B2C orders.",
        bullets: [
            "Material issue auto-posts from BOM — No manual journal entry when a job opens.",
            "B2B & B2C order management — Same manufacturing pipeline, either order type.",
            "Karigar job-stage notifications — Status changes trigger automatic alerts.",
            "Metal flow reconciles continuously — Not a year-end exercise anymore.",
        ],
        mockup: "manufacturing",
        reversed: true,
    },
    {
        id: "karigar-management",
        eyebrow: "Module — Karigar Management",
        title: "The ledger between store and artisan settles itself.",
        accent: "settles itself",
        tone: "green",
        description: "Metal issued to a karigar and metal received back reconcile continuously — not just when a job finally comes back to the store.",
        bullets: [
            "Karigar ledger, auto-settled — Calculated straight from issued vs. received weights.",
            "Service charges auto-calculated — By weight and job type, on job completion.",
            "Metal accountability, real time — Issued and received entries reconcile as work moves, not at handover.",
            "Process milestones recorded — Every stage of a job timestamped against the karigar.",
        ],
        mockup: "karigar",
        reversed: false,
    },
    {
        id: "crm-customer",
        eyebrow: "Module — CRM & Customer",
        title: "Every walk-in remembered — and followed up automatically.",
        accent: "followed up automatically",
        tone: "gold",
        description: "A visit, a proposal or an interest shown at the counter starts its own automatic follow-up sequence — nothing depends on a staff member remembering to do it later.",
        bullets: [
            "Thank-you WhatsApp on every walk-in — Fires the moment a visit is logged, no staff action needed.",
            "Proposals generate & send themselves — PDF proposal over WhatsApp on creation.",
            "Follow-up pipeline reminders — Triggered by segment and time elapsed since interest was shown.",
        ],
        mockup: "crm",
        reversed: true,
    },
    {
        id: "savings-schemes",
        eyebrow: "Module — Savings Schemes",
        title: "Gold savings schemes that collect and confirm themselves.",
        accent: "collect and confirm themselves",
        tone: "green",
        description: "Installment reminders go out ahead of due dates, payments reconcile against the scheme ledger automatically, and even home collection can be scheduled from the app.",
        bullets: [
            "Amount & weight-based schemes — Standalone or tied to a future purchase.",
            "Installment reminders, automatic — Sent ahead of due dates, before a customer misses one.",
            "Razorpay payments reconcile themselves — Matched against the scheme ledger, no manual entry.",
            "Home collection, scheduled from the app — Field agent pickup requests flow in without a phone call.",
        ],
        mockup: "schemes",
        reversed: false,
    },
    {
        id: "repairs-tracking",
        eyebrow: "Module — Repairs & Tracking",
        title: "Customers stop calling to ask \"is it ready?\"",
        accent: "is it ready?",
        tone: "gold",
        description: "A public tracking link shows the exact same status the counter sees — no login, and no phone call required.",
        bullets: [
            "WhatsApp sent at intake and at ready-for-pickup — the customer is notified automatically, both times.",
            "Public tracking link, no login required — the customer sees the exact same status the counter does.",
            "No staff callback needed — a repair's status is always self-serve, not dependent on someone picking up the phone.",
        ],
        mockup: "repairs",
        reversed: true,
    },
    {
        id: "accounts-finance",
        eyebrow: "Module — Accounts & Finance",
        title: "Month-end becomes a review, not a reconstruction.",
        accent: "review",
        tone: "blue",
        description: "Bank lines match against vouchers automatically, so accounts spends month-end reviewing genuine exceptions instead of re-building the ledger from scratch.",
        bullets: [
            "Bank lines auto-matched — Only genuine exceptions need a human look.",
            "TDS & gold revaluation, automatic — Entries post against the day's transactions and rate.",
            "Full double-entry system — Chart of Accounts, vouchers, cashbook and ledgers underneath every module.",
            "Ageing analysis refreshes continuously — Not just when someone asks for it.",
        ],
        mockup: "accounts",
        reversed: false,
    },
    {
        id: "hr-payroll",
        eyebrow: "Module — HR & Payroll",
        title: "Attendance and incentives flow straight into payroll.",
        accent: "straight into payroll",
        tone: "green",
        description: "Attendance and sales-floor incentives feed the payroll run directly, so payroll is a final review, not a separate reconciliation exercise.",
        bullets: [
            "Attendance drives payroll directly — No separate reconciliation step at month-end.",
            "Incentive wallet feeds the payroll run — Sales-floor earnings from Sales & POS credit automatically.",
            "Leave balances auto-deduct — As requests are approved, not at year-end audit.",
        ],
        mockup: "hr",
        reversed: true,
    },
];

// ---------- Sales & POS / billing mockup ----------
export const billingStats = [
    { label: "Gold Rate (22K)", value: "₹6,842/g", tone: "gold" },
    { label: "Incentive Wallet", value: "₹4,120", tone: "green" },
    { label: "Coupons Today", value: "11", tone: "blue" },
];
export const billingRows = [
    { item: "Gold Chain 22K", weight: "18.4g", rate: "₹6,842/g", amount: "₹1,25,893" },
    { item: "Making Charges", weight: "—", rate: "12%", amount: "₹15,107" },
    { item: "GST (3%)", weight: "—", rate: "—", amount: "₹4,230" },
];

// ---------- Purchase & Hallmarking mockup ----------
export const purchaseStepper = [
    { label: "QC Approved", status: "done" },
    { label: "HUID Captured", status: "done" },
    { label: "Purity on File", status: "active" },
    { label: "Stock Released", status: "pending" },
];
export const vendorRows = [
    { vendor: "Anand Bullion Co.", quality: "Good", delivery: "On time", score: "92" },
    { vendor: "Surat Gold Traders", quality: "Fair", delivery: "Delayed", score: "71" },
];

// ---------- Inventory mockup ----------
export const inventoryStats = [
    { label: "Total SKUs", value: "3,412", tone: "gold" },
    { label: "Low Stock", value: "14", tone: "red" },
    { label: "Branches", value: "4", tone: "blue" },
];
export const inventoryRows = [
    { product: "22K Gold Chain — 18g", andheri: "6", borivali: "2", thane: "9", lowIn: "borivali" },
    { product: "Diamond Ring — Solitaire", andheri: "11", borivali: "8", thane: "3", lowIn: "thane" },
    { product: "Silver Payal — Pair", andheri: "24", borivali: "19", thane: "27", lowIn: null },
];

// ---------- Manufacturing mockup ----------
export const manufacturingSteps = [
    { label: "BOM Issued", status: "done" },
    { label: "Wax", status: "done" },
    { label: "Casting", status: "active" },
    { label: "Finishing", status: "pending" },
    { label: "QC & Stock-In", status: "pending" },
];

// ---------- Karigar mockup ----------
export const karigarRows = [
    { karigar: "Ramesh Sonar", issued: "428.6", received: "421.2", balance: "Settled" },
    { karigar: "Suresh Karigar", issued: "212.0", received: "206.4", balance: "Pending" },
    { karigar: "Dinesh Kumar", issued: "339.8", received: "339.8", balance: "Settled" },
];

// ---------- CRM mockup ----------
export const crmProfile = {
    name: "Priya Mehta",
    meta: "Customer since Jan 2023 · Andheri branch",
    stats: [
        { label: "Walk-ins", value: "6", tone: "blue" },
        { label: "Lifetime Value", value: "₹4.1L", tone: "green" },
        { label: "Open Proposal", value: "1", tone: "gold" },
    ],
    rows: [
        { date: "12 Jul", interest: "Diamond Necklace Set", followup: "WhatsApp sent" },
        { date: "02 Jun", interest: "22K Bangles", followup: "Converted" },
    ],
};

// ---------- Savings schemes mockup ----------
export const schemesStats = [
    { label: "Active Enrollments", value: "1,842", tone: "gold" },
    { label: "Collected MTD", value: "₹38.6L", tone: "green" },
    { label: "Due This Week", value: "96", tone: "blue" },
];
export const schemesCallout = {
    title: "WhatsApp reminder sent to 96 due installments",
    description: "Collected 71 within 48 hours — no calls, no counter visits required.",
};

// ---------- Repairs mockup ----------
export const repairSteps = [
    { label: "Intake", status: "done", sub: "WhatsApp sent" },
    { label: "In Service", status: "done" },
    { label: "Ready for Pickup", status: "active", sub: "WhatsApp sent" },
    { label: "Picked Up", status: "pending" },
];
export const repairTracking = {
    url: "prepjewellery.com/track/repair/RP-5521",
    caption: "Public tracking link — no login, no phone call required. Customer sees this exact status live.",
};

// ---------- Accounts mockup ----------
export const reconciliationRows = [
    { bankLine: "NEFT ₹1,25,893", voucher: "Sale Inv. #SI-8821", status: "Matched" },
    { bankLine: "UPI ₹38,420", voucher: "Scheme Pmt. #SP-1142", status: "Matched" },
    { bankLine: "NEFT ₹64,200", voucher: "—", status: "Exception" },
];

// ---------- HR mockup ----------
export const hrStats = [
    { label: "Staff Across Branches", value: "64", tone: "gold" },
    { label: "Payroll Run", value: "Auto", tone: "green" },
    { label: "Pending Approvals", value: "3", tone: "blue" },
];
export const hrRows = [
    { staff: "Anjali Shah", attendance: "26/26", incentive: "₹6,240", payroll: "Ready" },
    { staff: "Vivek Rao", attendance: "24/26", incentive: "₹4,880", payroll: "Ready" },
];

// ---------- MaxSell hardware integration ----------
export const maxsell = {
    kicker: "One of several automations — Hardware Integration",
    title: "MaxSell gold-testing machines talk straight to the ledger — no re-typing, no pen.",
    accent: "MaxSell",
    subtitle: "PrepJewellery ERP connects directly to MaxSell XRF gold-purity analysers — Karat Pro, Karat Prime and Aurum — so a purity reading is captured straight into the Old Metal Exchange and Purchase ledger. It's one of several places the automation engine reaches past software and into the counter itself.",
    gaugeValue: "91.6%",
    gaugeLabel: "PURITY",
    cardTitle: "Karat Pro Reading",
    caption: "Captured 0.3s ago · 22K · 8.42g",
    steps: [
        { label: "Placed", status: "done" },
        { label: "XRF Scan", status: "done" },
        { label: "Captured", status: "active" },
        { label: "Tolerance Check", status: "pending" },
        { label: "Ledger + WhatsApp", status: "pending" },
    ],
};

export const maxsellNotes = [
    { title: "Audit-linked.", description: "Every reading ties permanently to its transaction." },
    { title: "Hallmarking-linked.", description: "Shares the same stock-release gate as HUID capture." },
    { title: "Tolerance-gated.", description: "Deviation from declared purity routes to manager approval." },
    { title: "Not the only integration", description: "See Integrations, and the automation engine ahead." },
];

// ---------- WhatsApp automation ----------
export const whatsappEvents = [
    { n: 1, event: "Sales Invoice", module: "Billing / POS", trigger: "Auto on sale", status: "Live" },
    { n: 2, event: "Rough Quotation", module: "POS Counter", trigger: "On demand", status: "Live" },
    { n: 3, event: "Jewellery Proposal", module: "CRM / Proposals", trigger: "On create", status: "Live" },
    { n: 4, event: "Scheme Enrollment", module: "Savings Schemes", trigger: "Auto on enroll", status: "Live" },
    { n: 5, event: "Scheme Payment", module: "Savings Schemes", trigger: "Auto on payment", status: "Live" },
    { n: 6, event: "Repair Intake Receipt", module: "Repairs", trigger: "Auto on intake", status: "Live" },
    { n: 7, event: "Repair Invoice", module: "Repairs", trigger: "Auto on complete", status: "Live" },
    { n: 8, event: "Repair Ready for Pickup", module: "Repairs", trigger: "Auto on ready", status: "Live" },
    { n: 9, event: "Order Invoice", module: "Custom Orders", trigger: "Auto on create & deliver", status: "Live" },
    { n: 10, event: "Purchase DC Cancel OTP", module: "Purchase", trigger: "On request", status: "Live" },
    { n: 11, event: "CRM Walk-in Thank You", module: "CRM", trigger: "Auto on visit", status: "New" },
    { n: 12, event: "Sale Return Confirmation", module: "Sales Returns", trigger: "Auto on approve", status: "New" },
];

export const whatsappCallout = {
    title: "All 12 events share one delivery layer",
    description: "Idempotency keys prevent duplicate sends, failed messages retry automatically (up to 2 attempts with back-off), and messaging never blocks or delays the underlying transaction.",
};

// ---------- How it works (event pipeline) ----------
export const howItWorksSteps = [
    { step: 1, title: "Trigger", description: "A business event occurs — a sale, a walk-in, a repair status change, a MaxSell reading." },
    { step: 2, title: "Rules Engine", description: "Incentive rules, reorder thresholds, hallmarking gates and approval conditions evaluated." },
    { step: 3, title: "Action", description: "WhatsApp template, ledger entry, wallet credit, alert or approval gate fires." },
    { step: 4, title: "Audit Log", description: "Every automated action recorded — who, what, when, tamper-evident." },
];

export const howItWorksTiles = [
    { icon: <FiRefreshCw />, title: "Idempotency keys", description: "No duplicate sends on retry." },
    { icon: <FiClock />, title: "Automatic retry with back-off", description: "Up to 2 attempts on failure." },
    { icon: <FiActivity />, title: "Non-blocking", description: "Never delays the main transaction response." },
    { icon: <FiTool />, title: "Configurable per client", description: "Templates and thresholds tuned per deployment." },
    { icon: <FiShield />, title: "Approval gates in code", description: "Not left to a paper checklist." },
    { icon: <FiCheckSquare />, title: "Every action, audit-logged", description: "Automated actions logged, not just user-initiated ones." },
];

// ---------- Manual vs automated ----------
export const manualVsAutomated = [
    { from: "Purity read off the machine, typed in by hand", to: "MaxSell reading captured straight to the ledger" },
    { from: "Manager walks the shelves for reorder", to: "Reorder Dashboard alerts by branch, automatically" },
    { from: "Incentives reconciled on a spreadsheet", to: "Wallet credits on every qualifying bill" },
    { from: "Customer calls to check repair status", to: "Public tracking link + WhatsApp at every stage" },
    { from: "Walk-in follow-up depends on memory", to: "Thank-you WhatsApp fires on every visit" },
    { from: "Hallmarking checked off a paper list", to: "Approval gate blocks stock release without HUID" },
    { from: "Bank statement matched line by line", to: "Transactions auto-matched, exceptions flagged" },
    { from: "DC cancellation, verbal sign-off", to: "WhatsApp OTP to an authorised manager, logged" },
];

// ---------- App access (web / seller / customer) ----------
export const appAccess = [
    { icon: <FiGlobe />, title: "Works in any browser", description: "Dashboard, billing and reports — nothing to install at the counter." },
    { icon: <FiUsers />, title: "Owner / Seller app", description: "Sales, repairs and gold rate, wherever the owner is." },
    { icon: <FiShoppingBag />, title: "Customer app", description: "Repair status, scheme dues and the day's gold rate — under your own brand." },
];

export const appAccessInfoTiles = [
    { icon: <FiGlobe />, title: "Published under your domain", description: "yourbrand.prepjewellery-style custom domain, Prepseed stays invisible." },
    { icon: <FiRefreshCw />, title: "Real-time sync", description: "Mirrors exactly what every branch and counter shows, live." },
];

// ---------- Owner dashboard & customer app mockups ----------
export const ownerDashboard = {
    url: "owner.prepjewellery.com/dashboard",
    stats: [
        { label: "Sales Today", value: "₹9.2L", tone: "gold" },
        { label: "Repairs Due", value: "6", tone: "blue" },
    ],
    branches: [
        { branch: "Andheri", sales: "₹4.1L", reorders: "3" },
        { branch: "Borivali", sales: "₹2.8L", reorders: "1" },
    ],
};

export const customerAppCards = [
    { title: "Repair #RP-5521 — Ready for Pickup", tone: "green" },
    { title: "Scheme Installment Due — ₹5,000 · Pay via app", tone: "amber" },
    { title: "Gold Rate Today — ₹6,842/g · 22K", tone: "blue" },
];

// ---------- Integrations ----------
export const integrations = [
    {
        name: "MaxSell XRF Gold-Testing Machines",
        status: "Connected · Karat Pro, Karat Prime, Aurum",
        description: "Purity readings captured directly from the machine into the Old Metal Exchange and Purchase ledger.",
    },
    {
        name: "Razorpay",
        status: "Connected · scheme payments",
        description: "Savings-scheme installments reconcile against the scheme ledger automatically.",
    },
    {
        name: "WhatsApp Business API",
        status: "Connected · native",
        description: "All 12 automated business events — receipts, proposals, reminders and status updates.",
    },
    {
        name: "Tally / Zoho Books",
        status: "Connected · accounts sync",
        description: "Vouchers, ledgers and reconciliation flow straight into the accounting system you already use.",
    },
];

export const moreIntegrations = ["HUID / BIS hallmarking registry", "Biometric attendance devices", "Open API / Webhooks"];

export const settingsRows = [
    { name: "MaxSell XRF", initial: "M", color: "#8a6d1d" },
    { name: "Razorpay", initial: "R", color: "#02042b" },
    { name: "WhatsApp Business API", initial: "W", color: "#25d366" },
    { name: "Tally / Zoho Books", initial: "T", color: "#2f6fed" },
];

// ---------- Security & compliance ----------
export const complianceItems = [
    { icon: <FiCheckSquare />, title: "HUID & hallmarking compliance", description: "Every hallmarked item's HUID is captured and tied to its transaction — nothing sellable skips the gate." },
    { icon: <FiFileText />, title: "GST-ready invoicing", description: "Every bill generates a compliant tax invoice automatically, gold rate and making charges itemized." },
    { icon: <FiShield />, title: "DPDP Act aligned data handling", description: "Customer and transaction data collected, stored and purged in line with India's data-protection law." },
    { icon: <FiLock />, title: "Encrypted at rest & in transit", description: "Every purity reading, ledger entry and customer record protected end to end." },
    { icon: <FiUserCheck />, title: "Role-based access control", description: "Counter staff, karigars, managers and owners each see only what their role permits." },
    { icon: <FiActivity />, title: "Full audit trail", description: "Every automated action — not just user edits — is logged and tamper-evident." },
];

// ---------- Also built in ----------
export const extraFeatures = [
    {
        icon: <FiCpu />,
        title: "MaxSell Gold-Testing Integration",
        description: "A direct hardware link to MaxSell XRF analysers — a purity reading is captured straight into the ledger, never retyped by hand.",
        bullets: ["Audit-linked — every reading ties permanently to its transaction", "Hallmarking-linked — shares the same stock-release gate as HUID capture", "Tolerance-gated — deviation from declared purity routes to manager approval"],
        slug: "maxsell-gold-testing-integration",
    },
    {
        icon: <FiMessageCircle />,
        title: "WhatsApp Automation, 12 Events",
        description: "12 business events fire a WhatsApp message automatically — the actual PDF, receipt or invoice attached, at the moment the transaction happens.",
        bullets: ["Idempotency keys prevent duplicate sends", "Automatic retry with back-off, up to 2 attempts", "Messaging never blocks the underlying transaction"],
        slug: "whatsapp-automation-12-events",
    },
    {
        icon: <FiMapPin />,
        title: "Public Repair Tracking Portal",
        description: "Customers check repair status on a public link — no login, no phone call to the store required.",
        bullets: ["No login required to check status", "WhatsApp pushes at intake and at ready-for-pickup", "Fewer \"is it ready?\" calls to the counter"],
        slug: "public-repair-tracking-portal",
    },
    {
        icon: <FiCheckSquare />,
        title: "Full Audit Trail & Approval Gates",
        description: "Every automated action is logged — who, what, when — and approval gates are enforced in code, not left to a paper checklist.",
        bullets: ["Every automated action logged, not just user edits", "Approval gates in code, not a paper checklist", "Tamper-evident record for every ledger and stock change"],
        slug: "full-audit-trail-approval-gates",
    },
];

// ---------- Whitelabel ----------
export const whitelabelChecklist = [
    { title: "Your logo & brand color", description: "Applied across the dashboard, billing screen and both mobile apps." },
    { title: "Your domain", description: "owner.yourbrand.com — customers never see \"Prepseed.\"" },
    { title: "Your WhatsApp sender name", description: "All 12 automated events send under your brand name." },
    { title: "Your payment gateway", description: "Razorpay — kept under your own merchant account." },
    { title: "Your invoice templates", description: "Every bill and repair invoice carries your branding." },
    { title: "Your support line", description: "Your customers reach you — never Prepseed." },
    { title: "Your karigar / vendor network, kept as-is", description: "No forced switch — the ledger works with the artisans and suppliers you already use." },
    { title: "Your pricing", description: "You decide what to charge your own branches or sub-sellers." },
];

// ---------- One vendor / replaced tools ----------
export const replacedTools = [
    { from: "Standalone gold-rate display board", to: "Live gold rate on every bill, built in" },
    { from: "Paper hallmarking register", to: "HUID approval gate, enforced in software" },
    { from: "Karigar notebook ledger", to: "Karigar ledger, auto-settled" },
    { from: "Manual WhatsApp follow-ups", to: "12 business events automated" },
    { from: "Excel incentive tracker", to: "Incentive wallet, credited live" },
    { from: "Standalone gold-testing log", to: "MaxSell readings captured straight to the ledger" },
    { from: "Separate scheme collection register", to: "Savings schemes, Razorpay-reconciled" },
    { from: "Manual bank reconciliation sheet", to: "Bank lines auto-matched" },
];

export const replaceInfoTiles = [
    { icon: <FiDollarSign />, title: "One vendor, one bill", description: "No juggling separate renewals and support tickets across counters." },
    { icon: <FiCheckSquare />, title: "No plugin conflicts", description: "Nothing breaks at the counter on the next update." },
    { icon: <FiShield />, title: "Your data stays in one place", description: "Never scattered across multiple point-solution vendors." },
    { icon: <FiUserCheck />, title: "One team accountable", description: "Prepseed builds, hosts and supports all of it — no finger-pointing." },
];

// ---------- Deployment / migration ----------
export const migrationSteps = [
    { step: 1, title: "Share your catalog, branches & vendor list", description: "Product catalog, branch list and existing karigar/vendor network." },
    { step: 2, title: "We configure gold rate feed, hallmarking rules & MaxSell hardware link", description: "Rate feed, HUID approval gate and the MaxSell integration set up around how you already operate." },
    { step: 3, title: "Pilot at one branch with real bills", description: "Live on one branch first, so gold rate, GST and hallmarking rules are verified before scale." },
    { step: 4, title: "Roll out across every branch and karigar", description: "Same ledger, same dashboard, across every branch, counter and karigar — live within weeks." },
];

export const migrationInfoTiles = [
    { icon: <FiCheckSquare />, title: "Zero downtime", description: "Counters keep billing throughout onboarding." },
    { icon: <FiShield />, title: "Verified before scale", description: "Nothing rolls out company-wide until the pilot branch proves out." },
    { icon: <FiRefreshCw />, title: "No vendor lock-in", description: "Works with the gold-testing hardware and payment gateway you already use." },
    { icon: <FiUsers />, title: "Dedicated rollout team", description: "A real person owns your rollout, branch by branch." },
];

// ---------- Why Prepseed (company-wide, reused verbatim) ----------
export const whyPrepseed = [
    { value: "400,000+", label: "Users", description: "Powering platforms across EdTech, Enterprise, Healthcare and Real Estate." },
    { value: "$1.2M", label: "Trusted backing", description: "Investor-backed (2022) engineering team, not a freelance build." },
    { value: "0", label: "Downtime", description: "US military-grade servers with automatic failover — always on, even during a rush." },
    { value: "2", label: "Continents", description: "Primary data in India; encrypted backups held in the US." },
    { value: "1", label: "Role sees it all", description: "No one but you sees the full company database — every other role stays scoped." },
    { value: "24/7", label: "Real support", description: "A dedicated team for setup, tuning and ongoing customization." },
    { value: "Weeks", label: "Not quarters", description: "Whitelabeled & live in weeks, not quarters." },
    { value: "Multi-branch", label: "Built in from day one", description: "From a single counter to hundreds of branches and karigars — same platform, no re-platforming later." },
];

export const contact = {
    call: "+91 99133 82221",
    email: "vivek@prepseed.com",
    web: "prepseed.com",
    studio: "Ahmedabad, Gujarat",
};
