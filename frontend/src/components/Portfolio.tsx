import Header from './Header'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import AccessibilityLab from './AccessibilityLab'
import Contact from './Contact'
import Footer from './Footer'

function Portfolio() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-lg focus:font-headline focus:font-bold"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AccessibilityLab />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio