interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Accessibility' | 'Agile';
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'JavaScript',               category: 'Frontend'      },
    { name: 'TypeScript',               category: 'Frontend'      },
    { name: 'React',                    category: 'Frontend'      },
    { name: 'Vue.js',                   category: 'Frontend'      },
    { name: 'HTML',                     category: 'Frontend'      },
    { name: 'CSS / LESS / SCSS',        category: 'Frontend'      },
    { name: 'HTL (Sightly)',            category: 'Frontend'      },
    { name: 'jQuery',                   category: 'Frontend'      },
    { name: 'Gatsby',                   category: 'Frontend'      },
    { name: 'Java',                     category: 'Backend'       },
    { name: 'Node.js',                  category: 'Backend'       },
    { name: 'REST APIs',                category: 'Backend'       },
    { name: 'Adobe Experience Manager', category: 'Backend'       },
    { name: 'PocketBase',               category: 'Backend'       },
    { name: 'Anthropic SDK',            category: 'Backend'       },
    { name: 'Git',                      category: 'Tools'         },
    { name: 'NPM / Webpack',            category: 'Tools'         },
    { name: 'Vite',                     category: 'Tools'         },
    { name: 'Storybook',                category: 'Tools'         },
    { name: 'GitHub Copilot',           category: 'Tools'         },
    { name: 'Claude Code',              category: 'Tools'         },
    { name: 'Claude AI',                category: 'Tools'         },
    { name: 'WCAG 2.1 AA',             category: 'Accessibility' },
    { name: 'axe / Lighthouse / WAVE',  category: 'Accessibility' },
    { name: 'Screen Reader Testing',    category: 'Accessibility' },
    { name: 'Semantic HTML / ARIA',     category: 'Accessibility' },
    { name: 'Jira',                     category: 'Agile'         },
    { name: 'User Story Writing',       category: 'Agile'         },
    { name: 'Backlog Management',       category: 'Agile'         },
    { name: 'Iterative Delivery',       category: 'Agile'         },
  ];

  const frontend      = skills.filter(s => s.category === 'Frontend');
  const backend       = skills.filter(s => s.category === 'Backend');
  const tools         = skills.filter(s => s.category === 'Tools');
  const accessibility = skills.filter(s => s.category === 'Accessibility');
  const agile         = skills.filter(s => s.category === 'Agile');

  const SkillRow = ({ skill }: { skill: Skill }) => (
    <div className="flex items-center gap-2 py-2 border-b border-surface-container last:border-b-0">
      <span className="w-1.5 h-1.5 rounded-full bg-primary-dim flex-shrink-0"></span>
      <span className="font-label text-sm font-medium text-on-surface">{skill.name}</span>
    </div>
  );

  const creativeHobbies = [
    { label: 'Knitting',  emoji: '🧶' },
    { label: 'Combat Robotics', emoji: '🤖' },
    { label: 'Sourdough Baking', emoji: '🍞' },
    { label: 'Fermentation', emoji: '🫙' },
  ];

  const creativePro = [
    { label: 'Color Theory',    emoji: '🎨' },
    { label: 'Pattern Design',  emoji: '🪡' },
    { label: 'Design Handoff',  emoji: '🤝' },
    { label: 'Brand Systems',   emoji: '💡' },
  ];

  // Small fixed rotations — alternating +/- so tiles feel scattered but not random on re-render
  const tileRotations = [-2, 1.5, -1, 2.5, -1.5, 1, -2.5, 2];

  return (
    <section id="skills" className="pattern-waves py-20">
      <div className="max-w-7xl mx-auto px-8">

        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-sm font-bold mb-6">
          4+ YEARS OF CRAFT
        </span>

        <h2 className="font-headline font-extrabold text-4xl md:text-7xl text-on-surface tracking-tight leading-tight mb-6">
          Technical <span className="heading-accent">Mastery</span> &<br />Creative Intuition.
        </h2>

        <p className="font-body text-on-surface-variant text-lg max-w-2xl mb-16 border-l-4 border-primary/30 pl-5">
          Bridging the gap between complex engineering and human-centric design — building accessible,
          performant interfaces that feel as good as they look. Like combining different yarns to create
          beautiful patterns! 🧶
        </p>

        {/* Toolbelt grid — even 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="card-surface-low p-8 rounded-xl hover-lift transition-all duration-500 relative overflow-hidden group">
            <div className="dog-ear bg-primary text-primary" aria-hidden="true"></div>
            <h3 className="font-headline font-bold text-xl mb-6 relative z-10">Frontend</h3>
            <div className="relative z-10">
              {frontend.map(s => <SkillRow key={s.name} skill={s} />)}
            </div>
          </div>

          <div className="card-surface p-8 rounded-xl hover-lift transition-all duration-500 relative overflow-hidden group">
            <div className="dog-ear bg-secondary text-secondary" aria-hidden="true"></div>
            <h3 className="font-headline font-bold text-xl mb-6 relative z-10">Backend</h3>
            <div className="relative z-10">
              {backend.map(s => <SkillRow key={s.name} skill={s} />)}
            </div>
          </div>

          <div className="card-surface-high p-8 rounded-xl hover-lift transition-all duration-500 relative overflow-hidden group">
            <div className="dog-ear bg-tertiary text-tertiary" aria-hidden="true"></div>
            <h3 className="font-headline font-bold text-xl mb-6 relative z-10">Workflow & Tools</h3>
            <div className="relative z-10">
              {tools.map(s => <SkillRow key={s.name} skill={s} />)}
            </div>
          </div>
        </div>

        {/* Accessibility & Agile — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          <div className="card-surface-low p-8 rounded-xl hover-lift transition-all duration-500 relative overflow-hidden group">
            <div className="dog-ear bg-primary text-primary" aria-hidden="true"></div>
            <h3 className="font-headline font-bold text-xl mb-6 relative z-10">Accessibility</h3>
            <div className="relative z-10">
              {accessibility.map(s => <SkillRow key={s.name} skill={s} />)}
            </div>
          </div>

          <div className="card-surface p-8 rounded-xl hover-lift transition-all duration-500 relative overflow-hidden group">
            <div className="dog-ear bg-secondary text-secondary" aria-hidden="true"></div>
            <h3 className="font-headline font-bold text-xl mb-6 relative z-10">Agile</h3>
            <div className="relative z-10">
              {agile.map(s => <SkillRow key={s.name} skill={s} />)}
            </div>
          </div>
        </div>

        {/* Creative skills — full-width card, split into hobbies + pro creative */}
        <div className="card-surface-warm p-8 rounded-xl relative overflow-hidden group">
          <div className="dog-ear bg-tertiary text-tertiary" aria-hidden="true"></div>

          <h3 className="font-headline font-bold text-xl mb-8 relative z-10 text-center">Creative Skills</h3>

          <div className="grid sm:grid-cols-2 gap-8 relative z-10">

            {/* Left — pro creative */}
            <div>
              <p className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                Professional Creative
              </p>
              <div className="flex flex-wrap gap-3">
                {creativePro.map(({ label, emoji }, i) => (
                  <span
                    key={label}
                    style={{ transform: `rotate(${tileRotations[i]}deg)` }}
                    className="inline-flex flex-col items-center gap-1 px-4 py-3 rounded-2xl bg-white/70 shadow-sm text-on-surface font-label font-bold text-sm cursor-default hover:scale-110 hover:rotate-1 hover:shadow-md hover:bg-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  >
                    <span className="text-2xl leading-none" aria-hidden="true">{emoji}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — hobbies */}
            <div>
              <p className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                Hobbies &amp; Side Projects
              </p>
              <div className="flex flex-wrap gap-3">
                {creativeHobbies.map(({ label, emoji }, i) => (
                  <span
                    key={label}
                    style={{ transform: `rotate(${tileRotations[i + creativePro.length]}deg)` }}
                    className="inline-flex flex-col items-center gap-1 px-4 py-3 rounded-2xl bg-white/70 shadow-sm text-on-surface font-label font-bold text-sm cursor-default hover:scale-110 hover:-rotate-1 hover:shadow-md hover:bg-white transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                  >
                    <span className="text-2xl leading-none" aria-hidden="true">{emoji}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
