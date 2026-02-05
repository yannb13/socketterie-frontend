"use client";

import { useEffect, useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    description?: string;
    image?: string;
    tag?: string;
};

export default function BoutiqueClient() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://localhost:3002/products")
        .then((r) => r.json())
        .then(setProducts)
        .catch((e) => setError(String(e)));
    }, []);

    if (error) {
        return (
            <div className="card">
                <h2 style={{ marginTop: 0 }}>Erreur chargement catalogue</h2>
                <pre style={{ whiteSpace: "pre-wrap" }}>{error}</pre>
            </div>
        );
    }

    if (!products) {
        return (
            <div className="card">
                <h2 style={{ marginTop: 0 }}>Chargement…</h2>
                <p className="muted">Connexion à l’API backend.</p>
            </div>
        );
    }

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14, marginTop: 14, }}>

            {products.map((p) => (
                <a key={p.id} href={`/boutique/${p.id}`} className="card" style={{ display: "block" }}>
                    {p.tag ? <span className="badge">{p.tag}</span> : null}

                    <img
                        src={p.image || "/products/img-chaussettes.png"}
                        alt={p.name}
                        style={{
                            width: "100%",
                            height: 170,
                            objectFit: "cover",
                            borderRadius: 12,
                            marginTop: 10,
                            border: "1px solid var(--c-border)",
                        }}
                    />

                    <div style={{ fontSize: 18, fontWeight: 800, marginTop: 10 }}>{p.name}</div>
                    <div className="muted" style={{ marginTop: 6 }}>{p.price.toFixed(2)} €</div>
                    <div className="muted" style={{ marginTop: 6 }}>{p.description}</div>

                    <div style={{ marginTop: 12, fontWeight: 700, color: "var(--c-secondary)" }}>
                        Voir la fiche →
                    </div>
                </a>
            ))}
        </div>
    );
}
