/**
 * themes/muon/index.js
 * NotionNext 主题入口 —— 导出所有 Layout* 组件
 *
 * NotionNext 会自动把 Notion 数据注入到每个 Layout 的 props 里：
 *   posts       所有文章列表（已过滤 Published）
 *   tags        所有标签数组
 *   categories  所有分类数组
 *   siteInfo    站点信息（标题/描述/作者/icon 来自 Notion 根页面）
 *   post        单篇文章对象（LayoutSlug 专用）
 *   prev/next   上下篇文章（LayoutSlug 专用）
 *   page        当前页码
 *   pageCount   总页数
 */

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import MUON_STYLE from './style'
import CONFIG from './config'

// NotionNext 内置的 Notion 内容渲染组件
// 如果部署后文章页报错，把 'NotionPage' 改成 'notion-page'
import NotionPage from '@/components/NotionPage'

// ─── 辅助函数 ───────────────────────────────────────
const BIZ = ['business','ai','product','philosophy']
const LIFE = ['psychology','others']
/** 根据 tag/category 返回颜色 class：''=金色 'b'=蓝色 'r'=红色 */
const tc = t => {
  if (!t) return ''
  const l = t.toLowerCase()
  if (BIZ.some(b => l.includes(b))) return 'b'
  if (LIFE.some(x => l.includes(x))) return 'r'
  return ''
}
const postSlug = p => `/${p.slug}`
const postDate = p => p?.date?.start_date?.slice(0, 7) || ''
const cut = (s, n) => s && s.length > n ? s.slice(0, n) + '…' : (s || '')
const pubPosts = posts => (posts || []).filter(p => p.type === 'Post' && p.status === 'Published')

// ─── 样式注入 ─────────────────────────────────────
function MuonStyle() {
  return <Head><style dangerouslySetInnerHTML={{ __html: MUON_STYLE }} /></Head>
}

// ─── 导航栏 ────────────────────────────────────────
function Nav({ siteInfo }) {
  return (
    <nav className="mn">
      <Link href="/" className="mn-logo">
        {siteInfo?.title || 'AMBER CHU'} ✦
      </Link>
      <ul className="mn-links">
        <li><Link href="/archive">Archive</Link></li>
        <li><Link href="/category">Category</Link></li>
        <li><Link href="/tag">Tags</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
      <Link href="#newsletter" className="mn-cta">Subscribe</Link>
    </nav>
  )
}

// ─── Hero ────────────────────────────────────────
function Hero({ siteInfo }) {
  return (
    <div className="mh">
      <div className="mh-bg" /><div className="mh-grid" />
      <div className="mh-inner">
        <div className="mh-badge">
          <span className="mh-dot" />
          Since {CONFIG.MUON_HERO_SINCE} · {CONFIG.MUON_HERO_BADGE}
        </div>
        <h1>
          {CONFIG.MUON_HERO_TITLE_LINE1}<br />
          & <em>{CONFIG.MUON_HERO_TITLE_LINE2.replace('& ', '')}</em>
        </h1>
        {/* 优先显示 Notion 根页面的 description，其次用 config 默认值 */}
        <p className="mh-sub">
          {siteInfo?.description || 'Deep dives into marketing, AI trends, and building things from scratch.'}
        </p>
        <div className="mh-pills">
          <span className="mh-pill py">{CONFIG.MUON_PILL_1}</span>
          <span className="mh-pill pb">{CONFIG.MUON_PILL_2}</span>
          <span className="mh-pill pr">{CONFIG.MUON_PILL_3}</span>
        </div>
        <div className="mh-btns">
          <Link href="/archive" className="btn-p">Read the Blog</Link>
          <Link href="/about" className="btn-g">About {siteInfo?.author || 'Me'}</Link>
        </div>
      </div>
    </div>
  )
}

