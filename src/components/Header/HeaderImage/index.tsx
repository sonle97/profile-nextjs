import React from "react";

const styling = {
  backgroundImage: "url('/images/header/bg.jpg')",
  height: "350px",
};

const HeaderImage = () => {
  return <div className="bg-cover bg-center bg-no-repeat" style={styling} />;
};

export default HeaderImage;
