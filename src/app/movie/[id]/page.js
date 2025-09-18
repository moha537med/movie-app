import Image from "next/image";


export default async function MovieDetailsPage({ params }) {

  const { id } = params; 
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 10 } }
  );
  if (!res.ok) throw new Error("Failed to fetch movie details");
  const movie = await res.json();
 
  return (
    <section id="card-details" className="my-10 sm:my-14 md:my-20 px-5">

      <div className="container max-w-[1400px] mx-auto flex flex-col gap-8 md:flex-row md:gap-12 lg:gap-16">

        {/* Description Card */}
        <div className="flex flex-col justify-center gap-6 w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#e50914]">
            {movie.title}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#d1d1d1] leading-relaxed drop-shadow-md">
            <span className="font-bold">Release Date:</span> {movie.release_date || "—"}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-[#d1d1d1] leading-relaxed drop-shadow-md">
            <span className="font-bold">Rating: ⭐</span> {movie.vote_average || "No rate available"}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-[#d1d1d1] leading-relaxed drop-shadow-md">
            <span className="font-bold">Overview:</span> {movie.overview || "No overview available."}
          </p>
          
        </div>

        {/* Poster Card */}
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/no-image.webp"
            }
            alt={movie.title || "Movie poster"}
            width={500}
            height={600}
            className="max-h-[500px] w-full lg:w-[600px] object-cover rounded-[20px] shadow-2xl"
            
          />
        </div>
      </div>
    </section>
  );
}
