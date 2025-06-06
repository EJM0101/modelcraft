import { useState } from "react";
import { useRouter } from "next/router";

export default function InputPage() {
  const [json, setJson] = useState("");
  const router = useRouter();

  const handleLoadExample = async () => {
    const res = await fetch("/example.json");
    const data = await res.json();
    setJson(JSON.stringify(data, null, 2));
  };

  const handleSubmit = () => {
    try {
      const parsed = JSON.parse(json);
      localStorage.setItem("mcd", JSON.stringify(parsed));
      router.push("/mld");
    } catch (e) {
      alert("Erreur dans le JSON");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">🧱 Saisir un Modèle Conceptuel de Données (MCD)</h2>
      <p className="mb-2 text-sm text-gray-600">
        Format attendu :
      </p>
      <button onClick={handleLoadExample} className="mb-2 bg-green-600 text-white px-3 py-1 rounded">Charger un exemple</button>
      <textarea
        rows="12"
        value={json}
        onChange={(e) => setJson(e.target.value)}
        placeholder="{ 'entities': [...], 'relations': [...] }"
        className="w-full border p-3 rounded mb-4 font-mono text-sm"
      />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Générer MLD</button>
    </div>
  );
}