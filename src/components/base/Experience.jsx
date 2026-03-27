import { EXPERIENCE } from "../../constants/Experience";
import { Section } from "../Section";

export const Experience = ({ maxW }) => {
  return (
    <Section id="experience">
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
            03.
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#f1f5f9",
            }}
          >
            Experience
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
            position: "relative",
            paddingLeft: "32px",
            borderLeft: "1px solid rgba(0,255,136,0.15)",
          }}
        >
          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              className="exp-card"
              style={{
                marginBottom: "48px",
                padding: "28px 32px",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                borderRadius: "6px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-49px",
                  top: "32px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: exp.color,
                  boxShadow: `0 0 12px ${exp.color}66`,
                  border: "2px solid #050d1a",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#f1f5f9",
                    }}
                  >
                    {exp.role}
                  </div>
                  <div
                    style={{
                      color: exp.color,
                      fontSize: "13px",
                      marginTop: "4px",
                      fontWeight: 600,
                    }}
                  >
                    {exp.company}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      letterSpacing: "1px",
                    }}
                  >
                    {exp.period}
                  </div>
                  <div
                    style={{
                      display: "inline-block",
                      marginTop: "6px",
                      padding: "2px 10px",
                      border: `1px solid ${exp.color}44`,
                      color: exp.color,
                      fontSize: "10px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      borderRadius: "2px",
                    }}
                  >
                    {exp.type}
                  </div>
                </div>
              </div>
              <ul style={{ marginTop: "20px", listStyle: "none" }}>
                {exp.tasks.map((t, ti) => (
                  <li
                    key={ti}
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                      color: "#94a3b8",
                      fontSize: "13px",
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        color: exp.color,
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      ▶
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div
            style={{
              padding: "20px 32px",
              border: "1px solid rgba(255,255,255,0.04)",
              background: "rgba(255,255,255,0.01)",
              borderRadius: "6px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#64748b",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              EARLIER ROLES
            </div>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              {[
                "Internet Cafe Attendant @ Mr. Melvin Resus (2019–2020)",
                "Service Crew @ Ngohiong Express (2019)",
              ].map((r) => (
                <div
                  key={r}
                  style={{
                    fontSize: "12px",
                    color: "#475569",
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#334155" }}>—</span>
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
