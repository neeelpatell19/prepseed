import {
    FiList, FiClock, FiCalendar, FiUsers, FiBarChart2, FiMonitor, FiTarget, FiLogOut,
    FiGrid, FiCheckSquare, FiFilter, FiZap, FiMapPin, FiBriefcase, FiRefreshCw,
    FiSun, FiSmartphone, FiShield, FiLayers,
} from "react-icons/fi";

export const hero = {
    eyebrow: "Prepseed for Real Estate",
    title: ["The CRM built for how", "real estate teams", "actually sell."],
    subtitle:
        "A single, white-labeled sales platform for developers & brokerages — from the first lead to the signed booking. Sold under your brand.",
    stats: [
        { value: "400,000+", label: "users on the engine" },
        { value: "7.7%", label: "avg. lead-to-booking rate" },
        { value: "Weeks", label: "not quarters, to launch" },
    ],
};

export const problems = [
    {
        icon: <FiList />,
        title: "Leads scattered everywhere",
        description: "Meta, Google, WhatsApp, walk-ins and brokers — none of it lands in one place.",
        slug: "leads-scattered",
    },
    {
        icon: <FiClock />,
        title: "Follow-ups slip through",
        description: "No SLA, no reminders — hot leads go cold before anyone calls back.",
        slug: "follow-ups-slip",
    },
    {
        icon: <FiCalendar />,
        title: "Site visits tracked on Excel",
        description: "No calendar, no reminders, no record of what happened after the visit.",
        slug: "site-visits-excel",
    },
    {
        icon: <FiUsers />,
        title: "Brokers managed by memory",
        description: "No visibility into who referred what, and no easy way to pay them right.",
        slug: "brokers-memory",
    },
    {
        icon: <FiBarChart2 />,
        title: "Owners fly blind",
        description: "No real-time view of funnel health, source ROI or team performance.",
        slug: "owners-fly-blind",
    },
    {
        icon: <FiMonitor />,
        title: "Generic software, generic look",
        description: "Off-the-shelf CRMs show someone else's brand to your own customers.",
        slug: "generic-software",
    },
    {
        icon: <FiTarget />,
        title: "Marketing spend, wasted",
        description: "No way to tell which campaign or channel is actually producing bookings.",
        slug: "marketing-spend-wasted",
    },
    {
        icon: <FiLogOut />,
        title: "Data walks out the door",
        description: "When a tele-caller leaves, their leads and chat history leave with them.",
        slug: "data-walks-out",
    },
];

// Every module card links to its own dedicated detail page.
export const moduleGrid = [
    { icon: <FiGrid />, title: "Dashboard", description: "Real-time view of the entire funnel", slug: "dashboard" },
    { icon: <FiCheckSquare />, title: "Action Center", description: "Today's priorities, auto-sorted", slug: "action-center" },
    { icon: <FiFilter />, title: "Lead Manager", description: "Full sales funnel, per lead", slug: "lead-manager" },
    { icon: <FiZap />, title: "Hot Lead", description: "AI flags high-intent leads first", slug: "hot-lead" },
    { icon: <FiMapPin />, title: "Site Visits", description: "Calendar & reminders built-in", slug: "site-visits" },
    { icon: <FiBriefcase />, title: "Broker Management", description: "Channel partners & payouts", slug: "brokers" },
    { icon: <FiRefreshCw />, title: "Integrations", description: "Meta, Google & WhatsApp, native", slug: "integrations" },
    { icon: <FiBarChart2 />, title: "Reports & Analytics", description: "Source-to-booking funnel", slug: "reports-analytics" },
    { icon: <FiSun />, title: "AI Based Reporting", description: "Auto-generated insights, plain English", slug: "ai-based-reporting" },
    { icon: <FiSmartphone />, title: "Mobile & Web App", description: "Any platform — iPad, laptop, desktop", slug: "mobile-web-app" },
];

