import React from "react";
import Logo from "../../imagens/logo_verde.svg";
import "./rodape.css";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Rodape() {
  return (
    <div className="container-rodape">
      <div className="rodape-containers">
        <div className="logo-rodape">
          <img src={Logo}></img>
          <label>
            Desde 1984 a Pax Primavera atua com um plano de descontos em
            assistência familia, tanto em saúde, quanto pós vida.
          </label>
        </div>
        <div className="menu-rodape">
          <h1>MENU</h1>
          <div className="div-menus">
            <div className="itens-menu-rodape">
              <a href="/">Home</a>
              <a href="/planos">Planos</a>
              <a href="/pet">Pet</a>
              <a href="/blog">Blog</a>
            </div>
            <div className="itens-menu-rodape">
              <a href="/sobre-nos">Sobre Nós</a>
              <a href="/contato">Contato</a>
              <a href="/trabalhe-conosco">Trabalhe Conosco</a>
            </div>
          </div>
        </div>
      </div>

      <div className="atendimento-rodape">
        <h1>Central de Atendimento</h1>
        <div className="espaca-div">
          <div className="div-local">
            <div className="icone-cel">
              <PhoneIcon fontSize="string" />
            </div>
            <div className="div-uni">
              <h1>Dourados - Complexo</h1>
              <label>(67) 99680-8200</label>
            </div>
          </div>
        </div>
        <div>
          <div className="div-local">
            <div className="icone-cel">
              <PhoneIcon fontSize="string" />
            </div>
            <div className="div-uni">
              <h1>Dourados - Matriz</h1>
              <label>(67) 2108-3675</label>
            </div>
          </div>
        </div>
      </div>

      <div className="area-cliente-home">
        <h1>Área do Cliente</h1>
        <div className="area-cli">
          <div className="icone-cel">
            <PersonIcon fontSize="string" />
          </div>
          <div className="tip-atend-uni2">
            <h6>Entrar</h6>
          </div>
        </div>
        <h1>Redes Sociais</h1>
        <div className="icones-sociais">
          <a href="https://www.instagram.com/paxprimaveraoficial/" target="_blank"><InstagramIcon /></a>
          <a href="https://www.facebook.com/PaxPrimaveraOficial/?locale=pt_BR" target="_blank"><FacebookIcon /></a>
          <a href="https://www.linkedin.com/company/pax-primavera/mycompany/" target="_blank"><LinkedInIcon /></a>
          
        </div>
      </div>
      <div></div>
    </div>
  );
}
