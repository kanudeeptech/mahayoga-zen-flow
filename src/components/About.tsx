import meditationImage from "@/assets/meditation.jpg";

const About = () => {
  const features = [
    {
      title: "Live Zoom Yoga Sessions",
      description: "Join real-time yoga classes led by certified instructors—anywhere, anytime.",
      highlight: true
    },
    {
      title: "Small Group Flows",
      description: "Intimate classes that foster connection and personalized attention."
    },
    {
      title: "Private 1-on-1 Sessions", 
      description: "Customized practice tailored to your unique goals and needs."
    },
    {
      title: "Outdoor Sessions",
      description: "Connect with nature through mindful movement in beautiful settings."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Why Mahayoga
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover what makes our practice truly unique—and why you'll love every moment here.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 animate-fade-up ${
                    feature.highlight 
                      ? 'bg-accent border border-primary/20 shadow-gentle' 
                      : 'bg-card hover:bg-accent/50'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-float">
              <img 
                src={meditationImage} 
                alt="Peaceful meditation practice"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-foreground">Live Sessions Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;