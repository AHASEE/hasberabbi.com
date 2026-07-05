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
      // ——— OPENAI ———
      {
        userAgent: 'GPTBot', // training crawler
        allow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User', // live browse when a user shares/asks about a URL
        allow: ['/'],
      },
      {
        userAgent: 'OAI-SearchBot', // powers ChatGPT search citations — different from GPTBot
        allow: ['/'],
      },
      // ——— ANTHROPIC (Claude) ———
      {
        userAgent: 'ClaudeBot', // main crawler (replaces deprecated anthropic-ai / claude-web)
        allow: ['/'],
      },
      {
        userAgent: 'Claude-User', // live fetch during a Claude conversation
        allow: ['/'],
      },
      {
        userAgent: 'Claude-SearchBot', // powers Claude's search/citation feature
        allow: ['/'],
      },
      // ——— GOOGLE ———
      {
        userAgent: 'Google-Extended', // Gemini / Vertex AI training opt-in
        allow: ['/'],
      },
      // ——— PERPLEXITY ———
      {
        userAgent: 'PerplexityBot',
        allow: ['/'],
      },
      {
        userAgent: 'Perplexity-User',
        allow: ['/'],
      },
      // ——— APPLE ———
      {
        userAgent: 'Applebot-Extended', // Apple Intelligence training
        allow: ['/'],
      },
      // ——— AMAZON ———
      {
        userAgent: 'Amazonbot', // Alexa / Amazon AI answers
        allow: ['/'],
      },
      // ——— META ———
      {
        userAgent: 'Meta-ExternalAgent', // Meta AI training + indexing
        allow: ['/'],
      },
      // ——— COMMON CRAWL (feeds many open-source & commercial models) ———
      {
        userAgent: 'CCBot',
        allow: ['/'],
      },
    ],
    host: 'https://hasberabbi.com',
    sitemap: 'https://hasberabbi.com/sitemap.xml',
  }
}