
import { GraduationCap, MapPin, CalendarDays, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Science (M.Sc.)",
    field: "Web Engineering",
    university: "Chemnitz University of Technology",
    location: "Chemnitz, Germany",
    period: "Oct 2025 – Present",
    status: "In Progress",
    description:
      "Graduate studies focusing on web engineering, software architecture, distributed systems, databases, and modern web technologies.",
    subjects: [
      "Web Engineering",
      "Software Architecture",
      "Distributed Systems",
      "Database Systems",
      "Data Science",
      "Cloud Computing"
    ]
  },
  {
    degree: "Bachelor of Engineering (B.Eng.)",
    field: "Computer Engineering — Software",
    university: "Islamic Azad University, Isfahan (Khorasgan)",
    location: "Isfahan, Iran",
    period: "Sep 2019 – Jul 2021",
    status: "Completed",
    description:
      "Studied computer engineering with an emphasis on software development, programming, algorithms, and database systems.",
    subjects: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Database Systems",
      "Software Testing",
      "Artificial Intelligence"
    ]
  },
  {
    degree: "Associate Degree",
    field: "Computer Software",
    university: "Technical and Vocational University",
    location: "Arak, Iran",
    period: "Feb 2016 – Aug 2018",
    status: "Completed",
    description:
      "Studied foundational computer science and practical software development.",
    subjects: [
      "Programming",
      "Software Development",
      "Computer Fundamentals"
    ]
  }
];

function Education({ darkMode }) {
  return (
    <section
      id="education"
      className="py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Main panel */}
        <div
          className={`portfolio-panel ${
            darkMode ? "" : "light"
          }`}
        >
          {/* Section heading */}
          <div className="mb-12">
            <p className="text-purple-400 font-semibold mb-3">
              ACADEMIC BACKGROUND
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education
            </h2>

            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              My academic journey in computer science
              and software engineering.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-purple-500/40 ml-3">

            {education.map((item) => (
              <div
                key={`${item.degree}-${item.university}`}
                className="relative pl-8 md:pl-10 pb-10 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-purple-500 border-4 border-purple-200" />

                {/* Education card */}
                <div
                  className={`rounded-xl border p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "bg-white/5 border-white/10 hover:border-purple-400/50"
                      : "bg-gray-50 border-gray-200 hover:border-purple-400"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 text-purple-400 text-sm mb-4">
                    <CalendarDays size={16} />
                    <span>{item.period}</span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap
                      size={25}
                      className="text-purple-400 shrink-0"
                    />

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">
                        {item.degree}
                      </h3>

                      <p className="text-purple-400 font-medium mt-1">
                        {item.field}
                      </p>
                    </div>
                  </div>

                  <h4 className="font-semibold mt-5">
                    {item.university}
                  </h4>

                  <div className={`flex items-center gap-2 mt-2 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>

                  <p className={`leading-7 mt-5 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}>
                    {item.description}
                  </p>

                  {/* Subjects */}
                  <div className="flex items-center gap-2 mt-6 mb-3">
                    <BookOpen size={17} className="text-purple-400" />
                    <span className="font-semibold text-sm">
                      Relevant Coursework
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.subjects.map((subject) => (
                      <span
                        key={subject}
                        className={`px-3 py-1.5 rounded-md text-sm ${
                          darkMode
                            ? "bg-purple-400/10 text-purple-200"
                            : "bg-purple-50 text-purple-700"
                        }`}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="mt-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "Completed"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-purple-500/15 text-purple-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
