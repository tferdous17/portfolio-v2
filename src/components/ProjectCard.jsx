export default function ProjectCard({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  stars,
}) {
  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-500/20 rounded-2xl p-6 sm:p-8 gap-4 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-slate-800/40 transition-all duration-300 ease-in-out cursor-pointer">
      <h1 className="text-2xl sm:text-3xl font-bold font-inter text-blue-100 tracking-tight">
        {title}
      </h1>
      <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center bg-blue-500/10 text-blue-200 font-mono text-xs sm:text-sm px-3 py-1 rounded-full border border-blue-500/20 shadow-sm hover:bg-blue-500/20 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto items-center">
        <a href={githubLink} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="29"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github hover:scale-110 hover:shadow-lg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
        {demoLink != "" ? (
          <a href={demoLink} target="_blank">
            <svg
              class="text-gray-800 dark:text-white hover:scale-110 hover:shadow-lg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
              />
            </svg>
          </a>
        ) : null}

        <div className="flex ml-auto text-md text-center gap-1">
          <svg
            class="text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-width="2"
              d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
            />
          </svg>
          <span>{stars}</span>
        </div>
      </div>
    </div>
  );
}
