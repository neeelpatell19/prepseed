import {
    FiFilter, FiUser, FiCheckSquare, FiBook, FiCreditCard, FiMessageCircle, FiBookOpen, FiHeart,
    FiTruck, FiGrid, FiHome, FiUsers, FiCalendar, FiVideo, FiLayers, FiArchive, FiAward, FiGlobe,
    FiSun, FiAlertCircle, FiAlertTriangle, FiMapPin, FiUserCheck, FiMonitor, FiShield, FiHardDrive,
    FiClock, FiCheck,
} from "react-icons/fi";

export const hero = {
    eyebrow: "Prepseed Presents · PrepSchool",
    title: ["Run every campus like clockwork —", "enquiry to graduation."],
    subtitle:
        "A single, white-labeled preschool & daycare ERP — admissions, attendance, fees, the digital diary and parent communication, running natively on web and mobile. Sold under your own brand.",
    caption: "Preschool & Daycare Management Platform · 2026 Edition",
    stats: [
        { value: "3", label: "apps — owner, teacher & parent" },
        { value: "0", label: "paper registers or spreadsheets" },
        { value: "weeks", label: "not quarters, to go live" },
    ],
};

export const problems = [
    { icon: <FiFilter />, title: "Enquiries lost in WhatsApp & phone calls", description: "No funnel, no follow-up reminders — walk-ins and website leads quietly go cold.", slug: "enquiries-lost-whatsapp-calls" },
    { icon: <FiCalendar />, title: "Attendance still runs on a paper register", description: "No proof of exactly who picked up which child, or when.", slug: "attendance-paper-register" },
    { icon: <FiCreditCard />, title: "Fee collection by cash and memory", description: "Dues chased over phone calls, receipts written out by hand every time.", slug: "fee-collection-cash-memory" },
    { icon: <FiMessageCircle />, title: "Parents left anxious, blind to the day", description: "No idea if their child ate, napped, or was in a good mood — until pickup.", slug: "parents-anxious-blind-to-day" },
    { icon: <FiUsers />, title: "Staff records scattered across registers", description: "Certificates, verification papers and shift rosters, all on paper.", slug: "staff-records-scattered" },
    { icon: <FiHeart />, title: "A child's health history lives in someone's memory", description: "Allergies and medical notes aren't in a system — they're word of mouth.", slug: "child-health-history-memory" },
    { icon: <FiTruck />, title: "Transport is a black box", description: "Parents don't know if the bus is late, or who's actually on board.", slug: "transport-black-box" },
    { icon: <FiGrid />, title: "Five apps, none of them talk", description: "A fee app, an attendance app, a WhatsApp group and a spreadsheet — no sync.", slug: "five-apps-dont-talk" },
    { icon: <FiHome />, title: "Owners can't see across branches", description: "No consolidated view of enrollment, revenue or staff performance.", slug: "owners-no-cross-branch-view" },
];

// Every module card links to its own dedicated detail page.
export const moduleGrid = [
    { icon: <FiFilter />, title: "Admissions & Enquiry CRM", description: "Website leads to trial class to admission, tracked", slug: "admissions-enquiry-crm" },
    { icon: <FiUser />, title: "Student Profiles & Records", description: "Photo ID, guardians, medical & documents, one file", slug: "student-profiles-records" },
    { icon: <FiCheckSquare />, title: "Attendance & Pickup-Drop", description: "Biometric/RFID/app check-in, verified pickup", slug: "attendance-pickup-drop" },
    { icon: <FiBook />, title: "Digital Diary", description: "Meals, naps, diapers, mood & photos, shared live", slug: "digital-diary" },
    { icon: <FiCreditCard />, title: "Fee Management & Payments", description: "Invoicing, online payments, auto reminders", slug: "fee-management-payments" },
    { icon: <FiMessageCircle />, title: "Parent Communication App", description: "Chat, notices & real-time updates", slug: "parent-communication-app" },
    { icon: <FiBookOpen />, title: "Curriculum & Milestones", description: "Lesson plans and developmental tracking", slug: "curriculum-milestones" },
    { icon: <FiHeart />, title: "Health & Safety", description: "Medical records, immunization, incident log", slug: "health-safety-incident-management" },
    { icon: <FiTruck />, title: "Transport & GPS Tracking", description: "Live bus location, pickup/drop alerts", slug: "transport-gps-tracking" },
    { icon: <FiUsers />, title: "Staff, HR & Payroll", description: "Rosters, attendance, payroll exports", slug: "staff-hr-payroll" },
];

