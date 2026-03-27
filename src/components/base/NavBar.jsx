import { NAV_LINKS } from "../../constants/NavLinks";

export const NavBar = ({ maxW, active, scrollTo }) => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(5,13,26,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0,255,136,0.15)",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          ...maxW,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "18px",
            fontWeight: 800,
            color: "#00ff88",
            letterSpacing: "-0.5px",
          }}
        >
          KP<span style={{ color: "#38bdf8" }}>.</span>dev
        </div>
        <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
          {NAV_LINKS.map((id) => (
            <span
              key={id}
              className="nav-link"
              onClick={() => scrollTo(id)}
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: active === id ? "#00ff88" : "#64748b",
                borderBottom:
                  active === id ? "1px solid #00ff88" : "1px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {id}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};
