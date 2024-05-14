import React from "react";
import Poster from "../../poster/poster.component";
import Slider from "react-slick";
import settings from "../config/poster.config.component";

const PosterSlider = (props) => {
  return (
    <>
    <div className=" container px-20 py-10 cursor-pointer mx-auto">
      <div className="px-6 py-4">
        <h3  className={`text-2xl  font-bold ${props.isDark ? "text-white" : "text-grey-700"}`}>{props.title}</h3>
        <p className={`text-md  font-md ${props.isDark ? "text-white" : "text-grey-700"}`}>{props.subTitle}</p>
      </div>
      <Slider {...settings}>
        {props.images.map((image, index) => (
          <Poster key={index} {...image} isDark ={props.isDark}/>
        ))}
      </Slider>
      </div>
    </>
  );
};

export default PosterSlider;
