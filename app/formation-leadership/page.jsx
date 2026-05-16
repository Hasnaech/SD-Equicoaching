import Link from 'next/link'
import { ArrowRight, Check, Clock, Users, Award } from 'lucide-react'
import FadeIn from '../../components/FadeIn'
import TextReveal from '../../components/TextReveal'
import MagneticButton from '../../components/MagneticButton'

export const metadata = {
  title: 'Formation Leadership Haute Performance — Neurosciences',
  description: "Programme de transformation managériale par les neurosciences comportementales. Formation individuelle et intra-entreprise. Certification Qualiopi. Paris & IDF.",
}

const modules = [
  { n: '01', title: 'Comprendre votre cerveau de leader', desc: "Neurosciences de base, biais cognitifs, gestion du stress cérébral et régulation émotionnelle en situation de pression." },
  { n: '02', title: 'Communication et influence', desc: "Synchronisation cérébrale, écoute profonde, feedback constructif ancré dans les mécanismes neurologiques." },
  { n: '03', title: "Dynamiques d'équipe", desc: "Lecture des signaux non verbaux, détection des tensions émergentes, création de sécurité psychologique collective." },
  { n: '04', title: 'Leadership sous pression', desc: "Maintenir le cap en situation de crise, décider avec lucidité, préserver son énergie décisionnelle." },
  { n: '05', title: 'Ancrage par équicoaching', desc: "2 à 4 séances avec les chevaux pour incarner physiquement les nouvelles postures de leadership." },
  { n: '06', title: 'Mesure et pérennisation', desc: "Bilan 360°, indicateurs de suivi, plan de développement à 6 et 12 mois avec jalons mesurables." },
]

const formats = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Formation individuelle',
    duration: '3 à 6 mois',
    desc: "Accompagnement sur-mesure d'un manager ou dirigeant. Séances individuelles + équicoaching + suivi continu.",
    features: ["12 séances de coaching individuel", "2 à 4 séances équicoaching", "Bilan neuro-leadership complet", "Rapport de progression mensuel"],
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Formation intra-entreprise',
    duration: '2 à 4 jours',
    desc: "Programme intensif pour un groupe de managers. Ateliers collectifs neurosciences et séances équicoaching.",
    features: ["Groupe de 6 à 12 managers", "Ateliers collectifs sur-mesure", "1 journée équicoaching", "Debrief et rapport RH complet"],
  },
]

export default function FormationLeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-violet-fonce min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-fonce via-violet to-violet/80" />
        <div className="container relative z-10 pt-32 pb-20">
          <FadeIn>
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Formation Leadership</p>
          </FadeIn>
          <h1 className="text-white text-4xl md:text-6xl font-playfair font-semibold mb-6 max-w-4xl leading-tight">
            <TextReveal>Leadership Haute Performance par les Neurosciences</TextReveal>
          </h1>
          <FadeIn delay={0.3}>
            <p className="text-white/80 text-lg md:text-xl font-inter mb-10 max-w-2xl leading-relaxed">
              Transformez durablement votre posture managériale grâce à une approche scientifique unique : neurosciences comportementales et équicoaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton href="/audit-gratuit">
                Démarrer par un audit gratuit <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <Link href="/contact" className="btn-outline-white">Nous contacter</Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.5} className="flex flex-wrap gap-6 mt-10 text-white/60 font-inter text-sm">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-or" /> 3 à 6 mois</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-or" /> Certification Qualiopi</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-or" /> Individuel & Intra-entreprise</span>
          </FadeIn>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Le programme</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold">6 modules de transformation</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m, i) => (
              <FadeIn key={m.n} delay={i * 0.08}>
                <div className="card h-full">
                  <span className="text-or font-bold font-inter text-4xl block mb-4">{m.n}</span>
                  <h3 className="font-playfair font-semibold text-xl text-violet-fonce mb-3">{m.title}</h3>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed">{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-beige py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Formats disponibles</p>
            <h2 className="text-4xl font-playfair font-semibold">Individuel ou collectif</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {formats.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-10 border-2 border-gris-clair hover:border-or/40 transition-all hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-violet-pale flex items-center justify-center text-violet mb-6">
                    {f.icon}
                  </div>
                  <h3 className="font-playfair font-semibold text-2xl text-violet-fonce mb-1">{f.title}</h3>
                  <p className="text-or font-inter font-semibold text-sm mb-4">{f.duration}</p>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed mb-6">{f.desc}</p>
                  <ul className="space-y-2 flex-1">
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-gris-fonce font-inter text-sm">
                        <Check className="w-4 h-4 text-or shrink-0 mt-0.5" />{feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-violet-fonce py-24 md:py-32">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-white text-4xl font-playfair font-semibold mb-6">
              Prêt à transformer votre leadership ?
            </h2>
            <p className="text-white/75 font-inter text-lg mb-8 max-w-xl mx-auto">
              Commencez par un audit gratuit de 45 minutes pour définir votre programme sur-mesure.
            </p>
            <MagneticButton href="/audit-gratuit">
              Réserver mon audit gratuit <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
