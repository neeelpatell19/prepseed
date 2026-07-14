import React from "react";
import { FiPause, FiSquare } from "react-icons/fi";
import {
    dashboardStats, dashboardTeamRows, dashboardProdBars, timerWidget, usageSplit, usageRows,
    screenshotTiles, attendanceCalendar, projectRows, settingsRows,
} from "./PrepDeskData";

const BrowserChrome = ({ url, children }) => (
    <div className="pdsk-browser">
        <div className="pdsk-browser-bar">
            <span className="pdsk-browser-dot" />
            <span className="pdsk-browser-dot" />
            <span className="pdsk-browser-dot" />
            <span className="pdsk-browser-url">{url}</span>
        </div>
        <div className="pdsk-browser-body">{children}</div>
    </div>
);

export const DashboardMockup = () => (
    <BrowserChrome url="yourbrand.prepdesk.com/dashboard">
        <div className="pdsk-stat-row six">
            {dashboardStats.map((s) => (
                <div className={`pdsk-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="pdsk-stat-label">{s.label}</span>
                    <span className="pdsk-stat-value">{s.value}</span>
                    <span className="pdsk-stat-sub">{s.sub}</span>
                </div>
            ))}
        </div>
        <div className="pdsk-dash-lower">
            <div className="pdsk-dash-panel">
                <div className="pdsk-panel-head">Team — Live</div>
                {dashboardTeamRows.map((r) => (
                    <div className="pdsk-mini-row" key={r.name}>
                        <span>{r.name}</span><span>{r.status}</span><span>{r.active}</span><span className="hl">{r.prod}</span>
                    </div>
                ))}
            </div>
            <div className="pdsk-dash-panel">
                <div className="pdsk-panel-head">Team Productivity Today</div>
                <div className="pdsk-bars">
                    {dashboardProdBars.map((v, i) => (
                        <span className="pdsk-bar" style={{ height: `${v}%` }} key={i}>{v}%</span>
                    ))}
                </div>
            </div>
        </div>
    </BrowserChrome>
);

export const TimeTrackerMockup = () => (
    <div className="pdsk-timer-widget">
        <div className="pdsk-timer-head">
            <span className="pdsk-timer-project">Project: {timerWidget.project}</span>
            <span className="pdsk-timer-badge">{timerWidget.badge}</span>
        </div>
        <div className="pdsk-timer-clock">{timerWidget.time}</div>
        <div className="pdsk-timer-meta">{timerWidget.meta}</div>
        <div className="pdsk-timer-actions">
            <button type="button" className="pdsk-timer-btn pause"><FiPause /> Pause</button>
            <button type="button" className="pdsk-timer-btn stop"><FiSquare /> Stop</button>
        </div>
    </div>
);

const categoryTone = { Productive: "active", Neutral: "starting", Unproductive: "over-budget" };

export const AppUsageMockup = () => (
    <BrowserChrome url="yourbrand.prepdesk.com/usage/aarav">
        <div className="pdsk-usage-split"><span>Today's Split</span><span>8h 12m tracked</span></div>
        <div className="pdsk-usage-bar">
            <span style={{ width: `${usageSplit.productive}%`, background: "var(--pdsk-green)" }} />
            <span style={{ width: `${usageSplit.neutral}%`, background: "var(--pdsk-amber)" }} />
            <span style={{ width: `${usageSplit.unproductive}%`, background: "var(--pdsk-red)" }} />
        </div>
        <div className="pdsk-usage-legend">
            <span><i style={{ background: "var(--pdsk-green)" }} />Productive {usageSplit.productive}%</span>
            <span><i style={{ background: "var(--pdsk-amber)" }} />Neutral {usageSplit.neutral}%</span>
            <span><i style={{ background: "var(--pdsk-red)" }} />Unproductive {usageSplit.unproductive}%</span>
        </div>
        <div className="pdsk-table">
            <div className="pdsk-table-head"><span>App / Website</span><span>Category</span><span>Time</span></div>
            {usageRows.map((r) => (
                <div className="pdsk-table-row" key={r.app}>
                    <span>{r.app}</span>
                    <span className={`pdsk-status-pill status-${categoryTone[r.category]}`}>{r.category}</span>
                    <span>{r.time}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const ScreenshotsMockup = () => (
    <BrowserChrome url="yourbrand.prepdesk.com/screenshots">
        <div className="pdsk-screenshot-grid">
            {screenshotTiles.map((t, i) => (
                <div className="pdsk-screenshot-tile" key={`${t.app}-${i}`}>
                    <span>{t.app}</span>
                    <time>{t.time}</time>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const AttendanceMockup = () => {
    const cells = Array.from({ length: 28 }, (_, i) => i + 2);
    return (
        <BrowserChrome url="yourbrand.prepdesk.com/attendance">
            <div className="pdsk-cal-head">March 2026</div>
            <div className="pdsk-cal-grid">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <span className="pdsk-cal-dow" key={`${d}-${i}`}>{d}</span>
                ))}
                {cells.map((day) => {
                    const marked = attendanceCalendar.find((v) => v.day === day);
                    return (
                        <span className={`pdsk-cal-cell ${marked ? `tone-${marked.tone}` : ""}`} key={day}>
                            {day}
                            {marked && <em>{marked.label}</em>}
                        </span>
                    );
                })}
            </div>
        </BrowserChrome>
    );
};

const burnTone = (burn) => (parseInt(burn, 10) > 100 ? "over-budget" : "active");

export const ProjectsMockup = () => (
    <BrowserChrome url="yourbrand.prepdesk.com/projects">
        <div className="pdsk-table brokers">
            <div className="pdsk-table-head">
                <span>Project</span><span>Budget</span><span>Logged</span><span>Burn</span><span>Status</span>
            </div>
            {projectRows.map((p) => (
                <div className="pdsk-table-row" key={p.project}>
                    <span>
                        <strong>{p.project}</strong>
                        <em>{p.client}</em>
                    </span>
                    <span>{p.budget}h</span>
                    <span>{p.logged}h</span>
                    <span className={parseInt(p.burn, 10) > 100 ? "muted" : "positive"}>{p.burn}</span>
                    <span className={`pdsk-status-pill status-${burnTone(p.burn)}`}>{p.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const IntegrationsMockup = () => (
    <BrowserChrome url="yourbrand.prepdesk.com/settings/integrations">
        {settingsRows.map((s) => (
            <div className="pdsk-settings-row" key={s.name}>
                <span className="pdsk-settings-app">
                    <span className="pdsk-settings-icon" style={{ background: s.color }}>{s.initial}</span>
                    {s.name}
                </span>
                <span className="pdsk-settings-toggle" />
            </div>
        ))}
    </BrowserChrome>
);
