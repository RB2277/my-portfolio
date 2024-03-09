import Project from "../components/Project"
import restaurantImg from "../assets/images/restaurant.png";
import bartendingImg from "../assets/images/bartending.png";
import noteImg from "../assets/images/notetaker.png";
import weatherImg from "../assets/images/weather.png"
import schedulerImg from "../assets/images/scheduler.png"
import passwordImg from "../assets/images/password.png"

function Portfolio() {

  const projects = [{
    title: "Restaurant Management",
    github: "https://github.com/Ms-Meredith-McD/Restaurant-Management",
    deployed: "https://group-1-restaurant-manager-dc017dce6dee.herokuapp.com/",
    img: restaurantImg 
  },
  {
    title: "Bartending School",
    github: "https://github.com/KDeLaria/bartending-school",
    deployed: "https://kdelaria.github.io/bartending-school/",
    img: bartendingImg 
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
    title: "Work Day Scheduler",
    github: "https://github.com/RB2277/work-day-scheduler",
    deployed: "https://rb2277.github.io/work-day-scheduler/",
    img: schedulerImg 
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
      <div className="row" id="portfolioRow">
  {projects.map((project, idx) => { 
    return <Project title={project.title} link={project.link} img={project.img} id={idx} />
  })}
  </div>
   </div>
  )
}

export default Portfolio
