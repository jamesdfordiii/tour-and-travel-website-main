import React from "react";

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom", // Adjust this to show more of the lower part of the image
    height: "600px",
  };
  return (
    <div data-aos="zoom-in" className="h-[500px] w-full" style={bgImage}></div>
  );
};

export default BannerPic;
