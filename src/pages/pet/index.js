import React from "react";
import "./pet.css";
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import Imagem01 from "../../imagens/imagem09.png"
import Imagem02 from "../../imagens/imagem11.png"
import Imagem03 from "../../imagens/imagem12.png"
import WhatsApp from '../../components/whatsapp';
export default function Pet() {
  return (
    <div>
      <Cabecalho />
      <div className='container-pet'>
        <div className="title-pet">
          <h1>Sempre prontos para <br></br>atender o seu pet</h1>
        </div>
      </div>
      <div className="convenio-pet">
        <div className="imagem-convenio">
          <img src={Imagem01}></img>
        </div>
        <div className="conteudo-plano-pet">
          <p>VANTAGENS</p>
          <h1>Convênio Pet</h1>
          <label>Estamos prontos para oferecer todo carinho e atenção que seu amiguinho merece, temos diversos benefícios para o seu pet!</label>
          <button>QUERO CONVÊNIO</button>
        </div>
      </div>
      <div className="pet-shop">
        <div className="conteudo-plano-pet2">
          <img src={Imagem02}></img>
          <h1>Pet Shop</h1>
          <label>Nosso futuro pet shop vai estar pronto para atender o seu pet da melhor forma e qualidade, com profissionais capacitados e dedicados para atender você. Traremos diversos benefícios para nossos clientes pets!</label>
          <button>QUERO CONVÊNIO</button>
        </div>
        <div className="imagem-convenio2">
          <img src={Imagem03}></img>
        </div>
        <WhatsApp />

      </div>
      <div className="pet-shop2">
        <div className="conteudo-plano-pet2">
          <h1>Assistência
            Funerária</h1>
          <label>O Pet Primavera conta com uma estrutura que segue os altos padrões de qualidade e segurança, possuindo equipamentos tecnológicos específicos para a cremação de pet, além de todas as certificações necessárias.</label>
          <button>QUERO CONVÊNIO</button>
        </div>

      </div>
      <Rodape />
    </div>
  );
}
