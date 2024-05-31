function About() {
  return (
    <div className="about-flex">
      <div className="polaroid">
        <a href="/" title="Hi! I'm Benita :)">
          <img
            className="benitaImage"
            src="/assets/about/benita.JPG"
            alt="an image of Benita"
          ></img>
        </a>
      </div>
      <p className="about-p">
        {" "}
        Hi there! My name is Benita, and I'm embarking on an exciting journey
        into the world of web development. Coming from a background in
        non-profit work, I've honed strong leadership and soft skills that have
        prepared me well for this transition.
        <br />
        <br />
        Throughout my career, I've thrived in collaborative team environments
        and navigated professional settings with ease. My academic background is
        rooted in mathematics, with a minor in STEM education. This foundation
        has equipped me with a solid understanding of coding principles and the
        ability to grasp complex concepts quickly. What sets me apart is my
        innate curiosity and drive to delve deeper into the 'why' behind code.
        My mathematical mindset compels me to explore the fundamental principles
        that underpin the functionality of algorithms and programs.
        <br />
        <br />
        Recently, I completed a rigorous full stack web development bootcamp,
        where I acquired practical skills in frontend and backend development,
        along with proficiency in various technologies and frameworks. I'm
        fueled by my passion for problem-solving and creativity, and I'm eager
        to leverage my newfound skills to make meaningful contributions in the
        field of web development. I'm excited about the opportunities that lie
        ahead and look forward to connecting with like-minded individuals and
        organizations as I embark on this exciting career switch.{" "}
      </p>
    </div>
  );
}

export default About;
