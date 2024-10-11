"use client";

import React from "react";

const NoiseSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        numOctaves="3"
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" opacity="0.2" />
  </svg>
);

export function Background() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[radial-gradient(at_center,#0c3141,#000000)]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      <div className="absolute inset-0">
        <NoiseSVG />
      </div>
    </div>
  );
}
