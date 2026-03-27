import { GlitchText } from "../GlitchText";
import { TypeWriter } from "../TypeWriter";

export const Hero = ({ maxW, typed, setTyped, scrollTo }) => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 0 60px",
      }}
    >
      <div style={maxW}>
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#00ff88",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              color: "#00ff88",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Available for hire
          </span>
        </div>
        <div
          style={{
            fontSize: "13px",
            color: "#38bdf8",
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          {"<"} Full Stack Engineer {"/>"}
        </div>
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(52px, 8vw, 96px)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-3px",
            marginBottom: "24px",
            color: "#f1f5f9",
          }}
        >
          <GlitchText text="Kimberly" />
          <br />
          <span style={{ color: "#00ff88" }}>Paradero</span>
        </h1>
        <div
          style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "#64748b",
            maxWidth: "580px",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          {!typed ? (
            <TypeWriter
              text="Dynamic and results-driven engineer specializing in Web Development & Game Dev. Turning complex problems into elegant digital experiences."
              speed={28}
              onDone={() => setTyped(true)}
            />
          ) : (
            "Dynamic and results-driven engineer specializing in Web Development & Game Dev. Turning complex problems into elegant digital experiences."
          )}
        </div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <button
            className="cta-btn"
            onClick={() => scrollTo("experience")}
            style={{
              padding: "14px 32px",
              border: "1px solid #00ff88",
              background: "transparent",
              color: "#00ff88",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: "inherit",
              fontWeight: 600,
            }}
          >
            View Experience
          </button>
          <button
            className="cta-btn"
            onClick={() => scrollTo("contact")}
            style={{
              padding: "14px 32px",
              border: "1px solid #38bdf8",
              background: "transparent",
              color: "#38bdf8",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: "inherit",
              fontWeight: 600,
            }}
          >
            Contact Me
          </button>
          <button
            className="cta-btn"
            onClick={() => window.open("https://docs.google.com/document/d/1BJmY4tFG_jRGYDEwuB2OuopTFpBCZjm5/edit?usp=sharing&ouid=114396897412349816708&rtpof=true&sd=truet", "_blank")}
            style={{
              padding: "14px 32px",
              border: "1px solid #ff6b35",
              background: "transparent",
              color: "#ff6b35",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontFamily: "inherit",
              fontWeight: 600,
            }}
          >
            Resume
          </button>
        </div>
        {/* Terminal block */}
        <div
          style={{
            marginTop: "64px",
            padding: "20px 24px",
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(0,255,136,0.15)",
            borderRadius: "8px",
            maxWidth: "460px",
          }}
        >
          <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <div
                key={c}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: c,
                }}
              />
            ))}
          </div>
          <div style={{ fontSize: "12px", color: "#64748b", lineHeight: 2 }}>
            <span style={{ color: "#38bdf8" }}>kimberly</span>
            <span style={{ color: "#00ff88" }}>@portfolio</span>
            <span style={{ color: "#64748b" }}>:~$ </span>
            <span style={{ color: "#e2e8f0" }}>whoami</span>
            <br />
            <span style={{ color: "#94a3b8" }}>
              → Full Stack Software Engineer | Game Dev | BS IT
            </span>
            <br />
            <span style={{ color: "#38bdf8" }}>kimberly</span>
            <span style={{ color: "#00ff88" }}>@portfolio</span>
            <span style={{ color: "#64748b" }}>:~$ </span>
            <span style={{ color: "#e2e8f0" }}>echo $LOCATION</span>
            <br />
            <span style={{ color: "#94a3b8" }}>
              → Cebu City, Philippines 🇵🇭
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
