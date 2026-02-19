
import Link from 'next/link'
import CONFIG from '../config'

export default function AboutStrip({ siteInfo }) {
  // 优先用 Notion 根页面的 icon（emoji），否则用 config 默认值
  const emoji =
    siteInfo?.icon && !siteInfo.icon.startsWith('http')
      ? siteInfo.icon
      : CONFIG.MUON_ABOUT_EMOJI

  return (
    <div className="mab" id="about">
      <div className="mab-av">{emoji}</div>
      <div>
        <div className="mab-name">
          Hi, I&apos;m {siteInfo?.author || 'Amber Chu'} 👋
        </div>
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

