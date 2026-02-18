/**
 * themes/muon/index.js
 * ─────────────────────────────────────────────
 * Muon — Dark editorial theme for amberchu.com
 *
 * 安装步骤:
 * 1. 在仓库 themes/ 文件夹下新建 muon/ 文件夹
 * 2. 将此文件保存为 themes/muon/index.js
 * 3. Vercel 环境变量加 THEME=muon
 * 4. Redeploy → 完成
 * ─────────────────────────────────────────────
 */

import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
// NotionPage 渲染 Notion 内容块 —— 如路径报错请改为 '@/components/notion-page'
import NotionPage from '@/components/NotionPage'

// ══════════════════════════════════════════════════
//  全局 CSS（注入 <head>，自动应用到所有页面）
// ══════════════════════════════════════════════════
const CSS = `
:root{
  --bg:#0d0d0d;--surface:#161616;--card:#1c1c1c;
  --border:#2a2a2a;--accent:#f5c842;--a2:#ff6b6b;--a3:#6bcfff;
  --text:#f0ece4;--muted:#7a7a7a;
  --sans:system-ui,-apple-system,sans-serif;
  --serif:Georgia,serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:var(--serif);}
a{text-decoration:none;color:inherit;}
img{max-width:100%;}

/* ── NAV ── */
.mn{position:fixed;top:0;width:100%;z-index:100;display:flex;align-items:center;
  justify-content:space-between;padding:1.1rem 3rem;
  background:rgba(13,13,13,.9);backdrop-filter:blur(14px);
  border-bottom:1px solid var(--border);}
.mn-logo{font-family:var(--sans);font-weight:700;font-size:.9rem;
  letter-spacing:.12em;color:var(--accent);}
.mn-links{display:flex;gap:2rem;list-style:none;}
.mn-links a{font-family:var(--sans);font-size:.78rem;letter-spacing:.06em;
  text-transform:uppercase;color:var(--muted);transition:color .2s;}
.mn-links a:hover{color:var(--text);}
.mn-cta{background:var(--accent);color:#000;padding:.38rem 1rem;
  border-radius:50px;font-family:var(--sans);font-size:.76rem;
  font-weight:700;transition:.2s;}
.mn-cta:hover{background:#fff;}

/* ── HERO ── */
.mh{min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:8rem 2rem 5rem;position:relative;overflow:hidden;text-align:center;}
.mh-bg{position:absolute;inset:0;pointer-events:none;
  background:
    radial-gradient(ellipse 60% 50% at 20% 50%,rgba(245,200,66,.07) 0%,transparent 100%),
    radial-gradient(ellipse 50% 40% at 80% 20%,rgba(107,207,255,.06) 0%,transparent 100%),
    radial-gradient(ellipse 50% 40% at 60% 80%,rgba(255,107,107,.05) 0%,transparent 100%);}
.mh-grid{position:absolute;inset:0;opacity:.035;
  background-image:linear-gradient(var(--border) 1px,transparent 1px),
    linear-gradient(90deg,var(--border) 1px,transparent 1px);
  background-size:60px 60px;}
.mh-inner{position:relative;max-width:780px;margin:0 auto;}
.mh-badge{display:inline-flex;align-items:center;gap:.5rem;margin-bottom:1.8rem;
  background:var(--surface);border:1px solid var(--border);
  padding:.32rem 1rem;border-radius:50px;
  font-family:var(--sans);font-size:.7rem;color:var(--muted);
  letter-spacing:.1em;text-transform:uppercase;}
.mh-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);
  animation:mpulse 2s infinite;}
@keyframes mpulse{0%,100%{opacity:1}50%{opacity:.3}}
.mh h1{font-size:clamp(2.8rem,7vw,4.8rem);font-weight:400;line-height:1.08;
  letter-spacing:-.02em;margin-bottom:1.3rem;}
.mh h1 em{font-style:italic;color:var(--accent);}
.mh-sub{font-family:var(--sans);color:var(--muted);font-size:.98rem;
  line-height:1.75;max-width:500px;margin:0 auto 2rem;}
.mh-pills{display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap;margin-bottom:2.5rem;}
.mh-pill{padding:.28rem .82rem;border-radius:50px;font-family:var(--sans);
  font-size:.7rem;font-weight:600;letter-spacing:.06em;border:1px solid;}
.py{color:var(--accent);border-color:var(--accent);background:rgba(245,200,66,.08);}
.pb{color:var(--a3);border-color:var(--a3);background:rgba(107,207,255,.08);}
.pr{color:var(--a2);border-color:var(--a2);background:rgba(255,107,107,.08);}
.mh-btns{display:flex;gap:.9rem;justify-content:center;}
.btn-p{background:var(--accent);color:#000;padding:.68rem 1.8rem;border-radius:50px;
  font-family:var(--sans);font-weight:700;font-size:.86rem;transition:.2s;}
.btn-p:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,200,66,.3);}
.btn-g{border:1px solid var(--border);color:var(--text);padding:.68rem 1.8rem;
  border-radius:50px;font-family:var(--sans);font-size:.86rem;transition:.2s;}
.btn-g:hover{border-color:var(--muted);}

/* ── STATS ── */
.ms{background:var(--surface);border-top:1px solid var(--border);
  border-bottom:1px solid var(--border);display:flex;justify-content:center;}
.ms-item{padding:1.4rem 2.5rem;text-align:center;border-right:1px solid var(--border);}
.ms-item:last-child{border-right:none;}
.ms-n{display:block;font-size:1.8rem;font-weight:300;color:var(--accent);}
.ms-l{font-family:var(--sans);font-size:.67rem;color:var(--muted);
  letter-spacing:.1em;text-transform:uppercase;}

/* ── SECTION ── */
.msec{padding:4.5rem 3rem;max-width:1200px;margin:0 auto;}
.msec-hd{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:2rem;}
.msec-t{font-size:1.4rem;font-weight:400;}
.msec-t span{color:var(--accent);}
.msec-more{font-family:var(--sans);font-size:.76rem;color:var(--muted);transition:color .2s;}
.msec-more:hover{color:var(--text);}

/* ── FEATURED GRID ── */
.mfg{display:grid;grid-template-columns:1.6fr 1fr;grid-template-rows:1fr 1fr;gap:1rem;}
.mc{background:var(--card);border:1px solid var(--border);border-radius:14px;
  overflow:hidden;color:var(--text);transition:.22s;display:block;position:relative;}
.mc:hover{border-color:#3a3a3a;transform:translateY(-3px);
  box-shadow:0 14px 36px rgba(0,0,0,.45);}
.mc-big{grid-row:span 2;padding:2.2rem;display:flex;flex-direction:column;
  justify-content:flex-end;min-height:380px;}
.mc-glow{position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(135deg,rgba(245,200,66,.05) 0%,transparent 60%);}
.mc-num{position:absolute;top:1.2rem;right:1.4rem;font-family:var(--sans);
  font-size:3.5rem;font-weight:700;color:var(--border);line-height:1;}
.mc-rel{position:relative;}
.mc-cat{font-family:var(--sans);font-size:.67rem;letter-spacing:.12em;
  text-transform:uppercase;color:var(--accent);margin-bottom:.65rem;}
.mc-cat.b{color:var(--a3);} .mc-cat.r{color:var(--a2);}
.mc-h2{font-size:1.55rem;font-weight:400;line-height:1.25;margin-bottom:.85rem;}
.mc-h3{font-size:.98rem;font-weight:400;line-height:1.4;margin-bottom:.5rem;}
.mc-desc{font-family:var(--sans);font-size:.8rem;color:var(--muted);
  line-height:1.6;margin-bottom:.9rem;}
.mc-sm{padding:1.4rem;}
.mc-meta{font-family:var(--sans);font-size:.7rem;color:var(--muted);
  display:flex;gap:.8rem;align-items:center;flex-wrap:wrap;}
.tg-sm{background:var(--surface);padding:.14rem .5rem;border-radius:50px;font-size:.65rem;}

/* ── POST LIST ── */
.mpl{display:flex;flex-direction:column;gap:.7rem;}
.mpr{display:flex;align-items:center;gap:1.4rem;
  padding:1.1rem 1.4rem;background:var(--card);border:1px solid var(--border);
  border-radius:11px;color:var(--text);transition:.2s;}
.mpr:hover{border-color:#3a3a3a;background:#1f1f1f;}
.mpr-n{font-family:var(--sans);font-size:.8rem;color:var(--border);
  min-width:26px;font-weight:700;}
.mpr-info{flex:1;}
.mpr-t{font-size:.9rem;margin-bottom:.2rem;}
.mpr-s{font-family:var(--sans);font-size:.72rem;color:var(--muted);}
.tg-b{font-family:var(--sans);font-size:.67rem;padding:.16rem .62rem;border-radius:50px;
  background:rgba(245,200,66,.1);color:var(--accent);
  border:1px solid rgba(245,200,66,.2);white-space:nowrap;}
.tg-b.b{background:rgba(107,207,255,.1);color:var(--a3);border-color:rgba(107,207,255,.2);}
.tg-b.r{background:rgba(255,107,107,.1);color:var(--a2);border-color:rgba(255,107,107,.2);}

/* ── ABOUT ── */
.mab{background:var(--surface);border:1px solid var(--border);border-radius:18px;
  display:flex;align-items:center;gap:2.5rem;padding:2.5rem 3rem;
  max-width:1200px;margin:0 auto 4rem;}
.mab-av{width:86px;height:86px;border-radius:50%;flex-shrink:0;
  background:linear-gradient(135deg,var(--accent),var(--a2));
  display:flex;align-items:center;justify-content:center;font-size:2rem;}
.mab-name{font-size:1.15rem;margin-bottom:.4rem;font-weight:400;}
.mab-bio{font-family:var(--sans);font-size:.82rem;color:var(--muted);
  line-height:1.7;max-width:540px;}
.mab-links{display:flex;gap:.65rem;margin-top:.85rem;flex-wrap:wrap;}
.mab-lk{font-family:var(--sans);font-size:.72rem;color:var(--muted);
  padding:.26rem .72rem;border:1px solid var(--border);border-radius:50px;transition:.2s;}
.mab-lk:hover{color:var(--text);border-color:var(--muted);}

/* ── NEWSLETTER ── */
.mnl{background:linear-gradient(135deg,rgba(245,200,66,.07),rgba(107,207,255,.05));
  border:1px solid var(--border);border-radius:18px;padding:3rem;text-align:center;
  max-width:1200px;margin:0 auto 4rem;}
.mnl h3{font-size:1.6rem;font-weight:400;margin-bottom:.6rem;}
.mnl p{font-family:var(--sans);color:var(--muted);font-size:.86rem;margin-bottom:1.8rem;}
.mnl-form{display:flex;gap:.7rem;justify-content:center;max-width:380px;margin:0 auto;}
.mnl-i{flex:1;padding:.65rem 1.1rem;background:var(--card);border:1px solid var(--border);
  border-radius:50px;color:var(--text);font-family:var(--sans);font-size:.82rem;
  outline:none;transition:border-color .2s;}
.mnl-i:focus{border-color:var(--accent);}
.mnl-btn{background:var(--accent);color:#000;border:none;padding:.65rem 1.4rem;
  border-radius:50px;font-family:var(--sans);font-weight:700;font-size:.8rem;
  cursor:pointer;transition:.2s;white-space:nowrap;}
.mnl-btn:hover{background:#fff;}

/* ── SINGLE POST ── */
.mpost{max-width:720px;margin:0 auto;padding:8rem 2rem 4rem;}
.mpost-cat{font-family:var(--sans);font-size:.7rem;letter-spacing:.12em;
  text-transform:uppercase;color:var(--accent);margin-bottom:.8rem;}
.mpost-title{font-size:clamp(1.8rem,4vw,2.7rem);font-weight:400;
  line-height:1.15;margin-bottom:1rem;}
.mpost-meta{font-family:var(--sans);font-size:.78rem;color:var(--muted);
  display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem;}
.mpost-div{border:none;border-top:1px solid var(--border);margin-bottom:2.5rem;}
.mpost-nav{display:flex;justify-content:space-between;gap:1rem;
  padding:3rem 0 1rem;border-top:1px solid var(--border);margin-top:3rem;}
.mpost-nav a{font-family:var(--sans);font-size:.8rem;color:var(--muted);
  transition:color .2s;max-width:45%;}
.mpost-nav a:hover{color:var(--text);}

/* ── PAGES (archive, tag, category) ── */
.mpw{max-width:1200px;margin:0 auto;padding:7rem 3rem 4rem;}
.mpw-t{font-size:1.9rem;font-weight:400;margin-bottom:2rem;}
.mpw-t span{color:var(--accent);}
.tag-cloud{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:2.5rem;}
.tag-cloud a{font-family:var(--sans);font-size:.78rem;padding:.32rem .85rem;
  border-radius:50px;border:1px solid var(--border);color:var(--muted);transition:.2s;}
.tag-cloud a:hover{border-color:var(--accent);color:var(--accent);
  background:rgba(245,200,66,.08);}

/* ── PAGINATION ── */
.mpag{display:flex;justify-content:center;gap:.5rem;padding:2.5rem 0 1rem;}
.mpag a{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;
  justify-content:center;font-family:var(--sans);font-size:.8rem;
  border:1px solid var(--border);background:var(--card);color:var(--muted);transition:.2s;}
.mpag a:hover,.mpag a.cur{border-color:var(--accent);color:var(--accent);
  background:rgba(245,200,66,.08);}
.mpag a.cur{font-weight:700;}

/* ── FOOTER ── */
.mft{border-top:1px solid var(--border);padding:1.8rem 3rem;
  display:flex;align-items:center;justify-content:space-between;
  font-family:var(--sans);font-size:.73rem;color:var(--muted);}
.mft-links{display:flex;gap:1.5rem;}
.mft-links a{color:var(--muted);transition:color .2s;}
.mft-links a:hover{color:var(--text);}

/* ── RESPONSIVE ── */
@media(max-width:768px){
  .mn{padding:1rem 1.2rem;}
  .mn-links{display:none;}
  .mh{padding:7rem 1.2rem 4rem;}
  .ms{flex-wrap:wrap;}
  .ms-item{flex:1;min-width:100px;padding:1rem;}
  .msec{padding:3rem 1.2rem;}
  .mfg{grid-template-columns:1fr;}
  .mc-big{grid-row:span 1;min-height:260px;}
  .mab{flex-direction:column;text-align:center;padding:2rem 1.5rem;margin:0 1.2rem 3rem;}
  .mnl{padding:2rem 1.2rem;margin:0 1.2rem 3rem;}
  .mnl-form{flex-direction:column;}
  .mft{flex-direction:column;gap:.8rem;text-align:center;}
  .mpw{padding:6rem 1.2rem 3rem;}
  .mpost{padding:7rem 1.2rem 3rem;}
}
`

