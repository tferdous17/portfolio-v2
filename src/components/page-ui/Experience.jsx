import { act, useRef, useState } from "react";
import clsx from "clsx";

export default function Experience() {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  return (
    <div className="">
      <div
        id="experience"
        className="ml-[21rem] rounded-lg p-6 md:p-8 max-w-6xl mx-auto my-10 sticky top-0 h-screen flex flex-col justify-center "
      >
        <div className="relative flex items-center md:justify-start mb-12 gap-6 ">
          <h1 className="text-4xl font-inter font-bold text-gray-300 ">
            <span className="text-[#A29BFE] font-mono">02.</span> Work +
            Leadership Experience
          </h1>
          <div className="h-0.5 w-81 bg-gradient-to-r from-[#4e3e3e] to-slate-950 rounded-md"></div>
        </div>
        
        <div className="flex ">
          <div role="tablist" className="flex flex-col ml-0 mr-5">
            {experience.map((exp, i) => {
              return (
                <button
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  ref={(el) => (tabs.current[i] = el)}
                  role="tab"
                  tabIndex={activeTabId === i ? "0" : "-1"}
                  id={`tab-${i}`}
                  aria-controls={`panel-${i}`}
                  className={clsx(
                    "cursor-pointer p-3 text-left font-mono text-md",
                    activeTabId === i ? "text-gray-100" : "text-gray-500"
                  )}
                >
                    <div className="relative">
                        <span className={clsx(
                            "absolute h-full rounded-md w-0.5",
                            activeTabId === i ? "bg-blue-300" : "bg-gray-700"
                        )}></span>
                        <span className="block pl-4">{exp.organization}</span>
                    </div>
                </button>
              );
            })}
          </div>
          <div>
            {experience.map((exp, i) => {
              return (
                <div
                  role="tabpanel"
                  hidden={activeTabId !== i}
                  className="flex flex-col gap-3 w-200 "
                >
                  <h2 className="text-2xl text-gray-200">
                    {exp.title}{" "}
                    <span className="text-[#A29BFE]">
                      @{" "}
                      <a
                        href={exp.url}
                        target="_blank"
                        className="hover:underline"
                      >
                        {exp.organization}
                      </a>
                    </span>
                  </h2>
                  <h3 className="mb-4 text-gray-300">{exp.dateRange}</h3>
                  {exp.bulletpoints.map((bp) => {
                    return (
                      <ul className="text-gray-400 text-xl font-inter relative pl-10 before:content-['➤'] before:absolute before:left-0 before:text-[#A29BFE]">
                        {bp}
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const experience = [
  {
    organization: "Arthrex",
    title: "Software Engineer Intern",
    dateRange: "May 2024 - November 2024",
    bulletpoints: [
      "Developed a full stack analytics dashboard with Vue and TypeScript to visualize high-risk medical device usage patterns and log critical surgical events in near real-time, used during real orthopedic surgeries.",
      "Ensured HIPAA-compliant protection for thousands of surgical records by developing a secure Node.js, Express, and AWS backend with integrated JWT authentication and role-based access control.",
      "Achieved 90%+ code coverage by writing fullstack unit tests leveraging Vitest and Jest, and automated build, test, and deployment processes via a CI/CD pipeline.",
    ],
    url: "https://www.arthrex.com/",
  },
  {
    organization: "Center for Academic Sucess & Tutoring",
    title: "Computer Science Peer Tutor",
    dateRange: "August 2023 - May 2024",
    bulletpoints: [
      "Tutored university-level programming courses to over 40 active students per semester, providing personalized support for subjects such as Java Programming I and II, and Data Structures and Algorithms.",
      "Improved student exam scores by 11 points on average across three computer science courses by creating 50+ practice questions and 3 comprehensive mock exams.",
    ],
    url: "https://www.farmingdale.edu/tutoring/",
  },
  {
    organization: "Artificial Intelligence Club",
    title: "Founder/President",
    dateRange: "December 2023 - Present",
    bulletpoints: [
      "Grew an on-campus tech community to 70+ members by leading a 5-person executive board and hosting biweekly technical workshops, presentations, and industry guest speakers on cutting-edge topics.",
    ],
    url: "",
  },
  {
    organization: "RamHacks 2025",
    title: "Organizing Committee",
    dateRange: "March 2025 - April 2025",
    bulletpoints: [
      "Co-led planning and execution of an 80 person hackathon by collaborating with 3 student organizations to manage logistics, secure $1,000+ in prizes, and lead marketing campaigns across local universities.",
    ],
    url: "https://ramhacks.com/",
  },
];
