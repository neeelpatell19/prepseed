import React from "react";
import { FiCheck } from "react-icons/fi";
import {
    billingStats, billingRows, purchaseStepper, vendorRows, inventoryStats, inventoryRows,
    manufacturingSteps, karigarRows, crmProfile, schemesStats, schemesCallout, repairSteps,
    repairTracking, reconciliationRows, hrStats, hrRows, maxsell, ownerDashboard,
    customerAppCards, settingsRows,
} from "./PrepJewelleryData";

const BrowserChrome = ({ url, children }) => (
    <div className="pjew-browser">
        <div className="pjew-browser-bar">
            <span className="pjew-browser-dot" />
            <span className="pjew-browser-dot" />
            <span className="pjew-browser-dot" />
            <span className="pjew-browser-url">{url}</span>
        </div>
        <div className="pjew-browser-body">{children}</div>
    </div>
);

const Stepper = ({ steps }) => (
    <div className="pjew-stepper">
        {steps.map((s) => (
            <div className={`pjew-stepper-step ${s.status}`} key={s.label}>
                <div className="pjew-stepper-dot">{s.status === "done" ? <FiCheck size={13} /> : ""}</div>
                <div className="pjew-stepper-lbl">{s.label}</div>
                {s.sub && <div className="pjew-stepper-time">{s.sub}</div>}
            </div>
        ))}
    </div>
);

