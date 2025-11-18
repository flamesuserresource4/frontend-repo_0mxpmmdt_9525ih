import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <main className="pt-28 max-w-4xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="mt-4 leading-relaxed" style={{ color: 'rgba(231,231,231,0.85)' }}>
          Enabler Consultancy partners with B2B revenue teams to build strong enablement foundations. We combine practical operating experience with structured frameworks to help you scale repeatable success.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 backdrop-blur" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(39,42,46,0.6), rgba(28,30,34,0.6))' }}>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--brand-gold)' }}>Founder</h3>
            <p className="mt-2" style={{ color: 'rgba(231,231,231,0.8)' }}>Led enablement programs across growth-stage to enterprise organizations, aligning sales, marketing, and customer success around the same outcomes.</p>
          </div>
          <div className="rounded-2xl p-6 backdrop-blur" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(39,42,46,0.6), rgba(28,30,34,0.6))' }}>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--brand-gold)' }}>Mission</h3>
            <p className="mt-2" style={{ color: 'rgba(231,231,231,0.8)' }}>Elevate the craft of sales enablement by making it measurable, durable, and integrated into how teams work — not a side function.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
