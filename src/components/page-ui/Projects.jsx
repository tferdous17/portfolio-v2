import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <div className="pb-30">
      <div
        className=" sm:justify-center rounded-lg p-6 md:p-8 max-w-7xl mx-auto flex flex-col justify-center"
      >
        <div className="relative flex-col md:flex-row flex items-center md:justify-start mb-14 gap-6">
          <h1 className="text-4xl font-inter font-bold text-gray-300 text-center md:text-left">
            <span id="projects" className="text-[#A29BFE] font-mono">03.</span> Personal
            Projects
          </h1>
          <div className="h-0.5 w-81 bg-gradient-to-r from-[#3e1e5e] to-slate-950 rounded-md"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((proj) => {
            return (
              <ProjectCard
                title={proj.title}
                description={proj.description}
                technologies={proj.technologies}
                githubLink={proj.githubLink}
                demoLink={proj.demoLink}
                stars={proj.stars}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "genesis",
    description:
      "A high-performance distributed key-value store w/ a log-structured merge tree implementation written in pure Go + gRPC that supports 104,000+ writes per second. Inspired by Bitcask, ScyllaDB and Apache Cassandra.",
    technologies: ["Golang", "gRPC", "Protobuf"],
    githubLink: "https://github.com/tferdous17/genesis",
    demoLink: "",
    stars: 89,
  },
  {
    title: "Flux",
    description:
      "Work-in-progress distributed message queue and event streaming platform engineered for high throughput, maximal scalability, and fault-tolerance across multiple nodes. Inspired by Apache Kafka.",
    technologies: ["Java", "gRPC", "Protobuf"],
    githubLink: "https://github.com/tferdous17/flux",
    demoLink: "",
    stars: 4,
  },
  {
    title: "Atlas",
    description:
      "Atlas is an interactive and visual AI-powered tool that dynamically maps out technologies, prerequisites, and dependencies for any (software) project idea, while saving you hours of time on each idea. Best Software Tool Track Submission for HackKnight 2025.",
    technologies: [
      "React",
      "TypeScript",
      "HTML",
      "TailwindCSS",
      "Python",
      "FastAPI",
      "Supabase",
      "OpenAI",
    ],
    githubLink: "",
    demoLink: "https://devpost.com/software/atlas-wmhu95",
    stars: 2,
  },
  {
    title: "Bounty Streak",
    description:
      "[Best Sustainability Hack Runner Up @ HopperHacks 2025] An app that makes recycling way more fun by letting you scan every disposable you recycle via phone camera and and automatically granting you progress towards growing your very own digital pirate pet! We incentivized recycling by gamifying the process.",
    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
      "Firebase",
      "Google Gen AI",
    ],
    githubLink: "",
    demoLink: "https://devpost.com/software/bounty-streak",
    stars: 1,
  },
  {
    title: "Unity Wallet",
    description:
      "A modern solution for families looking to enforce financial responsibility among themselves by using virtual cash cards to keep track of account balances and spending.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JUnit"],
    githubLink: "https://github.com/tferdous17/unity-wallet",
    demoLink: "",
    stars: 3,
  },
  {
    title: "KinetiSense",
    description:
      "A computer vision-based pose recognition software to estimate your pose via a laptop webcam and provide real-time insights.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    githubLink: "https://github.com/tferdous17/pose-recognition",
    demoLink: "",
    stars: 1,
  },
  {
    title: "Rapid Keys",
    description:
      "A clone of MonkeyType. Test your speed while racing against the clock with customization features.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/tferdous17/unity-wallet",
    demoLink: "",
    stars: 0,
  },
  
];
