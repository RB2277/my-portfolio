import Project from "../components/Project"
import restaurantImg from "../assets/images/restaurant.png";
import bartender from "../assets/images/bartender.jpg"
import noteImg from "../assets/images/notetaker.png";
import weatherImg from "../assets/images/weather.png"
import jobpilot from "../assets/images/jobpilot.png"
import passwordImg from "../assets/images/password.png"

function Portfolio() {

  const projects = [{
    title: "Gary's Pitpub",
    github: "https://github.com/Ms-Meredith-McD/Restaurant-Management",
    deployed: "https://group-1-restaurant-manager-dc017dce6dee.herokuapp.com/",
    img: restaurantImg 
  },
  {
    title: "JobPilot",
    github: "https://github.com/Ms-Meredith-McD/JobPilot",
    deployed: "https://job-pilot-a6ce9a91751d.herokuapp.com/",
    img: jobpilot 
  },
  {
    title: "Notetaker App",
    github: "https://github.com/RB2277/note-taker-app",
    deployed: "https://rb-note-taker-1cfd140edddc.herokuapp.com/",
    img: noteImg 
  },
  {
    title: "Weather Dashboard",
    github: "https://github.com/RB2277/weather-dashboard",
    deployed: "https://rb2277.github.io/weather-dashboard/",
    img: weatherImg 
  },
  {
    title: "Bartending School",
    github: "https://github.com/KDeLaria/bartending-school",
    deployed: "https://kdelaria.github.io/bartending-school/",
    img: bartender
  },
  {
    title: "Password Generator",
    github: "https://github.com/RB2277/JS-Password-Generator",
    deployed: "https://rb2277.github.io/JS-Password-Generator/",
    img: passwordImg 
  },


]


  return (
    <div className="container">
    <div className="row">
      {projects.map((project, idx) => {
        return (
          <div key={idx} className="col-sm-12 col-md-6">
            <Project
              title={project.title}
              github={project.github}
              deployed={project.deployed}
              img={project.img}
            />
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Portfolio
