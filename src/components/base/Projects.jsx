import { PROJECTS } from "../../constants/Projects";
import { ProjectsSection } from "../ProjectsSection";
import { Section } from "../Section";

export const Projects = ({ maxW }) => {
  return (
    <Section id="projects">
      <div style={maxW}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "#00ff88",
              letterSpacing: "3px",
            }}
          >
            04.
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#f1f5f9",
            }}
          >
            Projects
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
        <p
          style={{
            color: "#64748b",
            fontSize: "13px",
            marginBottom: "48px",
            letterSpacing: "1px",
          }}
        >
          // {PROJECTS.length} projects shipped · games, web apps, mobile &
          hardware
        </p>
        <ProjectsSection />
      </div>
    </Section>
  );
};
