import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "La Socketterie",
  description: "Boutique de chaussettes dépareillées - vitrine + e-commerce",
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        padding: "8px 10px",
        borderRadius: 10,
        border: "1px solid var(--c-border)",
        background: "white",
        fontWeight: 600,
      }}
    >
      {children}
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header style={{ borderBottom: "1px solid var(--c-border)", background: "white" }}>
          <div className="container" style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 0" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/logo.png" alt="La Socketterie" style={{ width: 40, height: 40, objectFit: "contain" }} />
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "var(--c-primary)" }}>La Socketterie</div>
                <div className="muted" style={{ fontSize: 12 }}>Chaussettes dépareillées</div>
              </div>
            </Link>

            <div style={{ marginLeft: "auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
              <NavLink href="/boutique">Boutique</NavLink>
              <NavLink href="/a-propos">À propos</NavLink>
              <NavLink href="/actualites">Actualités</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/panier">Panier</NavLink>
              <NavLink href="/compte">Compte</NavLink>
              <NavLink href="/admin">Backoffice</NavLink>
            </div>
          </div>
        </header>

        <main className="container" style={{ padding: "22px 0" }}>
          {children}
        </main>

        <footer style={{ borderTop: "1px solid var(--c-border)", background: "white", marginTop: 40 }}>
          <div className="container" style={{ padding: "18px 0", display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            <span className="muted">© {new Date().getFullYear()} La Socketterie</span>
            <span className="muted">•</span>
            <Link href="/cgv" className="muted">CGV</Link>
            <Link href="/mentions-legales" className="muted">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="muted">Confidentialité</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

