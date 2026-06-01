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

  const creativePills = [
    'Cable Knitting', 'Sourdough Baking', 'Color Theory', 'Pattern Design', 'Combat Robotics', 'Design Handoff', 'Brand Systems',
  ];

  return (
    <section id="skills" className="pattern-waves py-20">
      <div className="max-w-7xl mx-auto px-8">

        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-sm font-bold mb-6">
          4+ YEARS OF CRAFT
        </span>

        <h2 className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface tracking-tight leading-tight mb-6">
          Technical <span className="heading-accent">Mastery</span> &<br />Creative Intuition.
        </h2>

        <p className="font-body text-on-surface-variant text-lg max-w-2xl mb-16 border-l-4 border-primary/30 pl-5">
          Bridging the gap between complex engineering and human-centric design — building accessible,
          performant interfaces that feel as good as they look. Like combining different yarns to create
          beautiful patterns! 🧶
        </p>

        {/* Toolbelt grid — even 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

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

        {/* Creative skills — full-width card */}
        <div className="card-surface-warm p-8 rounded-xl hover-lift transition-all duration-500 relative overflow-hidden group">
          <div className="dog-ear bg-tertiary text-tertiary" aria-hidden="true"></div>
          <h3 className="font-headline font-bold text-xl mb-6 relative z-10 text-center">Creative Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center relative z-10">
            {creativePills.map(label => (
              <span
                key={label}
                className="px-5 py-2 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-label font-bold text-sm hover:scale-110 hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-default"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
