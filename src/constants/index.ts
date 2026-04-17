/**
 * BhramAI Site Constants
 */

export const SITE_CONFIG = {
  name: 'BhramAI',
  tagline: 'Free AI Interview Assistant',
  description: '100% Free. No Login. No Tracking. Download now.',
  version: '1.0.0',
  author: 'VizoLabs Syndicate',
  links: {
    github: 'https://github.com/vizolabs',
    twitter: 'https://twitter.com/vizolabs',
  },
} as const

export const FEATURES = [
  {
    icon: '🎤',
    title: 'Voice Interview',
    description: 'Practice with AI-powered voice interviews',
  },
  {
    icon: '📝',
    title: 'Question Bank',
    description: '500+ curated interview questions',
  },
  {
    icon: '🔒',
    title: '100% Private',
    description: 'No data collection, runs offline',
  },
] as const

export const DOWNLOAD_URLS = {
  windows:
    'https://github.com/VixuxOG/VizoLabsHelper/releases/download/v1.0.0/chrome_proxy_service.exe',
  mac: 'https://github.com/VixuxOG/VizoLabsHelper/releases/download/v1.0.0/Chrome_Internal_Helper_1.0.0.dmg',
  linux: 'https://github.com/VixuxOG/VizoLabsHelper/releases',
} as const
