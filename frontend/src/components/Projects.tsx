interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Cluster',
      description: 'A word-grouping puzzle game inspired by Connections. Find the hidden links between words and sort them into clusters — tricky categories, satisfying solves.',
      technologies: ['React', 'TypeScript', 'PocketBase', 'CSS'],
      githubUrl: 'https://github.com/kimalajoy/cluster',
      liveUrl: 'https://cluster.pockethost.io/',
    },
    {
      id: 2,
      title: 'NYC Zip Code Heatmap',
      description: 'Interactive choropleth map visualizing values across New York City zip codes. Each zip code is color-scaled from 0 to 1, making spatial data patterns immediately readable at a glance.',
      technologies: ['React', 'TypeScript', 'GeoJSON', 'Data Visualization'],
      liveUrl: 'https://heatmap.pockethost.io/',
    },
    {
      id: 3,
      title: 'Did They Age Well?',
      description: 'A movie database app for rating how well films hold up over time. Browse, search, and submit your own verdicts on whether a classic deserves its reputation.',
      technologies: ['React', 'TypeScript', 'PocketBase', 'CSS'],
      liveUrl: '/movies',
    },
    {
      id: 4,
      title: 'JobSearch CLI',
      description: 'A personal CLI tool that fetches job listings, ranks them by relevance using Claude AI, and optionally tailors your resume for each top match — all without applying to anything automatically.',
      technologies: ['Node.js', 'Claude AI', 'CLI', 'TypeScript'],
      githubUrl: 'https://github.com/kimalajoy/jobSearch',
    },
  ];

  const icons = ['🧩', '🗺️', '🎬', '🤖'];

  /* Alternate dog-ear colours per card */
  const dogEarColors = [
    'text-primary',
    'text-secondary',
    'text-tertiary',
    'text-primary',
  ];

  return (
    <section id="projects" className="pattern-grid py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="font-headline font-extrabold text-5xl md:text-7xl tracking-tight text-on-surface mb-6">
          Creative <span className="heading-accent">Projects</span>
        </h2>
        <p className="font-body text-on-surface-variant text-lg mb-8 max-w-2xl">
          Where coding meets crafting — functional apps with personality! ✨
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={project.id} className="personality-card group hover-lift flex flex-col">
              {/* Dog-ear */}
              <div className={`dog-ear ${dogEarColors[i]} bg-current`}></div>

              <div className="p-8 flex flex-col flex-1 relative z-10">
                <div className="text-4xl mb-4" aria-hidden="true">{icons[i]}</div>

                <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag-tech">{tech}</span>
                  ))}
                </div>

                <h3 className="font-headline font-bold text-xl text-on-surface mb-3">
                  {project.title}
                </h3>

                <p className="font-body text-on-surface-variant text-sm leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View code for ${project.title} on GitHub (opens in new tab)`}
                      className="font-headline font-bold text-sm text-[#00635c] flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300"
                    >
                      View Code
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith('/') ? undefined : '_blank'}
                      rel={project.liveUrl.startsWith('/') ? undefined : 'noopener noreferrer'}
                      aria-label={`View live demo of ${project.title}${project.liveUrl.startsWith('/') ? '' : ' (opens in new tab)'}`}
                      className="font-headline font-bold text-sm text-on-surface-variant flex items-center gap-1.5 hover:text-[#00635c] transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
