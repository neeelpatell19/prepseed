import {
    FiClock, FiMessageSquare, FiBookOpen, FiBell, FiMoon, FiFileText,
    FiMessageCircle, FiCheckCircle, FiGitBranch, FiSend, FiInbox, FiUsers,
    FiRefreshCw, FiBarChart2, FiShield, FiUser, FiUserCheck, FiHeadphones,
    FiHash, FiTag, FiEdit3, FiZap,
} from "react-icons/fi";

export const hero = {
    eyebrow: "Prepseed Presents · PrepWhatsBot",
    title: ["Turn WhatsApp into your", "best-performing rep", "— automatically."],
    subtitle:
        "An AI bot trained on your own website, brochures & docs — replies instantly, qualifies leads, hands off to your team when it matters, and runs bulk campaigns to your whole database. Sold under your brand.",
    stats: [
        { value: "4s", label: "average first reply" },
        { value: "78%", label: "typical bot resolution rate" },
        { value: "weeks", label: "not quarters, to launch" },
    ],
};

export const problems = [
    {
        icon: <FiClock />,
        title: "Replies happen whenever someone's free",
        description: "Not in real time — and leads go cold within minutes of going quiet.",
        slug: "replies-whenever-free",
    },
    {
        icon: <FiMessageSquare />,
        title: "The same questions, a hundred times",
        description: "Pricing, brochure, timings, availability — typed out manually, again and again.",
        slug: "same-questions-hundred-times",
    },
    {
        icon: <FiBookOpen />,
        title: "No knowledge base to draw from",
        description: "New hires hunt through PDFs and group chats just to answer a product question.",
        slug: "no-knowledge-base",
    },
    {
        icon: <FiBell />,
        title: "Bulk outreach is risky or manual",
        description: "Copy-pasting one contact at a time, or an unofficial tool one ban away from silence.",
        slug: "bulk-outreach-risky",
    },
    {
        icon: <FiMoon />,
        title: "After-hours is a black hole",
        description: "Evenings, weekends, holidays — nobody's watching the phone, and enquiries pile up.",
        slug: "after-hours-black-hole",
    },
    {
        icon: <FiFileText />,
        title: "No record of what was said",
        description: "Who was contacted, what was promised, what happened next — scattered across phones.",
        slug: "no-record-of-conversations",
    },
];

// Every module card links to its own dedicated detail page.
export const moduleGrid = [
    { icon: <FiMessageCircle />, title: "Connect WhatsApp", description: "Business API or QR-linked number, live in minutes", slug: "connect-whatsapp" },
    { icon: <FiBookOpen />, title: "Knowledge Base Training", description: "Feed it your website, brochures, PDFs & FAQs", slug: "knowledge-base-training" },
    { icon: <FiCheckCircle />, title: "AI Auto-Reply", description: "Instant, on-brand answers, 24/7", slug: "ai-auto-reply" },
    { icon: <FiGitBranch />, title: "No-Code Flow Builder", description: "Design menus, buttons & branching flows visually", slug: "flow-builder" },
    { icon: <FiSend />, title: "Bulk Campaigns", description: "Segmented broadcasts with templates & scheduling", slug: "bulk-campaigns" },
    { icon: <FiInbox />, title: "Shared Inbox & Handoff", description: "Bot escalates to a human with full context", slug: "shared-inbox-handoff" },
    { icon: <FiUsers />, title: "Team & Roles", description: "Multiple agents, one number, role-based access", slug: "team-roles" },
    { icon: <FiRefreshCw />, title: "CRM Integrations", description: "Two-way sync with your CRM, Sheets & Zapier", slug: "crm-integrations" },
    { icon: <FiBarChart2 />, title: "Analytics & Reporting", description: "Resolution, delivery, read & reply rates", slug: "analytics-reporting" },
    { icon: <FiShield />, title: "Whitelabel", description: "Sold and branded as your own product", slug: "whitelabel" },
];

