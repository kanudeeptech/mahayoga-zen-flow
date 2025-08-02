import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-yoga.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-section pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Breathe in Nature,<br />
              Flow With <span className="text-primary">Mahayoga</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform your yoga journey with mindful practice and a caring, supportive community.
            </p>
            
            <div className="flex items-center space-x-6">
              <Button variant="hero" size="xl">Book Your Journey</Button>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-secondary rounded-full border-2 border-background"></div>
                </div>
                <span className="text-sm text-muted-foreground">1,200+ Students Inspired</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Weekly Classes
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Cancel Anytime
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Certified Instructors
              </span>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-float">
              <img 
                src={heroImage} 
                alt="Peaceful yoga practice in nature"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-hero rounded-full animate-float opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;