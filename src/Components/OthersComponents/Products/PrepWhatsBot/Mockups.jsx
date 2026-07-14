import React from "react";
import { FiChevronLeft, FiVideo, FiPhoneCall, FiSmile, FiPaperclip, FiMic, FiMessageSquare } from "react-icons/fi";
import {
    qrConnect, kbStats, kbRows, aiReplyChat, flowChips, flowBranches, campaign,
    inboxRows, teamRows, analyticsStats, analyticsBars, analyticsRing, settingsRows,
} from "./PrepWhatsBotData";

const BrowserChrome = ({ url, children }) => (
    <div className="pwb-browser">
        <div className="pwb-browser-bar">
            <span className="pwb-browser-dot" />
            <span className="pwb-browser-dot" />
            <span className="pwb-browser-dot" />
            <span className="pwb-browser-url">{url}</span>
        </div>
        <div className="pwb-browser-body">{children}</div>
    </div>
);

export const QrConnectMockup = () => (
    <BrowserChrome url="yourbrand.prepwhatbot.com/connect">
        <div className="pwb-qrcard">
            <span className="pwb-qr-badge"><FiMessageSquare /></span>
            <div>
                <div className="pwb-qr-number">{qrConnect.number}</div>
                <div className="pwb-qr-status"><span className="pwb-live-dot" />{qrConnect.status}</div>
            </div>
            <div className="pwb-qrbox">
                {Array.from({ length: 64 }, (_, i) => (
                    <i key={i} className={(i * 37 + 5) % 5 === 0 ? "off" : ""} />
                ))}
            </div>
            <span className="pwb-qr-caption">Scan with WhatsApp Business to link</span>
        </div>
    </BrowserChrome>
);

