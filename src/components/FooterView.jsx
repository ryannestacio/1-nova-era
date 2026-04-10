import React from 'react';
import { FaInstagram, FaFacebookF, FaGoogle } from 'react-icons/fa';
import googleLogoBase from '../assets/Google_2015_logo.svg.png';
import googleIcon from '../assets/google-logo.png';

const testimonials = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: `Cliente Avaliador ${i + 1}`,
  text: i % 2 === 0 ? "Aguardando envio de materiais para análise do escritório..." : "Projeto de contabilidade em andamento com a equipe.",
  image: `https://ui-avatars.com/api/?name=Cliente+${i + 1}&background=random`
}));

export default function FooterView() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <span>DEPOIMENTOS</span>
            <h2>Avaliações Reais de Clientes</h2>
          </div>

          <div className="testimonials-content">
            <div className="testimonials-summary">
              <h3>EXCELENTE</h3>
              <div className="summary-stars">
                <svg viewBox="0 0 24 24" fill="#FFB400" width="28" height="28"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                <svg viewBox="0 0 24 24" fill="#FFB400" width="28" height="28"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                <svg viewBox="0 0 24 24" fill="#FFB400" width="28" height="28"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                <svg viewBox="0 0 24 24" fill="#FFB400" width="28" height="28"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                <svg viewBox="0 0 24 24" fill="#FFB400" width="28" height="28"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
              </div>
              <p>Com base em <strong>71 avaliações</strong></p>
              <img src={googleLogoBase} alt="Google logo" className="google-logo-summary" />
            </div>

            <div className="testimonials-carousel-wrapper">
              <div className="testimonials-track">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <div className="testimonial-card" key={index}>
                    <div className="testimonial-tooltip">
                      Publicado em <img src={googleIcon} alt="Google" width="16" />
                    </div>
                    <div className="card-top">
                      <div className="client-meta">
                        <img src={item.image} alt={item.name} className="client-avatar" />
                        <div className="client-info">
                          <h4>{item.name}</h4>
                          <div className="card-stars">
                            <svg viewBox="0 0 24 24" fill="#FFB400" width="14" height="14"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                            <svg viewBox="0 0 24 24" fill="#FFB400" width="14" height="14"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                            <svg viewBox="0 0 24 24" fill="#FFB400" width="14" height="14"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                            <svg viewBox="0 0 24 24" fill="#FFB400" width="14" height="14"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                            <svg viewBox="0 0 24 24" fill="#FFB400" width="14" height="14"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                            <svg viewBox="0 0 24 24" fill="#2196F3" width="16" height="16" style={{ marginLeft: '4px' }}><circle cx="12" cy="12" r="10" fill="#2196F3" /><path d="M10 15.5l-3.5-3.5 1.41-1.41L10 12.67l6.59-6.59L18 7.5l-8 8z" fill="#fff" /></svg>
                          </div>
                        </div>
                      </div>
                      <img src={googleIcon} alt="Google" className="card-google-icon" />
                    </div>
                    <p className="card-text">{item.text}</p>
                    <span className="card-read-more">Consulte Mais informação</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-bottom-section">
        <div className="container cta-bottom-container">
          <h2>Ainda Com Dúvidas?</h2>
          <p>Entre em contato, será um prazer ajudar sua empresa a se posicionar no mercado e focar no que realmente importa!</p>
          <button className="btn-whatsapp cta-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            ENTRE EM CONTATO
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-col footer-col-about">
            <div className="footer-logo">
              <div className="footer-logo-main">
                <span className="logo-text">Nova</span><span className="logo-highlight">Era</span>
              </div>
              <span className="logo-subtitle">Assessoria Contábil e Empresarial</span>
            </div>
            <p className="footer-desc">
              Se você busca um Escritório de Contabilidade em Pouso Alegre que ofereça soluções personalizadas para o seu negócio, você está no lugar certo. Com uma equipe experiente e especializada, estamos prontos para ajudar sua empresa a crescer com segurança e eficiência.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Google"><FaGoogle /></a>
            </div>
          </div>

          <div className="footer-col footer-col-links">
            <h4>MAPA DO SITE</h4>
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">QUEM SOMOS</a></li>
              <li><a href="#">SERVICOS</a></li>
              <li><a href="#">ASSESSORIA CONTÁBIL</a></li>
              <li><a href="#">CONTATO</a></li>
            </ul>
          </div>

          <div className="footer-col footer-col-info">
            <h4>INFORMAÇÕES</h4>
            <p className="company-name">Nova Era Assessoria Contábil e Empresarial</p>
            <p>Rua José de Costa Paiva, 85 1º Andar e, 2º Andar<br />Jardim Guanabara, Pouso Alegre - MG, 37554-114</p>
            <p>(35) 3025-1978</p>
            <p>contato@novaera.com.br</p>
            <p className="crc">CRC: MG-041832/O-9</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-container">
            <p>© Nova Era Assessoria Contábil e Empresarial</p>
            <p>Criação de Site em Pouso Alegre com a Foco Digital</p>
            <p><a href="#">Política de Privacidade</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}