export const alsoIncluded = [
    { label: "CCTV & Live Streaming", slug: "cctv-live-streaming" },
    { label: "Multi-Branch Management", slug: "multi-branch-management" },
    { label: "Inventory & Resources", slug: "inventory-resources" },
    { label: "Events & PTM Scheduling", slug: "events-ptm-scheduling" },
    { label: "Alumni & Certificates", slug: "alumni-certificates" },
    { label: "Website Enquiry Widget", slug: "website-enquiry-widget" },
];

export const spotlights = [
    {
        id: "admissions-enquiry-crm",
        eyebrow: "Module — Admissions & Enquiry CRM",
        title: "Every enquiry, followed up — never dropped.",
        accent: "never dropped",
        tone: "orange",
        description: "A website form fill lands straight in the funnel, tagged by branch — with automatic follow-up reminders so no enquiry goes untouched for more than a day.",
        bullets: [
            "Website enquiry widget captures leads — every form fill lands straight in the funnel, tagged by branch.",
            "Automatic follow-up reminders — no enquiry goes untouched for more than a day.",
            "Trial class to admission, in one click — convert a trial straight into an admission with fee auto-generated.",
            "Source & branch reporting — see which channel and campus converts best, every term.",
        ],
        mockup: "enquiry",
        reversed: false,
    },
    {
        id: "student-profiles-records",
        eyebrow: "Module — Student Profiles & Records",
        title: "Every child's file, complete and current.",
        accent: "complete and current",
        tone: "blue",
        description: "Photo, guardians, emergency contacts and documents live in a single, always-current record — with allergy and medical flags surfaced on the profile itself, not buried in a form nobody re-reads.",
        bullets: [
            "One file per child — photo, guardians, emergency contacts and documents in a single, always-current record.",
            "Allergy & medical flags, front and center — critical information surfaces on the profile, not buried in a form nobody re-reads.",
            "Multiple guardians, clear permissions — add parents, grandparents or nannies, each with their own pickup authorization.",
            "Document vault, always accessible — birth certificates, consent forms and immunization records, uploaded once and never lost.",
        ],
        mockup: "studentProfile",
        reversed: true,
    },
    {
        id: "attendance-pickup-drop",
        eyebrow: "Module — Attendance & Pickup-Drop",
        title: "Know who's in, and who's authorized to take them home.",
        accent: "authorized to take them home",
        tone: "green",
        description: "Front-desk staff mark drop-off in seconds, only authorized guardians can collect a child, and owners see attendance trends across every classroom and campus, live.",
        bullets: [
            "Biometric, RFID or app check-in — front-desk staff mark drop-off in seconds; parents get an instant notification.",
            "Verified pickup, every time — only authorized guardians can collect a child; OTP or photo match required at the gate.",
            "Late pickup & absence, auto-flagged — front desk and parents both see the alert the moment a pattern breaks.",
            "Class-wise & branch-wise rollups — owners see attendance trends across every classroom and campus, live.",
        ],
        mockup: "attendance",
        reversed: false,
    },
    {
        id: "digital-diary",
        eyebrow: "Module — Digital Diary",
        title: "Meals, naps, diapers and mood — shared as the day happens.",
        accent: "shared as the day happens",
        tone: "orange",
        description: "Teachers log every activity in seconds from the classroom, and photos and short videos reach parents the same minute they happen — not as an end-of-day dump.",
        bullets: [
            "Logged in seconds, per activity — teachers tap to record meals, naps, diaper changes and mood right from the classroom.",
            "Photos & short videos, shared instantly — parents see their child's moments the same minute they happen, no end-of-day dump.",
            "A full day, in one timeline — every entry rolls up into a clean daily report parents can look back on anytime.",
            "Private by design — each child's diary is visible only to their own guardians and assigned teachers.",
        ],
        mockup: "diary",
        reversed: true,
    },
    {
        id: "parent-communication-app",
        eyebrow: "Module — Parent Communication App",
        title: "Every update, every notice — straight to the parent.",
        accent: "straight to the parent",
        tone: "orange",
        description: "Parents message the classroom teacher directly, get read-receipted notices instantly, and see the day's diary, fees and attendance in one app — with push, SMS & WhatsApp alerts wherever they actually check.",
        bullets: [
            "Direct chat with teachers — parents message the classroom teacher directly, no group-chat noise.",
            "Notices, circulars & event RSVPs — announcements reach every parent instantly, with read receipts for the school.",
            "Live diary, fees & attendance — everything a parent needs, in one app, no separate logins for separate tools.",
            "Push, SMS & WhatsApp alerts — critical updates reach parents on whichever channel they actually check.",
        ],
        mockup: "parentApp",
        reversed: false,
    },
    {
        id: "fee-management-payments",
        eyebrow: "Module — Fee Management & Payments",
        title: "Invoicing and collections, without the chasing.",
        accent: "without the chasing",
        tone: "green",
        description: "Term fees, transport and one-off charges bill themselves, parents pay online in a tap, and reminders go out automatically — before and after a due date, with no awkward calls.",
        bullets: [
            "Auto-generated invoices — term fees, transport and one-off charges billed without manual entry.",
            "Pay online in a tap — UPI, cards & net banking straight from the parent app.",
            "Automatic due reminders — SMS & WhatsApp nudges before and after a due date, no awkward calls.",
            "Receipts & ledgers, exportable — branded receipts and an accounting-ready ledger, one click.",
        ],
        mockup: "fee",
        reversed: true,
    },
    {
        id: "curriculum-milestones",
        eyebrow: "Module — Curriculum & Milestone Tracking",
        title: "Weekly lesson plans, milestones tracked right behind them.",
        accent: "milestones tracked right behind them",
        tone: "blue",
        description: "A ready-made curriculum library ships by age group, developmental milestones are tracked as they're met, and report cards build themselves from real milestone data — not a term-end scramble.",
        bullets: [
            "Ready-made curriculum library — weekly plans by age group, edit to fit your school.",
            "Milestone tracking, per child — cognitive, motor, language and social-emotional markers.",
            "Report cards, generated fast — term progress reports built from real milestone data.",
            "Shared with parents, on schedule — weekly themes appear in the parent app automatically.",
        ],
        mockup: "curriculum",
        reversed: false,
    },
    {
        id: "transport-gps-tracking",
        eyebrow: "Module — Transport & GPS Tracking",
        title: "The bus, visible to every parent, live.",
        accent: "visible to every parent",
        tone: "green",
        description: "Parents track the bus in real time from the app, a child's boarding and alighting logs automatically over RFID, and a running-late bus pushes a revised pickup time before anyone has to ask.",
        bullets: [
            "Live GPS on every route — parents track the bus in real time from the app, no more guessing at the gate.",
            "RFID tap-in, tap-out on board — a child's boarding and alighting is logged automatically, and parents are notified.",
            "Driver & attendant app — route stops, attendance and emergency contacts, all in the driver's own app.",
            "Delay & ETA alerts — running late? Parents get a push notification with a revised pickup time.",
        ],
        mockup: "transport",
        reversed: true,
    },
];

