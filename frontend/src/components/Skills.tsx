interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';
}

const Skills = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'JavaScript', level: 'Expert', category: 'Frontend' },
    { name: 'TypeScript', level: 'Advanced', category: 'Frontend' },
    { name: 'React', level: 'Advanced', category: 'Frontend' },
    { name: 'Vue.js', level: 'Advanced', category: 'Frontend' },
    { name: 'HTML', level: 'Expert', category: 'Frontend' },
    { name: 'CSS/LESS/SCSS', level: 'Expert', category: 'Frontend' },
    { name: 'HTL (Sightly)', level: 'Advanced', category: 'Frontend' },
    { name: 'jQuery', level: 'Advanced', category: 'Frontend' },
    { name: 'Gatsby', level: 'Intermediate', category: 'Frontend' },

    // Backend
    { name: 'Java', level: 'Advanced', category: 'Backend' },
    { name: 'Node.js', level: 'Intermediate', category: 'Backend' },
    { name: 'REST APIs', level: 'Advanced', category: 'Backend' },
    { name: 'Adobe Experience Manager', level: 'Expert', category: 'Backend' },

    // Tools
    { name: 'Git', level: 'Expert', category: 'Tools' },
    { name: 'NPM', level: 'Advanced', category: 'Tools' },
    { name: 'Webpack', level: 'Advanced', category: 'Tools' },
    { name: 'Storybook', level: 'Advanced', category: 'Tools' },
    { name: 'GitHub Copilot', level: 'Advanced', category: 'Tools' },
    { name: 'Claude Code', level: 'Advanced', category: 'Tools' },
  ];

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-coral text-white';
      case 'Intermediate': return 'bg-peach text-white';
      case 'Advanced': return 'bg-mint text-white';
      case 'Expert': return 'bg-rose text-white';
      default: return 'bg-sage text-white';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return '🎨';
      case 'Backend': return '⚙️';
      case 'Tools': return '🔧';
      default: return '✨';
    }
  };

  return (
    <section id="skills" className="py-20 bg-garden cable-knit relative">
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-white bg-opacity-85"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Technical Skills & Crafts
        </h2>
        <p className="text-center text-gray-700 mb-12 text-lg">
          Like combining different yarns to create beautiful patterns! 🧶
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="personality-card p-6 rounded-lg bounce-hover">
                <div className="text-center mb-4">
                  <span className="text-3xl mb-2 block">{getCategoryIcon(category)}</span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <div key={skill.name} className="flex flex-col">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                      </div>
                      <div className="flex justify-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold bounce-hover ${getLevelColor(skill.level)}`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Fun hobby skills section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Creative Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="personality-card p-4 rounded-full bounce-hover">
                <span className="text-2xl">🧶</span>
                <div className="text-sm font-semibold text-gray-700 mt-2">Cable Knitting</div>
              </div>
              <div className="personality-card-alt p-4 rounded-full bounce-hover">
                <span className="text-2xl">🍞</span>
                <div className="text-sm font-semibold text-gray-700 mt-2">Sourdough Master</div>
              </div>
              <div className="personality-card-accent p-4 rounded-full bounce-hover">
                <span className="text-2xl">🎨</span>
                <div className="text-sm font-semibold text-gray-700 mt-2">Color Theory</div>
              </div>
              <div className="personality-card p-4 rounded-full bounce-hover">
                <span className="text-2xl">📐</span>
                <div className="text-sm font-semibold text-gray-700 mt-2">Pattern Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;