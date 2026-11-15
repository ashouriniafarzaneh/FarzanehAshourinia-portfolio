
import { UserRound, MapPin, GraduationCap, Code2 } from "lucide-react";

function About({ darkMode }) {
  const highlights = [
    {
      icon: Code2,
      title: "Software Engineering",
      detail: "Java, Spring Boot & REST APIs",
    },
    {
      icon: GraduationCap,
      title: "M.Sc. Web Engineering",
      detail: "Chemnitz University of Technology",
    },
    {
      icon: MapPin,
      title: "Based in Germany",
      detail: "Chemnitz, Saxony",
    },
  ];

  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`portfolio-panel ${
            darkMode ? "" : "light"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <UserRound className="text-purple-400" size={26} />
            <p className="text-purple-400 font-semibold">
              GET TO KNOW ME
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h2>

          <div className="max-w-3xl space-y-5 leading-8">
            <p>
              I'm Farzaneh Ashourinia, a Software Engineer
              with around four years of professional
              experience in software development.
            </p>

            <p>
              My background includes building enterprise
              healthcare applications using Java,
              Spring Boot, REST APIs and relational
              databases.
            </p>

            <p>
              I'm currently pursuing a Master's degree
              in Web Engineering at Chemnitz University
              of Technology, Germany, while working
              as a Student Research Assistant.
            </p>

            <p>
              I'm expanding my knowledge in Data Science,
              Artificial Intelligence and modern
              software technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`rounded-xl border p-5 ${
                    darkMode
                      ? "bg-white/5 border-white/10"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <Icon
                    size={24}
                    className="text-purple-400 mb-4"
                  />

                  <h3 className="font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm ${
                      darkMode
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
