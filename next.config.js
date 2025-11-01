// next.config.js (ESM)
/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const baseConfig = {
  // lets DevTools map numbered chunks (e.g., 255-*.js) back to modules
  productionBrowserSourceMaps: true,
  experimental: {
    // trims MUI bundle size by auto-rewriting deep imports
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(baseConfig);
