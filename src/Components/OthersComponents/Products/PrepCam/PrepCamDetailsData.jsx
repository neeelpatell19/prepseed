import {
    FiVideo, FiCheckSquare, FiSmartphone, FiClock, FiGrid, FiEye, FiAlertTriangle, FiBarChart2,
    FiShield, FiUserCheck, FiSun, FiLayers, FiActivity, FiUsers,
} from "react-icons/fi";

const problems = {
    "footage-never-reviewed": {
        category: "The Problem", tone: "red", icon: <FiVideo />,
        title: "Footage recorded, never reviewed",
        seoTitle: "Live CCTV Monitoring Software — AI Video Review Automation",
        lead: "Hours of CCTV sit on a hard disk until something goes wrong — then everyone scrubs through days of footage too late to act on it.",
        sections: [
            { heading: "Recording isn't monitoring", body: "A DVR that records 24/7 gives you a record after the fact, not a warning before the fact. Most operators only open the footage once an incident has already happened — by then the SOP miss, the theft or the safety lapse has already cost something." },
        ],
        bullets: [
            "PrepCam watches every frame live, on every camera, so nothing waits for a human to press rewind.",
            "Detections are logged the moment they happen — not discovered days later during a review.",
            "Evidence clips are pulled automatically for every flag, so nobody scrubs through raw footage again.",
        ],
        faqs: [
            { q: "Do we still need to keep our existing recorder?", a: "Yes — PrepCam runs alongside your NVR/DVR, not instead of it. Your recorder keeps storing raw footage; PrepCam adds the live analysis layer on top." },
        ],
        metaTitle: "Footage Recorded, Never Reviewed — PrepCam | Prepseed",
        metaDescription: "PrepCam watches every camera live instead of leaving footage to be reviewed after something already went wrong.",
        keywords: "CCTV monitoring software, video review automation, live camera analytics",
    },
    "sops-live-on-paper": {
        category: "The Problem", tone: "red", icon: <FiCheckSquare />,
        title: "SOPs live on paper",
        seoTitle: "SOP Compliance Software — Automated Checklist Verification for Retail",
        lead: "Paper and app-based checklists get signed off at the end of a shift, without ever confirming the steps were actually followed on the floor.",
        sections: [
            { heading: "Self-reported compliance isn't compliance", body: "A tick-box filled in from memory at 9 PM tells you what an employee remembers, not what a customer actually experienced. SOP Compliance Detection scores the checklist against the camera feed instead, so the record matches reality." },
        ],
        bullets: [
            "Every checklist item is auto-scored against real footage, not self-reported after the fact.",
            "A short clip backs every miss, so coaching conversations start from fact, not opinion.",
            "Update the checklist any time — PrepCam's models adapt without a vendor release cycle.",
        ],
        faqs: [
            { q: "Can the checklist be different for every location?", a: "Yes — SOPs are fully custom per client and can vary by outlet, role or shift." },
        ],
        metaTitle: "SOPs Live On Paper — PrepCam | Prepseed",
        metaDescription: "PrepCam scores your SOP checklist against real camera footage instead of relying on end-of-shift sign-off.",
        keywords: "SOP compliance software, automated checklist verification, retail SOP monitoring",
    },
    "phones-on-the-floor": {
        category: "The Problem", tone: "red", icon: <FiSmartphone />,
        title: "Phones on the floor, unnoticed",
        seoTitle: "Mobile Phone Detection Software for Retail — Employee Phone Usage Monitoring",
        lead: "Staff scrolling or on personal calls at the counter go unnoticed unless a manager happens to walk by at the exact wrong moment.",
        sections: [
            { heading: "You can't manage what you don't see", body: "Mobile Phone Usage Detection watches every counter continuously, flagging duration and frequency rather than a single, unfair snapshot." },
        ],
        bullets: [
            "Flags personal device use at counters and on the floor the moment it happens.",
            "Duration-based thresholds tell a two-second check apart from a five-minute scroll.",
            "Breakrooms and back offices can be exempted; customer-facing zones stay strict.",
        ],
        metaTitle: "Phones On The Floor, Unnoticed — PrepCam | Prepseed",
        metaDescription: "PrepCam's Mobile Phone Usage Detection flags personal device use at the counter in real time.",
        keywords: "mobile phone detection retail, employee phone usage monitoring, CCTV AI detection",
    },
    "attendance-own-hardware": {
        category: "The Problem", tone: "red", icon: <FiClock />,
        title: "Attendance needs its own hardware",
        seoTitle: "Face Recognition Attendance Software — Touchless & Buddy-Punch Proof",
        lead: "A separate biometric attendance device, bought and maintained per location, still gets fooled by buddy punching.",
        sections: [
            { heading: "The camera you already have is the device", body: "Face-Recognition Attendance turns the entrance or floor camera into a touchless clock-in system — no extra hardware to install, ship or troubleshoot per outlet." },
        ],
        bullets: [
            "No separate biometric device — the camera you already have handles it.",
            "Liveness & anti-spoof checks reject photo and video spoofing attempts.",
            "Attendance is tied to a face match, not a card, PIN or a colleague's badge.",
        ],
        metaTitle: "Attendance Needs Its Own Hardware — PrepCam | Prepseed",
        metaDescription: "PrepCam's Face-Recognition Attendance turns your existing camera into a touchless attendance device.",
        keywords: "face recognition attendance, touchless attendance system, buddy punching prevention",
    },
    "zero-visibility-locations": {
        category: "The Problem", tone: "red", icon: <FiGrid />,
        title: "Zero visibility across locations",
        seoTitle: "Multi-Location Dashboard Software — Real-Time Retail Chain Monitoring",
        lead: "Owners running 5, 20 or 100 outlets have no real-time picture of any single one of them without physically visiting.",
        sections: [
            { heading: "One dashboard, every location", body: "The Multi-Location Command Center rolls up cameras, SOP scores, attendance and alerts from every outlet into a single owner view — role-scoped for everyone below you." },
        ],
        bullets: [
            "Cross-location benchmarking by compliance, footfall or alert volume.",
            "Regional managers see their region; owners see everything.",
            "Add a new location in hours — same rules, same dashboard.",
        ],
        metaTitle: "Zero Visibility Across Locations — PrepCam | Prepseed",
        metaDescription: "PrepCam's Multi-Location Command Center gives owners one real-time view across every outlet.",
        keywords: "multi location dashboard, retail chain monitoring software, franchise visibility tool",
    },
    "audits-manual-rare": {
        category: "The Problem", tone: "red", icon: <FiEye />,
        title: "Audits are manual and rare",
        seoTitle: "Automated Retail Audit Software — Continuous Compliance Monitoring",
        lead: "A mystery-shopper visit or a monthly walk-through only samples one moment — everything in between is guesswork.",
        sections: [
            { heading: "Every shift, audited, automatically", body: "SOP Compliance Detection scores every employee, every shift, continuously — turning an occasional spot-check into a running compliance record." },
        ],
        bullets: [
            "Live compliance scores per employee and per location, updated continuously.",
            "No scheduling a shopper or a walk-through to know how a shift went.",
            "Historical trend, not a single snapshot, feeds every report.",
        ],
        metaTitle: "Audits Are Manual And Rare — PrepCam | Prepseed",
        metaDescription: "PrepCam replaces occasional mystery-shopper audits with continuous, camera-verified SOP scoring.",
        keywords: "continuous compliance monitoring, mystery shopper alternative, automated retail audit",
    },
    "incidents-surface-late": {
        category: "The Problem", tone: "red", icon: <FiAlertTriangle />,
        title: "Incidents surface too late",
        seoTitle: "Real-Time Incident Alert Software — Video Surveillance for Loss Prevention",
        lead: "Theft, safety lapses or SOP breaks are typically discovered days later, buried in footage nobody had reviewed.",
        sections: [
            { heading: "Real-time alerts change the timeline entirely", body: "Real-Time Alerts & Incidents push a notification and an evidence clip to WhatsApp, Slack or the app within seconds of detection — not whenever someone next opens the recorder." },
        ],
        bullets: [
            "Instant push the moment a violation is detected.",
            "Evidence clip attached to every alert — no dispute over what happened.",
            "Severity-based routing sends safety incidents straight to the owner.",
        ],
        metaTitle: "Incidents Surface Too Late — PrepCam | Prepseed",
        metaDescription: "PrepCam pushes real-time alerts with evidence clips the moment a violation is detected.",
        keywords: "real time incident alerts, video surveillance alerting, retail loss prevention software",
    },
    "terabytes-zero-insight": {
        category: "The Problem", tone: "red", icon: <FiBarChart2 />,
        title: "Terabytes of video, zero insight",
        seoTitle: "AI Video Analytics & Reporting Software — CCTV Data Insights Platform",
        lead: "Raw CCTV storage has no structured data, no trends and no report an owner can act on — just hours nobody has time to watch.",
        sections: [
            { heading: "AI reads the patterns for you", body: "AI Insights & Reporting reads patterns across cameras, shifts and locations and tells owners in plain English what actually needs attention, instead of leaving that work to a human scrubbing through footage." },
        ],
        bullets: [
            "Rolling compliance index across every camera and checklist.",
            "Plain-English digests, ranked by priority — not a raw data dump.",
            "Store-to-store and shift-to-shift comparisons surfaced automatically.",
        ],
        metaTitle: "Terabytes Of Video, Zero Insight — PrepCam | Prepseed",
        metaDescription: "PrepCam's AI Insights & Reporting turns raw CCTV storage into plain-English, prioritized reports.",
        keywords: "AI video analytics reporting, CCTV data insights, video intelligence platform",
    },
};

