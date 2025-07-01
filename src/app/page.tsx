"use client";
import React, { useEffect } from 'react'; // Add useEffect to your React import
import Header from './components/Header';
import Banner from './components/Banner';
import HeroSection from './components/metahealth';
import BrandsSection from './components/BrandsSection';
import Abhyasa from './components/abhyasa';
import Footer from './components/Footer';
import GovernmentIntegrations from './components/GovernmentIntegrations';
import BrandsShowcase from './components/brands';
import Contact from './components/Contact';

export default function Home() {
  // Add this useEffect hook
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header scrollToSection={(sectionId) => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })} />
      <Banner/>        
      <BrandsShowcase/>
      <HeroSection/>
      <Abhyasa/>        
      <GovernmentIntegrations />
      <Contact/>
      <Footer />
    </>
  );
}