import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#0B0F19",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#6366F1",
          fontWeight: 800,
          borderRadius: "6px",
          border: "1px solid #6366F1",
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
