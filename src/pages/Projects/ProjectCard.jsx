import LazyLoad from "react-lazy-load";

const ProjectCard = ({ imageSrc, githubLink, liveLink, serverLink }) => (
  <div className="bg-white shadow-lg rounded-sm p-4">
    <LazyLoad effect="blur">
      <img
        className="w-full h-44 object-cover"
        src={imageSrc}
        alt="project screenshot"
      />
    </LazyLoad>
    <div className="mt-4 w-full">
      {githubLink && (
        <h2 className="equal-word truncate text-gray-800">
          github:
          <a
            target="_blank"
            className="underline text-indigo-600"
            href={githubLink}
            rel="noopener noreferrer"
          >
            {githubLink}
          </a>
        </h2>
      )}
      {serverLink && (
        <h2 className="equal-word truncate text-gray-800">
          github-server:
          <a
            target="_blank"
            className="underline text-indigo-600"
            href={serverLink}
            rel="noopener noreferrer"
          >
            {serverLink}
          </a>
        </h2>
      )}
      {liveLink && (
        <h3 className="equal-word truncate text-gray-800">
          live link:
          <a
            target="_blank"
            className="underline text-indigo-600"
            href={liveLink}
            rel="noopener noreferrer"
          >
            {liveLink}
          </a>
        </h3>
      )}
    </div>
  </div>
);

export default ProjectCard;
