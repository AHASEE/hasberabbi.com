export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/dashboard/',
          '/account/',
          '/login/',
          '/register/',
        ],
      },
      // AI Crawlers - Explicitly Allowed
      {
        userAgent: 'GPTBot',
        allow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/'],
      },
      {
        userAgent: 'Grok',
        allow: ['/'],
      },
      {
        userAgent: 'xAI-Bot',
        allow: ['/'],
      },
      {
        userAgent: 'CCBot',
        allow: ['/'],
      },
    ],
    host: 'https://hasberabbi.com',
    sitemap: 'https://hasberabbi.com/sitemap.xml',
  }
}