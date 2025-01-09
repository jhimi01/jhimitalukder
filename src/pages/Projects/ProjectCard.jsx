import LazyLoad from "react-lazy-load";

const ProjectCard = ({
  projectname,
  imageSrc,
  githubLink,
  liveLink,
  serverLink,
}) => (
  <div className="bg-white shadow-lg rounded-sm p-4">
    <LazyLoad effect="blur">
      <img
        className="w-full h-44 object-cover"
        src={imageSrc}
        alt="project screenshot"
      />
    </LazyLoad>
    <div>
      <h2 className="text-slate-700 my-2 font-semibold text-center">
        {projectname}
      </h2>
      <div className="w-full flex justify-between flex-wrap">
        {githubLink && (
          <h2 className="equal-word bg-gray-300 p-1 text-sm hover:bg-gray-400 truncate text-gray-800">
            <a
              target="_blank"
              className=""
              href={githubLink}
              title={githubLink}
              rel="noopener noreferrer"
            >
              github-client
            </a>
          </h2>
        )}
        {liveLink && (
          <h3 className="equal-word truncate bg-gray-300 p-1 text-sm hover:bg-gray-400 text-gray-800">
            <a
              target="_blank"
              className=""
              href={liveLink}
              title={liveLink}
              rel="noopener noreferrer"
            >
              live link
            </a>
          </h3>
        )}
        {serverLink && (
          <h2 className="equal-word bg-gray-300 p-1 text-sm hover:bg-gray-400 truncate text-gray-800">
            <a
              target="_blank"
              className=""
              href={serverLink}
              title={serverLink}
              rel="noopener noreferrer"
            >
              github-server
            </a>
          </h2>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
