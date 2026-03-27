import { Section } from "../Section";

export const About = ({ maxW }) => {
  return (
    <Section id="about">
      <div style={maxW}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "#00ff88",
              letterSpacing: "3px",
            }}
          >
            01.
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#f1f5f9",
            }}
          >
            About Me
          </h2>
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(0,255,136,0.3), transparent)",
            }}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 2,
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              I'm a results-driven Full Stack Engineer and Game Developer with a
              passion for building clean, scalable, and impactful digital
              products. Currently working at{" "}
              <span style={{ color: "#00ff88" }}>
                Ring System Development Inc.
              </span>
              , I specialize in crafting robust web applications using modern
              JavaScript ecosystems.
            </p>
            <p
              style={{
                color: "#94a3b8",
                lineHeight: 2,
                fontSize: "14px",
                marginBottom: "20px",
              }}
            >
              On the side, I dove into game development with{" "}
              <span style={{ color: "#ff6b35" }}>Tribes of Valrheim</span>,
              building gameplay systems in Godot Engine using GDScript and
              creating 3D assets in Blender — a testament to my love for
              creative engineering.
            </p>
            <p style={{ color: "#94a3b8", lineHeight: 2, fontSize: "14px" }}>
              Beyond code, I'm a{" "}
              <span style={{ color: "#38bdf8" }}>music producer</span>, video
              editor, and Kpop dance competition champion. I believe the best
              engineers are also creatives.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {[
              ["5+", "Years Experience"],
              ["10+", "Projects Shipped"],
              ["15+", "Tech Stack"],
              ["7", "Awards Won"],
            ].map(([v, l]) => (
              <div
                key={l}
                style={{
                  padding: "28px 24px",
                  border: "1px solid rgba(0,255,136,0.15)",
                  background: "rgba(0,255,136,0.02)",
                  borderRadius: "4px",
                  textAlign: "center",
                  animation: "float 4s ease-in-out infinite",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "42px",
                    fontWeight: 800,
                    color: "#00ff88",
                    lineHeight: 1,
                  }}
                >
                  {v}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#64748b",
                    marginTop: "8px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: "48px",
            padding: "28px 32px",
            border: "1px solid rgba(56,189,248,0.2)",
            background: "rgba(56,189,248,0.03)",
            borderRadius: "4px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <span style={{ color: "#38bdf8", fontSize: "18px" }}>🎓</span>
            <span
              style={{
                color: "#38bdf8",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              EDUCATIONAL ATTAINMENT
            </span>
          </div>
          <div
            style={{
              color: "#f1f5f9",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            Bachelor of Science in Information Technology
          </div>
          <div style={{ color: "#64748b", fontSize: "13px", marginTop: "4px" }}>
            University of Cebu – Main Campus · Sanciangko St, Cebu City · S.Y.
            2023–2024
          </div>
        </div>
      </div>
    </Section>
  );
};
