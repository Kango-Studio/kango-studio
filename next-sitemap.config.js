module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://kangostudio.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
