'use client'
import { Suspense, lazy } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown, Star } from 'lucide-react'
import GradientBlob from '../components/GradientBlob'
import FadeIn from '../components/FadeIn'
import TextReveal from '../components/TextReveal'
import AnimatedNumber from '../components/AnimatedNumber'
import MagneticButton from '../components/MagneticButton'

const HeroScene3D = lazy(() => import('../components/HeroScene3D'))

const problems = [
  {
    icon: '📉',
    title: 'Votre turnover explose',
    desc: "Vos meilleurs talents quittent le navire, le recrutement coûte cher, et les équipes peinent à retrouver leur cohésion.",
  },
  {
    icon: '🔥',
    title: 'Conflits récurrents',
    desc: "Tensions entre managers et équipes, communication dysfonctionnelle, ambiance qui pèse sur la performance collective.",
  },
  {
    icon: '😰',
    title: "Vos managers s'épuisent",
    desc: "Surcharge, perte de sens, difficulté à embarquer leurs équipes : le leadership s'use dans l'urgence permanente.",
  },
]

const steps = [
  { n: '01', title: 'Audit Neuro-Management', desc: "Analyse approfondie des dynamiques de vos équipes et des leviers de performance invisibles." },
  { n: '02', title: "Plan d'action sur-mesure", desc: "Définition des axes de transformation selon vos objectifs stratégiques et votre culture d'entreprise." },
  { n: '03', title: 'Formations Neurosciences', desc: "Programmes de développement du leadership ancrés dans les neurosciences comportementales." },
  { n: '04', title: 'Ancrage Équicoaching', desc: "Ateliers immersifs avec le cheval pour ancrer durablement les nouvelles postures managériales." },
]

const offers = [
  {
    icon: '🏆',
    title: 'Formation Leadership',
    subtitle: 'Haute Performance',
    desc: "Programme intensif de 3 à 6 mois pour transformer vos managers en leaders qui inspirent et fédèrent.",
    features: ["Bilan neuro-leadership personnalisé", "Coaching individuel & collectif", "Séances équicoaching mensuelles", "Mesure ROI à 3 et 6 mois"],
    href: '/formation-leadership',
    featured: true,
  },
  {
    icon: '🐴',
    title: 'Teambuilding',
    subtitle: 'Équicoaching',
    desc: "Journée d'exception pour révéler et transformer les dynamiques de votre équipe.",
    features: ["Diagnostic des rôles d'équipe", "Ateliers avec les chevaux", "Debrief collectif approfondi", "Plan d'action co-construit"],
    href: '/teambuilding-equicoaching',
    featured: false,
  },
  {
    icon: '🎯',
    title: 'Audit Gratuit',
    subtitle: 'Performance Managériale',
    desc: "45 minutes pour identifier vos 3 leviers prioritaires de performance. Sans engagement.",
    features: ["Analyse de votre contexte", "Diagnostic personnalisé", "Recommandations actionnables", "Feuille de route stratégique"],
    href: '/audit-gratuit',
    featured: false,
  },
]

