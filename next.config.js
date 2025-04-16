/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, './')
    return config
  },
  // Configurazioni per ottimizzare il deploy su Vercel
  swcMinify: true,
  experimental: {
    // Abilita ottimizzazioni sperimentali
    optimizeCss: true,
    // Migliora la velocità di build
    turbotrace: {
      logLevel: 'error'
    }
  }
}

module.exports = nextConfig 