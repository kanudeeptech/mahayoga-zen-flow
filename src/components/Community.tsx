import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import communityImage from "@/assets/community.jpg";

const Community = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Let's Find Your Flow, Together
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join a community that values intention, connection and calm. 
              Explore yoga as a daily ritual to ground, grow and gently transform.
            </p>
            <Button variant="hero" size="xl">Start Your Journey</Button>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-float">
              <img 
                src={communityImage} 
                alt="Happy yoga community members"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;