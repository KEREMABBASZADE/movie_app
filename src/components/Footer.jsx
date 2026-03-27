import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const socialBtnClass = `inline-flex items-center justify-center w-9 h-9 rounded-full border m-1 transition-opacity hover:opacity-75 ${
    isDark ? "border-white text-white" : "border-gray-800 text-gray-800"
  }`;

  return (
    <footer
      className={`text-center border-t ${
        isDark
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-gray-800 border-gray-300"
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <section className="mb-4">
          <a href="#!" role="button" className={socialBtnClass}>
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#!" role="button" className={socialBtnClass}>
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#!" role="button" className={socialBtnClass}>
            <i className="bi bi-google"></i>
          </a>
          <a href="#!" role="button" className={socialBtnClass}>
            <i className="bi bi-instagram"></i>
          </a>
        </section>
      </div>

      <div
        className={`text-center px-4 py-3 text-sm border-t ${
          isDark ? "border-gray-700" : "border-gray-200"
        }`}
      >
        © 2026 Copyright:
        <a
          href="https://karamportfoliooo.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className={
            isDark
              ? "text-white hover:opacity-75"
              : "text-gray-800 hover:opacity-75"
          }
        >
          K.A
        </a>
      </div>
    </footer>
  );
}
