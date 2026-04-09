import React from 'react';
import './App.css';

import heroBg from './assets/close-up-detail-professional-serious-accountant-sitting-light-office-checking-company-finance-profits-calculator.jpg';
import card1Img from './assets/colegas-concentrados-lendo-adesivos-na-parede-de-vidro_74855-14237.jpg';
import card2Img from './assets/empresario-trabalhando-no-escritorio_23-2148377745.jpg';
import card3Img from './assets/homem-de-negocios-trabalhando-em-um-desktop-de-escritorio_23-2148194704.jpg';
import facadeImg from './assets/fachada-indaiacont-1086x1536.jpeg';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo-top">
              <span className="logo-box">Nova</span><span className="logo-text">Era - Teste</span>
            </div>
            <span className="logo-sub">Assessoria Contábil e Empresarial - Teste de repositório</span>
          </div>
          <nav className="navbar">
            <ul>
              <li><a href="#home" className="active">HOME</a></li>
              <li><a href="#servicos">SERVIÇOS ˅</a></li>
              <li><a href="#assessoria">ASSESSORIA CONTÁBIL ˅</a></li>
              <li><a href="#escritorio">ESCRITÓRIO DE CONTABILIDADE</a></li>
              <li><a href="#contato">CONTATO</a></li>
            </ul>
          </nav>
          <div className="header-action">
            <button className="btn-client-area">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
              </svg>
              ÁREA DO CLIENTE
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h2>Escritório De Contabilidade Em<br /> Pouso Alegre</h2>
            <p>
              Se você busca um Escritório de Contabilidade em Pouso Alegre que ofereça soluções personalizadas para o seu negócio, você está no lugar certo. Com uma equipe experiente e especializada, estamos prontos para ajudar sua empresa a crescer com segurança e eficiência.
            </p>
            <button className="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              QUERO MAIS INFORMAÇÕES
            </button>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="services">
        <div className="container cards-container">
          <div className="card">
            <img src={card1Img} alt="Abertura de Empresas" className="card-img" />
            <div className="card-content">
              <h3>Abertura de Empresas</h3>
              <p>Iniciar um novo negócio exige mais do que uma ideia inovadora; é fundamental garantir que todo o processo de abertura seja realizado corretamente em todas as esferas existentes. Nós cuidamos de todas as etapas burocráticas, desde a escolha do tipo societário até o registro nos devidos órgãos competentes, para que você possa se preocupar apenas com o desenvolvimento do seu empreendimento.</p>
              <button className="btn-secondary">MAIS ABERTURA DE EMPRESAS &gt;</button>
            </div>
          </div>

          <div className="card">
            <img src={card2Img} alt="Regularização de Empresas" className="card-img" />
            <div className="card-content">
              <h3>Regularização de Empresas</h3>
              <p>Manter sua empresa em conformidade com as normas legais é crucial para evitar problemas futuros. Se a sua empresa está enfrentando alguma pendência ou irregularidade, ou se precisa atualizar alguma informação junto aos órgãos competentes, nossa equipe está pronta para realizar a regularização necessária, garantindo que sua operação continue de forma segura e dentro da lei.</p>
              <button className="btn-secondary">MAIS REGULARIZAÇÃO DE EMPRESAS &gt;</button>
            </div>
          </div>

          <div className="card">
            <img src={card3Img} alt="Imposto de Renda" className="card-img" />
            <div className="card-content">
              <h3>Imposto de Renda</h3>
              <p>A declaração de imposto de renda, tanto para pessoas físicas quanto jurídicas, é uma das obrigações mais importantes e que requer atenção aos detalhes. Com nosso suporte, você terá a certeza de que todas as informações serão declaradas corretamente, aproveitando as deduções e benefícios fiscais disponíveis, e evitando qualquer tipo de penalidade futura.</p>
              <button className="btn-secondary">MAIS IMPOSTO DE RENDA &gt;</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container about-container">
          <div className="about-content">
            <h2>Por Que Sua Empresa Precisa de um Escritório de Contabilidade Parceiro</h2>
            <p>Ter um escritório de contabilidade parceiro é uma decisão estratégica que pode fazer toda a diferença para o sucesso de uma empresa. Contar com especialistas em contabilidade ao seu lado garante que todas as obrigações fiscais, trabalhistas e tributárias sejam cumpridas de forma correta e dentro dos prazos, evitando multas e problemas legais.</p>
            <p>Com a gestão contábil e fiscal nas mãos de profissionais qualificados, os empreendedores podem dedicar mais tempo e energia às áreas que realmente fazem o negócio crescer, como vendas, marketing e desenvolvimento de produtos ou serviços.</p>
            <p>Outra grande vantagem é o suporte contínuo que um escritório de contabilidade parceiro proporciona. Seja em momentos de expansão, quando é necessário planejar investimentos e analisar riscos, ou em tempos de crise, quando o foco está em reduzir custos e manter a operação viável, ter um parceiro de confiança faz toda a diferença.</p>
            <p>O <strong>Nova Era Assessoria Contábil e Empresarial</strong> é um escritório de contabilidade em Indaiatuba que garante que a sua empresa esteja sempre em conformidade com as mudanças na legislação, que são frequentes e muitas vezes complexas. Isso evita surpresas desagradáveis e mantém o negócio protegido contra possíveis autuações.</p>
            <button className="btn-primary" style={{ marginTop: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              QUERO MAIS INFORMAÇÕES
            </button>
          </div>
          <div className="about-image">
            <img src={facadeImg} alt="Fachada do Escritório Nova Era" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
