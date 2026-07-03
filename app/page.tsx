import AboutSection from "@/components/AboutSection";
import HeroScene from "@/components/HeroScene";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-black text-white">
      <HeroScene />
      <Navbar />
      <AboutSection />
      <WhySection />
      <ProductsSection />
    </main>
  );
}
