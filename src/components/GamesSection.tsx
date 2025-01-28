import React from "react";
import { GameCard } from "./GameCard";

const games = [
  {
    title: "Memory Match",
    description: "A simple matching game for all ages.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dots and Boxes",
    description: "High-octane racing action on stunning tracks",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sight Words",
    description: "Brain-teasing puzzles for all ages",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
];

export const GamesSection = () => {
  return (
    <section id="games" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Games
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard
              key={game.title}
              {...game}
              delay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};