import NeuralBg from '../../../components/NeuralBg'
import AnimatedSection from '../../../components/AnimatedSection'
import Button from '../../../components/Button'

export const metadata = {
  title: 'Formation intra-entreprise — Management & Neurosciences | SD Équicoaching',
  description: 'Formations intra-entreprise en management et neurosciences pour transformer durablement la culture managériale de votre organisation. Île-de-France.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Formation intra-entreprise en management et neurosciences',
  description: 'Programme de formation collective pour managers et équipes alliant neurosciences et équicoaching',
  provider: { '@type': 'Organization', name: 'SD Équicoaching', url: 'https://sd-equicoaching.fr' },
  areaServed: 'Île-de-France',
}

export default function FormationIntraEntreprisePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="page-hero page-hero--purple" aria-labelledby="fie-title">
        <NeuralBg variant="violet" />
        <div className="container page-hero-content">
          <AnimatedSection animation="reveal" className="page-badge">Formation intra-entreprise</AnimatedSection>
          <AnimatedSection tag="h1" id="fie-title" animation="reveal" delay={100} className="page-title">
            Transformez la culture<br />
            <span className="text-gold">managériale de votre organisation</span>
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={200} className="page-desc">
            Des programmes sur-mesure déployés directement dans votre entreprise,
            conçus avec vos équipes RH pour répondre précisément à vos enjeux managériaux.
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={300}>
            <Button href="/contact" variant="secondary">Demander un diagnostic gratuit</Button>
          </AnimatedSection>
        </div>
        <div className="hero-curve" aria-hidden="true" />
      </section>

      {/* Enjeux */}
      <section className="section" aria-labelledby="fie-enjeux">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="fie-enjeux" className="section-title">Les enjeux que nous traitons</h2>
          </AnimatedSection>
          <div className="enjeux-grid">
            {enjeux.map((e, i) => (
              <AnimatedSection key={i} animation="reveal" delay={i * 100} className="enjeu-card">
                <span className="enjeu-icon">{e.icon}</span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Notre méthode */}
      <section className="section section-cream" aria-labelledby="fie-methode">
        <div className="container two-col">
          <AnimatedSection animation="reveal-left" className="two-col-text">
            <h2 id="fie-methode" className="section-title">Notre méthode</h2>
            <p>
              Chaque programme commence par un diagnostic organisationnel approfondi réalisé
              conjointement avec vos équipes RH et dirigeants. Nous ne livrons jamais un programme
              standard — chaque intervention est construite sur-mesure pour votre contexte.
            </p>
            <p>
              Les modules combinent apports théoriques en neurosciences du leadership, ateliers
              pratiques et, pour les groupes ouverts à cette approche, des séances d'équicoaching
              d'une puissance transformatrice unique.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="reveal-right" className="two-col-visual">
            <div className="method-timeline">
              {methodSteps.map((s, i) => (
                <div key={i} className="method-step">
                  <div className="method-step-dot" />
                  <div className="method-step-content">
                    <strong>{s.title}</strong>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Formats */}
      <section className="section" aria-labelledby="fie-formats">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="fie-formats" className="section-title">Nos formats d'intervention</h2>
          </AnimatedSection>
          <div className="formats-grid">
            {formats.map((f, i) => (
              <AnimatedSection key={i} animation="reveal-stagger" delay={i * 100} className="format-card">
                <h3 className="format-title">{f.title}</h3>
                <p className="format-duration">{f.duration}</p>
                <p className="format-desc">{f.desc}</p>
                <ul>
                  {f.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section" aria-labelledby="fie-cta">
        <div className="container cta-content">
          <AnimatedSection animation="reveal">
            <h2 id="fie-cta" className="cta-title">Construisons ensemble votre programme</h2>
            <p className="cta-desc">
              À l'issue de notre échange, nous vous ferons une proposition de programme et de budget
              adaptés à la taille et aux enjeux de votre organisation.
              Si ce n'est pas le bon moment, vous repartirez déjà avec des pistes pour vos futures actions.
            </p>
            <div className="cta-buttons">
              <Button href="/contact" variant="secondary">Prendre contact</Button>
              <Button href="/offres/team-building-equicoaching" variant="outline-light">Voir le team building</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

const enjeux = [
  { icon: '📉', title: 'Turn-over et absentéisme', desc: 'Recréer l\'engagement et fidéliser les talents grâce à un management plus humain et ancré dans la réalité neurobiologique.' },
  { icon: '🔄', title: 'Transformation et conduite du changement', desc: 'Accompagner les managers pour qu\'ils deviennent des catalyseurs du changement et non des obstacles.' },
  { icon: '💬', title: 'Communication et relations interpersonnelles', desc: 'Développer l\'intelligence relationnelle et la communication non-violente à tous les niveaux.' },
  { icon: '⚡', title: 'Performance et pression', desc: 'Équiper les managers d\'outils de régulation pour performer durablement sans s\'épuiser.' },
  { icon: '🤝', title: 'Cohésion post-fusion ou réorganisation', desc: 'Recréer une culture commune et un sentiment d\'appartenance après des transformations structurelles.' },
  { icon: '🌱', title: 'Développement des compétences managériales', desc: 'Former une nouvelle génération de managers adaptée aux défis du travail hybride et de la Gen Z.' },
]

const methodSteps = [
  { title: 'Diagnostic (J-30)', desc: 'Entretiens avec DG, DRH et managers clés. Analyse de la culture managériale existante.' },
  { title: 'Co-construction (J-15)', desc: 'Design du programme avec vos équipes. Validation des objectifs et KPIs de mesure.' },
  { title: 'Déploiement', desc: 'Modules en présentiel, séances équicoaching, ateliers pratiques. Rythme adapté à vos contraintes.' },
  { title: 'Ancrage & Mesure', desc: 'Suivi à 3 et 6 mois. Rapport d\'impact RH avec indicateurs quantitatifs et qualitatifs.' },
]

const formats = [
  {
    title: 'Module découverte',
    duration: '1 journée',
    desc: 'Idéal pour initier la transformation ou tester l\'approche avec un groupe pilote.',
    points: ['8 à 12 participants', 'Conférence neurosciences + atelier équicoaching', 'Debrief collectif animé'],
  },
  {
    title: 'Programme managers',
    duration: '3 à 6 mois',
    desc: 'Parcours complet pour transformer durablement les pratiques managériales.',
    points: ['12 à 20 managers', '6 modules de 2 jours', '2 séances équicoaching collectives', 'Suivi individuel inclus'],
  },
  {
    title: 'Programme sur-mesure',
    duration: 'À définir ensemble',
    desc: 'Programme entièrement construit à partir de vos enjeux spécifiques.',
    points: ['Diagnostic préalable inclus', 'Combinaison libre des modules', 'Déploiement multi-sites possible', 'Mesure d\'impact sur-mesure'],
  },
]
