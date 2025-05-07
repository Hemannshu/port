import React, { useEffect, useState } from "react";
import "./AnimatedBlobs.css";

const LIGHT_BLOBS = [
  { fill: "#a5b4fc" },
  { fill: "#818cf8" },
  { fill: "#f472b6" },
];
const DARK_BLOBS = [
  { fill: "#23272f" }, // dark blue-gray
  { fill: "#22334d" }, // deep teal
  { fill: "#18181b" }, // near-black
];

const AnimatedBlobs = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setDark(document.body.classList.contains("dark"));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const blobs = dark ? DARK_BLOBS : LIGHT_BLOBS;

  return (
    <div className="blobs-bg">
      <svg className="blob blob1" viewBox="0 0 600 600">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="360 300 300" dur="18s" repeatCount="indefinite"/>
          <path fill={blobs[0].fill} d="M300,520Q220,540,160,480Q100,420,120,340Q140,260,200,200Q260,140,340,160Q420,180,480,240Q540,300,500,380Q460,460,380,500Q300,520,220,540Z"/>
        </g>
      </svg>
      <svg className="blob blob2" viewBox="0 0 600 600">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="360 300 300" to="0 300 300" dur="22s" repeatCount="indefinite"/>
          <path fill={blobs[1].fill} d="M300,520Q220,540,160,480Q100,420,120,340Q140,260,200,200Q260,140,340,160Q420,180,480,240Q540,300,500,380Q460,460,380,500Q300,520,220,540Z"/>
        </g>
      </svg>
      <svg className="blob blob3" viewBox="0 0 600 600">
        <g>
          <animateTransform attributeName="transform" type="rotate" from="0 300 300" to="-360 300 300" dur="26s" repeatCount="indefinite"/>
          <path fill={blobs[2].fill} d="M300,520Q220,540,160,480Q100,420,120,340Q140,260,200,200Q260,140,340,160Q420,180,480,240Q540,300,500,380Q460,460,380,500Q300,520,220,540Z"/>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedBlobs; 