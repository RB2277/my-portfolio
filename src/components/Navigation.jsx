function Navigation() {
  async function routeChange(route) {
    switch (route) {
      case "about":
        window.location.href = "/";
        break;
      case "portfolio":
        window.location.href = "/portfolio";
        break;
      case "resume":
        window.location.href = "/resume";
        break;
      case "contact":
        window.location.href = "/contact";
        break;
    }
  }

  return (
    <nav>
      <a onClick={() => routeChange("about")} className={window.location.href.split("/")[3] === "" ? 'text-white text-decoration-none' : 'text-black text-decoration-none'}>About Me</a>
      <a onClick={() => routeChange("portfolio")} className={window.location.href.split("/")[3] === "portfolio" ? 'text-white text-decoration-none' : 'text-black text-decoration-none'}>Portfolio</a>
      <a onClick={() => routeChange("resume")} className={window.location.href.split("/")[3] === "resume" ? 'text-white text-decoration-none' : 'text-black text-decoration-none'}>Resume</a>
      <a onClick={() => routeChange("contact")}  className={window.location.href.split("/")[3] === "contact" ? 'text-white text-decoration-none' : 'text-black text-decoration-none'}>Contact</a>
    </nav>
  );
}

export default Navigation;
