import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sessions from "@/components/Sessions";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Community from "@/components/Community";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Sessions />
      <About />
      <Pricing />
      <FAQ />
      <Community />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
