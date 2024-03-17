export default function About() {
  return (
    <div className="container d-flex">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h2 className="d-flex justify-content-center border-bottom mb-4">Hello!</h2>
        <p>
          My name is Riley Burns. A married man as of September, 2023, and am a proud cat dad to two adorable felines. I've used computers throughout my whole life, and have always been interested in taking the next step.
          That's when I decided to give it my all and sign up for the University of Minnesota's 12 week Fullstack bootcamp. Throughout this program, I've been mastering the fundamentals of web development, culminating
          into the creation of my own personal portfolio using React.
        </p>
      </div>
      <div className="col-md-6  col-sm-12 d-flex justify-content-center">
        <img id="personalPic" src="/portrait.jpg" alt="A picture of me" className="img-fluid rounded-5 border border-dark"></img>
      </div>
    </div>
  </div>
  );
}
