import {
    FiVideo, FiCheckSquare, FiSmartphone, FiClock, FiGrid, FiEye, FiAlertTriangle, FiBarChart2,
    FiShield, FiUserCheck, FiSun, FiLayers, FiActivity, FiUsers, FiLock,
} from "react-icons/fi";

export const hero = {
    eyebrow: "Prepseed · PrepCam",
    title: ["Your cameras already see", "everything. Now they", "understand it."],
    subtitle:
        "PrepCam plugs into the RTSP feeds you already have and turns raw CCTV footage into SOP compliance checks, mobile-phone detection, touchless attendance and AI-driven insights — for every camera, every outlet, live.",
    stats: [
        { value: "41", label: "cameras, one dashboard" },
        { value: "82%", label: "avg. SOP compliance score" },
        { value: "weeks", label: "not months, to go live" },
    ],
};

export const problems = [
    {
        icon: <FiVideo />,
        title: "Footage recorded, never reviewed",
        description: "Hours of CCTV sit on a hard disk until something goes wrong — then everyone scrubs through it too late.",
        slug: "footage-never-reviewed",
    },
    {
        icon: <FiCheckSquare />,
        title: "SOPs live on paper",
        description: "Checklists get signed off at the end of a shift, without ever confirming they were actually followed.",
        slug: "sops-live-on-paper",
    },
    {
        icon: <FiSmartphone />,
        title: "Phones on the floor, unnoticed",
        description: "Staff scrolling or on personal calls at the counter — caught only if a manager happens to walk by.",
        slug: "phones-on-the-floor",
    },
    {
        icon: <FiClock />,
        title: "Attendance needs its own hardware",
        description: "A separate biometric device, per location, that still gets fooled by buddy punching.",
        slug: "attendance-own-hardware",
    },
    {
        icon: <FiGrid />,
        title: "Zero visibility across locations",
        description: "Owners running 5, 20 or 100 outlets have no real-time picture of any single one of them.",
        slug: "zero-visibility-locations",
    },
    {
        icon: <FiEye />,
        title: "Audits are manual and rare",
        description: "A mystery-shopper visit or a monthly walk-through — everything in between is guesswork.",
        slug: "audits-manual-rare",
    },
    {
        icon: <FiAlertTriangle />,
        title: "Incidents surface too late",
        description: "Theft, safety lapses or SOP breaks are discovered days later, in footage nobody reviewed.",
        slug: "incidents-surface-late",
    },
    {
        icon: <FiBarChart2 />,
        title: "Terabytes of video, zero insight",
        description: "Raw storage with no structured data, no trends and no report an owner can act on.",
        slug: "terabytes-zero-insight",
    },
];

// Every module card links to its own dedicated detail page.
export const moduleGrid = [
    { icon: <FiGrid />, title: "Live Dashboard", description: "Every camera, every location, one screen", slug: "live-dashboard" },
    { icon: <FiVideo />, title: "RTSP & Camera Integration", description: "Works with the cameras you already have", slug: "rtsp-camera-integration" },
    { icon: <FiCheckSquare />, title: "SOP Compliance Detection", description: "Custom checklists, verified automatically", slug: "sop-compliance-detection" },
    { icon: <FiSmartphone />, title: "Mobile Phone Detection", description: "Flags staff on personal devices, live", slug: "mobile-phone-detection" },
    { icon: <FiUserCheck />, title: "Face-Recognition Attendance", description: "Touchless clock-in via the camera overhead", slug: "face-recognition-attendance" },
    { icon: <FiSun />, title: "Zone & Heatmap Analytics", description: "Footfall, dwell time & coverage by zone", slug: "zone-heatmap-analytics" },
    { icon: <FiShield />, title: "PPE & Uniform Compliance", description: "Safety gear & dress code, checked automatically", slug: "ppe-uniform-compliance" },
    { icon: <FiAlertTriangle />, title: "Real-Time Alerts & Incidents", description: "A clip and a notification, instantly", slug: "realtime-alerts-incidents" },
    { icon: <FiActivity />, title: "AI Insights & Reporting", description: "Plain-English digests, ranked by priority", slug: "ai-insights-reporting" },
    { icon: <FiLayers />, title: "Multi-Location Command Center", description: "Every outlet, every camera, one owner view", slug: "multi-location-command-center" },
];

