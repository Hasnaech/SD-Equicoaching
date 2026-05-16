import Link from 'next/link'
import AnimatedSection from '../../components/AnimatedSection'

export const metadata = {
  title: 'Blog — Neurosciences, Leadership & Équicoaching | SD Équicoaching',
  description: 'Articles et ressources sur les neurosciences du leadership, le management et l\'équicoaching. Découvrez nos insights pour développer votre potentiel.',
}

const articles = [
  {
    slug: 'article-1',
    title: 'Neurosciences et leadership : ce que la science change à la formation managériale',
    excerpt: 'Pendant des décennies, la formation managériale reposait sur la répétition cognitive et les mises en situation simulées. Les neurosciences bouleversent ce paradigme : nous savons aujourd\'hui que les comportements durables s\'ancrent par l\'émotion, pas par la répétition.',
    category: 'Neurosciences',
    date: '12 mai 2025',
    readTime: '6 min',
    tags: ['Neurosciences', 'Leadership', 'Formation'],
  },
  {
    slug: 'article-2',
    title: 'Équicoaching : pourquoi le cheval est le meilleur coach de leadership qui soit',
    excerpt: 'Cela semble surprenant de prime abord. Pourtant, de plus en plus de dirigeants, managers et équipes RH témoignent : une heure avec les chevaux leur a révélé ce que des années de formation conventionnelle n\'avaient pas réussi à faire bouger.',
    category: 'Équicoaching',
    date: '28 avril 2025',
    readTime: '8 min',
    tags: ['Équicoaching', 'Coaching', 'Team building'],
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="page-hero page-hero--cream" aria-labelledby="blog-title">
        <div className="container page-hero-content page-hero-content--center">
          <AnimatedSection animation="reveal" className="page-badge">Blog & Ressources</AnimatedSection>
          <AnimatedSection tag="h1" id="blog-title" animation="reveal" delay={100} className="page-title page-title--dark">
            Neurosciences, Leadership<br />& Équicoaching
          </AnimatedSection>
          <AnimatedSection animation="reveal" delay={200} className="page-desc page-desc--dark">
            Nos articles pour comprendre l'approche, approfondir vos connaissances
            et préparer votre transformation.
          </AnimatedSection>
        </div>
        <div className="hero-curve hero-curve--cream" aria-hidden="true" />
      </section>

      <section className="section blog-section" aria-labelledby="articles-title">
        <div className="container">
          <h2 id="articles-title" className="sr-only">Articles récents</h2>
          <div className="blog-grid">
            {articles.map((article, i) => (
              <AnimatedSection key={article.slug} animation="reveal" delay={i * 120} tag="article" className="blog-card">
                <div className="blog-card-meta">
                  <span className="blog-category">{article.category}</span>
                  <span className="blog-date">{article.date}</span>
                  <span className="blog-read-time">{article.readTime} de lecture</span>
                </div>
                <h2 className="blog-card-title">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="blog-card-excerpt">{article.excerpt}</p>
                <div className="blog-card-footer">
                  <div className="blog-tags">
                    {article.tags.map((tag) => (
                      <span key={tag} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/blog/${article.slug}`} className="blog-read-link">
                    Lire l'article →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
