import React, { useState } from "react";
import "./sobre-nos.css";
import Cabecalho from "../../components/cabecalho";
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Video from '../../imagens/cemiterio_dourados.mp4'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ClinicaPet from '../../imagens/pet-primavera.png'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Efeito from '../../imagens/imagem21.png'
import Missao from '../../imagens/imagem24.png'
import Visao from '../../imagens/imagem22.png'
import Valores from '../../imagens/imagem23.png'
import Rodape from "../../components/rodape";
import WhatsApp from '../../components/whatsapp';

export default function SobreNos() {
  const [selectedStep, setSelectedStep] = useState("step01");

  const handleStepClick = (step) => {
    setSelectedStep(step);
    // Adicione aqui a lógica para mostrar informações específicas da etapa selecionada.
  };
  return (
    <div>
      <Cabecalho />
      <div className="container-sobre-nos">
        <h1>Nossa História</h1>
        <img src={Efeito}></img>
      </div>
      <WhatsApp />

      <div className="timeline-container">

        <div className="process-wrapper">
          <div id="progress-bar-container">
            <ul>
              <li
                className={`step step01 ${selectedStep === "step01" ? "active" : ""
                  }`}
                onClick={() => handleStepClick("step01")}
              >
                <div className="step-inner"><label>1984</label></div>
              </li>
              <li
                className={`step step02 ${selectedStep === "step02" ? "active" : ""
                  }`}
                onClick={() => handleStepClick("step02")}
              >
                <div className="step-inner"><label>2010</label></div>
              </li>

              <li
                className={`step step04 ${selectedStep === "step04" ? "active" : ""
                  }`}
                onClick={() => handleStepClick("step04")}
              >
                <div className="step-inner"><label>2014</label></div>
              </li>
              <li
                className={`step step05 ${selectedStep === "step05" ? "active" : ""
                  }`}
                onClick={() => handleStepClick("step05")}
              >
                <div className="step-inner"><label>2016</label></div>
              </li>
              <li
                className={`step step06 ${selectedStep === "step06" ? "active" : ""
                  }`}
                onClick={() => handleStepClick("step06")}
              >
                <div className="step-inner"><label>2019</label></div>
              </li>
              <li
                className={`step step07 ${selectedStep === "step07" ? "active" : ""
                  }`}
                onClick={() => handleStepClick("step07")}
              >
                <div className="step-inner"><label>2020</label></div>
              </li>
              <li
                className={`step step08 ${selectedStep === "step08" ? "active" : ""
                  }`}
                onClick={() => handleStepClick("step08")}
              >
                <div className="step-inner"><label>2021</label></div>
              </li>
              <li
                className={`step step09 ${selectedStep === "step09" ? "active" : ""
                  }`}
                onClick={() => handleStepClick("step09")}
              >
                <div className="step-inner"><label>2022</label></div>
              </li>
            </ul>

            <div id="line">
              <div
                id="line-progress"
                style={{ width: selectedStep.slice(-2) * 10 + "%" }}
              ></div>
            </div>
          </div>

          <div id="progress-content-section">
            <div
              className={`section-content discovery ${selectedStep === "step01" ? "active" : ""
                }`}
            >
              <h2><ApartmentIcon /> Fundação da Pax Primavera</h2>
              <br></br>
              <p>
                Com início em 1984, a Pax Primavera ganhou espaço e visibilidade graças ao seu
                comprometimento em prestar às famílias atendidas um trabalho de qualidade e conforto
                na área de assistência familiar e funerária. O tempo foi passando, a empresa foi se
                expandindo e hoje estamos presentes em três estados, sendo eles Goiás, Paraná e
                Mato Grosso do Sul.
              </p>
            </div>
            <div
              className={`section-content discovery ${selectedStep === "step02" ? "active" : ""
                }`}
            >
              <h2><AccessibilityIcon /> Cemitério Parque Primavera</h2>
              <br></br>
              <p>
                Com arvores cercando todo do terreno, o Cemitério Parque Primavera Dourados transmite
                a leveza e harmonia do contato direto com a natureza. Seu imenso gramado traz a tranquilidade
                e calmaria de um jardim, ideal para lembrarmos e homenagearmos nossos queridos entes que já partiram.
              </p>
              <div className="video-pax">
                <video width="800" height="500" controls>
                  <source src={Video} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>

            <div
              className={`section-content discovery ${selectedStep === "step04" ? "active" : ""
                }`}
            >
              <h2><ApartmentIcon /> Espaço Primavera</h2>
              <br></br>
              <p>
                Além dos nossos serviços de assistência, contamos também com serviços exclusivos na área da saúde, proporcionando aos nossos associados, tranquilidade, segurança, conforto e bem-estar. Ainda com o interesse de melhorar o bem-estar dos nossos associados, a Pax Primavera, através de diversas parcerias oferece benefícios na área de saúde, tanto em consultas médicas como odontológicas, e também em exames laboratoriais, com
                profissionais renomados e prontos a atender e realizar os cuidados necessários, criando uma rede de vantagens que busca valorizar o associado e demonstrar cada vez mais nosso cuidado com as famílias atendidas. Todos os nossos serviços contam com aparelhos tecnológicos de última geração, ambiente aconchegante, e todos os procedimentos, sejam da área de saúde ou área funerária, realizados e acompanhados por profissionais altamente capacitados e comprometidos a oferecer um atendimento de qualidade e excelência, em todos os momentos.
              </p>
            </div>

            <div
              className={`section-content discovery ${selectedStep === "step05" ? "active" : ""
                }`}
            >
              <h2><ApartmentIcon /> Complexo Pax Primavera</h2>
              <br></br>
              <p>
                É inaugurado o Complexo de capelas na cidade de Dourados, nossa empresa
                com mais de 35 anos no mercado está amparada pelos pilares da dedicação,
                transparência e respeito, pilares estes que nos dão sustentação para prestarmos
                um serviço de qualidade e excelência para aqueles que confiam em nosso trabalho.
              </p>
            </div>

            <div
              className={`section-content discovery ${selectedStep === "step06" ? "active" : ""
                }`}
            >
              <h2><AddBoxIcon /> Crematório </h2>
              <br></br>
              <p>

                Desde a sua fundação, a Pax Primavera tem sido um farol de apoio em momentos delicados. Comprometidos com o respeito e a empatia, buscamos transformar a experiência funerária.
                <br></br>
                Em 2020, inauguramos o primeiro crematório na região Centro Sul de MS, oferecendo uma opção inovadora e ecologicamente responsável. Na Pax Primavera, não apenas cuidamos dos entes queridos que se foram, mas também das famílias, proporcionando um adeus digno e personalizado.
                <br></br>
                Somos guiados pelo compromisso de oferecer suporte compassivo, honrando cada jornada única. Na Pax Primavera, acreditamos que cada despedida merece respeito e cuidado, e estamos aqui para auxiliar as famílias em todos os momentos.
              </p>
            </div>
            <div
              className={`section-content discovery ${selectedStep === "step07" ? "active" : ""
                }`}
            >
              <h2><AddBoxIcon /> Pet Primavera </h2>
              <br></br>
              <p>

                O Pet Primavera é um lugar ideal para nossos amigos de quatro patas encontrarem diversão e tranquilidade. Aqui, oferecemos um amplo espaço onde os cachorros podem brincar livremente e capelas para momentos de serenidade. No Pet Primavera, os cachorros têm à disposição um espaço amplo e seguro para correr, brincar e fazer novos amigos. Nossa área de recreação foi projetada para proporcionar momentos de alegria e descontração, onde cada rabo abanando é uma expressão de felicidade.
                <br></br>
                Compreendemos a importância dos momentos de serenidade. Em nossas capelas, os tutores podem dedicar um tempo para homenagear e recordar seus queridos companheiros de quatro patas. Um ambiente tranquilo e respeitoso, perfeito para lembranças especiais.
              </p>
              <div className="clinica-pet">
                <img src={ClinicaPet}></img>
              </div>

            </div>

            <div
              className={`section-content discovery ${selectedStep === "step08" ? "active" : ""
                }`}
            >
              <h2><ApartmentIcon /> Clínica Primavera e Estética</h2>
              <br></br>
              <p>

                Oferecemos uma variedade de procedimentos profissionais que são o segredo para realçar a sua beleza natural. Dos tratamentos faciais rejuvenescedores aos cuidados corporais relaxantes, cada serviço é conduzido por profissionais altamente qualificados dedicados a proporcionar resultados notáveis.
                <br></br>
                Compreendemos a importância dos momentos de serenidade. Em nossas capelas, os tutores podem dedicar um tempo para homenagear e recordar seus queridos companheiros de quatro patas. Um ambiente tranquilo e respeitoso, perfeito para lembranças especiais.
              </p>
              <br></br>
              <p>Localizada na Marcelino Pires, a Clínica Primavera é o seu destino para cuidar da saúde de maneira personalizada. Especializada em nutrição e bem-estar, oferecemos serviços adaptados às suas necessidades únicas. Com profissionais dedicados, proporcionamos um ambiente acolhedor para guiá-lo em sua jornada de saúde. Agende uma consulta hoje e comece a investir no seu bem-estar com a Clínica Primavera.</p>

            </div>
            <div
              className={`section-content discovery ${selectedStep === "step09" ? "active" : ""
                }`}
            >
              <h2><FitnessCenterIcon /> Academia</h2>
              <br></br>
              <p>Sua jornada mais saudável começa com qualidade e atenção personalizada. Nossa academia oferece equipamentos de ponta para otimizar seus treinos, enquanto nossos personal trainers dedicados adaptam cada sessão às suas metas específicas. Descubra o seu potencial na Pax Primavera, onde a excelência em fitness se encontra em um ambiente acolhedor e inspirador.</p>

            </div>
            {/* Adicione outras seções conforme necessário */}
          </div>
        </div>
      </div>
      <div className="container-objetivos">
        <div className="tipos-objetivos">
          <img src={Visao}></img>
          <label>VISÃO</label>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="tipos-objetivos">
          <img src={Valores}></img>
          <label>VALORES</label>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="tipos-objetivos">
          <img src={Missao}></img>
          <label>MISSÃO</label>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
