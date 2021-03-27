import React, { Component } from "react";
import "../css/lanueva.css";
import artistasLanueva from "../listaJson/artistasNueva.json"

class Lanueva extends Component {
  state = {
    artistas: artistasLanueva
  }
  render() {
    return (
      <>
        <p className="texto-titulo"> 19 artistas La nueva generación</p>
        <ul className="lista-lanueva">
          {this.state.artistas.map((elem, i) => {
            return (
              <li key={i}>
              <a href={elem.url}>{elem.name}</a>
            </li>
            )
          })}
         
        </ul>
      </>
    );
  }
}

export default Lanueva;
