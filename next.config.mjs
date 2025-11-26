/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [ 'i.ibb.co.com'],
        formats: ['image/webp', 'image/avif'],

  },
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