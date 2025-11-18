import Navbar from '../components/Navbar'

export default function Testimonials() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <main className="pt-28 max-w-6xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <p className="mt-4" style={{ color: 'rgba(231,231,231,0.8)' }}>What clients say about partnering with us.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl p-6 backdrop-blur" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(39,42,46,0.6), rgba(28,30,34,0.6))' }}>
              <div className="h-10 w-10 rounded mb-4" style={{ background: 'rgba(203,178,106,0.2)' }} />
              <p>“We saw faster ramp and better win rates within a quarter.”</p>
              <div className="mt-3 text-sm" style={{ color: 'rgba(231,231,231,0.7)' }}>VP Sales, Series B SaaS</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
