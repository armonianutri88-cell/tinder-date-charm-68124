import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { WhatIs } from "@/components/WhatIs";
import { TruthSection } from "@/components/TruthSection";
import { Benefits } from "@/components/Benefits";
import { AuthorBio } from "@/components/AuthorBio";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <WhatIs />
      <TruthSection />
      <Benefits />
      <AuthorBio />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
