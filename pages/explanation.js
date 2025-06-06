export default function ExplanationPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">📘 Explication des modèles</h2>
      <div className="space-y-6 text-sm leading-6 text-gray-800">
        <div>
          <h3 className="text-lg font-semibold">MCD - Modèle Conceptuel de Données</h3>
          <p>Représente les entités et relations du système. Exemple : Utilisateur, Commande.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">MLD - Modèle Logique</h3>
          <p>Structure les données en tables avec clés primaires et étrangères.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">MPD - Modèle Physique</h3>
          <p>Traduction SQL : types, contraintes, relations physiques.</p>
        </div>
      </div>
    </div>
  );
}