import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🎓 Bienvenue sur ModelCraft</h1>
      <p className="mb-4">
        Transformez un MCD en MLD et MPD (SQL) avec visualisation interactive et explication.
      </p>
      <div className="flex gap-4">
        <Link href="/input" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Créer un MCD</Link>
        <Link href="/explanation" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">Voir Explication</Link>
      </div>
    </div>
  );
}