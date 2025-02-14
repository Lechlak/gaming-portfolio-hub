import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full -top-40 -left-20 blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute w-[400px] h-[400px] bg-secondary/20 rounded-full -bottom-20 -right-20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute w-[300px] h-[300px] bg-primary/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background z-0" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up opacity-0" 
              style={{ animationDelay: "200ms" }}>
            Crafting Ad-Free Mobile Gaming Excellence
          </h1>
          <p className="text-xl text-white/80 mb-8 animate-fade-up opacity-0"
             style={{ animationDelay: "400ms" }}>
            We create engaging mobile games that millions of players love worldwide without ads. 
          </p>
          <Button className="animate-fade-up opacity-0 bg-primary hover:bg-primary/90 text-lg px-8 py-6"
                  style={{ animationDelay: "600ms" }}>
            Discover Our Games
          </Button>
        </div>
      </div>
    </section>
  );
};