// ─── Stats Bar ───────────────────────────────────
function StatsBar({ posts, tags }) {
  return (
    <div className="ms">
      <div className="ms-item">
        <span className="ms-n">{(posts?.length || 0)}+</span>
        <span className="ms-l">Articles</span>
      </div>
      <div className="ms-item">
        <span className="ms-n">{CONFIG.MUON_STAT_YEARS}</span>
        <span className="ms-l">Years</span>
      </div>
      <div className="ms-item">
        <span className="ms-n">{(tags?.length || 0)}</span>
        <span className="ms-l">Topics</span>
      </div>
      <div className="ms-item">
        <span className="ms-n">{CONFIG.MUON_STAT_BOOKS}</span>
        <span className="ms-l">Books</span>
      </div>
    </div>
  )
}

// ─── Featured Posts（前 3 篇） ─────────────────────
function FeaturedPosts({ posts }) {
  if (!posts?.length) return null
  const [big, ...rest] = posts.slice(0, 3)
  return (
    <section className="msec">
      <div className="msec-hd">
        <h2 className="msec-t">Featured <span>Reads</span></h2>
        <Link href="/archive" className="msec-more">View all →</Link>
      </div>
      <div className="mfg">
        {/* 大卡片 */}
        <Link href={postSlug(big)} className="mc mc-big">
          <div className="mc-glow" />
          <span className="mc-num">01</span>
          <div className="mc-rel">
            <div className={`mc-cat ${tc(big.category)}`}>{big.category || 'Article'}</div>
            <div className="mc-h2">{big.title}</div>
            {big.summary && <div className="mc-desc">{cut(big.summary, 120)}</div>}
            <div className="mc-meta">
              <span>{postDate(big)}</span>
              {big.tags?.slice(0, 2).map(t => <span key={t} className="tg-sm">{t}</span>)}
            </div>
          </div>
        </Link>
        {/* 两个小卡片 */}
        {rest.slice(0, 2).map((p, i) => (
          <Link key={p.id} href={postSlug(p)} className="mc mc-sm">
            <span className="mc-num">0{i + 2}</span>
            <div className={`mc-cat ${tc(p.category)}`}>{p.category || 'Article'}</div>
            <div className="mc-h3">{p.title}</div>
            {p.summary && <div className="mc-desc">{cut(p.summary, 80)}</div>}
            <div className="mc-meta"><span>{postDate(p)}</span></div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ─── Post Row List ────────────────────────────────
function PostRows({ posts, startIdx = 0, title = 'Latest Articles', linkAll = '/archive' }) {
  if (!posts?.length) return null
  const words = title.split(' ')
  const first = words[0]
  const rest = words.slice(1).join(' ')
  return (
    <section className="msec" style={{ paddingTop: 0 }}>
      <div className="msec-hd">
        <h2 className="msec-t">{first} <span>{rest}</span></h2>
        <Link href={linkAll} className="msec-more">All articles →</Link>
      </div>
      <div className="mpl">
        {posts.map((p, i) => (
          <Link key={p.id} href={postSlug(p)} className="mpr">
            <span className="mpr-n">{String(startIdx + i + 1).padStart(2, '0')}</span>
            <div className="mpr-info">
              <div className="mpr-t">{p.title}</div>
              {p.tags?.length > 0 && <div className="mpr-s">{p.tags.join(' · ')}</div>}
            </div>
            {p.category && <span className={`tg-b ${tc(p.category)}`}>{p.category}</span>}
          </Link>
        ))}
      </div>
    </section>
  )
}

// ─── About Strip ─────────────────────────────────
function AboutStrip({ siteInfo }) {
  // 优先使用 Notion 根页面 icon（如果不是 URL 就当 emoji 用）
  const emoji = siteInfo?.icon && !siteInfo.icon.startsWith('http')
    ? siteInfo.icon
    : CONFIG.MUON_ABOUT_EMOJI
  return (
    <div className="mab" id="about">
      <div className="mab-av">{emoji}</div>
      <div>
        <div className="mab-name">Hi, I&apos;m {siteInfo?.author || 'Amber Chu'} 👋</div>
        <div className="mab-bio">{CONFIG.MUON_ABOUT_BIO}</div>
        <div className="mab-links">
          <Link href="/tag/Marketing" className="mab-lk">📣 Marketing</Link>
          <Link href="/tag/Business" className="mab-lk">🤖 Business & AI</Link>
          <Link href="/tag/Psychology" className="mab-lk">📚 Book Reviews</Link>
          <Link href="/about" className="mab-lk">More about me →</Link>
        </div>
      </div>
    </div>
  )
}

// ─── Newsletter ───────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <div className="mnl" id="newsletter">
      <h3>{CONFIG.MUON_NEWSLETTER_TITLE}</h3>
      <p>{CONFIG.MUON_NEWSLETTER_DESC}</p>
      {done
        ? <p style={{ color: 'var(--accent)', fontFamily: 'var(--sans)' }}>✓ You&apos;re in! Talk soon.</p>
        : <div className="mnl-form">
            <input className="mnl-i" type="email" placeholder="your@email.com"
              value={email} onChange={e => setEmail(e.target.value)} />
            <button className="mnl-btn" onClick={() => email && setDone(true)}>Subscribe</button>
          </div>
      }
    </div>
  )
}

// ─── Footer ───────────────────────────────────────
function Footer({ siteInfo }) {
  return (
    <footer className="mft">
      <div>©2017–{new Date().getFullYear()} {siteInfo?.author || 'Amber Chu'}. All rights reserved.</div>
      <div className="mft-links">
        <Link href="/archive">Archive</Link>
        <Link href="/tag">Tags</Link>
        <Link href="/about">About</Link>
        <a href="/feed" target="_blank" rel="noreferrer">RSS</a>
      </div>
      <div>Powered by NotionNext</div>
    </footer>
  )
}

// ═══════════════════════════════════════════════════
//  LAYOUT EXPORTS —— NotionNext 必须导出以下这些
// ═══════════════════════════════════════════════════

/** 所有页面的基础 Shell */
export const LayoutBase = ({ children, siteInfo }) => (
  <>
    <MuonStyle />
    <Nav siteInfo={siteInfo} />
    {children}
    <Footer siteInfo={siteInfo} />
  </>
)

/** 首页 —— Notion 新文章发布后自动出现在这里 */
export const LayoutIndex = ({ posts, tags, siteInfo }) => {
  const pub = pubPosts(posts)
  return (
    <LayoutBase siteInfo={siteInfo}>
      <Hero siteInfo={siteInfo} />
      <StatsBar posts={pub} tags={tags} />
      <FeaturedPosts posts={pub} />
      <PostRows posts={pub.slice(3, 11)} startIdx={3} title="Latest Articles" />
      <AboutStrip siteInfo={siteInfo} />
      <Newsletter />
    </LayoutBase>
  )
}

/** 单篇文章页 —— Notion 内容完整渲染 */
export const LayoutSlug = ({ post, prev, next, siteInfo }) => {
  if (!post) return (
    <LayoutBase siteInfo={siteInfo}>
      <div style={{ padding: '10rem 2rem', textAlign: 'center', color: 'var(--muted)' }}>
        Post not found.
      </div>
    </LayoutBase>
  )
  return (
    <LayoutBase siteInfo={siteInfo}>
      <div className="mpost">
        {post.category && <div className="mpost-cat">{post.category}</div>}
        <h1 className="mpost-title">{post.title}</h1>
        <div className="mpost-meta">
          <span>{postDate(post)}</span>
          {post.tags?.map(t => <span key={t} className={`tg-b ${tc(t)}`}>{t}</span>)}
        </div>
        <hr className="mpost-div" />
        {/* NotionPage 自动渲染 Notion 正文内容块 */}
        <NotionPage post={post} />
        <div className="mpost-nav">
          {prev ? <Link href={postSlug(prev)}>← {prev.title}</Link> : <span />}
          {next ? <Link href={postSlug(next)}>{next.title} →</Link> : <span />}
        </div>
      </div>
    </LayoutBase>
  )
}

/** 时间轴归档页 */
export const LayoutArchive = ({ posts, siteInfo }) => {
  const pub = pubPosts(posts)
  return (
    <LayoutBase siteInfo={siteInfo}>
      <div className="mpw">
        <h1 className="mpw-t">All <span>Articles</span></h1>
        <div className="mpl">
          {pub.map((p, i) => (
            <Link key={p.id} href={postSlug(p)} className="mpr">
              <span className="mpr-n">{String(i + 1).padStart(2, '0')}</span>
              <div className="mpr-info">
                <div className="mpr-t">{p.title}</div>
                {p.tags?.length > 0 && <div className="mpr-s">{p.tags.join(' · ')}</div>}
              </div>
              {p.category && <span className={`tg-b ${tc(p.category)}`}>{p.category}</span>}
            </Link>
          ))}
        </div>
      </div>
    </LayoutBase>
  )
}

/** 分类 / 标签 列表页（带分页） */
export const LayoutPostList = ({ posts, category, tag, siteInfo, page, pageCount }) => {
  const label = category || tag || 'Articles'
  const pub = pubPosts(posts)
  return (
    <LayoutBase siteInfo={siteInfo}>
      <div className="mpw">
        <h1 className="mpw-t"><span>{label}</span></h1>
        <div className="mpl">
          {pub.map((p, i) => (
            <Link key={p.id} href={postSlug(p)} className="mpr">
              <span className="mpr-n">{String(i + 1).padStart(2, '0')}</span>
              <div className="mpr-info">
                <div className="mpr-t">{p.title}</div>
                {p.tags?.length > 0 && <div className="mpr-s">{p.tags.join(' · ')}</div>}
              </div>
              {p.category && <span className={`tg-b ${tc(p.category)}`}>{p.category}</span>}
            </Link>
          ))}
        </div>
        {pageCount > 1 && (
          <div className="mpag">
            {Array.from({ length: pageCount }, (_, i) => (
              <Link key={i}
                href={i === 0 ? '/' : `/page/${i + 1}`}
                className={page === i + 1 ? 'cur' : ''}>
                {i + 1}
              </Link>
            ))}
          </div>
        )}
      </div>
    </LayoutBase>
  )
}

/** 搜索结果页 */
export const LayoutSearch = ({ posts, keyword, siteInfo }) => {
  const results = keyword
    ? (posts || []).filter(p =>
        p.title?.toLowerCase().includes(keyword.toLowerCase()) ||
        p.summary?.toLowerCase().includes(keyword.toLowerCase()))
    : []
  return (
    <LayoutBase siteInfo={siteInfo}>
      <div className="mpw">
        <h1 className="mpw-t">Search <span>Results</span></h1>
        {keyword && (
          <p style={{ fontFamily: 'var(--sans)', color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '.83rem' }}>
            {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{keyword}&rdquo;
          </p>
        )}
        <div className="mpl">
          {results.map((p, i) => (
            <Link key={p.id} href={postSlug(p)} className="mpr">
              <span className="mpr-n">{String(i + 1).padStart(2, '0')}</span>
              <div className="mpr-info">
                <div className="mpr-t">{p.title}</div>
                {p.tags?.length > 0 && <div className="mpr-s">{p.tags.join(' · ')}</div>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </LayoutBase>
  )
}

/** 分类索引页 */
export const LayoutCategoryIndex = ({ categoryOptions, siteInfo }) => (
  <LayoutBase siteInfo={siteInfo}>
    <div className="mpw">
      <h1 className="mpw-t">Browse by <span>Category</span></h1>
      <div className="tag-cloud">
        {(categoryOptions || []).map(c => (
          <Link key={c.name} href={`/category/${c.name}`}>
            {c.name} ({c.count})
          </Link>
        ))}
      </div>
    </div>
  </LayoutBase>
)

/** 标签索引页 */
export const LayoutTagIndex = ({ tagOptions, siteInfo }) => (
  <LayoutBase siteInfo={siteInfo}>
    <div className="mpw">
      <h1 className="mpw-t">Browse by <span>Tag</span></h1>
      <div className="tag-cloud">
        {(tagOptions || []).map(t => (
          <Link key={t.name} href={`/tag/${t.name}`}>{t.name}</Link>
        ))}
      </div>
    </div>
  </LayoutBase>
)

// Default export（部分 NotionNext 版本需要）
export default {
  LayoutBase, LayoutIndex, LayoutSlug, LayoutArchive,
  LayoutPostList, LayoutSearch, LayoutCategoryIndex, LayoutTagIndex
}
