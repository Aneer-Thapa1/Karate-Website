import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
import images from "../constants/images";

const Gallery = () => (
  <Carousel autoplay>
    <div>
      <img src={images.profile} alt="" />
    </div>
    <div>
      <img src="" alt="" />
    </div>
    <div>
      <img src="" alt="" />
    </div>
    <div>
      <img src="" alt="" />
    </div>
  </Carousel>
);
export default Gallery;
