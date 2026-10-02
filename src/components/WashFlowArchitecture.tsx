"use client";

import React from "react";

export function WashFlowArchitecture() {
  return (
    <figure className="w-full my-8 space-y-3">
      <div className="w-full overflow-x-auto rounded-card border border-border-subtle bg-card-surface p-4 sm:p-6 shadow-sm">
        <svg
          viewBox="0 0 840 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-w-[640px] text-text-primary"
          aria-label="WashFlow Microservices Architecture Diagram"
          role="img"
        >
          {/* Background Grid Pattern */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.05"
                strokeWidth="1"
              />
            </pattern>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent-primary)" />
            </marker>
            <marker
              id="arrow-teal"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent-precision)" />
            </marker>
          </defs>
          <rect width="840" height="500" fill="url(#grid)" rx="8" />

          {/* Docker Environment Outer Boundary */}
          <rect
            x="200"
            y="30"
            width="430"
            height="440"
            rx="12"
            fill="none"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeOpacity="0.4"
          />
          <text
            x="215"
            y="55"
            fill="var(--accent-primary)"
            fontSize="12"
            fontWeight="600"
            fontFamily="var(--font-jakarta), sans-serif"
          >
            🐳 Docker Containers Environment
          </text>

          {/* 1. React Frontend */}
          <g transform="translate(30, 200)">
            <rect
              width="130"
              height="80"
              rx="8"
              fill="var(--bg-surface)"
              stroke="var(--border-subtle)"
              strokeWidth="2"
            />
            <rect
              width="130"
              height="24"
              rx="8"
              fill="var(--accent-precision)"
              fillOpacity="0.15"
            />
            <text
              x="65"
              y="16"
              textAnchor="middle"
              fill="var(--accent-precision)"
              fontSize="11"
              fontWeight="700"
            >
              CLIENT LAYER
            </text>
            <text
              x="65"
              y="48"
              textAnchor="middle"
              fill="var(--text-primary)"
              fontSize="14"
              fontWeight="700"
            >
              React Frontend
            </text>
            <text
              x="65"
              y="65"
              textAnchor="middle"
              fill="var(--text-muted)"
              fontSize="10"
            >
              Web App UI
            </text>
          </g>

          {/* Arrow: Client -> Gateway */}
          <path
            d="M 160 240 L 225 240"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <text x="192" y="230" textAnchor="middle" fill="var(--text-muted)" fontSize="9">
            HTTPS / REST
          </text>

          {/* 2. API Gateway Container */}
          <g transform="translate(230, 130)">
            <rect
              width="160"
              height="220"
              rx="10"
              fill="var(--card-surface)"
              stroke="var(--accent-primary)"
              strokeWidth="2"
            />
            <text
              x="80"
              y="28"
              textAnchor="middle"
              fill="var(--accent-primary)"
              fontSize="13"
              fontWeight="700"
            >
              API Gateway
            </text>
            <line x1="15" y1="38" x2="145" y2="38" stroke="var(--border-subtle)" strokeWidth="1" />

            {/* Gateway Features */}
            <g transform="translate(15, 52)">
              <rect width="130" height="38" rx="4" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
              <text x="65" y="16" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">
                🔑 JWT Validation
              </text>
              <text x="65" y="30" textAnchor="middle" fill="var(--text-muted)" fontSize="8">
                Auth Token Inspection
              </text>
            </g>

            <g transform="translate(15, 98)">
              <rect width="130" height="38" rx="4" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
              <text x="65" y="16" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">
                🔀 Request Routing
              </text>
              <text x="65" y="30" textAnchor="middle" fill="var(--text-muted)" fontSize="8">
                Reverse Proxy
              </text>
            </g>

            <g transform="translate(15, 144)">
              <rect width="130" height="38" rx="4" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
              <text x="65" y="16" textAnchor="middle" fill="var(--text-primary)" fontSize="10" fontWeight="600">
                ⏱️ Rate Limiting
              </text>
              <text x="65" y="30" textAnchor="middle" fill="var(--text-muted)" fontSize="8">
                DDoS Protection
              </text>
            </g>
          </g>

          {/* Service Connections: Gateway -> Microservices with API Key Labels */}
          {/* Gateway -> Auth Service */}
          <path
            d="M 390 170 L 460 110"
            stroke="var(--accent-precision)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            markerEnd="url(#arrow-teal)"
          />
          <rect x="400" y="125" width="60" height="14" rx="3" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
          <text x="430" y="135" textAnchor="middle" fill="var(--accent-precision)" fontSize="8" fontWeight="600">
            API Key Key:1
          </text>

          {/* Gateway -> Catalog Service */}
          <path
            d="M 390 240 L 460 240"
            stroke="var(--accent-precision)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            markerEnd="url(#arrow-teal)"
          />
          <rect x="400" y="228" width="60" height="14" rx="3" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
          <text x="430" y="238" textAnchor="middle" fill="var(--accent-precision)" fontSize="8" fontWeight="600">
            API Key Key:2
          </text>

          {/* Gateway -> Order Service */}
          <path
            d="M 390 310 L 460 370"
            stroke="var(--accent-precision)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            markerEnd="url(#arrow-teal)"
          />
          <rect x="400" y="332" width="60" height="14" rx="3" fill="var(--bg-surface)" stroke="var(--border-subtle)" />
          <text x="430" y="342" textAnchor="middle" fill="var(--accent-precision)" fontSize="8" fontWeight="600">
            API Key Key:3
          </text>

          {/* 3. Auth / User Service */}
          <g transform="translate(470, 70)">
            <rect
              width="140"
              height="70"
              rx="8"
              fill="var(--card-surface)"
              stroke="var(--border-subtle)"
              strokeWidth="2"
            />
            <text x="70" y="28" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">
              Auth / User Service
            </text>
            <text x="70" y="46" textAnchor="middle" fill="var(--text-muted)" fontSize="10">
              Express / Node.js
            </text>
          </g>

          {/* 4. Catalog Service */}
          <g transform="translate(470, 205)">
            <rect
              width="140"
              height="70"
              rx="8"
              fill="var(--card-surface)"
              stroke="var(--border-subtle)"
              strokeWidth="2"
            />
            <text x="70" y="28" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">
              Catalog Service
            </text>
            <text x="70" y="46" textAnchor="middle" fill="var(--text-muted)" fontSize="10">
              Express / Node.js
            </text>
          </g>

          {/* 5. Order Service */}
          <g transform="translate(470, 340)">
            <rect
              width="140"
              height="70"
              rx="8"
              fill="var(--card-surface)"
              stroke="var(--border-subtle)"
              strokeWidth="2"
            />
            <text x="70" y="28" textAnchor="middle" fill="var(--text-primary)" fontSize="12" fontWeight="700">
              Order Service
            </text>
            <text x="70" y="46" textAnchor="middle" fill="var(--text-muted)" fontSize="10">
              Express / Node.js
            </text>
          </g>

          {/* Microservices -> MongoDB Atlas Database Connections */}
          <path d="M 610 105 L 670 210" stroke="var(--border-subtle)" strokeWidth="1.5" />
          <path d="M 610 240 L 670 240" stroke="var(--border-subtle)" strokeWidth="1.5" />
          <path d="M 610 375 L 670 270" stroke="var(--border-subtle)" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* 6. MongoDB Atlas */}
          <g transform="translate(680, 185)">
            <rect
              width="130"
              height="110"
              rx="12"
              fill="var(--bg-surface)"
              stroke="var(--accent-precision)"
              strokeWidth="2"
            />
            <path
              d="M 65 15 C 45 15 45 35 45 35 L 45 75 C 45 75 45 95 65 95 C 85 95 85 75 85 75 L 85 35 C 85 35 85 15 65 15 Z"
              fill="var(--accent-precision)"
              fillOpacity="0.1"
            />
            <text x="65" y="45" textAnchor="middle" fill="var(--accent-precision)" fontSize="13" fontWeight="700">
              MongoDB
            </text>
            <text x="65" y="62" textAnchor="middle" fill="var(--accent-precision)" fontSize="13" fontWeight="700">
              Atlas
            </text>
            <text x="65" y="85" textAnchor="middle" fill="var(--text-muted)" fontSize="9">
              Cloud Database
            </text>
          </g>
        </svg>
      </div>

      {/* Accessible Description for Screen Readers */}
      <figcaption className="sr-only">
        WashFlow Microservices Architecture Diagram showing React Frontend connecting via HTTPS/REST to API Gateway (handling JWT Validation, Request Routing, and Rate Limiting). Inside Docker containers, the API Gateway communicates with Auth/User Service, Catalog Service, and Order Service using service-to-service API keys. All microservices persist data to MongoDB Atlas cloud database.
      </figcaption>
    </figure>
  );
}
