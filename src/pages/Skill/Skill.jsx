import React from "react";
// import './SkillsSection.css';

const skills = [
  {
    name: "HTML",
    level: 90,
    description:
      "Strong foundation in semantic HTML5 elements and accessibility best practices.",
  },
  {
    name: "CSS",
    level: 85,
    description:
      "Proficient in responsive design, animations, and pre-processors like SASS.",
  },
  {
    name: "JavaScript",
    level: 80,
    description:
      "Experienced in ES6+, DOM manipulation, and asynchronous programming.",
  },
  {
    name: "React",
    level: 75,
    description:
      "Skilled in component-based architecture, hooks, and state management.",
  },
  {
    name: "NextJs",
    level: 30,
    description:
      "Familiar with server-side rendering and static site generation. Currently exploring.",
  },
  {
    name: "Node.js",
    level: 70,
    description:
      "Competent in building RESTful APIs and working with Express.js.",
  },
  {
    name: "Express.js",
    level: 65,
    description: "Knowledgeable in middleware, routing, and API integration.",
  },
  {
    name: "MongoDB",
    level: 60,
    description:
      "Understanding of NoSQL databases, schema design, and Mongoose.",
  },
];

const getProgressColor = (level) => {
  if (level > 80) return "bg-indigo-500";
  if (level > 60) return "bg-indigo-500";
  return "bg-indigo-500";
};

const Skill = () => {
  return (
    <section className="pb-20">
      <h2 className="text-center text-[2rem] mb-5">My Skills</h2>
      <p className="text-center text-gray-400 mb-10">
        I am a passionate web developer committed to continuous learning and
        growth. I stay up-to-date with industry trends and strive to enhance my
        expertise to build innovative and effective web solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <div className="skill p-3  shadow rounded" key={index}>
            <div className="skill-info flex justify-between items-center mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar bg-gray-300 rounded-full h-2">
              <div
                className={`progress h-2 rounded-full ${getProgressColor(
                  skill.level
                )}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm mt-1 text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;



// import React from "react";

// const skills = {
//   "Frontend": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Zustand", "Tailwind CSS"],
//   "Backend": ["Node", "Express", "REST API", "Zod Validation", "JWT/OAuth", "SQL", "Postgres", "Prisma ORM", "DB Modeling", "Stripe Payments"],
//   "Other": ["JavaScript", "TypeScript", "Python", "Go", "React Native", "Git", "GitHub", "Linux", "WordPress", "VPS", "Vercel", "UX/UI Design", "Product Design", "Figma", "Adobe XD", "Wireframe"]
// };

// const Skill = () => {
//   return (
//     <section className="text-white min-h-screen flex flex-col items-center justify-center p-10 relative">
//        {/* Title */}
//     <h2 className="text-3xl font-bold mb-10 bg-indigo-600 px-4 py-2 rounded-lg">MY SKILLS</h2>
//     {/* SVG Lines */}
//     <svg className="absolute w-full h-full top-0 left-0 pointer-events-none">
//       <line x1="50%" y1="100px" x2="30%" y2="200px" stroke="gray" strokeWidth="2"/>
//       <line x1="50%" y1="100px" x2="50%" y2="200px" stroke="gray" strokeWidth="2"/>
//       <line x1="50%" y1="100px" x2="70%" y2="200px" stroke="gray" strokeWidth="2"/>
//     </svg>

   

//     {/* Skill Categories */}
//     <div className="flex justify-center gap-10 max-w-5xl relative">
//       {Object.entries(skills).map(([category, skillList], index) => (
//         <div key={index} className="text-center flex flex-col items-center">
//           <h3 className="text-xl font-semibold mb-4 bg-gray-700 px-4 py-2 rounded-lg">{category}</h3>
//           <div className="flex flex-wrap gap-3 justify-center">
//             {skillList.map((skill, i) => (
//               <span
//                 key={i}
//                 className="px-4 py-2 bg-gray-800 border border-indigo-500 rounded-lg text-sm hover:bg-indigo-500 transition"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
//   );
// };

// export default Skill;
