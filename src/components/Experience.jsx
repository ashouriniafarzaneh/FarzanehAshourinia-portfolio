
import {
  Briefcase,
  MapPin,
  CalendarDays
} from "lucide-react";

const experiences = [
  {
    role: "Student Research Assistant — Robotics",
    company: "Chemnitz University of Technology",
    department: "Professorship of Production Systems and Processes",
    location: "Chemnitz, Germany",
    period: "Nov 2026 – Present",
    description:
      "Supporting research on reusable robotics components and their integration with ROS 2.",
    technologies: ["ROS 2", "Robotics", "Research"]
  },
  {
    role: "Student Research Assistant — Innovation",
    company: "Chemnitz University of Technology",
    department: "Innovation Research and Technology Management",
    location: "Chemnitz, Germany",
    period: "Oct 2026 – Present",
    description:
      "Supporting research activities and developing English-language digital content for academic programs.",
    technologies: ["Web Content", "Research", "Documentation"]
  },

{
  role: "Freelance Full-Stack Developer",
  company: "Self-Employed",
  department: "Freelance Web Development",
  location: "Iran (Remote)",
  period: "Sep 2023 – Oct 2025",
  description:
    "Developed and customized web applications and WordPress websites, integrated REST APIs and payment gateways, and delivered web solutions for clients.",
  technologies: [
    "JavaScript",
    "WordPress",
    "HTML5",
    "CSS3",
    "REST APIs",
    "Payment Gateways"]
},
  {
    role: "Software Engineer",
    company: "Demis",
    department: "Healthcare Software Systems",
    location: "Isfahan, Iran",
    period: "Jul 2020 – Sep 2023",
    description:
      "Developed and maintained enterprise healthcare insurance systems, including REST APIs, billing workflows and database-driven applications.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Oracle SQL",
      "Git"
    ]
  },
  {
    role: "Android Developer",
    company: "Nazar Pardaz Kara",
    department: "Software Development",
    location: "Iran",
    period: "Apr 2018 – Jun 2019",
    description:
      "Developed Android applications using Java and SQL.",
    technologies: ["Java", "Android", "SQL"]
  }
];

function Experience({ darkMode }) {
  return (
    <section
      id="experience"
      className="py-20 px-6 scroll-mt-20"
    >
      {/* Main unified glass panel */}
      <div
        className={`portfolio-panel max-w-6xl mx-auto ${
          darkMode ? "" : "light"
        }`}
      >
        {/* Section heading */}
        <div className="mb-14">
          <p className="text-purple-400 font-medium mb-3">
            MY CAREER JOURNEY
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>

          <p
            className={
              darkMode
                ? "text-gray-300"
                : "text-gray-600"
            }
          >
            From software engineering to university research.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-500/40 ml-2 md:ml-5">

          {experiences.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="relative pl-6 md:pl-12 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-[9px] top-6
                  w-4 h-4 rounded-full
                  bg-purple-500 border-4
                  border-purple-200"
              />

              {/* Experience card */}
              <div
                className={`p-6 md:p-8 rounded-xl border
                  transition-all duration-300
                  hover:-translate-y-1
                  ${
                    darkMode
                      ? "bg-[#1c1c28]/90 border-white/10 hover:border-purple-400/50 text-white"
                      : "bg-white/90 border-gray-200 hover:border-purple-400 text-gray-900"
                  }`}
              >
                {/* Employment period */}
                <div className="flex flex-wrap items-center gap-2 mb-4 text-purple-400 text-sm">
                  <CalendarDays size={16} />
                  <span>{job.period}</span>
                </div>

                {/* Job title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {job.role}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase
                    size={17}
                    className="text-purple-400 shrink-0"
                  />
                  <span className="font-semibold">
                    {job.company}
                  </span>
                </div>

                {/* Department */}
                <p
                  className={`text-sm mb-3 ${
                    darkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {job.department}
                </p>

                {/* Location */}
                <div
                  className={`flex items-center gap-2 text-sm mb-5 ${
                    darkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>

                {/* Description */}
                <p
                  className={`leading-7 mb-6 ${
                    darkMode
                      ? "text-gray-200"
                      : "text-gray-700"
                  }`}
                >
                  {job.description}
                </p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 rounded-md text-sm ${
                        darkMode
                          ? "bg-purple-400/15 text-purple-200"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;
