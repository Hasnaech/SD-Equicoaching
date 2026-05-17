import Link from 'next/link'
import { ArrowRight, Check, Clock, Users, MapPin } from 'lucide-react'
import FadeIn from '../../components/FadeIn'
import TextReveal from '../../components/TextReveal'
import MagneticButton from '../../components/MagneticButton'

export const metadata = {
  title: "Teambuilding Équicoaching — Partout en France | SD Équicoaching",
  description: "Journée teambuilding équicoaching pour révéler et transformer les dynamiques de votre équipe. 200+ partenaires équestres partout en France.",
}

const schedule = [
  { time: '9h00',  title: 'Accueil & Intention',    desc: "Mise en place du cadre, intentions de la journée, exploration du domaine équestre." },
  { time: '10h00', title: 'Observation & Connexion', desc: "Premiers contacts avec les chevaux, lecture des comportements, décryptage des dynamiques de groupe." },
  { time: '11h30', title: 'Ateliers collectifs',     desc: "Exercices en équipe guidés par le cheval : leadership, communication, confiance." },
  { time: '13h00', title: 'Déjeuner & Partage',      desc: "Repas convivial, partage libre des premières prises de conscience." },
  { time: '14h30', title: 'Ateliers approfondis',    desc: "Mise en situation complexe, gestion des tensions, co-leadership et prise de décision collective." },
  { time: '16h30', title: 'Debrief collectif',       desc: "Restitution guidée, liens avec le quotidien professionnel, co-construction du plan d'action." },
  { time: '18h00', title: 'Clôture & Engagements',   desc: "Engagements individuels et collectifs, remise du livret de restitution sous 10 jours." },
]

const regions = [
  "Île-de-France", "Auvergne-Rhône-Alpes", "Provence-Alpes-Côte d'Azur",
  "Occitanie", "Nouvelle-Aquitaine", "Bretagne",
  "Hauts-de-France", "Grand Est", "Normandie",
  "Pays de la Loire", "Bourgogne-Franche-Comté", "Et partout ailleurs",
]

export default function TeambuildingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-violet-fonce min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-fonce to-violet" />
        <div className="container relative z-10 pt-32 pb-20">
          <FadeIn>
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">
              Teambuilding Équicoaching
            </p>
          </FadeIn>
          <h1 className="text-white text-4xl md:text-6xl font-playfair font-semibold mb-6 max-w-4xl leading-tight">
            <TextReveal>L'intelligence du vivant au service de votre équipe</TextReveal>
          </h1>
          <FadeIn delay={0.3}>
            <p className="text-white/80 text-lg font-inter mb-10 max-w-2xl leading-relaxed">
              Une journée hors du commun qui révèle les dynamiques de votre équipe comme aucune formation
              conventionnelle ne peut le faire.{' '}
              <strong className="text-or">Le cheval ne ment pas.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton href="/audit-gratuit">
                Organiser une journée <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <Link href="/contact" className="btn-outline-white">Nous contacter</Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.5} className="flex flex-wrap gap-6 mt-10 text-white/60 font-inter text-sm">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-or" /> 1 journée (9h – 18h)
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-or" /> 6 à 15 personnes
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-or" /> Partout en France
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-or" /> 200+ partenaires équestres
            </span>
          </FadeIn>
        </div>
      </section>

      {/* Couverture nationale */}
      <section className="bg-violet py-16">
        <div className="container">
          <FadeIn className="text-center mb-10">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Réseau national</p>
            <h2 className="text-white text-3xl md:text-4xl font-playfair font-semibold mb-3">
              200+ domaines partenaires partout en France
            </h2>
            <p className="text-white/70 font-inter max-w-2xl mx-auto">
              Nous organisons votre journée au plus proche de votre équipe, dans l'un de nos domaines
              équestres partenaires sélectionnés pour leur cadre et leur qualité d'accueil.
            </p>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((r) => (
              <span key={r} className="bg-white/10 text-white font-inter text-sm px-4 py-2 rounded-full border border-white/20">
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Programme timeline */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Déroulé</p>
            <h2 className="text-4xl font-playfair font-semibold">La journée, heure par heure</h2>
          </FadeIn>
          <div className="max-w-3xl mx-auto">
            {schedule.map((slot, i) => (
              <FadeIn key={slot.time} delay={i * 0.07}>
                <div className="flex gap-6 py-6 border-b border-gris-clair last:border-0">
                  <div className="w-20 shrink-0 font-inter font-semibold text-or text-lg pt-1">{slot.time}</div>
                  <div>
                    <h3 className="font-playfair font-semibold text-xl text-violet-fonce mb-2">{slot.title}</h3>
                    <p className="text-gris-moyen font-inter text-sm leading-relaxed">{slot.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage + CTA */}
      <section className="bg-beige py-24 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <blockquote className="bg-white rounded-2xl p-10 shadow-sm border border-gris-clair">
                <div className="text-6xl text-or/20 font-playfair leading-none mb-4">&ldquo;</div>
                <p className="text-gris-fonce font-inter leading-relaxed italic text-lg mb-6">
                  En une heure avec les chevaux, nous avons vu des dynamiques que notre DRH cherchait
                  à comprendre depuis 2 ans. Le debrief a été d'une richesse incroyable.
                </p>
                <footer>
                  <p className="font-playfair font-semibold text-violet-fonce">Marc T.</p>
                  <p className="text-gris-moyen font-inter text-sm">Directeur Commercial, Paris</p>
                </footer>
              </blockquote>
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">
                Prêt pour l&apos;expérience ?
              </p>
              <h2 className="text-4xl font-playfair font-semibold text-violet-fonce mb-6">
                Offrez à votre équipe une journée qui change tout
              </h2>
              <p className="text-gris-moyen font-inter mb-6 leading-relaxed">
                Nous adaptons chaque journée à la taille et aux enjeux spécifiques de votre équipe,
                et vous proposons un domaine partenaire dans votre région.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Aucune expérience équestre requise",
                  "Domaine sélectionné près de chez vous",
                  "Rapport de restitution sous 10 jours",
                  "Financement OPCO possible",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gris-fonce font-inter text-sm">
                    <Check className="w-4 h-4 text-or shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <MagneticButton href="/audit-gratuit">
                Organiser ma journée <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-violet-fonce py-20">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-white text-4xl font-playfair font-semibold mb-4">
              Où que vous soyez en France
            </h2>
            <p className="text-white/70 font-inter text-lg mb-8 max-w-xl mx-auto">
              Nous trouvons le domaine partenaire idéal à proximité de votre équipe.
              Contactez-nous pour vérifier la disponibilité dans votre région.
            </p>
            <MagneticButton href="/contact">
              Vérifier la disponibilité <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