const modules = {
    "live-dashboard": {
        category: "Module", tone: "cam", icon: <FiGrid />, mockup: "live",
        seoTitle: "Multi-Camera Monitoring Dashboard Software — Real-Time CCTV Overview",
        lead: "The Live Dashboard rolls up camera health, SOP scores and open alerts across your entire footprint into a single, real-time view.",
        sections: [
            { heading: "Built for the person who owns every outlet", body: "Instead of opening each location's recorder one at a time, the dashboard shows live camera counts, compliance scores and alert volume for every outlet at once, refreshed continuously." },
        ],
        bullets: [
            "Cameras-live and SOP-score tiles refreshed in real time, not end-of-day.",
            "Per-location breakdown of alerts and compliance in one scrollable table.",
            "Owners see everything; managers see exactly their own location or region.",
        ],
        stat: { value: "39/41", label: "cameras live, at a glance" },
        faqs: [
            { q: "Can I filter the dashboard to just my region?", a: "Yes — access is role-scoped, so regional and location managers only ever see their own slice of the dashboard." },
        ],
        metaTitle: "Live Dashboard — PrepCam | Prepseed",
        metaDescription: "PrepCam's Live Dashboard shows every camera, every location and every SOP score in one real-time screen.",
        keywords: "video surveillance dashboard, multi camera monitoring software, real time CCTV dashboard",
    },
    "rtsp-camera-integration": {
        category: "Module", tone: "cam", icon: <FiVideo />, mockup: "rtsp",
        seoTitle: "RTSP & ONVIF Camera Integration Software — AI Upgrade for Existing CCTV",
        lead: "PrepCam connects to any RTSP or ONVIF camera, DVR or NVR you've already installed — nothing to rip out and replace.",
        sections: [
            { heading: "Works with what's already on the wall", body: "Existing CCTV, IP cameras and most DVR/NVR setups connect without replacing a single camera. Detection can run in the cloud or on a local edge box when bandwidth or data residency is a constraint." },
        ],
        bullets: [
            "Existing CCTV, IP cameras and most DVR/NVR setups connect without replacing a single camera.",
            "Cloud or on-premise edge processing, chosen per client constraint.",
            "Point PrepCam at a feed, mark the zones that matter, and detection starts the same week.",
            "Automatic reconnect on camera reboot or network drop, with instant offline alerts.",
        ],
        faqs: [
            { q: "What if a camera isn't RTSP/ONVIF compatible?", a: "Most DVR/NVR systems expose an RTSP stream even if the individual camera doesn't advertise ONVIF — our rollout team checks this during the camera-list review before onboarding starts." },
            { q: "How long does one camera take to onboard?", a: "Typically under a day once the RTSP URL or NVR access is shared — zones and detections are then tuned during the pilot phase." },
        ],
        metaTitle: "RTSP & Camera Integration — PrepCam | Prepseed",
        metaDescription: "PrepCam connects to any existing RTSP/ONVIF camera or NVR/DVR — no new hardware to install.",
        keywords: "RTSP camera integration, ONVIF video analytics, existing CCTV AI upgrade",
    },
    "sop-compliance-detection": {
        category: "Module", tone: "green", icon: <FiCheckSquare />, mockup: "sop",
        seoTitle: "SOP Compliance Detection Software — Camera-Verified Checklists",
        lead: "Custom SOP checklists — retail greeting scripts, kitchen hygiene steps, factory safety checks — scored automatically against real footage.",
        sections: [
            { heading: "Modeled around your own SOP", body: "Every checklist item is auto-scored against real footage and rolled up into a compliance percentage per employee and per shift, with a short clip attached to every miss." },
        ],
        bullets: [
            "Fully custom, per client — modeled around your own SOP, not a generic template.",
            "Scored per employee, per shift, rolled up into a single compliance percentage.",
            "Evidence attached to every flag, so coaching starts from fact, not opinion.",
            "Retrained as your SOP changes — no waiting on a vendor release cycle.",
        ],
        stat: { value: "83%", label: "live SOP score, Counter 2 opening shift" },
        faqs: [
            { q: "How is the compliance percentage calculated?", a: "Each checklist item is weighted and scored per shift based on whether the camera confirms it was followed; the percentage is the rolled-up pass rate across the shift's checklist." },
        ],
        metaTitle: "SOP Compliance Detection — PrepCam | Prepseed",
        metaDescription: "PrepCam scores your custom SOP checklist against real camera footage, per employee and per shift.",
        keywords: "SOP compliance software, automated checklist verification, retail SOP monitoring",
    },
    "mobile-phone-detection": {
        category: "Module", tone: "red", icon: <FiSmartphone />, mockup: "phone",
        seoTitle: "Mobile Phone Detection Software — Real-Time CCTV AI for Retail Floors",
        lead: "Real-time phone-in-hand detection at counters and on the floor, with duration-based thresholds instead of a single unfair snapshot.",
        sections: [
            { heading: "Duration & frequency, not a single glance", body: "Threshold-based alerts distinguish a two-second check from a five-minute scroll, and zones can be configured so breakrooms stay exempt while customer-facing counters stay strict." },
        ],
        bullets: [
            "Flags personal device use at counters and on the floor the moment it happens.",
            "Threshold-based alerts distinguish a two-second check from a five-minute scroll.",
            "Zone & role aware — breakrooms and back offices can be exempted.",
            "Weekly pattern summary by employee and shift, framed for coaching.",
        ],
        faqs: [
            { q: "Can we exempt certain roles or zones entirely?", a: "Yes — detection zones and thresholds are configured per role and per zone during setup, so back offices or supervisory roles can be excluded." },
        ],
        metaTitle: "Mobile Phone Usage Detection — PrepCam | Prepseed",
        metaDescription: "PrepCam's Mobile Phone Detection flags personal device use at the counter in real time, with duration-based thresholds.",
        keywords: "mobile phone detection retail, employee phone usage monitoring, CCTV AI detection",
    },
    "face-recognition-attendance": {
        category: "Module", tone: "cam", icon: <FiUserCheck />, mockup: "attendance",
        seoTitle: "Face Recognition Attendance System — Touchless Clock-In Software",
        lead: "Touchless clock-in and clock-out through the entrance or floor camera you already have — no separate biometric device, no buddy punching.",
        sections: [
            { heading: "Verified straight into payroll", body: "Liveness and anti-spoof checks reject photo and video spoofing before an entry is logged, and verified in/out times flow into shift and payroll systems with no manual entry." },
        ],
        bullets: [
            "No separate biometric device — the entrance or floor camera you already have handles it.",
            "Liveness & anti-spoof checks reject photo and video spoofing attempts.",
            "Attendance is tied to a face match, not a card, PIN or a colleague's badge.",
            "Verified in/out times flow into shift and payroll systems with no manual entry.",
        ],
        faqs: [
            { q: "Does this require employees to consent first?", a: "Yes — onboarding captures explicit employee consent for face-recognition attendance before it goes live, and templates can be purged per employee on request." },
            { q: "What happens if the camera can't confirm a match?", a: "The event is logged as unmatched and flagged for a manager to confirm manually — it never silently marks someone present or absent." },
        ],
        metaTitle: "Face-Recognition Attendance — PrepCam | Prepseed",
        metaDescription: "PrepCam's Face-Recognition Attendance turns your existing camera into a touchless, spoof-resistant attendance device.",
        keywords: "face recognition attendance, touchless attendance system, buddy punching prevention",
    },
    "zone-heatmap-analytics": {
        category: "Module", tone: "amber", icon: <FiSun />, mockup: "heatmap",
        seoTitle: "Retail Heatmap & Footfall Tracking Software — Zone Analytics",
        lead: "Footfall and dwell time by zone, staff coverage gaps and automatic queue-length alerts — all from the cameras you already have overhead.",
        sections: [
            { heading: "Footfall meets billing data", body: "Comparing footfall against billing data shows exactly which locations convert best, while queue-length detection alerts the moment a checkout line crosses a threshold you define." },
        ],
        bullets: [
            "See exactly where customers spend time — and where they walk straight past.",
            "Spot an understaffed zone at peak hour before it costs a sale.",
            "Automatic alerts when a checkout queue crosses a threshold you define.",
            "Compare footfall against billing data to see which locations convert best.",
        ],
        metaTitle: "Zone & Heatmap Analytics — PrepCam | Prepseed",
        metaDescription: "PrepCam's Zone & Heatmap Analytics show dwell time, staff coverage gaps and queue length by zone.",
        keywords: "retail heatmap analytics, footfall tracking software, queue length detection",
    },
    "ppe-uniform-compliance": {
        category: "Module", tone: "green", icon: <FiShield />, mockup: "ppe",
        seoTitle: "PPE Compliance Detection Software — Automated Safety Gear Monitoring",
        lead: "Built for factories, warehouses and field sites, as well as retail and hospitality uniform standards — helmets, hi-vis vests, gloves, masks, uniforms and ID badges checked automatically.",
        sections: [
            { heading: "Checked on entry, every time", body: "Helmets and hi-vis vests are detected on every entry to a marked zone; gloves and masks are checked at food-handling and clean-room stations; uniform and ID badge are verified at every customer-facing counter." },
        ],
        bullets: [
            "Helmet / hard hat detected on every entry to a marked zone.",
            "Hi-vis vest flagged if missing on the warehouse floor.",
            "Gloves & mask checked at food-handling & clean-room stations.",
            "Uniform & ID badge verified at every customer-facing counter.",
        ],
        stat: { value: "96%", label: "PPE compliance, Warehouse Bay 3" },
        metaTitle: "PPE & Uniform Compliance — PrepCam | Prepseed",
        metaDescription: "PrepCam checks helmets, vests, gloves, masks and uniforms automatically on every frame.",
        keywords: "PPE compliance detection, safety gear monitoring, uniform compliance software",
    },
    "realtime-alerts-incidents": {
        category: "Module", tone: "red", icon: <FiAlertTriangle />, mockup: "alerts",
        seoTitle: "Real-Time Incident Alert Software — Evidence-Backed Video Surveillance",
        lead: "Managers and owners are notified within seconds of a detected violation, with an evidence clip attached and severity-based routing to the right person.",
        sections: [
            { heading: "A full audit trail, not just a ping", body: "Every alert, acknowledgment and resolution is logged against the employee and the shift, so nothing gets lost between the notification and the follow-up." },
        ],
        bullets: [
            "Instant push to WhatsApp, Slack or the app within seconds of detection.",
            "A short, auto-trimmed evidence clip attached to every alert.",
            "Severity-based routing — minor SOP misses to the shift lead, safety incidents to the owner.",
            "Full incident timeline & audit trail on every alert.",
        ],
        metaTitle: "Real-Time Alerts & Incidents — PrepCam | Prepseed",
        metaDescription: "PrepCam pushes real-time alerts with evidence clips the moment a violation is detected.",
        keywords: "real time incident alerts, video surveillance alerting, retail loss prevention software",
    },
    "ai-insights-reporting": {
        category: "Module", tone: "cam", icon: <FiActivity />,
        seoTitle: "AI Video Intelligence Platform — Automated Insights & Reporting",
        lead: "PrepCam reads the patterns across cameras, shifts and locations, and tells owners what actually needs attention — not just a raw event log.",
        sections: [
            { heading: "A rolling compliance index, not a spreadsheet", body: "A rolling 7-day compliance index across every camera and checklist is paired with plain-English digests, ranked by priority, so owners know what to act on first." },
        ],
        bullets: [
            "Rolling 7-day compliance index across every camera and checklist.",
            "Plain-English digests, ranked by priority — not a raw data dump.",
            "Store-to-store and shift-to-shift comparisons surfaced automatically.",
            "Trend detection — e.g. a specific SOP miss climbing on evening shifts.",
        ],
        stat: { value: "82%", label: "company compliance index, rolling 7-day" },
        metaTitle: "AI Insights & Reporting — PrepCam | Prepseed",
        metaDescription: "PrepCam's AI Insights & Reporting turns raw CCTV data into plain-English, prioritized reports.",
        keywords: "AI video analytics reporting, CCTV data insights, video intelligence platform",
    },
    "multi-location-command-center": {
        category: "Module", tone: "cam", icon: <FiLayers />, mockup: "locations",
        seoTitle: "Multi-Location Command Center Software — Franchise Visibility Dashboard",
        lead: "Every outlet, every camera, rolled up into a single owner view, with role-scoped access for regional and location managers.",
        sections: [
            { heading: "Add a location in hours, not weeks", body: "New outlet cameras onboard onto the same rules and dashboard as every other location, and the whole footprint can be exported as a board-ready PDF report." },
        ],
        bullets: [
            "Cross-location benchmarking — rank every outlet by compliance, footfall or alerts.",
            "Role-scoped access — regional managers see their region; owners see all.",
            "Add a location in hours — new cameras onboard onto the same rules and dashboard.",
            "Exportable board reports — one PDF, every location, ready for the ownership meeting.",
        ],
        metaTitle: "Multi-Location Command Center — PrepCam | Prepseed",
        metaDescription: "PrepCam's Multi-Location Command Center gives owners one real-time view across every outlet.",
        keywords: "multi location dashboard, retail chain monitoring software, franchise visibility tool",
    },
};

