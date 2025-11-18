import { Routes, Route } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Home from './Home'
import About from './About'
import Services from './Services'
import Programs from './Programs'
import Blog from './Blog'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Test from '../Test'

export default function AppRoutes() {
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </PageTransition>
  )
}
