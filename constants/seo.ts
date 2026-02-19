export const SEO = {
  siteName: '面试汪',
  siteUrl: 'https://www.mianshiwang.com',
  defaultTitle: '面试汪 - AI 面试平台 | 智能模拟面试助手',
  defaultDescription: '面试汪是专业的 AI 面试平台，提供智能模拟面试、实时反馈、面试技巧指导等服务，帮助求职者更好地准备面试。',
  defaultKeywords: 'AI面试,模拟面试,面试准备,求职面试,面试技巧,智能面试',
  author: '面试汪团队',
  locale: 'zh_CN',
  ogImage: '/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterSite: '@mianshiwang',
  baiduVerification: '',
  googleVerification: '',
  bingVerification: '',
  so360Verification: '',
};

export const absoluteUrl = (path: string) => {
  return `${SEO.siteUrl}${path}`;
};
