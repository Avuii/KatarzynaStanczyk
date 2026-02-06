import { ParticleBackground } from "./components/particle-background";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { FooterSection } from "./components/footer-section";

export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Single continuous particle background */}
      <div className="fixed inset-0 w-full h-full">
        <ParticleBackground />
      </div>

      {/* Gradual gradient overlay that intensifies down the page */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70 backdrop-blur-[2px]" 
             style={{ 
               maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)'
             }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" 
             style={{ 
               backdropFilter: 'blur(0px)',
               WebkitBackdropFilter: 'blur(0px)',
               maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, black 60%, black 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, black 60%, black 100%)'
             }}
        />
      </div>

      {/* Progressive blur layers */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        {/* Light blur starting from hero bottom */}
        <div className="absolute inset-0 backdrop-blur-sm opacity-0"
             style={{
               maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 70%, black 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, black 70%, black 100%)'
             }}
        />
        {/* Medium blur for about section */}
        <div className="absolute inset-0 backdrop-blur-md opacity-0"
             style={{
               maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%, black 80%, black 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%, black 80%, black 100%)'
             }}
        />
        {/* Strong blur for projects section */}
        <div className="absolute inset-0 backdrop-blur-xl opacity-0"
             style={{
               maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 70%, black 85%, black 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 70%, black 85%, black 100%)'
             }}
        />
      </div>

      {/* Content sections */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </div>
  );
}
