import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Join = ({ language }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    memberType: 'effectif'
  });

  const translations = {
    fr: {
      title: 'Adhésion - ANACHOP',
      description: 'Rejoignez ANACHOP et participez à nos actions',
      pageTitle: 'Devenir Membre',
      subtitle: 'Rejoignez-nous dans notre mission',
      form: {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        organization: 'Structure/Organisation',
        memberType: 'Type de membre',
        effectif: 'Membre effectif',
        fondateur: 'Membre fondateur',
        honoraire: 'Membre honoraire',
        submit: 'Soumettre ma candidature',
        download: 'Télécharger la fiche d\'adhésion'
      },
      benefits: {
        title: 'Avantages de l\'adhésion',
        benefit1: 'Participer activement à nos projets et initiatives',
        benefit2: 'Accéder à nos formations et ateliers',
        benefit3: 'Rejoindre un réseau de professionnels engagés',
        benefit4: 'Contribuer au développement de votre communauté'
      }
    },
    en: {
      title: 'Membership - ANACHOP',
      description: 'Join ANACHOP and participate in our actions',
      pageTitle: 'Become a Member',
      subtitle: 'Join us in our mission',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        organization: 'Organization/Structure',
        memberType: 'Member Type',
        effectif: 'Active Member',
        fondateur: 'Founding Member',
        honoraire: 'Honorary Member',
        submit: 'Submit Application',
        download: 'Download Membership Form'
      },
      benefits: {
        title: 'Membership Benefits',
        benefit1: 'Actively participate in our projects and initiatives',
        benefit2: 'Access our training and workshops',
        benefit3: 'Join a network of committed professionals',
        benefit4: 'Contribute to your community development'
      }
    }
  };

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = language === 'fr' 
      ? 'Demande d\'adhésion ANACHOP'
      : 'ANACHOP Membership Application';
    
    const body = `
${t.form.firstName}: ${formData.firstName}
${t.form.lastName}: ${formData.lastName}
${t.form.email}: ${formData.email}
${t.form.phone}: ${formData.phone}
${t.form.organization}: ${formData.organization}
${t.form.memberType}: ${formData.memberType}
    `;

    window.location.href = `mailto:Anachoprdc7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: language === 'fr' ? 'Formulaire envoyé' : 'Form submitted',
      description: language === 'fr' 
        ? 'Votre demande d\'adhésion a été envoyée avec succès!'
        : 'Your membership application has been sent successfully!',
    });
  };

  const handleDownload = () => {
    toast({
      title: language === 'fr' ? 'Téléchargement' : 'Download',
      description: language === 'fr'
        ? '🚧 Cette fonctionnalité n\'est pas encore implémentée—mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochain message ! 🚀'
        : '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀',
    });
  };

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.benefits.title}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <p className="text-lg text-gray-700">{t.benefits.benefit1}</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <p className="text-lg text-gray-700">{t.benefits.benefit2}</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <p className="text-lg text-gray-700">{t.benefits.benefit3}</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <p className="text-lg text-gray-700">{t.benefits.benefit4}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="/fiche-adhesion.docx" download="Fiche_Adhesion_ANACHOP.docx">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto"
    >
                      <Download className="mr-2 h-5 w-5" />
                      {t.form.download}
                    </Button>
                  </a>
                </div>

              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.firstName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.form.lastName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.organization}
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.memberType}
                    </label>
                    <select
                      value={formData.memberType}
                      onChange={(e) => setFormData({...formData, memberType: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="effectif">{t.form.effectif}</option>
                      <option value="fondateur">{t.form.fondateur}</option>
                      <option value="honoraire">{t.form.honoraire}</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    {t.form.submit}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Join;