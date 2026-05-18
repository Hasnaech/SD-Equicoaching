'use client'
import { Suspense, lazy } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronDown, Star } from 'lucide-react'
import GradientBlob from '../components/GradientBlob'
import FadeIn from '../components/FadeIn'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'

const HeroScene3D = lazy(() => import('../components/HeroScene3D'))

const piliers = [
  {
    icon: '🧠',
    title: 'Fondements neuroscientifiques',
    desc: "Théorie Polyvagale (Porges) · Neurobiologie du trauma (Van der Kolk) · Positive Intelligence (Chamine) · Intelligence émotionnelle (Goleman)",
  },
  {
    icon: '🐴',
    title: 'Équicoaching neurobiologique',
    desc: "Le cheval perçoit les variations de fréquence cardiaque à 4 mètres et réagit instantanément à l'état nerveux du manager — feedback corporel impossible à intellectualiser.",
  },
  {
    icon: '📊',
    title: 'Approche mesurable',
    desc: "Diagnostic avant/après · Évaluations 360° pré/post · Mesure HRV · Échelles validées PSS-10 · Indicateurs de suivi à 3 et 6 mois.",
  },
  {
    icon: '✓',
    title: 'Certification Qualiopi',
    desc: "Éligible financement OPCO, Plan de développement des compétences. Conformité aux standards nationaux de formation continue.",
  },
]

const problems = [
  {
    icon: '📉',
    title: 'Turnover managérial élevé',
    symptoms: [
      "Talents clés qui quittent malgré des packages attractifs",
      "Coûts de recrutement et d'intégration récurrents",
      "Continuité managériale fragilisée",
    ],
    neuro: "Le turnover reflète souvent un état de dérégulation chronique du système nerveux autonome. Sous pression constante, le manager bascule progressivement d'un état vagal ventral (clarté, connexion, créativité) vers des états de survie (combat, fuite, figement) qui altèrent sa capacité de décision et sa posture relationnelle.",
    sequence: "Détection de menace (amygdale) → Cortisol ↑ → Déconnexion cortex préfrontal → Décisions sous-optimales répétées → Épuisement → Départ",
    action: "Identifier les signaux physiologiques précurseurs et activer des protocoles de régulation validés scientifiquement (cohérence cardiaque, ancrage somatique).",
  },
  {
    icon: '⚡',
    title: 'Dynamiques d'équipe complexes',
    symptoms: [
      "Tensions latentes au sein des équipes ou du COMEX",
      "Silos fonctionnels, déficit de collaboration transverse",
      "Réunions improductives, décisions ralenties",
      "Baromètre social dégradé",
    ],
    neuro: "Les systèmes nerveux se co-régulent (Porges, 2011). Via le principe de neuroception, chaque collaborateur évalue inconsciemment « Suis-je en sécurité ici ? » — basé sur la posture, le ton et les micro-expressions du manager. Un manager en état sympathique propage cet état à toute l'équipe par mimétisme neurologique (neurones miroirs).",
    sequence: "État du manager → Contagion émotionnelle (neurones miroirs) → Désynchronisation des états nerveux collectifs → Performance dégradée",
    action: "Former les managers à devenir des régulateurs de système : créer un climat de sécurité psychologique et co-réguler l'état nerveux collectif de l'équipe.",
  },
  {
    icon: '🔋',
    title: 'Épuisement et désengagement',
    symptoms: [
      "Arrêts maladie longue durée",
      "Présentéisme, désengagement progressif",
      "Irritabilité, perte de capacité d'écoute",
      "Signaux de burn-out (épuisement, cynisme, inefficacité)",
    ],
    neuro: "L'épuisement n'est pas une faiblesse individuelle mais une réponse neurobiologique au stress chronique non régulé. Le système nerveux maintenu en mode survie épuise progressivement les ressources cognitives et émotionnelles jusqu'à l'état vagal dorsal (retrait, effondrement).",
    sequence: "Stress chronique → Cortisol élevé en continu → Épuisement surrénalien → Inflammation → Altération cognitive → État dorsal",
    action: "Protocoles de régulation quotidiens activant l'état vagal ventral (cohérence cardiaque, ancrage somatique). Prévention primaire du burn-out par la neurobiologie appliquée.",
  },
]

