
import { ExternalLink, FolderGit2 } from "lucide-react";
// Add your real projects here
const projects = [];

function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className="py-20 px-6 scroll-mt-20"
    >
      <div
        className={`portfolio-panel max-w-6xl mx-auto ${
          darkMode ? "" : "light"
        }`}
      >
        {/* Section heading */}
        <div className="mb-12">
          <p className="text-purple-400 font-medium mb-3">
            MY WORK
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>

          <p
            className={
              darkMode
                ? "text-gray-300"
                : "text-gray-600"
            }
          >
            A selection of projects showcasing my
            software engineering skills.
          </p>
        </div>

        {/* Project cards */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`rounded-xl border overflow-hidden
                  transition-all duration-300
                  hover:-translate-y-1
                  ${
                    darkMode
                      ? "bg-[#1c1c28]/90 border-white/10 hover:border-purple-400/50"
                      : "bg-white/90 border-gray-200 hover:border-purple-400"
                  }`}
              >
                {/* Project image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FolderGit2
                      size={24}
                      className="text-purple-400"
                    />

                    <h3 className="text-xl font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <p
                    className={`mb-5 leading-7 ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-md text-sm ${
                          darkMode
                            ? "bg-purple-400/10 text-purple-200"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project links */}
                  <div className="flex flex-wrap gap-5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                      >
                        <FolderGit2 size={18} />
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div
            className={`rounded-xl border p-10 text-center ${
              darkMode
                ? "bg-[#1c1c28]/90 border-white/10"
                : "bg-white/90 border-gray-200"
            }`}
          >
            <FolderGit2
              size={40}
              className="text-purple-400 mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold mb-3">
              Projects Coming Soon
            </h3>

            <p
              className={
                darkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }
            >
              I'm preparing a selection of my
              software development projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
