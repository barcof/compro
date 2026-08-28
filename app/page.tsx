import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisiMisi from "@/components/VisiMisi";
import Products from "@/components/Products";
import Facilities from "@/components/Facilities";
import Certifications from "@/components/Certifications";
import Customers from "@/components/Customers";
import Maps from "@/components/Maps";
import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <VisiMisi />
        <Products />
        <Facilities />
        <Certifications />
        
        {/* CTA Section */}
        {/* <Section background="navy" className="text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Ready to take your business to the next level?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Join hundreds of successful companies that trust BigSpring for their 
              digital transformation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 h-14 px-10 text-lg">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary h-14 px-10 text-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </Section> */}

        <Customers />
        <Maps />
      </main>
      <Footer />
    </div>
  );
}
