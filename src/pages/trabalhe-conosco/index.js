import React from 'react'
import "./trabalhe-conosco.css"
import Cabecalho from '../../components/cabecalho'
import Rodape from "../../components/rodape";
import ImagemTrab from '../../imagens/imagem15.png'
import ChecklistIcon from '@mui/icons-material/Checklist';
import WhatsApp from '../../components/whatsapp';
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

export default function TrabalheConosco() {

  return (
    <div>
      <Cabecalho />
      <div className='container-blog2'>
        <div className='linha-noticias2'>
          <h1>Trabalhe<br></br>Conosco</h1>
          <a>Envie o seu curriculo! </a>
        </div>
      </div>
      <div className='forms-trabalho'>
        <div className='img-trab'>
          <img src={ImagemTrab}></img>
        </div>
        <div className='formulario-trab'>
          <div className='icones-form'>
            <h1><ChecklistIcon /> Envie seu curriculo !</h1>
            <label>Acesse o Solid Jobs, através do link abaixo, vejas as vagas disponíveis, preencha todos campos com as suas informações e nos envie seu currículo, temos uma equipe preparada para receber você!</label>
            <button><a href='https://paxprimavera.vagas.solides.com.br' target='blank'></a>SOLID JOBS <HiOutlineClipboardDocumentCheck fontSize={20}/></button>
          </div>

          <WhatsApp />

        </div>
      </div>
      <Rodape />
    </div>
  )
}