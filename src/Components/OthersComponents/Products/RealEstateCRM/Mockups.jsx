import React from "react";
import { FiChevronLeft, FiVideo, FiPhoneCall, FiSmile, FiPaperclip, FiMic } from "react-icons/fi";
import {
    dashboardStats, actionCenterStats, actionCenterRows, leadManagerColumns,
    siteVisitCalendar, brokerRows, whatsappChat,
} from "./RealEstateCRMData";

const BrowserChrome = ({ url, children }) => (
    <div className="recrm-browser">
        <div className="recrm-browser-bar">
            <span className="recrm-browser-dot" />
            <span className="recrm-browser-dot" />
            <span className="recrm-browser-dot" />
            <span className="recrm-browser-url">{url}</span>
        </div>
        <div className="recrm-browser-body">{children}</div>
    </div>
);

export const DashboardMockup = () => (
    <BrowserChrome url="yourbrand.prepseed.com/dashboard">
        <div className="recrm-stat-row">
            {dashboardStats.map((s) => (
                <div className={`recrm-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="recrm-stat-label">{s.label}</span>
                    <span className="recrm-stat-value">{s.value}</span>
                    <span className="recrm-stat-sub">{s.sub}</span>
                </div>
            ))}
        </div>
        <div className="recrm-dash-lower">
            <div className="recrm-dash-panel">
                <div className="recrm-panel-head">Action Center</div>
                <div className="recrm-mini-row"><span>Aarav</span><span>28</span><span>4</span><span className="hl">12</span></div>
                <div className="recrm-mini-row"><span>Meera</span><span>22</span><span>2</span><span className="hl">9</span></div>
            </div>
            <div className="recrm-dash-panel">
                <div className="recrm-panel-head">WhatsApp Needs Reply</div>
                <div className="recrm-bars">
                    <span className="recrm-bar" style={{ height: "46%" }}>7</span>
                    <span className="recrm-bar" style={{ height: "30%" }}>4</span>
                    <span className="recrm-bar" style={{ height: "62%" }}>9</span>
                </div>
            </div>
        </div>
    </BrowserChrome>
);

export const ActionCenterMockup = () => (
    <BrowserChrome url="yourbrand.prepseed.com/action-center">
        <div className="recrm-stat-row compact">
            {actionCenterStats.map((s) => (
                <div className="recrm-stat-tile tone-blue" key={s.label}>
                    <span className="recrm-stat-label">{s.label}</span>
                    <span className="recrm-stat-value">{s.value}</span>
                </div>
            ))}
        </div>
        <div className="recrm-table">
            <div className="recrm-table-head">
                <span>Customer</span><span>Source</span><span>Status</span>
            </div>
            {actionCenterRows.map((r) => (
                <div className="recrm-table-row" key={r.name}>
                    <span>{r.name}{r.hot && <span className="recrm-hot-tag">Hot</span>}</span>
                    <span><i className={`recrm-source-dot ${r.source}`} /></span>
                    <span className={`recrm-status-pill status-${r.status.replace(/\s+/g, "-").toLowerCase()}`}>{r.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const LeadManagerMockup = () => (
    <BrowserChrome url="yourbrand.prepseed.com/leads">
        <div className="recrm-kanban">
            {leadManagerColumns.map((col) => (
                <div className="recrm-kanban-col" key={col.name}>
                    <div className="recrm-kanban-head"><span>{col.name}</span><span className="recrm-kanban-count">{col.count}</span></div>
                    {col.leads.map((lead) => (
                        <div className="recrm-kanban-card" key={lead}>{lead}</div>
                    ))}
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const SiteVisitsMockup = () => {
    const cells = Array.from({ length: 28 }, (_, i) => i + 2);
    return (
        <BrowserChrome url="yourbrand.prepseed.com/site-visits">
            <div className="recrm-cal-head">March 2026</div>
            <div className="recrm-cal-grid">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <span className="recrm-cal-dow" key={`${d}-${i}`}>{d}</span>
                ))}
                {cells.map((day) => {
                    const marked = siteVisitCalendar.find((v) => v.day === day);
                    return (
                        <span className={`recrm-cal-cell ${marked ? "marked" : ""}`} key={day}>
                            {day}
                            {marked && <em>{marked.visits} visits</em>}
                        </span>
                    );
                })}
            </div>
        </BrowserChrome>
    );
};

export const BrokersMockup = () => (
    <BrowserChrome url="yourbrand.prepseed.com/brokers">
        <div className="recrm-table brokers">
            <div className="recrm-table-head">
                <span>Broker</span><span>Leads</span><span>Converted</span><span>Conv.</span><span>Status</span>
            </div>
            {brokerRows.map((b) => (
                <div className="recrm-table-row" key={b.name}>
                    <span>
                        <strong>{b.name}</strong>
                        <em>{b.company}</em>
                    </span>
                    <span>{b.leads}</span>
                    <span>{b.converted}</span>
                    <span className={b.conv === "—" ? "muted" : "positive"}>{b.conv}</span>
                    <span className={`recrm-status-pill status-${b.status.toLowerCase()}`}>{b.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const WhatsAppMockup = () => (
    <div className="recrm-phone-frame">
        <span className="recrm-phone-notch" />
        <div className="recrm-phone-screen">
            <div className="recrm-phone-chrome">
                <div className="recrm-phone-statusbar">
                    <span>9:41</span>
                    <span className="recrm-phone-status-icons">•••• 5G 🔋</span>
                </div>
                <div className="recrm-phone-head">
                    <FiChevronLeft className="recrm-phone-back" />
                    <span className="recrm-phone-avatar">AC</span>
                    <span className="recrm-phone-who">
                        <strong>Your Brand</strong>
                        <em>online</em>
                    </span>
                    <FiVideo className="recrm-phone-icon" />
                    <FiPhoneCall className="recrm-phone-icon" />
                </div>
            </div>
            <div className="recrm-phone-body">
                {whatsappChat.map((m, i) => (
                    <div className={`recrm-bubble ${m.from}`} key={i}>
                        <p>{m.text}</p>
                        <time>{m.time}</time>
                    </div>
                ))}
            </div>
            <div className="recrm-phone-input">
                <FiSmile className="recrm-phone-icon" />
                <span className="recrm-phone-input-box">Message</span>
                <FiPaperclip className="recrm-phone-icon" />
                <span className="recrm-phone-mic"><FiMic /></span>
            </div>
        </div>
        <span className="recrm-phone-home-indicator" />
    </div>
);
