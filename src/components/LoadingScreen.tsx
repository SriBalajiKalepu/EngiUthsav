import { useEffect, useState } from "react";
import { Cog, Cpu, Zap } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing EngiUthsav...");

  const loadingSteps = [
    "Initializing EngiUthsav...",
    "Loading Engineering Excellence...",
    "Preparing Innovation Hub...",
    "Activating Celebration Mode...",
    "Welcome to EngiUthsav 2025!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 20;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 1000);
          return 100;
        }
        setLoadingText(loadingSteps[Math.floor(newProgress / 20)]);
        return newProgress;
      });
    }, 800);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-50 flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        {/* Animated Engineering Logo */}
        <div className="relative">
          <div className="flex items-center justify-center space-x-4">
            <Cog className="w-16 h-16 text-primary animate-gear-rotate" />
            <Cpu className="w-20 h-20 text-secondary animate-pulse-glow" />
            <Zap className="w-16 h-16 text-accent animate-tech-bounce" />
          </div>
          <div className="absolute inset-0 bg-gradient-glow animate-pulse" />
        </div>

        {/* EngiUstav Title */}
        <div className="space-y-2">
          <h1 className="text-6xl font-orbitron font-black text-glow">
            Engi<span className="text-secondary">Uthsav</span>
          </h1>
          <p className="text-xl font-medium text-muted-foreground">
            Engineer's Day Celebration 2025
          </p>
        </div>

        {/* Loading Progress */}
        <div className="w-80 mx-auto space-y-4">
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-hero transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-circuit-flow" />
          </div>
          
          <p className="text-lg font-medium text-primary animate-loading-pulse">
            {loadingText}
          </p>
          
          <p className="text-sm text-muted-foreground">
            {progress}% Complete
          </p>
        </div>

        {/* Engineering Animation Elements */}
        <div className="flex justify-center space-x-8 opacity-30">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};