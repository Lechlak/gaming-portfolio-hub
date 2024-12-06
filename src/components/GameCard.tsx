import React from "react";
import { Card } from "@/components/ui/card";

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  delay: number;
}

export const GameCard = ({ title, description, imageUrl, delay }: GameCardProps) => {
  return (
    <Card className={`overflow-hidden bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 animate-fade-up opacity-0`}
         style={{ animationDelay: `${delay}ms` }}>
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </Card>
  );
};