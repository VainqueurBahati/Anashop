import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = ({ language }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const translations = {
    fr: {
      title: 'Contact - ANACHOP',
      description: 'Contactez-nous pour plus d\'informations',
      pageTitle: 'Contactez-nous',
      subtitle: 'Nous sommes à votre écoute',
      form: {
        name: 'Nom complet',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le message'
      },
      info: {
        title: 'Informations de contact',
        address: 'Siège social',
        addressText: 'Kinshasa Boulevard du 30 juin, Immeuble galerie Albert,7ème Niveau Appartement 1',
        phone: 'Téléphone',
        phoneText: '+243 972 786 822/+243 898 167 227',
        email: 'Email',
        emailText: 'Anachoprdc7@gmail.com'
      }
    },
    en: {
      title: 'Contact - ANACHOP',
      description: 'Contact us for more information',
      pageTitle: 'Contact Us',
      subtitle: 'We are here to listen',
      form: {
        name: 'Full Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message'
      },
      info: {
        title: 'Contact Information',
        address: 'Address',
        addressText: 'Kinshasa Boulevard du 30 juin, Immeuble galerie Albert, 7ème Niveau Appartement 1',
        phone: 'Phone',
        phoneText: '+243 972 786 822/+243 898 167 227',
        email: 'Email',
        emailText: 'Anachoprdc7@gmail.com'
      }
    }
  };

  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:Anachoprdc7@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`${t.form.name}: ${formData.name}\n${t.form.email}: ${formData.email}\n\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: language === 'fr' ? 'Message envoyé' : 'Message sent',
      description: language === 'fr' 
        ? 'Votre message a été envoyé avec succès!'
        : 'Your message has been sent successfully!',
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.info.title}</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.info.address}</h3>
                      <p className="text-gray-600">{t.info.addressText}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.info.phone}</h3>
                      <p className="text-gray-600">{t.info.phoneText}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{t.info.email}</h3>
                      <p className="text-gray-600">{t.info.emailText}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-lg h-80">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=15.2662%2C-4.4419%2C15.3262%2C-4.3819&layer=mapnik&marker=-4.4119%2C15.2962"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="ANACHOP Location"
                  ></iframe>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
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
                      {t.form.subject}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.form.message}
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    {t.form.send}
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

export default Contact;