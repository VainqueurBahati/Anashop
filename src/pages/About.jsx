import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Building2, Target, Eye, Award } from 'lucide-react';

const About = ({ language }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe-animation').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const translations = {
    fr: {
      title: 'À propos - ANACHOP',
      description: 'Découvrez l\'histoire, la mission et les valeurs de l\'ANACHOP',
      pageTitle: 'À propos de nous',
      history: 'Notre Histoire',
      historyText: `Après les indépendances africaines, les peuples d’Afrique subsaharienne ont nourri de grands espoirs de progrès social et économique. Mais, au fil des décennies, la réalité a montré une aggravation de la pauvreté, de la misère et de la dégradation des conditions sanitaires.
Des maladies autrefois maîtrisées – telles que le VIH/SIDA, le paludisme, la tuberculose, l’anémie et d’autres épidémies – ont refait surface, frappant les populations les plus vulnérables.

C’est dans ce contexte difficile qu’un groupe de professionnels de la santé et du développement, conduit par le Docteur MUKUNDA WATINGA Faustin, a décidé d’agir.
Le 4 février 1995, à Kinshasa, ils fondèrent ANACHOP – Les Analystes, Chercheurs et Organisateurs Professionnels, une Organisation Non Gouvernementale de Développement (ONGD) œuvrant dans les domaines de la santé, du social, de l’agriculture et de l’entretien des routes de desserte agricole.

L’objectif initial était clair : soutenir les structures sanitaires privées, souvent isolées et fragilisées, en instaurant une mutuelle d’entraide pour leur offrir une protection sociale, économique et professionnelle.
ANACHOP est ainsi née d’un esprit de solidarité, de justice sociale et de développement communautaire.

Au fil des années, l’organisation a :

- implanté des comités de base dans plusieurs communes et provinces de la RDC ;
- mis en place un système structuré de cotisations et de gestion transparente ;
- obtenu la personnalité juridique (n° S27/CAS/MET/SOH/2010) et plusieurs arrêtés interministériels (2015) lui accordant des facilités administratives et fiscales ;
- élargi ses actions aux domaines sociaux et agricoles, pour contribuer à la lutte contre la pauvreté dans toutes ses dimensions.

Aujourd’hui, forte de ses décennies d’expérience, l’ANACHOP – ONGD Santé et Social demeure un modèle de solidarité professionnelle et un acteur clé du développement communautaire en République Démocratique du Congo.`,
      mission: 'Notre Mission',
      missionText: `L’ANACHOP – ONGD Santé et Social a pour mission de réduire la pauvreté et d’améliorer l’accès aux soins de santé à travers un système de mutuelle d’entraide et de solidarité nationale.
Nous œuvrons pour :

soutenir matériellement et financièrement les centres de santé, pharmacies, laboratoires et tradipraticiens membres ;

renforcer leurs capacités face aux taxes illégales, abus administratifs et difficultés économiques ;

mettre en place une mutuelle nationale de soins médicaux ouverte à tous ;

lutter activement contre les maladies d’appauvrissement telles que le VIH/SIDA, le paludisme, la tuberculose, l’anémie et d’autres épidémies ;

promouvoir des projets de développement social, agricole et sanitaire au bénéfice des communautés locales.

Ainsi, notre mission s’inscrit dans la volonté de protéger, soutenir et autonomiser les acteurs du secteur privé de la santé tout en améliorant la qualité de vie des populations congolaises.`,
      vision: 'Notre Vision',
      visionText: `Nous aspirons à bâtir une République Démocratique du Congo forte, solidaire et en bonne santé,
où :

chaque citoyen, quel que soit son niveau social, peut accéder à des soins de qualité ;

les structures sanitaires privées deviennent des acteurs stables, compétents et reconnus du développement national ;

la mutualisation des ressources et la transparence dans la gestion garantissent la pérennité des services de santé et sociaux ;

la coopération entre secteurs publics, privés et communautaires favorise une santé durable et inclusive.

En somme, l’ANACHOP rêve d’un Congo où la santé, le social et l’agriculture deviennent les piliers d’un développement humain intégral et équitable.`,
      values: 'Nos Valeurs',
      valuesText: `Nos actions reposent sur des valeurs fondamentales clairement énoncées dans nos statuts et notre Règlement d’Ordre Intérieur :

Solidarité et entraide mutuelle

Chaque membre soutient les autres en cas de maladie, accident, décès ou difficulté financière.

La communauté ANACHOP agit comme une véritable famille professionnelle.

Transparence et bonne gouvernance

Gestion rigoureuse des fonds (livres de caisse, rapports mensuels, trois signatures obligatoires).

Contrôle financier permanent pour garantir la confiance entre les membres.

Discipline, intégrité et respect des engagements

Participation régulière aux réunions et aux activités.

Paiement ponctuel des cotisations et respect des règles établies.

Neutralité politique, religieuse et ethnique

L’ANACHOP est apolitique et indépendante ; elle accueille tous les professionnels sans distinction.

Engagement communautaire et participation

Les membres contribuent activement à la conception, la mise en œuvre et au suivi des projets.

Les décisions se prennent démocratiquement à la majorité.

Respect et dignité humaine

L’humain est au centre de toutes nos interventions.

Nous défendons la justice, la protection et la valorisation de chaque membre.`,
      team: 'Notre Équipe',
      teamText: 'Notre équipe est composée de professionnels qualifiés et dévoués, incluant des analystes, chercheurs, organisateurs et travailleurs sociaux passionnés par le changement social positif.'
    },
    en: {
      title: 'About - ANACHOP',
      description: 'Discover the history, mission and values of ANACHOP',
      pageTitle: 'About Us',
      history: 'Our History',
      historyText: `After African independences, the peoples of sub-Saharan Africa nurtured great hopes for social and economic progress. But over the decades, reality has shown a worsening of poverty, misery, and the deterioration of health conditions. Diseases once controlled – such as HIV/AIDS, malaria, tuberculosis, anemia, and other epidemics – have re-emerged, affecting the most vulnerable populations. It is in this difficult context that a group of health and development professionals, led by Doctor MUKUNDA WATINGA Faustin, decided to take action. On February 4, 1995, in Kinshasa, they founded ANACHOP – Analysts, Researchers, and Professional Organizers, a Non-Governmental Development Organization (NGDO) working in the fields of health, social services, agriculture, and the maintenance of agricultural access roads. The initial objective was clear: to support private health structures, often isolated and weakened, by establishing a mutual aid system to provide them with social, economic, and professional protection. ANACHOP was thus born from a spirit of solidarity, social justice, and community development. Over the years, the organization has established grassroots committees in several communes and provinces of the DRC; implemented a structured system of contributions and transparent management; obtained legal personality (No. S27/CAS/MET/SOH/2010) and several interministerial orders (2015) granting it administrative and fiscal facilities; expanded its actions to social and agricultural fields, contributing to the fight against poverty in all its dimensions. Today, with decades of experience, ANACHOP – NGDO Health and Social remains a model of professional solidarity and a key player in community development in the Democratic Republic of the Congo.`,
      mission: 'Our Mission',
      missionText: `ANACHOP – NGDO Health and Social's mission is to reduce poverty and improve access to healthcare through a mutual aid and national solidarity system. We work to support materially and financially health centers, pharmacies, laboratories, and traditional practitioners who are members; strengthen their capacities against illegal taxes, administrative abuses, and economic difficulties; establish a national medical care mutual open to all; actively fight against poverty-related diseases such as HIV/AIDS, malaria, tuberculosis, anemia, and other epidemics; promote social, agricultural, and health development projects for the benefit of local communities. Thus, our mission is rooted in the desire to protect, support, and empower private health sector actors while improving the quality of life of the Congolese population.
`,
      vision: 'Our Vision',
      visionText: `We aspire to build a strong, united, and healthy Democratic Republic of Congo, where every citizen, regardless of social level, can access quality healthcare; private health structures become stable, competent, and recognized actors of national development; resource pooling and transparency in management ensure the sustainability of health and social services; cooperation between public, private, and community sectors promotes sustainable and inclusive health. In short, ANACHOP dreams of a Congo where health, social services, and agriculture become the pillars of comprehensive and equitable human development.
`,
      values: 'Our Values',
      valuesText: `Our actions are based on fundamental values clearly stated in our statutes and Internal Regulations:

Solidarity and mutual aid
Each member supports others in case of illness, accident, death, or financial difficulty.
The ANACHOP community acts as a true professional family.

Transparency and good governance
Rigorous management of funds (cashbooks, monthly reports, three mandatory signatures).
Ongoing financial control to ensure trust among members.

Discipline, integrity, and respect for commitments
Regular participation in meetings and activities.
Timely payment of contributions and compliance with established rules.

Political, religious, and ethnic neutrality
ANACHOP is apolitical and independent; it welcomes all professionals without distinction.

Community engagement and participation
Members actively contribute to the design, implementation, and monitoring of projects.
Decisions are made democratically by majority.

Respect and human dignity
Humans are at the center of all our interventions.
We defend the justice, protection, and valorization of each member.
`,
      team: 'Our Team',
      teamText: 'Our team consists of qualified and dedicated professionals, including analysts, researchers, organizers and social workers passionate about positive social change.'
    }
  };

  const t = translations[language];

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
      </Helmet>

      <div className="pt-20">
        <section className="relative py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <div className="absolute inset-0 section-pattern"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              {t.pageTitle}
            </h1>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="observe-animation opacity-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{t.history}</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.historyText}
                </p>
              </div>
              <div className="observe-animation opacity-0">
                <img 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  alt="ANACHOP historical moment"
                 src="/bg1.jpg" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl observe-animation opacity-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.mission}</h3>
                <p className="text-gray-700 leading-relaxed">{t.missionText}</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl observe-animation opacity-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.vision}</h3>
                <p className="text-gray-700 leading-relaxed">{t.visionText}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl observe-animation opacity-0">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.values}</h3>
                <p className="text-gray-700 leading-relaxed">{t.valuesText}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="observe-animation opacity-0 order-2 lg:order-1">
                <img 
                  src="/m.jpg" 
                  alt="ANACHOP Team" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="observe-animation opacity-0 order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.team}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.teamText}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;