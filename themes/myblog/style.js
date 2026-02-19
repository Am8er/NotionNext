/**
 * themes/myblog/style.js
 * 全部 CSS，通过 index.js 注入 <head>
 */
const STYLE = `
:root {
  --bg:#0d0d0d; --surface:#161616; --card:#1c1c1c; --border:#2a2a2a;
  --accent:#f5c842; --a2:#ff6b6b; --a3:#6bcfff;
  --text:#f0ece4; --muted:#888;
  --sans:system-ui,-apple-system,sans-serif;
  --serif:Georgia,serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:var(--serif);overflow-x:hidden;}
a{text-decoration:none;color:inherit;}
img{max-width:100%;}

/* ── Notion 内容样式覆盖 ── */
.notion-page{background:transparent!important;color:var(--text)!important;}
.notion-text,.notion-h1,.notion-h2,.notion-h3{color:var(--text)!important;}
.notion-inline-code{background:var(--surface)!important;color:var(--accent)!important;}
.notion-code{background:var(--surface)!important;border:1px solid var(--border)!important;border-radius:8px!important;}
.notion-link{color:var(--accent)!important;}
.notion-link:hover{text-decoration:underline;}
.notion-quote{border-left:3px solid var(--accent)!important;color:var(--muted)!important;}
.notion-callout{background:var(--surface)!important;border:1px solid var(--border)!important;border-radius:8px!important;}
.notion-bookmark{background:var(--surface)!important;border:1px solid var(--border)!important;border-radius:8px!important;}
.notion-asset-wrapper img{border-radius:8px;}
.notion-list li{color:var(--text)!important;}
.notion-table{border-color:var(--border)!important;}
.notion-table td,.notion-table th{border-color:var(--border)!important;color:var(--text)!important;}

/* ── NAV ── */
.mb-nav{
  position:fixed;top:0;width:100%;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:1.2rem 3rem;
  background:rgba(13,13,13,.85);backdrop-filter:blur(12px);
  border-bottom:1px solid var(--border);
}
.mb-logo{font-family:var(--sans);font-weight:700;font-size:1rem;
  letter-spacing:.1em;color:var(--accent);}
.mb-nav-links{display:flex;gap:2rem;list-style:none;}
.mb-nav-links a{font-family:var(--sans);font-size:.85rem;letter-spacing:.05em;
  text-transform:uppercase;color:var(--muted);transition:color .2s;}
.mb-nav-links a:hover{color:var(--text);}
.mb-nav-cta{background:var(--accent);color:#000;padding:.45rem 1.1rem;
  border-radius:50px;font-family:var(--sans);font-size:.8rem;
  font-weight:700;transition:.2s;}
.mb-nav-cta:hover{background:#fff;}

/* ── HERO ── */
.mb-hero{
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  padding:8rem 3rem 4rem;position:relative;overflow:hidden;
}
.mb-hero-bg{
  position:absolute;inset:0;pointer-events:none;
  background:
    radial-gradient(ellipse at 20% 50%,rgba(245,200,66,.08) 0%,transparent 60%),
    radial-gradient(ellipse at 80% 20%,rgba(107,207,255,.07) 0%,transparent 55%),
    radial-gradient(ellipse at 60% 80%,rgba(255,107,107,.06) 0%,transparent 50%);
}
.mb-hero-grid{
  position:absolute;inset:0;opacity:.04;pointer-events:none;
  background-image:
    linear-gradient(var(--border) 1px,transparent 1px),
    linear-gradient(90deg,var(--border) 1px,transparent 1px);
  background-size:60px 60px;
}
.mb-hero-inner{position:relative;max-width:800px;text-align:center;margin:0 auto;}
.mb-badge{
  display:inline-flex;align-items:center;gap:.5rem;
  background:var(--surface);border:1px solid var(--border);
  padding:.4rem 1rem;border-radius:50px;margin-bottom:2rem;
  font-family:var(--sans);font-size:.78rem;color:var(--muted);letter-spacing:.08em;
}
.mb-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);
  animation:mb-pulse 2s infinite;}
@keyframes mb-pulse{0%,100%{opacity:1}50%{opacity:.4}}
.mb-hero h1{
  font-size:clamp(2.8rem,7vw,5.5rem);line-height:1.05;
  font-weight:400;letter-spacing:-.02em;margin-bottom:1.5rem;
}
.mb-hero h1 em{font-style:italic;color:var(--accent);}
.mb-hero-sub{
  font-family:var(--sans);color:var(--muted);font-size:1.05rem;
  line-height:1.7;max-width:520px;margin:0 auto 2.5rem;
}
.mb-pills{display:flex;gap:.7rem;justify-content:center;flex-wrap:wrap;margin-bottom:3rem;}
.mb-pill{
  padding:.35rem .9rem;border-radius:50px;font-family:var(--sans);
  font-size:.78rem;letter-spacing:.06em;font-weight:600;border:1px solid;
  transition:.2s;cursor:pointer;
}
.mb-pill:hover{transform:translateY(-2px);}
.mb-pill-y{color:var(--accent);border-color:var(--accent);background:rgba(245,200,66,.08);}
.mb-pill-b{color:var(--a3);border-color:var(--a3);background:rgba(107,207,255,.08);}
.mb-pill-r{color:var(--a2);border-color:var(--a2);background:rgba(255,107,107,.08);}
.mb-btns{display:flex;gap:1rem;justify-content:center;}
.mb-btn-p{
  background:var(--accent);color:#000;padding:.75rem 2rem;border-radius:50px;
  font-family:var(--sans);font-weight:700;font-size:.9rem;transition:.2s;
}
.mb-btn-p:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(245,200,66,.3);}
.mb-btn-g{
  border:1px solid var(--border);color:var(--text);padding:.75rem 2rem;
  border-radius:50px;font-family:var(--sans);font-size:.9rem;transition:.2s;
}
.mb-btn-g:hover{border-color:var(--muted);}

/* ── STATS BAR ── */
.mb-stats{
  background:var(--surface);
  border-top:1px solid var(--border);border-bottom:1px solid var(--border);
  display:flex;justify-content:center;
}
.mb-stat{padding:1.5rem 3rem;text-align:center;border-right:1px solid var(--border);}
.mb-stat:last-child{border-right:none;}
.mb-stat-n{display:block;font-size:1.8rem;font-weight:300;color:var(--accent);}
.mb-stat-l{font-family:var(--sans);font-size:.72rem;color:var(--muted);
  letter-spacing:.1em;text-transform:uppercase;}

/* ── SECTION ── */
.mb-sec{padding:5rem 3rem;max-width:1200px;margin:0 auto;}
.mb-sec-hd{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:2.5rem;}
.mb-sec-t{font-size:1.5rem;font-weight:400;letter-spacing:-.01em;}
.mb-sec-t span{color:var(--accent);}
.mb-view-all{font-family:var(--sans);font-size:.8rem;color:var(--muted);
  letter-spacing:.06em;transition:color .2s;}
.mb-view-all:hover{color:var(--text);}

/* ── FEATURED GRID ── */
.mb-feat-grid{
  display:grid;grid-template-columns:1.6fr 1fr;
  grid-template-rows:auto auto;gap:1.2rem;
}
.mb-card{
  background:var(--card);border:1px solid var(--border);border-radius:16px;
  overflow:hidden;color:var(--text);transition:.25s;display:block;position:relative;
}
.mb-card:hover{border-color:#444;transform:translateY(-3px);
  box-shadow:0 16px 40px rgba(0,0,0,.4);}
.mb-card-big{
  grid-row:span 2;padding:2.5rem;
  display:flex;flex-direction:column;justify-content:flex-end;min-height:400px;
}
.mb-card-overlay{
  position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(135deg,rgba(245,200,66,.06) 0%,transparent 60%);
}
.mb-card-inner{position:relative;}
.mb-card-num{
  position:absolute;top:1.5rem;right:1.5rem;
  font-size:4rem;font-weight:700;color:var(--border);
  line-height:1;font-family:var(--sans);
}
.mb-card-cat{
  font-family:var(--sans);font-size:.72rem;letter-spacing:.12em;
  text-transform:uppercase;color:var(--accent);margin-bottom:.8rem;
}
.mb-card-cat.b{color:var(--a3);}
.mb-card-cat.r{color:var(--a2);}
.mb-card-title-big{font-size:1.7rem;line-height:1.25;margin-bottom:1rem;font-weight:400;}
.mb-card-title{font-size:1.05rem;line-height:1.4;margin-bottom:.6rem;font-weight:400;}
.mb-card-desc{
  font-family:var(--sans);font-size:.85rem;color:var(--muted);
  line-height:1.6;margin-bottom:1.2rem;
}
.mb-card-sm{padding:1.5rem;}
.mb-card-meta{
  font-family:var(--sans);font-size:.75rem;color:var(--muted);
  display:flex;gap:1rem;align-items:center;flex-wrap:wrap;
}
.mb-meta-tag{background:var(--surface);padding:.2rem .6rem;border-radius:50px;font-size:.7rem;}

/* ── POST LIST ── */
.mb-post-list{display:flex;flex-direction:column;gap:.8rem;}
.mb-post-row{
  display:flex;align-items:center;gap:1.5rem;
  padding:1.2rem 1.5rem;background:var(--card);border:1px solid var(--border);
  border-radius:12px;color:var(--text);transition:.2s;
}
.mb-post-row:hover{border-color:#444;background:#202020;}
.mb-post-num{font-family:var(--sans);font-size:.85rem;color:var(--border);
  min-width:28px;font-weight:700;}
.mb-post-info{flex:1;}
.mb-post-title{font-size:.95rem;margin-bottom:.25rem;}
.mb-post-sub{font-family:var(--sans);font-size:.78rem;color:var(--muted);}
.mb-tag{
  font-family:var(--sans);font-size:.72rem;padding:.2rem .7rem;border-radius:50px;
  background:rgba(245,200,66,.1);color:var(--accent);
  border:1px solid rgba(245,200,66,.2);white-space:nowrap;
}
.mb-tag.b{background:rgba(107,207,255,.1);color:var(--a3);border-color:rgba(107,207,255,.2);}
.mb-tag.r{background:rgba(255,107,107,.1);color:var(--a2);border-color:rgba(255,107,107,.2);}

/* ── ABOUT STRIP ── */
.mb-about{
  background:var(--surface);border:1px solid var(--border);border-radius:20px;
  display:flex;align-items:center;gap:3rem;padding:3rem;
  max-width:1200px;margin:0 auto 5rem;
}
.mb-about-av{
  width:100px;height:100px;border-radius:50%;flex-shrink:0;
  background:linear-gradient(135deg,var(--accent),var(--a2));
  display:flex;align-items:center;justify-content:center;font-size:2.5rem;
}
.mb-about-name{font-size:1.3rem;margin-bottom:.5rem;font-weight:400;}
.mb-about-bio{font-family:var(--sans);font-size:.88rem;color:var(--muted);
  line-height:1.7;max-width:560px;}
.mb-about-links{display:flex;gap:1rem;margin-top:1rem;flex-wrap:wrap;}
.mb-about-lk{
  font-family:var(--sans);font-size:.78rem;color:var(--muted);
  padding:.3rem .8rem;border:1px solid var(--border);border-radius:50px;transition:.2s;
}
.mb-about-lk:hover{color:var(--text);border-color:var(--muted);}

/* ── NEWSLETTER ── */
.mb-nl{
  background:linear-gradient(135deg,rgba(245,200,66,.08),rgba(107,207,255,.06));
  border:1px solid var(--border);border-radius:20px;
  padding:3.5rem;text-align:center;
  max-width:1200px;margin:0 auto 5rem;
}
.mb-nl h3{font-size:1.8rem;margin-bottom:.8rem;font-weight:400;}
.mb-nl p{font-family:var(--sans);color:var(--muted);margin-bottom:2rem;}
.mb-nl-form{display:flex;gap:.8rem;justify-content:center;max-width:400px;margin:0 auto;}
.mb-nl-input{
  flex:1;padding:.75rem 1.2rem;background:var(--card);border:1px solid var(--border);
  border-radius:50px;color:var(--text);font-family:var(--sans);font-size:.88rem;outline:none;
  transition:border-color .2s;
}
.mb-nl-input:focus{border-color:var(--accent);}
.mb-nl-btn{
  background:var(--accent);color:#000;border:none;padding:.75rem 1.5rem;
  border-radius:50px;font-family:var(--sans);font-weight:700;cursor:pointer;
  transition:.2s;white-space:nowrap;
}
.mb-nl-btn:hover{background:#fff;}

/* ── SINGLE POST ── */
.mb-post{max-width:720px;margin:0 auto;padding:8rem 2rem 5rem;}
.mb-post-cat{
  font-family:var(--sans);font-size:.72rem;letter-spacing:.12em;
  text-transform:uppercase;color:var(--accent);margin-bottom:.8rem;
}
.mb-post-h1{
  font-size:clamp(1.8rem,4vw,2.7rem);font-weight:400;
  line-height:1.15;margin-bottom:1rem;
}
.mb-post-meta{
  font-family:var(--sans);font-size:.78rem;color:var(--muted);
  display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem;
}
.mb-post-div{border:none;border-top:1px solid var(--border);margin-bottom:2.5rem;}
.mb-post-nav{
  display:flex;justify-content:space-between;gap:1rem;
  padding:3rem 0 1rem;border-top:1px solid var(--border);margin-top:3rem;
}
.mb-post-nav a{
  font-family:var(--sans);font-size:.8rem;color:var(--muted);
  transition:color .2s;max-width:45%;
}
.mb-post-nav a:hover{color:var(--text);}

/* ── 列表页 / 归档页 ── */
.mb-page{max-width:1200px;margin:0 auto;padding:7rem 3rem 4rem;}
.mb-page-t{font-size:1.9rem;font-weight:400;margin-bottom:2rem;}
.mb-page-t span{color:var(--accent);}
.mb-tag-cloud{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:2.5rem;}
.mb-tag-cloud a{
  font-family:var(--sans);font-size:.78rem;padding:.32rem .85rem;
  border-radius:50px;border:1px solid var(--border);color:var(--muted);transition:.2s;
}
.mb-tag-cloud a:hover{border-color:var(--accent);color:var(--accent);
  background:rgba(245,200,66,.08);}

/* ── PAGINATION ── */
.mb-pag{display:flex;justify-content:center;gap:.5rem;padding:2.5rem 0 1rem;}
.mb-pag a{
  width:36px;height:36px;border-radius:50%;display:flex;align-items:center;
  justify-content:center;font-family:var(--sans);font-size:.8rem;
  border:1px solid var(--border);background:var(--card);color:var(--muted);transition:.2s;
}
.mb-pag a:hover,.mb-pag a.cur{
  border-color:var(--accent);color:var(--accent);background:rgba(245,200,66,.08);
}
.mb-pag a.cur{font-weight:700;}

/* ── FOOTER ── */
.mb-footer{
  border-top:1px solid var(--border);padding:2rem 3rem;
  display:flex;align-items:center;justify-content:space-between;
  font-family:var(--sans);font-size:.78rem;color:var(--muted);
}
.mb-footer-links{display:flex;gap:1.5rem;}
.mb-footer-links a{color:var(--muted);transition:color .2s;}
.mb-footer-links a:hover{color:var(--text);}

/* ── RESPONSIVE ── */
@media(max-width:768px){
  .mb-nav{padding:1rem 1.5rem;}
  .mb-nav-links{display:none;}
  .mb-hero{padding:7rem 1.5rem 3rem;}
  .mb-stats{flex-wrap:wrap;}
  .mb-stat{padding:1rem 1.5rem;flex:1;min-width:120px;}
  .mb-sec{padding:3rem 1.5rem;}
  .mb-feat-grid{grid-template-columns:1fr;}
  .mb-card-big{grid-row:span 1;min-height:280px;}
  .mb-about{flex-direction:column;text-align:center;padding:2rem;margin:0 1.5rem 3rem;}
  .mb-about-links{justify-content:center;}
  .mb-nl{padding:2rem;margin:0 1.5rem 3rem;}
  .mb-nl-form{flex-direction:column;}
  .mb-footer{flex-direction:column;gap:1rem;text-align:center;}
  .mb-page{padding:6rem 1.5rem 3rem;}
  .mb-post{padding:7rem 1.5rem 3rem;}
}
`
export default STYLE
