import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturePillars from '../components/FeaturePillars'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <main>
        <Hero />
        <FeaturePillars />
        <CTA />
      </main>
      <footer className="py-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ color: 'rgba(231,231,231,0.8)' }}>
          <p>© {new Date().getFullYear()} Enabler Consultancy. All rights reserved.</p>
          <div className="text-sm">Built with a focus on clarity, momentum, and measurable impact.</div>
        </div>
      </footer>
    </div>
  )
}
