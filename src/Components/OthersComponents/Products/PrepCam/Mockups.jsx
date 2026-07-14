import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import {
    rtspDetections, phoneDetection, ppeDetections, sopChecklist, attendanceRows,
    heatmapCells, alertsFeed, locationsRows, liveOverview,
} from "./PrepCamData";

const BrowserChrome = ({ url, children }) => (
    <div className="pcam-browser">
        <div className="pcam-browser-bar">
            <span className="pcam-browser-dot" />
            <span className="pcam-browser-dot" />
            <span className="pcam-browser-dot" />
            <span className="pcam-browser-url">{url}</span>
        </div>
        <div className="pcam-browser-body">{children}</div>
    </div>
);

// A plain outlined box with a text tag reads as a broken/empty frame — real
// detection UIs always show a silhouette *inside* the box the model actually
// found. Drawn as inline SVG/CSS (no raster images) to match the rest of
// this page's mockups.
const PersonSilhouette = () => (
    <svg className="pcam-silhouette" viewBox="0 0 24 40" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
        <circle cx="12" cy="7" r="6" />
        <path d="M2 40 C2 23 5 18 12 18 C19 18 22 23 22 40 Z" />
    </svg>
);

const accessoryGlyph = {
    phone: (
        <svg className="pcam-accessory pcam-accessory-phone" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <line x1="11" y1="18" x2="13" y2="18" />
        </svg>
    ),
    helmet: (
        <svg className="pcam-accessory pcam-accessory-helmet" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 13a9 9 0 0 1 18 0z" />
            <rect x="2" y="13" width="20" height="3" rx="1.2" />
        </svg>
    ),
};

const CameraFeed = ({ camId, zone, rtsp, boxes, footLeft, footRight, aspect, scene }) => (
    <div className="pcam-camfeed">
        <div className="pcam-cbar">
            <span className="pcam-cbar-id">{camId} · {zone} · {rtsp}</span>
            <span className="pcam-live"><i />LIVE</span>
        </div>
        <div className={`pcam-screen ${scene ? `scene-${scene}` : ""}`} style={aspect ? { aspectRatio: aspect } : undefined}>
            <div className="pcam-grain" />
            <div className="pcam-floor" />
            {boxes.map((b, i) => (
                <div
                    key={i}
                    className={`pcam-bbox tone-${b.tone}`}
                    style={{ top: b.top, left: b.left, width: b.width, height: b.height }}
                >
                    {b.figure === "person" && <PersonSilhouette />}
                    {b.accessory && accessoryGlyph[b.accessory]}
                    <span className="pcam-bbox-tag">{b.label}</span>
                </div>
            ))}
        </div>
        <div className="pcam-cfoot"><span>{footLeft}</span><span>{footRight}</span></div>
    </div>
);

export const RtspFeedMockup = () => <CameraFeed {...rtspDetections} />;
export const PhoneDetectionMockup = () => <CameraFeed {...phoneDetection} />;
export const PpeComplianceMockup = () => <CameraFeed {...ppeDetections} />;

export const SopMockup = () => (
    <div className="pcam-sop-card">
        <div className="pcam-sop-head">
            <span>{sopChecklist.heading}</span>
            <span className="pcam-sop-score">Live Score {sopChecklist.score}</span>
        </div>
        {sopChecklist.rows.map((r) => (
            <div className="pcam-sop-row" key={r.text}>
                <span className={`pcam-sop-chk ${r.ok ? "ok" : "bad"}`}>
                    {r.ok ? <FiCheck /> : <FiX />}
                </span>
                <span className="pcam-sop-text">{r.text}</span>
                <span className={`pcam-sop-note ${r.ok ? "ok" : "bad"}`}>{r.note}</span>
            </div>
        ))}
    </div>
);

