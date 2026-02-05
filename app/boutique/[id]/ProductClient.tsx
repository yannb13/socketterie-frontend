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

export default function ProductClient({ id }: { id: number }) {
    if (Number.isNaN(id)) {
        return (
            <div className="card">
                <h1 style={{ marginTop: 0 }}>Erreur d'URL</h1>
                <p className="muted">L'identifiant produit est invalide.</p>
                <a href="/boutique" className="btn btn-outline">Retour boutique</a>
            </div>
        );
    }
    
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3002/products/${id}`)
        .then(async (r) => {
            const data = await r.json();
            if (!r.ok || data?.error) throw new Error(JSON.stringify(data));
            return data;
        })
        .then((data) => setProduct(data))
        .catch((e) => setError(String(e)))
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="card">
                <h1 style={{ marginTop: 0 }}>Chargement du produit…</h1>
                <p className="muted">Connexion à l’API backend.</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="card">
                <h1 style={{ marginTop: 0 }}>Produit introuvable (debug)</h1>
                <p className="muted">ID demandé : {id}</p>
                <pre style={{ whiteSpace: "pre-wrap" }}>{error}</pre>
                <a href="/boutique" className="btn btn-outline">Retour boutique</a>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="card">
                <h1 style={{ marginTop: 0 }}>Produit introuvable</h1>
                <a href="/boutique" className="btn btn-outline">Retour boutique</a>
            </div>
        );
    }

    return (
        <div className="card">
            {product.tag ? <span className="badge">{product.tag}</span> : null}

            <h1 style={{ fontSize: 34, margin: "10px 0 6px" }}>{product.name}</h1>
            <p className="muted" style={{ marginTop: 0 }}>{product.description}</p>

            <img
                src={product.image || "/products/img-chaussettes.png"}
                alt={product.name}
                style={{
                    width: "100%",
                    maxWidth: 700,
                    height: 320,
                    objectFit: "cover",
                    borderRadius: 14,
                    border: "1px solid var(--c-border)",
                }}
            />

            <hr style={{ margin: "14px 0" }} />

            <div style={{ fontSize: 18, fontWeight: 800 }}>
                Prix : <span style={{ color: "var(--c-secondary)" }}>{product.price.toFixed(2)} €</span>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <a href="/panier" className="btn btn-primary">Ajouter au panier (MVP)</a>
                <a href="/boutique" className="btn btn-outline">Retour boutique</a>
            </div>
        </div>
    );
}
