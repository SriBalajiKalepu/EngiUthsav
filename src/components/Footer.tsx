import { Phone, Mail, MapPin, Globe, Calendar, Cpu, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      details: ["8500458539", "9963684479", "8143757999", "9550979365", "9154717316", "9398923037"]
    },
    {
      icon: Mail,
      label: "Email",
      details: ["bvcr@bvcgroup.in"]
    },
    {
      icon: Globe,
      label: "Website",
      details: ["www.bvcr.edu.in"]
    },
    {
      icon: MapPin,
      label: "Address",
      details: ["Palacharla, Rajamahendravaram-533102"]
    }
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Events", href: "#events" },
    { label: "About", href: "#about" },
    { label: "Comments", href: "#comments" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="relative bg-background border-t border-primary/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* College Info */}
            <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
              <div className="flex items-center space-x-3">
                <Cpu className="w-8 h-8 text-primary animate-pulse" />
                <span className="text-2xl font-orbitron font-bold text-glow">
                  Engi<span className="text-secondary">Uthsav</span>
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-accent">
                BVC College of Engineering
              </h3>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                An Autonomous Institution NAAC accredited, approved by AICTE New Delhi, 
                and permanently affiliated to JNTUK Kakinada. Celebrating engineering excellence 
                through innovation and education.
              </p>

              <div className="flex items-center space-x-3 text-primary">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Engineer's Day Celebration - September 18-20, 2025</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-orbitron font-bold text-accent">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 transform"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h3 className="text-xl font-orbitron font-bold text-accent">Contact Us</h3>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <div key={contact.label} className="flex items-start space-x-3">
                    <contact.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-accent">{contact.label}</p>
                      {contact.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Event Highlights */}
        <div className="py-8 border-t border-primary/20">
          <div className="text-center mb-8 animate-fade-in-up">
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-glow">
              EngiUthsav <span className="text-secondary">2025</span> Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
              {[
                { label: "Technical Quiz", icon: "🧠" },
                { label: "6-Hr Hackathon", icon: "💻" },
                { label: "Paper Presentation", icon: "📝" },
                { label: "Poster Design", icon: "🎨" },
                { label: "Photography", icon: "📸" }
              ].map((event, index) => (
                <div
                  key={event.label}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl mb-2">{event.icon}</div>
                  <div className="text-xs text-muted-foreground">{event.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground animate-fade-in-up">
              <span>© {currentYear} BVC College of Engineering. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-muted-foreground animate-fade-in-up">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for engineering excellence</span>
            </div>
            
            <div className="flex items-center space-x-2 text-primary animate-fade-in-up">
              <span className="text-sm font-medium">Theme: Engineers for the Society</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};