import { useEffect, useRef, useState } from "react";

export const SkillBar = ({ skill, delay }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(
            () => setWidth(Math.floor(Math.random() * 20) + 78),
            delay
          );
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} style={{ marginBottom: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "4px",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "13px",
            color: "#e2e8f0",
          }}
        >
          {skill}
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#64748b",
          }}
        >
          {width}%
        </span>
      </div>
      <div
        style={{
          background: "#1e293b",
          borderRadius: "2px",
          height: "4px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: "linear-gradient(90deg, #00ff88, #38bdf8)",
            borderRadius: "2px",
            transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: "0 0 8px rgba(0,255,136,0.5)",
          }}
        />
      </div>
    </div>
  );
};
