import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = ({ language }) => {
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
      title: 'ANACHOP - Association Nationale des Analystes, Chercheurs et Organisateurs Professionnels',
      description: 'ONG dédiée à la santé sociale et au développement communautaire en RDC',
      hero: {
        title: 'ANASHOP (Santé-Social-Agriculture)',
        subtitle: 'Les Analystes, Chercheurs et Organisateurs Professionnels (ONGD SANTE ET SOCIAL)',
        cta: 'Découvrir nos actions',
        join: 'Nous rejoindre'
      },
      
      mission: {
        title: 'Notre Mission',
        description: 'ANACHOP œuvre pour le développement social, la santé communautaire et l\'agriculture durable en République Démocratique du Congo.'
      },
      values: {
        title: 'Nos Valeurs',
        solidarity: 'Solidarité et entraide',
        solidarityDesc: 'nous croyons en la force collective pour surmonter les défis sociaux et sanitaires.',
        excellence: 'Engagement communautaire',
        excellenceDesc: 'participation active des membres à la vie de l’organisation.',
        integrity: 'Discipline et intégrité',
        integrityDesc: 'respect des règles, des engagements et des principes éthiques.',
        innovation: 'Neutralité, Respect et dignité humaine',
        innovationDesc: 'indépendance politique, religieuse et ethnique dans toutes nos actions. chaque personne mérite considération et justice.'
      }
    },
    en: {
      title: 'ANACHOP - National Association of Analysts, Researchers and Professional Organizers',
      description: 'NGO dedicated to social health and community development in DRC',
      hero: {
        title: 'ANASHOP (Health-Social-Agriculture)',
        subtitle: 'Analysts, Researchers, and Professional Organizers (NGO HEALTH AND SOCIAL)',
        cta: 'Discover our actions',
        join: 'Join us'
      },
      mission: {
        title: 'Our Mission',
        description: 'ANACHOP works for social development, community health and sustainable agriculture in the Democratic Republic of Congo.'
      },
      values: {
        title: 'Our Values',
        solidarity: 'Solidarity and mutual aid',
        solidarityDesc: 'we believe in collective strength to overcome social and health challenges',
        excellence: 'Community engagement',
        excellenceDesc: 'active participation of members in the life of the organization.',
        integrity: 'Discipline and integrity, Neutrality',
        integrityDesc: 'respect for rules, commitments, and ethical principles.',
        innovation: 'Respect and human dignity',
        innovationDesc: 'political, religious, and ethnic independence in all our actions. every person deserves consideration and justice.'
      }
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
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden hero-gradient">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 section-pattern"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                {t.hero.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-white/90"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/projects">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 group">
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/join">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600">
                    {t.hero.join}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center observe-animation opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t.mission.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.mission.description}
              </p>
              <img 
        src="/anachop.jpg"
        alt="Notre mission" 
        className="mx-auto rounded-2xl shadow-lg w-full max-w-md"
      />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 section-pattern">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 observe-animation opacity-0">
              {t.values.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 observe-animation opacity-0 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.values.solidarity}</h3>
                <p className="text-gray-600">{t.values.solidarityDesc}</p>
                <img 
        src="/solidarite.jpg" 
        alt="Notre mission" 
        className="mx-auto rounded-2xl shadow-lg w-full max-w-md"
      />
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 observe-animation opacity-0 hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.values.excellence}</h3>
                <p className="text-gray-600">{t.values.excellenceDesc}</p>
                <img 
        src="/communaute.jpg" 
        alt="Notre mission" 
        className="mx-auto rounded-2xl shadow-lg w-full max-w-md"
      />
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 observe-animation opacity-0 hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.values.integrity}</h3>
                <p className="text-gray-600">{t.values.integrityDesc}</p>
                <img 
        src="/membres.jpg" 
        alt="Notre mission" 
        className="mx-auto rounded-2xl shadow-lg w-full max-w-md"
      />
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 observe-animation opacity-0 hover:-translate-y-2">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.values.innovation}</h3>
                <p className="text-gray-600">{t.values.innovationDesc}</p>
                <img 
        src="/neutralite.jpg" 
        alt="Notre mission" 
        className="mx-auto rounded-2xl shadow-lg w-full max-w-md"
      />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="observe-animation opacity-0">
                <img 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  alt="ANACHOP team members working together"
                 src="/nous.jpg" />
              </div>
              <div className="observe-animation opacity-0">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {language === 'fr' ? 'Qui sommes-nous ?' : 'Who are we?'}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {language === 'fr' 
                    ? 'ANACHOP est une organisation non gouvernementale dédiée au développement social, à la santé communautaire et à l\'agriculture durable. Nous travaillons avec les communautés locales pour créer un impact positif et durable.'
                    : 'ANACHOP is a non-governmental organization dedicated to social development, community health and sustainable agriculture. We work with local communities to create positive and lasting impact.'}
                </p>
                <Link to="/about">
                  <Button className="group">
                    {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;