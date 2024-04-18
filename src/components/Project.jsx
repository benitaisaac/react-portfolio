function Project({ title, image, repoLink }) {
  return (
    <>
      <div className="project">
        <h2>{title}</h2>
        <a
          className="projectTitle"
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="projectImage" src={image} alt={title} />
        </a>
      </div>
    </>
  );
}

export default Project;
