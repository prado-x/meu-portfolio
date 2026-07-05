"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

export default function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeVariables: {
        darkMode: true,
        background: "transparent",
        primaryColor: "#12151B", // navy-900
        primaryTextColor: "#C5C6C7", // foreground
        primaryBorderColor: "#2C3A47", // navy-700
        lineColor: "#45A29E", // teal-500
        secondaryColor: "#1F2833", // navy-800
        tertiaryColor: "#0B0C10", // navy-950
      },
    });

    if (ref.current) {
      // Using a random ID to prevent conflicts when multiple diagrams are rendered
      const id = `mermaid-${Math.random().toString(36).substring(7)}`;
      mermaid.render(id, chart).then((result) => {
        if (ref.current) {
          ref.current.innerHTML = result.svg;
          setHasRendered(true);
        }
      }).catch((e) => {
        console.error("Mermaid rendering failed", e);
      });
    }
  }, [chart]);

  return (
    <div className="w-full flex items-center justify-center p-8 bg-navy-950/50 rounded-none border border-navy-800/50">
      <div 
        ref={ref} 
        className={`w-full overflow-x-auto flex justify-center transition-opacity duration-500 ${hasRendered ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