const steps = [
  {
    n: '01', title: 'Audit Neuro-Management',
    desc: "Diagnostic factuel par lecture neurobiologique des dynamiques individuelles et collectives. Cartographie des états nerveux dominants (Ventral/Sympathique/Dorsal). Rapport 30-50 pages avec matrice de priorisation.",
  },
  {
    n: '02', title: 'Formation Neurosciences',
    desc: "Programme 21h fondé sur la Théorie Polyvagale (Porges), la Positive Intelligence (Chamine) et les protocoles de régulation validés (cohérence cardiaque, ancrage somatique, dialogue IFS).",
  },
  {
    n: '03', title: 'Ancrage Équicoaching',
    desc: "Le cheval révèle instantanément l'état nerveux réel du manager — impossible à intellectualiser. Inscription dans la mémoire procédurale pour une intégration durable (Van der Kolk, 2014).",
  },
  {
    n: '04', title: 'Mesure & Suivi',
    desc: "Évaluations 360° pré/post · Échelles validées PSS-10 · Indicateurs HRV · Suivi longitudinal à M+1, M+3, M+6. Résultats prouvés, pas estimés.",
  },
]

const testimonials = [
  {
    quote: "La Théorie Polyvagale a donné un langage commun pour comprendre et réguler nos états nerveux collectifs. Notre équipe de direction a particulièrement apprécié la rigueur scientifique de la méthode — c'est exactement ce qui nous manquait pour objectiver des dynamiques que nous pressentions sans parvenir à les traiter.",
    name: "Marie L.",
    role: "Directrice des Ressources Humaines",
    company: "Groupe Industriel, 850 collaborateurs",
  },
  {
    quote: "Identifier mon état nerveux avant chaque interaction importante a transformé ma posture. Les protocoles de régulation (cohérence cardiaque, ancrage somatique) sont devenus des réflexes quotidiens. 15 ans de management, et c'est la première formation qui explique ce qui se passe neurologiquement.",
    name: "Pierre D.",
    role: "Directeur Commercial",
    company: "Laboratoire pharmaceutique",
  },
  {
    quote: "Comprendre la neuroception a changé ma manière de gérer les situations difficiles. Je ne réagis plus à chaud. L'équicoaching m'a montré concrètement l'écart entre mon intention et mon impact réel. Mes équipes sont plus engagées, moi plus serein.",
    name: "Thomas D.",
    role: "Directeur de Business Unit",
    company: "Groupe technologique",
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
              THÉORIE POLYVAGALE · NEUROSCIENCES · ÉQUICOACHING
            </span>
          </motion.div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-6 max-w-5xl leading-tight">
            <TextReveal>Transformez votre leadership</TextReveal>
            <span className="text-or block mt-1">
              <TextReveal delay={0.2}>par les neurosciences comportementales</TextReveal>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl font-inter mb-6 max-w-2xl leading-relaxed"
          >
            Cabinet spécialisé en Théorie Polyvagale appliquée au management.
            Nous formons les dirigeants et managers à comprendre les mécanismes
            neurobiologiques qui régissent leurs décisions, leurs émotions
            et leur impact sur leurs équipes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/60 font-inter text-sm mb-8 leading-relaxed"
          >
            <span className="text-white/80 font-semibold">Fondements scientifiques : </span>
            Théorie Polyvagale (Porges) · Neurobiologie du trauma (Van der Kolk) · Positive Intelligence (Chamine) · Intelligence émotionnelle (Goleman)
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <MagneticButton href="/audit-gratuit" variant="primary">
              Réserver un diagnostic préliminaire <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <Link href="#neurosciences" className="btn-outline-white">
              Découvrir la Théorie Polyvagale
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-6 text-white/70 font-inter text-sm"
          >
            {['Méthodologie propriétaire A.N.E.', 'Certification Qualiopi', '15+ ans d\'expérience', '150+ leaders formés'].map((badge) => (
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

      {/* 4 PILIERS */}
      <section className="bg-violet py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {piliers.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl mb-3">{p.icon}</div>
                  <h3 className="text-white font-playfair font-semibold text-lg mb-2 leading-snug">{p.title}</h3>
                  <p className="text-white/65 font-inter text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLÉMATIQUES NEUROBIOLOGIQUES */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-6">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">
              Enjeux neurologiques
            </p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">
              <TextReveal>Les défis managériaux que nous adressons</TextReveal>
            </h2>
          </FadeIn>
          <FadeIn className="text-center mb-16">
            <p className="text-gris-moyen font-inter text-lg max-w-3xl mx-auto leading-relaxed">
              Les environnements VUCA exigent des leaders une capacité accrue de régulation émotionnelle.
              Nous intervenons sur trois enjeux neurologiques récurrents.
            </p>
          </FadeIn>

          <div className="space-y-8 max-w-5xl mx-auto">
            {problems.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-gris-clair overflow-hidden">
                  <div className="bg-violet-fonce/5 px-8 py-6 flex items-center gap-4 border-b border-gris-clair">
                    <span className="text-4xl">{p.icon}</span>
                    <h3 className="font-playfair font-semibold text-2xl text-violet-fonce">{p.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gris-clair">
                    <div className="p-6">
                      <p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-3">Symptômes observés</p>
                      <ul className="space-y-2">
                        {p.symptoms.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-gris-moyen font-inter text-sm leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-or shrink-0 mt-1.5" />{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6">
                      <p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-3">Ce que les neurosciences révèlent</p>
                      <p className="text-gris-moyen font-inter text-sm leading-relaxed mb-3">{p.neuro}</p>
                      <p className="text-violet font-inter text-xs font-semibold leading-relaxed border-t border-gris-clair pt-3">
                        ↳ {p.sequence}
                      </p>
                    </div>
                    <div className="p-6">
                      <p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-3">Notre intervention</p>
                      <p className="text-gris-moyen font-inter text-sm leading-relaxed">{p.action}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Méthodologie propriétaire</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">La Méthode A.N.E.</h2>
            <p className="text-gris-moyen text-lg max-w-2xl mx-auto font-inter">
              Développée sur 15 années de recherche appliquée et validée auprès de 150+ leaders.
              <br />Trois piliers complémentaires pour une transformation durable par la neurobiologie.
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

      {/* NEUROSCIENCES THOUGHT LEADERSHIP */}
      <section id="neurosciences" className="bg-violet-fonce py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Comprendre le mécanisme</p>
            <h2 className="text-white text-4xl md:text-5xl font-playfair font-semibold mb-4">
              Pourquoi les neurosciences transforment le leadership
            </h2>
            <p className="text-white/70 font-inter text-lg max-w-3xl mx-auto">
              La séquence neurobiologique de la dérégulation managériale — et comment l&apos;interrompre.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                step: '01',
                title: 'Détection de menace',
                organ: 'Amygdale',
                desc: "Un email critique, un objectif perçu comme irréaliste, une remise en question publique : l'amygdale s'active en quelques millisecondes. Elle évalue l'environnement à la recherche de signaux de danger sur la base d'expériences passées stockées en mémoire implicite.",
              },
              {
                step: '02',
                title: 'Réponse sympathique',
                organ: 'Système nerveux sympathique',
                desc: "Libération de cortisol et d'adrénaline. Rythme cardiaque de 70 à 120+ bpm. Tension musculaire ↑. Déconnexion partielle du cortex préfrontal — siège de la pensée stratégique. La pensée devient binaire. La nuance disparaît.",
              },
              {
                step: '03',
                title: 'Altération des capacités',
                organ: 'Cortex préfrontal inhibé',
                desc: "Réactivité émotionnelle excessive, perte d'empathie, décisions sous-optimales prises dans l'urgence émotionnelle, communication dégradée. Le manager fonctionne depuis son cerveau limbique, pas depuis son cortex préfrontal.",
              },
              {
                step: '04',
                title: 'Propagation à l'équipe',
                organ: 'Neurones miroirs',
                desc: "Via les neurones miroirs (Rizzolatti, 1996), l'état de stress se propage en quelques secondes à l'ensemble de l'équipe. Un manager en état sympathique active les systèmes sympathiques de ses collaborateurs. Réunion tendue, créativité effondrée.",
              },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/15 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-or font-bold font-inter text-3xl leading-none">{item.step}</span>
                    <div>
                      <p className="text-white font-playfair font-semibold text-lg leading-snug">{item.title}</p>
                      <p className="text-or font-inter text-xs font-semibold uppercase tracking-widest">{item.organ}</p>
                    </div>
                  </div>
                  <p className="text-white/70 font-inter text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="max-w-3xl mx-auto">
            <div className="bg-white/10 border border-or/30 rounded-2xl p-8 text-center">
              <p className="text-or font-inter font-semibold text-sm uppercase tracking-widest mb-4">Notre réponse neurobiologique</p>
              <p className="text-white font-playfair font-semibold text-xl mb-4">
                Interrompre la cascade. Réactiver le cortex. Réguler le système.
              </p>
              <p className="text-white/70 font-inter text-sm leading-relaxed mb-6">
                Cohérence cardiaque (HRV) · Ancrage somatique (voie afférente) · Protocoles IFS ·
                Pratiques de présence attentive · Équicoaching (mémoire procédurale)
              </p>
              <MagneticButton href="/formation-leadership">
                Découvrir le programme complet <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OFFRES */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Programmes</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">Nos interventions</h2>
            <p className="text-gris-moyen text-lg max-w-2xl mx-auto font-inter">
              Des programmes sur-mesure fondés sur la Méthode A.N.E., calibrés sur vos enjeux managériaux réels.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Formation Leadership',
                subtitle: 'Neurosciences × Équicoaching',
                desc: "Programme 21h (3 jours ou 3×1j). Théorie Polyvagale appliquée, protocoles de régulation validés, ancrage par équicoaching. Pour managers, dirigeants et membres de COMEX.",
                features: ["Bilan neuro-leadership personnalisé", "Protocoles de régulation (HRV, ancrage)", "Séances équicoaching avec debrief", "Suivi longitudinal M+1, M+3, M+6"],
                href: '/formation-leadership',
                featured: true,
              },
              {
                icon: '🐴',
                title: 'Teambuilding',
                subtitle: 'Équicoaching Collectif',
                desc: "Journée d'équipe fondée sur les mécanismes neurobiologiques de co-régulation. Révèle les dynamiques collectives, synchronise les états nerveux. 200+ partenaires partout en France.",
                features: ["Partout en France — 200+ partenaires", "Exercices neuro-équicoaching", "Debrief collectif approfondi", "Plan d'action co-construit"],
                href: '/teambuilding-equicoaching',
                featured: false,
              },
              {
                icon: '🎯',
                title: 'Diagnostic Préliminaire',
                subtitle: 'Audit Neuro-Management',
                desc: "90 minutes pour analyser votre contexte managérial à travers le prisme des neurosciences et identifier les leviers de transformation prioritaires. Sans engagement.",
                features: ["Cartographie des états nerveux dominants", "Analyse des dynamiques collectives", "Recommandations actionnables", "Feuille de route neurobiologique"],
                href: '/audit-gratuit',
                featured: false,
              },
            ].map((offer, i) => (
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
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-3">Témoignages</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold">Ce que disent nos clients</h2>
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
                    <p className="text-gris-moyen/70 font-inter text-xs mt-0.5">{t.company}</p>
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
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">
              Première étape
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-playfair font-semibold mb-6">
              Évaluez le potentiel de transformation de votre organisation
            </h2>
            <p className="text-white/70 font-inter text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Diagnostic préliminaire de <strong className="text-white">90 minutes</strong> pour analyser votre contexte managérial
              à travers le prisme des neurosciences et identifier les leviers de transformation prioritaires.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto text-left">
              {[
                "Objectiver vos enjeux managériaux actuels",
                "Découvrir notre méthodologie A.N.E.",
                "Recevoir une première analyse avec recommandations",
                "Évaluer la pertinence de l'accompagnement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-or shrink-0 mt-0.5" />
                  <span className="text-white/80 font-inter text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <MagneticButton href="/audit-gratuit" variant="primary">
                Planifier mon diagnostic <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <Link href="/contact" className="btn-outline-white">
                Nous contacter
              </Link>
            </div>

            <p className="text-white/35 font-inter text-sm">
              Format : Visioconférence · Participants recommandés : DRH + Direction Générale · Sans engagement · Confidentiel
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
