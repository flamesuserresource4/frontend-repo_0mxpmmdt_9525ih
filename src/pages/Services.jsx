import Navbar from '../components/Navbar'

const pillars = [
  { title: 'Technology', points: ['Platform evaluation', 'CRM architecture', 'Automation design', 'Integration strategy'] },
  { title: 'Process', points: ['Sales motions', 'Enablement workflows', 'Cross-functional SLAs', 'Lifecycle governance'] },
  { title: 'Content', points: ['Content audit', 'Taxonomy & tagging', 'Playbook design', 'Distribution & findability'] },
  { title: 'Training', points: ['Onboarding path', 'Role-based curricula', 'Manager coaching', 'Reinforcement & certification'] },
  { title: 'Metrics', points: ['Program KPIs', 'Dashboards', 'Attribution & impact', 'Continuous improvement'] },
]

export default function Services() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <main className="pt-28 max-w-6xl mx-auto px-6 md:px-8">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-4 max-w-2xl" style={{ color: 'rgba(231,231,231,0.8)' }}>We implement the operating system for enablement across five pillars. Engagements range from assessments to implementation and ongoing advisory.</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl p-6 backdrop-blur" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg, rgba(39,42,46,0.6), rgba(28,30,34,0.6))' }}>
              <h3 className="text-xl font-semibold" style={{ color: 'var(--brand-gold)' }}>{p.title}</h3>
              <ul className="mt-3 space-y-2 text-sm" style={{ color: 'rgba(231,231,231,0.85)' }}>
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: 'var(--brand-gold)' }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