export const AttendanceMockup = () => (
    <BrowserChrome url="yourbrand.prepcam.com/attendance">
        <div className="pcam-panel-head-row">
            <span className="pcam-panel-head">Camera Check-ins — Today</span>
            <span className="pcam-panel-sub">Store 3 · Entrance Cam</span>
        </div>
        <div className="pcam-attendance-table">
            <div className="pcam-attendance-head">
                <span>Employee</span><span>Event</span><span>Time</span><span>Confidence</span>
            </div>
            {attendanceRows.map((r) => (
                <div className="pcam-attendance-row" key={r.name}>
                    <span className="pcam-attendance-name"><i className="pcam-avatar">{r.initial}</i>{r.name}</span>
                    <span><span className={`pcam-pill tone-${r.tone}`}>{r.event}</span></span>
                    <span>{r.time}</span>
                    <span>{r.confidence}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const HeatmapMockup = () => (
    <div className="pcam-heatmap-card">
        <div className="pcam-heatmap-head">
            <span>Store Floor — Dwell Time, 12–2 PM</span>
            <span className="pcam-heatmap-scale">Low → High</span>
        </div>
        <div className="pcam-heatmap-grid">
            {heatmapCells.map((tone, i) => <span className={`pcam-h tone-${tone}`} key={i} />)}
        </div>
        <div className="pcam-heatmap-legend">
            <span><i className="tone-peak" />Checkout queue — peak dwell</span>
            <span><i className="tone-mid" />Staff coverage zone</span>
            <span><i className="tone-low" />Low traffic</span>
        </div>
    </div>
);

export const AlertsMockup = () => (
    <div className="pcam-alerts-list">
        {alertsFeed.map((a) => (
            <div className="pcam-alert-item" key={a.title}>
                <span className="pcam-alert-thumb" aria-hidden="true"><i /></span>
                <div className="pcam-alert-txt">
                    <b>{a.title}</b>
                    <span>{a.meta}</span>
                </div>
                <span className={`pcam-pill sev-${a.severity.toLowerCase()}`}>{a.severity}</span>
            </div>
        ))}
    </div>
);

export const LocationsMockup = () => (
    <BrowserChrome url="yourbrand.prepcam.com/locations">
        <div className="pcam-panel-head-row">
            <span className="pcam-panel-head">6 locations · 41 cameras</span>
        </div>
        <div className="pcam-locations-table">
            <div className="pcam-locations-head">
                <span>Location</span><span>Cameras</span><span>SOP Score</span><span>Alerts</span><span>Attendance</span><span>Status</span>
            </div>
            {locationsRows.map((r) => (
                <div className="pcam-locations-row" key={r.name}>
                    <span>{r.name}</span>
                    <span>{r.cameras}</span>
                    <span className={`tone-${r.tone}`}>{r.score}</span>
                    <span>{r.alerts}</span>
                    <span>{r.attendance}</span>
                    <span><span className={`pcam-pill tone-${r.tone === "good" ? "good" : "amber"}`}>{r.status}</span></span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);

export const LiveDashboardMockup = () => (
    <BrowserChrome url="yourbrand.prepcam.com/dashboard">
        <div className="pcam-stat-row">
            <div className="pcam-stat-tile tone-cam"><span className="pcam-stat-label">Cameras Live</span><span className="pcam-stat-value">{liveOverview.camerasLive}</span></div>
            <div className="pcam-stat-tile tone-green"><span className="pcam-stat-label">SOP Score</span><span className="pcam-stat-value">{liveOverview.sopScore}</span></div>
        </div>
        <div className="pcam-mini-locations">
            <div className="pcam-mini-locations-head"><span>Location</span><span>Alerts</span><span>Score</span></div>
            {liveOverview.rows.map((r) => (
                <div className="pcam-mini-locations-row" key={r.name}>
                    <span>{r.name}</span><span>{r.alerts}</span><span className={`tone-${r.tone}`}>{r.score}</span>
                </div>
            ))}
        </div>
    </BrowserChrome>
);
