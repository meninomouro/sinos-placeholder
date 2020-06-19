import React from 'react';
import './global.css';
import logo from './assets/logo.png';
import personagem from './assets/personagem.png';
import { Container, Row, Col } from 'react-grid-system';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Container>
          <Row>
            <div className="logo-div">
              <img src={logo} alt="Logo" className="logo"/>
            </div>
          </Row>
          <Row>
            <Col sm={12} lg={8}>
              <div className="text-div">
                <p className="text">Em breve no ar...</p>
                <p className="text">Programa capacita professores, alunos (instrumentistas) e regentes em orquestras sociais de todo o país, além de dar apoio e suporte a festivais e a publicação de partituras e material didático.</p>
                <p className="text">A partir do segundo semestre de 2020, uma grande rede de profissionais de música vai fazer deste site seu palco e sala de aula online para atividades de capacitação para professores, alunos instrumentistas e regentes, além de formar uma biblioteca de partituras, material didático e outras publicações de apoio. A partir de 2021, se somarão e essas atividades ações presenciais em várias regiões do Brasil, com oficinas e apoio a realização de festivais de música. O programa Sinos - Sistema Nacional de Orquestras Sociais faz parte do Projeto Funarte de Toda Gente, é uma parceria entre a Fundação Nacional de Artes - Funarte e a Universidade Federal do Rio de Janeiro – UFRJ, com curadoria da Escola de Música, e é composto por sete linhas de ação:</p>
                <p className="textb">•	Curso Pedagogia do Ensino de Instrumentos de Cordas</p>
                <p className="textb">•	Projeto Espiral, de capacitação instrumental de jovens músicos</p>
                <p className="textb">•	Projeto Orquestra, de treinamento e capacitação orquestral</p>
                <p className="textb">•	Academia de regência</p>
                <p className="textb">•	Orquestra/Instituição Parceira</p>
                <p className="textb">•	Festivais de Música</p>
                <p className="textb">•	Publicações</p>
              </div>
            </Col>
            <Col sm={12} lg={4}>
              <div className="img-div">
                <img src={personagem} alt="Personagem" className="personagem"/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
