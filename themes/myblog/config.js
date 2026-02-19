/**
 * themes/myblog/config.js
 */
const CONFIG = {
  // Hero 区域文字
  HERO_SINCE:       '2017',
  HERO_BADGE:       'Digital Corner',
  HERO_LINE1:       'Marketing, AI',
  HERO_LINE2:       'Life in Between',

  // Hero 三个 Tag 按钮 → 对应 Notion 里的 Tag 名称（大小写需与 Notion 一致）
  PILL_1_LABEL:     '📣 Marketing',
  PILL_1_LINK:      '/tag/Marketing',
  PILL_2_LABEL:     '🤖 AI & Tech',
  PILL_2_LINK:      '/tag/Business',
  PILL_3_LABEL:     '📚 Book Reviews',
  PILL_3_LINK:      '/category/Book Review',

  // Hero 按钮
  BTN_BLOG_LABEL:   'Read the Blog',
  BTN_BLOG_LINK:    '/archive',
  BTN_ABOUT_LABEL:  'About Amber',
  BTN_ABOUT_LINK:   '/aboutme',        // 对应 Notion 中 slug=aboutme 的 Page

  // 统计栏（手动维护）
  STAT_YEARS:       '9',
  STAT_BOOKS:       '60+',

  // About 条带
  ABOUT_EMOJI:      '🦝',
  ABOUT_BIO:        'Digital marketer turned indie builder. I write about marketing strategy, AI trends, and building products from scratch. Currently building WarmRaccoon and sharing everything I learn along the way.',

  // About 条带快速链接
  ABOUT_LINKS: [
    { label: '📣 Marketing',    href: '/tag/Marketing'  },
    { label: '🤖 Business & AI', href: '/tag/Business'  },
    { label: '📚 Book Reviews', href: '/category/Book Review' },
    { label: 'More about me →', href: '/aboutme'        },
  ],

  // Newsletter
  NL_TITLE: 'Stay in the Loop ✦',
  NL_DESC:  'New articles on marketing, AI & building things — delivered to your inbox.',
}

export default CONFIG
