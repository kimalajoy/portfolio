import { useState } from 'react';

const navItems = [
  { id: 'home',     label: 'Home'     },
  { id: 'about',    label: 'About'    },
  { id: 'skills',   label: 'Skills'   },
  { id: 'projects', label: 'Projects' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="header-glass fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20" aria-label="Main navigation">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-2xl font-black text-slate-900 font-headline tracking-tight no-underline">
          Kimala Cochran
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`nav-link ${active === id ? 'nav-link-active' : ''}`}
              aria-current={active === id ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="hidden md:inline-flex btn-nav-contact"
        >
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden px-8 pb-6 flex flex-col gap-3 bg-white/90 backdrop-blur-xl">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`nav-link text-left py-2 ${active === id ? 'nav-link-active' : ''}`}
              aria-current={active === id ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn-nav-contact mt-2 text-center"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
