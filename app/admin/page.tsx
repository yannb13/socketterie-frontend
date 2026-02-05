export default function Page() {
  return (
    <>
      <h1>Backoffice</h1>
      <p>Accès réservé : Commercial / Comptabilité / Administrateur (RBAC côté backend).</p>
      <ul>
        <li>Produits : création / modification / archivage</li>
        <li>Commandes : suivi + statut + notes</li>
        <li>Comptabilité : export CSV</li>
        <li>Admin : comptes internes + paramètres</li>
      </ul>
    </>
  );
}
