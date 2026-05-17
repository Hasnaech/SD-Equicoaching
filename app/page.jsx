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
    icon: '😰',
    title: 'Votre meilleur manager vient de craquer',
    desc: "Burn-out, arrêt maladie, ou pire : il est là physiquement, mais mentalement il a déjà démissionné. Et vous ne l'avez pas vu venir.",
  },
  {
    icon: '🔥',
    title: 'Vos réunions ressemblent à des rings de boxe',
    desc: "Tensions, non-dits, micro-agressions. Vous passez 80 % de votre temps à éteindre des feux au lieu de construire.",
  },
  {
    icon: '💸',
    title: 'Le turnover vous coûte une fortune',
    desc: "Recrutement, formation, perte de productivité. 6 à 24 mois de salaire par départ. Et ça recommence 18 mois plus tard.",
  },
]

const steps = [
  { n: '01', title: 'On voit ce qui ne marche pas', desc: "Audit neuro-management. On identifie les dynamiques invisibles qui plombent votre performance. Rapport PDF actionnable sous 3 semaines." },
  { n: '02', title: 'On leur explique pourquoi ils réagissent comme ça', desc: "Formation neurosciences comportementales. Vos managers comprennent ce qui se passe dans leur cerveau quand ça chauffe. Et comment réguler." },
  { n: '03', title: 'On ancre tout ça dans le corps', desc: "Équicoaching en équipe. Le cheval révèle instantanément si vous êtes régulé ou pas. Impossible de tricher. Impossible d'oublier." },
  { n: '04', title: 'On mesure. Tout.', desc: "Suivi post-formation à M+1 et M+3. Indicateurs définis avant le démarrage. Résultats prouvés, pas estimés." },
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
    desc: "Journée d'exception dans l'un de nos 200+ domaines partenaires partout en France.",
    features: ["Partout en France — 200+ partenaires", "Ateliers avec les chevaux", "Debrief collectif approfondi", "Plan d'action co-construit"],
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
    quote: "J'étais sceptique. Genre vraiment sceptique. Un cheval, sérieusement ? Puis on a essayé. En 6 mois, notre turnover a chuté de 30 %. Et les managers nous remercient encore.",
    name: "Marie L.",
    role: "DRH, Groupe Industriel",
    result: "−30 % turnover · +15 pts climat social",
  },
  {
    quote: "15 ans que je manage. Je pensais tout savoir. Cette formation m'a mis face à mes incohérences. Ça fait mal. Mais ça change tout. Maintenant je régule avant de dire un truc que je vais regretter.",
    name: "Pierre D.",
    role: "Directeur Commercial, Pharma",
    result: "+25 % performance équipe",
  },
  {
    quote: "On avait essayé 4 formations avant. Résultat : zéro. Les gens repartaient contents, puis retombaient dans les mêmes patterns 3 semaines après. Là, 6 mois plus tard, ça tient encore.",
    name: "Sophie M.",
    role: "CEO, Startup Tech",
    result: "NPS +40 points",
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
            <TextReveal>Votre meilleur manager vient de démissionner.</TextReveal>
            <span className="text-or block mt-2">
              <TextReveal delay={0.3}>Encore.</TextReveal>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl font-inter mb-10 max-w-2xl leading-relaxed"
          >
            Le problème n&apos;est pas vos managers.<br />
            Ce sont les <strong className="text-or">dynamiques invisibles</strong> qui régissent vos équipes.<br />
            On vous apprend à les voir. Et à les transformer.
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
            {['Certification Qualiopi', '15+ ans expérience', 'Partout en France'].map((badge) => (
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
              { value: '150', suffix: '+', label: 'managers qui ne pètent plus les plombs', note: '(enfin, presque)' },
              { value: '98',  suffix: '%', label: 'nous recommandent', note: '(les 2 % restants n\'ont pas répondu)' },
              { value: '200', suffix: '+', label: 'partenaires équestres', note: 'partout en France' },
              { value: '30',  suffix: '%', label: 'de turnover en moins en moyenne', note: '(oui, on mesure tout)' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-or text-4xl md:text-5xl font-bold font-playfair mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/85 font-inter text-sm font-medium leading-snug">{stat.label}</div>
                <div className="text-white/45 font-inter text-xs mt-1">{stat.note}</div>
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
              On parie que vous reconnaissez au moins 2 de ces situations
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">
              <TextReveal>Ça vous parle ?</TextReveal>
            </h2>
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
            <p className="text-xl font-inter text-gris-fonce max-w-3xl mx-auto leading-relaxed">
              Le problème n&apos;est pas vos managers.{' '}
              <strong className="text-violet-fonce">On ne leur a jamais appris</strong>{' '}
              comment fonctionne leur cerveau sous pression.
            </p>
            <p className="text-gris-moyen font-inter mt-3">
              C&apos;est précisément ce qu&apos;on fait.
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
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Notre méthode</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">On ne vous vend pas du vent.</h2>
            <p className="text-gris-moyen text-lg max-w-2xl mx-auto font-inter">
              3 étapes. Aucun bullshit. Des résultats mesurables.
              <br />Bienvenue dans la <strong className="text-violet-fonce">Méthode A.N.E.</strong>
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

          <FadeIn delay={0.4} className="mt-16 bg-white rounded-2xl p-8 md:p-10 border border-gris-clair max-w-3xl mx-auto text-center">
            <p className="font-playfair font-semibold text-xl text-violet-fonce mb-3">Résultat ?</p>
            <p className="text-gris-moyen font-inter leading-relaxed">
              Vos managers régulent leur stress.{' '}
              <strong className="text-violet-fonce">Vos équipes respirent.</strong>{' '}
              Votre turnover chute.
            </p>
            <p className="text-gris-moyen/60 font-inter text-sm mt-2">(Et on a les chiffres pour le prouver.)</p>
          </FadeIn>
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
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Ce qu&apos;ils disent (vraiment)</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold">Pas de bullshit. Juste des faits.</h2>
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
                    <p className="text-or font-inter font-semibold text-xs mt-2">{t.result}</p>
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
        <div className="container relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-playfair font-semibold mb-4 max-w-3xl mx-auto">
              Combien de managers brillants allez-vous encore perdre cette année ?
            </h2>
            <p className="text-white/70 font-inter text-lg max-w-xl mx-auto">
              Vous avez deux options.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <FadeIn delay={0.1}>
              <div className="bg-white/5 border border-white/15 rounded-2xl p-8 h-full">
                <p className="text-white/50 font-inter font-semibold text-xs uppercase tracking-widest mb-4">Option 1</p>
                <h3 className="text-white font-playfair font-semibold text-xl mb-4">Continuer comme maintenant</h3>
                <ul className="space-y-2 text-white/60 font-inter text-sm">
                  <li>Attendre que ça se calme tout seul</li>
                  <li>Perdre encore 2-3 managers clés</li>
                  <li>Payer le prix (6 à 24 mois de salaire × 3)</li>
                </ul>
                <p className="text-white/30 font-inter text-xs mt-5 italic">Spoiler : ça ne se calmera pas tout seul.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-or/10 border-2 border-or rounded-2xl p-8 h-full">
                <p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-4">Option 2</p>
                <h3 className="text-white font-playfair font-semibold text-xl mb-4">Réserver 30 minutes avec nous</h3>
                <ul className="space-y-2 text-white/80 font-inter text-sm mb-6">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-or shrink-0 mt-0.5" />On analyse votre situation</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-or shrink-0 mt-0.5" />On vous dit si on peut vous aider (ou pas)</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-or shrink-0 mt-0.5" />Sans engagement. Sans bullshit.</li>
                </ul>
                <MagneticButton href="/audit-gratuit">
                  Réserver mon audit gratuit <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="text-center">
            <p className="text-white/35 font-inter text-sm">
              Places limitées chaque mois. On ne prend que les projets où on sait qu&apos;on peut avoir un impact.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
