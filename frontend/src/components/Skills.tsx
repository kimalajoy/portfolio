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
    { name: 'Java', level: 'Beginner', category: 'Backend' },
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return '🎨';
      case 'Backend': return '⚙️';
      case 'Tools': return '🔧';
      default: return '✨';
    }
  };

  return (
    <section id="skills" className="py-20 bg-garden cable-knit relative skills-section">
      <div className="container mx-auto px-6 relative z-10 skills-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 skills-title">
          Technical Skills & Crafts
        </h2>
        <p className="text-center text-gray-700 mb-12 text-lg skills-subtitle">
          Like combining different yarns to create beautiful patterns! 🧶
        </p>

        <div className="max-w-6xl mx-auto skills-content">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 skills-grid">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="personality-card p-6 rounded-lg bounce-hover skill-category-card">
                <div className="text-center mb-6 skill-category-header">
                  <span className="text-3xl mb-2 block skill-category-icon">{getCategoryIcon(category)}</span>
                  <h3 className="text-xl font-semibold text-gray-800 skill-category-title">
                    {category}
                  </h3>
                </div>
                <div className="space-y-3 skill-list">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-medium text-sm skill-name">{skill.name}</span>
                        <div className="flex items-center gap-1 skill-yarn-balls">
                          {[1, 2, 3, 4].map((ball) => {
                            const skillLevelNum =
                              skill.level === 'Expert' ? 4 :
                              skill.level === 'Advanced' ? 3 :
                              skill.level === 'Intermediate' ? 2 : 1;

                            const isActive = ball <= skillLevelNum;

                            return (
                              <span
                                key={ball}
                                className={isActive ? 'text-xl' : 'text-lg'}
                                title={skill.level}
                              >
                                {isActive ? '🧶' : '⚪'}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Fun hobby skills section */}
          <div className="mt-20 pt-16 text-center creative-skills-section border-t-4 border-gray-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 creative-skills-title">Creative Skills</h3>
            <div className="flex flex-wrap justify-center gap-4 creative-skills-grid">
              <div className="personality-card p-4 rounded-full bounce-hover creative-skill-item">
                <span className="text-2xl creative-skill-icon">🧶</span>
                <div className="text-sm font-semibold text-gray-700 mt-2 creative-skill-label">Cable Knitting</div>
              </div>
              <div className="personality-card-alt p-4 rounded-full bounce-hover creative-skill-item">
                <span className="text-2xl creative-skill-icon">🍞</span>
                <div className="text-sm font-semibold text-gray-700 mt-2 creative-skill-label">Sourdough Master</div>
              </div>
              <div className="personality-card-accent p-4 rounded-full bounce-hover creative-skill-item">
                <span className="text-2xl creative-skill-icon">🎨</span>
                <div className="text-sm font-semibold text-gray-700 mt-2 creative-skill-label">Color Theory</div>
              </div>
              <div className="personality-card p-4 rounded-full bounce-hover creative-skill-item">
                <span className="text-2xl creative-skill-icon">📐</span>
                <div className="text-sm font-semibold text-gray-700 mt-2 creative-skill-label">Pattern Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;