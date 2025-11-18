import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Programs() {
  const [form, setForm] = useState({ name: '', email: '', company: '', program: 'Sales Onboarding' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    alert('Thanks! Your inquiry has been recorded.')
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <main className="pt-28 max-w-5xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl font-bold">Programs</h1>
        <p className="mt-4 max-w-2xl" style={{ color: 'rgba(231,231,231,0.8)' }}>Cohort-based and bespoke programs focused on practical skill building and measurable behavior change.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 backdrop-blur" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(39,42,46,0.6), rgba(28,30,34,0.6))' }}>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--brand-gold)' }}>Popular Programs</h3>
            <ul className="mt-4 space-y-3" style={{ color: 'rgba(231,231,231,0.85)' }}>
              <li>Sales Onboarding Accelerator</li>
              <li>Effective Discovery & Qualification</li>
              <li>MEDDICC in Practice</li>
              <li>Manager Coaching Toolkit</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl p-6 backdrop-blur" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(39,42,46,0.6), rgba(28,30,34,0.6))' }}>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--brand-gold)' }}>Inquiry Form</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="px-3 py-2 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2" style={{ outlineColor: 'var(--brand-gold)' }} />
              <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="px-3 py-2 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2" />
              <input name="company" placeholder="Company" value={form.company} onChange={handleChange} className="px-3 py-2 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2 sm:col-span-2" />
              <select name="program" value={form.program} onChange={handleChange} className="px-3 py-2 rounded bg-white/10 border border-white/10 focus:outline-none focus:ring-2 sm:col-span-2">
                <option>Sales Onboarding</option>
                <option>Discovery</option>
                <option>MEDDICC</option>
                <option>Manager Coaching</option>
              </select>
            </div>
            <button className="mt-4 w-full px-4 py-2 rounded text-slate-900 font-semibold" style={{ background: 'linear-gradient(90deg, #CBB26A, #C7AE6A)' }}>Submit</button>
          </form>
        </div>
      </main>
    </div>
  )
}