export const spotlights = [
    {
        id: "rtsp-camera-integration",
        eyebrow: "Module — RTSP & Camera Integration",
        title: "No new hardware. Just point us at the feed you already have.",
        description:
            "Works with any RTSP / ONVIF camera, DVR or NVR you've already installed — nothing to rip out and replace.",
        bullets: [
            "Existing CCTV, IP cameras and most DVR/NVR setups connect without replacing a single camera.",
            "Run detection in the cloud, or on a local edge box when bandwidth or data residency is a constraint.",
            "Point PrepCam at a feed, mark the zones that matter, and detection starts the same week.",
            "Automatic reconnect on camera reboot or network drop, with instant offline alerts.",
        ],
        mockup: "rtsp",
        reversed: false,
    },
    {
        id: "sop-compliance-detection",
        eyebrow: "Module — SOP Compliance Detection",
        title: "Your checklist, verified by the camera — not by memory.",
        description:
            "Retail greeting scripts, kitchen hygiene steps or factory safety checks — modeled around your own SOP and auto-scored against real footage.",
        bullets: [
            "Fully custom, per client — modeled around your own SOP, not a generic template.",
            "Every checklist item is auto-scored against real footage, rolled up into a compliance percentage.",
            "A short clip backs every miss, so coaching conversations start from fact, not opinion.",
            "Update a checklist and PrepCam's models adapt — no waiting on a vendor release cycle.",
        ],
        mockup: "sop",
        reversed: true,
    },
    {
        id: "mobile-phone-detection",
        eyebrow: "Module — Mobile Phone Usage Detection",
        title: "Catches what a manager's one walk-through a day never will.",
        description:
            "Real-time phone-in-hand detection at counters and on the floor, with duration-based thresholds so a two-second check never gets flagged the same as a five-minute scroll.",
        bullets: [
            "Flags personal device use at counters and on the floor the moment it happens.",
            "Threshold-based alerts distinguish a two-second check from a five-minute scroll.",
            "Breakrooms and back offices can be exempted; customer-facing zones stay strict.",
            "Weekly pattern summary by employee and shift, framed for coaching — not naming-and-shaming.",
        ],
        mockup: "phone",
        reversed: false,
    },
    {
        id: "face-recognition-attendance",
        eyebrow: "Module — Face-Recognition Attendance",
        title: "The camera at the door is now your attendance device.",
        description:
            "Touchless clock-in and clock-out through the entrance or floor camera you already have — no separate biometric device, no buddy punching.",
        bullets: [
            "No separate biometric device — the entrance or floor camera you already have handles it.",
            "Liveness & anti-spoof checks reject photo and video spoofing before an entry is logged.",
            "Attendance is tied to a face match, not a card, PIN or a colleague's badge.",
            "Verified in/out times flow into shift and payroll systems with no manual entry.",
        ],
        mockup: "attendance",
        reversed: true,
    },
    {
        id: "zone-heatmap-analytics",
        eyebrow: "Module — Zone & Heatmap Analytics",
        title: "See where customers linger and where staff don't.",
        description:
            "Footfall and dwell time by zone, staff coverage gaps and automatic queue-length alerts — all from cameras you already have overhead.",
        bullets: [
            "See exactly where customers spend time — and where they walk straight past.",
            "Spot an understaffed zone at peak hour before it costs a sale.",
            "Automatic alerts when a checkout queue crosses a threshold you define.",
            "Compare footfall against billing data to see which locations convert best.",
        ],
        mockup: "heatmap",
        reversed: false,
    },
];

export const rtspDetections = {
    camId: "CAM-04", zone: "FRONT COUNTER", rtsp: "RTSP://10.0.4.21:554/stream1",
    footLeft: "1080p · 24fps", footRight: "Onboarded via ONVIF · 3 days ago",
    scene: "counter",
    image: "/images/prepcam/counter.png",
    boxes: [
        { tone: "green", label: "Person · 98%", top: "18%", left: "13%", width: "16%", height: "58%", figure: "person" },
        { tone: "green", label: "Person · 96%", top: "22%", left: "58%", width: "15%", height: "54%", figure: "person" },
    ],
};