export const spotlights = [
    {
        id: "connect-whatsapp",
        eyebrow: "Module — Connect Your WhatsApp",
        title: "Live on your number in minutes, not weeks.",
        description:
            "Official WhatsApp Business API or a quick QR scan — your bot is live and answering on the number your customers already have saved.",
        bullets: [
            "Official WhatsApp Business API — verified green tick, fully compliant, no ban risk from unofficial tools.",
            "Keep your existing number — no need to port, replace, or ask customers to message somewhere new.",
            "Quick QR connect — scan once from the dashboard and your bot is live and answering.",
            "Multiple numbers, one dashboard — franchise or multi-branch? Connect and manage every number centrally.",
        ],
        mockup: "connect",
        reversed: false,
    },
    {
        id: "knowledge-base-training",
        eyebrow: "Module — Knowledge Base Training",
        title: "Feed it your website, brochures & docs — it learns your business.",
        description:
            "Point it at your website, upload brochures and PDFs, and the bot's answers are grounded in exactly what you've fed it — nothing made up.",
        bullets: [
            "Point it at your website — auto-crawls every page and stays in sync as you update content.",
            "Upload brochures & PDFs — product sheets, price lists, policy docs, straight into the bot's memory.",
            "FAQs in plain language — write once, the bot phrases every answer in your tone and words.",
            "Always editable — correct, add or retrain instantly, no developer required.",
        ],
        mockup: "knowledgeBase",
        reversed: true,
    },
    {
        id: "ai-auto-reply",
        eyebrow: "Module — AI Auto-Reply",
        title: "Answers in seconds — pulled straight from your own content.",
        description:
            "No missed enquiry, day or night. Every answer is grounded in your knowledge base, in your tone, with a smart handoff the moment a human is needed.",
        bullets: [
            "Instant, every time — no missed enquiry, day or night, weekday or holiday.",
            "Grounded in your knowledge base — no made-up answers, only what you've actually fed it.",
            "On-brand tone — friendly, professional, and consistently in your voice.",
            "Smart escalation — hands off to a human the moment a conversation needs one.",
        ],
        mockup: "aiReply",
        reversed: false,
    },
    {
        id: "flow-builder",
        eyebrow: "Module — No-Code Flow Builder",
        title: "Design exact conversations — no code, no prompts.",
        description:
            "Drag-and-drop welcome menus, forms and branching flows with real WhatsApp buttons and lists — previewable before anything goes live.",
        bullets: [
            "Drag-and-drop steps — welcome menus, forms, button & list replies, conditional branches, built visually.",
            "Pairs with AI auto-reply — use a fixed flow for bookings or orders, and let the AI handle open-ended questions.",
            "Native WhatsApp UI — real buttons, lists and quick replies, not just plain text prompts.",
            "Preview before you publish — step through the exact conversation a customer will see, before it goes live.",
        ],
        mockup: "flowBuilder",
        reversed: true,
    },
    {
        id: "bulk-campaigns",
        eyebrow: "Module — Bulk WhatsApp Campaigns",
        title: "Reach thousands, compliantly, in one send.",
        description:
            "Segment your database, send from approved templates, and watch delivered, read and reply rates update live — no ban risk, fully within policy.",
        bullets: [
            "Segment your database — by tag, source, course, city or funnel stage, the right message to the right group.",
            "Approved templates — pre-approved WhatsApp templates, no ban risk, fully within policy.",
            "Schedule & automate — drip sequences, reminders and follow-ups run on autopilot.",
            "Real delivery numbers — sent, delivered, read and replied, tracked per campaign, live.",
        ],
        mockup: "bulkCampaigns",
        reversed: false,
    },
    {
        id: "shared-inbox-handoff",
        eyebrow: "Module — Shared Inbox & Human Handoff",
        title: "The bot handles the routine. Your team handles the rest.",
        description:
            "Every WhatsApp conversation in one shared view — the bot escalates to a human with full context the moment a chat actually needs one.",
        bullets: [
            "Full context on handoff — the agent sees the entire conversation, no re-asking the customer.",
            "Hot-lead alerts — high-intent conversations are flagged and routed instantly.",
            "One inbox, whole team — every WhatsApp conversation in a single, shared view.",
            "Never double-reply — a chat picked up by a human is locked from the bot automatically.",
        ],
        mockup: "sharedInbox",
        reversed: true,
    },
    {
        id: "team-roles",
        eyebrow: "Module — Team & Roles",
        title: "Multiple agents. One number. Zero confusion.",
        description:
            "Role-based access, manual or auto-assignment, and a full audit trail — every reply attributed, no shared logins, no crossed wires.",
        bullets: [
            "Role-based access — owners see everything, agents see only their assigned chats.",
            "Manual or auto-assignment — round-robin, by segment, or hand-picked per conversation.",
            "Internal notes — leave context for teammates that the customer never sees.",
            "Full audit trail — every reply, bot or human, timestamped and attributed.",
        ],
        mockup: "teamRoles",
        reversed: false,
    },
    {
        id: "analytics-reporting",
        eyebrow: "Module — Analytics & Reporting",
        title: "Know exactly how WhatsApp is performing — in numbers.",
        description:
            "Bot resolution rate, campaign performance and response time, all tracked automatically — with a lead funnel sourced straight from WhatsApp.",
        bullets: [
            "Bot resolution rate — how many enquiries close without a human ever joining.",
            "Campaign performance — delivery, read and reply rate, tracked per broadcast.",
            "Response time — first-reply and resolution time, measured automatically.",
            "Lead funnel — enquiry → qualified → booked, all sourced straight from WhatsApp.",
        ],
        mockup: "analytics",
        reversed: true,
    },
];

