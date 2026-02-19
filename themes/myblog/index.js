/**
 * themes/myblog/index.js — 最终修正版
 *
 * 关键原则：
 * - LayoutBase 包含 Nav + Footer，由 NotionNext 的 _app.js 自动调用（外层 shell）
 * - LayoutIndex / LayoutSlug 等所有其他 Layout 直接返回页面内容，不再包裹 LayoutBase
 * - 这样 Nav 和 Footer 只出现一次
 */

import Head  from 'next/head'
import Link  from 'next/link'
import { useState } from 'react'
import CONFIG from './config'
import STYLE  from './style'

import NotionPage from '@/components/NotionPage'

// ─── 工具函数 ────────────────────────────────────────────────
function tc(t) {
  if (!t) return ''
  const l = t.toLowerCase()
  if (['business','ai','product','philosophy'].some(k => l.includes(k))) return 'b'
  if (['psychology','others','life'].some(k => l.includes(k))) return 'r'
  return ''
}
const toSlug = p => `/${p.slug}`
const toDate = p => p?.date?.start_date?.slice(0, 7) || ''
const cut    = (s, n) => s && s.length > n ? s.slice(0, n) + '…' : (s || '')

// ─── 样式注入 ────────────────────────────────────────────────
function MBStyle() {
  return <Head><style dangerouslySetInnerHTML={{ __html: STYLE }} /></Head>
}

// ─── Nav ────────────────────────────────────────────────────
function Nav({ siteInfo }) {
  return (
    <nav className="mb-nav">
      <Link href="/" className="mb-logo">{siteInfo?.title || 'AMBER CHU'} ✦</Link>
      <ul className="mb-nav-links">
        <li><Link href="/archive">Archive</Link></li>
        <li><Link href="/category">Category</Link></li>
        <li><Link href="/tag">Tags</Link></li>
        <li><Link href={CONFIG.BTN_ABOUT_LINK}>About</Link></li>
      </ul>
      <Link href="#mb-newsletter" className="mb-nav-cta">Subscribe</Link>
    </nav>
  )
}

// ─── Footer ─────────────────────────────────────────────────
function Footer({ siteInfo }) {
  return (
    <footer className="mb-footer">
      <div>©2017–{new Date().getFullYear()} {siteInfo?.author || 'Amber Chu'}. All rights reserved.</div>
      <div className="mb-footer-links">
        <Link href="/archive">Archive</Link>
        <Link href="/tag">Tags</Link>
        <Link href={CONFIG.BTN_ABOUT_LINK}>About</Link>
        <a href="/feed" target="_blank" rel="noreferrer">RSS</a>
      </div>
      <div>Powered by NotionNext</div>
    </footer>
  )
}

// ─── Hero ────────────────────────────────────────────────────
function Hero({ siteInfo }) {
  return (
    <div className="mb-hero">
      <div className="mb-hero-bg" />
      <div className="mb-hero-grid" />
      <div className="mb-hero-inner">
        <div className="mb-badge">
          <span className="mb-dot" />
          Since {CONFIG.HERO_SINCE} · {CONFIG.HERO_BADGE}
        </div>
        <h1>{CONFIG.HERO_LINE1}<br />& <em>{CONFIG.HERO_LINE2}</em></h1>
        <p className="mb-hero-sub">
          {siteInfo?.description ||
            'Deep dives into digital marketing strategy, AI landscape analysis, book reviews, and the honest story of building a product from scratch.'}
        </p>
        <div className="mb-pills">
          <Link href={CONFIG.PILL_1_LINK} className="mb-pill mb-pill-y">{CONFIG.PILL_1_LABEL}</Link>
          <Link href={CONFIG.PILL_2_LINK} className="mb-pill mb-pill-b">{CONFIG.PILL_2_LABEL}</Link>
          <Link href={CONFIG.PILL_3_LINK} className="mb-pill mb-pill-r">{CONFIG.PILL_3_LABEL}</Link>
        </div>
        <div className="mb-btns">
          <Link href={CONFIG.BTN_BLOG_LINK}  className="mb-btn-p">{CONFIG.BTN_BLOG_LABEL}</Link>
          <Link href={CONFIG.BTN_ABOUT_LINK} className="mb-btn-g">{CONFIG.BTN_ABOUT_LABEL}</Link>
        </div>
      </div>
    </div>
  )
}

// ─── Stats Bar ───────────────────────────────────────────────
function StatsBar({ posts, tagOptions }) {
  return (
    <div className="mb-stats">
      <div className="mb-stat">
        <span className="mb-stat-n">{(posts?.length || 0)}+</span>
        <span className="mb-stat-l">Articles</span>
      </div>
      <div className="mb-stat">
        <span className="mb-stat-n">{CONFIG.STAT_YEARS}</span>
        <span className="mb-stat-l">Years</span>
      </div>
      <div className="mb-stat">
        <span className="mb-stat-n">{tagOptions?.length || 0}</span>
        <span className="mb-stat-l">Topics</span>
      </div>
      <div className="mb-stat">
        <span className="mb-stat-n">{CONFIG.STAT_BOOKS}</span>
        <span className="mb-stat-l">Books</span>
      </div>
    </div>
  )
}

