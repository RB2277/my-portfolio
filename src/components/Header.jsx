import Navigation from "./Navigation";

const overwrite = {
  marginRight: "0"
};

function Header() {
  return (
    <header>
            <div className="row" style={overwrite}>

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
