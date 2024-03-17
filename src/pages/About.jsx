export default function About() {
  return (
    <div className="container d-flex">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h2 className="d-flex justify-content-center border-bottom mb-4">Hello!</h2>
        <p>
        My name is Riley Burns, a web developer with a passion for technology and a graduate of the University of Minnesota's Full Stack Bootcamp as of March 2024. Embracing both my personal life as a newly married individual and a proud cat dad, and my professional journey, I've dedicated myself to mastering web development This intensive 12-week program has enabled me to refine my skills, culminating in the creation of this portfolio. You can see some of my highlighted projects within the Portfolio page! Please contact me if you would like to work together!
        </p>
      </div>
      <div className="col-md-6  col-sm-12 d-flex justify-content-center">
        <img id="personalPic" src="/portrait.jpg" alt="A picture of me" className="img-fluid rounded-5 border border-dark"></img>
      </div>
    </div>
  </div>
  );
}
