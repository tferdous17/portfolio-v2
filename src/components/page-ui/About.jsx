export default function About() {
  return (
    <div className="">
      <div
        id="about"
        className="ml-[21rem] rounded-lg p-6 md:p-8 max-w-3xl mx-auto my-10 sticky top-0 h-screen flex flex-col items-center justify-center"
      >
        <div className="relative flex items-center md:justify-start mb-12 gap-6">
          <h1 className="text-4xl font-inter font-bold text-gray-300 text-center md:text-left">
            <span className="text-[#A29BFE] font-mono">01.</span> Get To Know Me
          </h1>
          <div className="h-0.5 w-81 bg-gradient-to-r from-[#4e3e3e] to-slate-950 rounded-md"></div>
        </div>

        <div className="">
          <p className="text-gray-400 text-xl leading-relaxed mb-4">
            Hello! My name is Tasnim and I enjoy building complex systems and
            engaging digital experiences. My interest in software development
            started close to 3 years ago and since then, I've been constantly
            learning, experimenting, and rebuilding software across various
            domains—from distributed systems to fullstack applications. My primary
            focus is distributed systems and backend development,
            but I also enjoy creating websites that can leave a tangible impact.
          </p>
          <p className="text-gray-400 text-xl leading-relaxed mb-4">
            On campus, I founded the Artificial Intelligence Club @ FSC where
            me and my fellow officers have built an active community of
            70+ members for those with a shared interest in A.I. I've also served
            as an organizer, mentor and judge for <a href="https://www.ramhacks.com/" target="_blank" className="text-blue-400">RamHacks</a>, a new hackathon that
            was able to get 80 participants and secure nearly $1,000 in prizes
            its first time around. Not too bad!
          </p>
          <p className="text-gray-400 text-xl leading-relaxed mb-4">
            Here's a few technologies I've been working with lately:
          </p>
          <div>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1 pl-6 text-gray-400 font-mono">
                <li className="relative pl-5 before:content-['➤'] before:absolute before:left-0 before:text-[#A29BFE]">Java</li>
                <li className="-mx-35 relative pl-5 before:content-['➤'] before:absolute before:left-0 before:text-[#A29BFE]">Golang</li>
                <li className="relative pl-5 before:content-['➤'] before:absolute before:left-0 before:text-[#A29BFE]">Python</li>
                <li className="-mx-35 relative pl-5 before:content-['➤'] before:absolute before:left-0 before:text-[#A29BFE]">JavaScript/TypeScript</li>
                <li className="relative pl-5 before:content-['➤'] before:absolute before:left-0 before:text-[#A29BFE]">React</li>
                <li className="-mx-35 relative pl-5 before:content-['➤'] before:absolute before:left-0 before:text-[#A29BFE]">Vue</li>
                <li className="relative pl-5 before:content-['➤'] before:absolute before:left-0 before:text-[#A29BFE]">Node.js</li>
                <li className="-mx-35 relative pl-5 before:content-['➤'] before:absolute before:left-0 before:text-[#A29BFE]">Express</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
