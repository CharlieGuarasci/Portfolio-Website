import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

function About({ theme, handleThemeSwitch }) {
  // Sun and Moon SVGs
  const sun = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-6">
      <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
      <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd" />
    </svg>

  );

  const moon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
      <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
      <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd" />
    </svg>

  );

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 right-6 top-6"
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        {theme === 'dark' ? sun : moon}
      </button>

      {/* Page Wrapper with Full Screen Coverage */}
      <div className="min-h-screen bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 flex flex-col">
        

    {/* Back to Home Button */}
            <div className="p-4 relative group">
          <Link 
            to="/" 
            className="inline-block text-black dark:text-white hover:opacity-80 transition-opacity"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor" 
              className="size-5 group-hover:scale-110 transition-transform"
            >
              <path 
                fillRule="evenodd" 
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>

          {/* Tooltip */}
          <span className="absolute left-1/2 -translate-x-1/2 -top-10 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Back to Home
          </span>
        </div>





        {/* Content Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl p-6">
            <Title>About Me</Title>
            <p className="text-lg leading-relaxed mb-4">
              Hi, I'm <span className="font-bold text-blue-500">Charlie Guarasci</span>, a passionate Computer Scientist and Web Developer.
              I specialize in creating modern, responsive web applications using cutting-edge technologies like 
              <span className="font-semibold text-pink-500"> React</span>, <span className="font-semibold text-pink-500"> TailwindCSS</span>, and <span className="font-semibold text-pink-500"> Vite</span>.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I love tackling challenging problems and continuously improving my skills. Whether it's building sleek user interfaces
              or optimizing backend performance, I'm always looking to push the boundaries of what's possible in web development.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
