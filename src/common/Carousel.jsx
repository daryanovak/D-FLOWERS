import React from "react";
import Slider from "react-slick";
import * as css from './Carousel.css';


export class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider className={css.carousel} {...settings}>
        <div>
          <h3>
            <div className={css.image1} ><p> </p></div>
          </h3>
        </div>
        <div>
          <h3> <div className={css.image2} /></h3>
        </div>
        <div>
          <h3> <div className={css.image3} /></h3>
        </div>
        <div>
          <h3> <div className={css.image4} /></h3>
        </div>
      </Slider>
    );
  }
}