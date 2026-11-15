
import {
  Server,
  Code2,
  Database,
  Globe,
  Wrench,
  BrainCircuit
} from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "Hibernate",
      "REST APIs",
      "Web Services"
    ]
  },
  {
    title: "Full-Stack Development",
    icon: Code2,
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "MERN Stack"
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "Oracle Database",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "RDBMS"
    ]
  },
  {
    title: "Web Development & CMS",
    icon: Globe,
    skills: [
      "HTML",
      "CSS",
      "WordPress",
      "WooCommerce",
      "Theme Customization",
      "Plugin Customization"
    ]
  },
  {
    title: "Software Engineering",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "Software Testing",
      "System Maintenance",
      "JasperReports"
    ]
  },
  {
    title: "Robotics & Data Science",
    icon: BrainCircuit,
    skills: [
      "ROS 2",
      "Robotics",
      "Python",
      "Pandas",
      "NumPy",
      "Data Analysis"
    ]
  }
];

function Skills({ darkMode }) {
  return (
    <section
      id="skills"
      className="py-20 px-6 scroll-mt-20"
    >
      {/* Unified background panel */}
      <div
        className={`portfolio-panel max-w-6xl mx-auto ${
          darkMode ? "" : "light"
        }`}
      >
        {/* Section heading */}
        <div className="mb-12">
          <p className="text-purple-400 font-medium mb-3">
            MY EXPERTISE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>

          <p
            className={
              darkMode
                ? "text-gray-300"
                : "text-gray-600"
            }
          >
            Technologies and tools I work with.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className={`p-6 rounded-xl border
                  transition-all duration-300
                  hover:-translate-y-1
                  ${
                    darkMode
                      ? "bg-[#1c1c28]/90 border-white/10 hover:border-purple-400/50 text-white"
                      : "bg-white/90 border-gray-200 hover:border-purple-400 text-gray-900"
                  }`}
              >
                {/* Category heading */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2 rounded-lg ${
                      darkMode
                        ? "bg-purple-400/10"
                        : "bg-purple-100"
                    }`}
                  >
                    <Icon
                      size={24}
                      className="text-purple-400"
                    />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-md text-sm
                        transition-colors duration-200
                        ${
                          darkMode
                            ? "bg-purple-400/10 text-purple-200 hover:bg-purple-400/20"
                            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
