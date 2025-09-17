import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EventsSection } from "@/components/EventsSection";
import { AboutSection } from "@/components/AboutSection";
import { CommentsSection } from "@/components/CommentsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Smooth scroll behavior for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <EventsSection />
        <AboutSection />
        <CommentsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;