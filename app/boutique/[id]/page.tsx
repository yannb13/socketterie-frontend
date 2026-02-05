export default function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  return (
    <>
      <h1>Produit #{id}</h1>
      <p>Fiche produit MVP. V2 : détails + photos depuis l’API backend.</p>
      <p>
        <a href="/panier">Ajouter au panier (MVP)</a>
      </p>
    </>
  );
}
