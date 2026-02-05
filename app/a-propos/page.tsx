export default function Page() {
  return (
    <div className="card">
      <span className="badge">La marque</span>
      <h1 style={{ fontSize: 30, marginTop: 10 }}>À propos</h1>
      <p className="muted">
        La Socketterie (créée en 2019) propose des chaussettes dépareillées. Boutique physique à Nice, France.
      </p>
      <p className="muted">
        Objectif : gagner en visibilité et vendre en ligne (livraison UE, paiement Stripe).
      </p>
    </div>
  );
}
