import { ArrowRight, Mail, Download } from "lucide-react";
function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center
           justify-center pt-24 pb-12 px-4
           sm:px-6 md:pt-28 md:pb-16"
    >
      {/* One unified dark panel */}
      <div
        className={`w-full max-w-5xl rounded-2xl md:rounded-3xl
         border shadow-2xl
         px-5 py-10 sm:px-8 sm:py-14
         md:px-16 md:py-20
          ${
            darkMode
              ? "bg-[#101017]/90 border-white/10"
              : "bg-white/90 border-gray-200"
          }`}
      >
        <div className="max-w-3xl">

          <p className="text-purple-400 text-sm font-semibold tracking-widest mb-5">
            SOFTWARE ENGINEER
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-purple-400">
              Farzaneh.
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Building software that makes an impact.
          </h2>

          <p
            className={`text-base leading-8 mb-9 ${
              darkMode
                ? "text-gray-200"
                : "text-gray-700"
            }`}
          >
            Software Engineer with professional experience
            in Java, Spring Boot, REST APIs and SQL.
            Currently pursuing an M.Sc. in Web Engineering
            at Chemnitz University of Technology, Germany.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2
                bg-purple-600 hover:bg-purple-700
                text-white px-6 py-3 rounded-lg
                font-medium transition-colors"
            >
              Explore My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className={`inline-flex items-center gap-2
                px-6 py-3 rounded-lg border
                font-medium transition-colors
                ${
                  darkMode
                    ? "border-purple-400 text-white hover:bg-purple-400/10"
                    : "border-purple-600 text-purple-700 hover:bg-purple-50"
                }`}
            >
              <Mail size={18} />
              Contact Me
            </a>

<a
  href={`${import.meta.env.BASE_URL}Farzaneh_Ashourinia_CV.pdf`}
  download="Farzaneh_Ashourinia_CV.pdf"
  className={`inline-flex items-center gap-2
    px-6 py-3 rounded-lg border
    font-medium transition-colors
    ${
      darkMode
        ? "border-white/30 text-white hover:bg-white/10"
        : "border-gray-300 text-gray-900 hover:bg-gray-100"
    }`}
 >
  <Download size={18} />
  Download CV
</a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
