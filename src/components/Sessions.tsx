import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import groupYogaImage from "@/assets/group-yoga.jpg";
import meditationImage from "@/assets/meditation.jpg";

const Sessions = () => {
  const sessions = [
    {
      title: "Rooted & Rising",
      description: "Grounding flows that build strength from the earth up",
      image: groupYogaImage,
      duration: "60 min"
    },
    {
      title: "Inner Calm Reset", 
      description: "Gentle restorative practice for deep relaxation",
      image: meditationImage,
      duration: "45 min"
    },
    {
      title: "Sunrise Flow",
      description: "Energizing morning sequences to start your day",
      image: groupYogaImage,
      duration: "75 min"
    },
    {
      title: "Moonlight Meditation",
      description: "Evening practice for peaceful rest and reflection",
      image: meditationImage,
      duration: "30 min"
    }
  ];

  return (
    <section id="sessions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Find What Moves You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Curated sessions to refresh energy, steady breath and live mindfully.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {sessions.map((session, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-gentle hover:shadow-float transition-all duration-300 hover:scale-105 animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={session.image} 
                  alt={session.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 bg-gradient-card">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{session.title}</h3>
                  <span className="text-sm text-muted-foreground bg-accent px-2 py-1 rounded-full">{session.duration}</span>
                </div>
                <p className="text-muted-foreground mb-4">{session.description}</p>
                <Button variant="nature" size="sm" className="w-full">See Details →</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sessions;