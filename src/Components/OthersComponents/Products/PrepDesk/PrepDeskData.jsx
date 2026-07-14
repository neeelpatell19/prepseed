import {
    FiClock, FiFileText, FiMonitor, FiEyeOff, FiBarChart2, FiUsers, FiActivity, FiGrid,
    FiCamera, FiCalendar, FiCheckSquare, FiBriefcase, FiSun, FiRefreshCw, FiSmartphone,
    FiShield, FiUserCheck, FiUser, FiDatabase, FiSliders, FiGlobe, FiDollarSign, FiLock,
    FiZap, FiCheckCircle, FiTrendingUp,
} from "react-icons/fi";

export const hero = {
    eyebrow: "Prepseed Presents · PrepDesk",
    title: ["Know exactly how", "work gets done", "— automatically."],
    subtitle:
        "A single, white-labeled workforce platform — time tracking, attendance, productivity and AI-driven reporting, running natively on Windows, Mac & Linux. Sold under your brand.",
    stats: [
        { value: "400,000+", label: "users on the engine" },
        { value: "<1%", label: "CPU footprint per agent" },
        { value: "weeks", label: "not quarters, to launch" },
    ],
};

export const problems = [
    {
        icon: <FiClock />,
        title: "Nobody knows where the day went",
        description: "Hours logged on a timesheet rarely match hours actually worked.",
        slug: "day-went-nowhere",
    },
    {
        icon: <FiFileText />,
        title: "Attendance still runs on Excel",
        description: "Manual registers, cross-checked shifts and disputed leave balances every month.",
        slug: "attendance-excel",
    },
    {
        icon: <FiMonitor />,
        title: "One tracker, half the team",
        description: "Windows gets tracked, Mac and Linux users stay completely invisible.",
        slug: "one-tracker-half-team",
    },
    {
        icon: <FiEyeOff />,
        title: "Monitoring feels like surveillance",
        description: "Bolted-on tools capture everything and explain nothing — trust breaks down.",
        slug: "monitoring-feels-surveillance",
    },
    {
        icon: <FiBarChart2 />,
        title: "Reports nobody reads",
        description: "Raw activity logs dumped on managers, with no narrative and no next action.",
        slug: "reports-nobody-reads",
    },
    {
        icon: <FiUsers />,
        title: "Payroll built on disputes",
        description: "Miscounted hours and overtime arguments, every single cycle.",
        slug: "payroll-disputes",
    },
    {
        icon: <FiActivity />,
        title: "Burnout, spotted too late",
        description: "No early signal for overwork, after-hours logins or falling engagement.",
        slug: "burnout-spotted-late",
    },
    {
        icon: <FiGrid />,
        title: "Five subscriptions, zero sync",
        description: "Time tracker, attendance app, screenshot tool and leave system — none talk to each other.",
        slug: "five-subscriptions-zero-sync",
    },
];

// Every module card links to its own dedicated detail page.
export const moduleGrid = [
    { icon: <FiGrid />, title: "Dashboard", description: "Live view of who's online & how productive", slug: "dashboard" },
    { icon: <FiClock />, title: "Time Tracking", description: "One-click, automatic, works offline", slug: "time-tracking" },
    { icon: <FiMonitor />, title: "App & Web Usage", description: "Productive vs. unproductive, auto-tagged", slug: "app-web-usage" },
    { icon: <FiCamera />, title: "Screenshots", description: "Configurable, blurrable, fully transparent", slug: "screenshots" },
    { icon: <FiCalendar />, title: "Attendance & Shifts", description: "Rosters, late flags, holiday calendars", slug: "attendance-shifts" },
    { icon: <FiCheckSquare />, title: "Leave Management", description: "Requests, approvals, balances in one tap", slug: "leave-management" },
    { icon: <FiBriefcase />, title: "Projects & Tasks", description: "Billable time, budget vs. actual", slug: "projects-tasks" },
    { icon: <FiSun />, title: "AI Insights & Reporting", description: "Plain-English digests, anomaly detection", slug: "ai-insights-reporting" },
    { icon: <FiRefreshCw />, title: "Integrations", description: "Slack, Google, Jira, payroll & more", slug: "integrations" },
    { icon: <FiSmartphone />, title: "Cross-Platform Apps", description: "Native builds — Windows, Mac & Linux", slug: "cross-platform-apps" },
];

