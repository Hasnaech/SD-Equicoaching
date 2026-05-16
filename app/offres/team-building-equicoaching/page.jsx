import AnimatedSection from '../../../components/AnimatedSection'
import Button from '../../../components/Button'

export const metadata = {
  title: 'Team building équicoaching — Cohésion d\'équipe | SD Équicoaching',
  description: 'Journée team building équicoaching pour renforcer la cohésion d\'équipe, la communication et le leadership par l\'intelligence du vivant. Île-de-France.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Team building équicoaching',
  description: 'Journée de team building utilisant l\'équicoaching pour renforcer la cohésion d\'équipe et le leadership collectif',
  provider: { '@type': 'Organization', name: 'SD Équicoaching', url: 'https://sd-equicoaching.fr' },
  areaServed: 'Île-de-France',
}

export default function TeamBuildingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero avec photo pleine largeur */}
      <section
        className="hero-photo-section"
        style={{ backgroundImage: "url('/img/team-building-hero.jpg')" }}
        aria-labelledby="tb-title"
      >
        <div className="container hero-content">
          <AnimatedSection animation="reveal" className="hero-badge">
            <span>Team building équicoaching</span>
          </AnimatedSection>
          <AnimatedSection tag="h1" id="tb-title" animation="reveal" delay={100} className="hero-title">
            L'intelligence du vivant<br />
            <span className="text-gold">au service de votre équipe</span>
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={200} className="hero-desc">
            Une journée hors du commun qui révèle les dynamiques de votre équipe comme aucun
            jeu de rôle ni formation conventionnelle ne peut le faire. Le cheval ne ment pas.
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={300}>
            <Button href="/contact" variant="secondary">Organiser une journée</Button>
          </AnimatedSection>
        </div>
        <div className="hero-curve" aria-hidden="true" />
      </section>

      {/* Pourquoi ça marche */}
      <section className="section" aria-labelledby="tb-why">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="tb-why" className="section-title">Pourquoi ça marche vraiment ?</h2>
            <p className="section-subtitle">
              Le cheval, être de présence pure et de communication non-verbale, révèle en quelques minutes
              ce que des mois d'observation RH ne permettent pas de saisir.
            </p>
          </AnimatedSection>
          <div className="why-grid">
            {whyItems.map((item, i) => (
              <AnimatedSection key={i} animation="reveal" delay={i * 100} className="why-card">
                <span className="why-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programme de la journée */}
      <section className="section section-cream" aria-labelledby="tb-programme">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="tb-programme" className="section-title">Programme de la journée</h2>
            <p className="section-subtitle">Une journée complète (9h – 18h) dans nos espaces équestres partenaires</p>
          </AnimatedSection>
          <div className="day-timeline">
            {daySchedule.map((slot, i) => (
              <AnimatedSection key={i} animation="reveal" delay={i * 80} className="day-slot">
                <div className="day-time">{slot.time}</div>
                <div className="day-divider" aria-hidden="true" />
                <div className="day-content">
                  <strong>{slot.title}</strong>
                  <p>{slot.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que vous repartez avec */}
      <section className="section" aria-labelledby="tb-outcomes">
        <div className="container two-col">
          <AnimatedSection animation="reveal-left" className="two-col-text">
            <h2 id="tb-outcomes" className="section-title">Ce que vous repartez avec</h2>
            <ul className="feature-list">
              <li>Une cartographie claire des rôles naturels dans votre équipe</li>
              <li>Des insights sur vos modes de communication et points de friction</li>
              <li>Des outils de régulation émotionnelle pour le quotidien professionnel</li>
              <li>Un plan d'action collectif co-construit pendant la journée</li>
              <li>Un rapport de restitution remis sous 10 jours ouvrés</li>
              <li>Un souvenir et une énergie collective transformée</li>
            </ul>
          </AnimatedSection>
          <AnimatedSection animation="reveal-right" className="two-col-visual">
            <div className="testimonial-card" style={{ marginTop: 0 }}>
              <blockquote>
                <p className="testimonial-text">
                  "En une heure avec les chevaux, nous avons vu des dynamiques que notre DRH cherchait
                  à comprendre depuis 2 ans. Le debrief a été d'une richesse incroyable."
                </p>
                <footer>
                  <strong className="testimonial-name">Marc T.</strong>
                  <span className="testimonial-role">Directeur Commercial, Paris</span>
                </footer>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="section section-cream" aria-labelledby="tb-infos">
        <div className="container">
          <AnimatedSection animation="reveal" className="section-header">
            <h2 id="tb-infos" className="section-title">Informations pratiques</h2>
          </AnimatedSection>
          <div className="infos-grid">
            {infos.map((info, i) => (
              <AnimatedSection key={i} animation="reveal" delay={i * 80} className="info-item">
                <span className="info-icon">{info.icon}</span>
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="reveal" delay={200} className="prerequisite-note">
            <p>
              <strong>Aucune expérience équestre requise.</strong> Nos sessions sont accessibles à tous, y compris
              aux personnes ayant une appréhension des chevaux — cette situation est même
              particulièrement révélatrice et formatrice.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section" aria-labelledby="tb-cta">
        <div className="container cta-content">
          <AnimatedSection animation="reveal">
            <h2 id="tb-cta" className="cta-title">Prêt pour une expérience hors du commun ?</h2>
            <p className="cta-desc">
              À l'issue de notre échange, nous vous proposerons une date et un programme adaptés
              à la taille et aux objectifs de votre équipe. Si ce n'est pas le bon moment,
              vous repartirez déjà avec des pistes pour vos futures actions.
            </p>
            <div className="cta-buttons">
              <Button href="/contact" variant="secondary">Organiser votre journée</Button>
              <Button href="/offres/formation-intra-entreprise" variant="outline-light">Formation intra-entreprise</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

const whyItems = [
  { icon: '🪞', title: 'Miroir émotionnel', desc: 'Le cheval reflète l\'état intérieur de chaque participant avec une précision qui déjoue tous les mécanismes de défense habituels.' },
  { icon: '⚡', title: 'Apprentissage accéléré', desc: 'L\'activation simultanée du corps, des émotions et de la raison crée des ancrages neurobiologiques impossibles à atteindre en salle de formation.' },
  { icon: '🤝', title: 'Révélation des dynamiques', desc: 'Les exercices collectifs avec les chevaux font émerger naturellement les leaders, les suiveurs, les résistances et les ressources de l\'équipe.' },
  { icon: '🌱', title: 'Transformation durable', desc: 'Contrairement aux jeux de rôle, les insights obtenus en présence du cheval sont vécus dans le corps — ils ne s\'oublient pas.' },
]

const daySchedule = [
  { time: '9h00', title: 'Accueil & intention collective', desc: 'Présentation du cadre, sécurisation émotionnelle, définition des intentions de la journée.' },
  { time: '9h30', title: 'Présentation des chevaux', desc: 'Introduction à la communication équine, aux codes du cheval et à l\'observation comportementale.' },
  { time: '10h30', title: 'Exercices individuels au licol', desc: 'Chaque participant explore sa relation à l\'autorité, à la confiance et au lâcher-prise en tête-à-tête avec un cheval.' },
  { time: '12h00', title: 'Déjeuner & débrief informel', desc: 'Partage des premières observations, déjeuner convivial dans un cadre naturel.' },
  { time: '14h00', title: 'Exercices collectifs en liberté', desc: 'L\'équipe travaille ensemble avec plusieurs chevaux en liberté — révélation des dynamiques collectives.' },
  { time: '15h30', title: 'Debrief guidé en cercle', desc: 'Facilitation par nos coachs : mise en mots des expériences, parallèles avec le contexte professionnel.' },
  { time: '16h30', title: 'Plan d\'action collectif', desc: 'Co-construction de 3 engagements concrets que l\'équipe s\'engage à mettre en œuvre.' },
  { time: '17h30', title: 'Clôture & célébration', desc: 'Mot de chaque participant, partage des intentions, cocktail de clôture.' },
]

const infos = [
  { icon: '👥', label: 'Taille du groupe', value: '6 à 15 participants (au-delà, 2 groupes parallèles)' },
  { icon: '📍', label: 'Lieu', value: 'Domaines équestres partenaires en Île-de-France (91, 78, 77)' },
  { icon: '📅', label: 'Disponibilités', value: 'Mardi au dimanche, sur réservation (minimum 6 semaines)' },
  { icon: '🎒', label: 'À prévoir', value: 'Tenue décontractée, chaussures fermées. Tout le matériel est fourni.' },
  { icon: '♿', label: 'Accessibilité', value: 'Accessible aux personnes à mobilité réduite selon site. Nous contacter.' },
  { icon: '🌧️', label: 'Météo', value: 'Les sessions se tiennent par tout temps (abri disponible). Report possible.' },
]
