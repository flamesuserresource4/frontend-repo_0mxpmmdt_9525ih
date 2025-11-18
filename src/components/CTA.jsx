import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-3xl p-1" style={{ background: 'linear-gradient(90deg, #CBB26A, #C7AE6A)' }}>
          <div className="rounded-3xl p-10 md:p-12 grid md:grid-cols-2 gap-8 items-center" style={{ background: 'var(--bg-elev)' }}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text)' }}>Ready to uplevel your sales organization?</h3>
              <p className="mt-2" style={{ color: 'rgba(231,231,231,0.85)' }}>Book a no-obligation call to assess your current enablement maturity and map out the highest-leverage improvements.</p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-xl text-slate-900 font-semibold hover:brightness-110 transition" style={{ background: 'linear-gradient(90deg, #CBB26A, #C7AE6A)' }}>
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
