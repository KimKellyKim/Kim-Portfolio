import { useState, useEffect } from "react";
import { NAV_LINKS } from "./constants/NavLinks";
import { NavBar } from "./components/base/NavBar";
import { Hero } from "./components/base/Hero";
import { About } from "./components/base/About";
import { Skills } from "./components/base/Skills";
import { Experience } from "./components/base/Experience";
import { Projects } from "./components/base/Projects";
import { Awards } from "./components/base/Awards";
import { Contact } from "./components/base/Contact";
import { Footer } from "./components/base/Footer";
import { ParticlesWithGrid } from "./components/base/ParticlesWithGrid";

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [typed, setTyped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i]);
        if (el && el.offsetTop <= scrollY) {
          setActive(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const maxW = { maxWidth: "1100px", margin: "0 auto", padding: "0 24px" };

  return (
    <div
      style={{
        background: "#050d1a",
        color: "#e2e8f0",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700;800&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050d1a; }
        ::-webkit-scrollbar-thumb { background: #00ff88; border-radius: 2px; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor-blink { animation: blink 1s steps(1) infinite; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes particleDrift { 0%{transform:translateY(100vh) rotate(0deg);opacity:0} 10%{opacity:0.6} 90%{opacity:0.3} 100%{transform:translateY(-100px) rotate(360deg);opacity:0} }
        @keyframes scanline { 0%{top:-5%} 100%{top:105%} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 5px rgba(0,255,136,0.3)} 50%{box-shadow:0 0 20px rgba(0,255,136,0.7)} }
        .nav-link { transition: all 0.2s; cursor: pointer; }
        .nav-link:hover { color: #00ff88 !important; }
        .skill-tag:hover { background: #00ff88 !important; color: #050d1a !important; transform: translateY(-2px); }
        .skill-tag { transition: all 0.2s; }
        .exp-card:hover { border-color: currentColor !important; transform: translateX(4px); }
        .exp-card { transition: all 0.3s; }
        .award-item:hover { background: rgba(0,255,136,0.05) !important; border-left-color: #00ff88 !important; }
        .award-item { transition: all 0.2s; }
        .cta-btn:hover { background: #00ff88 !important; color: #050d1a !important; }
        .cta-btn { transition: all 0.3s; cursor: pointer; }
        .contact-link:hover { color: #00ff88 !important; }
        .contact-link { transition: color 0.2s; }
      `}</style>

      <ParticlesWithGrid />
      <NavBar maxW={maxW} active={active} scrollTo={scrollTo} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero
          maxW={maxW}
          typed={typed}
          setTyped={setTyped}
          scrollTo={scrollTo}
        />
        <About maxW={maxW} />
        <Skills maxW={maxW} />
        <Experience maxW={maxW} />
        <Projects maxW={maxW} />
        <Awards maxW={maxW} />
        <Contact maxW={maxW} />
        <Footer />
      </div>
    </div>
  );
}
