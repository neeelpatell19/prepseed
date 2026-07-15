import React from "react";
import {
    enquiryColumns, studentProfile, attendanceCalendar, diaryEntries, parentApp, feeStats, feeRows,
    curriculumRows, curriculumProgress, transportRoute,
} from "./PrepSchoolData";

const BrowserChrome = ({ url, children }) => (
    <div className="psch-browser">
        <div className="psch-browser-bar">
            <span className="psch-browser-dot" />
            <span className="psch-browser-dot" />
            <span className="psch-browser-dot" />
            <span className="psch-browser-url">{url}</span>
        </div>
        <div className="psch-browser-body">{children}</div>
    </div>
);

const DOW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const EnquiryMockup = () => (
    <BrowserChrome url="yourbrand.prepschool.com/enquiries">
        <div className="psch-kanban">
            {enquiryColumns.map((col) => (
                <div className="psch-kanban-col" key={col.key}>
                    <div className="psch-kanban-head">
                        <span>{col.title}</span>
                        <span className="psch-kanban-count">{col.count}</span>
                    </div>
                    {col.cards.map((c) => (
                        <div className="psch-kanban-card" key={c.name}>
                            <strong style={{ display: "block" }}>{c.name}</strong>
                            <span style={{ fontSize: 11, color: "#99a3ad" }}>{c.meta}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const StudentProfileMockup = () => (
    <BrowserChrome url="yourbrand.prepschool.com/students/myra-nair">
        <div className="psch-profile-top">
            <span className="psch-profile-av">{studentProfile.name[0]}</span>
            <div>
                <b>{studentProfile.name}</b>
                <div className="psch-profile-meta">{studentProfile.meta}</div>
            </div>
        </div>
        <div className="psch-stat-row" style={{ marginTop: 14 }}>
            {studentProfile.stats.map((s) => (
                <div className={`psch-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="psch-stat-label">{s.label}</span>
                    <span className="psch-stat-value" style={{ fontSize: 14 }}>{s.value}</span>
                </div>
            ))}
        </div>
        <div className="psch-table" style={{ marginTop: 14 }}>
            <div className="psch-table-head"><span>Document</span><span>Type</span><span>Status</span></div>
            {studentProfile.documents.map((d) => (
                <div className="psch-table-row" key={d.name}>
                    <span>{d.name}</span>
                    <span className="muted">{d.type}</span>
                    <span className={`psch-status-pill status-${d.status.toLowerCase().replace(/ /g, "-")}`}>{d.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const AttendanceMockup = () => (
    <BrowserChrome url="yourbrand.prepschool.com/attendance">
        <div className="psch-cal-head">
            {attendanceCalendar.label}
            <span style={{ float: "right", fontWeight: 400, fontSize: 11, color: "var(--psch-muted)" }}>Month view</span>
        </div>
        <div className="psch-cal-grid">
            {DOW.map((d) => <div className="psch-cal-dow" key={d}>{d}</div>)}
            {attendanceCalendar.days.map((day, i) => (
                <div className={`psch-cal-cell ${day.tag ? "marked" : ""}`} key={i}>
                    {day.d}
                    {day.tag && <em>{day.tag}</em>}
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const DiaryMockup = () => (
    <BrowserChrome url="yourbrand.prepschool.com/diary/myra-nair">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <b style={{ fontSize: 12, color: "var(--psch-ink)" }}>Today's Diary — Myra Nair</b>
            <span style={{ fontSize: 10, color: "var(--psch-muted)", fontWeight: 700 }}>Auto-share to parent</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
            {diaryEntries.map((e) => (
                <div key={e.title} style={{ background: "var(--psch-orange-light)", borderRadius: 8, padding: "8px 10px" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "var(--psch-ink)" }}>{e.title}</div>
                    <div style={{ fontSize: 10, color: "var(--psch-muted)", marginTop: 4, background: "#fff", display: "inline-block", padding: "2px 6px", borderRadius: 6 }}>{e.time}</div>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const ParentAppMockup = () => (
    <div className="psch-phone-mockup">
        <span className="psch-phone-mockup-notch" />
        <div className="psch-phone-mockup-screen">
            <div className="psch-phone-mockup-head">{parentApp.greeting}, {parentApp.name}</div>
            <div className="psch-phone-mockup-body">
                <div style={{ display: "flex", gap: 6, marginBottom: 2, flexWrap: "wrap" }}>
                    {parentApp.tabs.map((t, i) => (
                        <span
                            key={t}
                            className="psch-chip"
                            style={i === 0 ? { background: "var(--psch-orange)", color: "#fff", fontWeight: 700 } : undefined}
                        >
                            {t}
                        </span>
                    ))}
                </div>
                {parentApp.timeline.map((t) => (
                    <div className={`psch-phone-card tone-${t.tone}`} key={t.label}>
                        {t.label} <span style={{ opacity: 0.6, fontWeight: 500 }}>· {t.meta}</span>
                    </div>
                ))}
                {parentApp.notices.map((n) => (
                    <div className="psch-phone-card tone-amber" key={n.title}>
                        <strong style={{ display: "block" }}>{n.title}</strong>
                        <span style={{ fontSize: 11, opacity: 0.65 }}>{n.meta} · {n.tag}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const FeeMockup = () => (
    <BrowserChrome url="yourbrand.prepschool.com/fees">
        <div className="psch-stat-row" style={{ gridTemplateColumns: "repeat(5, minmax(88px, 1fr))" }}>
            {feeStats.map((s) => (
                <div className={`psch-stat-tile tone-${s.tone}`} key={s.label}>
                    <span className="psch-stat-label">{s.label}</span>
                    <span className="psch-stat-value" style={{ fontSize: 16 }}>{s.value}</span>
                </div>
            ))}
        </div>
        <div className="psch-table team" style={{ marginTop: 14 }}>
            <div className="psch-table-head"><span>Student</span><span>Invoice</span><span>Amount</span><span>Status</span></div>
            {feeRows.map((r) => (
                <div className="psch-table-row" key={r.invoice}>
                    <span>{r.student}</span>
                    <span className="muted">{r.invoice}</span>
                    <span>{r.amount}</span>
                    <span className={`psch-status-pill status-${r.status.toLowerCase().replace(/ /g, "-")}`}>{r.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const CurriculumMockup = () => (
    <div>
        <BrowserChrome url="yourbrand.prepschool.com/curriculum/nursery-b">
            <b style={{ fontSize: 12, color: "var(--psch-ink)" }}>Week of 6 Apr — Nursery B</b>
            <div className="psch-table team" style={{ marginTop: 10 }}>
                <div className="psch-table-head"><span>Day</span><span>Theme</span><span>Activity</span><span>Skill</span></div>
                {curriculumRows.map((r) => (
                    <div className="psch-table-row" key={r.day}>
                        <span>{r.day}</span>
                        <span className="muted">{r.theme}</span>
                        <span>{r.activity}</span>
                        <span className="muted">{r.skill}</span>
                    </div>
                ))}
            </div>
        </BrowserChrome>
        <div className="psch-browser" style={{ marginTop: 14 }}>
            <div className="psch-browser-body" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span className="psch-ring" style={{ "--psch-ring-val": curriculumProgress.value }}>
                    <span className="psch-ring-inner"><b>{curriculumProgress.value}%</b><span>{curriculumProgress.label}</span></span>
                </span>
                <div>
                    <strong style={{ display: "block", fontSize: 13, color: "var(--psch-ink)" }}>{curriculumProgress.title}</strong>
                    <span style={{ fontSize: 11, color: "var(--psch-muted)" }}>{curriculumProgress.caption}</span>
                </div>
            </div>
        </div>
    </div>
);

export const TransportMockup = () => (
    <BrowserChrome url="yourbrand.prepschool.com/transport/route-4">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <b style={{ fontSize: 12, color: "var(--psch-ink)" }}>{transportRoute.label}</b>
            <span className="psch-status-pill status-on-route">{transportRoute.status}</span>
        </div>
        <div className="psch-map">
            <span className="psch-map-dot" style={{ top: "20%", left: "8%" }} />
            <span className="psch-map-dot" style={{ top: "55%", left: "38%" }} />
            <span className="psch-map-dot" style={{ top: "30%", left: "62%" }} />
            <span className="psch-map-dot bus" style={{ top: "58%", left: "84%" }} />
            <span className="psch-map-tag">{transportRoute.bus}</span>
        </div>
        <div className="psch-table" style={{ marginTop: 10 }}>
            <div className="psch-table-head"><span>Stop</span><span>ETA</span><span>Status</span></div>
            {transportRoute.stops.map((s) => (
                <div className="psch-table-row" key={s.stop}>
                    <span>{s.stop}</span>
                    <span className="muted">{s.eta}</span>
                    <span className={`psch-status-pill status-${s.status.toLowerCase()}`}>{s.status}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);