// ---------- Admissions & Enquiry CRM (kanban) mockup ----------
export const enquiryColumns = [
    { key: "new", title: "New Enquiry", count: 64, cards: [
        { name: "Vihaan Mehta (age 3)", meta: "Website · 2h ago" },
        { name: "Anaya Shah (age 2)", meta: "Walk-in · 5h ago" },
        { name: "Reyansh Patel (age 4)", meta: "Instagram · 1d ago" },
    ] },
    { key: "visit", title: "Visit Scheduled", count: 38, cards: [
        { name: "Ira Desai", meta: "Campus tour · Fri 11 AM" },
        { name: "Kabir Joshi", meta: "Campus tour · Sat 4 PM" },
    ] },
    { key: "trial", title: "Trial Class", count: 21, cards: [
        { name: "Myra Nair", meta: "Nursery · Mon–Wed" },
        { name: "Advait Rao", meta: "Playgroup · Tue–Thu" },
    ] },
    { key: "admitted", title: "Admitted", count: 142, cards: [
        { name: "Saanvi Kapoor", meta: "LKG · Fee paid" },
        { name: "Arjun Iyer", meta: "UKG · Fee paid" },
    ] },
    { key: "waitlist", title: "Waitlist", count: 17, cards: [
        { name: "Diya Trivedi", meta: "Playgroup · full" },
    ] },
];

