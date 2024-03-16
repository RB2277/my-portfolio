function About() {
  return (
    <div className="row" id="aboutDiv">
      <div className="col-12">
        <section className="aboutMe">
          <img id="personalPic" src="/portrait.jpg" alt="A picture of me"></img>


          <h2>Hello!</h2>
          <p>
            My name is Riley Burns. A married man as of September, 2023, and am a proud cat dad to two adorable felines. I've used computers throughout my whole life, and have always been interested in taking the next step.
            That's when I decided to give it my all and sign up for the University of Minnesota's 12 week Fullstack bootcamp. Throughout this program, I've been mastering the fundamentals of web development, cultimating
            into the creation of my own personal portfolio using React. 
            </p>
            <p id="personalAbout">
            Some of the things I enjoy in my free time outside of strengthening my coding knowledge is studying history, spending time with my family, and gaming. Some of my favorite games are Sid Meier's Civilization
            6 and Old School Runescape. Reading, especially historical literature, is another one of my hobbies. Recently I've began to read The Canterbury Tales by Geoffrey Chaucer</p>


        </section>
      </div>
    </div>
  );
}

export default About;
