import React, { useState, useEffect } from 'react';
import "./home.css";
import Cabecalho from "../../components/cabecalho";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slideMaior01 from "../../imagens/background-ultrawide01.png";
import slideMaior02 from "../../imagens/background-ultrawide03.png";
import slide01 from "../../imagens/background01.svg";
import slide02 from "../../imagens/background02.svg";
import imagem01 from "../../imagens/imagem02.png";
import imagem03 from "../../imagens/imagem03.jpg";
import imagem04 from "../../imagens/imagem04.png";
import imagem05 from "../../imagens/imagem01-mobile.png";
import imagem06 from "../../imagens/imagem16-mobile.png";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Rodape from "../../components/rodape";
import WhatsApp from '../../components/whatsapp';


export default function Home() {
  const slide = [slide01, slide02]; // Array com suas imagens
  const [fotos, setFotos] = useState([slideMaior01, slideMaior02]);
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % fotos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [fotos.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slideIndex, setSlideIndex] = useState(0);



  return (
    <div>
      <Cabecalho />
      <div className="slide">
        <Slide duration={3000} transitionDuration={500} arrows={false}>
          {slide.map((url, index) => (
            <div className="each-slide-effect" key={index}>
              <div className="image-container">
                <img src={url} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <div className='slider-ultrawide'>
        <Slider {...settings} initialSlide={slideIndex} beforeChange={(current, next) => setSlideIndex(next)}>
          {fotos.map((foto, index) => (
            <div key={index}>
              <img src={foto} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <WhatsApp />

      <div className="slide2">
        <div className="slide2-pax">
          <h1>Pax Primavera cuidando da sua família!</h1>
          <label>Diversos beneficíos para você e a sua família, conheça agora mesmo entre em contato conosco !!</label>
          <div className="button-home">
            <button>CONTATO</button>
            <button>BENEFÍCIOS</button>
          </div>
        </div>
        <div>
          <img src={imagem05}></img>
        </div>
      </div>

      <div className="slide3">
        <div className="slide3-pax">
          <h1>Espaço Primavera</h1>
          <label>Atendimentos em diversas áreas da saúde,  a todos os associados, conheça agora mesmo um pouco do nosso espaço primavera e marque uma consulta!</label>
          <div className="button-home">
            <button>MARCAR CONSULTA</button>
          </div>
        </div>
        <div className="imagem-espaco-home">
          <img src={imagem06}></img>
        </div>
      </div>

      <div className="three-option">
        <div className="option-icons">
          <DocumentScannerIcon style={{ fontSize: 45 }} />
          <label>2º VIA DO BOLETO</label>
          <p>Emita agora a 2º via do boleto.</p>
          <button>CLIQUE AQUI</button>
        </div>
        <div className="option-icons">
          <WhatsAppIcon style={{ fontSize: 45 }} />
          <label>FAÇA SEU PLANO</label>
          <p>Pelo WhatsApp é rápido, fácil e simples</p>
          <button>CLIQUE AQUI</button>
        </div>
        <div className="option-icons">
          <MarkUnreadChatAltIcon style={{ fontSize: 45 }} />
          <label>MARCAR CONSULTA</label>
          <p>Agende uma consulta ou exame conosco.</p>
          <button>CLIQUE AQUI</button>
        </div>
      </div>
      <div className="plano-home">
        <h1>Faça o seu Plano</h1>
        <label>Valores que cabem no seu bolso.</label>
        <div className="tipos-plano-home">
          <div className="tam-luxo">
            <div className="luxo-home">
              <h3>LUXO</h3>
            </div>
            <div className="plano-luxo-home">
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 20 }} /> Vantagem 1
              </label>
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 20 }} /> Vantagem 1
              </label>
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 20 }} /> Vantagem 1
              </label>
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 20 }} /> Vantagem 1
              </label>
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 20 }} /> Vantagem 1
              </label>
            </div>
            <div className="adquirir-plano">
              <button>SAIBA MAIS</button>
            </div>
          </div>
          <div className="tam-luxo">
            <div className="luxo-home2">
              <h3>SUPER LUXO</h3>
            </div>
            <div className="plano-luxo-home2">
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 20 }} /> Vantagem 1
              </label>
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 20 }} /> Vantagem 1
              </label>
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 20 }} /> Vantagem 1
              </label>
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 20 }} /> Vantagem 1
              </label>
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 20 }} /> Vantagem 1
              </label>
            </div>
            <div className="adquirir-plano">
              <button>SAIBA MAIS</button>
            </div>
          </div>
        </div>
      </div>

      <div className="associado-pax">
        <div className="imagem-associado">
          <img src={imagem01} />
        </div>
        <div className="imagem-associado2">
          <img src={imagem04} />
        </div>
        <div className="title-associado">
          <h1>
            Por que ser um<br></br> associado pax?{" "}
          </h1>
          <label>
            Todos os nossos serviços contam com aparelhos tecnológicos de uma
            geração, ambiente aconchegante, todos os procedimentos,
            comprometidos a oferecer um atendimento de qualidade e excelência,
            em todos os momentos.
          </label>
          <div className="option-mobile">
            <div className="icones-van-asso">
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 15 }} /> Profissionais
                Capacitados
              </label>
            </div>
            <div className="icones-van-asso">
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 15 }} /> Clínica Médica
                e Estética
              </label>
            </div>
            <div className="icones-van-asso">
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 15 }} />
                Assistência Funerária
              </label>
            </div>
            <div className="icones-van-asso">
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 15 }} /> Dentista e
                Odontologia
              </label>
            </div>
            <div className="icones-van-asso">
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 15 }} /> Parceria com
                Farmácias
              </label>
            </div>
            <div className="icones-van-asso">
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 15 }} /> Plano de Saúde
              </label>
            </div>
            <div className="icones-van-asso">
              <label>
                <CheckCircleOutlineIcon style={{ fontSize: 15 }} /> Academia
              </label>
            </div>
          </div>

        </div>
      </div>
      <div className="duvida">
        <div className="duvidai-img">
          <img src={imagem03}></img>
        </div>
        <div className="duvida-info">
          <h1>Ficou alguma dúvida?</h1>
          <label>
            Temos uma equipe especializada para atender você<br></br> entre em
            contato conosco agora mesmo!
          </label>
          <button>CONTATO</button>
        </div>
      </div>

      <div className="duvida-mobile">
        <div className="duvida-info">
          <h1>Ficou alguma dúvida?</h1>
          <label>
            Temos uma equipe especializada para atender você entre em
            contato conosco agora mesmo!
          </label>
          <button>CONTATO</button>
        </div>
        <div className="duvidai-img">
          <img src={imagem03}></img>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
