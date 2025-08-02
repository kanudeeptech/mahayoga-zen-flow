const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>hello@mahayoga.com</p>
              <p>+44 7712 345678</p>
            </div>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="space-y-2">
              <a href="#sessions" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sessions</a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</a>
              <a href="#pricing" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Pricing</a>
              <a href="#faq" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</a>
            </div>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social</h3>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Instagram</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">LinkedIn</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Facebook</a>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms & Conditions</a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">© 2025 Mahayoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;