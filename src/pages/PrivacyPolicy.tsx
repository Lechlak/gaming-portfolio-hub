import React from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert">
            <p className="text-lg text-white/80 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-white/80">
                At Lechlak Gaming, we are committed to providing free, ad-free gaming experiences without any in-app purchases. 
                This Privacy Policy explains how we handle your information when you use our games.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Don't Collect</h2>
              <p className="text-white/80">Our games:</p>
              <ul className="list-disc pl-6 text-white/80 space-y-2 mt-2">
                <li>Do not collect personal information</li>
                <li>Do not use advertising trackers</li>
                <li>Do not include in-app purchases</li>
                <li>Do not require any account creation</li>
                <li>Do not track your location</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Game Data</h2>
              <p className="text-white/80">
                Any game progress or settings are stored locally on your device and are never transmitted to our servers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
              <p className="text-white/80">
                Our games are suitable for all ages. We do not knowingly collect any personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-white/80">
                If you have any questions about this Privacy Policy, please contact us at LechlakGaming@Gmail.com
              </p>
            </section>
          </div>

          <Button asChild className="mt-8">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;