export const phoneDetection = {
    camId: "CAM-02", zone: "SALES FLOOR", rtsp: "RTSP://10.0.4.19:554/stream1",
    footLeft: "Zone: Counter 2 · Role: Cashier", footRight: "Alert sent · WhatsApp + App",
    scene: "floor",
    image: "/images/prepcam/floor.png",
    boxes: [
        { tone: "green", label: "Person · 97%", top: "16%", left: "11%", width: "15%", height: "60%", figure: "person" },
        { tone: "red", label: "Mobile phone · 00:42", top: "16%", left: "55%", width: "17%", height: "60%", figure: "person", accessory: "phone" },
    ],
};

export const ppeDetections = {
    camId: "CAM-07", zone: "WAREHOUSE BAY 3", rtsp: "RTSP://10.0.4.33:554/stream1",
    footLeft: "4 workers in frame · 1 flagged", footRight: "Safety officer notified",
    aspect: "16/8",
    scene: "warehouse",
    image: "/images/prepcam/warehouse.png",
    boxes: [
        { tone: "green", label: "Helmet ✓ · Vest ✓", top: "8%", left: "6%", width: "13%", height: "80%", figure: "person", accessory: "helmet" },
        { tone: "amber", label: "Vest missing", top: "10%", left: "32%", width: "13%", height: "78%", figure: "person", accessory: "helmet" },
        { tone: "green", label: "Helmet ✓ · Vest ✓", top: "12%", left: "58%", width: "13%", height: "76%", figure: "person", accessory: "helmet" },
        { tone: "green", label: "Helmet ✓ · Vest ✓", top: "6%", left: "80%", width: "13%", height: "82%", figure: "person", accessory: "helmet" },
    ],
};

export const sopChecklist = {
    heading: "Counter 2 — Opening Shift SOP",
    score: "83%",
    rows: [
        { text: "Uniform & ID badge worn at counter", ok: true, note: "Passed" },
        { text: "Customer greeted within 10 seconds", ok: true, note: "Passed" },
        { text: "Register drawer closed after transaction", ok: false, note: "Flagged · 3 clips" },
        { text: "Handwash station used before shift start", ok: true, note: "Passed" },
        { text: "Mask worn during food handling", ok: false, note: "Flagged · 1 clip" },
    ],
};

export const attendanceRows = [
    { initial: "A", name: "Aarav Shah", event: "Clock-in", tone: "good", time: "9:02 AM", confidence: "99.1%" },
    { initial: "M", name: "Meera Joshi", event: "Clock-in", tone: "good", time: "9:06 AM", confidence: "98.7%" },
    { initial: "R", name: "Rohan Iyer", event: "Late clock-in", tone: "amber", time: "9:24 AM", confidence: "97.9%" },
    { initial: "P", name: "Priya Nair", event: "Clock-out", tone: "good", time: "6:01 PM", confidence: "98.4%" },
];

// 5 rows x 10 cols dwell-time heatmap, low -> peak
export const heatmapCells = [
    "low", "low", "mid", "high", "high", "peak2", "peak2", "low", "low", "low",
    "low", "high", "peak", "peak", "high", "peak2", "peak", "peak2", "low", "low",
    "mid", "peak", "deep", "peak", "peak2", "peak", "peak", "peak2", "low", "low",
    "low", "high", "peak", "high", "peak2", "peak2", "peak2", "low", "low", "low",
    "low", "low", "mid", "high", "low", "low", "low", "low", "low", "low",
];

export const alertsFeed = [
    { title: "Mobile phone in use — Counter 2", meta: "Store 3 · 11:42 AM · 46s duration", severity: "High", thumb: "/images/prepcam/thumbs/phone-alert.jpg" },
    { title: "PPE missing — Vest not detected", meta: "Warehouse Bay 3 · 10:08 AM", severity: "Medium", thumb: "/images/prepcam/thumbs/ppe-alert.jpg" },
    { title: "SOP miss — Register drawer left open", meta: "Store 3 · 9:57 AM", severity: "Medium", thumb: "/images/prepcam/thumbs/sop-alert.jpg" },
    { title: "Camera offline — CAM-11 Loading Dock", meta: "Store 1 · 9:12 AM · Reconnected in 40s", severity: "Info" },
];

