import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-logo-name">SD Équicoaching</p>
          <p className="footer-tagline">Neurosciences · Management · Équicoaching</p>
          <p className="footer-desc">
            Accompagnement sur-mesure pour dirigeants, managers et équipes en Île-de-France.
            Approche unique alliant neurosciences et sagesse équestre.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Nos formations</h3>
          <ul className="footer-links">
            <li><Link href="/offres/formation-individuelle">Formation individuelle</Link></li>
            <li><Link href="/offres/formation-intra-entreprise">Formation intra-entreprise</Link></li>
            <li><Link href="/offres/team-building-equicoaching">Team building équicoaching</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Ressources</h3>
          <ul className="footer-links">
            <li><Link href="/blog">Blog & Articles</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Zone d'intervention</h3>
          <address className="footer-address">
            <p>Paris & Île-de-France</p>
            <p>Essonne (91)</p>
            <p>Présentiel & Distanciel</p>
            <a href="mailto:contact@sd-equicoaching.fr" className="footer-email">
              contact@sd-equicoaching.fr
            </a>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SD Équicoaching — Tous droits réservés</p>
        <nav className="footer-legal" aria-label="Liens légaux">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