export const spotlights = [
    {
        id: "dashboard",
        eyebrow: "Module — Dashboard",
        title: "See your entire sales floor in one glance.",
        description:
            "Live funnel health, SLA-driven alerts and channel-wise pulse — refreshed in real time, not end-of-day.",
        bullets: [
            "New, contacted, overdue and unassigned counts refreshed in real time.",
            "First-contact and follow-up SLAs tracked automatically, surfaced the moment they slip.",
            "WhatsApp, call and source performance in one view — no exports, no spreadsheets.",
            "Owners see everything; managers and executives see exactly their queue.",
        ],
        mockup: "dashboard",
        reversed: false,
    },
    {
        id: "action-center",
        eyebrow: "Module — Action Center",
        title: "Today's work, decided for you.",
        description:
            "One prioritised, ranked queue — every executive opens the app already knowing what to work on next.",
        bullets: [
            "One prioritised queue — no deciding what to work on next.",
            "Customer messages waiting for a reply are pulled to the top automatically.",
            "Overdue follow-ups stay visible until they're actioned or reassigned.",
            "One click from any task straight into the full lead record and history.",
        ],
        mockup: "actionCenter",
        reversed: true,
    },
    {
        id: "lead-manager",
        eyebrow: "Module — Lead Manager",
        title: "Every lead, one funnel, zero leakage.",
        description:
            "Add leads fast, filter deep, export anytime — with a full activity trail on every single one.",
        bullets: [
            "Manual entry, bulk import or auto-captured — every source lands here.",
            "Deep filters by status, executive, source, project and date.",
            "One-click CSV export for offline review.",
            "Every call, message and status change logged automatically.",
        ],
        mockup: "leadManager",
        reversed: false,
    },
    {
        id: "site-visits",
        eyebrow: "Module — Site Visit Management",
        title: "Turn scheduled visits into booked units.",
        description:
            "A calendar built for site visits, with automated reminders and outcome capture on the spot.",
        bullets: [
            "Every scheduled visit in one month view, filterable by project, executive or status.",
            "Customer and executive both get a WhatsApp reminder ahead of the visit.",
            "Log the visit outcome on the spot — feeds straight into the funnel and reports.",
            "Every visit tied to the exact tower and unit — full traceability to booking.",
        ],
        mockup: "siteVisits",
        reversed: true,
    },
    {
        id: "brokers",
        eyebrow: "Module — Broker Management",
        title: "Your channel partners, organized and incentivized.",
        description:
            "Every broker, their referrals and their conversion rate — no disputes, no guesswork on payouts.",
        bullets: [
            "Every channel partner, company and contact detail in one searchable list.",
            "Every lead a broker sends is tagged automatically — full attribution, no disputes.",
            "See leads-to-booking conversion per broker to spot your best channel partners.",
            "Push new inventory or offers to your entire broker network in one message.",
        ],
        mockup: "brokers",
        reversed: false,
    },
];

export const dashboardStats = [
    { label: "Total Leads", value: "1,248", sub: "+18 today", tone: "blue" },
    { label: "1st Contact Pending", value: "6", sub: "within SLA", tone: "amber" },
    { label: "Overdue Follow-ups", value: "21", sub: "live queue", tone: "red" },
    { label: "No Follow-up", value: "340", sub: "no callback set", tone: "grey" },
];

export const actionCenterStats = [
    { label: "Today's Work", value: 42 },
    { label: "WhatsApp Reply", value: 5 },
    { label: "New Leads", value: 3 },
    { label: "Overdue", value: 21 },
    { label: "Completed", value: 9 },
];

export const actionCenterRows = [
    { name: "Priya Nair", source: "green", status: "Site Visit Planned" },
    { name: "Karan Mehta", source: "pink", status: "New" },
    { name: "Sneha Iyer", source: "green", status: "Site Visit Done", hot: true },
    { name: "Rohit Verma", source: "blue", status: "Contacted" },
];

