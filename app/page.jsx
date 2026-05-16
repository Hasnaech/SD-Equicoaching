import Link from 'next/link'
import AnimatedSection from '../components/AnimatedSection'
import OfferCard from '../components/OfferCard'
import Button from '../components/Button'

export const metadata = {
  title: "SD Équicoaching — Neurosciences, Management & Équicoaching | Paris Île-de-France",
  description: "Développez votre leadership et révélez le potentiel de vos équipes grâce aux neurosciences et à l'équicoaching. Formations sur-mesure à Paris et en Île-de-France.",
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
      <section
        className="hero-photo-section"
        style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
        aria-labelledby="hero-title"
      >
        <div className="container hero-content">
          <AnimatedSection animation="reveal" className="hero-badge">
            <span>Neurosciences · Management · Équicoaching</span>
          </AnimatedSection>
          <AnimatedSection tag="h1" id="hero-title" animation="reveal" delay={100} className="hero-title">
            Dirigeants, managers : et si votre style de leadership créait de la toxicité sans que vous le sachiez ?
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={200} className="hero-desc">
            Les neurosciences et l'intelligence du cheval révèlent ce que vos collaborateurs n'osent pas vous dire.
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={300} className="hero-cta-group">
            <Button href="/contact" variant="secondary">Découvrir mon profil de leadership</Button>
            <Button href="/offres/formation-individuelle" variant="outline-white">Voir les programmes</Button>
          </AnimatedSection>
        </div>
        <div className="hero-curve" style={{ background: '#1A0B24' }} aria-hidden="true" />
      </section>

      {/* ─── NOTRE SIGNATURE / TOXICITÉ ────────────────────────────── */}
      <section className="toxicity-section" aria-labelledby="toxicity-title">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="toxicity-title" className="section-title" style={{ color: '#fff' }}>
              La toxicité au travail : notre terrain d&apos;expertise
            </h2>
            <p className="section-subtitle">
              Nous révélons et transformons les dynamiques qui épuisent vos équipes et freinent votre organisation.
            </p>
          </AnimatedSection>
          <div className="toxicity-grid">
            {toxicityCards.map((card, i) => (
              <AnimatedSection key={i} animation="reveal" delay={i * 120} className="toxicity-card">
                <span className="toxicity-card-icon">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────────────── */}
      <section className="stats-section section-white" aria-label="Chiffres clés">
        <div className="container stats-grid">
          {[
            { value: '200+', label: 'Managers formés' },
            { value: '15 ans', label: "d'expertise terrain" },
            { value: '98 %', label: 'de satisfaction' },
            { value: 'Paris & IDF', label: "Zone d'intervention" },
          ].map(({ value, label }) => (
            <AnimatedSection key={label} animation="reveal" className="stat-item">
              <strong className="stat-value stat-counter">{value}</strong>
              <span className="stat-label">{label}</span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── BEFORE / AFTER ────────────────────────────────────────── */}
      <section className="section section-white" aria-labelledby="before-after-title">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="before-after-title" className="section-title">Avant et après nos programmes</h2>
            <p className="section-subtitle">
              Une transformation concrète, mesurable, ancrée dans le corps et le comportement.
            </p>
          </AnimatedSection>
          <div className="before-after-grid">
            <AnimatedSection animation="reveal-left" className="before-card">
              <h3>Avant</h3>
              <ul className="before-list">
                <li>Vous gérez les problèmes</li>
                <li>Vos réunions sont tendues</li>
                <li>Vous perdez des talents</li>
                <li>Votre équipe manque d'initiative</li>
                <li>Vous doutez de votre impact</li>
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="reveal-right" className="after-card">
              <h3>Après</h3>
              <ul className="after-list">
                <li>Vous créez les conditions</li>
                <li>Vos réunions génèrent de l'énergie</li>
                <li>Vos collaborateurs s'engagent</li>
                <li>Votre équipe propose et innove</li>
                <li>Votre leadership rayonne</li>
              </ul>
            </AnimatedSection>
          </div>
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
                  "Plan d'action concret et mesurable",
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
                  "Mesure d'impact RH",
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
                  "Révélation des dynamiques d'équipe",
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
      <section className="section testimonials-section" style={{ background: 'var(--cream)' }} aria-labelledby="testimonials-title">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="testimonials-title" className="section-title">Ils nous font confiance</h2>
          </AnimatedSection>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} animation="reveal" delay={i * 100} className="testimonial-card-premium">
                <span className="testimonial-quote-mark" aria-hidden="true">"</span>
                <blockquote>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.97rem', lineHeight: '1.75' }}>{t.text}</p>
                  <div className="testimonial-author-row">
                    <div className="testimonial-author-avatar" aria-hidden="true">
                      {t.name.charAt(0)}
                    </div>
                    <footer>
                      <strong className="testimonial-name" style={{ display: 'block', color: 'var(--primary)', fontSize: '0.92rem' }}>{t.name}</strong>
                      <span className="testimonial-role" style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{t.role}</span>
                    </footer>
                  </div>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GEO / LOCAL SEO ───────────────────────────────────────── */}
      <section className="section section-white geo-section" aria-labelledby="geo-title">
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
      <section className="section cta-section" style={{ background: '#1A0B24' }} aria-labelledby="cta-title">
        <div className="container cta-content">
          <AnimatedSection animation="reveal">
            <h2 id="cta-title" className="cta-title" style={{ color: '#fff' }}>Prêt à transformer votre leadership ?</h2>
            <p className="cta-desc">
              À l'issue de notre échange, nous vous ferons une proposition de programme et de budget.
              Si ce n'est pas le bon moment, vous repartirez déjà avec des pistes pour vos futures actions.
            </p>
            <div className="cta-buttons">
              <Button href="/contact" variant="secondary">Prendre contact</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

const toxicityCards = [
  {
    icon: '⚡',
    title: 'Comportements toxiques',
    desc: "Stress chronique, dévalorisation, micro-management : nous les identifions et les transformons par les neurosciences.",
  },
  {
    icon: '🔍',
    title: 'Leadership sous pression',
    desc: "Quand la pression devient contre-productive, le cheval révèle ce que les tableaux de bord ne montrent pas.",
  },
  {
    icon: '🤝',
    title: 'Cohésion brisée',
    desc: "Tensions d'équipe, turn-over, silences pesants : nous recréons la confiance par l'expérience vécue.",
  },
]

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
    text: "Je suis venue avec des doutes sur le coaching par les chevaux. Je repars avec des outils concrets de régulation émotionnelle que j'utilise chaque jour.",
    name: 'Isabelle C.',
    role: 'Manager de proximité, secteur bancaire, Paris',
  },
]
