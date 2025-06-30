"use client";
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import HeroSection from './components/HeroSection';
import BrandsSection from './components/BrandsSection';
import AbhyasaSection from './components/AbhyasaSection';
import ABBrandsSection from './components/ABBrandsSection';
// import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import GovernmentIntegrations from './components/GovernmentIntegrations';

export default function Home() {
  return (
    <>
      <Header scrollToSection={(sectionId) => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })} />
      <Banner/>  
      <HeroSection scrollToSection={(sectionId) => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })} />
      <BrandsSection />
      <AbhyasaSection scrollToSection={function (sectionId: string): void {
        throw new Error('Function not implemented.');
      } }/>
      <ABBrandsSection/>
      {/* <ServicesSection /> */}
      <GovernmentIntegrations />
      <Footer />
    </>
  );
}
