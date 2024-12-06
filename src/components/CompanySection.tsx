import React from "react";

export const CompanySection = () => {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About GameStudio
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Founded in 2020, we're passionate about creating memorable gaming experiences 
            that bring joy to players around the world. Our team of talented developers 
            and artists work together to push the boundaries of mobile gaming.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-white/5">
              <div className="text-3xl font-bold text-primary mb-2">50M+</div>
              <div className="text-white/80">Downloads</div>
            </div>
            <div className="p-6 rounded-lg bg-white/5">
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div className="p-6 rounded-lg bg-white/5">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-white/80">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};