export const spotlights = [
    {
        id: "dashboard",
        eyebrow: "Module — Dashboard",
        title: "See your entire workforce in one glance.",
        description:
            "Live team pulse, built-in productivity scoring and idle/late alerts — refreshed continuously, not compiled at the end of the day.",
        bullets: [
            "Who's online, idle or offline, and a real-time productivity score — refreshed continuously.",
            "Every app and site is auto-classified so a productivity percentage appears without setup.",
            "Idle time, late clock-ins and unusual patterns surface the moment they happen.",
            "Owners see the whole company; team leads see exactly their own reportees.",
        ],
        mockup: "dashboard",
        reversed: false,
    },
    {
        id: "time-tracking",
        eyebrow: "Module — Automatic Time Tracking",
        title: "One click to start. Zero effort after that.",
        description:
            "A lightweight desktop widget starts and stops the day — no browser tab, no manual entry, no forgetting to clock in.",
        bullets: [
            "One-click clock in/out from a lightweight desktop widget — no browser tab, no manual entry.",
            "Runs quietly in the background, tracking time against the active project as people switch tasks.",
            "Idle detection is built in — the timer auto-pauses after inactivity and prompts before counting it as work.",
            "Offline-first: keeps tracking with no internet and syncs the moment connectivity returns.",
        ],
        mockup: "timeTracker",
        reversed: true,
    },
    {
        id: "app-web-usage",
        eyebrow: "Module — App & Website Usage",
        title: "Every hour, sorted into productive and not.",
        description:
            "A growing auto-categorized library tags common apps and sites out of the box — and every tag can be re-mapped to how your business actually works.",
        bullets: [
            "A growing database tags common apps and sites as productive, unproductive or neutral out of the box.",
            "Re-tag any app or domain to match your business — Figma is productive here, YouTube might not be.",
            "Per-project breakdown shows which tools each project actually leans on, not just total hours logged.",
            "Employees can pause tracking for personal breaks — nothing is captured while paused.",
        ],
        mockup: "appUsage",
        reversed: false,
    },
    {
        id: "screenshots",
        eyebrow: "Module — Screenshots & Activity",
        title: "Visibility with context — never a keylogger.",
        description:
            "Configurable capture, privacy blur by default, and activity levels instead of keystrokes — visible to the employee it belongs to, any time.",
        bullets: [
            "Set screenshot frequency per role or team — from every few minutes to fully off.",
            "Privacy blur is on by default; sensitive content can be blurred while activity context is preserved.",
            "PrepDesk measures keyboard & mouse activity intensity — it never records what was typed.",
            "Every team member can see exactly what was captured about their own day, any time.",
        ],
        mockup: "screenshots",
        reversed: true,
    },
    {
        id: "attendance-shifts",
        eyebrow: "Module — Attendance, Shifts & Leave",
        title: "Rosters, holidays and time-off — one calendar.",
        description:
            "Build recurring shifts, approve leave in one tap, and let attendance reconcile against the roster automatically — no end-of-month reconciliation.",
        bullets: [
            "Build recurring shifts per team or location, and let attendance reconcile against them automatically.",
            "Employees apply, managers approve, balances update instantly — no email threads.",
            "Different offices, different public holidays — handled per location automatically.",
            "Clock-ins are matched to the roster in real time — late and absent flags appear instantly.",
        ],
        mockup: "attendance",
        reversed: false,
    },
    {
        id: "projects-tasks",
        eyebrow: "Module — Projects & Task Tracking",
        title: "Time, tied to the work — and the budget.",
        description:
            "Every tracked hour lands on the right project and task, with budget-vs-actual burn visible before the invoice does.",
        bullets: [
            "Every tracked hour lands on the right project & task automatically.",
            "Spot burn-rate problems before the invoice does, with budget vs. actual on every project.",
            "Separate client-billable hours from internal work with one tag.",
            "Client-ready or payroll-ready timesheets, exported in one click.",
        ],
        mockup: "projects",
        reversed: true,
    },
];

// ---------- Dashboard mockup data ----------
export const dashboardStats = [
    { label: "Online Now", value: "86", sub: "of 104 team", tone: "green" },
    { label: "Avg Productivity", value: "78%", sub: "+4% vs last week", tone: "blue" },
    { label: "Hours Today", value: "512", sub: "across team", tone: "blue" },
    { label: "Late Today", value: "7", sub: "past shift start", tone: "red" },
    { label: "On Leave", value: "4", sub: "approved", tone: "amber" },
    { label: "Idle Alerts", value: "11", sub: ">20 min idle", tone: "red" },
];

export const dashboardTeamRows = [
    { name: "Aarav", status: "Online", active: "6h 12m", prod: "84%" },
    { name: "Meera", status: "Idle 8m", active: "5h 40m", prod: "61%" },
];

