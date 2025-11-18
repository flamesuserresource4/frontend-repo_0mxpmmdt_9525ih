import Navbar from '../components/Navbar'

export default function Blog() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <main className="pt-28 max-w-5xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4" style={{ color: 'rgba(231,231,231,0.8)' }}>Insights, frameworks, and practical guides to modern enablement.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <article key={i} className="rounded-2xl p-6 backdrop-blur transition" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(39,42,46,0.6), rgba(28,30,34,0.6))' }}>
              <h3 className="text-xl font-semibold" style={{ color: 'var(--brand-gold)' }}>Sample article {i}</h3>
              <p className="mt-2" style={{ color: 'rgba(231,231,231,0.85)' }}>Coming soon: long-form thinking on what actually moves the needle.</p>
              <button className="mt-4" style={{ color: 'var(--brand-gold)' }}>Read more →</button>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