// ---------- Student Profiles & Records mockup ----------
export const studentProfile = {
    name: "Myra Nair",
    meta: "Nursery · Section B · Roll No. 14",
    stats: [
        { label: "DOB", value: "12 Apr 2022", tone: "blue" },
        { label: "Guardian", value: "Rhea Nair", tone: "blue" },
        { label: "Allergies", value: "Peanuts", tone: "red" },
        { label: "Fee Status", value: "Paid", tone: "green" },
    ],
    documents: [
        { name: "Birth Certificate", type: "Identity", status: "Verified" },
        { name: "Immunization Record", type: "Medical", status: "Up to date" },
        { name: "Emergency Contact Form", type: "Safety", status: "On file" },
        { name: "Photo Consent", type: "Consent", status: "Signed" },
    ],
};

// ---------- Attendance calendar mockup ----------
export const attendanceCalendar = {
    label: "March 2026 — Nursery B",
    days: [
        { d: 23 }, { d: 24 }, { d: 25 }, { d: 26, tag: "1 late pickup" }, { d: 27 }, { d: 28 }, { d: 1 },
        { d: 2 }, { d: 3 }, { d: 4 }, { d: 5 }, { d: 6 }, { d: 7 }, { d: 8 },
        { d: 9 }, { d: 10 }, { d: 11, tag: "2 absent" }, { d: 12 }, { d: 13 }, { d: 14 }, { d: 15 },
        { d: 16 }, { d: 17 }, { d: 18 }, { d: 19 }, { d: 20, tag: "School holiday" }, { d: 21 }, { d: 22 },
    ],
};

// ---------- Digital Diary mockup ----------
export const diaryEntries = [
    { title: "Breakfast", time: "8:45 AM" },
    { title: "Story Time", time: "9:30 AM" },
    { title: "Nap", time: "11:15 AM" },
    { title: "Lunch", time: "12:30 PM" },
    { title: "Art Class", time: "2:00 PM" },
    { title: "Diaper Change", time: "2:40 PM" },
    { title: "Outdoor Play", time: "3:15 PM" },
    { title: "Snack", time: "4:00 PM" },
];

// ---------- Parent app phone mockup ----------
export const parentApp = {
    greeting: "Good afternoon",
    name: "Rhea Nair",
    tabs: ["Today", "Diary", "Fees", "Notices"],
    timeline: [
        { label: "Checked in — 8:32 AM", meta: "On time", tone: "green" },
        { label: "Lunch — ate well", meta: "12:35 PM", tone: "blue" },
        { label: "Nap — 45 minutes", meta: "11:20 AM", tone: "blue" },
    ],
    notices: [
        { title: "Annual Day rehearsals begin Monday", meta: "Nursery & LKG · 3:00–4:00 PM", tag: "New" },
        { title: "Fee due for April", meta: "Tap to pay online", tag: "Due 5th" },
    ],
};