export const dashboardProdBars = [92, 74, 58];

// ---------- Time tracker widget data ----------
export const timerWidget = {
    project: "Brand Website Revamp",
    badge: "macOS agent",
    time: "03:42:18",
    meta: "Started 9:02 AM · Task: Homepage redesign",
};

// ---------- App & web usage mockup data ----------
export const usageSplit = { productive: 68, neutral: 18, unproductive: 14 };
export const usageRows = [
    { app: "VS Code", category: "Productive", time: "3h 24m" },
    { app: "Figma", category: "Productive", time: "1h 48m" },
    { app: "Slack", category: "Neutral", time: "1h 10m" },
    { app: "Gmail", category: "Neutral", time: "36m" },
    { app: "YouTube", category: "Unproductive", time: "44m" },
];

// ---------- Screenshots mockup data ----------
export const screenshotTiles = [
    { app: "Figma", time: "10:00 AM" },
    { app: "Slack", time: "10:10 AM" },
    { app: "VS Code", time: "10:20 AM" },
    { app: "Sheets", time: "10:30 AM" },
    { app: "Chrome", time: "10:40 AM" },
    { app: "Figma", time: "10:50 AM" },
    { app: "Notion", time: "11:00 AM" },
    { app: "Mail", time: "11:10 AM" },
];

// ---------- Attendance calendar mockup data ----------
export const attendanceCalendar = [
    { day: 5, tone: "leave", label: "3 on leave" },
    { day: 11, tone: "absent", label: "2 absent" },
    { day: 20, tone: "holiday", label: "Public holiday" },
];

// ---------- Projects table mockup data ----------
export const projectRows = [
    { project: "Brand Website Revamp", client: "Acme Retail", budget: "320", logged: "248", burn: "78%", status: "On track" },
    { project: "Mobile App v2", client: "Internal", budget: "500", logged: "512", burn: "102%", status: "Over budget" },
    { project: "Q3 Marketing Ops", client: "Nimbus Foods", budget: "140", logged: "91", burn: "65%", status: "On track" },
    { project: "Data Migration", client: "Internal", budget: "90", logged: "34", burn: "38%", status: "Starting" },
];

// ---------- Integrations settings mockup data ----------
export const settingsRows = [
    { name: "Slack", initial: "S", color: "#611f69" },
    { name: "Google Workspace", initial: "G", color: "#4285f4" },
    { name: "Jira / Asana / Trello", initial: "J", color: "#2f6fed" },
];

export const osPlatforms = [
    {
        icon: <FiMonitor />,
        name: "Windows",
        sub: "Windows 10 & 11 · x64 / ARM64",
        bullets: [
            "Silent MSI/EXE installer, deployable via GPO or SCCM",
            "Runs as a background service, auto-starts on login",
            "Auto-updates without interrupting the user",
        ],
    },
    {
        icon: <FiSmartphone />,
        name: "macOS",
        sub: "macOS 12+ · Apple Silicon & Intel",
        bullets: [
            "Notarized .dmg, MDM-deployable (Jamf, Kandji)",
            "Native Apple Silicon build — no Rosetta overhead",
            "Respects macOS privacy prompts & permissions",
        ],
    },
    {
        icon: <FiGrid />,
        name: "Linux",
        sub: "Ubuntu, Debian, Fedora, RHEL",
        bullets: [
            ".deb, .rpm and AppImage builds — pick your package manager",
            "Scriptable install for engineering & DevOps fleets",
            "Same feature set as Windows & macOS, no compromises",
        ],
    },
];

export const osInfoTiles = [
    { icon: <FiZap />, title: "<1% CPU footprint", description: "Runs quietly without slowing anyone down." },
    { icon: <FiRefreshCw />, title: "Central deployment", description: "Push to 500 machines the same way you push to 5." },
    { icon: <FiCheckCircle />, title: "Feature parity", description: "One codebase — no OS is the \"lesser\" build." },
    { icon: <FiTrendingUp />, title: "Auto-updating", description: "New releases roll out silently, fleet-wide." },
];

export const integrations = [
    {
        name: "Slack",
        status: "Connected · daily digest",
        description: "Clock-in reminders, leave approvals and end-of-day productivity summaries delivered straight to Slack channels or DMs.",
    },
    {
        name: "Google Workspace",
        status: "Connected · calendar sync",
        description: "Meetings from Google Calendar are auto-excluded from idle detection, and leave approvals sync both ways.",
    },
    {
        name: "Jira / Asana / Trello",
        status: "Connected · task sync",
        description: "Time tracked in PrepDesk maps directly to the task or ticket it was spent on — no double entry for engineering or ops teams.",
    },
];

