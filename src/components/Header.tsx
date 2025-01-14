import React from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-white">Lechlak Gaming</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#games" className="text-white/80 hover:text-white transition-colors">Games</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </nav>
        <Button variant="secondary" className="bg-primary hover:bg-primary/90">
          View on Google Play (coming sooon)
        </Button>
      </div>
    </header>
  );
};
