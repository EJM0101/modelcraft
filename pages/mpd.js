import { useEffect, useState } from "react";
import { transformToMPD } from "@/utils/transform";

export default function MPDPage() {
  const [sql, setSql] = useState("");

  useEffect(() => {
    const mld = JSON.parse(localStorage.getItem("mld") || "[]");
    const script = transformToMPD(mld);
    setSql(script);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">💾 MPD - Script SQL généré</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">{sql}</pre>
      <button
        onClick={() => navigator.clipboard.writeText(sql)}
        className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
      >
        Copier le script
      </button>
    </div>
  );
}