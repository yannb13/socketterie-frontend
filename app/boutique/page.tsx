const produits = [
  { id: 1, nom: "Chaussettes dépareillées - Soleil", prix: 12.9 },
  { id: 2, nom: "Chaussettes dépareillées - Océan", prix: 12.9 },
  { id: 3, nom: "Pack 3 paires - Mix", prix: 34.9 },
];

export default function Page() {
  return (
    <>
      <h1>Boutique</h1>
      <p>MVP : produits en dur. V2 : produits depuis l’API backend.</p>

      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
          padding: 0,
        }}
      >
        {produits.map((p) => (
          <li
            key={p.id}
            style={{
              listStyle: "none",
              border: "1px solid #eee",
              padding: 16,
              borderRadius: 8,
            }}
          >
            <h2 style={{ fontSize: 18, fontWeight: 700 }}>{p.nom}</h2>
            <p>{p.prix.toFixed(2)} €</p>
            <a href={`/boutique/${p.id}`}>Voir la fiche</a>
          </li>
        ))}
      </ul>
    </>
  );
}
