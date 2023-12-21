import React from 'react'
import "./blog.css"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import ImagemLinha from '../../imagens/imagem-linha.png'
import WhatsApp from '../../components/whatsapp';

export default function Blog() {

  return (
    <div>
      <Cabecalho />
      
      <div className='container-blog'>
        <div className='linha-noticias'>
          <h1>Notícias</h1>
          <img src={ImagemLinha}></img>
        </div>
        <WhatsApp />

      </div>
      <Rodape />
    </div>
  )
}