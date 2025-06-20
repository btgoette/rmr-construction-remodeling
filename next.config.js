const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  compress: true,
  productionBrowserSourceMaps: false,
};

module.exports = withBundleAnalyzer(nextConfig);
