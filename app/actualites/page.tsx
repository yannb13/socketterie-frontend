export default function Page() {
  return (
    <div className="card">
      <span className="badge">News</span>
      <h1 style={{ fontSize: 30, marginTop: 10 }}>Actualités</h1>
      <p className="muted">MVP : articles statiques. V2 : backoffice / mini CMS.</p>

      <div className="card" style={{ marginTop: 12 }}>
        <h2 style={{ marginTop: 0 }}>Ouverture de la boutique en ligne</h2>
        <p className="muted">Catalogue prêt, paiement Stripe, livraison UE.</p>
      </div>
    </div>
  );
}
