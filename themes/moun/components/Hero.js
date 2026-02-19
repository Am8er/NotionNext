
import Link from 'next/link'
import CONFIG from '../config'

export default function Hero({ siteInfo }) {
  return (
    <div className="mh">
      <div className="mh-bg" />
      <div className="mh-grid" />
      <div className="mh-inner">
        <div className="mh-badge">
          <span className="mh-dot" />
          Since {CONFIG.MUON_HERO_SINCE} · {CONFIG.MUON_HERO_BADGE}
        </div>
        <h1>
          {CONFIG.MUON_HERO_TITLE_LINE1}
          <br />& <em>{CONFIG.MUON_HERO_TITLE_LINE2.replace('& ', '')}</em>
        </h1>
        {/* 优先读取 Notion 根页面的 Description */}
        <p className="mh-sub">
          {siteInfo?.description ||
            'Deep dives into marketing, AI trends, and building things from scratch.'}
        </p>
        <div className="mh-pills">
          <span className="mh-pill py">{CONFIG.MUON_PILL_1}</span>
          <span className="mh-pill pb">{CONFIG.MUON_PILL_2}</span>
          <span className="mh-pill pr">{CONFIG.MUON_PILL_3}</span>
        </div>
        <div className="mh-btns">
          <Link href="/archive" className="btn-p">Read the Blog</Link>
          <Link href="/about" className="btn-g">
            About {siteInfo?.author || 'Me'}
          </Link>
        </div>
      </div>
    </div>
  )
}

