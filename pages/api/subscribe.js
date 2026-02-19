/**
 * pages/api/subscribe.js
 *
 * 服务端 API Route，处理 Mailchimp 订阅
 * API Key 只在服务端使用，不会暴露给前端
 *
 * 使用方法：前端 POST /api/subscribe { email: "xxx@xxx.com" }
 */

export default async function handler(req, res) {
  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  // 基本校验
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  // 从 Vercel 环境变量读取（绝不暴露给前端）
  const API_KEY    = process.env.MAILCHIMP_API_KEY
  const AUDIENCE   = process.env.MAILCHIMP_AUDIENCE_ID
  const SERVER     = process.env.MAILCHIMP_SERVER

  if (!API_KEY || !AUDIENCE || !SERVER) {
    console.error('Missing Mailchimp environment variables')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  const url = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE}/members`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Base64 编码认证（Mailchimp 标准方式）
        'Authorization': `Basic ${Buffer.from(`anystring:${API_KEY}`).toString('base64')}`
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',        // 直接订阅（不需要二次确认）
        // status: 'pending',        // 如果想要发确认邮件，改成 pending
      })
    })

    const data = await response.json()

    // 已经订阅过的情况（不报错，友好处理）
    if (response.status === 400 && data.title === 'Member Exists') {
      return res.status(200).json({ message: 'Already subscribed!' })
    }

    if (!response.ok) {
      console.error('Mailchimp error:', data)
      return res.status(400).json({ error: data.detail || 'Subscription failed' })
    }

    return res.status(200).json({ message: 'Success' })

  } catch (err) {
    console.error('Subscribe API error:', err)
    return res.status(500).json({ error: 'Network error, please try again' })
  }
}
