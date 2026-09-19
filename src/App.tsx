import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowIWork } from './components/HowIWork';
import { CredibilityMatrix } from './components/CredibilityMatrix';
import { StudyPilotCaseStudy } from './components/StudyPilotCaseStudy';
import { PathoShieldCaseStudy } from './components/PathoShieldCaseStudy';
import { PythonJourney } from './components/PythonJourney';
import { AiUsageTransparency } from './components/AiUsageTransparency';
import { AcademicRecord } from './components/AcademicRecord';
import { NowSection } from './components/NowSection';
import { FutureDirection } from './components/FutureDirection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#171d25] selection:bg-stone-200 selection:text-stone-900">
      <Header />
      <main>
        <Hero />
        <HowIWork />
        <CredibilityMatrix />
        <StudyPilotCaseStudy />
        <PathoShieldCaseStudy />
        <PythonJourney />
        <AiUsageTransparency />
        <AcademicRecord />
        <NowSection />
        <FutureDirection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
