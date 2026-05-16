/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pour un déploiement statique sur IONOS Deploy Now :
  // output: 'export',
  // trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
