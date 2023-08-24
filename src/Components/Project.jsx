function Project({ project, index }) {
  return (
    <div
      key={index}
      className={project?.visible != false ? " m-5 h-fit p-3 w-2/3 border" : ""}
    >
      {project?.visible != false && (
        <div className="flex flex-col items-center">
          {project?.screenshot && (
            <img
              src={project?.screenshot}
              alt="screenshot"
              className={`w-${project?.img_width || 10} h-${
                project?.img_height || 10
              } m-0`}
            />
          )}
          <h1 className="text-center text-2xl">{project?.name}</h1>

          <p className="m-4">{project?.description}</p>

          <div className="space-x-2 text-center my-5 text-gray-400">
            <h1 className="text-lg">Technologies used</h1>
            {project?.tech.map((tech, index) => (
              <span key={index} className="text-center">
                {tech}
              </span>
            ))}
          </div>

          <div className="space-x-2 text-center text-blue-400">
            {project?.link && <a href={project.link}>demo</a>}
            {project?.github && <a href={project.github}>github</a>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
