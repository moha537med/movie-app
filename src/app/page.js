
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PopularMovies from "@/components/PopularMovies";
import RecommendedMovies from "@/components/RecommendedMovies";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PopularMovies />
        <RecommendedMovies />
      </main>
      <Footer />
    </>
  );
}