// ---------- Fee Management mockup ----------
export const feeStats = [
    { label: "Total Billed", value: "₹18.4L", tone: "orange" },
    { label: "Collected", value: "₹15.9L", tone: "green" },
    { label: "Due", value: "₹2.5L", tone: "amber" },
    { label: "Overdue", value: "11", tone: "red" },
    { label: "Online Payments", value: "74%", tone: "blue" },
];
export const feeRows = [
    { student: "Myra Nair", invoice: "INV-2204", amount: "₹12,000", due: "5 Apr", status: "Paid" },
    { student: "Arjun Iyer", invoice: "INV-2205", amount: "₹14,500", due: "5 Apr", status: "Due in 3 days" },
    { student: "Diya Trivedi", invoice: "INV-2198", amount: "₹11,000", due: "28 Mar", status: "Overdue" },
];

// ---------- Curriculum mockup ----------
export const curriculumRows = [
    { day: "Mon", theme: "Colors & Shapes", activity: "Sorting game", skill: "Cognitive" },
    { day: "Tue", theme: "Colors & Shapes", activity: "Finger painting", skill: "Fine motor" },
    { day: "Wed", theme: "Story Time", activity: "\"The Hungry Caterpillar\"", skill: "Language" },
    { day: "Thu", theme: "Music & Movement", activity: "Rhythm circle", skill: "Gross motor" },
    { day: "Fri", theme: "Show & Tell", activity: "Bring a favorite toy", skill: "Social-emotional" },
];
export const curriculumProgress = {
    value: 68,
    label: "MILESTONES",
    title: "Myra Nair — Term Progress",
    caption: "17 of 25 developmental milestones met for this term, updated by her teacher.",
};

// ---------- Transport mockup ----------
export const transportRoute = {
    label: "Route 4 — Morning Pickup",
    status: "On route",
    bus: "Bus GJ-01-AB-4021 · 3 stops away",
    stops: [
        { stop: "Satellite Rd", eta: "8:02 AM", status: "Done" },
        { stop: "SG Highway", eta: "8:14 AM", status: "Next" },
        { stop: "Bopal Cross Rd", eta: "8:24 AM", status: "Pending" },
    ],
};

// ---------- Health, Safety & Incident Management ----------
export const healthSafetyIntro = {
    kicker: "Module — Health, Safety & Incident Management",
    tone: "red",
    title: "Every allergy, every incident — nothing falls through.",
    accent: "nothing falls through",
};
export const healthSafetyItems = [
    { icon: <FiHeart />, title: "Medical records, per child", description: "Conditions, medications and doctor contacts, visible to authorized staff only." },
    { icon: <FiCheckSquare />, title: "Immunization tracker", description: "Due & overdue vaccines flagged automatically, term after term." },
    { icon: <FiAlertTriangle />, title: "Allergy alerts, always visible", description: "A red flag on the profile, the diary and the classroom roster — impossible to miss." },
    { icon: <FiBook />, title: "Incident & injury log", description: "Every fall or scrape logged with time, photo and action taken — parents notified instantly." },
    { icon: <FiVideo />, title: "CCTV-based attendance", description: "Face recognition at the gate marks a child present automatically — no manual check-in needed." },
    { icon: <FiMessageCircle />, title: "Automatic WhatsApp absence alerts", description: "Not checked in by the usual time? Parents get an instant WhatsApp message flagging the child as absent." },
];
export const healthSafetyCallout = {
    title: "A missed allergy alert becomes a system failure, not a memory lapse.",
    description: "Kitchen staff, teachers and front desk all see the same real-time flag — for every meal, every day.",
};

