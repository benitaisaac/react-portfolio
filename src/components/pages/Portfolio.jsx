import Project from "../Project";

function Portfolio() {
  // create an array with all of the project data
  const projects = [
    {
      title: "Horiseon",
      // remember that this path starts at the public folder 
      image: "assets/projects/horiseon.png",
      repoLink: "https://github.com/benitaisaac/Horiseon_Website.git",
    },
    {
      title: "Javascript Quiz",
      image: "assets/projects/javascript-quiz.png",
      repoLink: "https://github.com/benitaisaac/javascript_quiz.git",
    },
    {
      title: "Note Taker",
      image: "assets/projects/note-taker.png",
      repoLink: "https://github.com/benitaisaac/note-taker.git",
    },
    {
      title: "Sharesphere",
      image: "assets/projects/sharesphere.png",
      repoLink: "https://github.com/kerilsen/share-sphere.git",
    },
    {
      title: "Text Editor",
      image: "assets/projects/text-editor.png",
      repoLink: "https://github.com/benitaisaac/text-editor.git",
    },
    {
      title: "Workday Scheduler",
      image: "assets/projects/workday-scheduler.png",
      repoLink: "https://github.com/benitaisaac/work-day-scheduler.git",
    },
  ];
  return (
    <div className="portfolio">
      {/* <h1>Projects</h1> */}
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            //add a key prop to help React effeciently update the list
            key={index}
            title={project.title}
            image={project.image}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

{
  /* <img src={process.env.PUBLIC_URL + '/image1.png'} alt="Image 1" /> */
}
