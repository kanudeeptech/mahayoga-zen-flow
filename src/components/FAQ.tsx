import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What level do I need to join?",
      answer: "All levels are welcome! Our instructors provide modifications for beginners and challenging variations for advanced practitioners. Each class is designed to meet you where you are in your yoga journey."
    },
    {
      question: "How does the 14-day free trial work?",
      answer: "Your free trial gives you full access to all online content, live classes, and community features. No credit card required to start. After 14 days, you can choose the membership that works best for you."
    },
    {
      question: "Can I mix studio and online classes?",
      answer: "Absolutely! Most of our memberships include both online and in-studio options. You can seamlessly flow between virtual and in-person classes based on your schedule and preferences."
    },
    {
      question: "What equipment will I need at home?", 
      answer: "Just a yoga mat to start! While props like blocks, straps, and bolsters can enhance your practice, our instructors always offer alternatives using household items. We'll provide a recommended equipment list after you join."
    },
    {
      question: "How can I cancel or change my plan?",
      answer: "You can upgrade, downgrade, or cancel your membership anytime through your account settings. Changes take effect at your next billing cycle, and there are no cancellation fees."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            FAQ
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 shadow-gentle hover:shadow-float transition-all duration-300 animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;