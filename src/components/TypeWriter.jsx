import { useEffect, useState } from "react";

export const TypeWriter = ({ text, speed = 50, onDone }) => {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => {
        setDisplayed((p) => p + text[idx]);
        setIdx((i) => i + 1);
      }, speed);
      return () => clearTimeout(t);
    } else if (onDone) onDone();
  }, [idx, text, speed, onDone]);
  return (
    <span>
      {displayed}
      <span className="cursor-blink">▌</span>
    </span>
  );
};
