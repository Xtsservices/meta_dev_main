"use client";
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandsSection from './components/BrandsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header scrollToSection={(sectionId) => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })} />
      <HeroSection scrollToSection={(sectionId) => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })} />
      <BrandsSection />
      <ServicesSection />
      <Footer />
    </>
  );
}
