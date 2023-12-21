import React from "react";
import "./planos.css";
import Cabecalho from "../../components/cabecalho";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Rodape from "../../components/rodape";
import WhatsApp from '../../components/whatsapp';

export default function Planos() {
  return (
    <div>
      <Cabecalho />
      <div className="container-plano">
        <div className="align-planos">
          <h1>Nossos Planos</h1>
          <div className="nossos-planos">
            <label>
              Diversoss benefícios a sua disposição para vocêe a sua família,<br></br>
              saúde bem estar, pet  e muito mais, conheço agora mesmo!
            </label>
            <button>SABER MAIS</button>
          </div>
        </div>
      </div>
      

      <div className="container-tipos-plano">
        <label>PLANOS FECHADOS</label>
        <h1>ASSINE AGORA MESMO!</h1>
        <div className="tipo-plano-fechados">
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
            <div className="adquirir-plano2">
              <button>ADQUIRIR</button>
            </div>
          </div>
          <WhatsApp />

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
            <div className="adquirir-plano2">
              <button>ADQUIRIR</button>
            </div>
          </div>
        </div>
      </div>
      <Rodape/>
    </div>
  );
}
