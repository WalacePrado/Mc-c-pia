import React from "react";
import "../styles/BannerComponent.css";
import CardComponent from "../components/CardComponent";
import NewCardsRow from "../components/NewCardsRow";
import Footer from "./Footer";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.jpg";
import card9 from "../assets/card9.png";
import card10 from "../assets/card10.png";
import bannerImage from "../assets/banner.png";

function BannerComponent() {
  return (
    <div>
      <div className="banner-container">
        <img className="banner-image" src={bannerImage} alt="Banner" />
        <div className="banner-content">
          <h1>Pega essa dica</h1>
          <p>Peça seu Méqui pelo McDelivery ou Peça e Retire</p>
          <a href="#learn-more" className="banner-button">
            Clique Aqui!
          </a>
        </div>
      </div>
      <div className="cards-container">
        <div className="cards-row">
          <CardComponent
            imageSrc={card1}
            title="Tem menu exclusivo no Méqui."
            text="Agora além de já garantir o novo molho Cajun, você também pode garantir um dos personagens do BT21."
            buttonLink="#more-info"
            buttonText="Aproveite, é por tempo limitado."
          />
          <CardComponent
            imageSrc={card2}
            title="Chegaram os Novos Brabos. Pros Dias de Glória."
            text="Quando deu tudo certo no seu dia, já sabe, né? Comemore com o Novo Brabo ClubHouse e o Novo Brabo Melt Onion Rings."
            buttonLink="#more-info"
            buttonText="Peça agora."
          />
        </div>
        <div className="cards-row">
          <CardComponent
            imageSrc={card3}
            title="Cheddarize-se. A Piscininha de Cheddar Chegou no Méqui"
            text="A Piscininha de Cheddar do Méqui Voltou!"
            buttonLink="#more-info"
            buttonText="Eu Quero"
          />
          <CardComponent
            imageSrc={card4}
            title="É mais que satisfatório. É Chocrocantemente"
            text="O McFlurry Chocrocante com Diamante Negro chegou trazendo toda aquela cremosidade da massa, pedacinhos de Diamante Negro e uma calda que endurece e vira casquinha."
            buttonLink="#more-info"
            buttonText="Experimente"
          />
        </div>
        <div className="cards-row">
          <CardComponent
            imageSrc={card5}
            title="Se liga quem tá na área: Big Tasty turbo Queijo!"
            text="O Big Tasty que é uma verdadeira extravagância de queijolência."
            buttonLink="#more-info"
            buttonText="Eu Quero!"
          />
          <CardComponent
            imageSrc={card6}
            title="Os livrinhos da Turma da Mônica chegaram no Méqui."
            text="São 5 opções pra família toda se divertir com o McLanche Feliz."
            buttonLink="#more-info"
            buttonText="Bora?"
          />
        </div>
        <div className="cards-row">
          <CardComponent
            imageSrc={card7}
            title="Os personagens de Yu-Gi-Oh x Hello Kitty chegaram com tudo no Méqui"
            text="Dois mundos se juntaram para deixar a brincadeira muito mais legal no McLanche Feliz."
            buttonLink="#more-info"
            buttonText="Partiu diversão?"
          />
          <CardComponent
            imageSrc={card8}
            title="Meu Méqui"
            text="Chegou o programa de fidelidade do Méqui! A cada R$1 gasto, você ganha 100 pontos. É Méqui que vira ponto, que vira mais Méqui!"
            buttonLink="#more-info"
            buttonText="Saiba Mais"
          />
        </div>
        <div className="cards-row">
          <CardComponent
            imageSrc={card9}
            title="Atenção! Se olhar pro McFlurry não vai ter mais jeito, vai ter que provar."
            text="O McFlurry Kit Kat com o Leite em Pó mais querido do Brasil chegou com tudo no Méqui pra matar a sua fome geladinha."
            buttonLink="#more-info"
            buttonText="Experimente"
          />
          <CardComponent
            imageSrc={card10}
            title="Menos fila, mais Méqui"
            text="Se você não gosta de fila, então pega essa."
            buttonLink="#more-info"
            buttonText="Consulte Restaurantes"
          />
        </div>
        <NewCardsRow />
      </div>
      <Footer />
    </div>
  );
}

export default BannerComponent;
