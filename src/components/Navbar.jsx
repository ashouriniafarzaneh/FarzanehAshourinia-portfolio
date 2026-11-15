
import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const navItems = [
  "About",
  "Education",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
  "Contact"
];

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkStyle = darkMode
    ? "text-gray-200 hover:text-purple-400"
    : "text-gray-800 hover:text-purple-600";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50
        backdrop-blur-md border-b ${
          darkMode
            ? "bg-[#101017]/90 border-white/10"
            : "bg-white/90 border-gray-200"
        }`}
    >
      <div
        className="max-w-6xl mx-auto px-6
                   h-20 flex items-center
                   justify-between"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Farzaneh
          <span className="text-purple-400">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm transition-colors ${linkStyle}`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Theme toggle and mobile menu */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="text-purple-400 cursor-pointer"
            aria-label="Toggle color theme"
          >
            {darkMode
              ? <Sun size={22} />
              : <Moon size={22} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden cursor-pointer ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen
              ? <X size={26} />
              : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className={`lg:hidden border-t px-6 py-5 ${
            darkMode
              ? "bg-[#101017]/95 border-white/10"
              : "bg-white/95 border-gray-200"
          }`}
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className={`text-base transition-colors ${linkStyle}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
