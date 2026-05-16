import Link from 'next/link'
import FadeIn from '../../components/FadeIn'

export const metadata = {
  title: 'Blog — Neurosciences & Performance Managériale',
  description: "Articles d'expertise sur les neurosciences du leadership, la performance managériale et l'équicoaching.",
}

const articles = [
  {
    slug: 'article-1',
    title: 'Pourquoi vos managers épuisent leurs équipes (et comment y remédier)',
    tag: 'Neurosciences',
    date: '12 mai 2025',
    excerpt: "Les neurosciences révèlent pourquoi 70 % des managers créent involontairement du stress dans leurs équipes — et les 3 leviers pour inverser cette dynamique.",
  },
  {
    slug: 'article-2',
    title: "Équicoaching : science ou développement personnel ?",
    tag: 'Équicoaching',
    date: '28 avril 2025',
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
            Neurosciences du leadership, performance managériale, équicoaching : notre regard d'experts.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {articles.map((a, i) => (
            <FadeIn key={a.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${a.slug}`}
                className="group block bg-white rounded-2xl p-8 border border-gris-clair hover:border-or/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-or font-inter font-semibold text-xs tracking-widest uppercase">{a.tag}</span>
                <h2 className="font-playfair font-semibold text-xl text-violet-fonce mt-3 mb-3 group-hover:text-violet transition-colors leading-snug">
                  {a.title}
                </h2>
                <p className="text-gris-moyen font-inter text-sm leading-relaxed mb-4">{a.excerpt}</p>
                <p className="text-gris-moyen font-inter text-xs">{a.date}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
