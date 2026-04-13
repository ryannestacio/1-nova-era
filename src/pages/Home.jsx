import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/close-up-detail-professional-serious-accountant-sitting-light-office-checking-company-finance-profits-calculator.jpg';
import card1Img from '../assets/colegas-concentrados-lendo-adesivos-na-parede-de-vidro_74855-14237.jpg';
import card2Img from '../assets/empresario-trabalhando-no-escritorio_23-2148377745.jpg';
import card3Img from '../assets/homem-de-negocios-trabalhando-em-um-desktop-de-escritorio_23-2148194704.jpg';
import facadeImg from '../assets/fachada-novaera.jpeg';
import diferenciaisBg from '../assets/imagem5.jpg';
import fachadaTemporaria from '../assets/fachada-temporaria.png';
import parallaxBg from '../assets/mulher-na-contabildade.jpg';
import AnimatedNumber from '../components/AnimatedNumber';
const faqs = [
  {
    question: "O que faz um escritório de contabilidade?",
    answer: "O Nova Era, um escritório de contabilidade em Pouso Alegre, é especializado em gerenciar e organizar as finanças de empresas e pessoas físicas na região. Nosso trabalho inclui a escrituração contábil, apuração de impostos, emissão de relatórios financeiros, além de oferecer assessoria fiscal, trabalhista e tributária. Nosso objetivo é manter suas contas em ordem, garantindo conformidade com as obrigações legais e otimizando seus resultados financeiros."
  },
  {
    question: "Quando uma empresa deve contratar um escritório de contabilidade?",
    answer: "É recomendável que uma empresa em Pouso Alegre contrate o Nova Era, um escritório de contabilidade, desde o início de suas operações. Isso ajuda a evitar problemas fiscais e tributários, assegurando que todas as obrigações legais sejam cumpridas. Além disso, nosso time de contadores pode oferecer suporte estratégico para o crescimento sustentável do seu negócio."
  },
  {
    question: "Qual a diferença entre um contador autônomo e um escritório de contabilidade?",
    answer: "Um contador autônomo geralmente oferece serviços contábeis de forma individual e pode ter uma quantidade limitada de clientes. Já o Nova Era, escritório de contabilidade em Pouso Alegre, conta com uma equipe de profissionais especializados em diversas áreas, oferecendo um leque maior de serviços e um atendimento mais completo e personalizado para sua empresa."
  },
  {
    question: "Como escolher o melhor escritório de contabilidade para minha empresa?",
    answer: "Para escolher o melhor escritório de contabilidade em Pouso Alegre, como o Nova Era, é importante considerar a experiência, a especialização nos serviços que você precisa, a reputação no mercado, e a tecnologia utilizada para gerir as informações financeiras. O Nova Era oferece atendimento personalizado e transparente, fatores essenciais para uma parceria de longo prazo."
  },
  {
    question: "Quais são os benefícios de contratar um escritório de contabilidade?",
    answer: "Contratar o Nova Era, um escritório de contabilidade em Pouso Alegre, traz diversos benefícios, como a garantia de conformidade fiscal, economia de tempo, redução de custos operacionais, e suporte para tomadas de decisão mais estratégicas. Além disso, o Nova Era pode identificar oportunidades de economia tributária e evitar problemas com o fisco."
  },
  {
    question: "Um escritório de contabilidade pode ajudar a reduzir os impostos da minha empresa?",
    answer: "Sim, o Nova Era, escritório de contabilidade em Pouso Alegre, pode ajudar a reduzir a carga tributária da sua empresa através de um planejamento tributário eficiente. Nossa equipe analisa detalhadamente as operações e escolhe o regime tributário mais adequado, aplicando incentivos fiscais e revisando processos para evitar pagamentos indevidos."
  },
  {
    question: "Quanto custa contratar um escritório de contabilidade em Pouso Alegre?",
    answer: "O custo de contratar um escritório de contabilidade em Pouso Alegre varia conforme o porte da empresa, a complexidade dos serviços necessários e a frequência de atendimento. Recomendamos que você entre em contato conosco para solicitar um orçamento detalhado e encontrar a melhor solução para sua empresa."
  },
  {
    question: "Como funciona a troca de escritório de contabilidade em Pouso Alegre?",
    answer: "A troca para o Nova Era, escritório de contabilidade em Pouso Alegre, é um processo relativamente simples. Basta comunicar o encerramento do contrato com o escritório atual, solicitar a documentação e os livros contábeis da sua empresa, e fazer a transferência das informações para o nosso escritório. Nossa equipe estará à disposição para auxiliar em todo o processo, garantindo uma transição suave."
  },
  {
    question: "Quais documentos são necessários para contratar um escritório de contabilidade?",
    answer: "Para iniciar o trabalho com o Nova Era, escritório de contabilidade em Pouso Alegre, você precisará fornecer documentos como contrato social da empresa, CNPJ, inscrições estaduais e municipais, além de documentos fiscais, trabalhistas e bancários. Nossa equipe solicitará informações adicionais conforme as necessidades específicas da sua empresa."
  },
  {
    question: "Um escritório de contabilidade em Pouso Alegre pode ajudar na abertura da minha empresa?",
    answer: "Sim, o Nova Era, escritório de contabilidade em Pouso Alegre, é essencial no processo de abertura de uma empresa. Nossa equipe orienta sobre a escolha do tipo de empresa, a elaboração do contrato social, a obtenção de registros e licenças necessárias, além de auxiliar na escolha do regime tributário mais vantajoso para o novo negócio."
  },
  {
    question: "Como um escritório de contabilidade em Pouso Alegre ajuda na gestão financeira da empresa?",
    answer: "O Nova Era, escritório de contabilidade em Pouso Alegre, oferece suporte completo na gestão financeira, incluindo o controle de fluxo de caixa, a elaboração de demonstrativos financeiros, e a análise de resultados. Isso permite que você tenha uma visão clara da saúde financeira da sua empresa e tome decisões mais informadas e estratégicas."
  },
  {
    question: "Qual a importância da tecnologia em um escritório de contabilidade?",
    answer: "A tecnologia é fundamental em um escritório de contabilidade moderno. Ela permite a automação de processos, reduz a margem de erro, e facilita o acesso a informações em tempo real. Isso resulta em maior eficiência, segurança e precisão no gerenciamento contábil, beneficiando diretamente a gestão do negócio. Em Pouso Alegre, o Nova Era utiliza os mais modernos equipamentos e softwares para a gestão da sua empresa."
  }
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
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
              <Link to="/servicos/abertura-de-empresas" style={{ textDecoration: 'none' }}>
                <button className="btn-secondary">MAIS ABERTURA DE EMPRESAS &gt;</button>
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={card2Img} alt="Regularização de Empresas" className="card-img" />
            <div className="card-content">
              <h3>Regularização de Empresas</h3>
              <p>Manter sua empresa em conformidade com as normas legais é crucial para evitar problemas futuros. Se a sua empresa está enfrentando alguma pendência ou irregularidade, ou se precisa atualizar alguma informação junto aos órgãos competentes, nossa equipe está pronta para realizar a regularização necessária, garantindo que sua operação continue de forma segura e dentro da lei.</p>
              <Link to="/servicos/regularizacao-de-empresas" style={{ textDecoration: 'none' }}>
                <button className="btn-secondary">MAIS REGULARIZAÇÃO DE EMPRESAS &gt;</button>
              </Link>
            </div>
          </div>

          <div className="card">
            <img src={card3Img} alt="Imposto de Renda" className="card-img" />
            <div className="card-content">
              <h3>Imposto de Renda</h3>
              <p>A declaração de imposto de renda, tanto para pessoas físicas quanto jurídicas, é uma das obrigações mais importantes e que requer atenção aos detalhes. Com nosso suporte, você terá a certeza de que todas as informações serão declaradas corretamente, aproveitando as deduções e benefícios fiscais disponíveis, e evitando qualquer tipo de penalidade futura.</p>
              <Link to="/servicos/imposto-de-renda" style={{ textDecoration: 'none' }}>
                <button className="btn-secondary">MAIS IMPOSTO DE RENDA &gt;</button>
              </Link>
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
            <p>O <strong>Nova Era Assessoria Contábil e Empresarial</strong> é um escritório de contabilidade em Pouso Alegre que garante que a sua empresa esteja sempre em conformidade com as mudanças na legislação, que são frequentes e muitas vezes complexas. Isso evita surpresas desagradáveis e mantém o negócio protegido contra possíveis autuações.</p>
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

      {/* Diferenciais Section */}
      <section className="diferenciais-section">
        <div className="diferenciais-bg" style={{ backgroundImage: `url(${diferenciaisBg})` }}>
          <div className="diferenciais-overlay">
            <div className="container">
              <h2>Diferenciais do Nova Era Escritório de<br />Contabilidade em Pouso Alegre</h2>
              <p>No <strong>NOVA ERA Escritório de Contabilidade em Pouso Alegre</strong>, oferecemos uma gama completa de serviços essenciais para a gestão eficiente do seu negócio. Nossa equipe de especialistas está preparada para atender a todas as suas necessidades contábeis.</p>
            </div>
          </div>
        </div>

        <div className="container diferenciais-cards-container">
          <div className="dif-card">
            <div className="dif-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
            <h3>Experiência Comprovada</h3>
            <p>Com mais de 10 anos de atuação na área, nosso escritório possui expertise para lidar com todas as suas necessidades contábeis, garantindo precisão e agilidade em cada necessidade.</p>
          </div>

          <div className="dif-card dif-card-highlight">
            <div className="dif-icon-wrapper highlight">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </div>
            <h3>Atendimento Personalizado</h3>
            <p>Cada cliente é único. Por isso, oferecemos um atendimento personalizado, entendendo as particularidades do seu negócio e oferecendo soluções adequadas para cada situação.</p>
          </div>

          <div className="dif-card">
            <div className="dif-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
              </svg>
            </div>
            <h3>Tecnologia Avançada</h3>
            <p>Utilizamos as mais modernas ferramentas de gestão contábil para oferecer a você um serviço ágil e sem erros. Com nossa tecnologia, sua empresa estará sempre em conformidade com as exigências fiscais e tributárias.</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container trust-container">
          <div className="trust-image">
            <img src={fachadaTemporaria} alt="Sede do Escritório em Pouso Alegre" />
          </div>
          <div className="trust-content">
            <h2>Seu Parceiro de Confiança para Contabilidade em Pouso Alegre</h2>
            <p>Nosso Escritório de Contabilidade em Pouso Alegre opera em sede própria e conta com uma estrutura robusta, formada por uma equipe de colaboradores altamente qualificados. Nossos profissionais estão em constante aperfeiçoamento nas áreas tributária, contábil, fiscal, trabalhista e de legalização de empresas, garantindo que as necessidades de cada cliente sejam atendidas com precisão.</p>
            <p>Buscamos soluções rápidas e seguras, sempre focados nas expectativas dos nossos clientes. A confiança e satisfação daqueles para quem prestamos serviços são o nosso maior patrimônio, o que nos permitiu consolidar uma presença forte e respeitada no competitivo mercado de Pouso Alegre e região.</p>
            <p>Nossa abordagem é pautada em profissionalismo, respeito e visão de negócios, o que nos permite oferecer um atendimento ágil e ético. Estamos comprometidos em entregar resultados que realmente fazem a diferença para o sucesso do seu empreendimento.</p>
            <button className="btn-primary" style={{ marginTop: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              QUERO MAIS INFORMAÇÕES
            </button>
          </div>
        </div>
      </section>

      {/* Parallax CTA Section */}
      <section className="parallax-section" style={{ backgroundImage: `url(${parallaxBg})` }}>
        <div className="parallax-overlay">
          <div className="container parallax-container">
            <div className="parallax-content">
              <h2>Transforme a Gestão do Seu Negócio com Nosso Escritório de Contabilidade em Pouso Alegre</h2>
              <p>Está na hora de levar a contabilidade da sua empresa para o próximo nível. Junte-se aos nossos clientes satisfeitos e experimente a diferença de ter uma equipe de especialistas ao seu lado. Se você está considerando trocar de escritório de contabilidade, esta é a oportunidade perfeita. Entre em contato conosco hoje mesmo e descubra como podemos simplificar a gestão contábil do seu negócio, garantindo mais segurança e tranquilidade para você se concentrar no que realmente importa: o crescimento da sua empresa.</p>
              <button className="btn-whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
                CONVERSAR NO WHATSAPP
              </button>
            </div>
          </div>
        </div>

        <div className="container stats-container">
          <div className="stats-card">
            <div className="stat-item">
              <h4><AnimatedNumber target={400} /></h4>
              <span>Clientes Satisfeitos</span>
            </div>
            <div className="stat-item">
              <h4><AnimatedNumber target={600} /></h4>
              <span>Declarações Entregues</span>
            </div>
            <div className="stat-item">
              <h4><AnimatedNumber target={30} /></h4>
              <span>Cidades Atendidas</span>
            </div>
            <div className="stat-item">
              <h4><AnimatedNumber target={20} /></h4>
              <span>Anos de Experiência</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container faq-container">
          <div className="faq-header">
            <span>FAQ</span>
            <h2>Perguntas Frequentes</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index;
              return (
                <div className={`faq-item ${isActive ? 'active' : ''}`} key={index}>
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    <h4>{faq.question}</h4>
                    <button className="faq-toggle">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ transform: isActive ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                  </div>
                  {isActive && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
