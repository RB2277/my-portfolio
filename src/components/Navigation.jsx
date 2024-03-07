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
      <a onClick={() => routeChange("about")}>About Me</a>
      <a onClick={() => routeChange("portfolio")}>Portfolio</a>
      <a onClick={() => routeChange("resume")}>Resume</a>
      <a onClick={() => routeChange("contact")}>Contact</a>
    </nav>
  );
}

export default Navigation;
