import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";

export const alt = "Kawya Bogoda - Portfolio & Engineering Case Studies";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0B0F19",
          color: "#F1F5F9",
          padding: "60px",
          fontFamily: "sans-serif",
          border: "8px solid #6366F1",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#14B8A6",
            }}
          />
          <span style={{ fontSize: "24px", color: "#14B8A6", fontWeight: 600 }}>
            {profile.seekingRole}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 style={{ fontSize: "64px", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
            {profile.name}
          </h1>
          <p style={{ fontSize: "32px", color: "#818CF8", margin: 0, fontWeight: 600 }}>
            {profile.headline}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "2px solid #1E293B",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "20px", color: "#94A3B8" }}>
            📍 {profile.location}
          </span>
          <span style={{ fontSize: "20px", color: "#818CF8", fontWeight: 600 }}>
            Software & QA Engineering Portfolio
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
