export default function About() {
  return (
    <div className="pb-30">
      <div
        id="about"
        className="2xl:ml-[20%] sm:justify-center rounded-lg p-6 max-w-4xl mx-auto flex flex-col justify-center"
      >
        <div className="relative flex items-center md:justify-start mb-12 gap-6">
          <h1 className="text-4xl font-inter font-bold text-gray-300 text-center md:text-left">
            <span className="text-[#A29BFE] font-mono">01.</span> Get To Know Me
          </h1>
          <div className="h-0.5 w-81 bg-gradient-to-r from-[#4e3e4e] to-slate-950 rounded-md"></div>
        </div>

        <div className="">
          <div className="flex flex-col mb-15 sm:p-8 bg-gradient-to-br from-slate-950/20 to-slate-800/20 rounded-2xl shadow-lg border border-slate-500/20 transition-opacity duration-300 ease-in-out">
            <p className="text-gray-400 text-xl leading-relaxed mb-4">
              Hello! My name is Tasnim and I enjoy building complex systems and
              engaging digital experiences. My interest in software development
              started close to 3 years ago and since then, I've been constantly
              learning, experimenting, and rebuilding software across various
              domains—from distributed systems to fullstack applications. My
              primary focus is distributed systems and backend development, but
              I also enjoy creating websites that can leave a tangible impact.
            </p>
            <p className="text-gray-400 text-xl leading-relaxed mb-4">
              On campus, I founded the Artificial Intelligence Club @ FSC where
              me and my fellow officers have built an active community of 70+
              members for those with a shared interest in A.I. I've also served
              as an organizer, mentor and judge for{" "}
              <a
                href="https://www.ramhacks.com/"
                target="_blank"
                className="text-blue-400"
              >
                RamHacks
              </a>
              , a new hackathon that was able to get 80 participants and secure
              nearly $1,000 in prizes its first time around. Not too bad!
            </p>
            <p className="text-gray-400 text-xl leading-relaxed mb-18">
              When I'm not coding, you can find me going on long-distance runs,
              playing video games, traveling, or learning a new skill for fun!
            </p>
          </div>

          <div className="max-w-3xl">
            <h2 className="font-inter font-bold text-3xl text-gray-300">
              Skills
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mt-3 mb-4">
              And here's some technologies I'm familiar with:
            </p>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold font-inter text-gray-300 mb-1">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="inline-flex items-center bg-[#A29BFE]/10 text-purple-300 font-mono text-xs sm:text-sm px-3 py-1 rounded-full border border-purple-500/20 shadow-sm hover:bg-purple-400/20 transition-colors duration-200 cursor-pointer"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold font-inter text-gray-300 mb-1">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {frameworks.map((fr) => (
                  <span
                    key={fr}
                    className="inline-flex items-center bg-[#A29BFE]/10 text-purple-300 font-mono text-xs sm:text-sm px-3 py-1 rounded-full border border-purple-500/20 shadow-sm hover:bg-purple-400/20 transition-colors duration-200 cursor-pointer"
                  >
                    {fr}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold font-inter text-gray-300 mb-1">
                Tools/Other
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center bg-[#A29BFE]/10 text-purple-300 font-mono text-xs sm:text-sm px-3 py-1 rounded-full border border-purple-500/20 shadow-sm hover:bg-purple-400/20 transition-colors duration-200 cursor-pointer"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

const languages = [
  "Java",
  "Golang",
  "Python",
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Vue",
  "Node.js",
  "Express",
  "HTML/CSS",
  "Protobuf",
];
const frameworks = [
  "Vue",
  "React",
  "Express",
  "Next.js",
  "FastAPI",
  "Vitest",
  "Jest",
  "TensorFlow",
  "Spring Boot",
  "JUnit",
];
const tools = [
  "Git",
  "Docker",
  "Kubernetes",
  "AWS",
  "Google Cloud",
  "Node",
  "gRPC",
  "PostgreSQL",
  "SQLite",
  "Supabase",
  "OpenCV",
];
