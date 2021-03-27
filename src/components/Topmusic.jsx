import React, { Component } from "react";
import '../css/videos.css'
import music from '../assets/images/musica.png'
class Topmusic extends Component {
  render() {
    return (
        <>
        <div className="tituloTop"><h3 className="texto-top">El Top 5 en Islas Canarias</h3>
        <img src={music} alt="music"/></div>
        
        <article className="video-top">
        <iframe title="1" width="560" height="315" src="https://www.youtube.com/embed/37tmRDUK0FM" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </article>
        <article className="video-top">
        <iframe title="2"  width="560" height="315" src="https://www.youtube.com/embed/y4mlhGVN-Ek" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </article>
        <article className="video-top">
        <iframe title="3" width="560" height="315" src="https://www.youtube.com/embed/0Q5J38bpunI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </article>
        <article className="video-top">
        <iframe title="4" width="560" height="315" src="https://www.youtube.com/embed/j3Lp4M9K-uw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </article>
        <article className="video-top">
        <iframe title="5" width="560" height="315" src="https://www.youtube.com/embed/XbM5uUdXe4k" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </article>
 
    </>
    );
  }
}

export default Topmusic;
