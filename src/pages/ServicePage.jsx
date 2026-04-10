import React from 'react';
import { useLocation } from 'react-router-dom';
import handshakeImg from '../assets/aperto de mãos.jpg';

export default function ServicePage() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const rawName = pathParts[pathParts.length - 1] || 'Serviço';
  
  // Convert URL dash-case to Capitalized Words
  const serviceName = rawName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="service-page">
      {/* Dark Banner */}
      <div className="service-banner">
        <div className="container">
          <h1>{serviceName} Em Pouso Alegre</h1>
          <p>
            Conte com a Nova Era Assessoria Contábil para o serviço de {serviceName}. 
            Oferecemos todo o suporte necessário de forma rápida, eficiente e segura.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container service-content-area">
        <div className="service-main-col">
          <h2>{serviceName} em Pouso Alegre: Solução Completa Para Você</h2>
          <br/>
          <p style={{fontSize: '18px', color: '#666', borderLeft: '4px solid var(--primary)', paddingLeft: '15px'}}>
            Página de: <strong>"{serviceName}"</strong> em andamento.
          </p>
        </div>
        
        {/* Sidebar */}
        <div className="service-sidebar">
          <img src={handshakeImg} alt="Aperto de mãos" className="sidebar-img" />
          
          <div className="sidebar-box whatsapp-box">
            <div className="sidebar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </div>
            <div className="sidebar-text">
              <span className="sidebar-subtitle">NOSSO WHATSAPP</span>
              <strong className="sidebar-title">(35) 3025-1978</strong>
            </div>
          </div>

          <div className="sidebar-box hours-box">
            <div className="sidebar-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
            </div>
            <div className="sidebar-text">
              <span className="sidebar-subtitle">HORÁRIO DE ATENDIMENTO</span>
              <p className="sidebar-desc">
                De segunda a sexta-feira<br/>
                Das 8h às 12h | Das 13h30 às 17h30
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
