import { useEffect, useState } from "react";

export const GlitchText = ({ text }) => {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const iv = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 4000);
    return () => clearInterval(iv);
  }, []);
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          opacity: glitch ? 0.4 : 1,
          transition: "opacity 0.05s",
          filter: glitch ? "blur(1px)" : "none",
        }}
      >
        {text}
      </span>
      {glitch && (
        <span
          style={{
            position: "absolute",
            left: "2px",
            top: 0,
            color: "#ff3366",
            clipPath: "inset(30% 0 50% 0)",
            pointerEvents: "none",
          }}
        >
          {text}
        </span>
      )}
    </span>
  );
};
