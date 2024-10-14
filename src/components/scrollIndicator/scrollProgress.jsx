import React, { useEffect, useState } from "react";
import "./scrollProgress.scss";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        "--scroll-progress": `${scrollProgress}%`,
      }}
      className="progressBar"
    />
  );
};

export default ScrollProgress;
