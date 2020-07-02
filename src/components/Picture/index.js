import React from "react";
import "./style.css";

function Picture(props) {
  return (

    <figure className="figure">
      <img src={props.image} className="figure-img rounded" alt="Projects"/>
      <figcaption className="figure-caption">
        {props.name}         
      </figcaption>
    </figure>

  );
}

export default Picture;
