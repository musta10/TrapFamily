import React, { Component } from "react";
import logo from "../assets/logo/palmeracirculo.png";
import Tabs from "./Tabs"; 
import Lista from "./Lista"
import Trap from "./Trap"
import Lanueva from "./Lanueva"
import Topmusic from "./Topmusic"
import "../css/header.css";

class Header extends Component {
  render() {
    return (
      <>
        <nav className="nav-bar">
          {/* EL LOGO */}
          <div id="logo">
            <img src={logo} alt="Logotipo" width="40" height="40" />
            <span id="brand">
              <strong>Trap</strong>Family
            </span>
          </div>
          <div className="texto-titulo">
            <p>
              Musica <strong>Trap</strong> y Drill
            </p>
          </div>
        </nav>
        <Tabs> 
       <div label="Trap"> 
       <Trap />
       </div> 
       <div label="Reggaeton"> 
         <Lista />
       </div> 
       <div label="Lanueva"> 
         <Lanueva />
       </div> 
       <div label="Top 5"> 
        <Topmusic />
       </div> 
     </Tabs> 
      </>
    );
  }
}

export default Header;
