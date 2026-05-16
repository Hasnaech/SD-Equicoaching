import dynamic from 'next/dynamic'
import Link from 'next/link'
import AnimatedSection from '../components/AnimatedSection'
import OfferCard from '../components/OfferCard'
import Button from '../components/Button'

const HeroScene3D = dynamic(() => import('../components/HeroScene3D'), { ssr: false })

export const metadata = {
  title: 'SD Équicoaching — Neurosciences, Management & Équicoaching | Paris Île-de-France',
  description: 'Développez votre leadership et révélez le potentiel de vos équipes grâce aux neurosciences et à l\'équicoaching. Formations sur-mesure à Paris et en Île-de-France.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SD Équicoaching',
  description: 'Cabinet de formation en neurosciences, management et équicoaching',
  url: 'https://sd-equicoaching.fr',
  email: 'contact@sd-equicoaching.fr',
  areaServed: ['Paris', 'Île-de-France', 'Essonne'],
  serviceType: ['Formation professionnelle', 'Coaching', 'Team building'],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="hero-section" aria-labelledby="hero-title">
        <HeroScene3D />
        <div className="container hero-content">
          <AnimatedSection animation="reveal" className="hero-badge">
            <span>Neurosciences · Management · Équicoaching</span>
          </AnimatedSection>
          <AnimatedSection tag="h1" id="hero-title" animation="reveal" delay={100} className="hero-title">
            Révélez le potentiel humain<br />
            <span className="text-gold">par le vivant</span>
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={200} className="hero-desc">
            Formations sur-mesure pour dirigeants, managers et équipes.
            Une approche unique alliant neurosciences appliquées et sagesse équestre,
            au service de votre leadership et de la cohésion de vos équipes.
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={300} className="hero-cta-group">
            <Button href="/contact" variant="primary">Prendre contact</Button>
            <Button href="/offres/formation-individuelle" variant="outline">Nos programmes</Button>
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={400} className="hero-reassurance">
            <p>
              À l'issue de notre échange, nous vous ferons une proposition de programme et de budget.
              Si ce n'est pas le bon moment, vous repartirez déjà avec des pistes pour vos futures actions.
            </p>
          </AnimatedSection>
        </div>
        <div className="hero-curve" aria-hidden="true" />
      </section>

      {/* ─── STATS ─────────────────────────────────────────────────── */}
      <section className="stats-section" aria-label="Chiffres clés">
        <div className="container stats-grid">
          {[
            { value: '200+', label: 'Managers formés' },
            { value: '15 ans', label: "d'expertise terrain" },
            { value: '98 %', label: 'de satisfaction' },
            { value: 'Île-de-France', label: 'Zone d\'intervention' },
          ].map(({ value, label }) => (
            <AnimatedSection key={label} animation="reveal" className="stat-item">
              <strong className="stat-value">{value}</strong>
              <span className="stat-label">{label}</span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── OFFERS ────────────────────────────────────────────────── */}
      <section className="section offers-section" aria-labelledby="offers-title">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="offers-title" className="section-title">Nos programmes</h2>
            <p className="section-subtitle">
              Des parcours conçus sur-mesure pour répondre aux enjeux de chaque contexte
            </p>
          </AnimatedSection>
          <div className="offers-grid">
            <AnimatedSection animation="reveal-stagger" delay={0}>
              <OfferCard
                icon="🧠"
                title="Formation individuelle"
                tagline="Développez votre leadership par les neurosciences"
                features={[
                  'Bilan de leadership personnalisé',
                  'Séances individuelles avec le cheval',
                  'Plan d\'action concret et mesurable',
                  'Suivi post-formation 3 mois',
                ]}
                href="/offres/formation-individuelle"
                cta="Découvrir le programme"
              />
            </AnimatedSection>
            <AnimatedSection animation="reveal-stagger" delay={150}>
              <OfferCard
                icon="🏢"
                title="Formation intra-entreprise"
                tagline="Transformez le management de vos équipes"
                features={[
                  'Diagnostic organisationnel préalable',
                  'Ateliers collectifs sur-mesure',
                  'Outils neurosciences pour managers',
                  'Mesure d\'impact RH',
                ]}
                href="/offres/formation-intra-entreprise"
                cta="Découvrir le programme"
              />
            </AnimatedSection>
            <AnimatedSection animation="reveal-stagger" delay={300}>
              <OfferCard
                icon="🐴"
                title="Team building équicoaching"
                tagline="Renforcez la cohésion par l'intelligence du vivant"
                features={[
                  'Journée complète avec les chevaux',
                  'Exercices de communication non-verbale',
                  'Révélation des dynamiques d\'équipe',
                  'Debriefs animés par nos coachs',
                ]}
                href="/offres/team-building-equicoaching"
                cta="Découvrir l'expérience"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── APPROACH ──────────────────────────────────────────────── */}
      <section className="section approach-section" aria-labelledby="approach-title">
        <div className="container approach-grid">
          <AnimatedSection animation="reveal-left" className="approach-content">
            <h2 id="approach-title" className="section-title">Notre approche unique</h2>
            <p>
              Nous combinons les dernières avancées en neurosciences du leadership avec la sagesse
              millénaire de la relation homme-cheval. Cette alchimie crée des prises de conscience
              profondes, durables et immédiatement opérationnelles.
            </p>
            <p>
              Le cheval, être de présence pure, agit comme un miroir émotionnel impartial.
              Il révèle en quelques minutes ce que des mois de formation conventionnelle n'atteignent pas.
            </p>
            <ul className="approach-list">
              <li>Ancrage neurologique durable (vs. apprentissage cognitif)</li>
              <li>Feedback non-verbal immédiat et objectif</li>
              <li>Activation du système limbique et de l'intelligence émotionnelle</li>
              <li>Transfert direct vers les situations professionnelles</li>
            </ul>
            <Button href="/offres/formation-individuelle" variant="primary">
              Découvrir l'approche
            </Button>
          </AnimatedSection>
          <AnimatedSection animation="reveal-right" className="approach-visual">
            <div className="approach-card-stack">
              <div className="approach-card approach-card--neurosciences">
                <span className="approach-card-icon">🧠</span>
                <h3>Neurosciences</h3>
                <p>Plasticité cérébrale, régulation émotionnelle, ancrage mémoriel</p>
              </div>
              <div className="approach-card approach-card--equicoaching">
                <span className="approach-card-icon">🐴</span>
                <h3>Équicoaching</h3>
                <p>Présence, authenticité, feedback sensoriel immédiat</p>
              </div>
              <div className="approach-card approach-card--management">
                <span className="approach-card-icon">🎯</span>
                <h3>Management</h3>
                <p>Leadership situationnel, cohésion d'équipe, performance durable</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="section testimonials-section" aria-labelledby="testimonials-title">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="testimonials-title" className="section-title">Ils nous font confiance</h2>
          </AnimatedSection>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} animation="reveal" delay={i * 100} className="testimonial-card">
                <blockquote>
                  <p className="testimonial-text">"{t.text}"</p>
                  <footer>
                    <strong className="testimonial-name">{t.name}</strong>
                    <span className="testimonial-role">{t.role}</span>
                  </footer>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GEO / LOCAL SEO ───────────────────────────────────────── */}
      <section className="section geo-section" aria-labelledby="geo-title">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="geo-title" className="section-title">Où nous intervenons</h2>
            <p className="section-subtitle">
              Basés en Île-de-France, nous accompagnons les entreprises et particuliers
              de Paris, de l'Essonne (91) et de toute la région parisienne.
            </p>
          </AnimatedSection>
          <div className="geo-tags">
            {['Paris', 'Île-de-France', 'Essonne (91)', 'Yvelines (78)', 'Hauts-de-Seine (92)', 'Val-de-Marne (94)', 'Seine-et-Marne (77)'].map(z => (
              <span key={z} className="geo-tag">{z}</span>
            ))}
          </div>
          <AnimatedSection animation="reveal" delay={200} className="geo-note">
            <p>Interventions en présentiel sur site client ou dans nos espaces équestres partenaires. Formation à distance disponible.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="section cta-section" aria-labelledby="cta-title">
        <div className="container cta-content">
          <AnimatedSection animation="reveal">
            <h2 id="cta-title" className="cta-title">Prêt à transformer votre leadership ?</h2>
            <p className="cta-desc">
              À l'issue de notre échange, nous vous ferons une proposition de programme et de budget.
              Si ce n'est pas le bon moment, vous repartirez déjà avec des pistes pour vos futures actions.
            </p>
            <div className="cta-buttons">
              <Button href="/contact" variant="secondary">Prendre contact</Button>
              <Button href="/agent-ia" variant="outline-light">Tester l'assistant IA</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

const testimonials = [
  {
    text: "Une expérience transformatrice. En une journée avec les chevaux, j'ai compris des dynamiques de management que je n'avais pas su identifier en 10 ans de carrière.",
    name: 'Sophie M.',
    role: 'Directrice des Ressources Humaines, groupe industriel',
  },
  {
    text: "L'approche neurosciences + équicoaching est surprenante d'efficacité. Mon équipe de direction a retrouvé une cohésion que nous avions perdue lors de la fusion.",
    name: 'Laurent D.',
    role: 'DG, PME 120 collaborateurs, Essonne',
  },
  {
    text: "Je suis venue avec des doutes sur «le truc avec les chevaux»... Je repars avec des outils concrets de régulation émotionnelle que j'utilise chaque jour.",
    name: 'Isabelle C.',
    role: 'Manager de proximité, secteur bancaire, Paris',
  },
]
