import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import FeaturedTools from "@/components/home/FeaturedTools";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="max-w-screen-2xl mx-auto px-2">
          <HeroSection />
          <FeaturedArticles />
          <FeaturedTools />
        </div>
      </main>
      <Footer />
    </div>
  );
}