export const moreIntegrations = ["Zoom & Google Meet", "GitHub / GitLab", "QuickBooks / Tally payroll", "Microsoft Teams", "Zapier / Webhooks", "SSO / SAML / Okta"];

export const integrationsInfoTiles = [
    { icon: <FiZap />, title: "Set up in a day", description: "Connect accounts once — no developer needed." },
    { icon: <FiCheckCircle />, title: "Zero double entry", description: "Tickets, tasks and time stay in sync automatically." },
    { icon: <FiDollarSign />, title: "Payroll-ready exports", description: "Hours flow straight into your payroll or ERP tool." },
    { icon: <FiRefreshCw />, title: "Always in sync", description: "Data refreshes automatically, 24/7." },
];

export const aiScore = { value: 78, label: "Team Score", sub: "Company Productivity Index — rolling 7-day average, weighted across all active teams." };

export const aiInsights = [
    {
        icon: <FiSun />,
        title: "Design team productivity dropped 18% this week",
        description: "Mostly on Tue–Wed, correlating with a 40% rise in meeting time. Consider trimming recurring syncs.",
    },
    {
        icon: <FiActivity />,
        title: "3 employees logged after-hours work on 4+ days",
        description: "Rohan, Priya and Aditi show a pattern of late-night activity — flagged for a check-in, possible burnout risk.",
    },
    {
        icon: <FiBarChart2 />,
        title: "Mobile App v2 will miss budget by ~9 days at current pace",
        description: "Logged hours are outpacing the 500-hour estimate — projected overrun based on the last 3 weeks' burn rate.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Support team is your most consistent performer",
        description: "82% average productivity for 6 straight weeks, with zero late clock-ins — worth recognizing.",
    },
];

export const roles = [
    {
        icon: <FiShield />,
        name: "Owner / Admin",
        description: "Full visibility across every team, location and report. Controls roles, billing & integrations.",
        slug: "owner-admin",
    },
    {
        icon: <FiUserCheck />,
        name: "HR Manager",
        description: "Attendance, leave approvals, shift rosters and payroll exports company-wide.",
        slug: "hr-manager",
    },
    {
        icon: <FiCheckSquare />,
        name: "Team Lead",
        description: "Dashboards, productivity trends and task assignment for their own team only.",
        slug: "team-lead",
    },
    {
        icon: <FiUser />,
        name: "Employee",
        description: "Their own timer, timesheets, screenshots and leave — full transparency into their own data.",
        slug: "employee",
    },
];

export const privacyItems = [
    { icon: <FiEyeOff />, title: "No keystroke logging", description: "PrepDesk measures activity intensity — it never records what was typed." },
    { icon: <FiMonitor />, title: "Blur & consent controls", description: "Screenshots can be blurred by default, with capture visible to the employee it belongs to." },
    { icon: <FiSliders />, title: "Configurable per role", description: "Set monitoring depth by team, role or location — engineering ≠ field sales." },
    { icon: <FiDatabase />, title: "Data residency options", description: "Choose where your data is stored to meet regional compliance needs." },
    { icon: <FiCheckSquare />, title: "Full audit trail", description: "Every access to an employee's data is logged — visibility cuts both ways." },
    { icon: <FiUser />, title: "Employee-visible dashboards", description: "Team members see their own tracked time, apps and screenshots — no black box." },
];

export const extraFeatures = [
    {
        icon: <FiCheckSquare />,
        title: "Leave Management",
        description: "Requests, approvals and balances update in one tap — no email threads.",
        bullets: ["Location-aware holiday calendars", "Balances update instantly on approval", "Syncs both ways with Google Calendar"],
        slug: "leave-management",
    },
    {
        icon: <FiGlobe />,
        title: "Web App",
        description: "Manage everything from the browser — only the desktop tracker installs.",
        bullets: ["Published under your own domain", "Role-based dashboards, one web app", "Real-time sync with the desktop tracker"],
        slug: "web-app",
    },
    {
        icon: <FiBarChart2 />,
        title: "Reports & Analytics",
        description: "Numbers that show exactly where time and cost go, exportable in one click.",
        bullets: ["Custom date ranges, any team", "One-click CSV & branded PDF export", "Daily or weekly digests on email"],
        slug: "reports-analytics",
    },
    {
        icon: <FiLock />,
        title: "Privacy & Compliance",
        description: "Transparent by default — every employee sees exactly what's tracked about them.",
        bullets: ["No keystroke logging, ever", "Full audit trail on every access", "Configurable monitoring depth per role"],
        slug: "privacy-compliance",
    },
];