export const KnowledgeBaseMockup = () => (
    <BrowserChrome url="yourbrand.prepwhatbot.com/knowledge">
        <div className="pwb-stat-row">
            {kbStats.map((s) => (
                <div className="pwb-stat-tile tone-wa" key={s.label}>
                    <span className="pwb-stat-label">{s.label}</span>
                    <span className="pwb-stat-value">{s.value}</span>
                    <span className="pwb-stat-sub">{s.sub}</span>
                </div>
            ))}
        </div>
        <div className="pwb-table" style={{ marginTop: 14 }}>
            <div className="pwb-table-head"><span>Source</span><span>Type</span><span>Status</span></div>
            {kbRows.map((r) => (
                <div className="pwb-table-row" key={r.source}>
                    <span>{r.source}</span>
                    <span>{r.type}</span>
                    <span className={`pwb-status-pill ${r.status === "Indexed" ? "status-active" : "status-inactive"}`}>{r.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const AiReplyMockup = () => (
    <div className="pwb-phone-frame">
        <span className="pwb-phone-notch" />
        <div className="pwb-phone-screen">
            <div className="pwb-phone-chrome">
                <div className="pwb-phone-statusbar">
                    <span>9:41</span>
                    <span className="pwb-phone-status-icons">•••• 5G 🔋</span>
                </div>
                <div className="pwb-phone-head">
                    <FiChevronLeft className="pwb-phone-back" />
                    <span className="pwb-phone-avatar">YB</span>
                    <span className="pwb-phone-who">
                        <strong>Your Brand</strong>
                        <em>Business Account · online</em>
                    </span>
                    <FiVideo className="pwb-phone-icon" />
                    <FiPhoneCall className="pwb-phone-icon" />
                </div>
            </div>
            <div className="pwb-phone-body">
                {aiReplyChat.map((m, i) => (
                    <div className={`pwb-bubble ${m.from}`} key={i}>
                        <p>{m.text}</p>
                        <time>{m.time}</time>
                    </div>
                ))}
            </div>
            <div className="pwb-phone-input">
                <FiSmile className="pwb-phone-icon" />
                <span className="pwb-phone-input-box">Message</span>
                <FiPaperclip className="pwb-phone-icon" />
                <span className="pwb-phone-mic"><FiMic /></span>
            </div>
        </div>
        <span className="pwb-phone-home-indicator" />
    </div>
);

export const FlowBuilderMockup = () => (
    <BrowserChrome url="yourbrand.prepwhatbot.com/flows/new-enquiry">
        <div className="pwb-flow">
            <div className="pwb-fnode"><span className="pwb-fnode-tag trigger">Trigger</span>New WhatsApp Message</div>
            <div className="pwb-fline" />
            <div className="pwb-fnode pwb-fmenu">
                <div className="pwb-fmenu-row"><span className="pwb-fnode-tag msg">Send</span>Hi 👋 How can we help today?</div>
                <div className="pwb-fchips">
                    {flowChips.map((c) => <span className="pwb-fchip" key={c}>{c}</span>)}
                </div>
            </div>
            <div className="pwb-fline" />
            <div className="pwb-fbranch">
                {flowBranches.map((b) => (
                    <div className="pwb-fbranch-col" key={b}>
                        <div className="pwb-fnode"><span className="pwb-fnode-tag action">Action</span>{b}</div>
                    </div>
                ))}
            </div>
        </div>
    </BrowserChrome>
);

export const BulkCampaignsMockup = () => (
    <BrowserChrome url="yourbrand.prepwhatbot.com/campaigns">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <div style={{ fontSize: 13.5, fontWeight: 800, color: "var(--pwb-ink)" }}>{campaign.name}</div>
                <div style={{ fontSize: 10.5, color: "var(--pwb-muted)", marginTop: 2 }}>{campaign.segment}</div>
            </div>
            <span className="pwb-status-pill status-bot-handled">Sent</span>
        </div>
        <div className="pwb-bubble out" style={{ maxWidth: "100%", marginTop: 14 }}>{campaign.message}</div>
        <div className="pwb-stat-row" style={{ marginTop: 16 }}>
            {campaign.stats.map((s) => (
                <div className="pwb-stat-tile tone-wa" key={s.label}>
                    <span className="pwb-stat-label">{s.label}</span>
                    <span className="pwb-stat-value">{s.value}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const SharedInboxMockup = () => (
    <BrowserChrome url="yourbrand.prepwhatbot.com/inbox">
        <div className="pwb-table">
            <div className="pwb-table-head"><span>Contact</span><span>Status</span><span>Assigned</span></div>
            {inboxRows.map((r) => (
                <div className="pwb-table-row" key={r.name}>
                    <span><span className="pwb-avatar" style={{ background: r.color }}>{r.initial}</span>{r.name}</span>
                    <span className={`pwb-status-pill status-${r.status.replace(/\s+/g, "-").toLowerCase()}`}>{r.status}</span>
                    <span>{r.assigned || "—"}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const TeamRolesMockup = () => (
    <BrowserChrome url="yourbrand.prepwhatbot.com/team">
        <div className="pwb-table team">
            <div className="pwb-table-head"><span>Agent</span><span>Role</span><span>Active</span><span>Resolved</span></div>
            {teamRows.map((r) => (
                <div className="pwb-table-row" key={r.name}>
                    <span><span className="pwb-avatar" style={{ background: r.color }}>{r.initial}</span>{r.name}</span>
                    <span>{r.role}</span>
                    <span>{r.active}</span>
                    <span className="positive">{r.resolved}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const AnalyticsMockup = () => (
    <BrowserChrome url="yourbrand.prepwhatbot.com/analytics">
        <div className="pwb-stat-row">
            {analyticsStats.map((s) => (
                <div className={`pwb-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pwb-stat-label">{s.label}</span>
                    <span className="pwb-stat-value">{s.value}</span>
                    <span className="pwb-stat-sub">{s.sub}</span>
                </div>
            ))}
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 14, alignItems: "center" }}>
            <div style={{ flex: 1.3, border: "1px solid var(--pwb-border)", borderRadius: 10, padding: 12 }}>
                <div style={{ fontSize: 10.5, fontWeight: 800, color: "var(--pwb-ink)" }}>Conversations — Last 6 Days</div>
                <div className="pwb-wa-bars" style={{ marginTop: 10 }}>
                    {analyticsBars.map((v, i) => (
                        <span className="pwb-bar" style={{ height: `${(v / Math.max(...analyticsBars)) * 100}%` }} key={i}>{v}</span>
                    ))}
                </div>
            </div>
            <div className="pwb-ring-row" style={{ flex: 1, border: "1px solid var(--pwb-border)", borderRadius: 10, padding: 14 }}>
                <span className="pwb-ring" style={{ "--pwb-ring-val": analyticsRing.value }}>
                    <span className="pwb-ring-inner"><b>{analyticsRing.value}%</b><span>{analyticsRing.label}</span></span>
                </span>
                <div>
                    <strong style={{ fontSize: 12 }}>Bot Resolution</strong>
                    <p style={{ fontSize: 10.5, color: "var(--pwb-muted)", marginTop: 3, lineHeight: 1.5 }}>Enquiries closed without a human touch, tracked daily.</p>
                </div>
            </div>
        </div>
    </BrowserChrome>
);

export const IntegrationsMockup = () => (
    <BrowserChrome url="yourbrand.prepwhatbot.com/settings/integrations">
        {settingsRows.map((s) => (
            <div className="pwb-settings-row" key={s.name}>
                <span className="pwb-settings-app">
                    <span className="pwb-settings-icon" style={{ background: s.color }}>{s.initial}</span>
                    {s.name}
                </span>
                <span className="pwb-settings-toggle" />
            </div>
        ))}
    </BrowserChrome>
);
