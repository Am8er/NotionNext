
import CONFIG from '../config'

export default function StatsBar({ posts, tags }) {
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

