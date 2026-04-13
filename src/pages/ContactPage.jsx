import React, { useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaGoogle, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-banner" style={{ backgroundColor: '#222', color: 'white', padding: '100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '38px', fontWeight: 800, margin: '0 0 15px' }}>Contato</h1>
          <p style={{ fontSize: '16px', color: '#ccc', margin: 0 }}>
            Estamos prontos para atender todas as suas necessidades contábeis.
          </p>
        </div>
      </div>

      <section className="contact-section" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fafafa' }}>
        <div className="contact-container">
          
          <div className="contact-content">
            <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              ESTAMOS AQUI PARA AJUDAR
            </span>
            <h2 style={{ fontSize: '34px', marginBottom: '20px', marginTop: '10px', color: '#1a1a1a', fontWeight: 800 }}>
              Entre em Contato
            </h2>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.6, marginBottom: '30px' }}>
              Será uma enorme satisfação poder ter a sua empresa como nossa parceira de negócios. Conte conosco e venha fazer parte da nossa história!
            </p>
            
            <div className="contact-socials">
              <a href="#" className="social-box"><FaFacebookF /></a>
              <a href="#" className="social-box"><FaInstagram /></a>
              <a href="#" className="social-box"><FaGoogle /></a>
            </div>
          </div>

          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="card-icon"><FaEnvelope /></div>
              <h4>E-mail</h4>
              <p>contato@novaera.com.br</p>
            </div>

            <div className="contact-card card-green" onClick={() => window.open('https://wa.me/553530251978', '_blank')}>
              <div className="card-icon icon-white"><FaWhatsapp /></div>
              <button className="btn-chat">CONVERSAR AGORA</button>
            </div>

            <div className="contact-card">
              <div className="card-icon"><FaPhoneAlt /></div>
              <h4>Telefones</h4>
              <p>(35) 3025-1978<br />(35) 99999-9999</p>
            </div>

            <div className="contact-card">
              <div className="card-icon"><FaMapMarkerAlt /></div>
              <h4>Endereço</h4>
              <p>Rua José de Costa Paiva, 85 1º e 2º Andar<br />Jardim Guanabara, Pouso Alegre - MG</p>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="contact-map-section" style={{ width: '100%', height: '450px', display: 'flex' }}>
        <iframe 
          title="Mapa de Localização Nova Era"
          src="https://maps.google.com/maps?q=Nova%20Era%20Assessoria%20Cont%C3%A1bil%20e%20Empresarial%2C%20Pouso%20Alegre&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
