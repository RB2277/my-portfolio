import { useState, useEffect } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
            <div className="row">
      <header>
            <div className="col-3">
              <h1 id="name">Riley Burns</h1>
            </div>
            <div className="col-9">
              <nav>
               <ul>
                  <li>
                   <a>About Me</a>
                 </li>
                  <li>
                   <a>Portfolio</a>
                 </li>
                  <li>
                    <a>Resume</a>
                 </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </nav>
            </div>

      </header>
      </div>
    </div>
  );
}

export default App;