export const BillingMockup = () => (
    <BrowserChrome url="counter-2.prepjewellery.com/bill">
        <div className="pjew-stat-row compact">
            {billingStats.map((s) => (
                <div className={`pjew-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pjew-stat-label">{s.label}</span>
                    <span className="pjew-stat-value">{s.value}</span>
                </div>
            ))}
        </div>
        <div className="pjew-table team" style={{ marginTop: 14 }}>
            <div className="pjew-table-head"><span>Item</span><span>Weight</span><span>Rate</span><span>Amount</span></div>
            {billingRows.map((r) => (
                <div className="pjew-table-row" key={r.item}>
                    <span>{r.item}</span>
                    <span>{r.weight}</span>
                    <span>{r.rate}</span>
                    <span>{r.amount}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const PurchaseMockup = () => (
    <div>
        <div className="pjew-browser">
            <div className="pjew-browser-body">
                <b style={{ fontSize: 12, color: "var(--pjew-ink)" }}>DC #10233 — Stock Release Gate</b>
                <div style={{ marginTop: 18 }}><Stepper steps={purchaseStepper} /></div>
            </div>
        </div>
        <div style={{ marginTop: 14 }}>
            <BrowserChrome url="purchase.prepjewellery.com/dc-10233">
                <div className="pjew-table team">
                    <div className="pjew-table-head"><span>Vendor</span><span>Quality</span><span>Delivery</span><span>Score</span></div>
                    {vendorRows.map((r) => (
                        <div className="pjew-table-row" key={r.vendor}>
                            <span>{r.vendor}</span>
                            <span>{r.quality}</span>
                            <span>{r.delivery}</span>
                            <span>{r.score}</span>
                        </div>
                    ))}
                </div>
            </BrowserChrome>
        </div>
    </div>
);

export const InventoryMockup = () => (
    <BrowserChrome url="yourbrand.prepjewellery.com/inventory">
        <div className="pjew-stat-row">
            {inventoryStats.map((s) => (
                <div className={`pjew-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pjew-stat-label">{s.label}</span>
                    <span className="pjew-stat-value">{s.value}</span>
                </div>
            ))}
        </div>
        <div className="pjew-table team" style={{ marginTop: 14 }}>
            <div className="pjew-table-head"><span>Product</span><span>Andheri</span><span>Borivali</span><span>Thane</span></div>
            {inventoryRows.map((r) => (
                <div className="pjew-table-row" key={r.product}>
                    <span>{r.product}</span>
                    <span style={r.lowIn === "andheri" ? { color: "var(--pjew-red)", fontWeight: 700 } : undefined}>{r.andheri}</span>
                    <span style={r.lowIn === "borivali" ? { color: "var(--pjew-red)", fontWeight: 700 } : undefined}>{r.borivali}</span>
                    <span style={r.lowIn === "thane" ? { color: "var(--pjew-red)", fontWeight: 700 } : undefined}>{r.thane}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const ManufacturingMockup = () => (
    <div className="pjew-browser">
        <div className="pjew-browser-body">
            <b style={{ fontSize: 12, color: "var(--pjew-ink)" }}>Job #MJ-2231 — 22K Bridal Necklace Set</b>
            <div style={{ marginTop: 18 }}><Stepper steps={manufacturingSteps} /></div>
        </div>
    </div>
);

export const KarigarMockup = () => (
    <BrowserChrome url="karigar.prepjewellery.com/ledger">
        <div className="pjew-table team">
            <div className="pjew-table-head"><span>Karigar</span><span>Issued (g)</span><span>Received (g)</span><span>Balance</span></div>
            {karigarRows.map((r) => (
                <div className="pjew-table-row" key={r.karigar}>
                    <span>{r.karigar}</span>
                    <span>{r.issued}</span>
                    <span>{r.received}</span>
                    <span className={`pjew-status-pill status-${r.balance.toLowerCase()}`}>{r.balance}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const CRMMockup = () => (
    <div className="pjew-profile-card">
        <div className="pjew-profile-top">
            <span className="pjew-profile-av">{crmProfile.name[0]}</span>
            <div><b>{crmProfile.name}</b><div className="pjew-profile-meta">{crmProfile.meta}</div></div>
        </div>
        <div className="pjew-stat-row" style={{ marginTop: 16 }}>
            {crmProfile.stats.map((s) => (
                <div className={`pjew-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pjew-stat-label">{s.label}</span>
                    <span className="pjew-stat-value">{s.value}</span>
                </div>
            ))}
        </div>
        <div className="pjew-table" style={{ marginTop: 14 }}>
            <div className="pjew-table-head"><span>Date</span><span>Interest</span><span>Follow-up</span></div>
            {crmProfile.rows.map((o) => (
                <div className="pjew-table-row" key={o.date}>
                    <span>{o.date}</span>
                    <span>{o.interest}</span>
                    <span>{o.followup}</span>
                </div>
            ))}
        </div>
    </div>
);

export const SchemesMockup = () => (
    <div>
        <div className="pjew-stat-row">
            {schemesStats.map((s) => (
                <div className={`pjew-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pjew-stat-label">{s.label}</span>
                    <span className="pjew-stat-value">{s.value}</span>
                </div>
            ))}
        </div>
        <div className="pjew-insight-card" style={{ marginTop: 16 }}>
            <span className="pjew-insight-icon"><FiCheck /></span>
            <div>
                <h4>{schemesCallout.title}</h4>
                <p>{schemesCallout.description}</p>
            </div>
        </div>
    </div>
);

export const RepairsMockup = () => (
    <div>
        <div className="pjew-browser">
            <div className="pjew-browser-body">
                <b style={{ fontSize: 12, color: "var(--pjew-ink)" }}>Repair #RP-5521 — Ring Resizing</b>
                <div style={{ marginTop: 18 }}><Stepper steps={repairSteps} /></div>
            </div>
        </div>
        <div style={{ marginTop: 14 }}>
            <BrowserChrome url={repairTracking.url}>
                <p className="pjew-tracking-caption">{repairTracking.caption}</p>
            </BrowserChrome>
        </div>
    </div>
);

export const AccountsMockup = () => (
    <BrowserChrome url="accounts.prepjewellery.com/reconciliation">
        <b style={{ fontSize: 12, color: "var(--pjew-ink)" }}>Bank Reconciliation — HDFC Current A/C</b>
        <div className="pjew-table" style={{ marginTop: 12 }}>
            <div className="pjew-table-head"><span>Bank Line</span><span>Matched Voucher</span><span>Status</span></div>
            {reconciliationRows.map((r) => (
                <div className="pjew-table-row" key={r.bankLine}>
                    <span>{r.bankLine}</span>
                    <span>{r.voucher}</span>
                    <span className={`pjew-status-pill status-${r.status.toLowerCase()}`}>{r.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const HRMockup = () => (
    <BrowserChrome url="hr.prepjewellery.com/payroll">
        <div className="pjew-stat-row">
            {hrStats.map((s) => (
                <div className={`pjew-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pjew-stat-label">{s.label}</span>
                    <span className="pjew-stat-value">{s.value}</span>
                </div>
            ))}
        </div>
        <div className="pjew-table team" style={{ marginTop: 14 }}>
            <div className="pjew-table-head"><span>Staff</span><span>Attendance</span><span>Incentive</span><span>Payroll</span></div>
            {hrRows.map((r) => (
                <div className="pjew-table-row" key={r.staff}>
                    <span>{r.staff}</span>
                    <span>{r.attendance}</span>
                    <span>{r.incentive}</span>
                    <span className="pjew-status-pill status-ready">{r.payroll}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const MaxSellMockup = () => (
    <div className="pjew-browser">
        <div className="pjew-browser-body">
            <div className="pjew-gauge-row">
                <span className="pjew-gauge" style={{ "--pjew-gauge-val": parseFloat(maxsell.gaugeValue) }}>
                    <span className="pjew-gauge-inner"><b>{maxsell.gaugeValue}</b><span>{maxsell.gaugeLabel}</span></span>
                </span>
                <div>
                    <strong style={{ display: "block", fontSize: 14, color: "var(--pjew-ink)" }}>{maxsell.cardTitle}</strong>
                    <span style={{ fontSize: 12, color: "var(--pjew-muted)" }}>{maxsell.caption}</span>
                </div>
            </div>
            <div style={{ marginTop: 18 }}><Stepper steps={maxsell.steps} /></div>
        </div>
    </div>
);

export const OwnerDashboardMockup = () => (
    <BrowserChrome url={ownerDashboard.url}>
        <div className="pjew-stat-row compact">
            {ownerDashboard.stats.map((s) => (
                <div className={`pjew-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pjew-stat-label">{s.label}</span>
                    <span className="pjew-stat-value">{s.value}</span>
                </div>
            ))}
        </div>
        <div className="pjew-table" style={{ marginTop: 14 }}>
            <div className="pjew-table-head"><span>Branch</span><span>Sales</span><span>Reorders</span></div>
            {ownerDashboard.branches.map((b) => (
                <div className="pjew-table-row" key={b.branch}>
                    <span>{b.branch}</span>
                    <span>{b.sales}</span>
                    <span>{b.reorders}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const CustomerAppMockup = () => (
    <div className="pjew-phone-mockup">
        <span className="pjew-phone-mockup-notch" />
        <div className="pjew-phone-mockup-screen">
            <div className="pjew-phone-mockup-head">Customer App</div>
            <div className="pjew-phone-mockup-body">
                {customerAppCards.map((c) => (
                    <div className={`pjew-phone-card tone-${c.tone}`} key={c.title}>{c.title}</div>
                ))}
            </div>
        </div>
    </div>
);

export const IntegrationsMockup = () => (
    <BrowserChrome url="yourbrand.prepjewellery.com/settings/integrations">
        {settingsRows.map((s) => (
            <div className="pjew-settings-row" key={s.name}>
                <span className="pjew-settings-app">
                    <span className="pjew-settings-icon" style={{ background: s.color }}>{s.initial}</span>
                    {s.name}
                </span>
                <span className="pjew-settings-toggle" />
            </div>
        ))}
    </BrowserChrome>
);
