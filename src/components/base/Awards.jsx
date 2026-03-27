import { AWARDS } from "../../constants/Awards";
import { Section } from "../Section";

export const Awards = ({ maxW }) => {
  return (
    <Section id="awards">
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
            05.
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#f1f5f9",
            }}
          >
            Awards
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
        <div style={{ display: "grid", gap: "12px" }}>
          {AWARDS.map((a, i) => (
            <div
              key={i}
              className="award-item"
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                padding: "20px 24px",
                borderLeft: "3px solid rgba(0,255,136,0.2)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  minWidth: "48px",
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#00ff88",
                }}
              >
                {a.year}
              </div>
              <div>
                <div
                  style={{
                    color: "#f1f5f9",
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {a.title}
                </div>
                <div style={{ color: "#64748b", fontSize: "12px" }}>
                  {a.org}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
