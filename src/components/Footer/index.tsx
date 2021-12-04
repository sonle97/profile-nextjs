import React from "react";
import { FooterStyled } from "./styles";
import { scrollToTop } from "../ButtonScrollOnTop";

const info = {
  image: "avatar.jpg",
  name: "DEVELOPER",
};

const Footer = () => {
  return (
    <FooterStyled>
      <img
        src={`/images/footer/${info.image}`}
        alt="img"
        onClick={scrollToTop}
      />
      <div className="font-bold text-gray-1 mt-3 uppercase">{info.name}</div>
      <div className="mt-6 font-xl">
        © 2021. All rights reserved by{" "}
        <span className="font-bold hover:text-red-3 name">Son Le Quang</span>.
      </div>
    </FooterStyled>
  );
};

export default Footer;
