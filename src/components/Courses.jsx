
import {
  Award,
  ExternalLink,
  BookOpen
} from "lucide-react";

// Courses and certifications
const certifications = [
  {
    title: "Java Foundations Professional Certificate",
    issuer: "JetBrains",
    date: "October 2026",
    status: "Completed",
    url: "https://www.linkedin.com/in/farzaneh-ashourinia/overlay/Certifications/1322583187/treasury/?profileId=ACoAACu8EEoBCCv5KFGVAMC6Q8OKI3fUmNskIPU"
  },
  {
    title: "WordPress Essential Training",
    issuer: "LinkedIn Learning",
    date: "September 2026",
    status: "Completed",
    url: "https://www.linkedin.com/in/farzaneh-ashourinia/overlay/Certifications/1162434538/treasury/?profileId=ACoAACu8EEoBCCv5KFGVAMC6Q8OKI3fUmNskIPU"
  },
  {
    title: "Anaconda Python for Data Science Professional Certificate",
    issuer: "Anaconda / LinkedIn Learning",
    date: "",
    status: "Completed",
    url: "https://www.linkedin.com/learning/certificates/634d2ab0a444db8c5391f1c262ceb541d5a6df5a65a173be1b25d442cdda0865?trk=share_certificate"
  }
];

function Courses({ darkMode }) {
  return (
    <section
      id="certifications"
      className="py-20 px-6 scroll-mt-20"
    >
      {/* Main unified panel */}
      <div
        className={`portfolio-panel max-w-6xl mx-auto ${
          darkMode ? "" : "light"
        }`}
      >
        {/* Section heading */}
        <div className="mb-12">
          <p className="text-purple-400 font-medium mb-3">
            CONTINUOUS LEARNING
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Courses & Certifications
          </h2>

          <p
            className={
              darkMode
                ? "text-gray-300"
                : "text-gray-600"
            }
          >
            Professional certifications and ongoing learning.
          </p>
        </div>

        {/* Certification cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => {
            const completed = cert.status === "Completed";

            return (
              <div
                key={cert.title}
                className={`p-6 rounded-xl border
                  transition-all duration-300
                  hover:-translate-y-1
                  ${
                    darkMode
                      ? "bg-[#1c1c28]/90 border-white/10 hover:border-purple-400/50 text-white"
                      : "bg-white/90 border-gray-200 hover:border-purple-400 text-gray-900"
                  }`}
              >
                <div className="flex items-start gap-4">
                  {/* Certificate icon */}
                  <div className="p-3 rounded-lg bg-purple-500/10 shrink-0">
                    {completed ? (
                      <Award
                        size={26}
                        className="text-purple-400"
                      />
                    ) : (
                      <BookOpen
                        size={26}
                        className="text-purple-400"
                      />
                    )}
                  </div>

                  {/* Certificate details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-2">
                      {cert.title}
                    </h3>

                    <p className="text-purple-400 text-sm font-medium">
                      {cert.issuer}
                    </p>

                    {cert.date && (
                      <p
                        className={`text-sm mt-2 ${
                          darkMode
                            ? "text-gray-300"
                            : "text-gray-600"
                        }`}
                      >
                        Issued: {cert.date}
                      </p>
                    )}

                    {/* Status badge */}
                    <span
                      className={`inline-block mt-4
                        px-3 py-1 rounded-full text-xs font-medium
                        ${
                          completed
                            ? "bg-green-500/15 text-green-400"
                            : "bg-yellow-500/15 text-yellow-400"
                        }`}
                    >
                      {cert.status}
                    </span>

                    {/* Credential link */}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 mt-5
                          text-purple-400 hover:text-purple-300
                          transition-colors"
                      >
                        View Credential
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Courses;