const testimonials = [
  {
    quote: "En 6 mois, nos indicateurs RH ont été transformés. Le taux d'engagement a bondi de 34 points. L'approche neurosciences + cheval est d'une efficacité redoutable.",
    name: "Marc T.",
    role: "DRH, groupe industriel 800 personnes",
  },
  {
    quote: "Je gérais des situations complexes avec une tension permanente. Après le programme, je comprends ce qui se joue réellement et j'ai les outils pour agir différemment.",
    name: "Sophie L.",
    role: "Directrice de business unit",
  },
  {
    quote: "Le teambuilding équicoaching a révélé en une journée ce que deux ans d'observation RH n'avaient pas permis de voir. Le debrief était d'une richesse incroyable.",
    name: "Pierre M.",
    role: "CEO, ETI familiale",
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-beige">
        <GradientBlob />
        <Suspense fallback={null}>
          <HeroScene3D />
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-br from-violet-fonce/85 via-violet/70 to-violet/50" />

        <div className="relative z-10 container pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-or/40 bg-or/10 backdrop-blur-sm mb-8"
          >
            <span className="text-or font-inter font-semibold text-sm tracking-widest">
              NEUROSCIENCES · MANAGEMENT · ÉQUICOACHING
            </span>
          </motion.div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-6 max-w-5xl leading-tight">
            <TextReveal>Transformez vos managers en leaders haute performance</TextReveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl font-inter mb-10 max-w-2xl leading-relaxed"
          >
            Cabinet conseil en performance managériale.{' '}
            <strong className="text-or">Approche unique en France : Neurosciences × Équicoaching.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <MagneticButton href="/audit-gratuit" variant="primary">
              Réserver un audit gratuit <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <Link href="#methode" className="btn-outline-white">
              Découvrir la méthode
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-6 text-white/70 font-inter text-sm"
          >
            {['Certification Qualiopi', '15+ ans expérience', 'Paris & Île-de-France'].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-or" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          aria-hidden="true"
        >
          <ChevronDown className="w-6 h-6 text-or" />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-violet py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '150', suffix: '+', label: 'Managers formés' },
              { value: '98',  suffix: '%', label: 'Taux de satisfaction' },
              { value: '15',  suffix: '+', label: "Années d'expertise" },
              { value: '3',   suffix: 'x', label: 'ROI moyen constaté' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-or text-4xl md:text-5xl font-bold font-playfair mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/75 font-inter text-sm">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLÈMES */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">
              Signaux d&apos;alerte
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">
              <TextReveal>Vous reconnaissez-vous ?</TextReveal>
            </h2>
            <p className="text-gris-moyen text-lg max-w-2xl mx-auto font-inter">
              Ces signaux révèlent des dynamiques invisibles qui plafonnent vos résultats.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <motion.div
                  className="card h-full"
                  whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(120,66,127,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl mb-5">{p.icon}</div>
                  <h3 className="text-2xl font-playfair font-semibold text-violet-fonce mb-3">{p.title}</h3>
                  <p className="text-gris-moyen font-inter leading-relaxed">{p.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="text-center mt-14">
            <p className="text-xl font-inter text-gris-fonce max-w-3xl mx-auto">
              Le problème n&apos;est pas vos managers. Ce sont les{' '}
              <span className="text-or font-semibold">dynamiques invisibles</span>{' '}
              qui régissent vos équipes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MÉTHODE A.N.E. */}
      <section id="methode" className="bg-beige py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(120,66,127,0.07) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="container relative z-10">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Notre approche</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">La Méthode A.N.E.</h2>
            <p className="text-gris-moyen text-lg max-w-2xl mx-auto font-inter">
              Audit + Neurosciences + Équicoaching = Transformation durable et mesurable
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.1} className="relative">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full bg-violet flex items-center justify-center">
                    <span className="text-white font-bold font-inter text-lg">{step.n}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-14 right-0 h-px border-t-2 border-dashed border-or/30" />
                  )}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-violet-fonce mb-3">{step.title}</h3>
                <p className="text-gris-moyen font-inter text-sm leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Nos programmes</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">Choisissez votre transformation</h2>
            <p className="text-gris-moyen text-lg max-w-2xl mx-auto font-inter">
              Des interventions sur-mesure, calibrées sur vos enjeux managériaux réels.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((offer, i) => (
              <FadeIn key={offer.title} delay={i * 0.1}>
                <div className={`rounded-2xl p-8 h-full flex flex-col border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  offer.featured
                    ? 'bg-violet-fonce border-or'
                    : 'bg-white border-gris-clair hover:border-or/40'
                }`}>
                  {offer.featured && (
                    <div className="inline-flex items-center gap-1 bg-or/20 text-or text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                      <Star className="w-3 h-3" /> Le plus demandé
                    </div>
                  )}
                  <div className="text-4xl mb-4">{offer.icon}</div>
                  <h3 className={`font-playfair font-semibold text-2xl mb-1 ${offer.featured ? 'text-white' : 'text-violet-fonce'}`}>
                    {offer.title}
                  </h3>
                  <p className="text-or font-inter font-semibold text-sm mb-4">{offer.subtitle}</p>
                  <p className={`font-inter text-sm leading-relaxed mb-6 ${offer.featured ? 'text-white/75' : 'text-gris-moyen'}`}>
                    {offer.desc}
                  </p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {offer.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 font-inter text-sm ${offer.featured ? 'text-white/85' : 'text-gris-fonce'}`}>
                        <Check className="w-4 h-4 text-or shrink-0 mt-0.5" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={offer.href}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-inter font-semibold text-sm transition-all hover:scale-105 ${
                      offer.featured
                        ? 'bg-or text-white hover:bg-or-fonce'
                        : 'border-2 border-violet text-violet hover:bg-violet hover:text-white'
                    }`}
                  >
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-beige py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Ils témoignent</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold">Des transformations réelles</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <blockquote className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col border border-gris-clair">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-or text-or" />
                    ))}
                  </div>
                  <p className="text-gris-fonce font-inter leading-relaxed mb-6 flex-1 italic text-[15px]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <p className="font-playfair font-semibold text-violet-fonce">{t.name}</p>
                    <p className="text-gris-moyen font-inter text-sm">{t.role}</p>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-violet-fonce py-24 md:py-32 relative overflow-hidden">
        <GradientBlob />
        <div className="container relative z-10 text-center">
          <FadeIn>
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">
              Passez à l&apos;action
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-playfair font-semibold mb-6 max-w-3xl mx-auto">
              Prêt à transformer la performance de vos équipes ?
            </h2>
            <p className="text-white/70 font-inter text-lg mb-10 max-w-2xl mx-auto">
              Réservez votre audit gratuit de 45 minutes. Diagnostic personnalisé, recommandations actionnables. Sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton href="/audit-gratuit" variant="primary">
                Réserver mon audit gratuit <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <Link href="/contact" className="btn-outline-white">
                Nous contacter
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
