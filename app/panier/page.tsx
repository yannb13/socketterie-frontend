export default function Page() {
  return (
    <div className="card">
      <h1 style={{ fontSize: 30, marginTop: 0 }}>Panier</h1>
      <p className="muted">MVP : panier côté front. V2 : panier serveur / DB.</p>
      <a href="/checkout" className="btn btn-primary">Passer au paiement</a>
    </div>
  );
}

