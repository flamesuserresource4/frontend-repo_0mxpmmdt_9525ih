import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Placeholder submit - integrates easily with Wix or any backend
    setStatus('Thanks! We will get back to you shortly.')
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <main className="pt-28 max-w-4xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4" style={{ color: 'rgba(231,231,231,0.8)' }}>Tell us about your goals and challenges. We’ll respond within one business day.</p>

        <form onSubmit={handleSubmit} className="mt-8 rounded-2xl p-6 backdrop-blur" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(39,42,46,0.6), rgba(28,30,34,0.6))' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="px-3 py-2 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2" />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="px-3 py-2 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2" />
            <input name="company" placeholder="Company" value={form.company} onChange={handleChange} className="px-3 py-2 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2 sm:col-span-2" />
            <textarea name="message" placeholder="How can we help?" value={form.message} onChange={handleChange} rows={5} className="px-3 py-2 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2 sm:col-span-2" />
          </div>
          <button className="mt-4 px-6 py-3 rounded text-slate-900 font-semibold" style={{ background: 'linear-gradient(90deg, #CBB26A, #C7AE6A)' }}>Submit</button>
          {status && <div className="mt-3" style={{ color: 'var(--brand-gold)' }}>{status}</div>}
        </form>
      </main>
    </div>
  )
}
