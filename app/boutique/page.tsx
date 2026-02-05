import BoutiqueClient from "./BoutiqueClient";

export default function Page() {
  return (
    <>
      <h1 style={{ fontSize: 34, marginBottom: 6 }}>Boutique</h1>
      <p className="muted" style={{ marginTop: 0 }}>
        Catalogue chargé depuis l’API backend (NestJS).
      </p>
      <BoutiqueClient />
    </>
  );
}
