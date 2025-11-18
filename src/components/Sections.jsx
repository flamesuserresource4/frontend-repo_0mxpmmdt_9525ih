import { Link } from 'react-router-dom'

export function TwoTracks() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:bg-white/10 transition">
          <h3 className="text-2xl font-semibold text-white">Consultancy</h3>
          <p className="mt-2 text-slate-300">Assessments, roadmaps, and hands-on implementation to build your enablement operating system.</p>
          <Link to="/services" className="inline-flex mt-4 px-4 py-2 rounded bg-white/10 hover:bg-white/20">Explore Services</Link>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur hover:bg-white/10 transition">
          <h3 className="text-2xl font-semibold text-white">Sales Training</h3>
          <p className="mt-2 text-slate-300">Cohorts and workshops to drive behavior change where it matters most.</p>
          <Link to="/programs" className="inline-flex mt-4 px-4 py-2 rounded bg-white/10 hover:bg-white/20">View Programs</Link>
        </div>
      </div>
    </section>
  )
}
