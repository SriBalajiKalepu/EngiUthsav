import { Award, Users, Target, Lightbulb, Rocket, Star } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Excellence",
      description: "Celebrating engineering achievements and fostering innovation"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections between students, faculty, and industry"
    },
    {
      icon: Target,
      title: "Purpose",
      description: "Engineers for the Society - Making a meaningful impact"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creative solutions to real-world challenges"
    }
  ];

  const departments = [
    { name: "Computer Science & Engineering", code: "CSE" },
    { name: "Information Technology", code: "IT" },
    { name: "Master of Computer Applications", code: "MCA" },
    { name: "CSE (AI & ML)", code: "AI&ML" },
    { name: "Artificial Intelligence & Data Science", code: "AI&DS" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Tech Animation Elements */}
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-primary rounded-full animate-tech-particle" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 right-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-tech-particle" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/3 right-10 w-1 h-8 bg-accent/60 animate-matrix-rain" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-10 w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-data-flow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-6 text-glow">
            About <span className="text-secondary">EngiUthsav</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A grand celebration of engineering excellence, innovation, and the spirit of discovery that drives us forward.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-card-tech">
              <h3 className="text-3xl font-orbitron font-bold mb-4 text-accent flex items-center">
                <Rocket className="w-8 h-8 mr-3 text-primary" />
                Our Vision
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                EngiUthsav 2025 is more than just a celebration - it's a platform for aspiring engineers to showcase their talent, 
                innovation, and team spirit while creating unforgettable memories.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our theme "Engineers for the Society" emphasizes the vital role engineers play in building a better, 
                more sustainable future for humanity through technology and innovation.
              </p>
            </div>

            <div className="bg-gradient-card border border-secondary/20 rounded-2xl p-8 shadow-card-tech">
              <h3 className="text-2xl font-orbitron font-bold mb-4 text-secondary flex items-center">
                <Star className="w-6 h-6 mr-3" />
                BVC College of Engineering
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                An Autonomous Institution NAAC accredited, approved by AICTE New Delhi, 
                and permanently affiliated to JNTUK Kakinada. Located at Palacharla, 
                Rajamahendravaram, our institution has been at the forefront of engineering education and innovation.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl font-orbitron font-bold mb-6 text-glow">
              Why <span className="text-accent">Participate?</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="bg-gradient-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover-glow animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <highlight.icon className="w-8 h-8 text-primary mb-3 animate-pulse" />
                  <h4 className="text-lg font-semibold mb-2 text-accent">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Participating Departments */}
        <div className="mb-16 animate-fade-in-up">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-8 text-glow">
            Participating <span className="text-primary">Departments</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {departments.map((dept, index) => (
              <div
                key={dept.code}
                className="bg-gradient-card border border-accent/20 rounded-lg p-4 text-center hover:border-accent/40 transition-all duration-300 hover-scale animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl font-orbitron font-bold text-accent mb-2">{dept.code}</div>
                <div className="text-xs text-muted-foreground">{dept.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Organizers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-card-tech">
            <h4 className="text-xl font-orbitron font-bold mb-4 text-primary">CSE, IT & MCA</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span className="text-accent font-medium">Convener:</span> Mr. M. Satyanarayana
              </p>
              <p className="text-muted-foreground">
                <span className="text-accent font-medium">Co-convener:</span> Mrs. M. Madhavi
              </p>
            </div>
          </div>

          <div className="bg-gradient-card border border-secondary/20 rounded-2xl p-8 shadow-card-tech">
            <h4 className="text-xl font-orbitron font-bold mb-4 text-secondary">CSE (AI&ML) & AI&DS</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span className="text-accent font-medium">Convener:</span> Mrs. N. Nirmala
              </p>
              <p className="text-muted-foreground">
                <span className="text-accent font-medium">Co-convener:</span> Mr. V. Guru Kumar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};