export const locationsRows = [
    { name: "Store 1 — MG Road", cameras: 8, score: "91%", tone: "good", alerts: 2, attendance: "18/19", status: "Healthy" },
    { name: "Store 3 — Mall Kiosk", cameras: 6, score: "74%", tone: "amber", alerts: 9, attendance: "11/12", status: "Needs review" },
    { name: "Warehouse — Bay 3", cameras: 10, score: "96%", tone: "good", alerts: 1, attendance: "22/24", status: "Healthy" },
    { name: "Store 5 — Highway Plaza", cameras: 7, score: "88%", tone: "good", alerts: 3, attendance: "14/14", status: "Healthy" },
];

export const liveOverview = {
    camerasLive: "39/41",
    sopScore: "82%",
    rows: [
        { name: "Store 1", alerts: 2, score: "91%", tone: "good" },
        { name: "Store 3", alerts: 9, score: "74%", tone: "amber" },
    ],
};

export const integrations = [
    {
        name: "NVR / DVR systems",
        status: "Connected · runs alongside",
        description: "Runs alongside your existing recorder and camera brand — no rip and replace.",
    },
    {
        name: "POS & billing systems",
        status: "Connected · cross-checked live",
        description: "Cross-check footfall and staff activity against sales data to see which locations convert.",
    },
    {
        name: "WhatsApp & Slack",
        status: "Prepseed Alerting Service",
        description: "Every detected violation is pushed instantly, with its own evidence clip attached.",
    },
];

export const moreIntegrations = ["HRMS & payroll (incl. PrepDesk)", "Access control systems", "Open API for BI/ERP", "Zapier / Make"];

export const roles = [
    {
        icon: <FiShield />,
        name: "Owner / Admin",
        description: "Full visibility across every location, camera and report. Controls users, roles & integrations.",
        slug: "owner-admin",
    },
    {
        icon: <FiUsers />,
        name: "Regional / Area Manager",
        description: "Cross-location dashboards, SOP benchmarking and incident escalation across their own region.",
        slug: "regional-area-manager",
    },
    {
        icon: <FiCheckSquare />,
        name: "Location / Store Manager",
        description: "Sees only their own cameras, SOP scores, attendance and alerts — nothing else.",
        slug: "location-store-manager",
    },
    {
        icon: <FiAlertTriangle />,
        name: "Safety & Compliance Officer",
        description: "PPE compliance, incident review and the full access audit trail across every site.",
        slug: "safety-compliance-officer",
    },
];

// PPE & Uniform Compliance, Real-Time Alerts, AI Insights and Multi-Location
// also appear in moduleGrid above — all four point at the same detail-page
// slug, so there's one page, not two.
export const extraFeatures = [
    {
        icon: <FiShield />,
        title: "PPE & Uniform Compliance",
        description: "Safety gear and dress code, checked on every frame — built for factories and retail alike.",
        bullets: ["Helmet, hi-vis vest, gloves & mask", "Uniform & ID badge at every counter", "Safety officer notified instantly"],
        slug: "ppe-uniform-compliance",
    },
    {
        icon: <FiAlertTriangle />,
        title: "Real-Time Alerts & Incidents",
        description: "Every violation arrives with its own proof — no dispute over what happened.",
        bullets: ["Instant push to WhatsApp, Slack or the app", "Evidence clip on every alert", "Severity-based routing to the right person"],
        slug: "realtime-alerts-incidents",
    },
    {
        icon: <FiActivity />,
        title: "AI Insights & Reporting",
        description: "Video that explains itself — patterns across cameras, shifts and locations, in plain English.",
        bullets: ["Rolling 7-day compliance index", "Plain-English digests, ranked by priority", "Trends by store, shift and employee"],
        slug: "ai-insights-reporting",
    },
    {
        icon: <FiLayers />,
        title: "Multi-Location Command Center",
        description: "Five outlets or five hundred — one owner view, with role-scoped access for everyone else.",
        bullets: ["Cross-location benchmarking", "Role-scoped access by region", "Exportable board-ready PDF reports"],
        slug: "multi-location-command-center",
    },
];

