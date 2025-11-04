interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Enterprise AEM Component Library',
      description: 'Developed and maintained a comprehensive component library for Adobe Experience Manager, serving multiple enterprise client websites with consistent, accessible, and responsive components.',
      technologies: ['JavaScript', 'HTL (Sightly)', 'Java', 'CSS/LESS', 'Adobe Experience Manager', 'Storybook'],
      githubUrl: 'https://github.com/kimalajoy',
    },
    {
      id: 2,
      title: 'Accessible E-Commerce Solutions',
      description: 'Built enterprise-level e-commerce experiences with focus on accessibility compliance, responsive design, and performance optimization for high-traffic retail clients.',
      technologies: ['React', 'Vue.js', 'TypeScript', 'WCAG 2.1', 'Performance Optimization'],
      githubUrl: 'https://github.com/kimalajoy',
    },
    {
      id: 3,
      title: 'Multi-Brand Design System',
      description: 'Architected and implemented a scalable design system supporting multiple brand identities while maintaining code reusability and design consistency across enterprise applications.',
      technologies: ['React', 'Storybook', 'CSS/SCSS', 'Design Tokens', 'Webpack'],
    },
    {
      id: 4,
      title: 'Combat Robot Control Systems',
      description: 'Personal project building autonomous control systems for combat robotics competitions, combining hardware integration with responsive user interfaces for real-time robot control.',
      technologies: ['JavaScript', 'Hardware Integration', 'Real-time Systems', 'IoT'],
    },
    {
      id: 5,
      title: 'Knitting Pattern Digitization',
      description: 'Created digital tools for converting traditional knitting patterns into interactive, accessible formats with progress tracking and customization features.',
      technologies: ['React', 'Canvas API', 'Pattern Recognition', 'User Experience Design'],
    },
    {
      id: 6,
      title: 'Collaborative Development Tools',
      description: 'Enhanced team productivity through custom development tools and workflows, improving code quality and deployment processes for enterprise client projects.',
      technologies: ['Git', 'GitHub Actions', 'Code Review Automation', 'Developer Experience'],
    },
  ];

  const getProjectIcon = (id: number) => {
    const icons = ['⚡', '🛍️', '🎨', '🤖', '🧶', '🔧'];
    return icons[id - 1] || '✨';
  };

  return (
    <section id="projects" className="py-20 bg-sunset bread-crust relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Creative Projects & Apps
        </h2>
        <p className="text-center text-gray-700 mb-8 text-lg">
          Where coding meets crafting - functional apps with personality! ✨
        </p>

        <div className="text-center mb-12">
          <a
            href="/movies"
            className="inline-block bg-rose text-black px-6 py-3 rounded-lg font-semibold bounce-hover shadow-lg border-2 border-black"
          >
            🎬 Did They Age Well? - Movie Database
          </a>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="personality-card rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <span className="text-4xl mb-2 block">{getProjectIcon(project.id)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className="bg-coral text-black px-3 py-1 rounded-full text-xs font-semibold bounce-hover"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 justify-center">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-coral text-black px-4 py-2 rounded-full hover:bg-coral-light transition-colors text-sm font-semibold bounce-hover"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-mint text-black px-4 py-2 rounded-full hover:bg-mint-light transition-colors text-sm font-semibold bounce-hover"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Try It!
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;