import { useState } from "react";
import { PROJECTS } from "../constants/Projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const types = [
    "All",
    "Game",
    "Mobile App",
    "Web App",
    "IoT / Web",
    "Fun Project",
  ];
  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          marginBottom: "36px",
        }}
      >
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            style={{
              padding: "8px 18px",
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontFamily: "'JetBrains Mono', monospace",
              cursor: "pointer",
              borderRadius: "2px",
              border:
                filter === t
                  ? "1px solid #00ff88"
                  : "1px solid rgba(255,255,255,0.1)",
              background: filter === t ? "rgba(0,255,136,0.08)" : "transparent",
              color: filter === t ? "#00ff88" : "#64748b",
              transition: "all 0.2s",
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
      <div
        style={{
          marginTop: "32px",
          textAlign: "center",
          color: "#334155",
          fontSize: "12px",
          letterSpacing: "1px",
        }}
      >
        // click any card to expand details
      </div>
    </div>
  );
};
