import { useState } from 'react';
import PocketBase from 'pocketbase';

interface ContactForm {
  name: string;
  email: string;
  message: string;
  website: string;
}

const pb = new PocketBase('http://127.0.0.1:8090');

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');
  const [lastSubmission, setLastSubmission] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (lastSubmission && Date.now() - lastSubmission < 30000) {
      setStatus('error');
      setResponseMessage('Please wait 30 seconds before sending another message.');
      return;
    }

    if (form.website.trim() !== '') return;

    if (form.message.length < 10) {
      setStatus('error');
      setResponseMessage('Please write a message with at least 10 characters.');
      return;
    }

    if (form.message.length > 2000) {
      setStatus('error');
      setResponseMessage('Message is too long. Please keep it under 2000 characters.');
      return;
    }

    setStatus('loading');

    try {
      await pb.collection('contacts').create({ name: form.name, email: form.email, message: form.message });
      setStatus('success');
      setResponseMessage("Thank you for your message! I'll get back to you soon. ✨");
      setForm({ name: '', email: '', message: '', website: '' });
      setLastSubmission(Date.now());
    } catch (error: any) {
      setStatus('error');
      if (error.status === 404) {
        setResponseMessage('Please wait while the backend is being set up. Try again in a moment!');
      } else if (error.data?.message) {
        setResponseMessage(error.data.message);
      } else {
        setResponseMessage('Failed to send message. Please try again or reach out directly via the email link below.');
      }
    }
  };

  const contactLinks = [
    {
      label: 'Email',
      value: null,
      href: 'mailto:kimalajoy@gmail.com',
      bg: 'bg-primary-container',
      icon: (
        <svg className="w-5 h-5 text-on-primary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: null,
      href: 'https://github.com/kimalajoy',
      bg: 'bg-surface-container-high',
      icon: (
        <svg className="w-5 h-5 text-on-surface" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: null,
      href: 'https://linkedin.com/in/kimala-cochran',
      bg: 'bg-secondary-container',
      icon: (
        <svg className="w-5 h-5 text-on-secondary-container" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="pattern-stars-peach py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tight text-on-surface mb-6">
          Let's <span className="heading-accent">Create</span> Together!
        </h2>
        <p className="font-body text-on-surface-variant text-lg mb-14 max-w-2xl">
          Ready to craft something amazing? Let's connect! ✨
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">

          {/* Contact info */}
          <div className="space-y-8">
            <p className="font-body text-on-surface-variant leading-relaxed">
              Always excited to discuss new opportunities, creative projects, or just chat about
              the intersection of technology and crafting. Whether it's building accessible web
              experiences or swapping sourdough tips, I'd love to hear from you!
            </p>

            <div className="space-y-4">
              {contactLinks.map(({ label, href, bg, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={`${label}${href.startsWith('mailto') ? '' : ' (opens in new tab)'}`}
                  className="flex items-center gap-4 group/link"
                >
                  <div className={`w-11 h-11 ${bg} rounded-full flex items-center justify-center flex-shrink-0 hover-lift transition-all duration-300`}>
                    {icon}
                  </div>
                  <h4 className="font-headline font-bold text-sm text-on-surface group-hover/link:text-[#00635c] transition-colors">
                    {label}
                  </h4>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="personality-card group p-8">
            <div className="dog-ear bg-primary text-primary"></div>
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={handleChange}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="name" className="block font-label text-sm font-bold text-on-surface mb-1.5">Name</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required className="input-styled" placeholder="Your Name" />
              </div>

              <div>
                <label htmlFor="email" className="block font-label text-sm font-bold text-on-surface mb-1.5">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required className="input-styled" placeholder="your.email@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block font-label text-sm font-bold text-on-surface mb-1.5">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} className="input-styled resize-none" placeholder="Tell me about your project, share a recipe, or just say hello!" />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full ${status === 'loading' ? 'opacity-60 cursor-not-allowed bg-surface-container text-on-surface-variant py-3 px-6 rounded-full font-headline font-bold' : 'btn-primary'}`}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>

              {responseMessage && (
                <div className={`p-4 rounded-xl text-sm font-medium font-body ${
                  status === 'success'
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-error-container text-on-error-container'
                }`}>
                  {responseMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
