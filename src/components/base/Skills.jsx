import { SKILLS } from "../../constants/Skills";
import { Section } from "../Section";
import { SkillBar } from "../SkillBar";

export const Skills = ({ maxW }) => {
  return (
    <Section id="skills">
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
            02.
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#f1f5f9",
            }}
          >
            Skills
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
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {Object.entries(SKILLS).map(([category, skills], ci) => (
            <div
              key={category}
              style={{
                padding: "28px",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    background: "#00ff88",
                    borderRadius: "50%",
                  }}
                />
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#00ff88",
                    fontWeight: 600,
                  }}
                >
                  {category}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {skills.map((s) => (
                  <span
                    key={s}
                    className="skill-tag"
                    style={{
                      padding: "6px 14px",
                      border: "1px solid rgba(0,255,136,0.2)",
                      fontSize: "12px",
                      color: "#94a3b8",
                      borderRadius: "2px",
                      cursor: "default",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "20px" }}>
                {skills.slice(0, 3).map((s, i) => (
                  <SkillBar key={s} skill={s} delay={ci * 100 + i * 150} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
