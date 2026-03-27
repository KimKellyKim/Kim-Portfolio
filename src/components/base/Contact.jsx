import { Section } from "../Section";

export const Contact = ({ maxW }) => {
  return (
    <Section id="contact">
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
            06.
          </span>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              color: "#f1f5f9",
            }}
          >
            Contact
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
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "16px",
                lineHeight: 2,
                marginBottom: "32px",
              }}
            >
              I'm currently open to new opportunities. Whether you have a
              project in mind, a role to discuss, or just want to say hello — my
              inbox is always open.
            </p>
          </div>
          <div
            style={{
              padding: "32px",
              background: "rgba(0,0,0,0.4)",
              border: "1px solid rgba(0,255,136,0.15)",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex", gap: "6px", marginBottom: "20px" }}>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "paraderok9@gmail.com",
                  href: "mailto:paraderok9@gmail.com",
                },
                {
                  icon: "📱",
                  label: "Phone",
                  value: "0962-713-4171",
                  href: "tel:09627134171",
                },
                {
                  icon: "🔗",
                  label: "LinkedIn",
                  value: "linkedin.com/kimberly",
                  href: "https://www.linkedin.com/in/kimberly-paradero-364716256/",
                },
                {
                  icon: "💻",
                  label: "GitHub",
                  value: "github.com/kimberly",
                  href: "https://github.com/KimKellyKim",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="contact-link"
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "#94a3b8",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>{c.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#475569",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      {c.label}
                    </div>
                  </div>
                  <div style={{ fontSize: "14px" }}>{c.value}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
