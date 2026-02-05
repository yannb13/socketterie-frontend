import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "La Socketterie",
  description: "Site vitrine et boutique en ligne",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
          <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/">Accueil</Link>
            <Link href="/boutique">Boutique</Link>
            <Link href="/a-propos">À propos</Link>
            <Link href="/actualites">Actualités</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/panier">Panier</Link>
            <Link href="/compte">Compte</Link>
            <Link href="/admin">Backoffice</Link>
          </nav>
        </header>

        <main style={{ maxWidth: 1100, margin: "0 auto", padding: 16 }}>
          {children}
        </main>

        <footer style={{ padding: 16, borderTop: "1px solid #eee", marginTop: 40 }}>
          <nav style={{ display: "flex", gap: 12 }}>
            <Link href="/cgv">CGV</Link>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Confidentialité</Link>
          </nav>
          <p style={{ marginTop: 10 }}>© La Socketterie</p>
        </footer>
      </body>
    </html>
  );
}
