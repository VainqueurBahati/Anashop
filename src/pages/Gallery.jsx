import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const translations = {
    fr: {
      title: 'Galerie - ANACHOP',
      description: 'Découvrez nos activités en images',
      pageTitle: 'Notre Galerie',
      subtitle: 'Nos actions en images'
    },
    en: {
      title: 'Gallery - ANACHOP',
      description: 'Discover our activities in pictures',
      pageTitle: 'Our Gallery',
      subtitle: 'Our actions in pictures'
    }
  };

  const t = translations[language];

  const images = [
    { id: 1, src:'/rural.jpg' },
    { id: 2, src:'/1.jpg'},
    { id: 3, src:'/3.jpg'},
    { id: 4, src:'/4.jpg'},
    { id: 5, src:'/5.jpg'},
    { id: 6, src:'/6.jpg'},
    { id: 7, src:'/14.jpg'},
    { id: 8, src:'/8.jpg'},
    { id: 9, src:'/9.jpg'},
    { id: 10, src:'/10.jpg'},
    { id: 11, src:'/solidarite.jpg'},
    { id: 12, src:'/11.jpg'},
    { id: 13, src:'/12.jpg'},
    { id: 14, src:'/bg3.jpg'},
    { id: 15, src:'/13.jpg'},
    { id: 16, src:'/2.jpg'},
    { id: 17, src:'/neutralite.jpg'},
    { id: 18, src:'/bg1.jpg'},
    { id: 19, src:'/bg4.jpg'},
    { id: 20, src:'/bg5.jpg'}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image) => (
                <motion.div
                  key={image.id}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    className="w-full h-full object-cover"
                    alt={`Gallery image ${image.id}`}
                   src={image.src} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-900" />
              </button>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  className="w-full h-auto rounded-lg shadow-2xl"
                  alt={`Gallery image ${selectedImage.id}`}
                 src={selectedImage.src} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Gallery;