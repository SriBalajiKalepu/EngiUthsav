import { useEffect, useState } from "react";
import { Calendar, MapPin, Sparkles, Zap, Cpu, Award, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech-bg.jpg";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToEvents = () => {
    const eventsSection = document.querySelector("#events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="CSE & AI/ML Tech Innovation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Cpu className="absolute top-20 left-10 w-8 h-8 text-primary/30 animate-float" style={{ animationDelay: '0s' }} />
        <Zap className="absolute top-40 right-20 w-6 h-6 text-secondary/40 animate-float" style={{ animationDelay: '1s' }} />
        <Award className="absolute bottom-40 left-20 w-10 h-10 text-accent/30 animate-float" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute bottom-20 right-10 w-7 h-7 text-primary/40 animate-float" style={{ animationDelay: '0.5s' }} />
        <Cpu className="absolute top-60 left-1/4 w-6 h-6 text-accent/20 animate-float" style={{ animationDelay: '1.5s' }} />
        <Code2 className="absolute top-80 right-1/3 w-7 h-7 text-primary/25 animate-float" style={{ animationDelay: '2.5s' }} />
        <Zap className="absolute bottom-60 right-1/4 w-5 h-5 text-secondary/30 animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Additional Tech Particles */}
        <div className="absolute top-10 left-1/3 w-2 h-2 bg-primary rounded-full animate-tech-particle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-32 right-1/4 w-1 h-1 bg-secondary rounded-full animate-tech-particle" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-tech-particle" style={{ animationDelay: '5s' }} />
        
        {/* Matrix Rain Effect */}
        <div className="absolute top-0 left-1/5 w-0.5 h-4 bg-primary/50 animate-matrix-rain" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 right-1/5 w-0.5 h-6 bg-secondary/40 animate-matrix-rain" style={{ animationDelay: '4s' }} />
        <div className="absolute top-0 left-3/4 w-0.5 h-3 bg-accent/60 animate-matrix-rain" style={{ animationDelay: '6s' }} />
        
        {/* Data Flow Lines */}
        <div className="absolute top-1/3 left-0 w-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-data-flow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-0 w-12 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent animate-data-flow" style={{ animationDelay: '3.5s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Event Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm animate-pulse-glow">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">September 18-20, 2025</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-orbitron font-black mb-6 text-glow">
            Engi<span className="text-secondary">Uthsav</span>
            <span className="text-2xl sm:text-4xl md:text-6xl block text-accent font-bold mt-2">2025</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-glow-secondary">
            Engineer's Day Celebration
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Join us for the ultimate celebration of Computer Science, AI/ML, and technological innovation. 
            Experience cutting-edge algorithms, participate in coding competitions, and showcase your programming prowess.
          </p>

          {/* College Info */}
          <div className="flex items-center justify-center space-x-2 mb-8 text-primary">
            <MapPin className="w-5 h-5" />
            <span className="text-lg font-medium">BVC College of Engineering</span>
          </div>

          {/* Theme */}
          <div className="bg-gradient-card border border-primary/20 rounded-lg p-4 sm:p-6 mb-8 backdrop-blur-sm shadow-card-tech mx-4">
            <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-2 text-accent">
              "Engineers for the Society"
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Empowering tomorrow's tech innovators to build a smarter world through AI, ML, and computer science
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button
              onClick={scrollToEvents}
              size="lg"
              className="bg-gradient-hero hover:shadow-pulse-glow font-bold px-6 sm:px-8 py-3 text-base sm:text-lg hover-scale w-full sm:w-auto"
            >
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Explore Events
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 font-bold px-6 sm:px-8 py-3 text-base sm:text-lg hover-glow w-full sm:w-auto"
              onClick={() => window.open('https://forms.gle/ftsDszBySs6eVuf29', '_blank')}
            >
              <Award className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              View Registration Details
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-secondary/50 text-secondary hover:bg-secondary/10 font-bold px-6 sm:px-8 py-3 text-base sm:text-lg hover-glow w-full sm:w-auto"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/EngiUthsav_Schedule.pdf';
                link.download = 'EngiUthsav_Schedule.pdf';
                link.click();
              }}
            >
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Download Schedule
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
            {[
              { label: "Technical Events", value: "6+" },
              { label: "Participants", value: "500+" },
              { label: "Innovation Hours", value: "72" },
              { label: "Amazing Prizes", value: "∞" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl font-orbitron font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};