// ---------- Staff, HR & Payroll ----------
export const staffIntro = {
    kicker: "Module — Staff, HR & Payroll",
    tone: "blue",
    title: "Every teacher's day, tracked — payroll made simple.",
    accent: "payroll made simple",
};
export const staffRoles = [
    { icon: <FiUser />, title: "Owner / Principal", description: "Full visibility across every branch, classroom and report. Controls roles & billing." },
    { icon: <FiCreditCard />, title: "Admin / Front Desk", description: "Attendance, pickup verification, enquiries and fee collection for their branch." },
    { icon: <FiCheckSquare />, title: "Teacher", description: "Digital diary, milestone tracking and curriculum for their own classroom only." },
    { icon: <FiMapPin />, title: "Driver / Attendant", description: "Route roster, live GPS and boarding attendance from a dedicated transport app." },
];
export const staffRows = [
    { name: "Priya Sharma", role: "Principal", branch: "All (3)", attendance: "100%", status: "Active" },
    { name: "Kavya Menon", role: "Teacher — Nursery B", branch: "Satellite", attendance: "96.7%", status: "Active" },
    { name: "Rakesh Solanki", role: "Driver — Route 4", branch: "Satellite", attendance: "100%", status: "Active" },
];

// ---------- AI Insights & Reports ----------
export const aiInsightsIntro = {
    kicker: "AI Insights & Reports",
    title: "Data that explains itself, in plain English.",
    accent: "explains itself",
    sub: "PrepSchool doesn't just store records — it reads the patterns across admissions, attendance and fees, and tells owners what actually needs attention.",
};
export const retentionScore = {
    value: 91,
    label: "RETENTION",
    title: "Term-over-Term Retention",
    sub: "Rolling average across all enrolled students, all branches.",
};
export const aiInsights = [
    { icon: <FiSun />, title: "Bopal branch enquiries dropped 22% this month", description: "Mostly from the Instagram channel — worth reviewing the current ad creative before next term's admission push." },
    { icon: <FiAlertCircle />, title: "6 students are 2+ fee cycles behind", description: "Flagged across two branches for a personal follow-up call before the next reminder cycle triggers." },
    { icon: <FiHeart />, title: "3 immunization records are due for renewal next month", description: "Auto-flagged for the front desk to request updated certificates before they lapse." },
    { icon: <FiCheckSquare />, title: "Satellite branch is your strongest performer", description: "96% attendance and 100% on-time fee collection for 6 straight weeks — worth recognizing." },
];

// ---------- One Platform, Three Apps ----------
export const threeAppsIntro = {
    kicker: "One Platform, Three Apps",
    title: "Built for the owner, the teacher and the parent.",
};
export const threeApps = [
    { icon: <FiHome />, title: "Owner / Admin Web App", meta: "Any browser · every branch", bullets: [
        "Consolidated dashboard across all campuses and classrooms",
        "Enrollment, fee collection and staff reports, live",
        "Role-based access for principals and front-desk staff",
    ] },
    { icon: <FiBook />, title: "Teacher App", meta: "iOS & Android", bullets: [
        "One tap to log meals, naps, diapers, mood & photos",
        "Classroom attendance and milestone tracking",
        "Direct chat with parents, without sharing personal numbers",
    ] },
    { icon: <FiMessageCircle />, title: "Parent App", meta: "iOS & Android", bullets: [
        "Live digital diary, notices and fee payments",
        "Real-time bus tracking and pickup notifications",
        "Direct chat with the classroom teacher",
    ] },
];

