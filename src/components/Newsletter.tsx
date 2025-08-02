import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import walkingImage from "@/assets/walking-nature.jpg";

const Newsletter = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${walkingImage})`}}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 text-white/80 text-lg">
              <span>Stillness</span>
              <span>in</span>
              <span>Motion</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white">
              Walk Lightly.
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Stay in the Flow</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="mahayoga@gmail.com"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;