import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: "#0B0F19",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#6366F1",
          fontWeight: 800,
          borderRadius: "36px",
          border: "4px solid #6366F1",
          fontFamily: "sans-serif",
        }}
      >
        KB
      </div>
    ),
    {
      ...size,
    }
  );
}
