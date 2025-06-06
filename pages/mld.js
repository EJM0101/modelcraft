import { useEffect, useState } from "react";
import { transformToMLD } from "@/utils/transform";
import Link from "next/link";

export default function MLDPage() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const mcd = JSON.parse(localStorage.getItem("mcd") || "{}");
    const mld = transformToMLD(mcd);
    setTables(mld);
    localStorage.setItem("mld", JSON.stringify(mld));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">🔗 MLD - Modèle Logique de Données</h2>
      {tables.map((table, i) => (
        <div key={i} className="mb-4 border p-3 rounded bg-gray-50">
          <h3 className="font-semibold">{table.name}</h3>
          <ul className="text-sm">
            {table.attributes.map((attr, j) => (
              <li key={j}>- {attr}</li>
            ))}
          </ul>
        </div>
      ))}
      <Link href="/mpd" className="bg-blue-600 text-white px-4 py-2 rounded">Générer MPD</Link>
    </div>
  );
}