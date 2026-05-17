import Link from 'next/link'
import FadeIn from '../../components/FadeIn'

export const metadata = {
  title: 'Blog — Neurosciences & Performance Managériale | SD Équicoaching',
  description: "Articles d'expertise sur les neurosciences du leadership, la performance managériale et l'équicoaching.",
}

const articles = [
  {
    slug: 'formation-management-guide-complet-2026',
    title: 'Formation Management 2026 : Le Guide Complet pour Choisir et Financer votre Programme',
    tag: 'Management & Performance',
    date: '15 janvier 2026',
    readTime: '12 min',
    excerpt: "Tout ce que vous devez savoir pour naviguer dans un marché de la formation en pleine mutation et choisir le programme qui produira de vrais résultats durables.",
  },
  {
    slug: 'neurosciences-management-leadership',
    title: 'Neurosciences et Management : Ce que votre cerveau dit de votre leadership',
    tag: 'Neurosciences',
    date: '3 février 2026',
    readTime: '14 min',
    excerpt: "Théorie polyvagale, biais cognitifs, contagion émotionnelle : comment les neurosciences comportementales révolutionnent le management et ce que cela change concrètement.",
  },
  {
    slug: 'equicoaching-entreprise-teambuilding-cheval',
    title: 'Équicoaching en Entreprise : Comment le cheval révèle et transforme vos équipes',
    tag: 'Équicoaching',
    date: '20 février 2026',
    readTime: '13 min',
    excerpt: "Fondements scientifiques, déroulé d'une journée, résultats mesurés : tout ce qu'il faut savoir pour organiser un teambuilding équicoaching qui transforme vraiment votre équipe.",
  },
  {
    slug: 'article-1',
    title: 'Pourquoi vos managers épuisent leurs équipes (et comment y remédier)',
    tag: 'Neurosciences',
    date: '12 mai 2025',
    readTime: '8 min',
    excerpt: "Les neurosciences révèlent pourquoi 70 % des managers créent involontairement du stress dans leurs équipes — et les 3 leviers pour inverser cette dynamique.",
  },
  {
    slug: 'article-2',
    title: "Équicoaching : science ou développement personnel ?",
    tag: 'Équicoaching',
    date: '28 avril 2025',
    readTime: '7 min',
    excerpt: "Analyse des fondements scientifiques de l'équicoaching et de son efficacité prouvée dans le développement du leadership d'équipe.",
  },
]

export default function BlogPage() {
  return (
    <section className="bg-beige min-h-screen">
      <div className="container pt-32 pb-20">
        <FadeIn className="mb-16">
          <p className="text-or font-inter font-semibold text-sm tracking-widest uppercase mb-4">Blog & Articles</p>
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-violet-fonce">Expertise & Insights</h1>
          <p className="text-gris-moyen font-inter text-lg mt-4 max-w-2xl">
            Neurosciences du leadership, performance managériale, équicoaching : notre regard d&apos;experts.
          </p>
        </FadeIn>

        {/* Article vedette */}
        <FadeIn className="mb-10">
          <Link
            href={`/blog/${articles[0].slug}`}
            className="group block bg-white rounded-2xl p-10 border border-gris-clair hover:border-or/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <span className="text-or font-inter font-semibold text-xs tracking-widest uppercase">{articles[0].tag}</span>
            <h2 className="font-playfair font-semibold text-2xl md:text-3xl text-violet-fonce mt-3 mb-4 group-hover:text-violet transition-colors leading-snug max-w-3xl">
              {articles[0].title}
            </h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-4 max-w-2xl">{articles[0].excerpt}</p>
            <p className="text-gris-moyen font-inter text-xs">{articles[0].date} · {articles[0].readTime} de lecture</p>
          </Link>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {articles.slice(1).map((a, i) => (
            <FadeIn key={a.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${a.slug}`}
                className="group block bg-white rounded-2xl p-8 border border-gris-clair hover:border-or/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full"
              >
                <span className="text-or font-inter font-semibold text-xs tracking-widest uppercase">{a.tag}</span>
                <h2 className="font-playfair font-semibold text-xl text-violet-fonce mt-3 mb-3 group-hover:text-violet transition-colors leading-snug">
                  {a.title}
                </h2>
                <p className="text-gris-moyen font-inter text-sm leading-relaxed mb-4">{a.excerpt}</p>
                <p className="text-gris-moyen font-inter text-xs">{a.date} · {a.readTime} de lecture</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
