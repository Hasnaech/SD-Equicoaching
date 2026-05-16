import AnimatedSection from '../../components/AnimatedSection'
import AgentChat from '../../components/AgentChat'

export const metadata = {
  title: 'Assistant IA — Trouvez votre programme | SD Équicoaching',
  description: 'Notre assistant IA vous guide vers le programme de formation en neurosciences et équicoaching le plus adapté à votre situation et vos objectifs.',
}

export default function AgentIAPage() {
  return (
    <>
      <section className="page-hero page-hero--purple" aria-labelledby="agent-title">
        <div className="container page-hero-content page-hero-content--center">
          <AnimatedSection animation="reveal" className="page-badge">Assistant IA</AnimatedSection>
          <AnimatedSection tag="h1" id="agent-title" animation="reveal" delay={100} className="page-title">
            Votre assistant de<br />
            <span className="text-gold">qualification personnalisé</span>
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={200} className="page-desc">
            Répondez à quelques questions et notre assistant IA identifie
            le programme le plus adapté à votre situation, vos objectifs et votre contexte.
          </AnimatedSection>
        </div>
        <div className="hero-curve" aria-hidden="true" />
      </section>

      <section className="section agent-section" aria-label="Assistant de qualification">
        <div className="container agent-container">
          <AnimatedSection animation="reveal" className="agent-intro">
            <p>
              Cet assistant pose 6 questions simples pour vous orienter vers le bon programme.
              L'échange prend environ 3 minutes.
            </p>
          </AnimatedSection>
          <AgentChat />
        </div>
      </section>
    </>
  )
}
