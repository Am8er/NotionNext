
import Link from 'next/link'
import { tagColor, postSlug } from './PostCard'

/**
 * @param posts     文章数组
 * @param startIdx  编号起始偏移（首页从 3 开始，归档页从 0 开始）
 * @param title     区块标题，格式 "单词 剩余单词" → 第一个词普通，其余金色
 * @param linkAll   右上角"All"链接
 * @param showSection 是否显示 section 包装（归档页单独用时传 false）
 */
export default function PostRows({
  posts,
  startIdx = 0,
  title = 'Latest Articles',
  linkAll = '/archive',
  showSection = true,
}) {
  if (!posts?.length) return null

  const [first, ...rest] = title.split(' ')

  const list = (
    <div className="mpl">
      {posts.map((p, i) => (
        <Link key={p.id} href={postSlug(p)} className="mpr">
          <span className="mpr-n">
            {String(startIdx + i + 1).padStart(2, '0')}
          </span>
          <div className="mpr-info">
            <div className="mpr-t">{p.title}</div>
            {p.tags?.length > 0 && (
              <div className="mpr-s">{p.tags.join(' · ')}</div>
            )}
          </div>
          {p.category && (
            <span className={`tg-b ${tagColor(p.category)}`}>
              {p.category}
            </span>
          )}
        </Link>
      ))}
    </div>
  )

  if (!showSection) return list

  return (
    <section className="msec" style={{ paddingTop: 0 }}>
      <div className="msec-hd">
        <h2 className="msec-t">
          {first} <span>{rest.join(' ')}</span>
        </h2>
        <Link href={linkAll} className="msec-more">All articles →</Link>
      </div>
      {list}
    </section>
  )
}

/** 分页组件（PostRows 下方使用） */
export function Pagination({ page, pageCount }) {
  if (!pageCount || pageCount <= 1) return null
  return (
    <div className="mpag">
      {Array.from({ length: pageCount }, (_, i) => (
        <Link
          key={i}
          href={i === 0 ? '/' : `/page/${i + 1}`}
          className={page === i + 1 ? 'cur' : ''}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  )
}

