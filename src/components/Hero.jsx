
import { ArrowRight, Mail, Download } from "lucide-react";

function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 md:pt-28 md:pb-16"
    >
      <div
        className={`w-full max-w-5xl rounded-2xl md:rounded-3xl
          border shadow-2xl px-5 py-10 sm:px-8 sm:py-14
          md:px-12 md:py-16
          ${
            darkMode
              ? "bg-[#101017]/90 border-white/10"
              : "bg-white/90 border-gray-200"
          }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">

          {/* LEFT: Introduction */}
          <div className="md:col-span-3 min-w-0">

            <p className="text-purple-400 text-sm font-semibold tracking-widest mb-5">
              SOFTWARE ENGINEER
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
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

            {/* PROFILE PHOTO - MOBILE */}
            <div className="md:hidden mb-9 flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Farzaneh Ashourinia"
                className="w-56 sm:w-64 aspect-[3/4] object-cover object-top rounded-2xl border border-purple-400/40 shadow-xl"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Explore My Work
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border font-medium transition-colors ${
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
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border font-medium transition-colors ${
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

          {/* RIGHT: PROFILE PHOTO - DESKTOP */}
          <div className="hidden md:flex md:col-span-2 justify-center">
            <div className="relative w-full max-w-xs">

              <div className="absolute -inset-2 bg-purple-500/15 blur-2xl rounded-3xl" />

              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Farzaneh Ashourinia"
                className="relative w-full aspect-[3/4] object-cover object-top rounded-2xl border border-purple-400/40 shadow-2xl"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
