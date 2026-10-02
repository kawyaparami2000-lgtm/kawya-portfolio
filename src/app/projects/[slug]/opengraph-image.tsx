import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  const title = project ? project.title : "Case Study";
  const summary = project ? project.summary : "Engineering Case Study by Kawya Bogoda";

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
          border: "8px solid #14B8A6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              fontSize: "20px",
              color: "#818CF8",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Engineering Case Study • Kawya Bogoda
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 style={{ fontSize: "56px", fontWeight: 800, color: "#FFFFFF", margin: 0 }}>
            {title}
          </h1>
          <p style={{ fontSize: "28px", color: "#94A3B8", margin: 0, fontWeight: 500 }}>
            {summary}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            borderTop: "2px solid #1E293B",
            width: "100%",
            paddingTop: "24px",
          }}
        >
          {project?.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "18px",
                color: "#14B8A6",
                backgroundColor: "#1E293B",
                padding: "6px 16px",
                borderRadius: "20px",
                fontWeight: 600,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
