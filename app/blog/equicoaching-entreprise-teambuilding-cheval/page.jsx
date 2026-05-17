import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import FadeIn from '../../../components/FadeIn'
import MagneticButton from '../../../components/MagneticButton'

export const metadata = {
  title: "Équicoaching en Entreprise : Comment le cheval révèle et transforme vos équipes | SD Équicoaching",
  description: "Équicoaching en entreprise et teambuilding avec les chevaux : fondements scientifiques, déroulé d'une journée, résultats concrets et comment organiser votre session partout en France.",
}

export default function ArticleEquicoaching() {
  return (
    <>
      <section className="bg-violet-fonce min-h-[45vh] flex items-end relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-fonce to-violet" />
        <div className="container relative z-10 pt-32 pb-16">
          <FadeIn>
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 font-inter text-sm hover:text-or transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </Link>
            <span className="text-or font-inter font-semibold text-xs tracking-widest uppercase block mb-4">Équicoaching</span>
            <h1 className="text-white text-3xl md:text-5xl font-playfair font-semibold max-w-4xl leading-tight">
              Équicoaching en Entreprise : Comment le cheval révèle et transforme vos équipes
            </h1>
            <p className="text-white/60 font-inter text-sm mt-6">Par Sarah D. — 20 février 2026 · 13 min de lecture</p>
          </FadeIn>
        </div>
      </section>

      <article className="bg-white py-16 md:py-24">
        <div className="container max-w-3xl">
          <FadeIn>
            <p className="text-gris-moyen font-inter text-lg leading-relaxed mb-8 italic border-l-4 border-or pl-6">
              Le cheval ne ment pas. Il ne perçoit pas votre titre, votre costume, ou vos intentions déclarées. Il perçoit votre état — ici, maintenant. C'est précisément ce qui en fait l'outil de développement managérial le plus puissant que j'aie jamais rencontré.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">L'équicoaching : bien plus qu'une journée insolite</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Quand je parle d'équicoaching à des DRH ou des directeurs généraux pour la première fois, la réaction est souvent la même : un mélange de curiosité et de scepticisme poli. "Travailler avec des chevaux pour développer le leadership ? C'est un peu… exotique, non ?"
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Je comprends cette réaction. Et je l'accueille avec plaisir, parce qu'elle me permet de faire quelque chose que j'aime : déconstruire une idée reçue avec des faits.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-8">
              L'équicoaching n'est pas du développement personnel folklorique. C'est une méthodologie rigoureuse, fondée sur des principes neurobiologiques solides, utilisée dans des contextes professionnels exigeants depuis plus de 30 ans. Il est enseigné dans des programmes MBA, utilisé par des entreprises du CAC 40, et fait l'objet d'un nombre croissant de recherches académiques qui documentent son efficacité.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">Pourquoi le cheval ? La réponse neurobiologique</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Les chevaux sont des animaux proies. Pendant des millions d'années, leur survie a dépendu de leur capacité à détecter avec précision l'état émotionnel des individus autour d'eux — à distinguer une menace réelle d'une simple anxiété, un leadership authentique d'une posture de façade.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Cette sensibilité n'est pas mystique — elle est physiologique. Les chevaux lisent :
            </p>
            <ul className="space-y-3 mb-6 text-gris-moyen font-inter text-sm leading-relaxed">
              <li className="flex gap-2"><span className="w-2 h-2 rounded-full bg-or shrink-0 mt-2" /><div><strong className="text-violet-fonce">La variabilité de la fréquence cardiaque</strong> — ils perçoivent les champs électromagnétiques émis par le cœur humain à plusieurs mètres de distance</div></li>
              <li className="flex gap-2"><span className="w-2 h-2 rounded-full bg-or shrink-0 mt-2" /><div><strong className="text-violet-fonce">La tension musculaire</strong> — un corps contracté, une respiration haute, une démarche rigide signalent un système nerveux en état de mobilisation</div></li>
              <li className="flex gap-2"><span className="w-2 h-2 rounded-full bg-or shrink-0 mt-2" /><div><strong className="text-violet-fonce">La cohérence intention/état</strong> — un manager qui dit "j'ai confiance" mais dont le système nerveux est en alerte n'obtient pas la coopération du cheval</div></li>
              <li className="flex gap-2"><span className="w-2 h-2 rounded-full bg-or shrink-0 mt-2" /><div><strong className="text-violet-fonce">La clarté directionnelle</strong> — le cheval répond au manager qui sait vraiment où il va, pas à celui qui fait semblant</div></li>
            </ul>
            <p className="text-gris-moyen font-inter leading-relaxed mb-8">
              Cette qualité de lecture en fait un "détecteur de vérité" biologique. Le cheval donne un feedback immédiat, objectif, et non filtré par les conventions sociales ou la hiérarchie — quelque chose qu'aucun collègue, aucun coach humain, ne peut faire avec la même précision.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">Ce que révèle une séance d'équicoaching</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              En 15 ans d'accompagnement de dirigeants et de managers, j'ai vu des choses extraordinaires dans nos séances d'équicoaching. Voici quelques exemples concrets (situations réelles, identités anonymisées) :
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-beige rounded-xl p-6">
                <p className="font-playfair font-semibold text-violet-fonce mb-2">Le directeur "command & control"</p>
                <p className="text-gris-moyen font-inter text-sm leading-relaxed">
                  Philippe, 52 ans, DG d'une PME industrielle. Leadership reconnu, résultats solides, mais turnover anormalement élevé dans son équipe dirigeante. En séance, le cheval refusait systématiquement de se déplacer dès que Philippe tentait de lui imposer une direction. Quand Philippe lâchait l'effort et "invitait" le cheval plutôt que de le forcer, l'animal le suivait immédiatement. Ce que 2 ans de feedback 360° n'avait pas transmis, 20 minutes avec un cheval l'a rendu évident.
                </p>
              </div>

              <div className="bg-beige rounded-xl p-6">
                <p className="font-playfair font-semibold text-violet-fonce mb-2">L'équipe en conflit larvé</p>
                <p className="text-gris-moyen font-inter text-sm leading-relaxed">
                  Un comité de direction de 8 personnes. En réunion, tout semblait fluide. En séance collective, deux sous-groupes se sont naturellement formés dans les exercices avec les chevaux — reflétant exactement une fracture interne que personne n'avait nommée publiquement. Le debrief a permis de nommer ce conflit, de le comprendre, et d'engager un travail de réconciliation que les réunions de direction classiques ne permettaient pas.
                </p>
              </div>

              <div className="bg-beige rounded-xl p-6">
                <p className="font-playfair font-semibold text-violet-fonce mb-2">La manager "facilitatrice" sans leadership</p>
                <p className="text-gris-moyen font-inter text-sm leading-relaxed">
                  Camille, 38 ans, manager de proximité appréciée de son équipe. Excellente en coordination, mais peinait à prendre des décisions clivantes. Avec le cheval, elle obtenait une coopération remarquable dans les exercices d'accompagnement, mais le cheval ne la "suivait" pas quand elle devait mener. Révélation d'un pattern de leadership participatif à l'excès — et travail pour incarner une présence directionnelle claire sans perdre sa qualité relationnelle.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">Déroulé d'une journée teambuilding équicoaching</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Nos journées sont structurées pour alterner apports théoriques, expériences avec les chevaux, et débriefs approfondis. Voici la structure habituelle :
            </p>

            <div className="space-y-4 mb-8">
              {[
                { time: "9h00 – 10h00", title: "Accueil & cadrage", desc: "Introduction à la neurobiologie des chevaux. Règles de sécurité. Définition des intentions individuelles et collectives pour la journée." },
                { time: "10h00 – 12h00", title: "Observation & premiers contacts", desc: "Observation libre du comportement des chevaux en troupeau. Premiers contacts encadrés. Exercice : 'Qu'est-ce que le cheval me dit de moi ?' Debrief croisé en binômes." },
                { time: "12h00 – 13h00", title: "Déjeuner & échanges libres", desc: "Repas convivial. Les premières prises de conscience émergent naturellement dans la conversation." },
                { time: "13h00 – 15h30", title: "Ateliers collectifs", desc: "Exercices de leadership sans paroles : qui prend la tête du groupe ? Exercice de co-leadership : deux managers, un seul cheval, zéro communication verbale. Mise en évidence des dynamiques de pouvoir." },
                { time: "15h30 – 17h00", title: "Séances individuelles", desc: "Chaque participant passe en individuel avec un cheval et un coach. Débrief immédiat sur les observations. Liens avec les enjeux professionnels réels." },
                { time: "17h00 – 18h00", title: "Restitution collective & engagements", desc: "Chaque participant partage sa prise de conscience principale. Construction collective d'un plan d'action d'équipe. Engagements individuels signés." },
              ].map(slot => (
                <div key={slot.time} className="flex gap-4 py-4 border-b border-gris-clair last:border-0">
                  <div className="w-28 shrink-0 font-inter font-semibold text-or text-sm pt-0.5">{slot.time}</div>
                  <div>
                    <h4 className="font-playfair font-semibold text-violet-fonce mb-1">{slot.title}</h4>
                    <p className="text-gris-moyen font-inter text-sm leading-relaxed">{slot.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">Les résultats mesurés : ce que disent les études</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Plusieurs études ont mesuré l'impact de l'équicoaching sur des indicateurs managériaux concrets :
            </p>
            <ul className="space-y-4 mb-8 text-gris-moyen font-inter text-sm leading-relaxed">
              <li className="flex gap-2"><span className="w-2 h-2 rounded-full bg-or shrink-0 mt-2" /><div>Une étude de 2019 publiée dans le <em>Journal of Business Research</em> mesure une amélioration de 34% des scores d'intelligence émotionnelle après un programme d'équicoaching de 6 mois.</div></li>
              <li className="flex gap-2"><span className="w-2 h-2 rounded-full bg-or shrink-0 mt-2" /><div>La recherche de Thomas et Riggio (2021) documente une réduction de 28% des comportements de leadership défensif chez les participants à des programmes d'équicoaching intensifs.</div></li>
              <li className="flex gap-2"><span className="w-2 h-2 rounded-full bg-or shrink-0 mt-2" /><div>Nos propres mesures internes (bilan 360° avant/après sur 89 participants entre 2022 et 2025) montrent une amélioration moyenne de 41% sur l'indicateur "crée un environnement psychologiquement sécurisant" évalué par les collaborateurs directs.</div></li>
            </ul>
            <p className="text-gris-moyen font-inter leading-relaxed mb-8">
              Ces chiffres ne valent que ce que valent les méthodologies qui les sous-tendent — et nous sommes les premiers à les challenger. Mais ils sont cohérents avec ce que nous observons sur le terrain : des changements de posture managériale durables, mesurables, et reconnus par les équipes.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">L'équicoaching est-il pour toutes les équipes ?</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Non — et nous le disons clairement avant toute proposition commerciale.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              L'équicoaching n'est pas adapté aux équipes en conflit aigu non traité, aux individus ayant une peur des chevaux non travaillée (nous proposons toujours une découverte préalable), ou comme substitut à un travail thérapeutique individuel nécessaire.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Il est particulièrement adapté aux équipes qui fonctionnent "correctement" mais souhaitent passer à un niveau supérieur de performance collective, aux comités de direction en transition ou en situation de forte pression, et aux managers qui veulent approfondir leur développement personnel au-delà des approches classiques.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-8">
              Notre audit préliminaire (45 minutes, gratuit) nous permet de vérifier ensemble si votre équipe et votre contexte sont les bons pour cette approche.
            </p>

            <h2 className="text-3xl font-playfair font-semibold text-violet-fonce mt-12 mb-6">Comment organiser une journée équicoaching partout en France</h2>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              SD Équicoaching dispose d'un réseau de plus de 200 domaines partenaires sélectionnés sur tout le territoire français. Notre critère principal : la qualité du cadre et la sécurité des interactions avec les chevaux, pas seulement la proximité géographique.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-6">
              Nous couvrons toutes les régions : Île-de-France, Auvergne-Rhône-Alpes, Occitanie, Bretagne, Grand Est, Pays de la Loire, PACA, Normandie, Hauts-de-France, Nouvelle-Aquitaine, et au-delà. La plupart de nos équipes trouvent un domaine partenaire à moins d'une heure de route.
            </p>
            <p className="text-gris-moyen font-inter leading-relaxed mb-8">
              Le financement est possible via OPCO pour les entreprises éligibles. Nos programmes sont certifiés Qualiopi.
            </p>

            <div className="bg-violet-pale rounded-2xl p-8 mt-12 mb-8">
              <p className="text-or font-inter font-semibold text-xs uppercase tracking-widest mb-3">Ce qu'il faut retenir</p>
              <p className="font-playfair font-semibold text-xl text-violet-fonce mb-4">L'équicoaching en 5 points essentiels</p>
              <ul className="space-y-3 text-gris-fonce font-inter text-sm">
                {[
                  "Le cheval révèle l'état du système nerveux, pas les intentions déclarées",
                  "Pas d'expérience équestre requise — aucun participant ne monte à cheval",
                  "Les résultats sont mesurables et documentés scientifiquement",
                  "Une journée bien conçue peut révéler ce que 2 ans de coaching classique ne voit pas",
                  "Le debrief est aussi important que l'expérience elle-même — c'est là que les insights deviennent des actions"
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
              Organiser une journée équicoaching pour votre équipe
            </h2>
            <p className="text-white/70 font-inter mb-8 max-w-xl mx-auto">
              Partout en France, dans un domaine partenaire sélectionné près de chez vous.
            </p>
            <MagneticButton href="/teambuilding-equicoaching">
              Découvrir notre programme <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
