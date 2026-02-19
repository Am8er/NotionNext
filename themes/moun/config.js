/**
 * themes/muon/config.js
 * Muon 主题专属配置
 * 可在 Vercel 环境变量 或 Notion Config 页面中覆盖这里的值
 */
const CONFIG = {
  THEME_SWITCH: true,           // 是否显示右下角主题切换按钮

  // 首页 Hero 区域
  MUON_HERO_TITLE_LINE1: 'Marketing, AI',
  MUON_HERO_TITLE_LINE2: '& Life in Between',
  MUON_HERO_SINCE: '2017',      // 建站年份
  MUON_HERO_BADGE: 'Digital Corner', // Hero 徽章文字

  // Hero 标签（3 个）
  MUON_PILL_1: '📣 Marketing',
  MUON_PILL_2: '🤖 AI & Tech',
  MUON_PILL_3: '📚 Book Reviews',

  // 统计栏（固定数字可手动改，或留空自动计算）
  MUON_STAT_YEARS: '9',
  MUON_STAT_BOOKS: '20+',

  // About 条带
  MUON_ABOUT_EMOJI: '🦝',
  MUON_ABOUT_BIO: 'Digital marketer turned indie builder. I write about marketing strategy, AI trends, and building products from scratch.',

  // Newsletter（仅前端展示，接入实际服务请用 Mailchimp/ConvertKit）
  MUON_NEWSLETTER_TITLE: 'Stay in the Loop ✦',
  MUON_NEWSLETTER_DESC: 'New articles on marketing, AI & building things — delivered to your inbox.',

  // 颜色（可覆盖 CSS 变量）
  MUON_COLOR_ACCENT: '#f5c842',   // 金色
  MUON_COLOR_A2: '#ff6b6b',       // 红色
  MUON_COLOR_A3: '#6bcfff',       // 蓝色
}

export default CONFIG
