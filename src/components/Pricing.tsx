import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Root Pass",
      price: "$29",
      period: "/month",
      features: [
        "2 video playlists",
        "1 studio class pass",
        "Habit tracker",
        "Community forum"
      ],
      buttonText: "See Class Schedule",
      variant: "outline" as const
    },
    {
      name: "Flow Pass",
      price: "$79",
      period: "/month", 
      features: [
        "All online videos",
        "4 studio visits / mo",
        "Weekly livestream",
        "Community forum"
      ],
      buttonText: "See Class Schedule",
      variant: "hero" as const,
      popular: true
    },
    {
      name: "Zen Journey",
      price: "$149",
      period: "/month",
      features: [
        "All online + studio",
        "Monthly 1-on-1 coach",
        "Member workshops", 
        "Community forum"
      ],
      buttonText: "See Class Schedule",
      variant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible membership—upgrade or cancel whenever you like.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-0 shadow-gentle hover:shadow-float transition-all duration-300 hover:scale-105 animate-fade-up ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-hero text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'} pb-4`}>
                <h3 className="text-xl font-semibold text-foreground mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4 pb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant={plan.variant} className="w-full mt-6">
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;