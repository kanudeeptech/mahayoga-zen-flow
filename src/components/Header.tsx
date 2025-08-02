import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-full"></div>
            <span className="text-xl font-semibold text-foreground">Mahayoga</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sessions" className="text-foreground hover:text-primary transition-colors">Sessions</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
          </nav>
          
          <Button variant="hero" size="default">Book a Session</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;