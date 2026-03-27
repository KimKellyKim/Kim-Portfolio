import { useEffect, useRef, useState } from "react";

const ImageCarousel = ({ images, typeColor, title }) => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null); // "left" | "right"
  const timeoutRef = useRef();

  const goTo = (next, dir) => {
    if (animating || next === current) return;
    setDirection(dir);
    setAnimating(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
      setDirection(null);
    }, 320);
  };

  const prev = (e) => {
    e.stopPropagation();
    goTo(current === 0 ? images.length - 1 : current - 1, "left");
  };

  const next = (e) => {
    e.stopPropagation();
    goTo(current === images.length - 1 ? 0 : current + 1, "right");
  };

  const dot = (i, e) => {
    e.stopPropagation();
    goTo(i, i > current ? "right" : "left");
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  if (!images || images.length === 0) return null;

  // Slide direction offset
  const slideStyle = {
    width: "100%",
    display: "block",
    objectFit: "cover",
    height: "240px",
    transition: animating ? "opacity 0.32s ease, transform 0.32s ease" : "none",
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "right" ? "-24px" : "24px"})`
      : "translateX(0)",
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        borderRadius: "4px",
        overflow: "hidden",
        border: `1px solid ${typeColor}30`,
        background: "rgba(0,0,0,0.3)",
        userSelect: "none",
      }}
    >
      {/* Carousel header */}
      <div
        style={{
          fontSize: "10px",
          color: "#475569",
          letterSpacing: "2px",
          textTransform: "uppercase",
          padding: "10px 14px",
          borderBottom: `1px solid ${typeColor}20`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: typeColor }}>▣</span>
          Preview
        </div>
        <span
          style={{ color: "#334155", fontSize: "10px", letterSpacing: "1px" }}
        >
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Image + nav buttons */}
      <div style={{ position: "relative" }}>
        <img
          key={current}
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          style={slideStyle}
        />

        {/* Prev button */}
        {images.length > 1 && (
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(5,13,26,0.75)",
              border: `1px solid ${typeColor}44`,
              color: typeColor,
              width: "32px",
              height: "32px",
              borderRadius: "2px",
              fontSize: "16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(4px)",
              transition: "background 0.2s, border-color 0.2s",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${typeColor}22`;
              e.currentTarget.style.borderColor = typeColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(5,13,26,0.75)";
              e.currentTarget.style.borderColor = `${typeColor}44`;
            }}
          >
            ‹
          </button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={next}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(5,13,26,0.75)",
              border: `1px solid ${typeColor}44`,
              color: typeColor,
              width: "32px",
              height: "32px",
              borderRadius: "2px",
              fontSize: "16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(4px)",
              transition: "background 0.2s, border-color 0.2s",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${typeColor}22`;
              e.currentTarget.style.borderColor = typeColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(5,13,26,0.75)";
              e.currentTarget.style.borderColor = `${typeColor}44`;
            }}
          >
            ›
          </button>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "6px",
            padding: "10px 0",
            borderTop: `1px solid ${typeColor}15`,
          }}
        >
          {images.map((_, i) => (
            <div
              key={i}
              onClick={(e) => dot(i, e)}
              style={{
                width: i === current ? "20px" : "6px",
                height: "4px",
                borderRadius: "2px",
                background:
                  i === current ? typeColor : "rgba(255,255,255,0.15)",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const ProjectCard = ({ project, index }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Support both `image` (string) and `images` (array)
  const images = project.images
    ? project.images
    : project.image
    ? [project.image]
    : [];

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded(!expanded)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.4,0,0.2,1) ${
          index * 80
        }ms, transform 0.6s cubic-bezier(0.4,0,0.2,1) ${
          index * 80
        }ms, border-color 0.3s, background 0.3s`,
        border: `1px solid ${
          hovered ? project.typeColor + "55" : "rgba(255,255,255,0.07)"
        }`,
        background: hovered
          ? "rgba(255,255,255,0.03)"
          : "rgba(255,255,255,0.015)",
        borderRadius: "6px",
        padding: "28px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow blob */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: project.typeColor,
          opacity: hovered ? 0.06 : 0,
          transition: "opacity 0.4s",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      {/* Featured badge */}
      {project.featured && (
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            padding: "3px 10px",
            fontSize: "9px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: project.typeColor,
            border: `1px solid ${project.typeColor}44`,
            borderRadius: "2px",
          }}
        >
          Featured
        </div>
      )}

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            lineHeight: 1,
            filter: hovered ? "none" : "grayscale(30%)",
            transition: "filter 0.3s",
          }}
        >
          {project.emoji}
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#f1f5f9",
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                padding: "2px 10px",
                fontSize: "10px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: project.typeColor,
                border: `1px solid ${project.typeColor}44`,
                borderRadius: "2px",
              }}
            >
              {project.type}
            </span>
          </div>
          <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
            {project.subtitle}
          </div>
        </div>
        <div
          style={{
            color: expanded ? project.typeColor : "#64748b",
            fontSize: "18px",
            transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s, color 0.3s",
            flexShrink: 0,
          }}
        >
          +
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          color: "#94a3b8",
          fontSize: "13px",
          lineHeight: 1.8,
          marginBottom: "20px",
        }}
      >
        {project.description}
      </p>

      {/* Tech tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: expanded ? "20px" : "0",
        }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              padding: "4px 12px",
              fontSize: "11px",
              color: "#64748b",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "2px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Expandable: highlights + carousel */}
      <div
        style={{
          maxHeight: expanded ? "800px" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          style={{
            paddingTop: "16px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Key Highlights */}
          <div
            style={{
              fontSize: "10px",
              color: "#475569",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Key Highlights
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
              marginBottom: images.length > 0 ? "24px" : "0",
            }}
          >
            {project.highlights.map((h) => (
              <div
                key={h}
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "flex-start",
                  fontSize: "12px",
                  color: "#94a3b8",
                }}
              >
                <span style={{ color: project.typeColor, flexShrink: 0 }}>
                  ›
                </span>
                {h}
              </div>
            ))}
          </div>

          {/* Image Carousel */}
          {images.length > 0 && (
            <ImageCarousel
              images={images}
              typeColor={project.typeColor}
              title={project.title}
            />
          )}
        </div>
      </div>
    </div>
  );
};
