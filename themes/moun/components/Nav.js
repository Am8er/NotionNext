
import Link from 'next/link'

export default function Nav({ siteInfo }) {
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
