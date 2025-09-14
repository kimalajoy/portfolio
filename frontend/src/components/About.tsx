const About = () => {
  return (
    <section id="about" className="py-20 bg-warm-gradient seed-stitch relative">
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 dotted-accent">
            About Kimala & Her Journey
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="personality-card p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm a Front End Engineer with 5+ years of experience building accessible, responsive web applications.
                  Currently at Bounteous, I develop and maintain custom Adobe Experience Manager components for enterprise clients,
                  combining technical expertise with creative problem-solving to deliver engaging digital experiences.
                </p>
              </div>

              <div className="personality-card-alt p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  My journey began at Turing School of Software & Design, where I completed 1600+ hours of intensive training.
                  As a Student Advisory Board representative, I discovered my passion for mentoring and collaboration -
                  skills I bring to every development team I work with.
                </p>
              </div>

              <div className="personality-card-accent p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  When I'm not crafting code, I'm crafting with my hands! Whether knitting intricate patterns, building combat robots,
                  or perfecting my sourdough technique, I love projects that require patience, precision, and creative thinking.
                  These hobbies keep my problem-solving skills sharp and my perspective fresh.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 bg-warm-gradient rounded-full flex items-center justify-center relative shadow-lg">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="text-6xl">🌟</div>
                </div>
                <div className="absolute -top-4 -right-4">
                  <span className="text-4xl">🧶</span>
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <span className="text-4xl">🍞</span>
                </div>
                <div className="absolute top-8 -left-8">
                  <span className="text-3xl">💻</span>
                </div>
                <div className="absolute bottom-8 -right-8">
                  <span className="text-3xl">🍵</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center p-6 personality-card">
              <div className="text-3xl font-bold text-dark-coral mb-2">3+</div>
              <div className="text-gray-700 font-medium">Years Coding</div>
            </div>
            <div className="text-center p-6 personality-card-alt">
              <div className="text-3xl font-bold text-dark-mint mb-2">50+</div>
              <div className="text-gray-700 font-medium">Knitting Projects</div>
            </div>
            <div className="text-center p-6 personality-card">
              <div className="text-3xl font-bold text-dark-rose mb-2">100+</div>
              <div className="text-gray-700 font-medium">Loaves Baked</div>
            </div>
            <div className="text-center p-6 personality-card-accent">
              <div className="text-3xl font-bold text-dark-sage mb-2">∞</div>
              <div className="text-gray-700 font-medium">Cups of Tea</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;