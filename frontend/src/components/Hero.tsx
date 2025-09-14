const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-aurora knit-pattern relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="hobby-icon knitting-icon bounce-hover"></span>
            <span className="hobby-icon coding-icon bounce-hover"></span>
            <span className="hobby-icon baking-icon bounce-hover"></span>
            <span className="hobby-icon coffee-icon bounce-hover"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 hero-text-shadow">
            Hi, I'm{' '}
            <span className="text-gray-800">Kimala Cochran</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-800 mb-8 font-semibold hero-text-shadow">
            Front End Engineer & Creative Problem Solver
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed hero-text-shadow">
            Engaged and collaborative software developer dedicated to finding efficient and creative solutions.
            Experienced in building accessible, responsive web experiences with modern technologies.
            When I'm not coding, you'll find me knitting, building combat robots, or baking fresh bread!
          </p>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <span className="bg-coral text-white px-4 py-2 rounded-full font-semibold bounce-hover shadow-lg">Front End Engineer</span>
            <span className="bg-mint text-white px-4 py-2 rounded-full font-semibold bounce-hover shadow-lg">Yarn Whisperer</span>
            <span className="bg-rose text-white px-4 py-2 rounded-full font-semibold bounce-hover shadow-lg">Combat Robotics</span>
            <span className="bg-sage text-white px-4 py-2 rounded-full font-semibold bounce-hover shadow-lg">Bread Baker</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-coral text-white px-8 py-3 rounded-lg hover:bg-coral-light transition-colors font-semibold bounce-hover shadow-lg"
            >
              View My Creations ✨
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-mint text-white px-8 py-3 rounded-lg hover:bg-mint-light transition-colors font-semibold bounce-hover shadow-lg"
            >
              Let's Connect! 🌈
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;