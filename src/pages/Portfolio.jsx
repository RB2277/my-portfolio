import Project from "../components/Project"
import img1 from "../../assets/images/gitHubLogo.png";

function Portfolio() {

  const projects = [{
    title: "123",
    link: "456",
    img: img1,
  },
  {
    title: "app",
    link: "concepts",
    img: "saying",
  },
]


  return (
    <>
  {projects.map((project, idx) => { 
    return <Project title={project.title} link={project.link} img={project.img} id={idx} />
  })}
    </>
  )
}

export default Portfolio
