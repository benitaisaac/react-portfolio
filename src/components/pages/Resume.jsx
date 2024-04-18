function Resume() {
  const resumeUrl =
    "https://docs.google.com/document/d/1yTp1EKI4YM4LJKeuycErITn2G4Vg0y5ry4cCg7ymgmM/edit?usp=sharing";

  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <div className="resume-section">
        <h3>Front-end Proficiencies</h3>
        <p>HTML</p>
        <p>CSS</p>
        <p>Javascript</p>
        <p>JQuery</p>
        <p>Responsive Design</p>
        <p>React</p>
        <p>Bootstrap</p>
      </div>
      <div className="resume-section">
        <h3>Back-end Proficiencies</h3>
        <p>APIs</p>
        <p>Node</p>
        <p>Express</p>
        <p>MySQL, Sequelize</p>
        <p>MongoDB, Mongoose</p>
        <p>REST</p>
        <p>GraphQL</p>
      </div>
      <a href={resumeUrl} download>
        <button className="button-10" role="button">Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;