const roles = {
    "owner-admin": {
        category: "Role", tone: "cam", icon: <FiShield />,
        seoTitle: "Owner Dashboard Software — Role-Based Access for CCTV Management",
        lead: "The Owner / Admin role sees every location, every camera and every report — and controls users, roles and integrations for the whole account.",
        sections: [
            { heading: "The one seat that sees everything", body: "No one else on the account sees the full company database — every other role stays scoped to their own location or region by default." },
        ],
        bullets: [
            "Full visibility across every project, team and report.",
            "Controls users, roles and integrations for the entire account.",
            "The only role with access to cross-location board reports.",
        ],
        metaTitle: "Owner / Admin Role — PrepCam | Prepseed",
        metaDescription: "The PrepCam Owner / Admin role has full, unscoped visibility across every location and camera.",
        keywords: "video surveillance owner dashboard, role based access CCTV software",
    },
    "regional-area-manager": {
        category: "Role", tone: "cam", icon: <FiUsers />,
        seoTitle: "Regional Manager Dashboard Software — Multi-Store Compliance Monitoring",
        lead: "Regional and area managers get cross-location dashboards, SOP benchmarking and incident escalation scoped to their own region.",
        sections: [
            { heading: "Benchmark, don't guess", body: "Cross-location benchmarking ranks every outlet in the region by compliance, footfall or alert volume, so attention goes to the location that needs it most." },
        ],
        bullets: [
            "Cross-location dashboards scoped to the manager's own region.",
            "SOP benchmarking across every outlet they oversee.",
            "Incident escalation for anything that needs owner-level attention.",
        ],
        metaTitle: "Regional / Area Manager Role — PrepCam | Prepseed",
        metaDescription: "PrepCam's Regional / Area Manager role gives cross-location dashboards scoped to their own region.",
        keywords: "regional manager dashboard, multi store compliance monitoring",
    },
    "location-store-manager": {
        category: "Role", tone: "cam", icon: <FiCheckSquare />,
        seoTitle: "Store Manager Dashboard Software — Location-Scoped CCTV Access",
        lead: "Location and store managers see only their own cameras, SOP scores, attendance and alerts — nothing from any other outlet.",
        sections: [
            { heading: "Everything needed to run one location well", body: "A single scorecard covering SOP compliance, phone-use flags and attendance keeps a manager focused on their own floor, without the noise of every other outlet on the account." },
        ],
        bullets: [
            "Own-location camera feed, SOP score and attendance in one view.",
            "Real-time alerts scoped to their own shifts and staff.",
            "No visibility into other locations' data by default.",
        ],
        metaTitle: "Location / Store Manager Role — PrepCam | Prepseed",
        metaDescription: "PrepCam's Location / Store Manager role sees only their own cameras, SOP scores and attendance.",
        keywords: "store manager dashboard, location scoped access CCTV software",
    },
    "safety-compliance-officer": {
        category: "Role", tone: "cam", icon: <FiAlertTriangle />,
        seoTitle: "Safety Compliance Officer Dashboard — PPE Detection & Incident Audit Trail",
        lead: "The Safety & Compliance Officer role covers PPE compliance, incident review and the full access audit trail across every site.",
        sections: [
            { heading: "Built for safety-first environments", body: "PPE and uniform compliance scores, plus every safety-flagged incident and its evidence clip, are surfaced in one place — with a full log of who viewed which record and when." },
        ],
        bullets: [
            "PPE & uniform compliance scores across every site.",
            "Direct review of every safety-flagged incident and its evidence clip.",
            "Full access audit trail — every clip view logged against the viewer.",
        ],
        metaTitle: "Safety & Compliance Officer Role — PrepCam | Prepseed",
        metaDescription: "PrepCam's Safety & Compliance Officer role covers PPE compliance, incidents and the full audit trail.",
        keywords: "safety compliance officer dashboard, PPE compliance detection, incident audit trail",
    },
};

export const detailsBySlug = { ...problems, ...modules, ...roles };
