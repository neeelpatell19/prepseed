import React from "react";
import { FiCheck } from "react-icons/fi";
import {
    dashboardStats, dashboardChannels, storefrontProducts, cartItems, cartTotal, paymentMethods,
    orderSteps, orderRows, inventoryStats, inventoryRows, channels, shippingRates, funnelSteps,
    cartRecoveryInsight, customerProfile, reviews, settingsRows, storeHealth,
} from "./PrepCommerceData";

const BrowserChrome = ({ url, children }) => (
    <div className="pcom-browser">
        <div className="pcom-browser-bar">
            <span className="pcom-browser-dot" />
            <span className="pcom-browser-dot" />
            <span className="pcom-browser-dot" />
            <span className="pcom-browser-url">{url}</span>
        </div>
        <div className="pcom-browser-body">{children}</div>
    </div>
);

export const DashboardMockup = () => (
    <BrowserChrome url="yourbrand.prepcommerce.com/dashboard">
        <div className="pcom-stat-row">
            {dashboardStats.map((s) => (
                <div className={`pcom-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pcom-stat-label">{s.label}</span>
                    <span className="pcom-stat-value">{s.value}</span>
                    <span className="pcom-stat-sub">{s.sub}</span>
                </div>
            ))}
        </div>
        <div className="pcom-table" style={{ marginTop: 14 }}>
            <div className="pcom-table-head"><span>Channel</span><span>Orders</span><span>GMV</span></div>
            {dashboardChannels.map((c) => (
                <div className="pcom-table-row" key={c.channel}>
                    <span>{c.channel}</span>
                    <span>{c.orders}</span>
                    <span>{c.gmv}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const StorefrontMockup = () => (
    <BrowserChrome url="yourbrand.com">
        <div className="pcom-prod-grid">
            {storefrontProducts.map((p) => (
                <div className="pcom-ptile" key={p.name}>
                    <div className="pcom-ptile-img">
                        {p.badge && <span className={`pcom-ptile-badge ${p.badge === "SALE" ? "sale" : ""}`}>{p.badge}</span>}
                    </div>
                    <div className="pcom-ptile-info">
                        <b>{p.name}</b>
                        <div className="pcom-ptile-price">
                            {p.oldPrice && <span className="old">{p.oldPrice}</span>}
                            {p.price}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const CartMockup = () => (
    <div>
        <div className="pcom-cart-drawer">
            <div className="pcom-cart-head"><b>Your Cart</b><span>{cartItems.length} items</span></div>
            {cartItems.map((item) => (
                <div className="pcom-cart-row" key={item.name}>
                    <div className="pcom-cart-thumb" />
                    <div className="pcom-cart-row-t"><b>{item.name}</b><span>{item.meta}</span></div>
                    <div className="pcom-cart-amt">{item.amount}</div>
                </div>
            ))}
            <div className="pcom-cart-foot"><b style={{ fontSize: 12 }}>Total</b><b style={{ fontSize: 14 }}>{cartTotal}</b></div>
        </div>
        <div className="pcom-paymethods-label">Pay with</div>
        <div className="pcom-paymethods">
            {paymentMethods.map((m) => (
                <div className="pcom-paymethod" key={m.name}><i style={{ background: m.color }} />{m.name}</div>
            ))}
        </div>
    </div>
);

export const OrdersMockup = () => (
    <div>
        <div className="pcom-browser">
            <div className="pcom-browser-body">
                <b style={{ fontSize: 12, color: "var(--pcom-ink)" }}>Order #PC-10482 — Classic Tee, Relaxed Chinos</b>
                <div className="pcom-stepper" style={{ marginTop: 18 }}>
                    {orderSteps.map((s) => (
                        <div className={`pcom-stepper-step ${s.status}`} key={s.label}>
                            <div className="pcom-stepper-dot">{s.status === "done" ? <FiCheck size={13} /> : ""}</div>
                            <div className="pcom-stepper-lbl">{s.label}</div>
                            <div className="pcom-stepper-time">{s.time}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div style={{ marginTop: 14 }}>
            <BrowserChrome url="yourbrand.prepcommerce.com/orders">
                <div className="pcom-table brokers">
                    <div className="pcom-table-head"><span>Order</span><span>Channel</span><span>Customer</span><span>Amount</span><span>Status</span></div>
                    {orderRows.map((r) => (
                        <div className="pcom-table-row" key={r.order}>
                            <span>{r.order}</span>
                            <span>{r.channel}</span>
                            <span><span className="pcom-avatar" style={{ background: r.color }}>{r.initial}</span>{r.customer}</span>
                            <span>{r.amount}</span>
                            <span className={`pcom-status-pill status-${r.status.toLowerCase()}`}>{r.status}</span>
                        </div>
                    ))}
                </div>
            </BrowserChrome>
        </div>
    </div>
);

export const InventoryMockup = () => (
    <BrowserChrome url="yourbrand.prepcommerce.com/inventory">
        <div className="pcom-stat-row">
            {inventoryStats.map((s) => (
                <div className={`pcom-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pcom-stat-label">{s.label}</span>
                    <span className="pcom-stat-value">{s.value}</span>
                </div>
            ))}
        </div>
        <div className="pcom-table team" style={{ marginTop: 14 }}>
            <div className="pcom-table-head"><span>Product</span><span>Mumbai WH</span><span>Delhi WH</span><span>Bengaluru WH</span></div>
            {inventoryRows.map((r) => (
                <div className="pcom-table-row" key={r.product}>
                    <span>{r.product}</span>
                    <span style={r.lowIn === "mumbai" ? { color: "var(--pcom-red)", fontWeight: 700 } : undefined}>{r.mumbai}</span>
                    <span style={r.lowIn === "delhi" ? { color: "var(--pcom-red)", fontWeight: 700 } : undefined}>{r.delhi}</span>
                    <span style={r.lowIn === "bengaluru" ? { color: "var(--pcom-red)", fontWeight: 700 } : undefined}>{r.bengaluru}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const ChannelsMockup = () => (
    <div className="pcom-channel-grid">
        {channels.map((c) => (
            <div className="pcom-channel" key={c.name}>
                <span className="pcom-channel-icon"><FiCheck /></span>
                <div><b>{c.name}</b><span>● {c.status}</span></div>
            </div>
        ))}
    </div>
);

export const ShippingMockup = () => (
    <BrowserChrome url="yourbrand.prepcommerce.com/ship/PC-10482">
        <b style={{ fontSize: 12, color: "var(--pcom-ink)" }}>Rate Shopping — 500g, Mumbai → Pune</b>
        <div className="pcom-table" style={{ marginTop: 12 }}>
            <div className="pcom-table-head"><span>Courier</span><span>ETA</span><span>Rate</span></div>
            {shippingRates.map((r) => (
                <div className="pcom-table-row" key={r.courier}>
                    <span>{r.courier}</span>
                    <span>{r.eta}</span>
                    <span>
                        {r.rate}
                        {r.selected && <span className="pcom-status-pill status-selected" style={{ marginLeft: 8 }}>Selected</span>}
                    </span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const MarketingMockup = () => (
    <div>
        <div style={{ fontSize: 12, fontWeight: 800, color: "var(--pcom-ink)", marginBottom: 12 }}>Checkout Funnel — Last 7 Days</div>
        <div className="pcom-funnel">
            {funnelSteps.map((f) => (
                <div className="pcom-funnel-row" key={f.label}>
                    <div className="pcom-funnel-lbl">{f.label}</div>
                    <div className="pcom-funnel-track">
                        <div className="pcom-funnel-fill" style={{ width: `${f.pct}%`, background: f.color }}>
                            <span>{f.value}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="pcom-insight-card" style={{ marginTop: 16 }}>
            <span className="pcom-insight-icon"><FiCheck /></span>
            <div>
                <h4>{cartRecoveryInsight.title}</h4>
                <p>{cartRecoveryInsight.description}</p>
            </div>
        </div>
    </div>
);

export const ProfileMockup = () => (
    <div className="pcom-profile-card">
        <div className="pcom-profile-top">
            <span className="pcom-profile-av">{customerProfile.name[0]}</span>
            <div><b>{customerProfile.name}</b><div className="pcom-profile-meta">{customerProfile.meta}</div></div>
        </div>
        <div className="pcom-stat-row" style={{ marginTop: 16 }}>
            {customerProfile.stats.map((s) => (
                <div className={`pcom-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pcom-stat-label">{s.label}</span>
                    <span className="pcom-stat-value">{s.value}</span>
                </div>
            ))}
        </div>
        <div className="pcom-table" style={{ marginTop: 14 }}>
            <div className="pcom-table-head"><span>Order</span><span>Channel</span><span>Amount</span></div>
            {customerProfile.orders.map((o) => (
                <div className="pcom-table-row" key={o.order}>
                    <span>{o.order}</span>
                    <span>{o.channel}</span>
                    <span>{o.amount}</span>
                </div>
            ))}
        </div>
    </div>
);

export const ReviewsMockup = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {reviews.map((r) => (
            <div className="pcom-review-card" key={r.who}>
                <div className="pcom-stars">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
                <div className="pcom-review-who">{r.who}</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                {r.thumbs && (
                    <div className="pcom-review-thumbs">
                        <div className="pcom-review-thumb" />
                        <div className="pcom-review-thumb" style={{ background: "linear-gradient(155deg,#ffe9de,#ffd3bc)" }} />
                    </div>
                )}
            </div>
        ))}
    </div>
);

export const IntegrationsMockup = () => (
    <BrowserChrome url="yourbrand.prepcommerce.com/settings/integrations">
        {settingsRows.map((s) => (
            <div className="pcom-settings-row" key={s.name}>
                <span className="pcom-settings-app">
                    <span className="pcom-settings-icon" style={{ background: s.color }}>{s.initial}</span>
                    {s.name}
                </span>
                <span className="pcom-settings-toggle" />
            </div>
        ))}
    </BrowserChrome>
);

export const StoreHealthRing = () => (
    <span className="pcom-ring" style={{ "--pcom-ring-val": storeHealth.value }}>
        <span className="pcom-ring-inner"><b>{storeHealth.value}%</b><span>{storeHealth.label}</span></span>
    </span>
);
