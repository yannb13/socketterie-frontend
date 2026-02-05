export default function Page() {
  return (
    <div className="card">
      <h1 style={{ fontSize: 30, marginTop: 0 }}>Checkout</h1>
      <p className="muted">MVP : page de transition. V2 : redirection vers Stripe Checkout via backend.</p>
      <span className="badge">Paiement : Stripe</span>
    </div>
  );
}
