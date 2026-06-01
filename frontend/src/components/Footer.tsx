const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-8 rounded-t-[3rem] bg-white/60 backdrop-blur-sm mt-8 relative overflow-hidden">
      <div className="dog-ear bg-secondary" style={{ opacity: 0.1 }} aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="font-headline font-black text-slate-900 text-xl tracking-tight">
          Kimala Cochran
        </div>

        <nav aria-label="Social links">
          <ul className="flex gap-8 list-none m-0 p-0">
            {[
              { href: 'https://github.com/kimalajoy',              label: 'GitHub (opens in new tab)',   text: 'GitHub',   external: true },
              { href: 'https://linkedin.com/in/kimala-cochran',    label: 'LinkedIn (opens in new tab)', text: 'LinkedIn', external: true },
              { href: 'mailto:kimalajoy@gmail.com',                label: 'Send email',                  text: 'Email',    external: false },
            ].map(({ href, label, text, external }) => (
              <li key={text}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="social-icon font-body text-sm text-slate-500 hover:text-[#00635c] underline underline-offset-4 transition-all opacity-80 hover:opacity-100"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-body text-sm text-slate-500 text-center md:text-right">
          © {currentYear} Kimala Cochran. Built with React &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
