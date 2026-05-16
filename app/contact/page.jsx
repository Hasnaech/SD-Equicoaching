import AnimatedSection from '../../components/AnimatedSection'
import ContactForm from '../../components/ContactForm'
import Button from '../../components/Button'

export const metadata = {
  title: 'Contact — Parlez-nous de votre projet | SD Équicoaching',
  description: 'Contactez SD Équicoaching pour un premier échange sur votre projet de formation, coaching ou team building. Réponse sous 24h.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact SD Équicoaching',
  url: 'https://sd-equicoaching.fr/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'SD Équicoaching',
    email: 'contact@sd-equicoaching.fr',
    areaServed: ['Paris', 'Île-de-France', 'Essonne'],
  },
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero page-hero--cream" aria-labelledby="contact-title">
        <div className="container page-hero-content page-hero-content--center">
          <AnimatedSection animation="reveal" className="page-badge">Contact</AnimatedSection>
          <AnimatedSection tag="h1" id="contact-title" animation="reveal" delay={100} className="page-title page-title--dark">
            Parlons de votre projet
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={200} className="page-desc page-desc--dark">
            Un premier échange pour mieux comprendre vos enjeux et vous proposer
            l'accompagnement le plus adapté à votre situation.
          </AnimatedSection>
        </div>
        <div className="hero-curve hero-curve--cream" aria-hidden="true" />
      </section>

      <section className="section contact-section" aria-labelledby="form-title">
        <div className="container contact-grid">
          <ContactForm />

          <AnimatedSection animation="reveal-right" className="contact-info">
            <div className="contact-info-card">
              <h3>Pourquoi nous contacter ?</h3>
              <ul className="contact-reasons">
                <li>Pour un premier échange sans engagement</li>
                <li>Pour recevoir un devis adapté à votre contexte</li>
                <li>Pour poser vos questions sur notre approche</li>
                <li>Pour planifier une visite de nos espaces équestres</li>
              </ul>
            </div>

            <div className="contact-info-card">
              <h3>Nos coordonnées</h3>
              <address>
                <p>
                  <strong>Email :</strong><br />
                  <a href="mailto:contact@sd-equicoaching.fr">contact@sd-equicoaching.fr</a>
                </p>
                <p>
                  <strong>Zone d'intervention :</strong><br />
                  Paris & Île-de-France<br />
                  Essonne (91), Yvelines (78), Seine-et-Marne (77)<br />
                  Formation à distance disponible
                </p>
              </address>
            </div>

            <div className="contact-info-card contact-info-card--highlight">
              <h3>Essayez notre assistant IA</h3>
              <p>
                Pas prêt à nous écrire ? Notre assistant IA peut déjà
                vous orienter vers le programme le plus adapté.
              </p>
              <Button href="/agent-ia" variant="outline">Tester l'assistant IA</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
