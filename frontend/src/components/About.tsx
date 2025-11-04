const About = () => {
  return (
    <section id="about" className="py-20 bg-warm-gradient seed-stitch relative about-section">
      <div className="container mx-auto px-6 relative z-10 about-container">
        <div className="max-w-7xl mx-auto about-content">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 dotted-accent about-title">
            About Kimala & Her Journey
          </h2>

          {/* Three-column grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 about-grid">
            {/* Left Column - Intro & Education */}
            <div className="space-y-6 about-text-column">
              <div className="personality-card p-6 about-intro-card">
                <p className="text-lg text-gray-700 leading-relaxed about-intro-text">
                  I'm a Front End Engineer with 5+ years of experience building accessible, responsive web applications.
                  Currently at Bounteous, I develop and maintain custom Adobe Experience Manager components for enterprise clients,
                  combining technical expertise with creative problem-solving to deliver engaging digital experiences.
                </p>
              </div>

              <div className="personality-card-alt p-6 about-education-card">
                <p className="text-lg text-gray-700 leading-relaxed about-education-text">
                  My journey began at Turing School of Software & Design, where I completed 1600+ hours of intensive training.
                  As a Student Advisory Board representative, I discovered my passion for mentoring and collaboration -
                  skills I bring to every development team I work with.
                </p>
              </div>
            </div>

            {/* Middle Column - Hobbies & Learning */}
            <div className="space-y-6 about-middle-column">
              <div className="personality-card-accent p-6 about-hobbies-card">
                <p className="text-lg text-gray-700 leading-relaxed about-hobbies-text">
                  When I'm not crafting code, I'm crafting with my hands! Whether knitting intricate patterns, building combat robots,
                  or learning the art of sourdough baking, I love projects that require patience, precision, and creative thinking.
                  These hobbies keep my problem-solving skills sharp and my perspective fresh.
                </p>
              </div>

              <div className="personality-card-accent p-6 about-learning-card">
                <p className="text-lg text-gray-700 leading-relaxed about-learning-text">
                  What truly drives me is an insatiable curiosity and love for learning new things. From exploring emerging technologies
                  to diving deep into accessibility best practices, I'm always excited to expand my knowledge and tackle fresh challenges.
                  This passion for continuous learning keeps me adaptable and ensures I'm always growing as both a developer and a person.
                </p>
              </div>
            </div>

            {/* Right Column - Values & Stats */}
            <div className="space-y-6 about-values-column">
              <div className="personality-card p-6 text-center about-values-card">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 about-values-title">
                  What Drives Me ✨
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4">
                    <span className="text-4xl mb-2">💻</span>
                    <span className="text-sm font-semibold text-gray-700">Clean Code</span>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <span className="text-4xl mb-2">🧶</span>
                    <span className="text-sm font-semibold text-gray-700">Crafting</span>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <span className="text-4xl mb-2">📚</span>
                    <span className="text-sm font-semibold text-gray-700">Learning</span>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <span className="text-4xl mb-2">🤝</span>
                    <span className="text-sm font-semibold text-gray-700">Collaboration</span>
                  </div>
                </div>
              </div>

              {/* Stats - moved into right column */}
              <div className="grid grid-cols-2 gap-3 about-stats">
                <div className="text-center p-4 personality-card">
                  <div className="text-2xl font-bold text-dark-coral mb-1">3+</div>
                  <div className="text-sm text-gray-700 font-medium">Years Coding</div>
                </div>
                <div className="text-center p-4 personality-card-alt">
                  <div className="text-2xl font-bold text-dark-mint mb-1">50+</div>
                  <div className="text-sm text-gray-700 font-medium">Knitting Projects</div>
                </div>
                <div className="text-center p-4 personality-card">
                  <div className="text-2xl font-bold text-dark-rose mb-1">~10</div>
                  <div className="text-sm text-gray-700 font-medium">Loaves Baked</div>
                </div>
                <div className="text-center p-4 personality-card-accent">
                  <div className="text-2xl font-bold text-dark-sage mb-1">∞</div>
                  <div className="text-sm text-gray-700 font-medium">Cups of Tea</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;