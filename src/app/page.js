
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import PopularMovies from "@/Components/PopularMovies";
import RecommendedMovies from "@/Components/RecommendedMovies";

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

