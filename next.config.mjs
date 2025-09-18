/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // وقف Turbopack
  },
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org',"placehold.co"],
  },
}

export default nextConfig;
