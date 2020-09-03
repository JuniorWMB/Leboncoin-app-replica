import React from "react";
import "./offre.css";

function Offre({ image, title, price }) {
  return (
    <div className="container">
      <div>
        <img className="picture" src={image} alt="annonce" />
      </div>
      <div className="contain__description">
        <p>{title}</p>
        <p>{price}€</p>
      </div>
    </div>
  );
}

export default Offre;
