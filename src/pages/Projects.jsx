import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Heart, Sprout, GraduationCap, Users, Megaphone } from 'lucide-react';

const Projects = ({ language }) => {
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
      title: 'Projets et Activités - ANACHOP',
      description: 'Découvrez nos projets et activités pour le développement communautaire',
      pageTitle: 'Nos Projets et Activités',
      subtitle: 'Des actions concrètes pour un impact durable',
      health: {
        title: 'Santé Communautaire',
        description: 'Programmes de sensibilisation, campagnes de vaccination, formation des agents de santé communautaire et amélioration de l\'accès aux soins de santé primaires dans les zones rurales.'
      },
      agriculture: {
        title: 'Agriculture Durable',
        description: 'Formation des agriculteurs aux techniques agricoles modernes, distribution de semences améliorées, promotion de l\'agroécologie et soutien aux coopératives agricoles.'
      },
      education: {
        title: 'Éducation et Formation',
        description: 'Programmes d\'alphabétisation, formation professionnelle, bourses d\'études pour les jeunes défavorisés et renforcement des capacités des organisations communautaires.'
      },
      social: {
        title: 'Développement Social',
        description: 'Soutien aux groupes vulnérables, promotion de l\'égalité des genres, programmes de microfinance et initiatives de développement économique local.'
      }
    },
    en: {
      title: 'Projects and Activities - ANACHOP',
      description: 'Discover our projects and activities for community development',
      pageTitle: 'Our Projects and Activities',
      subtitle: 'Concrete actions for lasting impact',
      health: {
        title: 'Community Health',
        description: 'Awareness programs, vaccination campaigns, training of community health workers and improving access to primary health care in rural areas.'
      },
      agriculture: {
        title: 'Sustainable Agriculture',
        description: 'Training farmers in modern agricultural techniques, distribution of improved seeds, promotion of agroecology and support for agricultural cooperatives.'
      },
      education: {
        title: 'Education and Training',
        description: 'Literacy programs, vocational training, scholarships for disadvantaged youth and capacity building for community organizations.'
      },
      social: {
        title: 'Social Development',
        description: 'Support for vulnerable groups, promotion of gender equality, microfinance programs and local economic development initiatives.'
      }
    }
  };

  const t = translations[language];

  const projects = [
    {
      icon: Heart,
      color: 'blue',
      title: t.health.title,
      description: t.health.description,
      image: '/solidarite.jpg'
    },
    {
      icon: Sprout,
      color: 'green',
      title: t.agriculture.title,
      description: t.agriculture.description,
      image: '/rural.jpg'
    },
    {
      icon: GraduationCap,
      color: 'purple',
      title: t.education.title,
      description: t.education.description,
      image: '/membres.jpg'
    },
    {
      icon: Users,
      color: 'orange',
      title: t.social.title,
      description: t.social.description,
      image: '/social.jpg'
    },
    {
      icon: Megaphone,
      color: 'green',
      title: 'Information récente',
      description: `
Kisantu, Kongo Central – Le 19 octobre 2025, l’ONG ANACHOP, accompagnée de son partenaire kényan Simlaw Seeds, a visité plus de 500 hectares de terres agricoles à Nenga Kilweka, en territoire de Kisantu. Cette mission visait à évaluer le potentiel de la zone en vue de lancer un projet pilote agricole durable.

Selon Caleb Songa, coordinateur de l’ONG, l’objectif est de mettre en place un programme innovant axé sur la production à grande échelle, la formation des agriculteurs et l’introduction de semences de qualité.

La mission a révélé un bon potentiel agricole (sols fertiles, eau disponible, main-d’œuvre locale), mais aussi des défis liés aux infrastructures et équipements. Simlaw Seeds s’est engagée à fournir des semences certifiées, un appui technique et des formations.

Une phase expérimentale est prévue, avec l’implication des communautés locales, notamment des jeunes et des femmes. Le projet s’inscrit dans les efforts de développement rural durable soutenus par les autorités, avec des retombées attendues en matière de croissance économique et de sécurité alimentaire dans la région.

Cellule de communication – Elie Mata`,
      image: '/nous.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
      </Helmet>

      <div className="pt-20">
        <section className="relative py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <div className="absolute inset-0 section-pattern"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.pageTitle}
            </h1>
            <p className="text-xl text-white/90">
              {t.subtitle}
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {projects.map((project, index) => {
                const Icon = project.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className={`observe-animation opacity-0 ${!isEven ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-${project.color}-100 rounded-full flex items-center justify-center mr-4`}>
                          <Icon className={`h-8 w-8 text-${project.color}-600`} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className={`observe-animation opacity-0 ${!isEven ? 'lg:order-1' : ''}`}>
                      <img 
                        className="rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-300"
                        alt={project.title}
                       src={project.image} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;