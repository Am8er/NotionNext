/**
 * themes/muon/style.js
 * 全部 CSS 集中在这里，通过 <style> 标签注入页面
 * 使用原生 CSS 变量，不依赖 Tailwind
 */

const MUON_STYLE = `
:root {
  --bg:#0d0d0d; --surface:#161616; --card:#1c1c1c;
  --border:#2a2a2a; --accent:#f5c842; --a2:#ff6b6b; --a3:#6bcfff;
  --text:#f0ece4; --muted:#7a7a7a;
  --sans:system-ui,-apple-system,sans-serif;
  --serif:Georgia,serif;
}
*, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
html { scroll-behavior:smooth; }
body { background:var(--bg); color:var(--text); font-family:var(--serif); }
a { text-decoration:none; color:inherit; }
img { max-width:100%; }

/* ── 全局 Notion 内容样式覆盖 ── */
.notion-page { background:transparent !important; color:var(--text) !important; }
.notion-text { color:var(--text) !important; }
.notion-h1,.notion-h2,.notion-h3 { color:var(--text) !important; }
.notion-inline-code { background:var(--surface) !important; color:var(--accent) !important; }
.notion-code { background:var(--surface) !important; border:1px solid var(--border) !important; }
.notion-link { color:var(--accent) !important; }
.notion-link:hover { text-decoration:underline; }
.notion-quote { border-left:3px solid var(--accent) !important; color:var(--muted) !important; }
.notion-callout { background:var(--surface) !important; border:1px solid var(--border) !important; }
.notion-bookmark { background:var(--surface) !important; border:1px solid var(--border) !important; }
.notion-asset-wrapper img { border-radius:8px; }

/* ── NAV ── */
.mn { position:fixed; top:0; width:100%; z-index:100;
  display:flex; align-items:center; justify-content:space-between;
  padding:1.1rem 3rem; background:rgba(13,13,13,.9);
  backdrop-filter:blur(14px); border-bottom:1px solid var(--border); }
.mn-logo { font-family:var(--sans); font-weight:700; font-size:.9rem;
  letter-spacing:.12em; color:var(--accent); }
.mn-links { display:flex; gap:2rem; list-style:none; }
.mn-links a { font-family:var(--sans); font-size:.78rem; letter-spacing:.06em;
  text-transform:uppercase; color:var(--muted); transition:color .2s; }
.mn-links a:hover { color:var(--text); }
.mn-cta { background:var(--accent); color:#000; padding:.38rem 1rem;
  border-radius:50px; font-family:var(--sans); font-size:.76rem;
  font-weight:700; transition:.2s; }
.mn-cta:hover { background:#fff; }

/* ── HERO ── */
.mh { min-height:100vh; display:flex; align-items:center; justify-content:center;
  padding:8rem 2rem 5rem; position:relative; overflow:hidden; text-align:center; }
.mh-bg { position:absolute; inset:0; pointer-events:none;
  background:
    radial-gradient(ellipse 60% 50% at 20% 50%,rgba(245,200,66,.07) 0%,transparent 100%),
    radial-gradient(ellipse 50% 40% at 80% 20%,rgba(107,207,255,.06) 0%,transparent 100%),
    radial-gradient(ellipse 50% 40% at 60% 80%,rgba(255,107,107,.05) 0%,transparent 100%); }
.mh-grid { position:absolute; inset:0; opacity:.035;
  background-image:linear-gradient(var(--border) 1px,transparent 1px),
    linear-gradient(90deg,var(--border) 1px,transparent 1px);
  background-size:60px 60px; }
.mh-inner { position:relative; max-width:780px; margin:0 auto; }
.mh-badge { display:inline-flex; align-items:center; gap:.5rem; margin-bottom:1.8rem;
  background:var(--surface); border:1px solid var(--border); padding:.32rem 1rem;
  border-radius:50px; font-family:var(--sans); font-size:.7rem; color:var(--muted);
  letter-spacing:.1em; text-transform:uppercase; }
.mh-dot { width:6px; height:6px; border-radius:50%; background:var(--accent);
  animation:mpulse 2s infinite; }
@keyframes mpulse { 0%,100%{opacity:1} 50%{opacity:.3} }
.mh h1 { font-size:clamp(2.8rem,7vw,4.8rem); font-weight:400; line-height:1.08;
  letter-spacing:-.02em; margin-bottom:1.3rem; }
.mh h1 em { font-style:italic; color:var(--accent); }
.mh-sub { font-family:var(--sans); color:var(--muted); font-size:.98rem;
  line-height:1.75; max-width:500px; margin:0 auto 2rem; }
.mh-pills { display:flex; gap:.6rem; justify-content:center; flex-wrap:wrap; margin-bottom:2.5rem; }
.mh-pill { padding:.28rem .82rem; border-radius:50px; font-family:var(--sans);
  font-size:.7rem; font-weight:600; letter-spacing:.06em; border:1px solid; }
.py { color:var(--accent); border-color:var(--accent); background:rgba(245,200,66,.08); }
.pb { color:var(--a3); border-color:var(--a3); background:rgba(107,207,255,.08); }
.pr { color:var(--a2); border-color:var(--a2); background:rgba(255,107,107,.08); }
.mh-btns { display:flex; gap:.9rem; justify-content:center; }
.btn-p { background:var(--accent); color:#000; padding:.68rem 1.8rem; border-radius:50px;
  font-family:var(--sans); font-weight:700; font-size:.86rem; transition:.2s; }
.btn-p:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(245,200,66,.3); }
.btn-g { border:1px solid var(--border); color:var(--text); padding:.68rem 1.8rem;
  border-radius:50px; font-family:var(--sans); font-size:.86rem; transition:.2s; }
.btn-g:hover { border-color:var(--muted); }

/* ── STATS BAR ── */
.ms { background:var(--surface); border-top:1px solid var(--border);
  border-bottom:1px solid var(--border); display:flex; justify-content:center; }
.ms-item { padding:1.4rem 2.5rem; text-align:center; border-right:1px solid var(--border); }
.ms-item:last-child { border-right:none; }
.ms-n { display:block; font-size:1.8rem; font-weight:300; color:var(--accent); }
.ms-l { font-family:var(--sans); font-size:.67rem; color:var(--muted);
  letter-spacing:.1em; text-transform:uppercase; }

/* ── SECTION ── */
.msec { padding:4.5rem 3rem; max-width:1200px; margin:0 auto; }
.msec-hd { display:flex; align-items:baseline; justify-content:space-between; margin-bottom:2rem; }
.msec-t { font-size:1.4rem; font-weight:400; }
.msec-t span { color:var(--accent); }
.msec-more { font-family:var(--sans); font-size:.76rem; color:var(--muted); transition:color .2s; }
.msec-more:hover { color:var(--text); }

/* ── FEATURED GRID ── */
.mfg { display:grid; grid-template-columns:1.6fr 1fr; grid-template-rows:1fr 1fr; gap:1rem; }
.mc { background:var(--card); border:1px solid var(--border); border-radius:14px;
  overflow:hidden; color:var(--text); transition:.22s; display:block; position:relative; }
.mc:hover { border-color:#3a3a3a; transform:translateY(-3px);
  box-shadow:0 14px 36px rgba(0,0,0,.45); }
.mc-big { grid-row:span 2; padding:2.2rem; display:flex; flex-direction:column;
  justify-content:flex-end; min-height:380px; }
.mc-glow { position:absolute; inset:0; pointer-events:none;
  background:linear-gradient(135deg,rgba(245,200,66,.05) 0%,transparent 60%); }
.mc-num { position:absolute; top:1.2rem; right:1.4rem; font-family:var(--sans);
  font-size:3.5rem; font-weight:700; color:var(--border); line-height:1; }
.mc-rel { position:relative; }
.mc-cat { font-family:var(--sans); font-size:.67rem; letter-spacing:.12em;
  text-transform:uppercase; color:var(--accent); margin-bottom:.65rem; }
.mc-cat.b { color:var(--a3); } .mc-cat.r { color:var(--a2); }
.mc-h2 { font-size:1.55rem; font-weight:400; line-height:1.25; margin-bottom:.85rem; }
.mc-h3 { font-size:.98rem; font-weight:400; line-height:1.4; margin-bottom:.5rem; }
.mc-desc { font-family:var(--sans); font-size:.8rem; color:var(--muted);
  line-height:1.6; margin-bottom:.9rem; }
.mc-sm { padding:1.4rem; }
.mc-meta { font-family:var(--sans); font-size:.7rem; color:var(--muted);
  display:flex; gap:.8rem; align-items:center; flex-wrap:wrap; }
.tg-sm { background:var(--surface); padding:.14rem .5rem; border-radius:50px; font-size:.65rem; }

/* ── POST LIST ── */
.mpl { display:flex; flex-direction:column; gap:.7rem; }
.mpr { display:flex; align-items:center; gap:1.4rem;
  padding:1.1rem 1.4rem; background:var(--card); border:1px solid var(--border);
  border-radius:11px; color:var(--text); transition:.2s; }
.mpr:hover { border-color:#3a3a3a; background:#1f1f1f; }
.mpr-n { font-family:var(--sans); font-size:.8rem; color:var(--border);
  min-width:26px; font-weight:700; }
.mpr-info { flex:1; }
.mpr-t { font-size:.9rem; margin-bottom:.2rem; }
.mpr-s { font-family:var(--sans); font-size:.72rem; color:var(--muted); }
.tg-b { font-family:var(--sans); font-size:.67rem; padding:.16rem .62rem; border-radius:50px;
  background:rgba(245,200,66,.1); color:var(--accent); border:1px solid rgba(245,200,66,.2);
  white-space:nowrap; }
.tg-b.b { background:rgba(107,207,255,.1); color:var(--a3); border-color:rgba(107,207,255,.2); }
.tg-b.r { background:rgba(255,107,107,.1); color:var(--a2); border-color:rgba(255,107,107,.2); }

/* ── ABOUT STRIP ── */
.mab { background:var(--surface); border:1px solid var(--border); border-radius:18px;
  display:flex; align-items:center; gap:2.5rem; padding:2.5rem 3rem;
  max-width:1200px; margin:0 auto 4rem; }
.mab-av { width:86px; height:86px; border-radius:50%; flex-shrink:0;
  background:linear-gradient(135deg,var(--accent),var(--a2));
  display:flex; align-items:center; justify-content:center; font-size:2rem; }
.mab-name { font-size:1.15rem; margin-bottom:.4rem; font-weight:400; }
.mab-bio { font-family:var(--sans); font-size:.82rem; color:var(--muted);
  line-height:1.7; max-width:540px; }
.mab-links { display:flex; gap:.65rem; margin-top:.85rem; flex-wrap:wrap; }
.mab-lk { font-family:var(--sans); font-size:.72rem; color:var(--muted);
  padding:.26rem .72rem; border:1px solid var(--border); border-radius:50px; transition:.2s; }
.mab-lk:hover { color:var(--text); border-color:var(--muted); }

/* ── NEWSLETTER ── */
.mnl { background:linear-gradient(135deg,rgba(245,200,66,.07),rgba(107,207,255,.05));
  border:1px solid var(--border); border-radius:18px; padding:3rem; text-align:center;
  max-width:1200px; margin:0 auto 4rem; }
.mnl h3 { font-size:1.6rem; font-weight:400; margin-bottom:.6rem; }
.mnl p { font-family:var(--sans); color:var(--muted); font-size:.86rem; margin-bottom:1.8rem; }
.mnl-form { display:flex; gap:.7rem; justify-content:center; max-width:380px; margin:0 auto; }
.mnl-i { flex:1; padding:.65rem 1.1rem; background:var(--card); border:1px solid var(--border);
  border-radius:50px; color:var(--text); font-family:var(--sans); font-size:.82rem;
  outline:none; transition:border-color .2s; }
.mnl-i:focus { border-color:var(--accent); }
.mnl-btn { background:var(--accent); color:#000; border:none; padding:.65rem 1.4rem;
  border-radius:50px; font-family:var(--sans); font-weight:700; font-size:.8rem;
  cursor:pointer; transition:.2s; white-space:nowrap; }
.mnl-btn:hover { background:#fff; }

/* ── SINGLE POST ── */
.mpost { max-width:720px; margin:0 auto; padding:8rem 2rem 5rem; }
.mpost-cat { font-family:var(--sans); font-size:.7rem; letter-spacing:.12em;
  text-transform:uppercase; color:var(--accent); margin-bottom:.8rem; }
.mpost-title { font-size:clamp(1.8rem,4vw,2.7rem); font-weight:400;
  line-height:1.15; margin-bottom:1rem; }
.mpost-meta { font-family:var(--sans); font-size:.78rem; color:var(--muted);
  display:flex; gap:1rem; flex-wrap:wrap; margin-bottom:2rem; }
.mpost-div { border:none; border-top:1px solid var(--border); margin-bottom:2.5rem; }
.mpost-nav { display:flex; justify-content:space-between; gap:1rem;
  padding:3rem 0 1rem; border-top:1px solid var(--border); margin-top:3rem; }
.mpost-nav a { font-family:var(--sans); font-size:.8rem; color:var(--muted);
  transition:color .2s; max-width:45%; }
.mpost-nav a:hover { color:var(--text); }

/* ── 其他页面 ── */
.mpw { max-width:1200px; margin:0 auto; padding:7rem 3rem 4rem; }
.mpw-t { font-size:1.9rem; font-weight:400; margin-bottom:2rem; }
.mpw-t span { color:var(--accent); }
.tag-cloud { display:flex; gap:.6rem; flex-wrap:wrap; margin-bottom:2.5rem; }
.tag-cloud a { font-family:var(--sans); font-size:.78rem; padding:.32rem .85rem;
  border-radius:50px; border:1px solid var(--border); color:var(--muted); transition:.2s; }
.tag-cloud a:hover { border-color:var(--accent); color:var(--accent);
  background:rgba(245,200,66,.08); }

/* ── 分页 ── */
.mpag { display:flex; justify-content:center; gap:.5rem; padding:2.5rem 0 1rem; }
.mpag a { width:36px; height:36px; border-radius:50%; display:flex; align-items:center;
  justify-content:center; font-family:var(--sans); font-size:.8rem;
  border:1px solid var(--border); background:var(--card); color:var(--muted); transition:.2s; }
.mpag a:hover,.mpag a.cur { border-color:var(--accent); color:var(--accent);
  background:rgba(245,200,66,.08); }
.mpag a.cur { font-weight:700; }

/* ── FOOTER ── */
.mft { border-top:1px solid var(--border); padding:1.8rem 3rem;
  display:flex; align-items:center; justify-content:space-between;
  font-family:var(--sans); font-size:.73rem; color:var(--muted); }
.mft-links { display:flex; gap:1.5rem; }
.mft-links a { color:var(--muted); transition:color .2s; }
.mft-links a:hover { color:var(--text); }

/* ── 响应式 ── */
@media(max-width:768px){
  .mn { padding:1rem 1.2rem; }
  .mn-links { display:none; }
  .mh { padding:7rem 1.2rem 4rem; }
  .ms { flex-wrap:wrap; }
  .ms-item { flex:1; min-width:100px; padding:1rem; }
  .msec { padding:3rem 1.2rem; }
  .mfg { grid-template-columns:1fr; }
  .mc-big { grid-row:span 1; min-height:260px; }
  .mab { flex-direction:column; text-align:center; padding:2rem 1.5rem; margin:0 1.2rem 3rem; }
  .mnl { padding:2rem 1.2rem; margin:0 1.2rem 3rem; }
  .mnl-form { flex-direction:column; }
  .mft { flex-direction:column; gap:.8rem; text-align:center; }
  .mpw { padding:6rem 1.2rem 3rem; }
  .mpost { padding:7rem 1.2rem 3rem; }
}
`

export default MUON_STYLE
