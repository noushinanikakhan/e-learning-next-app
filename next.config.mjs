/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    // use remotePatterns instead of deprecated `domains`
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',          // ✅ keep this
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // ❌ removed `experimental.esmExternals: 'loose'`
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactCompiler: true,
//   images: {
//     domains: ['picsum.photos', 'i.pravatar.cc'],
//   },
// };

// export default nextConfig;