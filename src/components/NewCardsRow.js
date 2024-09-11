import React from "react";
import "../styles/CardComponent.css";
import CardComponent from "./CardComponent";

import card13 from "../assets/card13.png";
import card14 from "../assets/card14.jpg";
import card15 from "../assets/card15.jpg";

function NewCardsRow() {
  return (
    <div className="cards-row">
      <CardComponent
        imageSrc={card13}
        title="Que tal um #MéquiNoSofá?"
        text="Faça agora seu pedido e receba em casa pelo delivery."
        buttonLink="#more-info"
        buttonText="Clique aqui"
        className="new-card"
      />
      <CardComponent
        imageSrc={card14}
        title="Confira as medidas que o Méqui adotou!"
        text="Juntos, vamos sair dessa ainda mais fortes, preparados e unidos."
        buttonLink="#more-info"
        buttonText="Clique aqui"
        className="new-card"
      />
      <CardComponent
        imageSrc={card15}
        title="Encontre o Méqui mais próximo de vc"
        text="Deixamos ainda mais fácil! Ative sua geolocalização e mostraremos o restaurante McDonald's mais próximo de você."
        buttonLink="#more-info"
        buttonText="Clique aqui"
        className="new-card"
      />
    </div>
  );
}

export default NewCardsRow;
