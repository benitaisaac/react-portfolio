function Project({title, image, repoLink}) {
  return (
    <>
      <div className="project">
        <a className="projectTitle" href={repoLink} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
            <img className="projectImage" src={image} alt={title} />
        </a>
      </div>
    </>
  );
}

export default Project;
