/*
 * @Author: zitons
 * @Date: 2024-02-10 10:30:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-16 14:24:19
 * @Description: 简介
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
   enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/,
         use: ["@svgr/webpack"]
      }); // 针对 SVG 的处理规则

      return config;
   },
   async redirects() {
      return [
         {
            source: '/',
            destination: '/1',
            permanent: false
         },
      ]
   },


   staticPageGenerationTimeout: 1800,
   compiler: {
      styledComponents: true,
   },
   images: {
      unoptimized: true,
      domains: [
         'www.notion.so',
         'notion.so',
         'images.unsplash.com',
         'pbs.twimg.com',
         's3.us-west-2.amazonaws.com',
         'prod-files-secure.s3.us-west-2.amazonaws.com',
         'source.unsplash.com',
         "s3-us-west-2.amazonaws.com"
      ],
      formats: ['image/avif', 'image/webp']
   },
   typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
   },

})