export const leadManagerColumns = [
    { name: "New", count: 48, leads: ["Priya Nair", "Rohit Verma", "Devika Shah"] },
    { name: "Contacted", count: 132, leads: ["Karan Mehta", "Ansh Patel", "Ritika Rao"] },
    { name: "Site Visit", count: 64, leads: ["Sneha Iyer", "Manav Joshi"] },
    { name: "Negotiation", count: 22, leads: ["Ishaan Kapoor", "Payal Desai"] },
    { name: "Booked", count: 9, leads: ["Yash Trivedi", "Neha Kulkarni"] },
];

export const siteVisitCalendar = [
    { day: 7, visits: 3 },
    { day: 14, visits: 2 },
    { day: 21, visits: 5 },
];

export const brokerRows = [
    { name: "Vikram Chheda", company: "Chheda Realty", leads: 86, converted: 11, conv: "12.8%", status: "Active" },
    { name: "Farhan Sheikh", company: "Skyline Associates", leads: 54, converted: 6, conv: "11.1%", status: "Active" },
    { name: "Ritu Bhansali", company: "Urban Nest Advisors", leads: 39, converted: 3, conv: "7.7%", status: "Active" },
    { name: "Owais Merchant", company: "Merchant Properties", leads: 21, converted: 0, conv: "—", status: "Inactive" },
];

export const integrations = [
    {
        name: "Meta Lead Ads",
        status: "Connected · synced just now",
        description: "Facebook & Instagram lead forms sync straight into Lead Manager with full ad, campaign and creative attribution.",
    },
    {
        name: "Google Ads",
        status: "Connected · lead form extensions",
        description: "Lead form extensions and Search campaigns feed directly into the same funnel — one source of truth for every rupee spent.",
    },
    {
        name: "WhatsApp Bot",
        status: "Prepseed WhatsApp Management Service",
        description: "Every WhatsApp enquiry is auto-replied, qualified and logged by the bot before it ever reaches a human.",
    },
];

export const moreIntegrations = ["99acres / MagicBricks feeds", "Call Tracking", "Email & SMS", "Payment Gateway", "Accounting / ERP export"];

export const whatsappChat = [
    { from: "in", text: "Hi! I'm interested in 2BHK homes near Vaishnodevi.", time: "10:41 AM" },
    { from: "out", text: "Hi Priya 👋 Thanks for reaching out! What's your budget range — under ₹65L, ₹65–85L, or above?", time: "10:41 AM" },
    { from: "in", text: "Around 70L", time: "10:42 AM" },
    { from: "out", text: "Perfect — we have 2BHK units starting ₹68L with a clubhouse & garden view. Would you like a free site visit this weekend?", time: "10:42 AM" },
    { from: "in", text: "Yes, Saturday works", time: "10:43 AM" },
    { from: "out", text: "Booked ✅ Saturday 11:00 AM. Our executive will call shortly to confirm. See you at the site!", time: "10:43 AM" },
];

export const roles = [
    {
        icon: <FiShield />,
        name: "Owner / Admin",
        description: "Full visibility across every project, team and report. Controls users, roles & integrations.",
        slug: "owner-admin",
    },
    {
        icon: <FiCheckSquare />,
        name: "Sales Manager",
        description: "Team-level dashboards, lead reassignment, SLA monitoring and broker oversight.",
        slug: "sales-manager",
    },
    {
        icon: <FiClock />,
        name: "Tele-caller",
        description: "Sees only their assigned queue — Action Center, calls and follow-ups. Nothing else.",
        slug: "tele-caller",
    },
    {
        icon: <FiMapPin />,
        name: "Field Executive",
        description: "Mobile-first access to site visits, directions and instant outcome logging.",
        slug: "field-executive",
    },
];

