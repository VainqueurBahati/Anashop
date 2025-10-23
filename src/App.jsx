import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Gallery from '@/pages/Gallery';
import Join from '@/pages/Join';
import Contact from '@/pages/Contact';

function App() {
  const [language, setLanguage] = useState('fr');

  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/projects" element={<Projects language={language} />} />
          <Route path="/gallery" element={<Gallery language={language} />} />
          <Route path="/join" element={<Join language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
      </main>
      <Footer language={language} />
      <Toaster />
    </div>
  );
}

export default App;