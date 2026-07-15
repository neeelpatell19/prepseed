import React from "react";
import {
    orderColumns, quoteForm, artworkJob, billingStats, billingRows, inventoryRows, pressRows,
    customerProfile, purchaseRows, dispatchRows, whatsappOrder,
} from "./PrepPrintData";

const BrowserChrome = ({ url, children }) => (
    <div className="pprint-browser">
        <div className="pprint-browser-bar">
            <span className="pprint-browser-dot" />
            <span className="pprint-browser-dot" />
            <span className="pprint-browser-dot" />
            <span className="pprint-browser-url">{url}</span>
        </div>
        <div className="pprint-browser-body">{children}</div>
    </div>
);

const pill = (status) => `pprint-status-pill status-${status.toLowerCase().replace(/\s+/g, "-")}`;

export const OrderJobMockup = () => (
    <BrowserChrome url="yourbrand.prepprint.com/jobs">
        <div className="pprint-kanban">
            {orderColumns.map((col) => (
                <div className="pprint-kanban-col" key={col.key}>
                    <div className="pprint-kanban-head">
                        <span>{col.title}</span>
                        <span className="pprint-kanban-count">{col.count}</span>
                    </div>
                    {col.cards.map((c) => (
                        <div className="pprint-kanban-card" key={c.name}>
                            <strong style={{ display: "block" }}>{c.name}</strong>
                            <span style={{ fontSize: 11, color: "#99a3ad" }}>{c.meta}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const QuoteMockup = () => (
    <BrowserChrome url="yourbrand.prepprint.com/quote/new">
        <b style={{ fontSize: 12, color: "var(--pprint-ink)" }}>{quoteForm.title}</b>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 10, marginBottom: 12 }}>
            {quoteForm.fields.map((f) => (
                <div key={f.label} style={{ border: "1px solid var(--pprint-border)", borderRadius: 8, padding: "6px 10px" }}>
                    <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", color: "#99a3ad" }}>{f.label}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--pprint-blue)" }}>{f.value}</div>
                </div>
            ))}
        </div>
        <div className="pprint-table">
            <div className="pprint-table-head"><span>Line Item</span><span>Rate</span><span>Amount</span></div>
            {quoteForm.rows.map((r) => (
                <div className="pprint-table-row" key={r.item}>
                    <span>{r.item}</span>
                    <span className="muted">{r.rate}</span>
                    <span>{r.amount}</span>
                </div>
            ))}
            <div className="pprint-table-row">
                <span style={{ fontWeight: 700 }}>{quoteForm.total.label}</span>
                <span />
                <span style={{ fontWeight: 700, color: "var(--pprint-indigo)" }}>{quoteForm.total.amount}</span>
            </div>
        </div>
    </BrowserChrome>
);

export const ArtworkMockup = () => (
    <BrowserChrome url="yourbrand.prepprint.com/jobs/wedding-cards-mehta">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <b style={{ fontSize: 13, color: "var(--pprint-ink)" }}>{artworkJob.title}</b>
            <span className="pprint-status-pill status-active">{artworkJob.badge}</span>
        </div>
        <div style={{ position: "relative", aspectRatio: "16/7", borderRadius: 10, background: "linear-gradient(155deg, #eef0fd 0%, #dcdffa 100%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
            <span style={{ position: "absolute", top: 8, right: 8, fontSize: 9, fontWeight: 800, background: "var(--pprint-indigo)", color: "#fff", padding: "2px 6px", borderRadius: 4 }}>{artworkJob.previewTag}</span>
            <b style={{ fontSize: 13, color: "var(--pprint-indigo-dark)" }}>{artworkJob.previewName}</b>
        </div>
        <div className="pprint-table">
            <div className="pprint-table-head"><span>File</span><span>Uploaded</span><span>Format</span></div>
            {artworkJob.files.map((f) => (
                <div className="pprint-table-row" key={f.name}>
                    <span>{f.name}</span>
                    <span className="muted">{f.uploaded}</span>
                    <span className="muted">{f.format}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const BillingMockup = () => (
    <BrowserChrome url="yourbrand.prepprint.com/billing">
        <div className="pprint-stat-row" style={{ gridTemplateColumns: "repeat(5, minmax(88px, 1fr))" }}>
            {billingStats.map((s) => (
                <div className={`pprint-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pprint-stat-label">{s.label}</span>
                    <span className="pprint-stat-value" style={{ fontSize: 16 }}>{s.value}</span>
                </div>
            ))}
        </div>
        <div className="pprint-table brokers" style={{ marginTop: 14 }}>
            <div className="pprint-table-head"><span>Invoice</span><span>Customer</span><span>Job</span><span>Amount</span><span>Status</span></div>
            {billingRows.map((r) => (
                <div className="pprint-table-row" key={r.invoice}>
                    <span className="muted">{r.invoice}</span>
                    <span>{r.customer}</span>
                    <span className="muted">{r.job}</span>
                    <span>{r.amount}</span>
                    <span className={pill(r.status)}>{r.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const InventoryMockup = () => (
    <BrowserChrome url="yourbrand.prepprint.com/inventory">
        <div className="pprint-table team">
            <div className="pprint-table-head"><span>Material</span><span>In Stock</span><span>Reorder Level</span><span>Status</span></div>
            {inventoryRows.map((r) => (
                <div className="pprint-table-row" key={r.material}>
                    <span>{r.material}</span>
                    <span className="muted">{r.stock}</span>
                    <span className="muted">{r.reorder}</span>
                    <span className={pill(r.status)}>{r.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const PressScheduleMockup = () => (
    <BrowserChrome url="yourbrand.prepprint.com/press-schedule">
        <div className="pprint-table brokers">
            <div className="pprint-table-head"><span>Machine</span><span>Current Job</span><span>Operator</span><span>ETA</span><span>Status</span></div>
            {pressRows.map((r) => (
                <div className="pprint-table-row" key={r.machine}>
                    <span>{r.machine}</span>
                    <span className="muted">{r.job}</span>
                    <span className="muted">{r.operator}</span>
                    <span className="muted">{r.eta}</span>
                    <span className={pill(r.status)}>{r.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const CustomerHistoryMockup = () => (
    <BrowserChrome url="yourbrand.prepprint.com/customers/rane-family">
        <div className="pprint-profile-top">
            <span className="pprint-profile-av">{customerProfile.name[0]}</span>
            <div style={{ flex: 1 }}>
                <b>{customerProfile.name}</b>
                <div className="pprint-profile-meta">{customerProfile.meta}</div>
            </div>
            <span className="pprint-status-pill status-active">{customerProfile.tag}</span>
        </div>
        <div className="pprint-stat-row" style={{ marginTop: 16 }}>
            {customerProfile.stats.map((s) => (
                <div className={`pprint-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pprint-stat-label">{s.label}</span>
                    <span className="pprint-stat-value" style={{ fontSize: 14 }}>{s.value}</span>
                </div>
            ))}
        </div>
        <div className="pprint-table" style={{ marginTop: 14 }}>
            <div className="pprint-table-head"><span>Job</span><span>Date</span><span>Amount</span></div>
            {customerProfile.rows.map((o) => (
                <div className="pprint-table-row" key={o.job}>
                    <span>{o.job}</span>
                    <span className="muted">{o.date}</span>
                    <span>{o.amount}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const VendorPurchaseMockup = () => (
    <BrowserChrome url="yourbrand.prepprint.com/purchases">
        <div className="pprint-table brokers">
            <div className="pprint-table-head"><span>PO No.</span><span>Vendor</span><span>Material</span><span>Amount</span><span>Status</span></div>
            {purchaseRows.map((r) => (
                <div className="pprint-table-row" key={r.po}>
                    <span className="muted">{r.po}</span>
                    <span>{r.vendor}</span>
                    <span className="muted">{r.material}</span>
                    <span>{r.amount}</span>
                    <span className={pill(r.status)}>{r.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const DispatchMockup = () => (
    <BrowserChrome url="yourbrand.prepprint.com/dispatch">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <b style={{ fontSize: 12, color: "var(--pprint-ink)" }}>Dispatch — Today</b>
            <span className="pprint-status-pill status-out-for-delivery">3 out for delivery</span>
        </div>
        <div className="pprint-table">
            <div className="pprint-table-head"><span>Job</span><span>Fulfillment</span><span>Status</span></div>
            {dispatchRows.map((r) => (
                <div className="pprint-table-row" key={r.job}>
                    <span>{r.job}</span>
                    <span className="muted">{r.fulfillment}</span>
                    <span className={pill(r.status)}>{r.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const WhatsAppOrderMockup = () => (
    <div className="pprint-phone-mockup">
        <span className="pprint-phone-mockup-notch" />
        <div className="pprint-phone-mockup-screen">
            <div className="pprint-phone-mockup-head">{whatsappOrder.greeting}, {whatsappOrder.name}</div>
            <div className="pprint-phone-mockup-body">
                <div style={{ display: "flex", gap: 6, marginBottom: 2, flexWrap: "wrap" }}>
                    {whatsappOrder.tabs.map((t, i) => (
                        <span
                            key={t}
                            className="pprint-chip"
                            style={i === 0 ? { background: "var(--pprint-indigo)", color: "#fff", fontWeight: 700 } : undefined}
                        >
                            {t}
                        </span>
                    ))}
                </div>
                {whatsappOrder.timeline.map((t) => (
                    <div className={`pprint-phone-card tone-${t.tone}`} key={t.label}>
                        {t.label} <span style={{ opacity: 0.6, fontWeight: 500 }}>· {t.meta}</span>
                    </div>
                ))}
                {whatsappOrder.notices.map((n) => (
                    <div className="pprint-phone-card tone-amber" key={n.title}>
                        <strong style={{ display: "block" }}>{n.title}</strong>
                        <span style={{ fontSize: 11, opacity: 0.65 }}>{n.meta} · {n.tag}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
