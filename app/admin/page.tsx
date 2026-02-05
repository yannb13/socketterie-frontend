export default function Page() {
  return (
    <div className="card">
      <span className="badge">Backoffice</span>
      <h1 style={{ fontSize: 30, marginTop: 10 }}>Administration</h1>
      <p className="muted">Accès réservé : Commercial / Comptabilité / Admin (RBAC côté backend).</p>
      <ul style={{ marginTop: 10 }}>
        <li>Produits : CRUD</li>
        <li>Commandes : statuts + suivi</li>
        <li>Comptabilité : export CSV</li>
        <li>Admin : comptes internes + paramètres</li>
      </ul>
    </div>
  );
}