// ---------- Connect WhatsApp mockup ----------
export const qrConnect = { number: "+91 98765 43210", status: "Connected · Business API" };

// ---------- Knowledge base mockup ----------
export const kbStats = [
    { label: "Sources Connected", value: "4", sub: "website + 3 docs" },
    { label: "Pages Indexed", value: "166", sub: "auto-synced" },
    { label: "Last Trained", value: "2m ago", sub: "auto-retrain on edit" },
];
export const kbRows = [
    { source: "yourbrand.com", type: "Website (crawled)", status: "Indexed", coverage: "142 pages" },
    { source: "Product-Brochure.pdf", type: "PDF upload", status: "Indexed", coverage: "18 pages" },
    { source: "Pricing-FAQ.docx", type: "Document upload", status: "Indexed", coverage: "6 pages" },
    { source: "Return-Policy.pdf", type: "PDF upload", status: "Processing…", coverage: "—" },
];

// ---------- AI auto-reply chat mockup ----------
export const aiReplyChat = [
    { from: "in", text: "Hi! Do you have a brochure for the Data Science course?", time: "10:41 AM" },
    { from: "out", text: "Hi Rahul 👋 Yes! Our Data Science course is a 6-month weekend batch — ₹45,000, next batch starts Aug 3. Want me to send the brochure PDF?", time: "10:41 AM" },
    { from: "in", text: "Yes please", time: "10:42 AM" },
    { from: "out", text: "Sent! 📄 Data-Science-Brochure.pdf — let me know if you'd like a free counselling call.", time: "10:42 AM" },
    { from: "in", text: "Book a call", time: "10:43 AM" },
    { from: "out", text: "Booked ✅ Thu 4:00 PM. Our counsellor Ananya will call you then. Anything else?", time: "10:43 AM" },
];

// ---------- Flow builder mockup ----------
export const flowChips = ["💰 Pricing", "📅 Book a Demo", "🙋 Talk to Human"];
export const flowBranches = ["Show Price List", "Collect Date & Book", "Assign to Agent"];

// ---------- Bulk campaigns mockup ----------
export const campaign = {
    name: "New Batch Announcement",
    segment: "Segment: Leads · Not Enrolled · Last 90 days — 4,820 contacts",
    message: "🎉 New Data Science batch starts Aug 3! Early-bird pricing ends this Friday. Reply YES for the brochure.",
    stats: [
        { label: "Sent", value: "4,820" },
        { label: "Delivered", value: "4,790" },
        { label: "Read", value: "3,102" },
        { label: "Replied", value: "612" },
    ],
};

// ---------- Shared inbox mockup ----------
export const inboxRows = [
    { name: "Rahul Shah", initial: "R", color: "#2f6fed", message: "Book a call", status: "Bot handled", assigned: "" },
    { name: "Priya Mehta", initial: "P", color: "#ef4444", message: "Can I get a discount on fees?", status: "Needs human", assigned: "Ananya" },
    { name: "Karan Patel", initial: "K", color: "#f5a623", message: "Not interested right now", status: "Bot handled", assigned: "" },
    { name: "Sneha Rao", initial: "S", color: "#16b866", message: "Site visit confirmed for Sat", status: "Resolved", assigned: "Aarav" },
    { name: "Vikram Joshi", initial: "V", color: "#ef4444", message: "Escalated — angry about refund", status: "Needs human", assigned: "Ananya" },
];

