const About = () => {
  const stats = [
    { value: '5+',  label: 'Years Coding',      cls: 'bg-primary-container',   text: 'text-on-primary-container' },
    { value: '50+', label: 'Knitting Projects', cls: 'bg-secondary-container', text: 'text-on-secondary-container' },
    { value: '~10', label: 'Loaves Baked',       cls: 'bg-tertiary-container',  text: 'text-on-tertiary-container' },
    { value: '∞',   label: 'Cups of Tea',        cls: 'bg-surface-container',   text: 'text-on-surface' },
  ];

  return (
    <section id="about" className="pattern-x py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tight text-on-surface mb-12">
          About <span className="heading-accent">Kimala</span> & Her Journey
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left column */}
          <div className="space-y-6">
            <div className="personality-card group p-6">
              <div className="dog-ear bg-primary text-primary"></div>
              <p className="font-body text-on-surface-variant leading-relaxed relative z-10">
                I'm a Front End Engineer with 5+ years of experience building accessible, responsive web applications.
                Currently at Bounteous, I develop and maintain custom Adobe Experience Manager components for enterprise clients,
                combining technical expertise with creative problem-solving to deliver engaging digital experiences.
              </p>
            </div>
            <div className="personality-card-alt group p-6">
              <div className="dog-ear bg-secondary text-secondary"></div>
              <p className="font-body text-on-surface-variant leading-relaxed relative z-10">
                My journey began at Turing School of Software & Design, where I completed 1600+ hours of intensive training.
                As a Student Advisory Board representative, I discovered my passion for mentoring and collaboration —
                skills I bring to every development team I work with.
              </p>
            </div>
          </div>

          {/* Middle column */}
          <div className="space-y-6">
            <div className="personality-card-accent group p-6">
              <div className="dog-ear bg-tertiary text-tertiary"></div>
              <p className="font-body text-on-surface-variant leading-relaxed relative z-10">
                When I'm not crafting code, I'm crafting with my hands! Whether knitting intricate patterns, building combat robots,
                or learning the art of sourdough baking, I love projects that require patience, precision, and creative thinking.
              </p>
            </div>
            <div className="personality-card-accent group p-6">
              <div className="dog-ear bg-primary text-primary"></div>
              <p className="font-body text-on-surface-variant leading-relaxed relative z-10">
                What truly drives me is an insatiable curiosity and love for learning new things. From emerging technologies
                to accessibility best practices, I'm always excited to expand my knowledge and tackle fresh challenges.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="personality-card group p-6 text-center">
              <div className="dog-ear bg-secondary text-secondary"></div>
              <h3 className="font-headline font-bold text-xl text-on-surface mb-5 relative z-10">What Drives Me ✨</h3>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { icon: '💻', label: 'Clean Code' },
                  { icon: '🧶', label: 'Crafting' },
                  { icon: '📚', label: 'Learning' },
                  { icon: '🤝', label: 'Collaboration' },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center p-3 rounded-xl bg-surface-container-low hover:bg-primary-container transition-colors duration-300 cursor-default"
                  >
                    <span className="text-3xl mb-1">{icon}</span>
                    <span className="font-label text-xs font-bold text-on-surface-variant">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ value, label, cls, text }) => (
                <div key={label} className={`${cls} rounded-xl p-4 text-center relative overflow-hidden hover-lift transition-all duration-500`}>
                  <div className="dog-ear bg-white/20 text-white/20"></div>
                  <div className={`font-headline font-extrabold text-2xl ${text} mb-0.5`}>{value}</div>
                  <div className={`font-label text-xs font-semibold ${text} opacity-80`}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional practice blurbs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="personality-card group p-6">
            <div className="dog-ear bg-primary text-primary" aria-hidden="true"></div>
            <h3 className="font-headline font-bold text-base text-on-surface mb-3 relative z-10">Accessibility</h3>
            <p className="font-body text-on-surface-variant leading-relaxed relative z-10">
              Accessibility isn't a checklist item for me, it's baked into how I build. Throughout my time at Bounteous
              I led WCAG 2.1 AA compliance efforts across 70+ enterprise websites, using tools like axe, Lighthouse, and
              WAVE to audit, identify, and remediate issues across large multilingual digital portfolios.
            </p>
          </div>
          <div className="personality-card-alt group p-6">
            <div className="dog-ear bg-secondary text-secondary" aria-hidden="true"></div>
            <h3 className="font-headline font-bold text-base text-on-surface mb-3 relative z-10">Agile</h3>
            <p className="font-body text-on-surface-variant leading-relaxed relative z-10">
              For five years I managed web backlogs in Jira, wrote user stories, and championed iterative development
              practices across enterprise projects. I believe the fastest path to a great digital experience is shipping
              early, listening to users, and improving continuously rather than waiting for perfect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
