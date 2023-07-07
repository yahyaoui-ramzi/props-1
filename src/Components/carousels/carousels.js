import React from "react";
import { Carousel } from "react-bootstrap" ;
import "./Carousels.css" ;


const Carousels = (props) => {
  return (
    <div>
      <Carousel className="ramziii">
    <Carousel.Item>

      <img
        className="d-block w-100"
        src="https://images.alphacoders.com/595/595592.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h2> {props.name} {props.age}{props.children}   </h2>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
      
        src="https://st4.depositphotos.com/1010613/22025/i/600/depositphotos_220253616-stock-photo-womans-hair-before-and-after.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Discovred the benefit of our product</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://s1.1zoom.me/big0/861/Gray_background_Brown_haired_Hair_Glance_573843_1280x867.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

</div>
  )
}

export default Carousels; 