// ---------- Team & roles mockup ----------
export const teamRows = [
    { name: "Aarav Shah", initial: "A", color: "#2f6fed", role: "Owner", active: "3", resolved: "18" },
    { name: "Ananya Iyer", initial: "A", color: "#667eea", role: "Sales Agent", active: "7", resolved: "24" },
    { name: "Meera Nair", initial: "M", color: "#f5a623", role: "Support Agent", active: "4", resolved: "15" },
    { name: "Rohan Gupta", initial: "R", color: "#16b866", role: "Sales Agent", active: "5", resolved: "21" },
];

// ---------- Analytics mockup ----------
export const analyticsStats = [
    { label: "Conversations", value: "2,340", sub: "this month", tone: "wa" },
    { label: "Bot Resolved", value: "78%", sub: "no human needed", tone: "green" },
    { label: "Avg First Reply", value: "4s", sub: "bot response time", tone: "blue" },
    { label: "Campaigns Sent", value: "12", sub: "this month", tone: "pink" },
];
export const analyticsBars = [310, 388, 266, 452, 350, 488];
export const analyticsRing = { value: 78, label: "Resolved" };

// ---------- CRM integrations settings mockup ----------
export const settingsRows = [
    { name: "HubSpot", initial: "H", color: "#FF7A59" },
    { name: "Salesforce / Zoho", initial: "S", color: "#00A1E0" },
    { name: "Prepseed CRM & PrepDesk", initial: "P", color: "#22c55e" },
];

export const integrations = [
    {
        name: "HubSpot",
        status: "Connected · two-way sync",
        description: "New WhatsApp conversations create or update contacts and deals automatically — replies log as timeline activity.",
    },
    {
        name: "Salesforce / Zoho",
        status: "Connected · lead sync",
        description: "Leads, tags and conversation status sync straight into your existing pipeline — no double entry for sales teams.",
    },
    {
        name: "Prepseed CRM & PrepDesk",
        status: "Connected · native",
        description: "Already on the Prepseed Real Estate CRM or PrepDesk? WhatsApp leads and conversations sync in natively, zero setup.",
    },
];

export const moreIntegrations = ["Google Sheets", "Zapier / Pabbly", "Shopify / WooCommerce", "Meta Click-to-WhatsApp Ads", "Webhooks / REST API", "Instagram & Messenger"];

export const roles = [
    {
        icon: <FiShield />,
        name: "Owner",
        description: "Sees every conversation, every campaign and every report. Controls agents, roles and integrations.",
        slug: "owner",
    },
    {
        icon: <FiUserCheck />,
        name: "Sales Agent",
        description: "Works assigned and auto-routed chats, sends templates, and books calls straight from the inbox.",
        slug: "sales-agent",
    },
    {
        icon: <FiHeadphones />,
        name: "Support Agent",
        description: "Handles escalated and hot-lead conversations handed off by the bot, with full context on arrival.",
        slug: "support-agent",
    },
];

export const extraFeatures = [
    {
        icon: <FiHash />,
        title: "Multi-Number Management",
        description: "Franchise or multi-branch? Connect and manage every WhatsApp number centrally.",
        bullets: ["One dashboard, every branch", "Per-number routing & reporting", "No juggling separate phones"],
        slug: "multi-number-management",
    },
    {
        icon: <FiTag />,
        title: "Approved Template Library",
        description: "Pre-approved WhatsApp templates ready for broadcasts, reminders and drip sequences.",
        bullets: ["No ban risk, fully within policy", "Reusable across campaigns", "New templates approved fast"],
        slug: "template-library",
    },
    {
        icon: <FiEdit3 />,
        title: "Internal Notes & Audit Trail",
        description: "Leave context for teammates the customer never sees, with every reply timestamped and attributed.",
        bullets: ["Notes invisible to the customer", "Every reply attributed, bot or human", "Full history, never lost"],
        slug: "internal-notes-audit-trail",
    },
    {
        icon: <FiZap />,
        title: "Hot-Lead Alerts",
        description: "High-intent conversations are flagged automatically and routed to the right agent instantly.",
        bullets: ["Flagged the moment intent is detected", "Routed instantly to the right agent", "Never buried in a long queue"],
        slug: "hot-lead-alerts",
    },
];

