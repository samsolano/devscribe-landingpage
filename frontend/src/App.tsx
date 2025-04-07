import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import FeatureComparison from './components/FeatureCompare/FeatureComparison';
// import Pricing from './components/pricing/Pricing';
import Footer from './components/footer/Footer';
import ImageCompare from './components/image-compare/ImageCompare';
import SupportSection from './components/Collaboration /SupportSection';

// Import placeholder images
import BeforeImage from './lib/BeforeImage.png';
import AfterImage from './lib/AfterImage.png';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ImageCompare 
        beforeImage={BeforeImage} 
        afterImage={AfterImage}
      />
      <Features />
      <FeatureComparison />
      {/* <Pricing /> */}
      <SupportSection />
      <Footer />
    </div>
  );
}

export default App;
