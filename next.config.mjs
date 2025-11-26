/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ['i.ibb.co.com', 'i.ibb.co', 'picsum.photos', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    esmExternals: 'loose'
  }
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