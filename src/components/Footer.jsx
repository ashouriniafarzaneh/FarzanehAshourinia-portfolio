
function Footer({ darkMode }) {
  return (
    <footer className="px-6 pb-8 pt-6">
      <div
        className={`max-w-6xl mx-auto rounded-2xl
          border px-6 py-6
          flex flex-col md:flex-row
          items-center justify-between gap-4
          ${
            darkMode
              ? "bg-[#101017]/85 border-white/10 text-gray-300"
              : "bg-white/90 border-gray-200 text-gray-700"
          }`}
      >
        <p className="font-semibold">
          Farzaneh<span className="text-purple-400">.</span>
        </p>

        <p className="text-sm text-center">
          © {new Date().getFullYear()} Farzaneh Ashourinia.
          All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm text-purple-400 hover:text-purple-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
