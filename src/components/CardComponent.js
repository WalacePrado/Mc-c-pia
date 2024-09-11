import React from "react";
import "../styles/CardComponent.css";

function CardComponent({ imageSrc, title, text, buttonLink, buttonText }) {
  return (
    <div className="card-component">
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={buttonLink} className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default CardComponent;
