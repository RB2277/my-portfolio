import Navigation from "./Navigation";


function Header() {
  return (
    <header className="container">
            <div className="row">

            <div className="col-3">
              <h1 id="name">Riley Burns</h1>
            </div>
            <div className="col-9" id="navigation">
          <Navigation />
            </div>
      </div>
      </header>

  );
}

export default Header;
