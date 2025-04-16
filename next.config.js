/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@components': path.resolve(__dirname, 'components'),
      '@app': path.resolve(__dirname, 'app'),
      '@lib': path.resolve(__dirname, 'lib'),
      '@types': path.resolve(__dirname, 'types'),
      '@public': path.resolve(__dirname, 'public'),
      '@hooks': path.resolve(__dirname, 'hooks'),
      '@server': path.resolve(__dirname, 'server'),
      '@prisma': path.resolve(__dirname, 'prisma')
    }
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
    },
    serverComponentsExternalPackages: ['sharp'],
  },
  images: {
    domains: ['localhost'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('sharp');
    }
    return config;
  },
}

module.exports = nextConfig 