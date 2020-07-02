import React, {Component} from "react";
import photos from "../../pictures1.json";
import Carousel from 'react-bootstrap/Carousel'

class ActualCarousel extends Component {
    
    state = {
        photos
    };
    
    render(){
    return (
        <Carousel>
            {this.state.photos.map(photo => (
                <Carousel.Item>
                    <img
                        className = "d-block w-100"
                        src = {photo.image}
                        id = {photo.id}
                        alt = {photo.name}
                    />
                    <Carousel.Caption>
                        <p>{photo.name}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
      )};
  }
  
  export default ActualCarousel;