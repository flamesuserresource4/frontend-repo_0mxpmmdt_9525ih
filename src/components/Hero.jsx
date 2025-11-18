import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(27,27,27,0.7) 0%, rgba(27,27,27,0.8) 40%, #1B1B1B 100%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 w-full grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="py-24 md:py-32">
          <div className="inline-flex items-center rounded-full border border-white/10" style={{ background: 'rgba(39,42,46,0.6)' }}>
            <span className="px-3 py-1 text-xs" style={{ color: 'var(--brand-gold)' }}>Sales Enablement Consultancy</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
            Improve sales effectiveness across technology, process, content, training, and metrics
          </h1>
          <p className="mt-4 text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(231,231,231,0.85)' }}>
            We help B2B organizations design scalable enablement systems that accelerate revenue and reduce friction across your funnel.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-xl text-slate-900 font-semibold shadow hover:shadow-xl transition-all" style={{ background: 'linear-gradient(90deg, #CBB26A, #C7AE6A)' }}>
              Book a Discovery Call
            </Link>
            <Link to="/services" className="inline-flex items-center px-6 py-3 rounded-xl font-semibold transition" style={{ background: 'rgba(39,42,46,0.6)', color: 'var(--text)' }}>
              Explore Services
            </Link>
          </div>
        </motion.div>

        <motion.ul initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
          {[
            { title: 'Technology', desc: 'CRM, tooling, automation, integrations' },
            { title: 'Process', desc: 'Sales motions, governance, handoffs' },
            { title: 'Content', desc: 'Playbooks, assets, messaging, proof' },
            { title: 'Training', desc: 'Onboarding, coaching, reinforcement' },
            { title: 'Metrics', desc: 'KPIs, dashboards, leading indicators' },
            { title: 'Change', desc: 'Enablement ops and adoption programs' },
          ].map((item) => (
            <motion.li key={item.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} className="group rounded-2xl border p-5 backdrop-blur transition" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(39,42,46,0.6), rgba(28,30,34,0.6))' }}>
              <div className="font-semibold" style={{ color: 'var(--brand-gold)' }}>{item.title}</div>
              <div className="mt-1 text-sm" style={{ color: 'rgba(231,231,231,0.85)' }}>{item.desc}</div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