export const whitelabelChecklist = [
    { title: "Your logo & brand color", description: "Applied across the web app and every desktop agent installer." },
    { title: "Your domain", description: "hr.yourbrand.prepdesk.com — employees never see \"Prepseed.\"" },
    { title: "Your notifications", description: "Email & Slack alerts sent under your brand name, not PrepDesk's." },
    { title: "Your policies", description: "Custom monitoring rules, shift patterns & leave types matched to how you work." },
    { title: "Your desktop installer", description: "Windows, Mac & Linux agents branded and signed as yours." },
    { title: "Your reports", description: "Every exported PDF and dashboard carries your branding." },
    { title: "Your support line", description: "Your employees and admins reach you — never Prepseed." },
    { title: "Your pricing", description: "You decide what to charge your own teams or clients." },
];

export const replacedTools = [
    { from: "DeskTime / Time Doctor", to: "Automatic Time Tracking" },
    { from: "Hubstaff / ActivTrak", to: "App & Web Usage + Screenshots" },
    { from: "Toggl Track", to: "Projects & Task Tracking" },
    { from: "BambooHR / Deputy", to: "Attendance, Shifts & Leave" },
    { from: "Zapier / Make", to: "Native Slack, Google & Jira sync" },
    { from: "Google Sheets / Excel trackers", to: "Live Reports & Analytics" },
    { from: "Tableau / Power BI add-ons", to: "AI Insights & Reporting, built in" },
    { from: "Separate payroll upload tools", to: "Native payroll-ready exports" },
];

export const migrationSteps = [
    { step: 1, title: "Share access", description: "Read-only access to your current tracker, HRMS or Excel sheets. No downtime, no disruption." },
    { step: 2, title: "We migrate everything", description: "Timesheets, attendance history, leave balances and org structure — mapped and moved by our team." },
    { step: 3, title: "You watch it happen", description: "Track migration progress in real time — nothing goes live until you've reviewed and approved it." },
    { step: 4, title: "Go live, old tool retired", description: "Your team clocks in on PrepDesk from day one — zero data loss, zero manual re-entry." },
];

export const migrationInfoTiles = [
    { icon: <FiCheckCircle />, title: "Zero data loss", description: "Every record accounted for, verified before go-live." },
    { icon: <FiClock />, title: "Old system stays live", description: "Nothing is switched off until you're fully ready." },
    { icon: <FiCheckSquare />, title: "Free, done-for-you", description: "No extra cost, no work for your team beyond granting access." },
    { icon: <FiUsers />, title: "Dedicated migration team", description: "A real person owns your switch-over, start to finish." },
];

export const replaceInfoTiles = [
    { icon: <FiDollarSign />, title: "One vendor, one bill", description: "No juggling five renewals and five support tickets." },
    { icon: <FiCheckCircle />, title: "Nothing breaks in between", description: "No API limits, sync failures or automation glue to babysit." },
    { icon: <FiShield />, title: "Your data stays in one place", description: "Never scattered across five vendors' servers." },
    { icon: <FiUserCheck />, title: "One team accountable", description: "Prepseed builds, hosts and supports all of it — no finger-pointing." },
];

export const whyPrepseed = [
    { value: "400,000+", label: "Users", description: "Powering platforms across EdTech, Enterprise, Healthcare and Real Estate." },
    { value: "$1.2M", label: "Trusted backing", description: "Investor-backed (2022) engineering team, not a freelance build." },
    { value: "0", label: "Downtime", description: "US military-grade servers with automatic failover — always on." },
    { value: "2", label: "Continents", description: "Primary data in India; encrypted backups held in the US." },
    { value: "50,000+", label: "Employees, one platform", description: "From 50 employees to 50,000+ — same platform, no re-platforming later." },
    { value: "1", label: "Role sees it all", description: "No one but you sees the full company database — every other role stays scoped." },
    { value: "24/7", label: "Real support", description: "A dedicated team for setup, migration and ongoing customization." },
    { value: "Weeks", label: "Not quarters", description: "Whitelabeled & live in weeks, not quarters." },
];

export const contact = {
    call: "+91 99133 82221",
    email: "vivek@prepseed.com",
    web: "prepseed.com",
    studio: "Ahmedabad, Gujarat",
};
