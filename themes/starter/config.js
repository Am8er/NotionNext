/**
 * MUON Digital Marketing Agency
 * Starter Theme Configuration
 * — English, agency-focused
 */
const CONFIG = {
  // ─── LOGO ────────────────────────────────────────────────────────────────────
  // Leave empty to display text logo; set a path to show an image logo
  STARTER_LOGO: '',       // e.g. '/images/starter/logo/logo.svg'
  STARTER_LOGO_WHITE: '', // e.g. '/images/starter/logo/logo-white.svg'

  // ─── TOP-RIGHT NAV BUTTONS ───────────────────────────────────────────────────
  // Remove Sign-In; replace Sign-Up with a "Contact Us" CTA
  STARTER_NAV_BUTTON_1_TEXT: '',          // Leave empty → button hidden
  STARTER_NAV_BUTTON_1_URL: '',

  STARTER_NAV_BUTTON_2_TEXT: 'Contact Us',
  STARTER_NAV_BUTTON_2_URL: '/contact',  // scrolls to the contact section

  // ─── HERO ────────────────────────────────────────────────────────────────────
  STARTER_HERO_ENABLE: true,
  STARTER_HERO_TITLE_1: 'We Build Brands That Move Markets',
  STARTER_HERO_TITLE_2:
    'Full-service digital marketing — creative, media, digital and consulting — helping businesses grow across Asia-Pacific and beyond.',

  STARTER_HERO_BUTTON_1_TEXT: 'Explore Our Services',
  STARTER_HERO_BUTTON_1_URL: '/creative',

  STARTER_HERO_BUTTON_2_TEXT: 'Get in Touch',
  STARTER_HERO_BUTTON_2_URL: 'mailto:business@muon.ltd',
  STARTER_HERO_BUTTON_2_ICON: '', // set an icon path if desired

  // Hero imagery — replace with your own assets or leave the defaults
  STARTER_HERO_PREVIEW_IMAGE: '',
  STARTER_HERO_BANNER_IMAGE: '',

  // ─── FEATURES (= Your 4 Service Lines) ──────────────────────────────────────
  STARTER_FEATURE_ENABLE: true,
  STARTER_FEATURE_TITLE: 'What We Do',
  STARTER_FEATURE_TEXT_1: 'Four Integrated Service Lines',
  STARTER_FEATURE_TEXT_2:
    'From brand storytelling to performance media, from digital transformation to strategic consulting — MUON delivers end-to-end solutions that generate measurable results.',

  STARTER_FEATURE_1_TITLE_1: 'Creative Services',
  STARTER_FEATURE_1_TEXT_1:
    'Brand identity, content production, and visual storytelling that captures attention and drives engagement across every channel.',
  STARTER_FEATURE_1_BUTTON_TEXT: 'Learn More',
  STARTER_FEATURE_1_BUTTON_URL: '/creative',

  STARTER_FEATURE_2_TITLE_1: 'Digital Services',
  STARTER_FEATURE_2_TEXT_1:
    'SEO, social media management, e-commerce growth, and data-driven digital campaigns built for the modern consumer journey.',
  STARTER_FEATURE_2_BUTTON_TEXT: 'Learn More',
  STARTER_FEATURE_2_BUTTON_URL: '/digital',

  STARTER_FEATURE_3_TITLE_1: 'Media Services',
  STARTER_FEATURE_3_TEXT_1:
    'Integrated media planning and buying — paid search, programmatic, influencer partnerships, and cross-platform distribution.',
  STARTER_FEATURE_3_BUTTON_TEXT: 'Learn More',
  STARTER_FEATURE_3_BUTTON_URL: '/media',

  STARTER_FEATURE_4_TITLE_1: 'Consultant Services',
  STARTER_FEATURE_4_TEXT_1:
    'Strategic marketing consulting, market-entry advisory, and go-to-market roadmaps tailored to your growth stage and target market.',
  STARTER_FEATURE_4_BUTTON_TEXT: 'Learn More',
  STARTER_FEATURE_4_BUTTON_URL: '/consultant',

  // ─── ABOUT ───────────────────────────────────────────────────────────────────
  STARTER_ABOUT_ENABLE: true,
  STARTER_ABOUT_TITLE: 'A Trusted Partner Since 2018',
  STARTER_ABOUT_TEXT:
    'MUON is a full-service digital marketing agency headquartered in Fujian, China. Since 2018 we have partnered with over 200 clients — from fast-growing startups to established enterprises — delivering integrated creative, digital, media, and consulting solutions across Asia-Pacific and global markets.<br /><br />Our approach is simple: combine deep market insight with bold creative thinking to build brands that resonate, campaigns that convert, and strategies that last.',
  STARTER_ABOUT_BUTTON_TEXT: 'About MUON',
  STARTER_ABOUT_BUTTON_URL: '/about',

  // Replace these with your own agency photos uploaded to your Notion page or /public
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',

  // Three KPI badges shown over the about images
  STARTER_ABOUT_TIPS_1: '200+',
  STARTER_ABOUT_TIPS_2: 'Clients Served',
  STARTER_ABOUT_TIPS_3: 'Since 2018',

  // ─── PRICING — DISABLED ──────────────────────────────────────────────────────
  STARTER_PRICING_ENABLE: false,
  STARTER_PRICING_TITLE: '',
  STARTER_PRICING_TEXT_1: '',
  STARTER_PRICING_TEXT_2: '',
  STARTER_PRICING_1_TITLE: '',
  STARTER_PRICING_1_PRICE: '',
  STARTER_PRICING_1_PRICE_CURRENCY: '',
  STARTER_PRICING_1_PRICE_PERIOD: '',
  STARTER_PRICING_1_HEADER: '',
  STARTER_PRICING_1_FEATURES: '',
  STARTER_PRICING_1_BUTTON_TEXT: '',
  STARTER_PRICING_1_BUTTON_URL: '',
  STARTER_PRICING_2_TAG: '',
  STARTER_PRICING_2_TITLE: '',
  STARTER_PRICING_2_PRICE: '',
  STARTER_PRICING_2_PRICE_CURRENCY: '',
  STARTER_PRICING_2_PRICE_PERIOD: '',
  STARTER_PRICING_2_HEADER: '',
  STARTER_PRICING_2_FEATURES: '',
  STARTER_PRICING_2_BUTTON_TEXT: '',
  STARTER_PRICING_2_BUTTON_URL: '',
  STARTER_PRICING_3_TITLE: '',
  STARTER_PRICING_3_PRICE: '',
  STARTER_PRICING_3_PRICE_CURRENCY: '',
  STARTER_PRICING_3_PRICE_PERIOD: '',
  STARTER_PRICING_3_HEADER: '',
  STARTER_PRICING_3_FEATURES: '',
  STARTER_PRICING_3_BUTTON_TEXT: '',
  STARTER_PRICING_3_BUTTON_URL: '',

  // ─── TESTIMONIALS — DISABLED (add real ones when available) ─────────────────
  STARTER_TESTIMONIALS_ENABLE: false,
  STARTER_TESTIMONIALS_TITLE: '',
  STARTER_TESTIMONIALS_TEXT_1: '',
  STARTER_TESTIMONIALS_TEXT_2: '',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg',
  STARTER_TESTIMONIALS_ITEMS: [],

  // ─── FAQ ─────────────────────────────────────────────────────────────────────
  STARTER_FAQ_ENABLE: true,
  STARTER_FAQ_TITLE: 'Frequently Asked Questions',
  STARTER_FAQ_TEXT_1: 'Have Questions? We Have Answers.',
  STARTER_FAQ_TEXT_2:
    'Here are the questions we hear most often from prospective clients.',

  STARTER_FAQ_1_QUESTION: 'What industries do you specialise in?',
  STARTER_FAQ_1_ANSWER:
    'We work across a wide range of sectors including e-commerce, consumer goods, technology, lifestyle, and B2B services. Our particular strength lies in brands targeting Asia-Pacific consumers or looking to expand into global markets.',

  STARTER_FAQ_2_QUESTION: 'Do you offer project-based or retainer engagements?',
  STARTER_FAQ_2_ANSWER:
    'Both. We tailor our engagement model to suit your needs — whether that is a one-off campaign, a defined project, or an ongoing monthly retainer for continuous growth support.',

  STARTER_FAQ_3_QUESTION: 'How do I get started with MUON?',
  STARTER_FAQ_3_ANSWER:
    'Simply fill in the contact form below or email us directly. We will schedule a complimentary discovery call to understand your goals and recommend the best path forward.',

  STARTER_FAQ_4_QUESTION: 'Can you handle both Chinese-market and international campaigns?',
  STARTER_FAQ_4_ANSWER:
    'Yes — this is one of our core strengths. With deep roots in China and active campaigns across Asia-Pacific, Europe, and beyond, we help brands navigate cross-border marketing with confidence.',

  // ─── TEAM — DISABLED (add when ready) ────────────────────────────────────────
  STARTER_TEAM_ENABLE: false,
  STARTER_TEAM_TITLE: '',
  STARTER_TEAM_TEXT_1: '',
  STARTER_TEAM_TEXT_2: '',
  STARTER_TEAM_ITEMS: [],

  // ─── BLOG / INSIGHT ──────────────────────────────────────────────────────────
  STARTER_BLOG_ENABLE: true,
  STARTER_BLOG_TITLE: 'Insights',
  STARTER_BLOG_COUNT: 3,
  STARTER_BLOG_TEXT_1: 'Latest from MUON',
  STARTER_BLOG_TEXT_2:
    'Trends, analysis, and perspectives on digital marketing, consumer behaviour, and the evolving media landscape.',

  // ─── CONTACT ─────────────────────────────────────────────────────────────────
  STARTER_CONTACT_ENABLE: true,
  STARTER_CONTACT_TITLE: 'Get in Touch',
  STARTER_CONTACT_TEXT: 'Tell us about your project — we would love to help.',
  STARTER_CONTACT_LOCATION_TITLE: 'Our Location',
  STARTER_CONTACT_LOCATION_TEXT: 'United States, China',
  STARTER_CONTACT_EMAIL_TITLE: 'How Can We Help?',
  STARTER_CONTACT_EMAIL_TEXT: 'Business@muon.ltd', 
  STARTER_CONTACT_EMAIL_URL: 'mailto:business@muon.ltd',// ← replace with your real email

  // Embedded NoteForm (replace URL with your own MUON-branded form)
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/contact-us-gkko44',

  // ─── PARTNER BRANDS — DISABLED ───────────────────────────────────────────────
  STARTER_BRANDS_ENABLE: false,
  STARTER_BRANDS: [],

  // ─── FOOTER ──────────────────────────────────────────────────────────────────
  STARTER_FOOTER_SLOGAN:
    'We create digital experiences that move markets — from China to the world.',

  // Three footer link columns mirroring your main navigation
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'Services',
      LINK_GROUP: [
        { TITLE: 'Creative Services',    URL: '/creative' },
        { TITLE: 'Digital Services',     URL: '/digital' },
        { TITLE: 'Media Services',       URL: '/media' },
        { TITLE: 'Consultant Services',  URL: '/consultant' }
      ]
    },
    {
      TITLE: 'Insight',
      LINK_GROUP: [
        { TITLE: 'Trends',            URL: '/archive' },
        { TITLE: 'Service Providers', URL: '/links' },
        { TITLE: 'Reports',           URL: '/report' }
      ]
    },
    {
      TITLE: 'Company',
      LINK_GROUP: [
        { TITLE: 'About MUON', URL: '/about' },
        { TITLE: 'DEI',        URL: '/DEI' },
        { TITLE: 'Careers',    URL: '/careers' },
        { TITLE: 'Contact',    URL: '/contact' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest Insights',

  // Legal pages — you already have these as Notion pages
  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Statement',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy', // match your Notion page slug

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Terms & Conditions',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/terms-of-use', // match your Notion page slug

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '',  // hidden — merged above
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '',

  // ─── 404 PAGE ────────────────────────────────────────────────────────────────
  STARTER_404_TITLE: "Looks like this page doesn't exist.",
  STARTER_404_TEXT:
    "Sorry, we couldn't find what you were looking for. It may have been moved or removed.",
  STARTER_404_BACK: 'Back to Home',

  // ─── BOTTOM CTA ──────────────────────────────────────────────────────────────
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: 'Ready to Grow Your Brand?',
  STARTER_CTA_TITLE_2: "Let's Talk",
  STARTER_CTA_DESCRIPTION:
    'Whether you need a full-funnel campaign, a market-entry strategy, or a creative refresh — MUON has the expertise to make it happen. Reach out today for a free discovery call.',
  STARTER_CTA_BUTTON: true,
  STARTER_CTA_BUTTON_URL: 'mailto:business@muon.ltd',
  STARTER_CTA_BUTTON_TEXT: 'Start a Conversation',

  // ─── MISC ─────────────────────────────────────────────────────────────────────
  STARTER_POST_REDIRECT_ENABLE: false, // keep posts on muon.ltd
  STARTER_POST_REDIRECT_URL: '',
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false
}

export default CONFIG
