import React, { useState } from 'react';
import "./contato.css"
import Cabecalho from '../../components/cabecalho'
import RoomIcon from '@mui/icons-material/Room';
import unidade01Image from '../../imagens/unidade01.png';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rodape from "../../components/rodape";
import WhatsApp from '../../components/whatsapp';

export default function Contato() {
  const [selectedUnit, setSelectedUnit] = useState(''); // Inicialmente, nenhuma unidade selecionada
  const unitsData = [
    {
      name: 'Dourados',
      location: 'R. Hilda Bergo Duarte, 1135',
      locationImage: unidade01Image,
      email: 'contato@paxprimavera.com.br',
      whatsapp: '(67) 99680-8200',
      openingHours: 'Aberto 24 Horas',
    },
    {
      name: 'Unidade 2',
      location: 'Endereço da Unidade 2',
      locationImage: '../../imagens/unidade01.png',
      email: 'email2@example.com',
      whatsapp: '(22) 9876-5432',
      openingHours: 'Aberto das 10h às 17h',
    },
    // Adicione informações de outras unidades aqui
  ];

  // Função para atualizar a unidade selecionada
  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
  };
  return (
    <div>
      <Cabecalho />
      <div className='container-contato-unidades'>
        <h1>Contato</h1>
      </div>
      <div className='unidade-proxima'>
        <h1>Selecione a sua unidade mais próxima !</h1>
        <select onChange={handleUnitChange} value={selectedUnit}>
          <option value="">Selecione</option>
          {unitsData.map((unit, index) => (
            <option key={index} value={unit.name}>
              {unit.name}
            </option>
          ))}
        </select>
      </div>
      <WhatsApp />

      <div className='informacoes-unidades'>
        {selectedUnit && (
          <div className='info-geral'>
            <div className='infor1'>
              <div className='contato-localizacao'>
                <div className='icone-localizacao-contato'>
                  <RoomIcon sx={{ fontSize: 30 }} />
                  <label>Localização</label>
                </div>
                <img src={unitsData.find((unit) => unit.name === selectedUnit).locationImage} alt="Localização" />


              </div>
            </div>
            <div className='dois-contatos'>
              <div className='contato-localizacao2'>
                <div className='icone-localizacao-contato'>
                  <ApartmentIcon sx={{ fontSize: 30 }} />
                  <label>Endereço</label>
                </div>
                <p>{unitsData.find((unit) => unit.name === selectedUnit).location}</p>
                <button>
                  <a href='https://www.google.com/maps/place/Pax+Primavera+-+COMPLEXO+Primavera,+Dourados+-+MS'>
                    VER LOCALIZAÇÃO
                  </a>
                </button>
              </div>
              <div className='contato-localizacao2'>
                <div className='icone-localizacao-contato'>
                  <MailOutlineIcon sx={{ fontSize: 30 }} />
                  <label>Email</label>
                </div>
                <p>{unitsData.find((unit) => unit.name === selectedUnit).email}</p>
                <button>
                  <a href={`mailto:${unitsData.find((unit) => unit.name === selectedUnit).email}`}>
                    ENVIAR EMAIL
                  </a>
                </button>
              </div>
            </div>
            <div className='dois-contatos'>
              <div className='contato-localizacao2'>
                <div className='icone-localizacao-contato'>
                  <WhatsAppIcon sx={{ fontSize: 30 }} />
                  <label>WhatsApp</label>
                </div>
                <p>{unitsData.find((unit) => unit.name === selectedUnit).whatsapp}</p>
                <button>
                  <a href={`https://api.whatsapp.com/send?phone=${unitsData.find((unit) => unit.name === selectedUnit).whatsapp}`}>
                    ENVIAR MENSAGEM
                  </a>
                </button>
              </div>
              <div className='contato-localizacao2'>
                <div className='icone-localizacao-contato'>
                  <AccessTimeIcon sx={{ fontSize: 30 }} />
                  <label>Horário Atendimento</label>
                </div>
                <p>{unitsData.find((unit) => unit.name === selectedUnit).openingHours}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Rodape />

    </div>
  )
}