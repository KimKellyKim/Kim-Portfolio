import { Section } from "../Section";

export const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,255,136,0.1)",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ color: "#334155", fontSize: "12px", letterSpacing: "1px" }}>
        <span style={{ color: "#64748b" }}>// Built with passion by </span>
        <span style={{ color: "#00ff88" }}>Kimberly Paradero</span>
        <span style={{ color: "#64748b" }}> · {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};
