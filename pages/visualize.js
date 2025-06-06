import React, { useEffect, useState } from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

export default function VisualizePage() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const mcd = JSON.parse(localStorage.getItem("mcd") || "{}");
    if (!mcd.entities) return;

    const nodes = mcd.entities.map((ent, i) => ({
      id: ent.name,
      position: { x: 100 + i * 250, y: 100 },
      data: { label: `${ent.name}\n${ent.attributes.join("\n")}` },
      type: "default"
    }));

    const edges = (mcd.relations || []).map((rel, i) => ({
      id: `e${i}`,
      source: rel.from,
      target: rel.to,
      label: rel.type,
      animated: true,
      style: { stroke: "#555" }
    }));

    setElements([...nodes, ...edges]);
  }, []);

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ReactFlow elements={elements}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}