import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Trophy, ChevronRight } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  coordinators: string[];
  duration?: string;
  participants?: string;
  prizes?: string;
  delay?: number;
}

export const EventCard = ({ 
  title, 
  description, 
  image, 
  coordinators, 
  duration, 
  participants, 
  prizes,
  delay = 0 
}: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`group relative overflow-hidden bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-tech hover-scale animate-fade-in-up mx-2 sm:mx-0`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        {/* Floating Elements */}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
            Technical Event
          </Badge>
        </div>
      </div>

      <CardHeader className="relative px-4 sm:px-6">
        <CardTitle className="text-xl sm:text-2xl font-orbitron font-bold text-glow group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 px-4 sm:px-6">
        {/* Event Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {duration && (
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-secondary" />
              <span className="text-muted-foreground">{duration}</span>
            </div>
          )}
          {participants && (
            <div className="flex items-center space-x-2 text-sm">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">{participants}</span>
            </div>
          )}
          {prizes && (
            <div className="flex items-center space-x-2 text-sm">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{prizes}</span>
            </div>
          )}
        </div>

        {/* Coordinators */}
        <div>
          <h4 className="text-sm font-semibold text-accent mb-2">Event Coordinators:</h4>
          <div className="space-y-1">
            {coordinators.map((coordinator, index) => (
              <p key={index} className="text-sm text-muted-foreground">
                • {coordinator}
              </p>
            ))}
          </div>
        </div>

        {/* Registration Button */}
        <Button 
          className="w-full bg-gradient-hero hover:shadow-pulse-glow font-semibold group/btn"
          size="lg"
          onClick={() => window.open('https://forms.gle/ftsDszBySs6eVuf29', '_blank')}
        >
          Register Now
          <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-glow opacity-0 transition-opacity duration-500 pointer-events-none ${
        isHovered ? 'opacity-30' : 'opacity-0'
      }`} />
    </Card>
  );
};