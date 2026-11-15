
import { MapPin, ExternalLink } from "lucide-react";
import { Mail } from "lucide-react";
function Contact({ darkMode }) {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/farzaneh-ashourinia/"
    },
    {
      name: "GitHub",
      url: "https://github.com/"
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 scroll-mt-20"
    >
      <div
        className={`portfolio-panel max-w-6xl mx-auto ${
          darkMode ? "" : "light"
        }`}
      >
        <p className="text-purple-400 font-medium mb-3">
          GET IN TOUCH
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Connect
        </h2>

        <p
          className={`mb-8 max-w-2xl leading-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I'm always interested in discussing software
          engineering, new technologies, and opportunities
          to collaborate.
        </p>

        <div className="flex items-center gap-3 mb-8">
          <MapPin size={20} className="text-purple-400" />
          <span>Chemnitz, Germany</span>
        </div>
<a
  href="mailto:farzaneh.ashourinia@s2025.tu-chemnitz.de"
  className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
>
  <Mail size={20} />
  <span>farzaneh.ashourinia@s2025.tu-chemnitz.de</span>
</a>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3
                px-6 py-3 rounded-lg border
                transition-all hover:-translate-y-1
                ${
                  darkMode
                    ? "bg-[#1c1c28]/90 border-white/10 hover:border-purple-400"
                    : "bg-white/90 border-gray-200 hover:border-purple-400"
                }`}
            >
              <ExternalLink
                size={18}
                className="text-purple-400"
              />
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
