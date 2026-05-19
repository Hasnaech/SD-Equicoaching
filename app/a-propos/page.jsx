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

      {/* Le Collectif */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Notre équipe</p>
            <h2 className="text-4xl font-playfair font-semibold text-violet-fonce mb-4">4 expertes, une approche unique</h2>
            <p className="text-gris-moyen font-inter text-lg max-w-2xl mx-auto leading-relaxed">
              SD Équicoaching, c&apos;est un collectif pluridisciplinaire qui combine neurosciences, coaching, formation et équicoaching pour une transformation managériale complète et mesurable.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Sarah */}
            <FadeIn delay={0}>
              <div className="bg-white rounded-2xl border border-gris-clair overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full" style={{ borderTop: '4px solid #7C5CBF' }}>
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="font-playfair font-semibold text-2xl text-violet-fonce mb-1">Sarah Dabancens</h3>
                    <p className="text-or font-inter font-semibold text-sm">Directrice & Fondatrice</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Neurosciences comportementales", "Équicoach certifiée", "Manager de Transition"].map((tag) => (
                      <span key={tag} className="bg-violet-pale text-violet font-inter text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed flex-1">
                    15 ans de management opérationnel dans le luxe. Directrice Commerciale devenue Manager de Transition et Coach en neurosciences. Elle orchestre les accompagnements et garantit la cohérence scientifique de chaque programme.
                  </p>
                  <div className="mt-6 pt-4 border-t border-gris-clair">
                    <p className="text-violet font-inter font-semibold text-xs">150+ leaders formés · 15 ans terrain</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Christine */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gris-clair overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full" style={{ borderTop: '4px solid #C9A84C' }}>
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="font-playfair font-semibold text-2xl text-violet-fonce mb-1">Christine</h3>
                    <p className="text-or font-inter font-semibold text-sm">Responsable Formation</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["MBTI certifiée", "PNL praticienne", "Expertise santé"].map((tag) => (
                      <span key={tag} className="bg-or-pale text-or font-inter text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed flex-1">
                    Formatrice experte avec 350 managers formés. Certifiée MBTI, praticienne PNL, elle construit et déploie les programmes de formation sur mesure. Ancienne formatrice à l&apos;école ESI.
                  </p>
                  <div className="mt-6 pt-4 border-t border-gris-clair">
                    <p className="text-or font-inter font-semibold text-xs">350+ managers formés</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Audrey */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gris-clair overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full" style={{ borderTop: '4px solid #C9A84C' }}>
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="font-playfair font-semibold text-2xl text-violet-fonce mb-1">Audrey</h3>
                    <p className="text-or font-inter font-semibold text-sm">Responsable Team Building & Séminaires</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Équicoaching", "Facilitation", "Dynamiques de groupe"].map((tag) => (
                      <span key={tag} className="bg-or-pale text-or font-inter text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed flex-1">
                    Spécialiste des séminaires et team buildings équicoaching. Elle conçoit et anime les journées d&apos;immersion avec les chevaux, garantissant un ancrage corporel durable des apprentissages.
                  </p>
                  <div className="mt-6 pt-4 border-t border-gris-clair">
                    <p className="text-or font-inter font-semibold text-xs">200+ centres partenaires</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Hasnae */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gris-clair overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full" style={{ borderTop: '4px solid #7C5CBF' }}>
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="font-playfair font-semibold text-2xl text-violet-fonce mb-1">Hasnae</h3>
                    <p className="text-or font-inter font-semibold text-sm">Experte Marketing & Communication</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Stratégie", "Marque employeur", "Communication"].map((tag) => (
                      <span key={tag} className="bg-violet-pale text-violet font-inter text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gris-moyen font-inter text-sm leading-relaxed flex-1">
                    Elle pilote la stratégie de communication du collectif et accompagne les entreprises dans la valorisation de leur démarche QVCT et marque employeur.
                  </p>
                  <div className="mt-6 pt-4 border-t border-gris-clair">
                    <p className="text-violet font-inter font-semibold text-xs">Vision 360°</p>
                  </div>
                </div>
              </div>
            </FadeIn>

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
            <MagneticButton href="https://calendly.com/sara-dabancens/seance-decouverte">
              Prendre rendez-vous <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