// Reports & Analytics and Mobile & Web App also appear in moduleGrid above —
// both point at the same detail-page slug, so there's one page, not two.
export const extraFeatures = [
    {
        icon: <FiCheckSquare />,
        title: "Task Management",
        description: "Assign tasks with a due date and priority, straight from any lead record.",
        bullets: ["Instant push notifications", "Automatic overdue escalation", "One view across every team member"],
        slug: "task-management",
    },
    {
        icon: <FiBarChart2 />,
        title: "Reports & Analytics",
        description: "Numbers that show exactly where deals are won and lost, by source and by exec.",
        bullets: ["Custom date ranges, any project", "One-click CSV & branded PDF export", "Daily or weekly digests on email"],
        slug: "reports-analytics",
    },
    {
        icon: <FiSmartphone />,
        title: "Mobile & Web App",
        description: "Published under your own name on the app stores — Prepseed stays invisible.",
        bullets: ["Same app on phone, iPad, laptop", "Field-ready, one-handed use", "Push notifications reach reps instantly"],
        slug: "mobile-web-app",
    },
    {
        icon: <FiLayers />,
        title: "Project & Inventory",
        description: "Track towers, units and live inventory value across every launch, in real time.",
        bullets: ["Unit-level configuration, floor & price", "Run every project from one CRM", "Every enquiry tied to the exact unit"],
        slug: "project-inventory",
    },
];

export const whitelabelChecklist = [
    { title: "Your logo & brand color", description: "Applied across web, mobile app and customer-facing messages." },
    { title: "Your domain", description: "crm.yourbrand.com — customers never see \"Prepseed.\"" },
    { title: "Your app on the stores", description: "Published under your developer account, your name, your icon." },
    { title: "Your workflows", description: "Custom fields, stages & approval flows matched to how you sell." },
    { title: "Your notifications", description: "SMS, email & WhatsApp messages sent from your own number." },
    { title: "Your reports", description: "Every exported PDF and dashboard carries your branding." },
    { title: "Your support line", description: "Your customers and team reach you — never Prepseed." },
    { title: "Your pricing", description: "You decide what to charge your own team or clients." },
];

export const replacedTools = [
    { from: "Zoho CRM / Salesforce", to: "Lead Manager & Dashboard" },
    { from: "DoubleTick / Interakt / WATI", to: "Prepseed WhatsApp Mgmt. Service" },
    { from: "Zapier / Make", to: "Native Meta, Google & WhatsApp sync" },
    { from: "Calendly", to: "Site Visits — calendar & reminders" },
    { from: "Mailchimp / bulk SMS tools", to: "Native WhatsApp, Email & SMS broadcasts" },
    { from: "Exotel / Knowlarity", to: "Native Call Tracking" },
    { from: "Google Sheets / Excel trackers", to: "Live Reports & Analytics" },
    { from: "Typeform / Google Forms", to: "Native lead capture, auto-synced" },
];

export const migrationSteps = [
    { step: 1, title: "Share access", description: "Read-only access to your current CRM, Excel sheets or WhatsApp exports. No downtime." },
    { step: 2, title: "We migrate everything", description: "Leads, contacts, call logs, site-visit history, documents and broker records — mapped and moved." },
    { step: 3, title: "You watch it happen", description: "Track migration progress in real time — nothing goes live until you've reviewed and approved it." },
    { step: 4, title: "Go live, old tool retired", description: "Your team starts working in Prepseed from day one — zero data loss, zero manual re-entry." },
];

export const whyPrepseed = [
    { value: "400,000+", label: "Users", description: "Powering platforms across EdTech, Enterprise, Healthcare and Real Estate." },
    { value: "$1.2M", label: "Trusted backing", description: "Investor-backed (2022) engineering team, not a freelance build." },
    { value: "0", label: "Downtime", description: "US military-grade servers with automatic failover — always on." },
    { value: "2", label: "Continents", description: "Primary data in India; encrypted backups held in the US." },
    { value: "5L+", label: "Leads, same platform", description: "From 500 leads to 5 lakh+ — no re-platforming later." },
    { value: "1", label: "Person sees it all", description: "No one but you sees the full database — every other role stays scoped." },
    { value: "24/7", label: "Real support", description: "A dedicated team for setup, migration and ongoing customization." },
    { value: "Weeks", label: "Not quarters", description: "Whitelabeled & live in weeks, not quarters." },
];

export const contact = {
    call: "+91 99133 82221",
    email: "vivek@prepseed.com",
    web: "prepseed.com",
    studio: "Ahmedabad, Gujarat",
};
