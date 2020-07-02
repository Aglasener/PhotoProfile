import React from "react";


function CarouselItem(props) {
  return (
    <div className = "carousel-item" id = {props.id}>
        <img src={props.image} className ="d-block w-100" alt={props.name} />
    </div>

  );
}

export default CarouselItem;
