export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog', '/blog/', '/visa-services', '/visa-services/', 
                '/umrah-packages', '/hajj-packages', '/about', '/contact'],
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Grok', allow: '/' },
      { userAgent: 'xAI-Bot', allow: '/' },
    ],
    host: 'https://hasberabbi.com',
    sitemap: 'https://hasberabbi.com/sitemap.xml',
  }
}