import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = ({ language }) => {
  const translations = {
    fr: {
      about: 'À propos',
      quickLinks: 'Liens rapides',
      contact: 'Contact',
      followUs: 'Suivez-nous',
      rights: 'Tous droits réservés',
      address: 'Kinshasa Boulevard du 30 juin, Immeuble galerie Albert, 7ème Niveau Appartement 1'
    },
    en: {
      about: 'About',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved',
      address: 'Kinshasa, Democratic Republic of Congo'
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/logo.JPG"
              alt="ANACHOP" 
              className="h-16 mb-4 bg-white p-2 rounded"
              style={{ width: '200px', height: '150px' }}
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              {language === 'fr' 
                ? 'Association Nationale des Analystes, Chercheurs et Organisateurs Professionnels'
                : 'National Association of Analysts, Researchers and Professional Organizers'}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{language === 'fr' ? 'Accueil' : 'Home'}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{language === 'fr' ? 'À propos' : 'About'}</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">{language === 'fr' ? 'Projets' : 'Projects'}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{language === 'fr' ? 'Nous contacter' : 'Contact us'}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{t.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+243 972 786 822 <br />+243 898 167 227</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Anachoprdc7@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t.followUs}</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ANACHOP. {t.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;