export const complianceItems = [
    { icon: <FiCheckCircle />, title: "Official Business API", description: "Verified green tick, fully compliant — no ban risk from unofficial tools." },
    { icon: <FiTag />, title: "Approved templates only", description: "Every broadcast uses pre-approved WhatsApp templates, fully within policy." },
    { icon: <FiFileText />, title: "Full audit trail", description: "Every reply, bot or human, is timestamped and attributed — nothing is anonymous." },
    { icon: <FiShield />, title: "Role-based access", description: "Owners see everything; agents see only their assigned chats." },
];

export const whitelabelChecklist = [
    { title: "Your logo & brand color", description: "Applied across the dashboard, chat widget and every report." },
    { title: "Your domain", description: "bot.yourbrand.prepwhatbot.com — customers never see \"Prepseed.\"" },
    { title: "Your WhatsApp profile", description: "Business name, logo and greeting message are entirely yours." },
    { title: "Your notifications", description: "Every bot reply and alert sent under your brand, not PrepWhatBot's." },
    { title: "Your flows & templates", description: "Menus, broadcasts and escalation rules matched to how you work." },
    { title: "Your reports", description: "Every exported PDF and dashboard carries your branding." },
    { title: "Your support line", description: "Your customers and team reach you — never Prepseed." },
    { title: "Your pricing", description: "You decide what to charge your own clients or teams." },
];

export const replacedTools = [
    { from: "AiSensy / Interakt / WATI", to: "Native WhatsApp Business API + AI Auto-Reply" },
    { from: "ManyChat / Chatfuel", to: "No-Code Flow Builder" },
    { from: "Freshchat / Zendesk chat", to: "Shared Inbox & Human Handoff" },
    { from: "Zapier / Make", to: "Native CRM Integrations" },
    { from: "Excel broadcast lists", to: "Segmented Bulk Campaigns" },
    { from: "Manual export & Google Analytics", to: "Analytics & Reporting, built in" },
    { from: "Separate helpdesk wiki", to: "Knowledge Base Training" },
    { from: "Shared logins on one phone", to: "Team & Roles, one dashboard" },
];

export const migrationSteps = [
    { step: 1, title: "Share access", description: "Read-only access to your current WhatsApp tool, template library and contact list. No downtime." },
    { step: 2, title: "We migrate everything", description: "Contacts, templates, flows and conversation history — mapped and moved by our team." },
    { step: 3, title: "You watch it happen", description: "Track migration progress in real time — nothing goes live until you've reviewed and approved it." },
    { step: 4, title: "Go live, old tool retired", description: "Your number answers on PrepWhatBot from day one — zero data loss, zero manual re-entry." },
];

export const whyPrepseed = [
    { value: "400,000+", label: "Users", description: "Powering platforms across EdTech, Enterprise, Healthcare and Real Estate." },
    { value: "$1.2M", label: "Trusted backing", description: "Investor-backed (2022) engineering team, not a freelance build." },
    { value: "0", label: "Downtime", description: "US military-grade servers with automatic failover — always on." },
    { value: "2", label: "Continents", description: "Primary data in India; encrypted backups held in the US." },
    { value: "10M+", label: "Messages, one platform", description: "From a single number to a whole franchise network — no re-platforming later." },
    { value: "Role", label: "Based access", description: "Owners see everything; every agent is scoped to their own assigned chats." },
    { value: "24/7", label: "Real support", description: "A dedicated team for setup, migration and ongoing customization." },
    { value: "Weeks", label: "Not quarters", description: "Whitelabeled & live in weeks, not quarters." },
];

export const contact = {
    call: "+91 99133 82221",
    email: "vivek@prepseed.com",
    web: "prepseed.com",
    studio: "Ahmedabad, Gujarat",
};
