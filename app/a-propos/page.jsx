import Link from 'next/link'
import { ArrowRight, Award, BookOpen, Heart } from 'lucide-react'
import FadeIn from '../../components/FadeIn'
import MagneticButton from '../../components/MagneticButton'

export const metadata = {
  title: 'À propos — Sarah Dabancens · SD Équicoaching',
  description: "Ancienne Directrice Commerciale, Manager de Transition et Équicoach certifiée. 15 ans de management opérationnel au service des dirigeants et comités de direction.",
}

const values = [
  { icon: <Award className="w-6 h-6" />, title: 'Excellence', desc: "Certification Qualiopi, formation continue, résultats mesurables. L'exigence du secteur luxe appliquée à la performance managériale." },
  { icon: <Heart className="w-6 h-6" />, title: 'Authenticité', desc: "Mon approche ne vient pas des manuels, mais de 15 ans de situations de crise réelles. Ce qui fonctionne dans la vraie vie." },
  { icon: <BookOpen className="w-6 h-6" />, title: 'Rigueur scientifique', desc: "Théorie Polyvagale, neurosciences comportementales, protocoles validés. La science au service de l'excellence managériale." },
]

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-violet-fonce min-h-[50vh] flex items-end relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-fonce to-violet" />
        <div className="container relative z-10 pt-32 pb-16">
          <FadeIn>
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Le cabinet</p>
            <h1 className="text-white text-4xl md:text-6xl font-playfair font-semibold max-w-3xl leading-tight">
              Sarah Dabancens
            </h1>
            <p className="text-white/70 font-inter text-lg mt-3">
              Manager de Transition · Équicoach certifiée · Fondatrice de SD Équicoaching
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Fondatrice */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] relative bg-beige">
                <img
                  src="/img/sarah.jpg"
                  alt="Sarah Dabancens — Fondatrice de SD Équicoaching"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Parcours</p>
              <h2 className="text-4xl font-playfair font-semibold text-violet-fonce mb-6">
                De Directrice Commerciale à Manager de Transition
              </h2>
              <p className="text-gris-moyen font-inter text-lg leading-relaxed mb-6 italic border-l-4 border-or pl-5">
                Mon approche ne vient pas des manuels, mais de 15 ans de management
                opérationnel et de situations de crise.
              </p>
              <div className="space-y-4 text-gris-moyen font-inter leading-relaxed">
                <p>
                  Ancienne Directrice Commerciale dans le secteur du luxe, j&apos;ai vécu
                  la pression des chiffres, l&apos;urgence des restructurations et la complexité
                  des dynamiques de CODIR de l&apos;intérieur. J&apos;ai connu ces réunions qui
                  s&apos;enflamment, ces talents qui partent sans que l&apos;on comprenne vraiment pourquoi.
                </p>
                <p>
                  Devenue <strong className="text-violet-fonce">Manager de Transition</strong> et{' '}
                  <strong className="text-violet-fonce">Équicoach certifiée</strong>, j&apos;ai combiné
                  cette réalité du business avec les neurosciences appliquées. Aujourd&apos;hui, j&apos;interviens
                  auprès de dirigeants et comités de direction pour{' '}
                  <strong className="text-violet-fonce">stabiliser les organisations en mutation</strong>{' '}
                  et transformer la tension biologique en performance collective durable.
                </p>
                <p>
                  SD Équicoaching, c&apos;est l&apos;approche unique qui associe la rigueur des
                  neurosciences comportementales et l&apos;intelligence du vivant pour traiter
                  les dynamiques complexes des équipes dirigeantes.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-violet-pale text-violet font-inter font-semibold text-sm px-4 py-2 rounded-full">Manager de Transition</span>
                <span className="bg-or-pale text-or font-inter font-semibold text-sm px-4 py-2 rounded-full">Certification Qualiopi</span>
                <span className="bg-violet-pale text-violet font-inter font-semibold text-sm px-4 py-2 rounded-full">Coach certifiée ICF</span>
                <span className="bg-violet-pale text-violet font-inter font-semibold text-sm px-4 py-2 rounded-full">Équicoach certifiée</span>
                <span className="bg-violet-pale text-violet font-inter font-semibold text-sm px-4 py-2 rounded-full">Neurosciences comportementales</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-beige py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Ce qui nous guide</p>
            <h2 className="text-4xl font-playfair font-semibold">Nos valeurs</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="card text-center">
                  <div className="w-14 h-14 rounded-2xl bg-violet-pale flex items-center justify-center text-violet mx-auto mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-violet-fonce mb-3">{v.title}</h3>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed">{v.desc}</p>
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
            <h2 className="text-white text-4xl font-playfair font-semibold mb-6">Échangeons sur votre projet</h2>
            <p className="text-white/75 font-inter mb-8 max-w-xl mx-auto leading-relaxed">
              Un diagnostic préliminaire de 30 minutes pour faire connaissance et évaluer
              ensemble comment la neuro-régulation peut sécuriser la performance de votre organisation.
            </p>
            <MagneticButton href="/audit-gratuit">
              Prendre rendez-vous <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
