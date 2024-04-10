function Project({title, image, repoLink}) {
  return (
    <>
      <div className="project">
        <h2>{title}</h2>
        <img className="projectImage" src={image} alt={title} />
        <br />
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </div>
    </>
  );
}

export default Project;
