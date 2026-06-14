const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Hero = () => {
  return (
    <section id="home" className="pattern-stars min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-8 text-center relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Hobby icons — decorative, hidden from assistive tech */}
          <div className="mb-8 flex justify-center gap-5" aria-hidden="true">
            <span className="hobby-icon knitting-icon animate-float" style={{ animationDelay: '0s' }}></span>
            <span className="hobby-icon coding-icon animate-float"   style={{ animationDelay: '0.4s' }}></span>
            <span className="hobby-icon baking-icon animate-float"   style={{ animationDelay: '0.8s' }}></span>
            <span className="hobby-icon coffee-icon animate-float"   style={{ animationDelay: '1.2s' }}></span>
          </div>

          <h1 className="font-headline font-extrabold text-4xl md:text-7xl leading-[1.1] text-on-surface tracking-tight mb-6 animate-fade-in-up">
            Hi, I'm{' '}
            <span className="heading-accent">Kimala Cochran</span>
          </h1>

          <h2 className="font-headline font-bold text-xl md:text-2xl text-on-surface-variant mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Front End Engineer &amp; Creative Problem Solver
          </h2>

          <p className="font-body text-lg text-on-surface-variant mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Engaged and collaborative software developer dedicated to finding efficient and creative solutions.
            Experienced in building accessible, responsive web experiences with modern technologies.
            When I'm not coding, you'll find me knitting, building combat robots, or baking fresh bread!
          </p>

          {/* Identity tag pills */}
          <div className="mb-10 flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="btn-nav" aria-hidden="true">Front End Engineer</span>
            <a
              href="https://www.ravelry.com/projects/kimalajoy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav"
              style={{ cursor: 'pointer' }}
              aria-label="Yarn Whisperer — view Ravelry projects (opens in new tab)"
            >
              Yarn Whisperer
            </a>
            <span className="btn-nav" aria-hidden="true">Combat Robotics</span>
            <span className="btn-nav" aria-hidden="true">Bread Baker</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
              className="btn-primary text-lg px-10 py-5"
            >
              View My Creations <span aria-hidden="true">✨</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
              className="btn-secondary text-lg px-10 py-5"
            >
              Let's Connect! <span aria-hidden="true">🌈</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint — desktop only, hidden on mobile where thumb-scroll is obvious */}
      <a
        href="#about"
        onClick={(e) => { e.preventDefault(); scrollTo('about'); }}
        aria-label="Scroll down to About section"
        className="scroll-hint hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