// ══════════════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════════════
const BIZ = ['business','ai','product','philosophy']
const LIFE = ['psychology','others']
const tc = t => { // tag color class
  if (!t) return ''
  const l = t.toLowerCase()
  if (BIZ.some(b => l.includes(b))) return 'b'
  if (LIFE.some(x => l.includes(x))) return 'r'
  return ''
}
const slug = p => `/${p.slug}`
const dateStr = p => p?.date?.start_date || ''
const excerpt = (s, n) => s ? (s.length > n ? s.slice(0, n) + '…' : s) : ''

// ══════════════════════════════════════════════════
//  COMPONENTS
// ══════════════════════════════════════════════════

function Nav({ siteInfo }) {
  return (
    <nav className="mn">
      <Link href="/" className="mn-logo">{siteInfo?.title || 'AMBER CHU'} ✦</Link>
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

function Hero({ siteInfo }) {
  return (
    <div className="mh">
      <div className="mh-bg" /><div className="mh-grid" />
      <div className="mh-inner">
        <div className="mh-badge"><span className="mh-dot" />Since 2017 · Digital Corner</div>
        <h1>Marketing, AI<br />& <em>Life in Between</em></h1>
        <p className="mh-sub">{siteInfo?.description || 'Deep dives into marketing, AI trends, and building things from scratch.'}</p>
        <div className="mh-pills">
          <span className="mh-pill py">📣 Marketing</span>
          <span className="mh-pill pb">🤖 AI & Tech</span>
          <span className="mh-pill pr">📚 Book Reviews</span>
        </div>
        <div className="mh-btns">
          <Link href="/archive" className="btn-p">Read the Blog</Link>
          <Link href="/about" className="btn-g">About Amber</Link>
        </div>
      </div>
    </div>
  )
}

function StatsBar({ posts, tags }) {
  return (
    <div className="ms">
      <div className="ms-item"><span className="ms-n">{posts?.length || 0}+</span><span className="ms-l">Articles</span></div>
      <div className="ms-item"><span className="ms-n">9</span><span className="ms-l">Years</span></div>
      <div className="ms-item"><span className="ms-n">{tags?.length || 0}</span><span className="ms-l">Topics</span></div>
      <div className="ms-item"><span className="ms-n">20+</span><span className="ms-l">Books</span></div>
    </div>
  )
}

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
        {/* Big card */}
        <Link href={slug(big)} className="mc mc-big">
          <div className="mc-glow" />
          <span className="mc-num">01</span>
          <div className="mc-rel">
            <div className={`mc-cat ${tc(big.category)}`}>{big.category || 'Article'}</div>
            <div className="mc-h2">{big.title}</div>
            {big.summary && <div className="mc-desc">{excerpt(big.summary, 120)}</div>}
            <div className="mc-meta">
              <span>{dateStr(big)}</span>
              {big.tags?.slice(0,2).map(t => <span key={t} className="tg-sm">{t}</span>)}
            </div>
          </div>
        </Link>
        {/* Two small cards */}
        {rest.slice(0,2).map((p, i) => (
          <Link key={p.id} href={slug(p)} className="mc mc-sm">
            <span className="mc-num">0{i+2}</span>
            <div className={`mc-cat ${tc(p.category)}`}>{p.category || 'Article'}</div>
            <div className="mc-h3">{p.title}</div>
            {p.summary && <div className="mc-desc">{excerpt(p.summary, 80)}</div>}
            <div className="mc-meta"><span>{dateStr(p)}</span></div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function PostRows({ posts, startIdx = 0, title = 'Latest Articles', linkAll = '/archive' }) {
  if (!posts?.length) return null
  const [t1, ...rest] = title.split(' ')
  return (
    <section className="msec" style={{ paddingTop: 0 }}>
      <div className="msec-hd">
        <h2 className="msec-t">{t1} <span>{rest.join(' ')}</span></h2>
        <Link href={linkAll} className="msec-more">All articles →</Link>
      </div>
      <div className="mpl">
        {posts.map((p, i) => (
          <Link key={p.id} href={slug(p)} className="mpr">
            <span className="mpr-n">{String(startIdx + i + 1).padStart(2,'0')}</span>
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

function AboutStrip({ siteInfo }) {
  const icon = siteInfo?.icon && !siteInfo.icon.startsWith('http') ? siteInfo.icon : '🦝'
  return (
    <div className="mab" id="about">
      <div className="mab-av">{icon}</div>
      <div>
        <div className="mab-name">Hi, I'm {siteInfo?.author || 'Amber Chu'} 👋</div>
        <div className="mab-bio">Digital marketer turned indie builder. I write about marketing strategy, AI trends, and building products from scratch. Currently building WarmRaccoon and sharing everything I learn along the way.</div>
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

function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <div className="mnl" id="newsletter">
      <h3>Stay in the Loop ✦</h3>
      <p>New articles on marketing, AI & building things — delivered to your inbox.</p>
      {done
        ? <p style={{ color:'var(--accent)', fontFamily:'var(--sans)' }}>✓ You're in! Talk soon.</p>
        : <div className="mnl-form">
            <input className="mnl-i" type="email" placeholder="your@email.com"
              value={email} onChange={e => setEmail(e.target.value)} />
            <button className="mnl-btn" onClick={() => email && setDone(true)}>Subscribe</button>
          </div>
      }
    </div>
  )
}

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

function StyleHead() {
  return (
    <Head>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
    </Head>
  )
}

// ══════════════════════════════════════════════════
//  LAYOUT EXPORTS  ← NotionNext 会自动识别这些
// ══════════════════════════════════════════════════

/** 所有页面的基础布局（导航 + Footer） */
export const LayoutBase = ({ children, siteInfo }) => (
  <>
    <StyleHead />
    <Nav siteInfo={siteInfo} />
    {children}
    <Footer siteInfo={siteInfo} />
  </>
)

/** 首页 —— 自动读取 Notion 中所有 Published 文章 */
export const LayoutIndex = ({ posts, tags, siteInfo }) => {
  const pub = posts?.filter(p => p.type === 'Post' && p.status === 'Published') || []
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

/** 单篇文章页 —— Notion 内容原样渲染 */
export const LayoutSlug = ({ post, prev, next, siteInfo }) => {
  if (!post) return (
    <LayoutBase siteInfo={siteInfo}>
      <div style={{ padding:'8rem 2rem', textAlign:'center', color:'var(--muted)' }}>Post not found.</div>
    </LayoutBase>
  )
  return (
    <LayoutBase siteInfo={siteInfo}>
      <div className="mpost">
        {post.category && <div className="mpost-cat">{post.category}</div>}
        <h1 className="mpost-title">{post.title}</h1>
        <div className="mpost-meta">
          <span>{dateStr(post)}</span>
          {post.tags?.map(t => <span key={t} className={`tg-b ${tc(t)}`}>{t}</span>)}
        </div>
        <hr className="mpost-div" />
        {/* NotionPage 自动渲染 Notion 块内容 */}
        <NotionPage post={post} />
        <div className="mpost-nav">
          {prev ? <Link href={slug(prev)}>← {prev.title}</Link> : <span />}
          {next ? <Link href={slug(next)}>{next.title} →</Link> : <span />}
        </div>
      </div>
    </LayoutBase>
  )
}

/** 归档页（全部文章列表） */
export const LayoutArchive = ({ posts, siteInfo }) => {
  const pub = posts?.filter(p => p.type === 'Post' && p.status === 'Published') || []
  return (
    <LayoutBase siteInfo={siteInfo}>
      <div className="mpw">
        <h1 className="mpw-t">All <span>Articles</span></h1>
        <div className="mpl">
          {pub.map((p, i) => (
            <Link key={p.id} href={slug(p)} className="mpr">
              <span className="mpr-n">{String(i+1).padStart(2,'0')}</span>
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

/** 分类 / 标签文章列表 + 分页 */
export const LayoutPostList = ({ posts, category, tag, siteInfo, page, pageCount }) => {
  const label = category || tag || 'Articles'
  const pub = posts?.filter(p => p.type === 'Post' && p.status === 'Published') || []
  return (
    <LayoutBase siteInfo={siteInfo}>
      <div className="mpw">
        <h1 className="mpw-t"><span>{label}</span></h1>
        <div className="mpl">
          {pub.map((p, i) => (
            <Link key={p.id} href={slug(p)} className="mpr">
              <span className="mpr-n">{String(i+1).padStart(2,'0')}</span>
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
              <Link key={i} href={i === 0 ? '/' : `/page/${i+1}`}
                className={page === i+1 ? 'cur' : ''}>{i+1}</Link>
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
        p.summary?.toLowerCase().includes(keyword.toLowerCase())
      )
    : []
  return (
    <LayoutBase siteInfo={siteInfo}>
      <div className="mpw">
        <h1 className="mpw-t">Search <span>Results</span></h1>
        {keyword && <p style={{ fontFamily:'var(--sans)', color:'var(--muted)', marginBottom:'1.5rem', fontSize:'.83rem' }}>
          {results.length} result{results.length !== 1 ? 's' : ''} for "{keyword}"
        </p>}
        <div className="mpl">
          {results.map((p, i) => (
            <Link key={p.id} href={slug(p)} className="mpr">
              <span className="mpr-n">{String(i+1).padStart(2,'0')}</span>
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
export const LayoutCategoryIndex = ({ categories, siteInfo }) => (
  <LayoutBase siteInfo={siteInfo}>
    <div className="mpw">
      <h1 className="mpw-t">Browse by <span>Category</span></h1>
      <div className="tag-cloud">
        {(categories || []).map(c => (
          <Link key={c.name} href={`/category/${c.name}`}>
            {c.name} ({c.count})
          </Link>
        ))}
      </div>
    </div>
  </LayoutBase>
)

/** 标签索引页 */
export const LayoutTagIndex = ({ tags, siteInfo }) => (
  <LayoutBase siteInfo={siteInfo}>
    <div className="mpw">
      <h1 className="mpw-t">Browse by <span>Tag</span></h1>
      <div className="tag-cloud">
        {(tags || []).map(t => (
          <Link key={t} href={`/tag/${t}`}>{t}</Link>
        ))}
      </div>
    </div>
  </LayoutBase>
)

// Default export（部分版本需要）
export default {
  LayoutBase, LayoutIndex, LayoutSlug, LayoutArchive,
  LayoutPostList, LayoutSearch, LayoutCategoryIndex, LayoutTagIndex
}
