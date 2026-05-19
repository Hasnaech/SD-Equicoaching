import Link from 'next/link'
import AnimatedSection from '../../../components/AnimatedSection'
import Button from '../../../components/Button'

export const metadata = {
  title: 'Neurosciences et leadership : ce que la science change à la formation managériale | SD Équicoaching',
  description: 'Comment les neurosciences transforment l\'approche de la formation managériale. Plasticité cérébrale, régulation émotionnelle, mémoire procédurale — comprendre pour mieux apprendre.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Neurosciences et leadership : ce que la science change à la formation managériale',
  author: { '@type': 'Organization', name: 'SD Équicoaching' },
  publisher: { '@type': 'Organization', name: 'SD Équicoaching', url: 'https://sd-equicoaching.fr' },
  datePublished: '2025-05-12',
  inLanguage: 'fr',
}

export default function Article1Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero page-hero--cream" aria-labelledby="art1-title">
        <div className="container page-hero-content page-hero-content--center">
          <AnimatedSection animation="reveal">
            <Link href="/blog" className="back-link">← Retour au blog</Link>
          </AnimatedSection>
          <div className="article-meta-hero">
            <span className="blog-category">Neurosciences</span>
            <span className="blog-date">12 mai 2025</span>
            <span className="blog-read-time">6 min de lecture</span>
          </div>
          <AnimatedSection tag="h1" id="art1-title" animation="reveal" delay={100} className="page-title page-title--dark">
            Neurosciences et leadership : ce que la science change à la formation managériale
          </AnimatedSection>
        </div>
        <div className="hero-curve hero-curve--cream" aria-hidden="true" />
      </section>

      <article className="section article-content">
        <div className="container article-container">
          <AnimatedSection animation="reveal" className="article-body">

            <p className="article-lead">
              Pendant des décennies, la formation managériale reposait sur la répétition cognitive
              et les mises en situation simulées. Les neurosciences bouleversent ce paradigme :
              nous savons aujourd'hui que les comportements durables s'ancrent par l'émotion,
              pas par la répétition.
            </p>

            <h2>Le mythe de la répétition cognitive</h2>
            <p>
              La formation classique suppose qu'apprendre un nouveau comportement de leadership,
              c'est comme apprendre une règle mathématique : il suffit de la comprendre, de la
              répéter, et elle finit par s'ancrer. La réalité neurobiologique est bien différente.
            </p>
            <p>
              Le cortex préfrontal — siège de la rationalité et de la planification — peut
              parfaitement «savoir» comment déléguer efficacement, comment écouter activement,
              ou comment réguler ses émotions sous pression. Mais lorsque le stress monte, c'est
              le système limbique qui prend le dessus. Et lui, il ne se souvient pas des PowerPoints.
            </p>

            <h2>Ce que change la plasticité neuronale</h2>
            <p>
              La neuroplasticité — la capacité du cerveau à se remodeler — nous offre une clé
              précieuse : les connexions neuronales se renforcent durablement quand un apprentissage
              est associé à une expérience émotionnellement significative.
            </p>
            <p>
              C'est le principe de ce qu'on appelle la «mémoire procédurale émotionnelle» :
              les comportements appris dans un état d'activation émotionnelle modérée (ni trop
              faible pour être engageant, ni trop fort pour être paralysant) sont retenus
              beaucoup plus durablement que ceux appris dans un état neutre.
            </p>

            <blockquote className="article-quote">
              <p>«Les neurones qui s'activent ensemble se lient ensemble.»</p>
              <footer>— Donald Hebb, neuropsychologue</footer>
            </blockquote>

            <h2>Le rôle du système limbique dans le leadership</h2>
            <p>
              Le système limbique — amygdale, hippocampe, cortex cingulaire — gère nos émotions,
              nos réactions de stress et notre mémoire émotionnelle. C'est lui qui détermine, en
              situation de pression, si un manager va régresser vers ses anciens schémas
              comportementaux ou au contraire maintenir ses nouvelles postures de leadership.
            </p>
            <p>
              Les formations qui n'activent pas ce système limbique pendant l'apprentissage
              obtiennent des comportements «de surface» — performants lors des jeux de rôle,
              mais qui s'effacent dès que la pression professionnelle s'intensifie.
            </p>

            <h2>Comment notre approche intègre ces découvertes</h2>
            <p>
              Notre programme combine deux leviers d'activation neurobiologique :
            </p>
            <ol>
              <li>
                <strong>L'équicoaching</strong> : l'interaction avec le cheval crée un état
                d'activation émotionnelle idéal pour l'apprentissage. Le feedback sensoriel
                immédiat et non-jugeant du cheval active le système limbique de manière profonde,
                créant des ancrages durables.
              </li>
              <li>
                <strong>Les outils de neurofeedback comportemental</strong> : entre les séances,
                des exercices de mindfulness, de régulation respiratoire et de visualisation
                mobilisée renforcent les nouveaux circuits neuronaux.
              </li>
            </ol>
            <p>
              Le résultat : des comportements de leadership qui résistent au stress et à la pression,
              parce qu'ils sont ancrés neurobiologiquement — pas seulement compris intellectuellement.
            </p>

            <h2>Ce que ça change concrètement</h2>
            <p>
              Nos participants témoignent de changements perceptibles dès le retour en entreprise.
              Non pas des améliorations théoriques («je sais qu'il faut mieux déléguer») mais des
              transformations comportementales observables («depuis la formation, mes équipes me
              disent que je suis plus présent en réunion»).
            </p>
            <p>
              C'est la différence entre un apprentissage cortical et un apprentissage neurobiologique :
              l'un s'oublie sous pression, l'autre devient un réflexe.
            </p>

          </AnimatedSection>

          <AnimatedSection animation="reveal" delay={200} className="article-cta-box">
            <h3>Prêt à expérimenter par vous-même ?</h3>
            <p>
              À l'issue de notre échange, nous vous ferons une proposition de programme et de budget
              adaptée à votre situation. Si ce n'est pas le bon moment, vous repartirez déjà avec
              des pistes pour vos futures actions.
            </p>
            <div className="article-cta-buttons">
              <Button href="/offres/formation-individuelle" variant="primary">
                Découvrir la formation individuelle
              </Button>
              <Button href="/contact" variant="outline">Prendre contact</Button>
            </div>
          </AnimatedSection>

          <nav className="article-nav" aria-label="Navigation entre articles">
            <Link href="/blog" className="article-nav-back">← Tous les articles</Link>
            <Link href="/blog/article-2" className="article-nav-next">
              Équicoaching : le cheval comme coach →
            </Link>
          </nav>
        </div>
      </article>
    </>
  )
}
