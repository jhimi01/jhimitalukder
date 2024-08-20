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
