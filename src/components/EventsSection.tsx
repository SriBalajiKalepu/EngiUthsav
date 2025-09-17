import { EventCard } from "./EventCard";
import { Cpu, Zap, Presentation, Palette, Camera, Code2 } from "lucide-react";
import technicalQuizImage from "@/assets/technical-quiz.jpg";
import hackathonImage from "@/assets/hackathon.jpg";
import paperPresentationImage from "@/assets/paper-presentation.jpg";
import posterDesignImage from "@/assets/poster-design.jpg";
import photographyImage from "@/assets/photography.jpg";

export const EventsSection = () => {
  const events = [
    {
      title: "Technical Quiz",
      description: "Test your engineering knowledge with challenging technical questions covering multiple engineering domains. A perfect blend of core concepts and cutting-edge technologies.",
      image: technicalQuizImage,
      coordinators: [
        "Mr. K. Surendranath (Coordinator)",
        "Mrs. P. Mercy Priya (Co-Coordinator)",
        "Mr. S. Dhanunjay (Co-Coordinator)",
        "Mr. P. Chalapathi Rao (Coordinator)"
      ],
      duration: "2 Hours",
      participants: "Teams of 2-3",
      prizes: "Certificates"
    },
    {
      title: "6-Hour Hackathon",
      description: "Unleash your coding potential in this intensive 6-hour hackathon. Build innovative solutions to real-world problems and showcase your development skills.",
      image: hackathonImage,
      coordinators: [
        "Dr. K. Nagesh (Coordinator)",
        "Mr. V. Guru Kumar (Co-Coordinator)",
        "Mr. D. Satya Karthik (Co-Coordinator)"
      ],
      duration: "6 Hours",
      participants: "Teams of 2-4",
      prizes: "Valuable Unknown Gift"
    },
    {
      title: "Paper Presentation",
      description: "Present your research and innovative ideas to a panel of experts. Showcase groundbreaking engineering solutions and technological advancements.",
      image: paperPresentationImage,
      coordinators: [
        "Mrs. M. Madhavi (Co-Coordinator)",
        "Mrs. Y. Devika (Co-Coordinator)",
        "Mr. Y. Rakesh (Co-Coordinator)"
      ],
      duration: "15 Min/Team",
      participants: "1-3 Members",
      prizes: "Certificates & Exciting Gifts"
    },
    {
      title: "Poster Design",
      description: "Create visually stunning posters that communicate engineering concepts with creativity and innovation. Theme: 'Engineers for the Society'.",
      image: posterDesignImage,
      coordinators: [
        "Mr. N.N.V. Ramana (Coordinator)",
        "Mrs. D. Vijaya Lakshmi (Co-Coordinator)",
        "Mrs. V. Pratyusha (Co-Coordinator)"
      ],
      duration: "3 Hours",
      participants: "Individual",
      prizes: "Certificates & Exciting Gifts"
    },
    {
      title: "Photography/Videography",
      description: "Capture the essence of engineering and technology through your lens. Document the celebration and create memorable visual stories.",
      image: photographyImage,
      coordinators: [
        "Mr. M. Satyanarayana (Coordinator)",
        "Mr. N.N.V. Ramana (Co-Coordinator)"
      ],
      duration: "Full Day",
      participants: "Individual",
      prizes: "Certificates & Exciting Gifts"
    }
  ];

  const additionalActivities = [
    { icon: Code2, title: "Community Service", description: "Engineering for social good" },
    { icon: Cpu, title: "Wall of Fame", description: "Celebrating engineering legends" },
    { icon: Zap, title: "Alumni Connect", description: "Industry networking sessions" },
    { icon: Presentation, title: "Industry Connect", description: "Professional mentorship" }
  ];

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-5" />
      
      {/* Tech Animation Elements */}
      <div className="absolute top-20 right-1/4 w-1 h-1 bg-primary rounded-full animate-tech-particle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-tech-particle" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 left-10 w-0.5 h-8 bg-accent/50 animate-matrix-rain" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 right-10 w-0.5 h-6 bg-primary/40 animate-matrix-rain" style={{ animationDelay: '4s' }} />
      <div className="absolute top-2/3 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent animate-data-flow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up px-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-orbitron font-black mb-6 text-glow">
            Featured <span className="text-secondary">Events</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Participate in exciting technical events designed to challenge your skills, 
            foster innovation, and celebrate the spirit of engineering excellence.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-hero rounded-full" />
          </div>
        </div>

        {/* Main Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16 px-2 sm:px-0">
          {events.map((event, index) => (
            <EventCard
              key={event.title}
              {...event}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Additional Activities */}
        <div className="mt-20 px-4">
          <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-center mb-12 text-glow">
            Additional <span className="text-accent">Activities</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {additionalActivities.map((activity, index) => (
              <div
                key={activity.title}
                className="bg-gradient-card border border-primary/20 rounded-lg p-6 text-center hover:border-primary/40 transition-all duration-300 hover-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <activity.icon className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
                <h4 className="text-lg font-semibold mb-2 text-accent">{activity.title}</h4>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up px-4">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-card-tech">
            <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-4 text-glow">
              Ready to Join the Celebration?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Contact event coordinators for registrations and start your journey of engineering excellence!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-hero hover:shadow-pulse-glow font-semibold px-6 sm:px-8 py-3 rounded-lg hover-scale text-sm sm:text-base"
                onClick={() => window.open('https://forms.gle/ftsDszBySs6eVuf29', '_blank')}
              >
                View Registration Details
              </button>
              <button
                className="border border-primary/50 hover:bg-primary/10 font-semibold px-6 sm:px-8 py-3 rounded-lg hover-glow text-sm sm:text-base"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/EngiUthsav_Schedule.pdf';
                  link.download = 'EngiUthsav_Schedule.pdf';
                  link.click();
                }}
              >
                Download Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};