import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import FadeIn from '../../../components/FadeIn'
import MagneticButton from '../../../components/MagneticButton'

export const metadata = {
  title: 'Neurosciences et Management : Ce que votre cerveau dit de votre leadership | SD Équicoaching',
  description: "Comment les neurosciences comportementales révolutionnent le management. Théorie polyvagale, régulation émotionnelle, biais cognitifs : les clés scientifiques d'un leadership performant.",
}

export default function ArticleNeurosciences() {
  return (
    <>
      <section className="bg-violet-fonce min-h-[45vh] flex items-end relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-fonce to-violet" />
        <div className="container relative z-10 pt-32 pb-16">
          <FadeIn>
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 font-inter text-sm hover:text-or transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </Link>
            <span className="text-or font-inter font-semibold text-xs tracking-widest uppercase block mb-4">Neurosciences</span>
            <h1 className="text-white text-3xl md:text-5xl font-playfair font-semibold max-w-4xl leading-tight">
              Neurosciences et Management : Ce que votre cerveau dit de votre leadership
            </h1>
            <p className="text-white/60 font-inter text-sm mt-6">Par Sarah D. — 3 février 2026 · 14 min de lecture</p>
          </FadeIn>
        </div>
      </section>

      <article className="bg-white py-16 md:py-24">
        <div className="container max-w-3xl">
          <FadeIn>
            <p className="text-gris-moyen font-inter text-lg leading-relaxed mb-8 italic border-l-4 border-or pl-6">
              Votre cerveau prend 95% de vos décisions managériales en dehors de votre conscience. Comprendre ces mécanismes invisibles est devenu le levier le plus puissant — et le plus sous-utilisé — du développement du leadership.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">Le mythe du manager rationnel</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Nous aimons croire que nos décisions managériales sont le fruit d'une analyse rationnelle et objective. La réalité neurologique est radicalement différente. Le neuroscientifique António Damásio l'a démontré dès les années 90 avec ses travaux sur des patients ayant subi des lésions du cortex préfrontal ventromédian : lorsque la connexion entre raison et émotion est rompue, la capacité à prendre de bonnes décisions s'effondre complètement.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Autrement dit : sans accès à ses émotions, un manager ne peut pas décider. Ce n'est pas une faiblesse — c'est une architecture neurologique fondamentale. Les managers qui "ne laissent pas leurs émotions interférer" ne sont pas plus rationnels : ils sont simplement moins conscients des signaux émotionnels qui orientent leurs choix.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-8">
              Le premier enjeu des neurosciences appliquées au management n'est donc pas d'éliminer les émotions, mais de les comprendre et de les utiliser comme données d'information pertinentes.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">La théorie polyvagale : la révolution silencieuse du leadership</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              En 1994, le chercheur Stephen Porges publiait sa théorie polyvagale — une description du système nerveux autonome qui allait transformer notre compréhension des comportements sous stress. Aujourd'hui, cette théorie est l'une des bases les plus importantes de la formation management avancée.
            </p>

            <h3 className="text-xl font-playfair font-semibold text-violet-fonce mt-8 mb-4">Les 3 états du système nerveux</h3>
            <p className="text-gris-moyen font-inter leading-relaxed mb-4">
              Selon la théorie polyvagale, notre système nerveux autonome opère dans 3 états distincts, chacun associé à un ensemble de comportements, de perceptions et de capacités cognitives spécifiques :
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-beige rounded-xl p-6">
                <h4 className="font-playfair font-semibold text-lg text-violet-fonce mb-2">État de sécurité (système ventrovagal)</h4>
                <p className="text-gris-moyen font-inter text-sm leading-relaxed">
                  Le manager est calme, accessible, créatif. Son cortex préfrontal est pleinement opérationnel. Il peut résoudre des problèmes complexes, écouter profondément, prendre des décisions nuancées. C'est l'état optimal du leadership.
                </p>
              </div>
              <div className="bg-or-pale rounded-xl p-6">
                <h4 className="font-playfair font-semibold text-lg text-violet-fonce mb-2">État de mobilisation (système sympathique)</h4>
                <p className="text-gris-moyen font-inter text-sm leading-relaxed">
                  Activation du mode "combat ou fuite". Le manager devient réactif, défensif, impulsif ou au contraire figé. Sa pensée se rétrécit au présent immédiat. En entretien difficile ou sous pression des résultats, c'est souvent l'état dans lequel se retrouvent la plupart des managers.
                </p>
              </div>
              <div className="border border-gris-clair rounded-xl p-6">
                <h4 className="font-playfair font-semibold text-lg text-violet-fonce mb-2">État d'effondrement (système dorsovagal)</h4>
                <p className="text-gris-moyen font-inter text-sm leading-relaxed">
                  Déconnexion, résignation, apathie. Le manager est là physiquement mais absent mentalement. Souvent confondu avec de la distance ou du calme, cet état correspond en réalité à un système nerveux qui a abandonné toute tentative de régulation.
                </p>
              </div>
            </div>

            <p className="text-gris-moyen font-inter leading-relaxed mb-8">
              L'enjeu du manager n'est pas d'éliminer les états 2 et 3 — ils font partie de notre équipement de survie. L'enjeu est de les reconnaître en temps réel, de savoir y revenir rapidement à l'état de sécurité, et de ne pas prendre de décisions importantes lorsqu'on est dans un état activé.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">La contagion émotionnelle : vous êtes le thermostat de votre équipe</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Les neurones miroirs ont été découverts presque par accident dans les années 90 par Giacomo Rizzolatti et son équipe à Parme. Ces neurones s'activent non seulement quand nous exécutons une action, mais aussi quand nous observons quelqu'un d'autre l'exécuter. Ils sont le substrat neurologique de l'empathie et de la contagion émotionnelle.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Pour le manager, la conséquence est capitale : votre état émotionnel se propage littéralement dans le cerveau de chacun de vos collaborateurs. Un manager anxieux crée une équipe anxieuse. Un manager en mode survie place toute son équipe en mode défensif. Et inversement.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Daniel Goleman l'a formalisé dans ses recherches sur l'intelligence émotionnelle : les managers à haut coefficient d'intelligence émotionnelle obtiennent des performances supérieures de 20 à 30% par rapport à leurs pairs. Non parce qu'ils sont plus "sympathiques", mais parce qu'ils créent neurologiquement les conditions de la performance dans leurs équipes.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-8">
              Ce que le cheval révèle dans une séance d'équicoaching est précisément cela : les animaux, en tant que proies sans langage verbal, réagissent directement à l'état du système nerveux de la personne en face d'eux. Pas à ce qu'elle dit. Pas à ses intentions déclarées. À ce qu'elle est, ici et maintenant.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">Les biais cognitifs qui sabotent vos décisions managériales</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Daniel Kahneman et Amos Tversky ont cartographié plus de 180 biais cognitifs — ces raccourcis mentaux que notre cerveau emprunte pour économiser de l'énergie. En situation managériale, plusieurs d'entre eux ont un impact direct et documenté sur la qualité des décisions :
            </p>

            <h3 className="text-xl font-playfair font-semibold text-violet-fonce mt-8 mb-3">Le biais de confirmation</h3>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Nous cherchons et mémorisons préférentiellement les informations qui confirment nos croyances préexistantes. Un manager convaincu qu'un collaborateur est "difficile" va sélectionner inconsciemment les comportements qui confirment cette étiquette, tout en minimisant les preuves contraires. Résultat : des évaluations biaisées, des décisions RH injustes, et des dynamiques d'équipe toxiques qui s'auto-renforcent.
            </p>

            <h3 className="text-xl font-playfair font-semibold text-violet-fonce mt-8 mb-3">L'effet d'ancrage</h3>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              La première information reçue sur un sujet ancre notre jugement de façon disproportionnée. Pour un entretien d'évaluation, les 5 premières minutes conditionnent souvent 70% de l'évaluation finale. Former les managers à identifier et contrecarrer cet effet peut transformer radicalement la qualité des évaluations de performance.
            </p>

            <h3 className="text-xl font-playfair font-semibold text-violet-fonce mt-8 mb-3">Le biais d'attribution</h3>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Quand quelque chose va bien, nous l'attribuons à nos compétences. Quand ça va mal, c'est la faute des circonstances. Pour les équipes, c'est l'inverse : les succès sont attribués aux circonstances, les échecs aux individus. Ce biais est une source majeure de démotivation et d'injustice perçue dans les équipes.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">Régulation émotionnelle : le muscle du leader de haut niveau</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              La régulation émotionnelle n'est pas la suppression des émotions — c'est la capacité à choisir comment y répondre. C'est un ensemble de compétences qui s'acquièrent et se développent, exactement comme un muscle.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Les techniques de régulation émotionnelle les plus validées scientifiquement incluent : la cohérence cardiaque (qui active le nerf vague et crée un état de calme physiologique en 5 minutes), les techniques de recadrage cognitif (changer la narration interne sur une situation stressante), l'ancrage sensoriel (activer les sens pour "atterrir" dans le présent), et la pratique mindfulness qui épaissit littéralement le cortex préfrontal.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-8">
              Ce qui distingue les managers de haute performance des autres n'est pas qu'ils ressentent moins de stress — c'est qu'ils reviennent plus vite à un état de régulation après avoir été activés. Cette capacité, mesurable et développable, est au cœur de nos programmes de formation.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">La sécurité psychologique : le facteur n°1 de performance d'équipe</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              En 2012, Google a lancé le Projet Aristotle : une étude de 2 ans sur des centaines d'équipes internes pour identifier ce qui détermine la performance collective. Le résultat a surpris tout le monde : le facteur n°1 n'était pas les compétences techniques, ni la composition de l'équipe, ni même la clarté des objectifs. C'était la sécurité psychologique — la conviction partagée que l'équipe est un environnement sûr pour prendre des risques interpersonnels.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Amy Edmondson, la chercheuse qui a conceptualisé ce terme à Harvard, a identifié 4 niveaux de sécurité psychologique dans une équipe : sécurité d'inclusion (je peux être moi-même), sécurité d'apprentissage (je peux faire des erreurs sans punition), sécurité de contribution (mes idées sont bienvenues), sécurité de challenge (je peux remettre en question les décisions).
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-8">
              Neurologiquement, la sécurité psychologique active le système ventrovagal des membres de l'équipe — l'état de sécurité décrit plus haut. Dans cet état, la créativité, la prise d'initiative, et la collaboration authentique deviennent naturelles. Sans elle, l'équipe fonctionne en mode survie : silencieuse en réunion, en retrait face aux risques, hyper-politique dans ses relations.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">Comment intégrer les neurosciences dans son management quotidien</h2>

            <p className="text-gris-moyen font-inter leading-relaxed mb-4">
              <strong className="text-violet-fonce">Avant une décision importante :</strong> prenez 5 minutes pour faire une cohérence cardiaque. Inspirez 5 secondes, expirez 5 secondes, en portant l'attention sur la zone du cœur. Cela active le système parasympathique et optimise les ressources du cortex préfrontal.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-4">
              <strong className="text-violet-fonce">Avant un entretien difficile :</strong> identifiez votre état du système nerveux. Êtes-vous en mode sécurité, mobilisation, ou effondrement ? Si vous n'êtes pas en état de sécurité, repoussez l'entretien si possible — ou utilisez des techniques d'ancrage rapide.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-4">
              <strong className="text-violet-fonce">En réunion :</strong> observez la physiologie de votre équipe autant que vous écoutez les mots. Un collaborateur qui se penche en arrière, croise les bras, parle moins — c'est souvent un signal de mobilisation défensive, pas de désintérêt.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-8">
              <strong className="text-violet-fonce">Dans vos feedbacks :</strong> les biais cognitifs se renforcent mutuellement. Adoptez le protocole SBI (Situation-Comportement-Impact) pour ancrer vos observations dans des faits observables plutôt que dans des interprétations.
            </p>

            <div className="bg-violet-pale rounded-2xl p-8 mt-12 mb-8">
              <p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-3">L'essentiel</p>
              <p className="font-playfair font-semibold text-xl text-violet-fonce mb-4">Neurosciences et management : 4 principes à retenir</p>
              <ul className="space-y-3 text-gris-fonce font-inter text-sm">
                {[
                  "Votre état du système nerveux conditionne la qualité de vos décisions",
                  "Votre état émotionnel se propage dans toute votre équipe via les neurones miroirs",
                  "La régulation émotionnelle est une compétence qui se développe comme un muscle",
                  "La sécurité psychologique est le levier n°1 de performance collective"
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-or shrink-0 mt-1.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </article>

      <section className="bg-violet-fonce py-20">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-white text-3xl md:text-4xl font-playfair font-semibold mb-4">
              Découvrez votre profil neuro-leadership
            </h2>
            <p className="text-white/70 font-inter mb-8 max-w-xl mx-auto">
              Un audit gratuit de 45 minutes pour cartographier votre style de régulation émotionnelle et vos leviers de performance.
            </p>
            <MagneticButton href="https://calendly.com/sara-dabancens/seance-decouverte">
              Réserver mon audit <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
