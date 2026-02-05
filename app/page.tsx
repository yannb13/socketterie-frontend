import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="card"
        style={{
          background: "linear-gradient(135deg, var(--c-light), #ffffff)",
          borderColor: "#f3c7b7",
        }}
      >
        <span className="badge">Vitrine + boutique en ligne</span>
        <h1 style={{ fontSize: 44, margin: "12px 0 8px", lineHeight: 1.05, color: "var(--c-primary)" }}>
          Des chaussettes dépareillées<br /> qui matchent avec ton style.
        </h1>
        <p className="muted" style={{ fontSize: 16, margin: 0, maxWidth: 720 }}>
          La Socketterie (Nice) : collection fun, confortable et responsable. Livraison UE. Paiement sécurisé (Stripe).
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          <Link href="/boutique" className="btn btn-primary">Découvrir la boutique</Link>
          <Link href="/a-propos" className="btn btn-outline">En savoir plus</Link>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14, marginTop: 18 }}>
        <div className="card">
          <div style={{ fontWeight: 800, color: "var(--c-secondary)" }}>Paiement</div>
          <p className="muted" style={{ marginTop: 6 }}>Stripe (Checkout + webhooks). Aucune donnée carte stockée.</p>
        </div>
        <div className="card">
          <div style={{ fontWeight: 800, color: "var(--c-accent)" }}>Livraison</div>
          <p className="muted" style={{ marginTop: 6 }}>Commandes en France et dans toute l’Union Européenne.</p>
        </div>
        <div className="card">
          <div style={{ fontWeight: 800, color: "var(--c-primary)" }}>Écoconception</div>
          <p className="muted" style={{ marginTop: 6 }}>Pages légères, images optimisées, scripts limités.</p>
        </div>
      </div>
    </>
  );
}
