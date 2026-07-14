import {
    FiList, FiClock, FiCalendar, FiUsers, FiBarChart2, FiMonitor, FiTarget, FiLogOut,
    FiZap, FiSun, FiSmartphone, FiCheckSquare, FiLayers, FiShield, FiMapPin, FiRefreshCw,
    FiGrid, FiFilter, FiBriefcase,
} from "react-icons/fi";

// Each entry drives one /products/real-estate-crm/:slug page.
//   title        — short name, shown as the "old way" (problems) or in the breadcrumb
//   seoTitle     — the actual <h1>, written around the target keyword
//   metaTitle / metaDescription / keywords — <title>/<meta> tags (see useSEO)
//   mockup       — reuses a Mockups.jsx component as the page's visual; null = text-only layout
const details = [
    // ---------- Problems ----------
    {
        slug: "leads-scattered",
        category: "The Problem",
        tone: "red",
        icon: <FiList />,
        title: "Leads scattered everywhere",
        seoTitle: "Real Estate Lead Management Software — Every Channel, One Funnel",
        metaTitle: "Real Estate Lead Management Software | Prepseed CRM",
        metaDescription: "Capture leads from Meta, Google, WhatsApp, walk-ins and brokers into one real estate CRM funnel. Native integrations, auto-assignment, zero manual entry.",
        keywords: "real estate lead management software, real estate lead capture, lead management crm india",
        lead: "Meta forms, Google lead extensions, WhatsApp enquiries, walk-ins and broker referrals — on a typical week, a sales team's leads arrive from five or six different places. By the time someone remembers to check all of them, the hottest ones have already gone cold.",
        sections: [
            {
                heading: "One funnel, every source",
                body: "Instead of checking five different inboxes, every lead — Meta, Google, WhatsApp, a walk-in at the site office or a broker's WhatsApp forward — lands in the same Lead Manager, tagged with its real source and timestamp automatically.",
            },
            {
                heading: "Built for how Indian real estate teams actually sell",
                body: "Most CRMs are built around a single channel. Prepseed is built for the exact mix a real estate sales team deals with daily — paid ads, WhatsApp enquiries and offline referrals — without needing a developer to wire it together.",
            },
        ],
        bullets: [
            "Every channel lands in one funnel automatically — Meta, Google and WhatsApp sync natively, no manual export or import.",
            "Manual leads — walk-ins, broker calls, referrals — are added in seconds and tagged with their real source.",
            "Nothing sits unassigned: new leads route to the right executive the moment they arrive.",
            "One list, one view — every lead searchable by source, project, executive or date.",
        ],
        mockup: "leadManager",
        stat: { value: "5+", label: "channels, one funnel" },
        faqs: [
            { q: "Can Prepseed capture leads directly from Facebook and Instagram ads?", a: "Yes. Meta Lead Ads sync natively into Lead Manager with full ad, campaign and creative attribution — no manual export or CSV upload required." },
            { q: "What happens to leads forwarded on WhatsApp?", a: "The Prepseed WhatsApp bot logs and qualifies every enquiry automatically, tagged as a WhatsApp-sourced lead in the same funnel as your paid and offline leads." },
            { q: "Can I add a walk-in or broker referral manually?", a: "Yes — manual entry takes seconds, and you can tag the source (walk-in, broker, referral) so your reporting stays accurate." },
        ],
    },
    {
        slug: "follow-ups-slip",
        category: "The Problem",
        tone: "red",
        icon: <FiClock />,
        title: "Follow-ups slip through",
        seoTitle: "Automated Follow-Up & SLA Tracking Software for Real Estate Sales",
        metaTitle: "Real Estate Follow-Up Automation Software | Prepseed CRM",
        metaDescription: "Never miss a follow-up again. Prepseed tracks first-contact and follow-up SLAs automatically and surfaces overdue leads the moment they slip.",
        keywords: "real estate follow up software, lead follow up automation, sla tracking crm",
        lead: "There's no SLA on a sticky note. Without a system tracking who's due a callback and when, the leads that need a same-day response are exactly the ones most likely to be forgotten on a busy day.",
        sections: [
            {
                heading: "SLAs the system tracks, not the person",
                body: "Every lead gets a first-contact and follow-up SLA the moment it's created. If a call or message is due and hasn't happened, it doesn't wait for someone to notice — it moves to the top of the Action Center automatically.",
            },
            {
                heading: "WhatsApp replies never wait in a side inbox",
                body: "Customer replies on WhatsApp are pulled into the same prioritised queue as calls and follow-ups, so a hot lead's message doesn't sit unread in a separate app while a tele-caller works down a different list.",
            },
        ],
        bullets: [
            "First-contact and follow-up SLAs are tracked automatically, per lead.",
            "Overdue follow-ups surface at the top of the Action Center the moment they slip — they don't hide in a spreadsheet.",
            "WhatsApp replies waiting on a customer are pulled to the front of the queue automatically.",
            "Managers see team-wide overdue counts in real time, not at an end-of-day review.",
        ],
        mockup: "actionCenter",
        stat: { value: "21", label: "overdue follow-ups caught, live" },
        faqs: [
            { q: "How does Prepseed know a follow-up is overdue?", a: "Every lead has an SLA clock running based on its stage and last contact. Once that window passes without action, it's flagged as overdue automatically — no manual tracking required." },
            { q: "Do managers get visibility into team-wide overdue counts?", a: "Yes — the Dashboard shows overdue follow-ups across the whole team in real time, not just an individual tele-caller's queue." },
            { q: "Does this work for WhatsApp as well as calls?", a: "Yes. WhatsApp replies waiting on a response are surfaced in the same Action Center queue as call follow-ups, ranked by urgency." },
        ],
    },
    {
        slug: "site-visits-excel",
        category: "The Problem",
        tone: "red",
        icon: <FiCalendar />,
        title: "Site visits tracked on Excel",
        seoTitle: "Automated Site Visit Scheduling & Tracking Software for Real Estate",
        metaTitle: "Real Estate Site Visit Management Software | Prepseed CRM",
        metaDescription: "Replace the site-visit spreadsheet. Automated scheduling, WhatsApp reminders and instant outcome capture — every visit tied to the exact unit.",
        keywords: "site visit management software, real estate site visit scheduling, site visit tracking crm",
        lead: "A spreadsheet doesn't send a reminder. Without a proper calendar, site visits get missed, no-shows go untracked, and nobody remembers to log what actually happened after the customer left.",
        sections: [
            {
                heading: "From spreadsheet to shared calendar",
                body: "Every scheduled visit — which project, which unit, which executive — lives in one calendar the whole team can see, instead of a spreadsheet that's only ever as current as the last person who remembered to update it.",
            },
            {
                heading: "Reminders sent automatically, on both sides",
                body: "A WhatsApp reminder goes out to the customer and the assigned executive ahead of every visit, cutting down no-shows without anyone having to remember to send it.",
            },
        ],
        bullets: [
            "Every scheduled visit lives in one shared calendar, filterable by project, executive or status.",
            "Automated WhatsApp reminders go out to both the customer and the executive ahead of time.",
            "Outcome capture happens on the spot — feeds straight into the funnel and reports, no re-entry.",
            "Every visit is tied to the exact tower and unit shown, for full traceability to booking.",
        ],
        mockup: "siteVisits",
        faqs: [
            { q: "Does Prepseed send reminders for site visits automatically?", a: "Yes — both the customer and the assigned executive get a WhatsApp reminder ahead of the scheduled visit time, automatically." },
            { q: "What happens after a site visit is completed?", a: "The executive logs the outcome on the spot from their phone — interested, needs follow-up, not interested — and it feeds straight into the funnel and reports, with no re-entry back at the office." },
            { q: "Can I filter site visits by project or executive?", a: "Yes, the calendar is filterable by project, executive or status, so you can see exactly what's scheduled for any tower or team member." },
        ],
    },
    {
        slug: "brokers-memory",
        category: "The Problem",
        tone: "red",
        icon: <FiUsers />,
        title: "Brokers managed by memory",
        seoTitle: "Real Estate Broker & Channel Partner Management Software",
        metaTitle: "Broker Management Software for Real Estate | Prepseed CRM",
        metaDescription: "Track every channel partner, automate referral attribution, and see conversion rate per broker — no more disputes over who sent what.",
        keywords: "broker management software real estate, channel partner management crm, real estate referral tracking",
        lead: "When broker relationships live in someone's head — and their phone — there's no way to know who actually referred a lead, and no clean way to calculate what they're owed.",
        sections: [
            {
                heading: "Referral attribution without the arguments",
                body: "When a broker sends a lead, it's tagged to them automatically the moment it enters the funnel — a clean, timestamped record of who referred what, instead of a conversation that happens after the fact.",
            },
            {
                heading: "See your best channel partners, not just your busiest",
                body: "Leads-to-booking conversion is tracked per broker, so you can tell the difference between a broker who sends a lot of leads and one who sends leads that actually convert.",
            },
        ],
        bullets: [
            "Every broker, their company and every lead they've sent lives in one searchable directory.",
            "Referrals are tagged automatically the moment a broker's lead enters the funnel — no disputes over attribution.",
            "Leads-to-booking conversion per broker is tracked automatically, so you know your best channel partners.",
            "Push new inventory or offers to your entire broker network in a single message.",
        ],
        mockup: "brokers",
        faqs: [
            { q: "How are broker referrals tracked without manual entry?", a: "A lead is tagged to the referring broker the moment it enters the CRM, whether it comes in through a call, WhatsApp or manual entry — so there's no dispute over attribution later." },
            { q: "Can I see which brokers are converting best?", a: "Yes — the broker directory shows leads sent and leads-to-booking conversion per broker, so you can identify your best channel partners at a glance." },
            { q: "Can I message my whole broker network at once?", a: "Yes, bulk broadcast lets you push new inventory or offers to your entire broker network in a single message." },
        ],
    },
    {
        slug: "owners-fly-blind",
        category: "The Problem",
        tone: "red",
        icon: <FiBarChart2 />,
        title: "Owners fly blind",
        seoTitle: "Real-Time Sales Dashboard & Reporting Software for Real Estate Owners",
        metaTitle: "Real Estate Sales Dashboard Software | Prepseed CRM",
        metaDescription: "A live view of funnel health, source ROI and team performance for real estate owners — not a report that's a week out of date.",
        keywords: "real estate sales dashboard, real estate owner reporting software, real time crm dashboard",
        lead: "Without a live view of the funnel, an owner only finds out a channel has stopped converting, or a team has fallen behind on follow-ups, weeks after it actually mattered.",
        sections: [
            {
                heading: "Funnel health, not a monthly recap",
                body: "New, contacted, overdue and unassigned counts refresh in real time on one dashboard, so an owner sees today's state of the funnel today — not in a report compiled a week later.",
            },
            {
                heading: "One role sees everything; every other role is scoped",
                body: "Owners get full visibility across every project and team; managers and executives automatically see only their own queue, so full transparency at the top doesn't mean handing out full access underneath.",
            },
        ],
        bullets: [
            "A single dashboard shows new, contacted, overdue and unassigned counts, refreshed in real time.",
            "Source-to-booking funnel reporting shows exactly which channel and campaign is producing bookings.",
            "Salesperson performance — leads, contact rate, conversion — is visible per executive, not just team-wide.",
            "Owners see everything; every other role is automatically scoped to their own queue.",
        ],
        mockup: "dashboard",
        faqs: [
            { q: "Can I see performance for a specific salesperson?", a: "Yes — the Dashboard breaks down leads, contact rate and conversion per executive, not just as a team total." },
            { q: "Is the data on the dashboard live?", a: "Yes, every number — new leads, overdue follow-ups, unassigned leads — refreshes in real time as the team works, not on a delay." },
            { q: "Do managers and executives see the same dashboard as the owner?", a: "No — owners see the full picture across every project and team; managers and executives are automatically scoped to their own queue." },
        ],
    },
    {
        slug: "generic-software",
        category: "The Problem",
        tone: "red",
        icon: <FiMonitor />,
        title: "Generic software, generic look",
        seoTitle: "White-Label Real Estate CRM Software — Sold Under Your Own Brand",
        metaTitle: "White-Label Real Estate CRM Software | Prepseed",
        metaDescription: "Your logo, your domain, your app on the stores. A fully white-labeled real estate CRM — Prepseed is the engine, never the name your customers see.",
        keywords: "white label real estate crm, whitelabel crm software, custom branded crm real estate",
        lead: "An off-the-shelf CRM puts someone else's logo in front of your customers — on every notification, every report and every login screen.",
        sections: [
            {
                heading: "Every customer touchpoint carries your brand",
                body: "Your logo and brand colors appear across the web app, the mobile app and every customer-facing WhatsApp, SMS and email — Prepseed's name never appears anywhere a customer or broker can see it.",
            },
            {
                heading: "Published on the app stores as your own app",
                body: "Your mobile app goes live on the App Store and Play Store under your own developer account, your icon and your name — not a shared or co-branded listing.",
            },
        ],
        bullets: [
            "Your logo, brand colors and domain are applied across web, mobile app and every customer-facing message.",
            "SMS, email and WhatsApp messages send from your own number — Prepseed is never visible.",
            "Your app is published on the stores under your own developer account, name and icon.",
            "Every exported PDF and dashboard carries your branding, never ours.",
        ],
        mockup: null,
        faqs: [
            { q: "Will my customers ever see the Prepseed name or logo?", a: "No. Every customer-facing surface — the app, the web portal, WhatsApp/SMS/email notifications, exported reports — carries your brand only." },
            { q: "Can we use our own domain for the CRM?", a: "Yes, the platform runs on your own domain (e.g. crm.yourbrand.com) rather than a prepseed.com subdomain." },
            { q: "Who publishes the mobile app — us or Prepseed?", a: "It's published under your own developer account on the App Store and Play Store, with your name and app icon." },
        ],
    },
    {
        slug: "marketing-spend-wasted",
        category: "The Problem",
        tone: "red",
        icon: <FiTarget />,
        title: "Marketing spend, wasted",
        seoTitle: "Real Estate Marketing Attribution & Campaign ROI Tracking Software",
        metaTitle: "Real Estate Marketing Attribution Software | Prepseed CRM",
        metaDescription: "See exactly which campaign, channel and ad produced a booking — not just a lead count. Full attribution from Meta and Google ad spend to signed unit.",
        keywords: "real estate marketing attribution, campaign roi tracking real estate, ad attribution crm",
        lead: "If you can't see which campaign actually produced a booking, you're guessing at where next month's ad budget should go.",
        sections: [
            {
                heading: "From ad click to booked unit, fully traceable",
                body: "Meta and Google campaigns sync with full ad, campaign and creative-level attribution, so a booking can be traced back to the exact ad that produced the lead — not just \"Facebook\" as a source.",
            },
            {
                heading: "Compare channels on conversion, not just lead volume",
                body: "The source-to-booking funnel shows conversion rate by channel — Meta, WhatsApp, Google, broker or walk-in — so budget decisions are based on what actually books, not just what generates the most leads.",
            },
        ],
        bullets: [
            "Meta and Google campaigns sync with full ad, campaign and creative attribution, down to the individual lead.",
            "The source-to-booking funnel shows conversion rate by channel: Meta, WhatsApp, Google, broker or walk-in.",
            "Reports are exportable and shareable — one click to a branded PDF or CSV, any date range.",
            "Every rupee of spend can be traced to a booked unit, not just a lead count.",
        ],
        mockup: "dashboard",
        faqs: [
            { q: "Can I see which specific ad or creative produced a booking?", a: "Yes — Meta and Google integrations sync with campaign and creative-level attribution, traceable through to the booked unit." },
            { q: "Can I export marketing performance reports?", a: "Yes, one click exports a branded PDF or CSV for any date range, project or channel." },
            { q: "Does this cover offline sources like walk-ins too?", a: "Yes — walk-ins and broker referrals are tracked as sources in the same funnel, so the full source-to-booking comparison includes both online and offline channels." },
        ],
    },
    {
        slug: "data-walks-out",
        category: "The Problem",
        tone: "red",
        icon: <FiLogOut />,
        title: "Data walks out the door",
        seoTitle: "Secure Real Estate CRM — Your Lead Data Never Leaves With Staff",
        metaTitle: "Secure Real Estate CRM Software | Prepseed",
        metaDescription: "Every lead, call log and WhatsApp thread stays in the CRM, not on a personal device. Role-based access and one-click reassignment when staff leave.",
        keywords: "real estate crm data security, secure lead management software, crm staff turnover",
        lead: "When a tele-caller who owns 300 conversations resigns, their leads and full WhatsApp chat history shouldn't leave with their phone.",
        sections: [
            {
                heading: "Nothing lives on a personal phone",
                body: "Every call log, WhatsApp thread and status change is stored against the lead inside the CRM — not in a tele-caller's personal WhatsApp or a notebook that leaves with them.",
            },
            {
                heading: "Reassignment takes one click, not a scramble",
                body: "When someone resigns, their entire queue — leads, in-progress conversations, scheduled follow-ups — reassigns to another executive in one click, with the full history intact.",
            },
        ],
        bullets: [
            "Every lead, call log and WhatsApp thread lives in the CRM, not on a personal device.",
            "Reassigning a departing executive's queue takes one click — nothing is lost.",
            "Full activity trail: every call, message and status change is logged automatically against the lead.",
            "Role-based access means a departing exec never had visibility beyond their own queue in the first place.",
        ],
        mockup: null,
        faqs: [
            { q: "What happens to a tele-caller's leads when they resign?", a: "Their queue reassigns to another executive in one click, and the full activity history — calls, messages, notes — stays with the lead." },
            { q: "Does the WhatsApp bot log conversations centrally?", a: "Yes, every WhatsApp conversation runs through the Prepseed WhatsApp Management Service and is logged against the lead, not a personal number." },
            { q: "Can a tele-caller see leads outside their own assigned queue?", a: "No — role-based access means a tele-caller only ever sees their own assigned leads, never the full database." },
        ],
    },

    // ---------- Modules that also have a full spotlight section further
    // down the main overview page (with a live mockup, as part of the
    // scrolling card stack) — these pages cover the same module from a
    // dedicated-page angle: distinct keyword, distinct FAQ focus, so they
    // don't just duplicate the spotlight copy or the related "problem" page
    // that covers the same pain point. ----------
    {
        slug: "dashboard",
        category: "Module",
        tone: "blue",
        icon: <FiGrid />,
        title: "Dashboard",
        seoTitle: "Real Estate Sales Floor Dashboard — Live Funnel Visibility Software",
        metaTitle: "Real Estate CRM Dashboard Software | Prepseed",
        metaDescription: "See your entire real estate sales floor in one glance — live funnel health, SLA alerts and channel-wise WhatsApp/call performance, refreshed in real time.",
        keywords: "real estate crm dashboard, sales floor visibility software, real estate funnel dashboard",
        lead: "Live funnel health, SLA-driven alerts and channel-wise pulse — refreshed in real time, not end-of-day. One dashboard shows exactly where every lead stands, without exporting a single spreadsheet.",
        sections: [
            {
                heading: "Every stage of the funnel, always current",
                body: "New, contacted, overdue and unassigned counts refresh in real time, so a manager glancing at the dashboard mid-morning sees the same live picture an owner would see at the end of the day.",
            },
            {
                heading: "Role-aware, by design",
                body: "Owners see everything across every project and team; managers and executives see exactly their own queue — the same dashboard, scoped differently depending on who's logged in.",
            },
        ],
        bullets: [
            "New, contacted, overdue and unassigned counts refreshed in real time.",
            "First-contact and follow-up SLAs tracked automatically, surfaced the moment they slip.",
            "WhatsApp, call and source performance in one view — no exports, no spreadsheets.",
            "Owners see everything; managers and executives see exactly their queue.",
        ],
        mockup: "dashboard",
        faqs: [
            { q: "Does the dashboard show WhatsApp performance alongside calls?", a: "Yes — WhatsApp, call and source performance all show in one view, with no need to export data into a separate spreadsheet." },
            { q: "How is \"overdue\" calculated on the dashboard?", a: "First-contact and follow-up SLAs are tracked automatically per lead, and any lead past its SLA window shows up in the overdue count instantly." },
            { q: "Can I switch between today's view and a historical date range?", a: "Yes, the Reports & Analytics module built on the same data lets you pick any custom date range for historical comparisons." },
        ],
    },
    {
        slug: "action-center",
        category: "Module",
        tone: "blue",
        icon: <FiCheckSquare />,
        title: "Action Center",
        seoTitle: "Prioritised Sales Action Center Software for Real Estate Teams",
        metaTitle: "Real Estate Sales Action Center Software | Prepseed CRM",
        metaDescription: "One ranked queue tells every executive exactly what to work on today — WhatsApp replies, overdue follow-ups and new leads, auto-sorted by priority.",
        keywords: "sales action center software, real estate task queue crm, prioritized lead queue software",
        lead: "One prioritised, ranked queue — every executive opens the app already knowing what to work on next. No deciding, no scrolling through a flat list sorted by date.",
        sections: [
            {
                heading: "The queue decides, not the executive",
                body: "WhatsApp replies waiting on a response, leads past their SLA, and today's scheduled tasks all rank automatically into one list — removing the daily question of \"what should I work on first?\"",
            },
            {
                heading: "One click from task to full context",
                body: "Every item in the queue links straight into the full lead record and history, so acting on a task never means hunting for background information first.",
            },
        ],
        bullets: [
            "One prioritised queue — no deciding what to work on next.",
            "Customer messages waiting for a reply are pulled to the top automatically.",
            "Overdue follow-ups stay visible until they're actioned or reassigned.",
            "One click from any task straight into the full lead record and history.",
        ],
        mockup: "actionCenter",
        faqs: [
            { q: "Does the Action Center update in real time as new leads or messages arrive?", a: "Yes, new leads and WhatsApp replies are pulled into the queue automatically as they happen, without needing to refresh manually." },
            { q: "Can overdue items be reassigned from the Action Center?", a: "Yes, an overdue follow-up can be reassigned directly to another executive from within the same queue." },
            { q: "Is the Action Center different for tele-callers versus managers?", a: "Yes — tele-callers see only their own queue, while managers and owners can see team-wide queues depending on their role." },
        ],
    },
    {
        slug: "lead-manager",
        category: "Module",
        tone: "blue",
        icon: <FiFilter />,
        title: "Lead Manager",
        seoTitle: "Real Estate Lead Manager Software — One Funnel, Zero Leakage",
        metaTitle: "Real Estate Lead Manager CRM Software | Prepseed",
        metaDescription: "Add leads fast, filter deep, export anytime — with a full activity trail on every lead. The complete real estate sales funnel in one Lead Manager.",
        keywords: "real estate lead manager software, sales funnel crm real estate, lead tracking software real estate",
        lead: "Add leads fast, filter deep, export anytime — with a full activity trail on every single one. Every lead's entire journey lives in a single funnel view.",
        sections: [
            {
                heading: "Every source, one place to manage it",
                body: "Manual entry, bulk import or auto-captured from Meta, Google or WhatsApp — however a lead arrives, it lands in the same Lead Manager, filterable by status, executive, source, project or date.",
            },
            {
                heading: "Nothing is invisible",
                body: "Every call, message and status change is logged automatically against the lead, so a manager reviewing a stalled deal can see exactly what happened and when, without asking the executive to recall it from memory.",
            },
        ],
        bullets: [
            "Manual entry, bulk import or auto-captured — every source lands here.",
            "Deep filters by status, executive, source, project and date.",
            "One-click CSV export for offline review.",
            "Every call, message and status change logged automatically.",
        ],
        mockup: "leadManager",
        faqs: [
            { q: "Can I bulk import leads from a spreadsheet?", a: "Yes, leads can be bulk imported in addition to manual entry or auto-capture from integrated channels." },
            { q: "Can I export the lead list for offline review?", a: "Yes, one-click CSV export is available at any time, filtered however you like." },
            { q: "Does Lead Manager show me the full history of a lead?", a: "Yes, every call, message and status change is logged automatically, giving a complete activity trail per lead." },
        ],
    },
    {
        slug: "site-visits",
        category: "Module",
        tone: "blue",
        icon: <FiMapPin />,
        title: "Site Visits",
        seoTitle: "Site Visit Calendar & Scheduling Software for Real Estate Teams",
        metaTitle: "Real Estate Site Visit Calendar Software | Prepseed CRM",
        metaDescription: "A shared calendar for every scheduled site visit — automated WhatsApp reminders and instant outcome capture, tied to the exact unit shown.",
        keywords: "site visit calendar software, real estate visit scheduling tool, site visit reminder software",
        lead: "A calendar built for site visits, with automated reminders and outcome capture on the spot — every visit filterable by project, executive or status, in one shared view.",
        sections: [
            {
                heading: "One calendar, the whole team",
                body: "Every scheduled visit — which project, which unit, which executive — is visible to the whole team in one month view, filterable however you need to slice it.",
            },
            {
                heading: "The reminder sends itself",
                body: "A WhatsApp reminder goes to both the customer and the assigned executive ahead of time, and the outcome gets logged on the spot once the visit happens — no separate write-up required later.",
            },
        ],
        bullets: [
            "Every scheduled visit in one month view, filterable by project, executive or status.",
            "Customer and executive both get a WhatsApp reminder ahead of the visit.",
            "Log the visit outcome on the spot — feeds straight into the funnel and reports.",
            "Every visit tied to the exact tower and unit — full traceability to booking.",
        ],
        mockup: "siteVisits",
        faqs: [
            { q: "Can I filter the site visit calendar by project?", a: "Yes, the calendar can be filtered by project, executive or status to show exactly what's scheduled for any tower or team." },
            { q: "Does the calendar sync with the customer's own calendar app?", a: "Visit details are sent via WhatsApp reminder rather than a calendar invite, keeping it simple for customers who may not use calendar apps." },
            { q: "What happens to the visit record after the outcome is logged?", a: "It feeds straight into the funnel and reports immediately, with full traceability back to the exact unit shown." },
        ],
    },
    {
        slug: "brokers",
        category: "Module",
        tone: "blue",
        icon: <FiBriefcase />,
        title: "Broker Management",
        seoTitle: "Real Estate Broker Management Software — Referrals & Payouts",
        metaTitle: "Real Estate Broker Management CRM Software | Prepseed",
        metaDescription: "Track every channel partner, automate referral attribution and see conversion per broker — organize and incentivize your broker network in one place.",
        keywords: "broker management crm software, real estate channel partner software, broker payout tracking",
        lead: "Every broker, their referrals and their conversion rate — no disputes, no guesswork on payouts. A single directory keeps every channel partner organized and easy to incentivize.",
        sections: [
            {
                heading: "A directory that tags itself",
                body: "Every channel partner, their company and contact details live in one searchable list, and every lead a broker sends is tagged to them automatically the moment it enters the funnel.",
            },
            {
                heading: "Broadcast to your whole network in one message",
                body: "New inventory or an updated offer can be pushed to your entire broker network in a single message, instead of calling or messaging each partner individually.",
            },
        ],
        bullets: [
            "Every channel partner, company and contact detail in one searchable list.",
            "Every lead a broker sends is tagged automatically — full attribution, no disputes.",
            "See leads-to-booking conversion per broker to spot your best channel partners.",
            "Push new inventory or offers to your entire broker network in one message.",
        ],
        mockup: "brokers",
        faqs: [
            { q: "Can I see a broker's full referral history?", a: "Yes, every lead a broker has sent lives in their profile, along with their leads-to-booking conversion rate." },
            { q: "How do I calculate what a broker is owed?", a: "Since every referral is tagged and its booking status tracked, payout calculations are based on a clean, dispute-free record rather than memory or WhatsApp screenshots." },
            { q: "Can I message specific brokers instead of the whole network?", a: "Yes, you can message individual brokers directly or use bulk broadcast to reach your entire network at once." },
        ],
    },

    // ---------- Modules without an on-page section ----------
    {
        slug: "integrations",
        category: "Module",
        tone: "blue",
        icon: <FiRefreshCw />,
        title: "Integrations",
        seoTitle: "Real Estate CRM Integrations — Meta, Google & WhatsApp, Native",
        metaTitle: "Real Estate CRM Integrations Software | Prepseed",
        metaDescription: "Native Meta, Google Ads and WhatsApp integrations for real estate CRM — leads sync automatically with full campaign attribution, zero manual export.",
        keywords: "real estate crm integrations, meta lead ads crm integration, whatsapp crm integration real estate",
        lead: "Leads arrive automatically. Nobody copy-pastes. Native connections to the channels real estate teams already spend on mean every form fill lands directly in the funnel — no manual export, no CSV upload, no developer needed.",
        sections: [
            {
                heading: "Set up once, synced forever",
                body: "Connect your Meta and Google ad accounts once, and every lead form fill or lead extension submission syncs straight into Lead Manager automatically — with full ad, campaign and creative attribution down to the individual lead.",
            },
            {
                heading: "WhatsApp isn't bolted on, it's native",
                body: "The Prepseed WhatsApp Management Service auto-replies, qualifies and logs every enquiry before it ever reaches a human, and every conversation is tagged with full context in the same funnel as your paid and offline leads.",
            },
        ],
        bullets: [
            "Meta Lead Ads sync natively — Facebook & Instagram lead forms land in Lead Manager with full ad, campaign and creative attribution.",
            "Google Ads lead form extensions and Search campaigns feed directly into the same funnel — one source of truth for every rupee spent.",
            "The Prepseed WhatsApp bot auto-replies, qualifies and logs every enquiry before it reaches a human.",
            "More available on request: 99acres/MagicBricks feeds, Call Tracking, Email & SMS, Payment Gateway, Accounting/ERP export.",
        ],
        mockup: "leadManager",
        stat: { value: "3", label: "native integrations, zero manual entry" },
        faqs: [
            { q: "Do I need a developer to set up the integrations?", a: "No — connecting your Meta and Google ad accounts takes a few clicks and is typically set up in a day, with no developer required." },
            { q: "Does the WhatsApp integration require a separate tool like Interakt or WATI?", a: "No — the Prepseed WhatsApp Management Service is native to the CRM, replacing third-party WhatsApp tools entirely." },
            { q: "What other integrations are available?", a: "99acres/MagicBricks feeds, call tracking, email & SMS, payment gateways and accounting/ERP export are all available on request." },
        ],
    },
    {
        slug: "hot-lead",
        category: "Module",
        tone: "blue",
        icon: <FiZap />,
        title: "Hot Lead",
        seoTitle: "AI-Powered Hot Lead Scoring for Real Estate Sales Teams",
        metaTitle: "AI Lead Scoring Software for Real Estate | Prepseed CRM",
        metaDescription: "Prepseed flags high-intent real estate leads automatically — budget disclosed, repeat replies, site-visit requests — so your team calls the right ones first.",
        keywords: "lead scoring software real estate, ai hot lead detection, real estate lead prioritization",
        lead: "Not every lead deserves the same five minutes. Hot Lead uses intent signals — budget mentioned, site-visit requested, repeat WhatsApp replies — to flag the leads worth calling first.",
        sections: [
            {
                heading: "Intent signals, tracked automatically",
                body: "Budget disclosed, a requested site visit, repeated WhatsApp replies — Hot Lead watches for the signals that actually indicate intent and flags those leads automatically, without anyone having to review every conversation.",
            },
            {
                heading: "The Action Center always opens to the right list",
                body: "Flagged hot leads surface at the top of the Action Center, so an executive's day starts with the handful of leads worth calling first, not a flat list sorted by date.",
            },
        ],
        bullets: [
            "High-intent leads are flagged automatically and surfaced at the top of the Action Center.",
            "Signals include budget disclosed, repeated engagement, and requests for a site visit.",
            "Executives always know which handful of leads to call before anything else today.",
            "Hot leads carry through to reporting, so you can measure how fast they actually convert.",
        ],
        mockup: "actionCenter",
        faqs: [
            { q: "What signals does Prepseed use to flag a hot lead?", a: "Signals include a disclosed budget, repeated engagement across calls or WhatsApp, and requests for a site visit — all tracked automatically as the conversation happens." },
            { q: "Do hot leads get routed differently from regular leads?", a: "They're surfaced at the top of the Action Center automatically, so executives see them first without needing to filter or sort manually." },
            { q: "Can I measure how fast hot leads convert compared to others?", a: "Yes, hot-lead status carries through to reporting, so conversion speed for flagged leads is visible against your overall average." },
        ],
    },
    {
        slug: "ai-based-reporting",
        category: "Module",
        tone: "blue",
        icon: <FiSun />,
        title: "AI Based Reporting",
        seoTitle: "AI-Generated Sales Reports for Real Estate Teams — Plain English",
        metaTitle: "AI Sales Reporting Software for Real Estate | Prepseed",
        metaDescription: "Auto-generated, plain-English summaries of what moved, what slipped and what needs attention — delivered to email or WhatsApp, no login required.",
        keywords: "ai reporting software real estate, automated sales reports, plain english crm reports",
        lead: "Not everyone on the team reads a funnel chart. AI Based Reporting turns the same underlying data into a plain-English summary — what moved, what slipped, what needs attention.",
        sections: [
            {
                heading: "A summary, not just a chart",
                body: "Instead of a dashboard someone has to interpret, AI Based Reporting turns the same underlying funnel data into a written summary — what improved, what slipped, what needs attention — in plain English.",
            },
            {
                heading: "Delivered where people already are",
                body: "Summaries land in email or WhatsApp on a daily or weekly cadence, so staying informed doesn't require logging in and reading a dashboard.",
            },
        ],
        bullets: [
            "Auto-generated weekly (or daily) summaries in plain English, not just charts.",
            "Flags anomalies automatically — a source that stopped converting, a team member falling behind.",
            "Delivered straight to email or WhatsApp — no login required to stay informed.",
            "Sits on top of the same live data as the Dashboard — nothing to reconcile.",
        ],
        mockup: "dashboard",
        faqs: [
            { q: "How often are AI reports generated?", a: "You can set them to daily or weekly, depending on how closely you want to track the funnel." },
            { q: "Does this replace the Dashboard and Reports module?", a: "No — it sits on top of the same live data, giving you a written summary alongside the charts, not instead of them." },
            { q: "Can AI Based Reporting flag problems on its own?", a: "Yes, it's built to flag anomalies automatically — like a source that's stopped converting or a team member falling behind — not just summarise totals." },
        ],
    },
    {
        slug: "reports-analytics",
        category: "Module",
        tone: "blue",
        icon: <FiBarChart2 />,
        title: "Reports & Analytics",
        seoTitle: "Real Estate Sales Analytics & Funnel Reporting Software",
        metaTitle: "Real Estate Sales Analytics Software | Prepseed CRM",
        metaDescription: "Source-to-booking funnel reporting for real estate teams — by channel, project and executive. Custom date ranges, one-click export, daily digests.",
        keywords: "real estate sales analytics software, sales funnel reporting crm, real estate reporting tool",
        lead: "Numbers that show exactly where deals are won and lost — by source, by executive, by project — not just a leads-in, bookings-out count.",
        sections: [
            {
                heading: "Every number is drillable",
                body: "A headline conversion rate is a starting point, not the whole answer — every report drills down from the top-level number to the exact lead, executive or campaign behind it.",
            },
            {
                heading: "Reports that go where decisions get made",
                body: "One-click export to a branded PDF or CSV means reports are as easy to share with an investor or partner as they are to review internally, on whatever cadence the business runs on.",
            },
        ],
        bullets: [
            "Custom date ranges, any project, any team — drill down from a headline number to the exact lead.",
            "One-click export to CSV or a branded PDF, for offline review or investor updates.",
            "Daily or weekly digests land in your inbox automatically.",
            "Call outcomes — connected, not answered, wrong number — are tracked alongside conversion, not just lead counts.",
        ],
        mockup: "dashboard",
        stat: { value: "7.7%", label: "avg. lead-to-booking rate, tracked live" },
        faqs: [
            { q: "Can I filter reports by a specific project or date range?", a: "Yes — custom date ranges, project and team filters are all built in, down to drilling into the exact lead behind a number." },
            { q: "Are call outcomes tracked, not just lead counts?", a: "Yes, connected, not-answered, switched-off and wrong-number outcomes are all tracked alongside conversion." },
            { q: "Can reports be scheduled to send automatically?", a: "Yes, daily or weekly digests can be set up to land in your inbox automatically." },
        ],
    },
    {
        slug: "mobile-web-app",
        category: "Module",
        tone: "blue",
        icon: <FiSmartphone />,
        title: "Mobile & Web App",
        seoTitle: "Real Estate CRM Mobile App — White-Labeled, Any Device",
        metaTitle: "Real Estate CRM Mobile App | Prepseed",
        metaDescription: "The same CRM on web, iPad and phone — published under your own brand on the App Store and Play Store, fully synced in real time.",
        keywords: "real estate crm mobile app, white label mobile app real estate, field sales app real estate",
        lead: "The same CRM, published under your own name, on every device your team actually uses — a laptop at the office, a phone in the field, an iPad at the site.",
        sections: [
            {
                heading: "One system, every device",
                body: "A laptop at the office, an iPad at the site, a phone in the field — the same CRM, fully synced in real time, so there's no separate mobile system to reconcile with the web app.",
            },
            {
                heading: "Built for the field, not just adapted for it",
                body: "Field executives get a mobile-first Action Center designed for one-handed use on-site — site visits, leads and outcome logging, without needing a desktop nearby.",
            },
        ],
        bullets: [
            "Published on the App Store and Play Store under your developer account, your icon, your name.",
            "Field executives get a mobile-first Action Center: site visits, leads and outcome logging, built for one-handed use.",
            "Push notifications for new leads and overdue follow-ups reach reps instantly, wherever they are.",
            "Fully synced in real time across web and mobile — there's no separate system to reconcile.",
        ],
        mockup: null,
        faqs: [
            { q: "Is the mobile app published under our own brand?", a: "Yes — it's published on the App Store and Play Store under your own developer account, your app icon and your name." },
            { q: "Does the mobile app work offline at a site with poor connectivity?", a: "The app is built for field use with resilient sync, so outcome logging and lead updates catch up as soon as connectivity returns." },
            { q: "Do push notifications work for overdue follow-ups?", a: "Yes, new leads and overdue follow-ups trigger push notifications to the assigned rep instantly." },
        ],
    },

    // ---------- Extra features without an on-page section ----------
    {
        slug: "task-management",
        category: "Also built in",
        tone: "blue",
        icon: <FiCheckSquare />,
        title: "Task Management",
        seoTitle: "Sales Task Management Software for Real Estate Teams",
        metaTitle: "Real Estate Task Management Software | Prepseed CRM",
        metaDescription: "Assign tasks with a due date, priority and linked lead. Automatic overdue escalation and one view across every team member and project.",
        keywords: "real estate task management software, sales task tracking crm, team task assignment software",
        lead: "Beyond the sales funnel, there's always a list of things someone needs to do — send a brochure, review a broker payout, prep for tomorrow's site visit. Task Management keeps that list from living in someone's head.",
        sections: [
            {
                heading: "Every task tied to a lead, a date, and a person",
                body: "Any task can be assigned to a team member with a due date and priority, linked straight to the relevant lead or project, so nothing needs a separate to-do list on the side.",
            },
            {
                heading: "Overdue tasks escalate on their own",
                body: "A task that sits open past its due date keeps nudging the assignee, and escalates to the manager the longer it's ignored — nothing needs a manual follow-up to actually get followed up on.",
            },
        ],
        bullets: [
            "Assign a task to any team member with a due date, priority and linked lead, straight from the record.",
            "Assignees get instant push notifications the moment a task lands, changes, or comes due.",
            "Incomplete tasks keep nudging the assignee and escalate to the manager the longer they sit open.",
            "One view for owners: every task, every team member, every project — filterable and exportable.",
        ],
        mockup: "actionCenter",
        faqs: [
            { q: "Can tasks be linked to a specific lead or project?", a: "Yes, every task can be linked directly to the relevant lead, giving full context without switching screens." },
            { q: "What happens if a task is left incomplete past its due date?", a: "It keeps nudging the assignee with push notifications, and escalates to their manager the longer it sits open." },
            { q: "Can an owner see every task across the whole team?", a: "Yes, there's one filterable, exportable view across every team member, project and status." },
        ],
    },
    {
        slug: "project-inventory",
        category: "Also built in",
        tone: "blue",
        icon: <FiLayers />,
        title: "Project & Inventory",
        seoTitle: "Real Estate Project & Unit Inventory Management Software",
        metaTitle: "Real Estate Inventory Management Software | Prepseed CRM",
        metaDescription: "Track towers, units, pricing and live inventory value in real time — every enquiry tied to the exact unit shown, from lead to booking.",
        keywords: "real estate inventory management software, unit inventory tracking crm, project management real estate software",
        lead: "Sales and inventory shouldn't live in two different places. Project & Inventory keeps unit-level configuration, pricing and live availability tied directly to the leads chasing them.",
        sections: [
            {
                heading: "Sales and inventory, finally in the same place",
                body: "Unit-level configuration, floor and price stay current across every tower, so the sales team is always working off the same live inventory — not a spreadsheet someone updates at the end of the week.",
            },
            {
                heading: "See which tower is actually moving",
                body: "Sales velocity is visible per project, making it obvious which launch is converting and which one needs a different push — instead of finding out at the end of the quarter.",
            },
        ],
        bullets: [
            "Unit-level configuration, floor and price, always current across every tower.",
            "Run every project — and every launch — from the same CRM, no separate spreadsheet per site.",
            "Every enquiry is tied to the exact unit shown, for full traceability from lead to booking.",
            "Sales velocity is visible per project, so you know which tower is moving and which isn't.",
        ],
        mockup: null,
        stat: { value: "₹210 Cr", label: "live inventory value tracked" },
        faqs: [
            { q: "Can I manage multiple projects and launches from one CRM?", a: "Yes, every project and launch runs from the same platform — no separate spreadsheet or system per site." },
            { q: "Is every enquiry linked to a specific unit?", a: "Yes, every enquiry ties to the exact unit shown, giving full traceability from lead to booking." },
            { q: "Can I see which project is selling fastest?", a: "Yes, sales velocity is tracked per project so you can see which tower is moving and which isn't." },
        ],
    },

    // ---------- Roles ----------
    {
        slug: "owner-admin",
        category: "Team Role",
        tone: "green",
        icon: <FiShield />,
        title: "Owner / Admin",
        seoTitle: "Real Estate CRM for Owners — Full Visibility, Full Control",
        metaTitle: "Real Estate CRM for Owners & Admins | Prepseed",
        metaDescription: "The only role with full visibility across every project, team and report — plus control over users, permissions and every integration.",
        keywords: "real estate crm for owners, crm admin access control, real estate business owner software",
        lead: "The one role that sees everything. Owners and admins get full visibility across every project, every team and every report — and control over who else sees what.",
        sections: [
            {
                heading: "The complete picture, not a summary of it",
                body: "Owners and admins see every project, every team member and every report in real time — the only role with access to the full, unscoped database.",
            },
            {
                heading: "Control over who sees what",
                body: "User accounts, role permissions and every third-party integration are managed from the same account, so access across the whole platform stays exactly as tight — or as open — as the owner decides.",
            },
        ],
        bullets: [
            "Full visibility across every project, team member and report, in real time.",
            "Controls user accounts, role permissions and every third-party integration.",
            "The only role with access to the complete, unscoped database.",
            "Sets up custom fields, stages and approval flows to match how the business actually sells.",
        ],
        mockup: "dashboard",
        faqs: [
            { q: "Is the Owner/Admin the only role with full database access?", a: "Yes — every other role is automatically scoped to their own leads and queue; only Owner/Admin sees the complete, unscoped database." },
            { q: "Can an owner customize fields and workflows?", a: "Yes, custom fields, stages and approval flows can be configured to match how the business actually sells." },
            { q: "Can an owner control which integrations are connected?", a: "Yes, all third-party integrations — Meta, Google, WhatsApp and others — are managed from the Owner/Admin account." },
        ],
    },
    {
        slug: "sales-manager",
        category: "Team Role",
        tone: "green",
        icon: <FiCheckSquare />,
        title: "Sales Manager",
        seoTitle: "Real Estate Sales Manager Dashboard & Team Oversight Software",
        metaTitle: "Real Estate Sales Manager Software | Prepseed CRM",
        metaDescription: "Team-level dashboards, one-click lead reassignment and SLA monitoring for real estate sales managers — without owner-level access to everything.",
        keywords: "real estate sales manager software, team management crm real estate, sales team dashboard software",
        lead: "Sales managers need a team-level view without needing owner-level access to everything on the platform.",
        sections: [
            {
                heading: "Team visibility without full platform access",
                body: "A sales manager needs to see their team's funnel health and SLA compliance clearly — without needing owner-level access to every project or the full database.",
            },
            {
                heading: "Rebalance workload in one click",
                body: "When one executive is overloaded and another has room, leads reassign between them in a click, instead of a manual handoff that takes a message and a wait.",
            },
        ],
        bullets: [
            "Team-level dashboards showing funnel health and SLA compliance for their own team.",
            "Reassigns leads between executives in one click when workload shifts.",
            "Monitors follow-up SLAs and overdue counts across the whole team, not just one person's queue.",
            "Oversees broker referrals and conversion performance for the channels they manage.",
        ],
        mockup: "actionCenter",
        faqs: [
            { q: "Can a sales manager reassign leads between executives?", a: "Yes, in one click — useful when workload shifts or someone is out for the day." },
            { q: "Does a sales manager see broker performance too?", a: "Yes, broker referrals and conversion performance for the channels they manage are visible to the sales manager." },
            { q: "What's the difference between Sales Manager and Owner/Admin access?", a: "Sales Manager gets a team-level view — their own team's dashboards, leads and SLAs — while Owner/Admin sees every project, every team and controls platform-wide settings." },
        ],
    },
    {
        slug: "tele-caller",
        category: "Team Role",
        tone: "green",
        icon: <FiClock />,
        title: "Tele-caller",
        seoTitle: "Tele-caller CRM Software for Real Estate — Focused Call Queue",
        metaTitle: "Telecaller CRM Software for Real Estate | Prepseed",
        metaDescription: "A tele-caller's app shows only their own queue — Action Center, calls and follow-ups. No distractions, no access beyond their assigned leads.",
        keywords: "telecaller crm software real estate, call center crm real estate, tele calling software india",
        lead: "A tele-caller's job is calls and follow-ups — so that's all they see. No distractions, no access to leads outside their own queue.",
        sections: [
            {
                heading: "One queue, no decision fatigue",
                body: "A tele-caller opens the app to their own prioritised Action Center — the leads and follow-ups that matter today, already ranked — instead of a full database they'd have to sort through themselves.",
            },
            {
                heading: "Every call logged automatically",
                body: "Call outcomes and notes go straight against the lead as the conversation happens, building a complete activity trail without any separate log to maintain.",
            },
        ],
        bullets: [
            "Opens the app to their own prioritised Action Center — no deciding what to work on next.",
            "Sees only their assigned leads, calls and follow-ups; nothing else on the platform.",
            "Logs call outcomes and notes directly against the lead, building the activity trail automatically.",
            "If they leave the company, their queue reassigns in one click — nothing walks out with them.",
        ],
        mockup: "actionCenter",
        faqs: [
            { q: "Can a tele-caller see leads outside their assigned queue?", a: "No — access is scoped to only their own assigned leads, calls and follow-ups." },
            { q: "What happens to a tele-caller's leads if they leave the company?", a: "Their queue reassigns to another executive in one click, with the full activity history intact — nothing is lost." },
            { q: "Does the tele-caller need to log call outcomes manually in a separate sheet?", a: "No, outcomes and notes are logged directly against the lead in the CRM as part of the normal workflow." },
        ],
    },
    {
        slug: "field-executive",
        category: "Team Role",
        tone: "green",
        icon: <FiMapPin />,
        title: "Field Executive",
        seoTitle: "Mobile CRM for Real Estate Field Executives & Site Visits",
        metaTitle: "Field Executive App for Real Estate CRM | Prepseed",
        metaDescription: "Mobile-first access to today's site visits, directions and instant outcome logging — built for reps working on-site, not at a desk.",
        keywords: "field executive app real estate, mobile crm field sales, site visit app real estate",
        lead: "Field executives live on their phone, not a desktop — so their access is built mobile-first, for the site visit in front of them.",
        sections: [
            {
                heading: "Built for a phone, not adapted to one",
                body: "A field executive's day happens on-site, not at a desk, so their access is mobile-first from the ground up — today's scheduled visits, directions, and outcome logging, all built for one-handed use.",
            },
            {
                heading: "Nothing to re-enter back at the office",
                body: "The visit outcome is logged on the spot, right after the customer leaves, and feeds straight into the funnel — there's no separate step of writing it up again later.",
            },
        ],
        bullets: [
            "Mobile-first access to today's scheduled site visits, with directions built in.",
            "Logs the visit outcome on the spot — feeds straight into the funnel, no re-entry back at the office.",
            "Gets a WhatsApp reminder ahead of every visit, same as the customer.",
            "Sees only the leads and visits assigned to them.",
        ],
        mockup: "siteVisits",
        faqs: [
            { q: "Do field executives get directions to the site visit?", a: "Yes, scheduled visits include directions built into the mobile app." },
            { q: "Can a field executive log the visit outcome from their phone?", a: "Yes, outcome logging happens on the spot and feeds straight into the funnel — no re-entry required later." },
            { q: "Does a field executive see leads that aren't assigned to them?", a: "No, access is scoped to only the leads and visits assigned to them." },
        ],
    },
];

export const detailsBySlug = details.reduce((acc, d) => {
    acc[d.slug] = d;
    return acc;
}, {});

export default details;