// ---------- Integrations ----------
export const integrations = [
    { name: "Razorpay / Payment Gateways", status: "Connected · fee collection", description: "UPI, cards and net banking accepted directly from the parent app, with receipts generated automatically." },
    { name: "WhatsApp Business API", status: "Connected · notices & reminders", description: "Fee reminders, attendance alerts and daily diary summaries delivered where parents actually read them." },
    { name: "Biometric / RFID Devices", status: "Connected · gate & bus hardware", description: "Plugs into existing attendance hardware at the gate, classroom and bus door — no rip-and-replace." },
];
export const integrationsInfoTiles = [
    { icon: <FiCheck />, title: "Set up in a day", description: "Connect accounts once — no developer needed." },
    { icon: <FiCheckSquare />, title: "Zero double entry", description: "Payments, notices and attendance stay in sync automatically." },
    { icon: <FiBook />, title: "Accounting-ready exports", description: "Fee ledgers flow straight into Tally, Zoho Books or QuickBooks." },
    { icon: <FiClock />, title: "Always in sync", description: "Data refreshes automatically, 24/7, across every branch." },
];
export const moreIntegrations = ["SMS Gateways", "Google Workspace", "Zoom / Google Meet (virtual PTMs)", "CCTV / NVR Systems", "Tally / Zoho Books", "Zapier / Webhooks"];

// ---------- Security & Child-Safety Compliance ----------
export const complianceItems = [
    { icon: <FiUserCheck />, title: "Role-scoped access", description: "Teachers see only their own classroom; front desk sees only their own branch." },
    { icon: <FiMonitor />, title: "CCTV access, tightly controlled", description: "Live classroom feeds are visible only to verified parents of enrolled children." },
    { icon: <FiShield />, title: "Verified pickup, enforced", description: "Only guardians on file — with photo or OTP match — can collect a child." },
    { icon: <FiHardDrive />, title: "Data residency options", description: "Choose where student and family data is stored to meet local requirements." },
    { icon: <FiCheckSquare />, title: "Full audit trail", description: "Every access to a child's record is logged — visibility cuts both ways." },
    { icon: <FiUsers />, title: "Staff verification on file", description: "Background checks and certifications tracked and expiring on schedule." },
];

// ---------- Also built in ----------
export const extraFeatures = [
    {
        icon: <FiVideo />,
        title: "CCTV & Live Streaming",
        description: "Built-in live classroom streaming for verified parents — no separate camera app to install.",
        bullets: ["Live feeds visible only to verified parents of enrolled children", "No standalone viewer app or extra subscription", "Same access controls as every other child record"],
        slug: "cctv-live-streaming",
        mockup: null,
    },
    {
        icon: <FiLayers />,
        title: "Multi-Branch Management",
        description: "One franchise console rolls up every branch — settings, staff and reports, replicated or reviewed from a single dashboard.",
        bullets: ["Add branches and replicate settings from one console", "Consolidated enrollment, revenue and staff reports", "Per-branch fee structures, age groups and term calendars"],
        slug: "multi-branch-management",
        mockup: null,
    },
    {
        icon: <FiArchive />,
        title: "Inventory & Resources",
        description: "Classroom supplies, learning materials and equipment tracked per branch, so restocking isn't a manager's guesswork.",
        bullets: ["Stock tracked per classroom and branch", "Low-stock alerts before supplies run out", "One record shared across every campus"],
        slug: "inventory-resources",
        mockup: null,
    },
    {
        icon: <FiCalendar />,
        title: "Events & PTM Scheduling",
        description: "Annual day, PTMs and field trips scheduled with RSVP tracking, so a headcount doesn't depend on a phone tree.",
        bullets: ["RSVP tracking built into every event notice", "Virtual PTM scheduling over Zoom or Google Meet", "Reminders sent automatically as the date nears"],
        slug: "events-ptm-scheduling",
        mockup: "attendance",
    },
    {
        icon: <FiAward />,
        title: "Alumni & Certificates",
        description: "Graduation certificates and alumni records generated and kept on file, long after a family moves on.",
        bullets: ["Certificates generated from the student's own record", "Alumni contact history kept after graduation", "No re-typing a child's details a second time"],
        slug: "alumni-certificates",
        mockup: null,
    },
    {
        icon: <FiGlobe />,
        title: "Website Enquiry Widget",
        description: "A form embedded on the school's own website feeds straight into the Admissions & Enquiry CRM funnel, tagged by source.",
        bullets: ["Embeds directly on your existing website", "Every submission tagged by source and branch", "No enquiry re-typed from an email into the CRM"],
        slug: "website-enquiry-widget",
        mockup: "enquiry",
    },
];

