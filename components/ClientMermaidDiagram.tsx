"use client";

import dynamic from "next/dynamic";

const DynamicMermaidDiagram = dynamic(
  () => import("./MermaidDiagram"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-64 bg-navy-900/50 animate-pulse border border-navy-800/50" />
    ),
  }
);

export default function ClientMermaidDiagram({ chart }: { chart: string }) {
  return <DynamicMermaidDiagram chart={chart} />;
}
