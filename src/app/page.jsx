import HeroSection from "@/components/Hero";
import PortfolioCarousel from "@/components/portfolioCarousel";
import Navbar from "@/components/Navbar";
import ExperienceBanner from "@/components/Experiencebanner";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import UspBanner from "@/components/USPbanner";
import CustomPricing from "@/components/custompricing";
import { Button } from "@/components/ui/button";
import AboutUs from "@/components/AboutUs";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground space-y-16">
      <Navbar/>

      <HeroSection/> 
      
      <h2 className="text-3xl text-center md:text-4xl font-bold mb-4 fire-gradient-text leading-[1.15] pb-1">Our Work</h2>
      <PortfolioCarousel/>


     
      <ExperienceBanner/>
      <ServicesSection/>

      <UspBanner/>

      <AboutUs />
      {/* Our Work heading moved here */}
      
      <section className="text-center space-y-6 p-10 relative overflow-hidden shadow-lg my-12">
        {/* Bold gradient background with pattern ov~erlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
        {/* Free audit image in bottom right */}
        <div className="absolute bottom-0 right-0 z-5 h-full flex items-end hidden sm:flex">
          <Image 
            src="/freeauditimg3.png" 
            alt="Free Audit" 
            width={288}
            height={288}
            className="w-32 sm:w-48 md:w-56 lg:w-72 xl:w-72 object-bottom h-full max-h-72 object-contain opacity-80 mb-0 p-0 mr-2 sm:mr-0 lg:mr-1 xl:mr-24" 
          />
        </div>
        {/* Free audit mag image in bottom left */}
        <div className="absolute bottom-0 left-0 z-5 h-full flex items-end hidden sm:flex">
          <Image 
            src="/freeauditimg12.png" 
            alt="Free Audit Magazine" 
            width={240}
            height={160}
            className="w-28 sm:w-40 md:w-48 lg:w-60 xl:w-60 object-bottom h-full max-h-40 object-contain opacity-80 mb-12 p-0 ml-2 sm:ml-0 lg:ml-1 xl:ml-24" 
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-white bg-clip-text text-transparent mb-2 drop-shadow-lg">Free Retention Audit</h2>
          <p className="max-w-xl mx-auto text-white text-xl font-medium drop-shadow">
            Curious how your email, SMS, or push strategies are really performing? Get a free, no-strings-attached audit from our experts.
          </p>
          <a href="https://calendly.com/clingy-afagency/30min" target="_blank" rel="noopener noreferrer">
            <Button className="text-lg px-6 py-4 mt-4 mb-5 bg-white font-semibold rounded-full shadow-lg border-2 border-white hover:shadow-xl transition-all duration-200 cursor-pointer">
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-400 bg-clip-text text-transparent">
                Get My Free Audit
              </span>
            </Button>
          </a>


        </div>
      </section>
      <CustomPricing/>
      <Footer/>
    </main>
  );
}