// ---------- Whitelabel & multi-branch ----------
export const brandChips = [
    { name: "Little Sprouts", color: "#ee6c4d" },
    { name: "Tiny Steps", color: "#6366f1" },
    { name: "Bright Buds", color: "#16b866" },
    { name: "Kinder Nest", color: "#1f2937" },
];
export const whitelabelChecklist = [
    { title: "Your logo & brand color", description: "Applied across the web app, parent app and teacher app." },
    { title: "Your domain", description: "admin.yourbrand.com — families never see \"Prepseed.\"" },
    { title: "Franchise console", description: "One dashboard to add branches, replicate settings and roll up reports." },
    { title: "Your policies", description: "Custom fee structures, age groups and term calendars per branch." },
    { title: "Your branded apps", description: "Parent & teacher apps published to app stores under your name." },
    { title: "Your reports", description: "Every exported PDF and receipt carries your branding." },
    { title: "Your support line", description: "Parents and staff reach you — never Prepseed." },
    { title: "Your pricing", description: "You decide what to charge each family or franchisee." },
];

// ---------- One vendor / replaced tools ----------
export const replacedTools = [
    { from: "Paper attendance registers", to: "Attendance & Pickup-Drop" },
    { from: "Cash collection & hand receipts", to: "Fee Management & Payments" },
    { from: "WhatsApp parent groups", to: "Parent Communication App" },
    { from: "Separate transport tracking app", to: "Transport & GPS Tracking" },
    { from: "Excel enrollment trackers", to: "Admissions & Enquiry CRM" },
    { from: "Photocopied worksheets & diaries", to: "Curriculum & Digital Diary" },
    { from: "Standalone CCTV viewer apps", to: "Built-in Live Classroom Streaming" },
    { from: "Manual payroll spreadsheets", to: "Native payroll-ready exports" },
];
export const replaceInfoTiles = [
    { icon: <FiCreditCard />, title: "One vendor, one bill", description: "No juggling five renewals and five support tickets." },
    { icon: <FiCheckSquare />, title: "Nothing breaks in between", description: "No API limits, sync failures or automation glue to babysit." },
    { icon: <FiShield />, title: "Family data stays in one place", description: "Never scattered across five vendors' servers." },
    { icon: <FiUserCheck />, title: "One team accountable", description: "Prepseed builds, hosts and supports all of it — no finger-pointing." },
];

// ---------- Deployment / migration ----------
export const migrationSteps = [
    { step: 1, title: "Share access", description: "Read-only access to your current registers, fee spreadsheets or another app. No downtime, no disruption." },
    { step: 2, title: "We migrate everything", description: "Student profiles, fee history, staff records and class rosters — mapped and moved by our team." },
    { step: 3, title: "You watch it happen", description: "Track migration progress in real time — nothing goes live until you've reviewed and approved it." },
    { step: 4, title: "Go live, old tools retired", description: "Teachers and parents start on PrepSchool from day one — zero data loss, zero manual re-entry." },
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
    { value: "50", label: "Campuses, one platform", description: "From one campus to fifty, same platform — no re-platforming later." },
    { value: "1", label: "Role sees it all", description: "No one but you sees the full family database — every other role stays scoped." },
    { value: "24/7", label: "Real support, real people", description: "A dedicated team for setup, migration and ongoing customization." },
    { value: "Weeks", label: "Not quarters", description: "Whitelabeled & live in weeks, not quarters." },
];

export const contact = {
    call: "+91 99133 82221",
    email: "vivek@prepseed.com",
    web: "prepseed.com",
    studio: "Ahmedabad, Gujarat",
};
