import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function Header() {
  const [hidden, setHidden] = useState(false);

  const handleMenuClick = () => setHidden(true);
  const handleMenuEnter = () => setHidden(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" style={{textDecoration:'none', color:'inherit', display:'flex', flexDirection:'column'}}>
            <div className="logo-top">
              <span className="logo-box">Nova</span><span className="logo-text">Era - Teste</span>
            </div>
            <span className="logo-sub">Assessoria Contábil e Empresarial - Teste de repositório</span>
          </Link>
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="/" className="active">HOME</Link></li>
            <li className="dropdown" onMouseEnter={handleMenuEnter}>
              <a style={{cursor:'pointer'}}>SERVIÇOS <FaChevronDown className="dropdown-icon" /></a>
              <ul className={`dropdown-menu ${hidden ? 'hidden' : ''}`} onClick={handleMenuClick}>
                <li><Link to="/servicos/abertura-de-empresas">ABERTURA DE EMPRESAS EM POUSO ALEGRE</Link></li>
                <li><Link to="/servicos/regularizacao-de-empresas">REGULARIZAÇÃO DE EMPRESAS</Link></li>
                <li><Link to="/servicos/holding-familiar">HOLDING FAMILIAR</Link></li>
                <li><Link to="/servicos/imposto-de-renda">IRPF – IMPOSTO DE RENDA PESSOA FÍSICA</Link></li>
                <li><Link to="/servicos/planejamento-sucessorio">PLANEJAMENTO SUCESSÓRIO</Link></li>
                <li><Link to="/servicos/recuperacao-tributaria">RECUPERAÇÃO TRIBUTÁRIA</Link></li>
                <li><Link to="/servicos/bpo-outsourcing">BPO OUTSOURCING EM POUSO ALEGRE</Link></li>
              </ul>
            </li>
            <li className="dropdown" onMouseEnter={handleMenuEnter}>
              <a style={{cursor:'pointer'}}>ASSESSORIA CONTÁBIL <FaChevronDown className="dropdown-icon" /></a>
              <ul className={`dropdown-menu ${hidden ? 'hidden' : ''}`} onClick={handleMenuClick}>
                <li><Link to="/assessoria/mei">CONTABILIDADE PARA MEI</Link></li>
                <li><Link to="/assessoria/pequenas-empresas">CONTABILIDADE PARA PEQUENAS EMPRESAS</Link></li>
                <li><Link to="/assessoria/prestadores-de-servicos">CONTABILIDADE PARA PRESTADORES DE SERVIÇOS</Link></li>
                <li><Link to="/assessoria/comercios">CONTABILIDADE PARA COMÉRCIOS</Link></li>
                <li><Link to="/assessoria/industrias">CONTABILIDADE PARA INDÚSTRIAS</Link></li>
                <li className="has-submenu">
                  <a style={{cursor:'pointer'}}>CONTABILIDADE PARA PROFISSIONAIS LIBERAIS <FaChevronRight className="submenu-icon" /></a>
                  <ul className="submenu">
                    <li><Link to="/assessoria/medicos">CONTABILIDADE PARA MÉDICOS</Link></li>
                    <li><Link to="/assessoria/advogados">CONTABILIDADE PARA ADVOGADOS</Link></li>
                    <li><Link to="/assessoria/arquitetos">CONTABILIDADE PARA ARQUITETOS</Link></li>
                    <li><Link to="/assessoria/engenheiros">CONTABILIDADE PARA ENGENHEIROS</Link></li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a style={{cursor:'pointer'}}>CONTABILIDADE PARA NEGÓCIOS DIGITAIS <FaChevronRight className="submenu-icon" /></a>
                  <ul className="submenu">
                    <li><Link to="/assessoria/youtubers">CONTABILIDADE PARA YOUTUBERS</Link></li>
                    <li><Link to="/assessoria/produtores-afiliados">CONTABILIDADE PARA PRODUTORES E AFILIADOS</Link></li>
                    <li><Link to="/assessoria/desenvolvedores">CONTABILIDADE PARA DESENVOLVEDORES</Link></li>
                    <li><Link to="/assessoria/e-commerce">CONTABILIDADE PARA E-COMMERCE</Link></li>
                  </ul>
                </li>
                <li><Link to="/assessoria/empresas-de-tecnologia">CONTABILIDADE PARA EMPRESAS DE TECNOLOGIA</Link></li>
                <li><Link to="/assessoria/corretores-de-imoveis">CONTABILIDADE PARA CORRETORES DE IMÓVEIS</Link></li>
              </ul>
            </li>
            <li><Link to="/escritorio">ESCRITÓRIO DE CONTABILIDADE</Link></li>
            <li><Link to="/contato">CONTATO</Link></li>
          </ul>
        </nav>
        <div className="header-action">
          <button className="btn-client-area">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '5px' }}>
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
            </svg>
            ATENDIMENTO AO CLIENTE
          </button>
        </div>
      </div>
    </header>
  );
}
