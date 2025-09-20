import MovieCard from "@/Components/MovieCard";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export default async function PopularMovies() {
  let movies = [];

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 3600 } } 
    );

    if (!res.ok) throw new Error('Failed to fetch popular movies');

    const data = await res.json();
    movies = data.results || [];
  } catch (err) {
    console.error(err);
  }

  // show the first eight movies
  const sliceEight = movies.slice(0, 8);

  return (

  <section  className="py-5 px-5 mb-24 ">
    <div className="max-w-[1250px] mx-auto">

      <h2 className=" text-2xl text-[#e50914]  md:text-4xl font-bold mb-10 lg:text-white">Popular Movies</h2>

      {/* Movies cards */}
      {movies.length === 0 ? (
        <p className="text-[#ccc]">No Popular movies found.</p>
      ) : (
      <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sliceEight.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      )}

    </div>
  </section>

  );
}
