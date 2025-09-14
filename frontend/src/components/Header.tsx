import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            Kimala Cochran
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-3">
            <button
              onClick={() => scrollToSection('home')}
              className="bg-coral text-black px-6 py-2 rounded-full hover:bg-coral-light transition-colors font-semibold bounce-hover shadow-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-mint text-black px-6 py-2 rounded-full hover:bg-mint-light transition-colors font-semibold bounce-hover shadow-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="bg-rose text-black px-6 py-2 rounded-full hover:bg-rose-light transition-colors font-semibold bounce-hover shadow-md"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-sage text-black px-6 py-2 rounded-full hover:bg-sage-light transition-colors font-semibold bounce-hover shadow-md"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-peach text-black px-6 py-2 rounded-full hover:bg-peach-light transition-colors font-semibold bounce-hover shadow-md"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="bg-coral text-black px-6 py-3 rounded-full hover:bg-coral-light transition-colors font-semibold bounce-hover shadow-md"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="bg-mint text-black px-6 py-3 rounded-full hover:bg-mint-light transition-colors font-semibold bounce-hover shadow-md"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="bg-rose text-black px-6 py-3 rounded-full hover:bg-rose-light transition-colors font-semibold bounce-hover shadow-md"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-sage text-black px-6 py-3 rounded-full hover:bg-sage-light transition-colors font-semibold bounce-hover shadow-md"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-peach text-black px-6 py-3 rounded-full hover:bg-peach-light transition-colors font-semibold bounce-hover shadow-md"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;