// ─── Featured Posts ──────────────────────────────────────────
function FeaturedPosts({ posts }) {
  if (!posts?.length) return null
  const [big, ...rest] = posts.slice(0, 3)
  return (
    <section className="mb-sec" id="mb-posts">
      <div className="mb-sec-hd">
        <h2 className="mb-sec-t">Featured <span>Reads</span></h2>
        <Link href="/archive" className="mb-view-all">View all →</Link>
      </div>
      <div className="mb-feat-grid">
        <Link href={toSlug(big)} className="mb-card mb-card-big">
          <div className="mb-card-overlay" />
          <div className="mb-card-num">01</div>
          <div className="mb-card-inner">
            <div className={`mb-card-cat ${tc(big.category)}`}>{big.category || 'Article'}</div>
            <div className="mb-card-title-big">{big.title}</div>
            {big.summary && <div className="mb-card-desc">{cut(big.summary, 160)}</div>}
            <div className="mb-card-meta">
              <span>{toDate(big)}</span>
              {big.tags?.slice(0,2).map(t => <span key={t} className="mb-meta-tag">{t}</span>)}
            </div>
          </div>
        </Link>
        {rest.slice(0,2).map((p,i) => (
          <Link key={p.id} href={toSlug(p)} className="mb-card mb-card-sm">
            <div className="mb-card-num">0{i+2}</div>
            <div className={`mb-card-cat ${tc(p.category)}`}>{p.category || 'Article'}</div>
            <div className="mb-card-title">{p.title}</div>
            {p.summary && <div className="mb-card-desc">{cut(p.summary, 100)}</div>}
            <div className="mb-card-meta"><span>{toDate(p)}</span></div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ─── Post Rows ───────────────────────────────────────────────
function PostRows({ posts, startIdx=0, title='Latest Articles', linkAll='/archive', wrap=true }) {
  if (!posts?.length) return null
  const [w1, ...wrest] = title.split(' ')
  const rows = (
    <div className="mb-post-list">
      {posts.map((p,i) => (
        <Link key={p.id} href={toSlug(p)} className="mb-post-row">
          <span className="mb-post-num">{String(startIdx+i+1).padStart(2,'0')}</span>
          <div className="mb-post-info">
            <div className="mb-post-title">{p.title}</div>
            {p.tags?.length > 0 && <div className="mb-post-sub">{p.tags.join(' · ')}</div>}
          </div>
          {p.category && <span className={`mb-tag ${tc(p.category)}`}>{p.category}</span>}
        </Link>
      ))}
    </div>
  )
  if (!wrap) return rows
  return (
    <section className="mb-sec" style={{paddingTop:0}}>
      <div className="mb-sec-hd">
        <h2 className="mb-sec-t">{w1} <span>{wrest.join(' ')}</span></h2>
        <Link href={linkAll} className="mb-view-all">All articles →</Link>
      </div>
      {rows}
    </section>
  )
}

// ─── Pagination ──────────────────────────────────────────────
function Pagination({ page, pageCount }) {
  if (!pageCount || pageCount <= 1) return null
  return (
    <div className="mb-pag">
      {Array.from({length:pageCount},(_,i) => (
        <Link key={i} href={i===0?'/':`/page/${i+1}`}
          className={page===i+1?'cur':''}>{i+1}</Link>
      ))}
    </div>
  )
}

// ─── About Strip ─────────────────────────────────────────────
function AboutStrip({ siteInfo }) {
  const emoji = siteInfo?.icon && !siteInfo.icon.startsWith('http')
    ? siteInfo.icon : CONFIG.ABOUT_EMOJI
  return (
    <div className="mb-about" id="mb-about">
      <div className="mb-about-av">{emoji}</div>
      <div>
        <div className="mb-about-name">Hi, I&apos;m {siteInfo?.author || 'Amber Chu'} 👋</div>
        <div className="mb-about-bio">{CONFIG.ABOUT_BIO}</div>
        <div className="mb-about-links">
          {CONFIG.ABOUT_LINKS.map(lk => (
            <Link key={lk.href} href={lk.href} className="mb-about-lk">{lk.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Newsletter ──────────────────────────────────────────────
function Newsletter() {
  const [email,   setEmail]   = useState('')
  const [done,    setDone]    = useState(false)
  const [loading, setLoading] = useState(false)
  function submit() {
    if (!email || !email.includes('@')) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 500)
  }
  return (
    <div className="mb-nl" id="mb-newsletter">
      <h3>{CONFIG.NL_TITLE}</h3>
      <p>{CONFIG.NL_DESC}</p>
      {done
        ? <p style={{color:'var(--accent)',fontFamily:'var(--sans)'}}>✓ You&apos;re in! Talk soon. 🎉</p>
        : <div className="mb-nl-form">
            <input className="mb-nl-input" type="email" placeholder="your@email.com"
              value={email} onChange={e=>setEmail(e.target.value)}
              onKeyDown={e=>e.key==='Enter'&&submit()} disabled={loading}/>
            <button className="mb-nl-btn" onClick={submit}
              disabled={loading} style={{opacity:loading?.7:1}}>
              {loading?'…':'Subscribe'}
            </button>
          </div>
      }
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
//  LAYOUT EXPORTS
//
//  ⚠️ 重要规则：
//  - LayoutBase：包含 Nav + Footer，由 _app.js 自动作为外层 shell 调用
//  - 其他所有 Layout：直接返回页面内容片段，绝对不能再包裹 LayoutBase
//    否则 Nav 和 Footer 会各出现两次
// ═══════════════════════════════════════════════════════════════

/** 外层 Shell —— _app.js 自动调用，包含 Nav + Footer */
export const LayoutBase = ({ children, siteInfo }) => (
  <>
    <MBStyle />
    <Nav siteInfo={siteInfo} />
    {children}
    <Footer siteInfo={siteInfo} />
  </>
)

/** 🏠 首页内容（不包裹 LayoutBase） */
export const LayoutIndex = ({ posts, tagOptions, siteInfo }) => {
  const p = posts || []
  return (
    <>
      <Hero siteInfo={siteInfo} />
      <StatsBar posts={p} tagOptions={tagOptions} />
      <FeaturedPosts posts={p} />
      <PostRows posts={p.slice(3,11)} startIdx={3} title="Latest Articles" />
      <AboutStrip siteInfo={siteInfo} />
      <Newsletter />
    </>
  )
}

/** 📄 单篇文章页内容 */
export const LayoutSlug = ({ post, prev, next, siteInfo }) => {
  if (!post) return (
    <div style={{padding:'10rem 2rem',textAlign:'center',color:'var(--muted)'}}>
      Post not found.
    </div>
  )
  return (
    <div className="mb-post">
      {post.category && <div className="mb-post-cat">{post.category}</div>}
      <h1 className="mb-post-h1">{post.title}</h1>
      <div className="mb-post-meta">
        <span>{toDate(post)}</span>
        {post.tags?.map(t => <span key={t} className={`mb-tag ${tc(t)}`}>{t}</span>)}
      </div>
      <hr className="mb-post-div" />
      <NotionPage post={post} />
      <div className="mb-post-nav">
        {prev ? <Link href={toSlug(prev)}>← {prev.title}</Link> : <span />}
        {next ? <Link href={toSlug(next)}>{next.title} →</Link> : <span />}
      </div>
    </div>
  )
}

/** 📚 归档页内容 */
export const LayoutArchive = ({ posts }) => (
  <div className="mb-page">
    <h1 className="mb-page-t">All <span>Articles</span></h1>
    <PostRows posts={posts || []} wrap={false} />
  </div>
)

/** 🏷 分类 / 标签列表页内容 */
export const LayoutPostList = ({ posts, category, tag, page, pageCount }) => (
  <div className="mb-page">
    <h1 className="mb-page-t"><span>{category || tag || 'Articles'}</span></h1>
    <PostRows posts={posts || []} wrap={false} />
    <Pagination page={page} pageCount={pageCount} />
  </div>
)

/** 🔍 搜索结果页内容 */
export const LayoutSearch = ({ posts, keyword }) => {
  const kw = keyword || ''
  const results = kw
    ? (posts||[]).filter(p =>
        p.title?.toLowerCase().includes(kw.toLowerCase()) ||
        p.summary?.toLowerCase().includes(kw.toLowerCase()))
    : []
  return (
    <div className="mb-page">
      <h1 className="mb-page-t">Search <span>Results</span></h1>
      {kw && (
        <p style={{fontFamily:'var(--sans)',color:'var(--muted)',marginBottom:'1.5rem',fontSize:'.83rem'}}>
          {results.length} result{results.length!==1?'s':''} for &ldquo;{kw}&rdquo;
        </p>
      )}
      <PostRows posts={results} wrap={false} />
    </div>
  )
}

/** 📂 分类索引页内容 */
export const LayoutCategoryIndex = ({ categoryOptions }) => (
  <div className="mb-page">
    <h1 className="mb-page-t">Browse by <span>Category</span></h1>
    <div className="mb-tag-cloud">
      {(categoryOptions||[]).map(c => (
        <Link key={c.name} href={`/category/${c.name}`}>{c.name} ({c.count})</Link>
      ))}
    </div>
  </div>
)

/** 🔖 标签索引页内容 */
export const LayoutTagIndex = ({ tagOptions }) => (
  <div className="mb-page">
    <h1 className="mb-page-t">Browse by <span>Tag</span></h1>
    <div className="mb-tag-cloud">
      {(tagOptions||[]).map(t => (
        <Link key={t.name} href={`/tag/${t.name}`}>{t.name}</Link>
      ))}
    </div>
  </div>
)

export default {
  LayoutBase, LayoutIndex, LayoutSlug, LayoutArchive,
  LayoutPostList, LayoutSearch, LayoutCategoryIndex, LayoutTagIndex
}
