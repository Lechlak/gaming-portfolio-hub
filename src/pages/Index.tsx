import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GamesSection } from "@/components/GamesSection";
import { CompanySection } from "@/components/CompanySection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <GamesSection />
      <CompanySection />
      <ContactSection />
    </div>
  );
};

export default Index;