export const privacyChecklist = [
    { icon: <FiEye />, title: "No footage leaves the premises, by choice", description: "On-premise edge processing keeps raw video local — only detections & short clips sync out." },
    { icon: <FiLock />, title: "Face data, encrypted & deletable", description: "Biometric templates are encrypted at rest and can be purged per employee, on request." },
    { icon: <FiClock />, title: "Configurable retention windows", description: "Set how long clips and detection events are kept, per client policy." },
    { icon: <FiCheckSquare />, title: "Employee consent workflows", description: "Onboarding captures consent for face-recognition attendance before it goes live." },
    { icon: <FiUsers />, title: "Customer-face blurring", description: "Optional blurring for non-employee faces in stored clips and reports." },
    { icon: <FiShield />, title: "Full access audit trail", description: "Every time a clip or record is viewed, it's logged against the viewer's account." },
];

export const whitelabelChecklist = [
    { title: "Your logo & brand color", description: "Applied across the web dashboard and owner mobile app." },
    { title: "Your domain", description: "ops.yourbrand.prepcam.com — staff never see \"Prepseed.\"" },
    { title: "Your notifications", description: "WhatsApp & Slack alerts sent under your brand name." },
    { title: "Your SOP rules", description: "Checklists, zones and thresholds matched to how you operate." },
    { title: "Your report templates", description: "Every exported PDF and scorecard carries your branding." },
    { title: "Your support line", description: "Your managers and staff reach you — never Prepseed." },
    { title: "Your camera vendor, kept", description: "No forced hardware upgrade — PrepCam works with what's installed." },
    { title: "Your pricing", description: "You decide what to charge your own outlets or clients." },
];

export const replacedTools = [
    { from: "Standalone video analytics box", to: "SOP, PPE & Phone Detection — built in" },
    { from: "Biometric attendance device", to: "Face-Recognition Attendance via existing cameras" },
    { from: "People-counting sensors", to: "Zone & Heatmap Analytics from the same cameras" },
    { from: "Mystery shopper audits", to: "Continuous, automated SOP scoring" },
    { from: "Manual safety walk-throughs", to: "PPE & Uniform Compliance, checked on every frame" },
    { from: "Excel-based SOP scorecards", to: "Live compliance scores per employee & location" },
    { from: "Zapier / Make automations", to: "Native WhatsApp, Slack & payroll sync" },
    { from: "Separate BI dashboard subscription", to: "AI Insights & Reporting, built in" },
];

export const deploymentSteps = [
    { step: 1, title: "Share your camera list", description: "RTSP URLs or NVR access for every location — no cabling or hardware changes needed." },
    { step: 2, title: "We configure zones & SOPs", description: "Detection zones, checklists and alert thresholds are set up around your actual layout." },
    { step: 3, title: "Pilot on 1–2 cameras", description: "We tune detection accuracy against your real footage before wider rollout." },
    { step: 4, title: "Roll out to every location", description: "Same rules, same dashboard, across every outlet — live within weeks." },
];

export const whyPrepseed = [
    { value: "400,000+", label: "Users", description: "Powering platforms across EdTech, Enterprise, Healthcare and Real Estate." },
    { value: "$1.2M", label: "Trusted backing", description: "Investor-backed (2022) engineering team, not a freelance build." },
    { value: "0", label: "Downtime", description: "US military-grade servers with automatic failover — always on." },
    { value: "2", label: "Continents", description: "Primary data in India; encrypted backups held in the US." },
    { value: "1,000+", label: "Cameras, one platform", description: "From a single outlet to hundreds of locations — no re-platforming later." },
    { value: "1", label: "Person sees it all", description: "No one but you sees the full company database — every other role stays scoped." },
    { value: "24/7", label: "Real support", description: "A dedicated team for setup, tuning and ongoing customization." },
    { value: "Weeks", label: "Not quarters", description: "Whitelabeled & live in weeks, not quarters." },
];

export const contact = {
    call: "+91 99133 82221",
    email: "vivek@prepseed.com",
    web: "prepseed.com",
    studio: "Ahmedabad, Gujarat",
};
