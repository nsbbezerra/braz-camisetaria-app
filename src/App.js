import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import Menu from "./components/menu";
import logo from "./assets/logo.svg";

import RoutesApp from "./routes/index";

function App() {
  return (
    <Router>
      <div className="container-app">
        <div className="menu-app">
          <div className="container-logo">
            <img
              src={logo}
              className="logo-menu-app"
              alt="logo"
              draggable={false}
            />
          </div>
          <Menu />
        </div>
        <div className="content-app">
          <RoutesApp />
        </div>
      </div>
    </Router>
  );
}

export default App;
