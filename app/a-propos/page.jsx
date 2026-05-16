import Link from 'next/link'
import { ArrowRight, Award, BookOpen, Heart } from 'lucide-react'
import FadeIn from '../../components/FadeIn'
import MagneticButton from '../../components/MagneticButton'

export const metadata = {
  title: 'À propos — SD Équicoaching',
  description: "Découvrez l'histoire de SD Équicoaching, cabinet conseil en performance managériale unique en France.",
}

const values = [
  { icon: <Award className="w-6 h-6" />, title: 'Excellence', desc: "Certification Qualiopi, formation continue, résultats mesurables et impact concret sur vos équipes." },
  { icon: <Heart className="w-6 h-6" />, title: 'Authenticité', desc: "Une approche humaine, incarnée, sans jargon inutile. Ce qui fonctionne dans la vraie vie." },
  { icon: <BookOpen className="w-6 h-6" />, title: 'Rigueur scientifique', desc: "Fondements neuroscientifiques rigoureux, actualisés en permanence, traduits en outils concrets." },
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
              Derrière SD Équicoaching
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Fondatrice */}
      <section className="bg-white py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="bg-beige rounded-2xl aspect-[4/5] flex items-center justify-center">
                <div className="text-center text-gris-moyen font-inter">
                  <div className="w-32 h-32 rounded-full bg-violet/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-5xl">👩</span>
                  </div>
                  <p className="text-sm italic">Photo à venir</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Fondatrice</p>
              <h2 className="text-4xl font-playfair font-semibold text-violet-fonce mb-6">Sarah D.</h2>
              <div className="space-y-4 text-gris-moyen font-inter leading-relaxed">
                <p>
                  Après 15 ans passés dans le management et la direction d'équipes en entreprise,
                  j'ai voulu mettre à profit cette expérience terrain au service des managers
                  qui vivent les mêmes défis que j'ai vécus.
                </p>
                <p>
                  Certifiée en neurosciences comportementales et formée à l'équicoaching,
                  j'ai développé une approche unique qui combine la rigueur scientifique
                  des neurosciences avec l'intelligence profonde du vivant.
                </p>
                <p>
                  SD Équicoaching, c'est{' '}
                  <strong className="text-violet-fonce">la seule approche en France</strong>{' '}
                  qui associe ces deux disciplines pour traiter les dynamiques complexes
                  des équipes managériales.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-violet-pale text-violet font-inter font-semibold text-sm px-4 py-2 rounded-full">Coach certifiée ICF</span>
                <span className="bg-or-pale text-or font-inter font-semibold text-sm px-4 py-2 rounded-full">Certification Qualiopi</span>
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
            <p className="text-white/75 font-inter mb-8 max-w-xl mx-auto">
              Un audit gratuit de 45 minutes pour faire connaissance et évaluer ensemble ce que nous pouvons accomplir.
            </p>
            <MagneticButton href="/audit-gratuit">
              Réserver mon audit <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
