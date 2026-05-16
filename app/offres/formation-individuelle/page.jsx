import NeuralBg from '../../../components/NeuralBg'
import AnimatedSection from '../../../components/AnimatedSection'
import Button from '../../../components/Button'

export const metadata = {
  title: 'Formation individuelle — Neurosciences & Leadership | SD Équicoaching',
  description: 'Programme de développement du leadership par les neurosciences et l\'équicoaching. Coaching individuel sur-mesure pour dirigeants et managers en Île-de-France.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Formation individuelle en neurosciences et leadership',
  description: 'Programme de coaching individuel alliant neurosciences et équicoaching pour le développement du leadership',
  provider: { '@type': 'Organization', name: 'SD Équicoaching', url: 'https://sd-equicoaching.fr' },
  areaServed: 'Île-de-France',
}

export default function FormationIndividuellePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="page-hero page-hero--purple" aria-labelledby="fi-title">
        <NeuralBg variant="gold" />
        <div className="container page-hero-content">
          <AnimatedSection animation="reveal" className="page-badge">Formation individuelle</AnimatedSection>
          <AnimatedSection tag="h1" id="fi-title" animation="reveal" delay={100} className="page-title">
            Développez votre leadership<br />
            <span className="text-gold">par les neurosciences</span>
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={200} className="page-desc">
            Un parcours sur-mesure qui combine les apports des neurosciences du leadership
            avec l'intelligence sensorielle de l'équicoaching pour des transformations profondes et durables.
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={300}>
            <Button href="/contact" variant="secondary">Demander un entretien gratuit</Button>
          </AnimatedSection>
        </div>
        <div className="hero-curve" aria-hidden="true" />
      </section>

      {/* Pour qui */}
      <section className="section" aria-labelledby="fi-for-who">
        <div className="container two-col">
          <AnimatedSection animation="reveal-left" className="two-col-text">
            <h2 id="fi-for-who" className="section-title">Pour qui ?</h2>
            <p>Ce programme s'adresse aux professionnels qui souhaitent franchir un cap décisif dans leur développement :</p>
            <ul className="feature-list">
              <li>Dirigeants et directeurs en prise de poste ou en transition</li>
              <li>Managers souhaitant renforcer leur impact et leur leadership</li>
              <li>Entrepreneurs confrontés à des enjeux de croissance et de délégation</li>
              <li>Professionnels en burn-out ou questionnement de sens</li>
              <li>Toute personne souhaitant mieux se connaître pour mieux agir</li>
            </ul>
          </AnimatedSection>
          <AnimatedSection animation="reveal-right" className="two-col-visual">
            <div className="highlight-box">
              <div className="highlight-icon">🎯</div>
              <h3>Objectif principal</h3>
              <p>
                Ancrer durablement de nouveaux comportements de leadership grâce à des
                expériences neurobiologiques significatives vécues avec les chevaux.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Programme */}
      <section className="section section-cream" aria-labelledby="fi-programme">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="fi-programme" className="section-title">Le programme</h2>
            <p className="section-subtitle">Un parcours en 4 phases, sur 3 à 6 mois</p>
          </AnimatedSection>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <AnimatedSection key={i} animation="reveal" delay={i * 120} className="step-card">
                <div className="step-number">{i + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
                <ul className="step-items">
                  {step.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Neurosciences explainer */}
      <section className="section" aria-labelledby="fi-neuro">
        <div className="container two-col">
          <AnimatedSection animation="reveal-left" className="two-col-visual">
            <div className="neuro-visual">
              <div className="neuro-circle neuro-circle--1">Plasticité<br/>cérébrale</div>
              <div className="neuro-circle neuro-circle--2">Régulation<br/>émotionnelle</div>
              <div className="neuro-circle neuro-circle--3">Mémoire<br/>procédurale</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="reveal-right" className="two-col-text">
            <h2 id="fi-neuro" className="section-title">Pourquoi les neurosciences ?</h2>
            <p>
              Les neurosciences nous ont appris que les comportements durables s'ancrent
              grâce à des expériences émotionnellement significatives — pas par la répétition cognitive seule.
            </p>
            <p>
              En activant simultanément le système limbique (émotions), le cortex préfrontal (décision)
              et le cervelet (mémoire procédurale), nos programmes créent des changements neurologiques réels.
            </p>
            <p>
              Le cheval agit comme accélérateur de cette transformation : son feedback sensoriel immédiat
              crée les conditions idéales pour l'apprentissage neurobiologique.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section" aria-labelledby="fi-cta">
        <div className="container cta-content">
          <AnimatedSection animation="reveal">
            <h2 id="fi-cta" className="cta-title">Prêt à franchir ce cap ?</h2>
            <p className="cta-desc">
              À l'issue de notre premier échange, nous vous ferons une proposition de programme et de budget.
              Si ce n'est pas le bon moment, vous repartirez déjà avec des pistes pour vos futures actions.
            </p>
            <div className="cta-buttons">
              <Button href="/contact" variant="secondary">Prendre contact</Button>
              <Button href="/blog" variant="outline-light">Lire nos articles</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

const steps = [
  {
    icon: '🔍',
    title: 'Diagnostic',
    desc: 'Exploration de votre profil de leadership et identification des axes de développement',
    items: ['Entretien exploratoire (90 min)', 'Questionnaire de profil neuropsychologique', 'Définition des objectifs SMART'],
  },
  {
    icon: '🐴',
    title: 'Séances équicoaching',
    desc: 'Expériences transformatrices avec les chevaux en présence d\'un coach certifié',
    items: ['4 à 8 séances individuelles', 'Exercices de communication non-verbale', 'Debriefs approfondis après chaque séance'],
  },
  {
    icon: '🧠',
    title: 'Ancrage neurosciences',
    desc: 'Consolidation des apprentissages par les outils des neurosciences appliquées',
    items: ['Techniques de régulation émotionnelle', 'Exercices de neuroplasticité', 'Outils de mindfulness et pleine présence'],
  },
  {
    icon: '🚀',
    title: 'Plan d\'action & Suivi',
    desc: 'Transfert dans votre contexte professionnel et accompagnement dans la durée',
    items: ['Plan d\'action personnalisé', 'Suivi mensuel post-programme (3 mois)', 'Bilan de transformation à 6 mois'],
  },
]
