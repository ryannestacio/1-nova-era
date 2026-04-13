import React, { useEffect } from 'react';
import quemSomosImg from '../assets/quem-somos-escritorio.jpg';
import mulherImg from '../assets/quem-somos-mulher.jpg';
import equipeImg from '../assets/quem-somos-equipe.jpg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="about-banner" style={{
        backgroundColor: 'var(--primary)',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '38px', fontWeight: 800, lineHeight: 1.3 }}>
          Nova Era: O Seu Escritório De<br />Contabilidade Em Pouso Alegre
        </h2>
      </div>

      <section className="about-section" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'transparent' }}>
        <div className="about-container">
          <div className="about-content">
            <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              QUEM SOMOS
            </span>
            <h2 style={{ fontSize: '34px', marginBottom: '20px', marginTop: '10px', color: '#1a1a1a', fontWeight: 800 }}>
              Assessoria Contábil<br />Especializada para Empresas
            </h2>
            
            <p style={{ textAlign: 'left', lineHeight: 1.6, color: '#555', fontSize: '14.5px' }}>
              Na <strong>Nova Era</strong>, nosso escritório de contabilidade em Pouso Alegre, temos como missão fornecer soluções contábeis completas e personalizadas para empresas de todos os portes. Com uma estrutura sólida e uma equipe de profissionais altamente qualificados, garantimos que sua empresa receba o suporte necessário para prosperar no mercado. Nossos colaboradores passam por um aperfeiçoamento contínuo nas seguintes áreas:
            </p>

            <ul style={{ paddingLeft: '20px', margin: '20px 0', color: '#555', fontSize: '14.5px', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '10px' }}><strong>Tributária:</strong> Consultoria para otimização de impostos e cumprimento de obrigações fiscais, essenciais para todo contador em Pouso Alegre.</li>
              <li style={{ marginBottom: '10px' }}><strong>Contábil:</strong> Serviços contábeis precisos e em conformidade com as normas vigentes.</li>
              <li style={{ marginBottom: '10px' }}><strong>Fiscal:</strong> Assessoria para planejamento fiscal e controle de obrigações tributárias, fundamental na contabilidade em Pouso Alegre.</li>
              <li style={{ marginBottom: '10px' }}><strong>Trabalhista:</strong> Orientação sobre legislação trabalhista e gestão de recursos humanos.</li>
              <li style={{ marginBottom: '10px' }}><strong>Legalização de Empresas:</strong> Suporte completo para abertura e regularização de negócios, garantindo que seus processos estejam sempre em dia.</li>
            </ul>

            <p style={{ textAlign: 'left', lineHeight: 1.6, color: '#555', fontSize: '14.5px', marginBottom: '35px' }}>
              Nossos serviços são adaptados às necessidades específicas de cada cliente, assegurando soluções rápidas e seguras que resultam em sua satisfação e confiança. Isso nos consolidou como uma referência em contabilidade em Pouso Alegre e região.
            </p>

            <button className="btn-whatsapp">
              ENTRE EM CONTATO
            </button>
          </div>

          <div className="about-image" style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <img 
              src={quemSomosImg} 
              alt="Sala Escritório Nova Era" 
              style={{ width: '100%', maxWidth: '550px', borderRadius: '16px', boxShadow: '0 15px 40px rgba(0,0,0,0.15)', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      <section className="parallax-section" style={{ backgroundImage: `url(${mulherImg})`, padding: '40px 0' }}>
        <div className="parallax-overlay" style={{ padding: '80px 20px' }}>
          <div className="container parallax-container" style={{ justifyContent: 'center' }}>
            <div className="parallax-content" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '38px', fontWeight: 800 }}>
                Transforme a Gestão da Sua<br />Empresa com a Nova Era!
              </h2>
              <p style={{ fontSize: '16px', margin: '0 auto 30px', maxWidth: '800px', lineHeight: 1.5 }}>
                Estamos prontos para ter a sua empresa como nossa parceira de negócios.<br />
                Conte conosco e venha fazer parte da nossa história de sucesso!
              </p>
              <a href="https://wa.me/5535999999999" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <button className="btn-whatsapp">
                  ENTRE EM CONTATO
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: 'transparent' }}>
        <div className="about-container">
          <div className="about-image" style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
            <img 
              src={equipeImg} 
              alt="Equipe Nova Era Trabalhando" 
              style={{ width: '100%', maxWidth: '550px', borderRadius: '16px', boxShadow: '0 15px 40px rgba(0,0,0,0.15)', objectFit: 'cover' }} 
            />
          </div>

          <div className="about-content">
            <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              O QUE FAZEMOS
            </span>
            <h2 style={{ fontSize: '34px', marginBottom: '20px', marginTop: '10px', color: '#1a1a1a', fontWeight: 800, lineHeight: 1.2 }}>
              Resultados Comprovados e<br />Parcerias de Sucesso
            </h2>
            
            <p style={{ textAlign: 'left', lineHeight: 1.6, color: '#555', fontSize: '14.5px' }}>
              Atendemos empresas de pequeno, médio e grande porte nos mais variados segmentos de mercado. Nossa abordagem personalizada nos permite criar soluções que geram valor e resultados tangíveis para nossos parceiros, incluindo:
            </p>

            <ul style={{ paddingLeft: '20px', margin: '20px 0', color: '#555', fontSize: '14.5px', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '10px' }}><strong>Estratégias Fiscais Eficientes:</strong> Redução de custos e aumento de rentabilidade, com o suporte de um contador especialista em Pouso Alegre.</li>
              <li style={{ marginBottom: '10px' }}><strong>Relatórios Contábeis Precisos:</strong> Informações claras para tomadas de decisão, vitais na contabilidade em Pouso Alegre.</li>
              <li style={{ marginBottom: '10px' }}><strong>Suporte Contínuo:</strong> Acompanhamento próximo e consultoria permanente para garantir a saúde financeira do seu negócio.</li>
            </ul>

            <p style={{ textAlign: 'left', lineHeight: 1.6, color: '#555', fontSize: '14.5px', marginBottom: '15px' }}>
              Centenas de empresas em Pouso Alegre e região já contam com a assessoria especializada do <strong>Escritório Nova Era</strong>, e a cada dia novos parceiros se juntam a nós em inúmeros casos de sucesso. Nossa especialização em contabilidade garante que sua empresa tenha a assessoria de qualidade necessária para alcançar resultados excepcionais.
            </p>

            <p style={{ textAlign: 'left', lineHeight: 1.6, color: '#555', fontSize: '14.5px', marginBottom: '35px' }}>
              Erros de procedimento podem impactar diretamente o desempenho dos negócios. Estamos aqui para garantir que isso não aconteça, proporcionando segurança e tranquilidade na gestão contábil.
            </p>

            <a href="https://wa.me/5535999999999" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <button className="btn-whatsapp">
                ENTRE EM CONTATO
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
