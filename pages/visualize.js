import React, { useEffect, useState } from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

export default function VisualizePage() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const mcdRaw = localStorage.getItem("mcd");
    if (!mcdRaw) return;

    try {
      const mcd = JSON.parse(mcdRaw);
      console.log("📦 MCD chargé pour visualisation:", mcd);

      if (!mcd.entities || mcd.entities.length === 0) return;

      // Création des noeuds pour chaque entité
      const nodes = mcd.entities.map((ent, i) => ({
        id: ent.name,
        position: { x: 100 + i * 250, y: 100 },
        data: { label: `${ent.name}: ${ent.attributes.join(", ")}` },
        type: "default"
      }));

      // Création des arêtes pour chaque relation
      const edges = (mcd.relations || []).map((rel, i) => ({
        id: `e${i}`,
        source: rel.from,
        target: rel.to,
        label: rel.type,
        animated: true,
        style: { stroke: "#4B5563" },
        labelStyle: { fill: "#374151", fontWeight: 600 }
      }));

      setElements([...nodes, ...edges]);
    } catch (err) {
      console.error("❌ Erreur de parsing MCD:", err);
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">🧠 Visualisation du Modèle Conceptuel (MCD)</h2>
      <p className="mb-4 text-sm text-gray-600">
        Les entités et relations sont représentées graphiquement ci-dessous :
      </p>
      <div style={{ width: "100%", height: "70vh" }} className="border rounded shadow">
        <ReactFlow elements={elements} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}