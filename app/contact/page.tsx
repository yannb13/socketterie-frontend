export default function Page() {
  return (
    <div className="card">
      <span className="badge">Support</span>
      <h1 style={{ fontSize: 30, marginTop: 10 }}>Contact</h1>
      <p className="muted">MVP : contact par email. V2 : formulaire relié au backend.</p>
      <a className="btn btn-primary" href="mailto:contact@lasocketterie.fr">Envoyer un email</a>
    </div>
  );
}
