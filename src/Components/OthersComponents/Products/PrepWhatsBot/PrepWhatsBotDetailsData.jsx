import {
    FiClock, FiMessageSquare, FiBookOpen, FiBell, FiMoon, FiFileText,
    FiMessageCircle, FiCheckCircle, FiGitBranch, FiSend, FiInbox, FiUsers,
    FiRefreshCw, FiBarChart2, FiShield, FiUser, FiUserCheck, FiHeadphones,
    FiHash, FiTag, FiEdit3, FiZap,
} from "react-icons/fi";

// Each entry drives one /products/prepwhatsbot/:slug page.
//   title        — short name, shown as the "old way" (problems) or in the breadcrumb
//   seoTitle     — the actual <h1>, written around the target keyword
//   metaTitle / metaDescription / keywords — <title>/<meta> tags (see useSEO)
//   mockup       — reuses a Mockups.jsx component as the page's visual; null = text-only layout
const details = [
    // ---------- Problems ----------
    {
        slug: "replies-whenever-free",
        category: "The Problem",
        tone: "red",
        icon: <FiClock />,
        title: "Replies happen whenever someone's free",
        seoTitle: "Instant WhatsApp Auto-Reply Software — Never Keep a Lead Waiting",
        metaTitle: "Instant WhatsApp Auto-Reply Software | PrepWhatBot",
        metaDescription: "Stop losing leads to slow WhatsApp replies. PrepWhatBot answers in seconds, around the clock, grounded in your own content.",
        keywords: "instant whatsapp auto reply, whatsapp response time software, ai whatsapp bot for business",
        lead: "Not in real time — and leads go cold within minutes of going quiet. Without an always-on responder, the fastest-moving enquiries are exactly the ones a busy team misses.",
        sections: [
            {
                heading: "A reply within seconds, every time",
                body: "PrepWhatBot answers the moment a message arrives — no waiting for someone to be free, no queue building up while the team is in a meeting or asleep.",
            },
            {
                heading: "Never just an autoresponder",
                body: "Unlike a generic \"we'll get back to you\" message, every reply is grounded in your actual knowledge base, so the first response is also a useful one.",
            },
        ],
        bullets: [
            "Instant, every time — no missed enquiry, day or night, weekday or holiday.",
            "Grounded in your knowledge base — no made-up answers, only what you've actually fed it.",
            "On-brand tone — friendly, professional, and consistently in your voice.",
            "Smart escalation — hands off to a human the moment a conversation needs one.",
        ],
        mockup: "aiReply",
        stat: { value: "4s", label: "average first reply time" },
        faqs: [
            { q: "How fast does PrepWhatBot reply to a new WhatsApp message?", a: "Typically within a few seconds, any time of day, without anyone needing to be at their desk." },
            { q: "Does the bot ever make up an answer if it doesn't know something?", a: "No — every answer is grounded in the knowledge base you've fed it. If it can't answer confidently, it escalates to a human instead of guessing." },
            { q: "Can the bot hand off to a real person mid-conversation?", a: "Yes, smart escalation routes the conversation to a human the moment it needs one, with the full chat history intact." },
        ],
    },
    {
        slug: "same-questions-hundred-times",
        category: "The Problem",
        tone: "red",
        icon: <FiMessageSquare />,
        title: "The same questions, a hundred times",
        seoTitle: "AI WhatsApp FAQ Bot — Stop Answering the Same Questions Manually",
        metaTitle: "AI WhatsApp FAQ Automation | PrepWhatBot",
        metaDescription: "Pricing, brochure, timings, availability — PrepWhatBot answers every repeat question automatically, in your own tone.",
        keywords: "whatsapp faq bot, automated customer support whatsapp, ai chatbot for repeat questions",
        lead: "Pricing, brochure, timings, availability — typed out manually, again and again. The same five questions eat up hours that could go toward the conversations that actually need a person.",
        sections: [
            {
                heading: "Write the answer once",
                body: "Once a question is in the knowledge base, PrepWhatBot answers it consistently for every customer who asks — no re-typing the same brochure link or price list for the hundredth time.",
            },
            {
                heading: "Frees the team for what actually needs a human",
                body: "With routine questions handled automatically, the team's time goes to negotiations, escalations and the conversations where a person genuinely makes the difference.",
            },
        ],
        bullets: [
            "Instant, every time — no missed enquiry, day or night, weekday or holiday.",
            "Grounded in your knowledge base — no made-up answers, only what you've actually fed it.",
            "On-brand tone — friendly, professional, and consistently in your voice.",
            "Smart escalation — hands off to a human the moment a conversation needs one.",
        ],
        mockup: "aiReply",
        faqs: [
            { q: "Can the bot answer pricing and availability questions automatically?", a: "Yes, once that information is in the knowledge base, it answers consistently every time it's asked." },
            { q: "Does every customer get the exact same canned response?", a: "The bot answers from the same source of truth but phrases responses naturally in your tone, not a rigid script." },
            { q: "What happens if a question isn't covered in the knowledge base?", a: "The bot escalates to a human rather than guessing, so accuracy isn't sacrificed for speed." },
        ],
    },
    {
        slug: "no-knowledge-base",
        category: "The Problem",
        tone: "red",
        icon: <FiBookOpen />,
        title: "No knowledge base to draw from",
        seoTitle: "WhatsApp Bot Knowledge Base Training — Learn From Your Own Content",
        metaTitle: "WhatsApp Bot Knowledge Base Software | PrepWhatBot",
        metaDescription: "Feed PrepWhatBot your website, brochures and PDFs — it learns your business and answers from your own content, not guesswork.",
        keywords: "whatsapp bot knowledge base, ai trained on company documents, chatbot document training software",
        lead: "New hires hunt through PDFs and group chats just to answer a product question. Without a shared source of truth, answers vary depending on who happens to pick up the phone.",
        sections: [
            {
                heading: "Every answer traces back to something you wrote",
                body: "The bot's knowledge comes directly from your website, brochures and documents — not a generic model guessing at what your business might offer.",
            },
            {
                heading: "Correcting it is instant, not a re-training project",
                body: "If a price changes or a policy updates, editing the source document (or the FAQ entry) updates every future answer immediately — no waiting on a developer.",
            },
        ],
        bullets: [
            "Point it at your website — auto-crawls every page and stays in sync as you update content.",
            "Upload brochures & PDFs — product sheets, price lists, policy docs, straight into the bot's memory.",
            "FAQs in plain language — write once, the bot phrases every answer in your tone and words.",
            "Always editable — correct, add or retrain instantly, no developer required.",
        ],
        mockup: "knowledgeBase",
        stat: { value: "166", label: "pages indexed in a typical setup" },
        faqs: [
            { q: "What kinds of content can train the bot?", a: "Your website (auto-crawled), PDFs, Word documents and plain-language FAQs all feed directly into the knowledge base." },
            { q: "Do I need a developer to update what the bot knows?", a: "No — correcting, adding or retraining content is instant and doesn't require any development work." },
            { q: "How does the bot stay in sync when my website changes?", a: "The website source is auto-crawled and stays synced as you update content, without needing to manually re-upload anything." },
        ],
    },
    {
        slug: "bulk-outreach-risky",
        category: "The Problem",
        tone: "red",
        icon: <FiBell />,
        title: "Bulk outreach is risky or manual",
        seoTitle: "Compliant Bulk WhatsApp Campaigns — No Ban Risk",
        metaTitle: "Compliant Bulk WhatsApp Marketing Software | PrepWhatBot",
        metaDescription: "Reach your whole database on WhatsApp with pre-approved templates and the official Business API — no ban risk, no manual copy-pasting.",
        keywords: "bulk whatsapp marketing software, compliant whatsapp campaigns, whatsapp broadcast tool no ban",
        lead: "Copy-pasting one contact at a time, or an unofficial tool one ban away from silence — neither is a real way to run outreach to a database of thousands.",
        sections: [
            {
                heading: "Official API, approved templates",
                body: "Every broadcast runs through the official WhatsApp Business API using pre-approved templates, removing the ban risk that comes with unofficial bulk-messaging tools.",
            },
            {
                heading: "Segmented, not a single blunt list",
                body: "Contacts are segmented by tag, source, course, city or funnel stage, so a campaign reaches the right group with the right message instead of everyone getting the same broadcast.",
            },
        ],
        bullets: [
            "Segment your database — by tag, source, course, city or funnel stage, the right message to the right group.",
            "Approved templates — pre-approved WhatsApp templates, no ban risk, fully within policy.",
            "Schedule & automate — drip sequences, reminders and follow-ups run on autopilot.",
            "Real delivery numbers — sent, delivered, read and replied, tracked per campaign, live.",
        ],
        mockup: "bulkCampaigns",
        faqs: [
            { q: "Is there a risk of my WhatsApp number getting banned from bulk messaging?", a: "No — campaigns run through the official WhatsApp Business API with pre-approved templates, which is what keeps outreach fully within policy." },
            { q: "Can I target a specific segment of my database?", a: "Yes, by tag, source, course, city or funnel stage — campaigns aren't a single blunt broadcast to everyone." },
            { q: "Can campaigns be scheduled in advance?", a: "Yes, drip sequences, reminders and follow-ups can all be scheduled to run on autopilot." },
        ],
    },
    {
        slug: "after-hours-black-hole",
        category: "The Problem",
        tone: "red",
        icon: <FiMoon />,
        title: "After-hours is a black hole",
        seoTitle: "24/7 WhatsApp Auto-Reply for After-Hours & Weekend Enquiries",
        metaTitle: "24/7 WhatsApp Automation Software | PrepWhatBot",
        metaDescription: "Evenings, weekends and holidays no longer mean silence. PrepWhatBot answers enquiries around the clock, every day of the year.",
        keywords: "24/7 whatsapp auto reply, after hours customer support automation, weekend whatsapp bot",
        lead: "Evenings, weekends, holidays — nobody's watching the phone, and enquiries pile up until the next business day, by which point plenty of them have already gone elsewhere.",
        sections: [
            {
                heading: "The same responsiveness, every hour of the week",
                body: "PrepWhatBot doesn't clock out — a message sent at 11pm on a Sunday gets the same instant, grounded answer as one sent at 11am on a Tuesday.",
            },
            {
                heading: "Nothing to catch up on Monday morning",
                body: "Because routine enquiries are handled as they arrive, there's no backlog of after-hours messages waiting for a human first thing the next business day.",
            },
        ],
        bullets: [
            "Instant, every time — no missed enquiry, day or night, weekday or holiday.",
            "Grounded in your knowledge base — no made-up answers, only what you've actually fed it.",
            "Smart escalation — urgent or complex conversations still reach a human the next time they're online.",
            "Hot-lead alerts flag high-intent after-hours conversations so nothing important waits until morning.",
        ],
        mockup: "aiReply",
        faqs: [
            { q: "Does the bot actually work at night and on weekends, or just during office hours?", a: "It runs continuously, 24/7 — there's no office-hours cutoff." },
            { q: "What happens to urgent after-hours conversations that need a human?", a: "They're flagged and queued for the team, with hot-lead alerts making sure high-intent conversations aren't buried by the time someone's back online." },
            { q: "Do customers realize they're talking to a bot after hours?", a: "The bot is transparent about being automated where appropriate, while still answering fully and immediately from your knowledge base." },
        ],
    },
    {
        slug: "no-record-of-conversations",
        category: "The Problem",
        tone: "red",
        icon: <FiFileText />,
        title: "No record of what was said",
        seoTitle: "WhatsApp Conversation History & Audit Trail Software",
        metaTitle: "WhatsApp Conversation Audit Trail Software | PrepWhatBot",
        metaDescription: "Every WhatsApp reply, bot or human, is logged, timestamped and attributed — no more scattered conversations across personal phones.",
        keywords: "whatsapp conversation history software, whatsapp audit trail, business whatsapp record keeping",
        lead: "Who was contacted, what was promised, what happened next — scattered across phones. Without a shared, permanent record, resolving a dispute means asking whoever happened to have the chat.",
        sections: [
            {
                heading: "One shared record, not five personal phones",
                body: "Every WhatsApp conversation lives in the shared inbox rather than an individual's personal device, so the record survives staff turnover and doesn't depend on anyone's memory.",
            },
            {
                heading: "Every reply attributed and timestamped",
                body: "A full audit trail logs whether the bot or a specific human sent each reply and when, so reconstructing what was promised to a customer takes seconds, not a search through someone's phone.",
            },
        ],
        bullets: [
            "One inbox, whole team — every WhatsApp conversation in a single, shared view.",
            "Full audit trail — every reply, bot or human, timestamped and attributed.",
            "Internal notes leave context for teammates that the customer never sees.",
            "Nothing lives only on a personal phone — the record survives staff turnover.",
        ],
        mockup: "sharedInbox",
        faqs: [
            { q: "Is there a record of every message sent to a customer?", a: "Yes, a full audit trail timestamps and attributes every reply, whether it came from the bot or a specific team member." },
            { q: "What happens to conversation history if an agent leaves the company?", a: "Nothing is lost — conversations live in the shared inbox, not on a personal device, so the history stays intact." },
            { q: "Can the team leave notes on a conversation that the customer won't see?", a: "Yes, internal notes are visible only to the team, giving context without exposing it to the customer." },
        ],
    },

    // ---------- Modules ----------
    {
        slug: "connect-whatsapp",
        category: "Module",
        tone: "blue",
        icon: <FiMessageCircle />,
        title: "Connect WhatsApp",
        seoTitle: "Connect Your WhatsApp Business Number in Minutes",
        metaTitle: "WhatsApp Business API Connection Software | PrepWhatBot",
        metaDescription: "Live on your number in minutes, not weeks — official WhatsApp Business API, quick QR connect, and multi-number management from one dashboard.",
        keywords: "whatsapp business api setup, connect whatsapp number to bot, whatsapp qr connect software",
        lead: "Live on your number in minutes, not weeks. Official WhatsApp Business API or a quick QR scan gets your bot answering on the number your customers already have saved.",
        sections: [
            {
                heading: "Compliant from day one",
                body: "Connecting through the official WhatsApp Business API means a verified green tick and full compliance, with none of the ban risk that comes from unofficial connection tools.",
            },
            {
                heading: "No number change, no customer confusion",
                body: "The bot goes live on the number you already use — customers never need to learn a new number or re-save a contact.",
            },
        ],
        bullets: [
            "Official WhatsApp Business API — verified green tick, fully compliant, no ban risk from unofficial tools.",
            "Keep your existing number — no need to port, replace, or ask customers to message somewhere new.",
            "Quick QR connect — scan once from the dashboard and your bot is live and answering.",
            "Multiple numbers, one dashboard — franchise or multi-branch? Connect and manage every number centrally.",
        ],
        mockup: "connect",
        faqs: [
            { q: "Do I need to change my WhatsApp number to use PrepWhatBot?", a: "No, you keep your existing number — there's no need to port it or ask customers to message somewhere new." },
            { q: "How long does it take to connect a number?", a: "A quick QR scan from the dashboard is typically all it takes, going live in minutes rather than weeks." },
            { q: "Can I connect more than one WhatsApp number?", a: "Yes, multiple numbers for different branches or franchises can all be connected and managed from one central dashboard." },
        ],
    },
    {
        slug: "knowledge-base-training",
        category: "Module",
        tone: "blue",
        icon: <FiBookOpen />,
        title: "Knowledge Base Training",
        seoTitle: "Train Your WhatsApp Bot on Your Website, Brochures & Docs",
        metaTitle: "WhatsApp Bot Knowledge Base Training Software | PrepWhatBot",
        metaDescription: "Feed PrepWhatBot your website, brochures and PDFs — it learns your business and phrases every answer in your own tone and words.",
        keywords: "whatsapp bot training software, ai chatbot document upload, knowledge base chatbot training",
        lead: "Feed it your website, brochures & docs — it learns your business. The bot's answers come directly from what you've actually published, not a generic guess.",
        sections: [
            {
                heading: "Multiple sources, one memory",
                body: "A crawled website, uploaded PDFs and plain-language FAQs all combine into a single knowledge base the bot draws every answer from.",
            },
            {
                heading: "Stays current without a re-training project",
                body: "Auto-retrain on edit means updating a price, a policy or an FAQ entry takes effect immediately — the bot never answers from stale information.",
            },
        ],
        bullets: [
            "Point it at your website — auto-crawls every page and stays in sync as you update content.",
            "Upload brochures & PDFs — product sheets, price lists, policy docs, straight into the bot's memory.",
            "FAQs in plain language — write once, the bot phrases every answer in your tone and words.",
            "Always editable — correct, add or retrain instantly, no developer required.",
        ],
        mockup: "knowledgeBase",
        faqs: [
            { q: "How many sources can train the bot at once?", a: "As many as you have — a website crawl plus multiple PDF and document uploads all combine into one knowledge base." },
            { q: "Does retraining happen automatically after an edit?", a: "Yes, auto-retrain on edit means content changes take effect right away." },
            { q: "Can I see which sources have been indexed successfully?", a: "Yes, the knowledge base dashboard shows each source's status and page coverage at a glance." },
        ],
    },
    {
        slug: "ai-auto-reply",
        category: "Module",
        tone: "blue",
        icon: <FiCheckCircle />,
        title: "AI Auto-Reply",
        seoTitle: "AI WhatsApp Auto-Reply — On-Brand Answers, 24/7",
        metaTitle: "AI WhatsApp Auto-Reply Software | PrepWhatBot",
        metaDescription: "Answers in seconds, pulled straight from your own content — instant, on-brand and grounded, with smart escalation to a human when needed.",
        keywords: "ai whatsapp auto reply software, on brand chatbot responses, whatsapp instant reply bot",
        lead: "Answers in seconds — pulled straight from your own content. Every reply is instant, grounded and consistently in your voice, with a human only a handoff away.",
        sections: [
            {
                heading: "Grounded answers, not generic ones",
                body: "Responses are pulled from your own knowledge base rather than invented, so the bot never promises something your business doesn't actually offer.",
            },
            {
                heading: "Escalates the moment it should",
                body: "Smart escalation recognizes when a conversation needs a human — a complaint, a negotiation, an unusual request — and hands it off with full context instead of forcing the customer through more automated replies.",
            },
        ],
        bullets: [
            "Instant, every time — no missed enquiry, day or night, weekday or holiday.",
            "Grounded in your knowledge base — no made-up answers, only what you've actually fed it.",
            "On-brand tone — friendly, professional, and consistently in your voice.",
            "Smart escalation — hands off to a human the moment a conversation needs one.",
        ],
        mockup: "aiReply",
        stat: { value: "78%", label: "typical bot resolution rate" },
        faqs: [
            { q: "How does the bot decide when to escalate to a human?", a: "It recognizes signals like a complaint, a negotiation or an unusual request that fall outside what its knowledge base can confidently answer." },
            { q: "Can the bot's tone be customized to match our brand voice?", a: "Yes, replies are phrased consistently in your tone, not a generic robotic script." },
            { q: "What percentage of conversations typically get resolved without a human?", a: "Around 78% in a typical deployment, though this varies by how complete the knowledge base is." },
        ],
    },
    {
        slug: "flow-builder",
        category: "Module",
        tone: "blue",
        icon: <FiGitBranch />,
        title: "No-Code Flow Builder",
        seoTitle: "No-Code WhatsApp Flow Builder — Design Conversations Visually",
        metaTitle: "No-Code WhatsApp Chatbot Flow Builder | PrepWhatBot",
        metaDescription: "Drag-and-drop menus, buttons and branching flows with native WhatsApp UI — previewable before anything goes live, no code required.",
        keywords: "no code whatsapp chatbot builder, whatsapp flow builder software, visual chatbot design tool",
        lead: "Design exact conversations — no code, no prompts. Drag-and-drop menus, forms and branching flows with real WhatsApp buttons, previewable before they go live.",
        sections: [
            {
                heading: "Built for exact conversations, not just prompts",
                body: "Bookings, orders and structured processes benefit from a fixed, designed flow rather than open-ended AI — the Flow Builder lets you lay that out visually, step by step.",
            },
            {
                heading: "Pairs with AI Auto-Reply, doesn't replace it",
                body: "A flow can hand off to the AI for open-ended questions mid-conversation, combining the predictability of a designed process with the flexibility of grounded AI answers.",
            },
        ],
        bullets: [
            "Drag-and-drop steps — welcome menus, forms, button & list replies, conditional branches, built visually.",
            "Pairs with AI auto-reply — use a fixed flow for bookings or orders, and let the AI handle open-ended questions.",
            "Native WhatsApp UI — real buttons, lists and quick replies, not just plain text prompts.",
            "Preview before you publish — step through the exact conversation a customer will see, before it goes live.",
        ],
        mockup: "flowBuilder",
        faqs: [
            { q: "Do I need to write code to build a flow?", a: "No, flows are built by dragging and dropping steps — no code or prompt engineering required." },
            { q: "Can a flow use real WhatsApp buttons and lists?", a: "Yes, flows use native WhatsApp UI elements — actual buttons, lists and quick replies, not plain text menus." },
            { q: "Can I test a flow before customers see it?", a: "Yes, you can preview and step through the exact conversation a customer will experience before publishing it." },
        ],
    },
    {
        slug: "bulk-campaigns",
        category: "Module",
        tone: "blue",
        icon: <FiSend />,
        title: "Bulk Campaigns",
        seoTitle: "Compliant Bulk WhatsApp Campaigns — Segmented & Scheduled",
        metaTitle: "Bulk WhatsApp Campaign Software | PrepWhatBot",
        metaDescription: "Reach thousands compliantly in one send — segmented broadcasts, approved templates, scheduling and live delivery tracking.",
        keywords: "bulk whatsapp campaign software, whatsapp broadcast marketing tool, segmented whatsapp messaging",
        lead: "Reach thousands, compliantly, in one send. Segment your database, send from approved templates, and track delivered, read and reply rates live.",
        sections: [
            {
                heading: "The right message to the right group",
                body: "Segmenting by tag, source, course, city or funnel stage means a campaign never blasts the same message at an entire database indiscriminately.",
            },
            {
                heading: "Numbers you can act on, not just a send confirmation",
                body: "Sent, delivered, read and replied are all tracked per campaign in real time, making it clear which broadcasts are actually working.",
            },
        ],
        bullets: [
            "Segment your database — by tag, source, course, city or funnel stage, the right message to the right group.",
            "Approved templates — pre-approved WhatsApp templates, no ban risk, fully within policy.",
            "Schedule & automate — drip sequences, reminders and follow-ups run on autopilot.",
            "Real delivery numbers — sent, delivered, read and replied, tracked per campaign, live.",
        ],
        mockup: "bulkCampaigns",
        stat: { value: "4,820", label: "contacts reached in a single campaign send" },
        faqs: [
            { q: "Can campaigns be sent to a specific segment instead of everyone?", a: "Yes, segmentation by tag, source, course, city or funnel stage is built in." },
            { q: "How do I know if a campaign actually worked?", a: "Sent, delivered, read and replied counts update live for every campaign, not just a one-time send confirmation." },
            { q: "Can drip sequences run automatically after the initial send?", a: "Yes, follow-ups and reminders can be scheduled to run on autopilot after the first message." },
        ],
    },
    {
        slug: "shared-inbox-handoff",
        category: "Module",
        tone: "blue",
        icon: <FiInbox />,
        title: "Shared Inbox & Human Handoff",
        seoTitle: "Shared WhatsApp Inbox With Seamless Human Handoff",
        metaTitle: "Shared WhatsApp Inbox Software | PrepWhatBot",
        metaDescription: "The bot handles the routine, your team handles the rest — one shared inbox, full context on handoff, and hot-lead alerts routed instantly.",
        keywords: "shared whatsapp inbox software, whatsapp bot human handoff, team whatsapp inbox tool",
        lead: "The bot handles the routine. Your team handles the rest. Every WhatsApp conversation lives in one shared view, with a seamless handoff the moment a human is actually needed.",
        sections: [
            {
                heading: "Full context, no re-asking the customer",
                body: "When a conversation escalates, the agent sees everything that happened before — nobody has to make the customer repeat themselves.",
            },
            {
                heading: "Never a double reply",
                body: "The moment a human picks up a chat, it's automatically locked from the bot, so a customer never gets two different, conflicting answers to the same message.",
            },
        ],
        bullets: [
            "Full context on handoff — the agent sees the entire conversation, no re-asking the customer.",
            "Hot-lead alerts — high-intent conversations are flagged and routed instantly.",
            "One inbox, whole team — every WhatsApp conversation in a single, shared view.",
            "Never double-reply — a chat picked up by a human is locked from the bot automatically.",
        ],
        mockup: "sharedInbox",
        faqs: [
            { q: "Does the agent see the full conversation history when a chat escalates?", a: "Yes, full context is available immediately, so the customer never has to repeat what they already said to the bot." },
            { q: "Can the bot and a human accidentally reply to the same message?", a: "No — once a human picks up a conversation, it's locked from the bot automatically to prevent double replies." },
            { q: "How are high-intent conversations surfaced to the team?", a: "Hot-lead alerts flag them and route them instantly, rather than leaving them to be found in a long queue." },
        ],
    },
    {
        slug: "team-roles",
        category: "Module",
        tone: "blue",
        icon: <FiUsers />,
        title: "Team & Roles",
        seoTitle: "Multi-Agent WhatsApp Management With Role-Based Access",
        metaTitle: "WhatsApp Team & Roles Management Software | PrepWhatBot",
        metaDescription: "Multiple agents, one number, zero confusion — role-based access, manual or auto-assignment, and a full audit trail on every reply.",
        keywords: "multi agent whatsapp software, whatsapp team inbox roles, role based access whatsapp business",
        lead: "Multiple agents. One number. Zero confusion. Every teammate works from the same number with the right level of access and a clean audit trail behind them.",
        sections: [
            {
                heading: "Everyone sees exactly what they should",
                body: "Owners get full visibility across every conversation; agents see only the chats assigned to them — no shared logins and no risk of two agents working the same customer unknowingly.",
            },
            {
                heading: "Assignment that fits how the team actually works",
                body: "Conversations can route round-robin, by segment, or be hand-picked for a specific agent, adapting to whatever assignment logic the team already uses.",
            },
        ],
        bullets: [
            "Role-based access — owners see everything, agents see only their assigned chats.",
            "Manual or auto-assignment — round-robin, by segment, or hand-picked per conversation.",
            "Internal notes — leave context for teammates that the customer never sees.",
            "Full audit trail — every reply, bot or human, timestamped and attributed.",
        ],
        mockup: "teamRoles",
        faqs: [
            { q: "Can agents see conversations that aren't assigned to them?", a: "No, agents see only their assigned chats; only the Owner role has full visibility across every conversation." },
            { q: "How are conversations assigned to agents?", a: "Either automatically — round-robin or by segment — or manually, hand-picked per conversation." },
            { q: "Is there a record of which agent handled which reply?", a: "Yes, a full audit trail timestamps and attributes every reply, whether from the bot or a specific agent." },
        ],
    },
    {
        slug: "crm-integrations",
        category: "Module",
        tone: "blue",
        icon: <FiRefreshCw />,
        title: "CRM Integrations",
        seoTitle: "WhatsApp CRM Integration — Every Lead, Already Synced",
        metaTitle: "WhatsApp CRM Integration Software | PrepWhatBot",
        metaDescription: "Every WhatsApp lead, already in your CRM — native two-way sync with HubSpot, Salesforce, Zoho, Prepseed CRM and PrepDesk.",
        keywords: "whatsapp crm integration, hubspot whatsapp sync, salesforce whatsapp integration software",
        lead: "Every WhatsApp lead, already in your CRM. Native connections to the tools your team already runs on mean no manual exports and no re-typing leads.",
        sections: [
            {
                heading: "Two-way sync, not a one-time export",
                body: "New WhatsApp conversations create or update contacts and deals automatically in HubSpot, and leads sync straight into Salesforce or Zoho pipelines — continuously, not as an occasional CSV dump.",
            },
            {
                heading: "Already on a Prepseed product? Zero setup",
                body: "Teams already running the Prepseed Real Estate CRM or PrepDesk get WhatsApp leads and conversations synced in natively, with nothing extra to configure.",
            },
        ],
        bullets: [
            "HubSpot: new conversations create or update contacts and deals automatically, logged as timeline activity.",
            "Salesforce / Zoho: leads, tags and conversation status sync straight into your existing pipeline.",
            "Prepseed CRM & PrepDesk: WhatsApp leads and conversations sync in natively, zero setup.",
            "More on request: Google Sheets, Zapier/Pabbly, Shopify/WooCommerce, Meta Click-to-WhatsApp Ads, Webhooks/REST API, Instagram & Messenger.",
        ],
        mockup: "integrations",
        stat: { value: "1 day", label: "typical integration setup time" },
        faqs: [
            { q: "Do I need a developer to connect my CRM?", a: "No — connecting accounts takes a few clicks and is typically set up in a day, with no developer required." },
            { q: "Does this create duplicate leads in my CRM?", a: "No, the sync is designed to create or update existing contacts and deals rather than duplicating records." },
            { q: "Can I map WhatsApp fields to my CRM's own schema?", a: "Yes, field mapping lets you match WhatsApp data to your CRM's exact structure." },
        ],
    },
    {
        slug: "analytics-reporting",
        category: "Module",
        tone: "blue",
        icon: <FiBarChart2 />,
        title: "Analytics & Reporting",
        seoTitle: "WhatsApp Bot Analytics — Resolution, Delivery & Reply Rates",
        metaTitle: "WhatsApp Analytics & Reporting Software | PrepWhatBot",
        metaDescription: "Know exactly how WhatsApp is performing in numbers — bot resolution rate, campaign performance, response time and lead funnel.",
        keywords: "whatsapp analytics software, chatbot performance reporting, whatsapp campaign analytics tool",
        lead: "Know exactly how WhatsApp is performing — in numbers. Bot resolution, campaign performance and response time, all tracked automatically.",
        sections: [
            {
                heading: "A resolution rate you can actually trust",
                body: "Bot resolution rate shows how many enquiries close without a human ever joining, tracked daily rather than estimated after the fact.",
            },
            {
                heading: "From enquiry to booked, fully traceable",
                body: "The lead funnel tracks enquiry through qualified through booked, all sourced straight from WhatsApp — so a booking can be traced back to the conversation that produced it.",
            },
        ],
        bullets: [
            "Bot resolution rate — how many enquiries close without a human ever joining.",
            "Campaign performance — delivery, read and reply rate, tracked per broadcast.",
            "Response time — first-reply and resolution time, measured automatically.",
            "Lead funnel — enquiry → qualified → booked, all sourced straight from WhatsApp.",
        ],
        mockup: "analytics",
        stat: { value: "2,340", label: "conversations tracked in a typical month" },
        faqs: [
            { q: "Can I see how a specific campaign performed?", a: "Yes, delivery, read and reply rate are tracked per broadcast, not just as an overall total." },
            { q: "How is response time measured?", a: "First-reply and resolution time are measured automatically for every conversation." },
            { q: "Does analytics show the full funnel from enquiry to booking?", a: "Yes, the lead funnel tracks enquiry through qualified through booked, sourced directly from WhatsApp activity." },
        ],
    },
    {
        slug: "whitelabel",
        category: "Module",
        tone: "blue",
        icon: <FiShield />,
        title: "Whitelabel",
        seoTitle: "White-Label WhatsApp Bot Software — Sold Under Your Own Brand",
        metaTitle: "White-Label WhatsApp Automation Software | PrepWhatBot",
        metaDescription: "Every PrepWhatBot deployment ships under your own brand — logo, domain, WhatsApp profile and reports. Prepseed stays invisible.",
        keywords: "white label whatsapp bot, whitelabel chatbot software, custom branded whatsapp automation",
        lead: "Sold and branded as your own product. Every deployment ships under the client's own brand — dashboard, WhatsApp business profile, reports and PDFs.",
        sections: [
            {
                heading: "Every customer touchpoint carries your brand",
                body: "Your logo and brand color appear across the dashboard and chat widget, and your business name, logo and greeting message are entirely yours on the WhatsApp profile itself.",
            },
            {
                heading: "Prepseed is the engine, never the name on screen",
                body: "Customers interact with your brand end to end — the domain, the WhatsApp profile, the exported reports — with Prepseed staying invisible underneath.",
            },
        ],
        bullets: [
            "Your logo & brand color applied across the dashboard, chat widget and every report.",
            "Your domain — bot.yourbrand.prepwhatbot.com — customers never see \"Prepseed.\"",
            "Your WhatsApp profile — business name, logo and greeting message are entirely yours.",
            "Your pricing — you decide what to charge your own clients or teams.",
        ],
        mockup: null,
        faqs: [
            { q: "Will customers ever see the Prepseed name?", a: "No, every customer-facing surface — dashboard, WhatsApp profile, reports — carries your brand only." },
            { q: "Can we run this on our own domain?", a: "Yes, the platform runs on your own domain rather than a shared prepseed.com subdomain." },
            { q: "Do we set our own pricing for clients or internal teams?", a: "Yes, you decide entirely what to charge — Prepseed's pricing to you is separate from what you charge onward." },
        ],
    },

    // ---------- Also built in ----------
    {
        slug: "multi-number-management",
        category: "Also built in",
        tone: "blue",
        icon: <FiHash />,
        title: "Multi-Number Management",
        seoTitle: "Manage Multiple WhatsApp Numbers From One Dashboard",
        metaTitle: "Multi-Number WhatsApp Management Software | PrepWhatBot",
        metaDescription: "Franchise or multi-branch? Connect and manage every WhatsApp number centrally, with per-number routing and reporting.",
        keywords: "multi number whatsapp business software, franchise whatsapp management, multi branch whatsapp bot",
        lead: "Franchise or multi-branch? Connect and manage every WhatsApp number centrally, instead of juggling a separate phone and login per location.",
        sections: [
            {
                heading: "One dashboard, every branch",
                body: "Each location's WhatsApp number connects into the same central dashboard, so oversight doesn't mean logging into five different accounts.",
            },
            {
                heading: "Reporting that still separates by number",
                body: "Routing and reporting stay per-number even though management is centralized, so performance at one branch is never lost in an aggregate total.",
            },
        ],
        bullets: [
            "One dashboard, every branch — no juggling separate phones or logins.",
            "Per-number routing & reporting keeps each location's performance visible.",
            "New numbers connect the same way — QR scan or Business API, in minutes.",
        ],
        mockup: null,
        faqs: [
            { q: "Can each branch have its own number but still report to head office?", a: "Yes, every number is managed centrally while routing and reporting stay separated per number." },
            { q: "Is there a limit to how many numbers can be connected?", a: "It scales from a single number to a full multi-branch or franchise network." },
            { q: "Does adding a new branch number take long to set up?", a: "No, each new number connects the same way as the first — a quick QR scan or Business API setup." },
        ],
    },
    {
        slug: "template-library",
        category: "Also built in",
        tone: "blue",
        icon: <FiTag />,
        title: "Approved Template Library",
        seoTitle: "Pre-Approved WhatsApp Template Library for Compliant Campaigns",
        metaTitle: "WhatsApp Template Library Software | PrepWhatBot",
        metaDescription: "Pre-approved WhatsApp templates ready for broadcasts, reminders and drip sequences — no ban risk, fully within policy.",
        keywords: "whatsapp template library software, approved whatsapp message templates, whatsapp broadcast compliance",
        lead: "Pre-approved WhatsApp templates ready for broadcasts, reminders and drip sequences — reusable across campaigns without a new approval cycle every time.",
        sections: [
            {
                heading: "Approval handled once, reused often",
                body: "Once a template is approved, it's available across every future campaign of that type, instead of resubmitting similar wording for approval each time.",
            },
            {
                heading: "Compliance built into the send, not bolted on after",
                body: "Because every broadcast draws from this approved library, there's no manual check needed before a campaign goes out — it's compliant by construction.",
            },
        ],
        bullets: [
            "No ban risk, fully within WhatsApp policy on every send.",
            "Reusable across campaigns — no re-approval for the same template type.",
            "New templates get approved fast when a new use case comes up.",
        ],
        mockup: null,
        faqs: [
            { q: "How long does it take to get a new template approved?", a: "Turnaround is fast compared to a typical WhatsApp Business API approval cycle, since the process is handled as part of the platform." },
            { q: "Can the same template be reused across multiple campaigns?", a: "Yes, once approved it stays available for reuse rather than needing re-approval each time." },
            { q: "Does using approved templates guarantee no ban risk?", a: "Using pre-approved templates through the official API keeps every send fully within WhatsApp's policy." },
        ],
    },
    {
        slug: "internal-notes-audit-trail",
        category: "Also built in",
        tone: "blue",
        icon: <FiEdit3 />,
        title: "Internal Notes & Audit Trail",
        seoTitle: "Internal Notes & Full Audit Trail for WhatsApp Conversations",
        metaTitle: "WhatsApp Internal Notes & Audit Trail Software | PrepWhatBot",
        metaDescription: "Leave context for teammates the customer never sees, with every reply — bot or human — timestamped and attributed.",
        keywords: "whatsapp internal notes software, whatsapp audit trail tool, team collaboration whatsapp inbox",
        lead: "Leave context for teammates that the customer never sees, with every reply timestamped and attributed — nothing depends on someone's memory of a conversation.",
        sections: [
            {
                heading: "Notes that stay internal",
                body: "A note left on a conversation is visible only to the team, giving context — \"already offered a discount, hold the line\" — without ever surfacing to the customer.",
            },
            {
                heading: "A trail that survives disputes and staff turnover",
                body: "Because every reply is attributed and timestamped, reconstructing exactly what was said and by whom takes seconds, long after the original conversation happened.",
            },
        ],
        bullets: [
            "Notes invisible to the customer, visible to the whole team.",
            "Every reply attributed, whether sent by the bot or a specific human.",
            "Full history, never lost — survives staff turnover and device changes.",
        ],
        mockup: null,
        faqs: [
            { q: "Can customers see internal notes left on their conversation?", a: "No, internal notes are visible only to your team, never to the customer." },
            { q: "Is it possible to tell who sent a specific reply?", a: "Yes, every reply is attributed and timestamped, whether it came from the bot or a named team member." },
            { q: "What happens to the conversation record if an agent leaves?", a: "The record stays intact in the shared inbox — nothing is tied to a personal device or account that leaves with them." },
        ],
    },
    {
        slug: "hot-lead-alerts",
        category: "Also built in",
        tone: "blue",
        icon: <FiZap />,
        title: "Hot-Lead Alerts",
        seoTitle: "AI Hot-Lead Detection for WhatsApp Conversations",
        metaTitle: "WhatsApp Hot-Lead Alert Software | PrepWhatBot",
        metaDescription: "High-intent WhatsApp conversations are flagged automatically and routed to the right agent instantly — never buried in a queue.",
        keywords: "whatsapp hot lead detection, ai lead scoring whatsapp, high intent conversation alerts",
        lead: "High-intent conversations are flagged and routed instantly — a customer ready to book shouldn't wait behind a queue of routine questions.",
        sections: [
            {
                heading: "Flagged the moment intent shows up",
                body: "Signals like a booking request, a pricing negotiation, or repeated engagement are detected automatically, without anyone needing to monitor the inbox manually for them.",
            },
            {
                heading: "Routed instantly, not discovered later",
                body: "A flagged conversation goes straight to an available agent rather than sitting in a general queue where it might not be noticed for a while.",
            },
        ],
        bullets: [
            "Flagged the moment intent is detected, not after the fact.",
            "Routed instantly to the right available agent.",
            "Never buried in a long queue of routine conversations.",
        ],
        mockup: "sharedInbox",
        faqs: [
            { q: "What counts as a hot lead in a WhatsApp conversation?", a: "Signals like a booking request, a pricing negotiation, or repeated high engagement are used to flag high-intent conversations automatically." },
            { q: "Does a hot-lead flag interrupt the bot's normal handling?", a: "It prioritizes routing to a human agent instantly rather than letting the conversation continue purely on autopilot." },
            { q: "Can hot-lead alerts be seen by the whole team or just one agent?", a: "They route to the right available agent, keeping response fast rather than requiring the whole team to monitor for them." },
        ],
    },

    // ---------- Roles ----------
    {
        slug: "owner",
        category: "Team Role",
        tone: "green",
        icon: <FiShield />,
        title: "Owner",
        seoTitle: "PrepWhatBot for Owners — Full Visibility, Full Control",
        metaTitle: "WhatsApp Automation Software for Business Owners | PrepWhatBot",
        metaDescription: "Owners see every conversation, every campaign and every report, with control over agents, roles and integrations.",
        keywords: "whatsapp business owner dashboard, whatsapp automation admin access, business whatsapp control panel",
        lead: "Sees every conversation, every campaign and every report. Controls agents, roles and integrations — the one role with the complete picture.",
        sections: [
            {
                heading: "Nothing scoped away",
                body: "Unlike agents, whose access is limited to their own assigned chats, the Owner role sees the full inbox, every campaign result and every analytics number.",
            },
            {
                heading: "Controls who else sees what",
                body: "Agent accounts, role permissions and every CRM or third-party integration are managed from the Owner account, keeping platform-wide settings in one place.",
            },
        ],
        bullets: [
            "Full visibility across every conversation, campaign and report.",
            "Controls agent accounts, role permissions and integrations.",
            "The only role with the complete, unscoped view of the business.",
            "Sets assignment rules — round-robin, by segment, or manual — for the whole team.",
        ],
        mockup: "teamRoles",
        faqs: [
            { q: "Is the Owner the only role with full visibility?", a: "Yes — Sales Agent and Support Agent roles are scoped to their assigned chats; only Owner sees everything." },
            { q: "Can an Owner change how conversations get assigned to agents?", a: "Yes, assignment rules — round-robin, by segment, or manual — are configured from the Owner account." },
            { q: "Does the Owner manage integrations and billing?", a: "Yes, CRM connections and other integrations are managed at the Owner level." },
        ],
    },
    {
        slug: "sales-agent",
        category: "Team Role",
        tone: "green",
        icon: <FiUserCheck />,
        title: "Sales Agent",
        seoTitle: "Sales Agent WhatsApp Workspace — Assigned Chats & Templates",
        metaTitle: "WhatsApp Sales Agent Software | PrepWhatBot",
        metaDescription: "Works assigned and auto-routed chats, sends approved templates, and books calls straight from the inbox.",
        keywords: "whatsapp sales agent tool, sales team whatsapp inbox, whatsapp lead follow up software",
        lead: "Works assigned and auto-routed chats, sends templates, and books calls straight from the inbox — a focused workspace for closing, not managing the whole platform.",
        sections: [
            {
                heading: "A queue built for selling, not administration",
                body: "A Sales Agent opens their assigned chats and hot-lead alerts routed to them, without needing to sort through the full company inbox first.",
            },
            {
                heading: "Templates and booking, without leaving the chat",
                body: "Approved templates and call-booking actions are available directly inside the conversation, so following up on a lead doesn't mean switching to a separate tool.",
            },
        ],
        bullets: [
            "Sees only their assigned and auto-routed conversations.",
            "Sends approved templates directly from the chat.",
            "Books calls and logs outcomes without leaving the conversation.",
            "Hot-lead alerts surface high-intent chats the moment they're flagged.",
        ],
        mockup: "teamRoles",
        faqs: [
            { q: "Can a Sales Agent see chats assigned to other agents?", a: "No, visibility is scoped to their own assigned and auto-routed conversations." },
            { q: "Can templates be sent directly from an assigned chat?", a: "Yes, approved templates are available inside the conversation itself." },
            { q: "Do Sales Agents get notified of hot leads?", a: "Yes, hot-lead alerts route high-intent conversations to them directly." },
        ],
    },
    {
        slug: "support-agent",
        category: "Team Role",
        tone: "green",
        icon: <FiHeadphones />,
        title: "Support Agent",
        seoTitle: "Support Agent WhatsApp Workspace — Escalations With Full Context",
        metaTitle: "WhatsApp Support Agent Software | PrepWhatBot",
        metaDescription: "Handles escalated and hot-lead conversations handed off by the bot, with full context on arrival — no re-asking the customer.",
        keywords: "whatsapp support agent software, customer support whatsapp handoff, whatsapp escalation management",
        lead: "Handles escalated and hot-lead conversations handed off by the bot, with full context on arrival — no starting from zero on a conversation already in progress.",
        sections: [
            {
                heading: "Picks up exactly where the bot left off",
                body: "When a conversation escalates, the Support Agent sees the entire history — what was asked, what the bot already answered — instead of asking the customer to repeat themselves.",
            },
            {
                heading: "Notes for the next person, if it escalates further",
                body: "Internal notes let a Support Agent leave context for a manager or another teammate if a conversation needs to move again, keeping the thread coherent across handoffs.",
            },
        ],
        bullets: [
            "Receives escalated conversations from the bot with full context attached.",
            "Sees hot-lead and complaint-flagged chats routed specifically to them.",
            "Leaves internal notes for teammates without the customer seeing them.",
            "Works from the same shared inbox as Sales Agents, scoped to their own queue.",
        ],
        mockup: "sharedInbox",
        faqs: [
            { q: "Does a Support Agent need the customer to repeat their issue after a bot handoff?", a: "No, the full conversation context is available immediately on handoff." },
            { q: "Can a Support Agent escalate a conversation further, to a manager for example?", a: "Yes, internal notes let them pass context along if a conversation needs further escalation." },
            { q: "Is a Support Agent's queue separate from a Sales Agent's?", a: "Yes, each agent role is scoped to its own assigned and routed conversations within the shared inbox." },
        ],
    },
];

export const detailsBySlug = details.reduce((acc, d) => {
    acc[d.slug] = d;
    return acc;
}, {});

export default details;
