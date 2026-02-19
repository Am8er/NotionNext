/**
 * themes/muon/index.js
 * NotionNext 主题入口 —— 只负责组装页面，组件逻辑在 components/ 里
 */

import Head from 'next/head'
import Link from 'next/link'

// ── 主题组件 ──────────────────────────────────────────────
import Nav           from './components/Nav'
import Hero          from './components/Hero'
import StatsBar      from './components/StatsBar'
import FeaturedPosts from './components/PostCard'
import PostRows, { Pagination } from './components/PostRows'
import AboutStrip    from './components/AboutStrip'
import Newsletter    from './components/Newsletter'
import { tagColor, postSlug } from './components/PostCard'

// ── 主题样式 & 配置 ────────────────────────────────────────
import MUON_STYLE from './style'

// ── NotionNext 内置的 Notion 内容渲染组件 ─────────────────
// 如果部署后文章页报错，把 'NotionPage' 改成 'notion-page'
import NotionPage from '@/components/NotionPage'

// ─── 辅助 ────────────────────────────────────────────────
const postDate = p => p?.date?.start_date?.slice(0, 7) || ''
const pubPosts = posts =>
  (posts || []).filter(p => p.type === 'Post' && p.status === 'Published')

// ─── 样式注入 ─────────────────────────────────────────────
function MuonStyle() {
  return <Head><style dangerouslySetInnerHTML={{ __html: MUON_STYLE }} /></Head>
}

// ─── Footer（只在这里用，不单独抽组件）────────────────────
function Footer({ siteInfo }) {
  return (
    <footer className="mft">
      <div>
        ©2017–{new Date().getFullYear()} {siteInfo?.author || 'Amber Chu'}.
        All rights reserved.
      </div>
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

// ═══════════════════════════════════════════════════════════
//  LAYOUT EXPORTS —— NotionNext 识别并自动调用
// ═══════════════════════════════════════════════════════════

/** 所有页面共用的 Shell（导航 + 样式 + Footer） */
export const LayoutBase = ({ children, siteInfo }) => (
  <>
    <MuonStyle />
    <Nav siteInfo={siteInfo} />
    {children}
    <Footer siteInfo={siteInfo} />
  </>
)

/** 首页 —— Notion 里发布新文章后自动出现 */
export const LayoutIndex = ({ posts, tags, siteInfo }) => {
  const pub = pubPosts(posts)
  return (
    <LayoutBase siteInfo={siteInfo}>
      <Hero siteInfo={siteInfo} />
      <StatsBar posts={pub} tags={tags} />
      <FeaturedPosts posts={pub} />
      <PostRows
        posts={pub.slice(3, 11)}
        startIdx={3}
        title="Latest Articles"
      />
      <AboutStrip siteInfo={siteInfo} />
      <Newsletter />
    </LayoutBase>
  )
}

/** 单篇文章页 —— Notion 正文完整渲染 */
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
        {post.category && (
          <div className="mpost-cat">{post.category}</div>
        )}
        <h1 className="mpost-title">{post.title}</h1>
        <div className="mpost-meta">
          <span>{postDate(post)}</span>
          {post.tags?.map(t => (
            <span key={t} className={`tg-b ${tagColor(t)}`}>{t}</span>
          ))}
        </div>
        <hr className="mpost-div" />

        {/* Notion 正文内容渲染 */}
        <NotionPage post={post} />

        {/* 上一篇 / 下一篇 */}
        <div className="mpost-nav">
          {prev
            ? <Link href={postSlug(prev)}>← {prev.title}</Link>
            : <span />
          }
          {next
            ? <Link href={postSlug(next)}>{next.title} →</Link>
            : <span />
          }
        </div>
      </div>
    </LayoutBase>
  )
}

/** 归档页（全部文章按时间排列） */
export const LayoutArchive = ({ posts, siteInfo }) => {
  const pub = pubPosts(posts)
  return (
    <LayoutBase siteInfo={siteInfo}>
      <div className="mpw">
        <h1 className="mpw-t">All <span>Articles</span></h1>
        <PostRows posts={pub} startIdx={0} showSection={false} />
      </div>
    </LayoutBase>
  )
}

/** 分类 / 标签 文章列表页（带分页） */
export const LayoutPostList = ({ posts, category, tag, siteInfo, page, pageCount }) => {
  const label = category || tag || 'Articles'
  const pub = pubPosts(posts)
  return (
    <LayoutBase siteInfo={siteInfo}>
      <div className="mpw">
        <h1 className="mpw-t"><span>{label}</span></h1>
        <PostRows posts={pub} startIdx={0} showSection={false} />
        <Pagination page={page} pageCount={pageCount} />
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
          <p style={{
            fontFamily: 'var(--sans)', color: 'var(--muted)',
            marginBottom: '1.5rem', fontSize: '.83rem'
          }}>
            {results.length} result{results.length !== 1 ? 's' : ''} for
            &ldquo;{keyword}&rdquo;
          </p>
        )}
        <PostRows posts={results} startIdx={0} showSection={false} />
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

export default {
  LayoutBase, LayoutIndex, LayoutSlug, LayoutArchive,
  LayoutPostList, LayoutSearch, LayoutCategoryIndex, LayoutTagIndex
}
