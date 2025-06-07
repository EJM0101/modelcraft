import React, { useEffect, useState } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

export default function VisualizePage() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const mcdRaw = localStorage.getItem("mcd");
    if (!mcdRaw) return;

    try {
      const mcd = JSON.parse(mcdRaw);
      console.log("✅ MCD chargé :", mcd);

      if (!mcd.entities || mcd.entities.length === 0) return;

      // Créer les noeuds
      const createdNodes = mcd.entities.map((ent, i) => ({
        id: ent.name,
        position: { x: 100 + i * 250, y: 100 },
        data: { label: `${ent.name}: ${ent.attributes.join(", ")}` },
        type: "default"
      }));

      // Créer les arêtes (edges)
      const createdEdges = (mcd.relations || []).map((rel, i) => ({
        id: `e${i}`,
        source: rel.from,
        target: rel.to,
        label: rel.type,
        animated: true,
        type: "default",
        style: { stroke: "#4B5563" },
        labelStyle: { fill: "#374151", fontWeight: 600 }
      }));

      setNodes(createdNodes);
      setEdges(createdEdges);
    } catch (err) {
      console.error("❌ Erreur de lecture du MCD :", err);
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📊 Visualisation du MCD</h2>
      <div style={{ height: "75vh" }} className="border rounded shadow">
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}