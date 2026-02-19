
import { useState } from 'react'
import CONFIG from '../config'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit() {
    if (!email || !email.includes('@')) return
    setLoading(true)
    // 如果接入了真实订阅服务（Mailchimp / ConvertKit），在这里调用 API
    // 目前为前端演示，500ms 后显示成功
    setTimeout(() => {
      setLoading(false)
      setDone(true)
    }, 500)
  }

  return (
    <div className="mnl" id="newsletter">
      <h3>{CONFIG.MUON_NEWSLETTER_TITLE}</h3>
      <p>{CONFIG.MUON_NEWSLETTER_DESC}</p>

      {done ? (
        <p style={{ color: 'var(--accent)', fontFamily: 'var(--sans)', fontSize: '.9rem' }}>
          ✓ You&apos;re in! Talk soon. 🎉
        </p>
      ) : (
        <div className="mnl-form">
          <input
            className="mnl-i"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            disabled={loading}
          />
          <button
            className="mnl-btn"
            onClick={handleSubmit}
            disabled={loading}
            style={{ opacity: loading ? .7 : 1 }}
          >
            {loading ? '…' : 'Subscribe'}
          </button>
        </div>
      )}
    </div>
  )
}
