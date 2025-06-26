export default function About() {
  return (
    <div className="relative absolute inset-0 bg-[radial-gradient(circle_650px_at_99%_800px,#4e3e3e,transparent)]">
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
            started roughly 3 years ago and since then, I've been constantly
            learning, experimenting, and rebuilding software across various
            domains—from distributed systems to fullstack applications. My primary
            focus is distributed systems and backend development,
            but I also enjoy creating websites that can leave a tangible impact.
          </p>
          <p className="text-gray-400 text-xl leading-relaxed mb-4">
            On campus, I founded the Artificial Intelligence Club @ FSC where
            I, along with my fellow officers, have built an active community of
            70+ members for those with a shared interest in A.I. I've also been
            a key organizer, mentor and judge for <a href="https://www.ramhacks.com/" target="_blank" className="text-blue-400 underline">RamHacks</a>, a new hackathon that
            was able to get 80 participants and secure nearly $1,000 in prizes
            its first time around. Not too bad!
          </p>
          <p className="text-gray-400 text-xl leading-relaxed mb-4">
            When I'm not coding, you can find me going on long-distance runs,
            playing video games, traveling, or learning a new skill for fun!
          </p>
          <p>insert photo gallery carousel thing to the right</p>
        </div>
      </div>
    </div>
  );
}
