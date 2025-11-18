import { motion } from 'framer-motion'
import { Cpu, Repeat, FileText, GraduationCap, BarChart } from 'lucide-react'

const pillars = [
  { title: 'Technology', desc: 'Select, integrate, and operationalize your stack', icon: Cpu },
  { title: 'Process', desc: 'Standardize motions, SLAs, and enablement workflows', icon: Repeat },
  { title: 'Content', desc: 'Governance, findability, and just-in-time delivery', icon: FileText },
  { title: 'Training', desc: 'Role-based onboarding and continuous upskilling', icon: GraduationCap },
  { title: 'Metrics', desc: 'Define leading indicators and report impact', icon: BarChart },
]

export default function FeaturePillars() {
  return (
    <section className="relative py-20" style={{ background: 'var(--bg)' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(1200px 400px at 50% -10%, rgba(203,178,106,0.12), transparent)' }} />
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Five pillars of enablement</h2>
          <p className="mt-3" style={{ color: 'rgba(231,231,231,0.75)' }}>A holistic operating system for consistent, scalable growth.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map(({ title, desc, icon: Icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl p-5 backdrop-blur transition"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(39,42,46,0.6), rgba(28,30,34,0.6))' }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 shadow-inner" style={{ background: 'rgba(203,178,106,0.18)', color: 'var(--brand-gold)' }}>
                <Icon size={20} />
              </div>
              <h3 className="font-semibold" style={{ color: 'var(--text)' }}>{title}</h3>
              <p className="text-sm mt-1" style={{ color: 'rgba(231,231,231,0.8)' }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
