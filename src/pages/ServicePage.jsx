import React from 'react';
import { useLocation } from 'react-router-dom';
import handshakeImg from '../assets/aperto de mãos.jpg';
import parallaxImg from '../assets/mulher-mexendo-notebook-2.jpg';

export default function ServicePage() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const rawName = pathParts[pathParts.length - 1] || 'Serviço';
  const isAssessoria = location.pathname.startsWith('/assessoria');
  
  // Convert URL dash-case to Capitalized Words
  const serviceName = rawName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const renderContent = () => {
    if (rawName === 'abertura-de-empresas') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Abertura de Empresas em Pouso Alegre: Comece Seu Negócio do Jeito Certo
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            O processo de abertura de uma empresa exige cuidado e atenção com diversos detalhes legais e tributários. Na <strong>Nova Era Assessoria Contábil</strong>, cuidamos de todas as etapas para que você possa focar no que realmente importa: fazer seu negócio crescer. Nosso serviço de abertura de empresas oferece uma solução completa, garantindo que tudo esteja de acordo com as normas e exigências dos órgãos competentes.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de abertura de empresas incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Escolha da natureza jurídica:</strong> Auxiliamos na escolha do tipo de empresa (EMPRESÁRIO INDIVIDUAL, LTDA, MEI, etc.) que melhor se adequa às suas necessidades.</li>
            <li style={{ marginBottom: '10px' }}><strong>Elaboração e registro do contrato social:</strong> Preparamos toda a documentação e registramos sua empresa na Junta Comercial e outros órgãos necessários.</li>
            <li style={{ marginBottom: '10px' }}><strong>Inscrição no CNPJ:</strong> Realizamos a inscrição da sua empresa na Receita Federal, garantindo a emissão do CNPJ.</li>
            <li style={{ marginBottom: '10px' }}><strong>Obtenção de alvarás e licenças:</strong> Regularizamos sua empresa junto à Prefeitura de Pouso Alegre e outros órgãos para a obtenção de alvarás e licenças de funcionamento.</li>
            <li style={{ marginBottom: '10px' }}><strong>Orientação tributária:</strong> Fornecemos consultoria para definir o regime tributário mais vantajoso, assegurando que sua empresa pague menos impostos.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era Assessoria Contábil para a abertura de empresas em Pouso Alegre e região?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Experiência e Suporte Completo</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com anos de experiência em Pouso Alegre e região, nossa equipe está familiarizada com todas as exigências e processos necessários para a abertura de empresas na região. Isso nos permite garantir que sua empresa será aberta com segurança, rapidez e sem surpresas desagradáveis ao longo do caminho.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Personalização e Agilidade</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Entendemos que cada negócio tem suas particularidades. Por isso, nosso atendimento é personalizado, garantindo que todas as etapas do processo sejam adaptadas às suas necessidades específicas. Além disso, oferecemos agilidade, permitindo que sua empresa esteja pronta para operar o quanto antes.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Acompanhamento Contínuo</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Na Nova Era, nossa parceria não acaba com a abertura da sua empresa. Oferecemos suporte contínuo na área contábil, fiscal e tributária, garantindo que sua empresa cresça de forma saudável e esteja sempre em conformidade com a legislação.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios de abrir sua empresa com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Redução de custos tributários:</strong> Nossa consultoria tributária ajuda você a pagar menos impostos, maximizando a lucratividade do seu negócio.</li>
            <li style={{ marginBottom: '10px' }}><strong>Segurança jurídica:</strong> Abertura feita corretamente, evitando problemas legais futuros.</li>
            <li style={{ marginBottom: '10px' }}><strong>Agilidade no processo:</strong> Garantimos rapidez na abertura, para que você possa começar a operar o quanto antes.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria contínua:</strong> Além da abertura, oferecemos consultoria para acompanhar e otimizar o crescimento da sua empresa.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Pronto para abrir sua empresa em Pouso Alegre?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            Se você deseja abrir uma empresa em Pouso Alegre, conte com a Nova Era Assessoria Contábil. Nossa equipe está preparada para cuidar de todo o processo burocrático, desde a escolha do tipo de empresa até a obtenção das licenças necessárias. Entre em contato conosco e garanta uma abertura de empresa eficiente, segura e dentro de todas as exigências legais.
          </p>
        </div>
      );
    } else if (rawName === 'regularizacao-de-empresas') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Regularização de Empresas em Pouso Alegre: Soluções Completas para Seu Negócio
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            A regularização de empresas é essencial para manter a segurança jurídica, evitar multas e penalidades, e garantir o crescimento saudável do seu negócio. No escritório <strong>Nova Era Assessoria Contábil</strong>, oferecemos uma gama de serviços que envolvem desde a análise detalhada da situação atual da sua empresa até a resolução de todas as pendências com órgãos regulatórios.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de regularização de empresas incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Análise documental completa:</strong> Revisamos toda a documentação da empresa para identificar eventuais erros ou inconsistências.</li>
            <li style={{ marginBottom: '10px' }}><strong>Atualização cadastral:</strong> Regularizamos os dados da sua empresa junto à Receita Federal, Prefeitura e outros órgãos competentes.</li>
            <li style={{ marginBottom: '10px' }}><strong>Resolução de pendências fiscais:</strong> Nossa equipe identifica e resolve débitos fiscais que podem estar impedindo a operação plena do seu negócio.</li>
            <li style={{ marginBottom: '10px' }}><strong>Alteração contratual:</strong> Realizamos ajustes e alterações no contrato social da empresa, caso necessário, garantindo que tudo esteja conforme a lei.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de certidões negativas:</strong> Conseguimos todas as certidões necessárias para comprovar a regularidade da sua empresa.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era Assessoria Contábil para regularização de empresas em Pouso Alegre e região?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Experiência e Conhecimento Local</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso escritório tem anos de experiência em Pouso Alegre e região, o que nos permite conhecer profundamente a legislação local e estadual. Isso nos ajuda a agilizar o processo de regularização e garantir que sua empresa esteja em conformidade com todas as exigências legais da região.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Atendimento Personalizado</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Sabemos que cada empresa possui necessidades específicas. Por isso, nosso atendimento é totalmente personalizado, com foco na melhor solução para o seu caso. Desde pequenas empresas até grandes corporações, tratamos cada cliente com a mesma atenção e cuidado.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Redução de Riscos e Custos</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Ao regularizar sua empresa com a Nova Era, você minimiza o risco de multas e outras penalidades, além de garantir uma operação tranquila. Isso também gera economia a longo prazo, já que evita gastos desnecessários com processos judiciais ou correções tributárias.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da Regularização de Empresas com o escritório Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Segurança jurídica:</strong> Evite problemas com a justiça e mantenha sua empresa em dia com todas as obrigações.</li>
            <li style={{ marginBottom: '10px' }}><strong>Economia de tempo:</strong> Cuidamos de todos os trâmites burocráticos para que você possa focar no crescimento do seu negócio.</li>
            <li style={{ marginBottom: '10px' }}><strong>Tranquilidade fiscal:</strong> Com a empresa regularizada, você poderá obter financiamentos, participar de licitações e explorar novas oportunidades de negócio sem restrições.</li>
            <li style={{ marginBottom: '10px' }}><strong>Acompanhamento contínuo:</strong> Após a regularização, oferecemos serviços de contabilidade para garantir que sua empresa continue regularizada.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Fale Conosco!
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            Se sua empresa precisa de regularização em Pouso Alegre, não perca tempo! Entre em contato com o escritório Nova Era Assessoria Contábil agora mesmo e solicite uma consulta. Nossa equipe está pronta para oferecer a solução ideal para seu negócio.
          </p>
        </div>
      );
    } else if (rawName === 'holding-familiar') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Holding Familiar em Pouso Alegre: Proteja e Organize Seu Patrimônio
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            A criação de uma holding familiar é uma medida inteligente para famílias que desejam preservar e organizar seus bens, além de garantir uma sucessão patrimonial tranquila. O <strong>Nova Era Assessoria Contábil</strong> acompanha todas as etapas do processo, desde a constituição até a gestão da holding, com o objetivo de maximizar os benefícios fiscais e proteger o patrimônio familiar.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de holding familiar incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento patrimonial:</strong> Estruturamos a melhor forma de organizar os bens da família, com foco na proteção e sucessão.</li>
            <li style={{ marginBottom: '10px' }}><strong>Constituição da holding:</strong> Auxiliamos na escolha do tipo de holding (patrimonial, de participação, etc.) que mais se adequa às suas necessidades.</li>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário:</strong> Reduzimos a carga tributária sobre o patrimônio, maximizando os benefícios fiscais e financeiros da família.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de ativos:</strong> Cuidamos da gestão dos ativos da holding, garantindo o cumprimento de todas as obrigações legais e fiscais.</li>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento Sucessório:</strong> Facilitamos a transferência de bens entre gerações, evitando complicações jurídicas e conflitos familiares.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para constituir sua holding familiar em Pouso Alegre e região?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Expertise em Planejamento Patrimonial</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com nossa ampla experiência em Pouso Alegre e região, somos especialistas em estruturar holdings familiares que garantem a proteção e a administração eficiente do patrimônio. Nossa equipe está preparada para oferecer um planejamento patrimonial personalizado, de acordo com as especificidades de cada cliente.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Soluções Personalizadas</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Cada família possui uma realidade e objetivos distintos. Na Nova Era, oferecemos soluções feitas sob medida para que o planejamento atenda às expectativas, garantindo segurança jurídica e vantagens fiscais que facilitam a preservação do patrimônio.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Benefícios Fiscais e Jurídicos</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            A criação de uma holding familiar não apenas organiza e protege o patrimônio, como também reduz a carga tributária, evita a incidência de impostos excessivos e simplifica o processo de sucessão.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Vantagens de constituir uma holding familiar com o escritório Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Redução de impostos:</strong> Otimize o pagamento de tributos com um planejamento estratégico e legal.</li>
            <li style={{ marginBottom: '10px' }}><strong>Segurança patrimonial:</strong> Garanta que os bens da família sejam protegidos e bem geridos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Sucessão facilitada:</strong> Planeje a sucessão de bens entre gerações, evitando burocracias e conflitos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria contínua:</strong> Acompanhamos a gestão da holding para garantir sua eficiência e conformidade com a legislação.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Pronto para Proteger o Patrimônio da Sua Família com uma Holding Familiar?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            Garanta a segurança do seu patrimônio e facilite a sucessão familiar com a criação de uma holding familiar. O <strong>Nova Era Assessoria Contábil</strong> oferece todo o suporte necessário para estruturar sua holding de forma eficiente e personalizada. Entre em contato agora e descubra como podemos ajudar você a proteger seus bens, reduzir impostos e garantir tranquilidade para as futuras gerações. Não perca essa oportunidade de organizar o patrimônio da sua família com segurança!
          </p>
        </div>
      );
    } else if (rawName === 'imposto-de-renda') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Imposto de Renda Pessoa Física em Pouso Alegre: Declarar com Segurança e Precisão
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Fazer a declaração do imposto de renda corretamente é fundamental para evitar problemas futuros com a Receita Federal. Na <strong>Nova Era Assessoria Contábil</strong>, oferecemos todo o suporte necessário para que você realize sua declaração de forma precisa, garantindo o cumprimento das exigências fiscais e identificando oportunidades de redução legal de impostos.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de IRPF incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Análise completa das finanças:</strong> Avaliamos todos os rendimentos, despesas e deduções para garantir que sua declaração esteja completa e otimizada.</li>
            <li style={{ marginBottom: '10px' }}><strong>Preenchimento da declaração:</strong> Cuidamos de todo o processo, evitando erros que possam gerar multas ou cair na malha fina.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria tributária:</strong> Oferecemos orientações sobre como maximizar deduções permitidas por lei e reduzir o valor do imposto devido.</li>
            <li style={{ marginBottom: '10px' }}><strong>Acompanhamento e regularização de pendências:</strong> Caso haja alguma pendência ou irregularidade, regularizamos sua situação junto à Receita Federal.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que confiar na Nova Era para a declaração do Imposto de Renda em Pouso Alegre e região?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Especialização e Experiência</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com anos de atuação em Pouso Alegre e região, nossos contadores são especializados em legislação fiscal e possuem vasta experiência na elaboração de declarações de Imposto de Renda Pessoa Física. Sabemos como otimizar sua declaração, maximizando suas deduções e evitando problemas futuros com o fisco.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Redução de Riscos</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Fazer a declaração por conta própria pode levar a erros que resultam em multas ou até investigações. Na Nova Era, oferecemos segurança no processo, revisando todas as informações para garantir que estejam de acordo com a legislação vigente, evitando erros e garantindo sua tranquilidade.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Atendimento Personalizado</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Cada cliente tem uma situação financeira diferente. Por isso, oferecemos um atendimento personalizado, garantindo que todos os detalhes da sua vida financeira sejam considerados e sua declaração seja feita de forma eficiente e segura.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios de declarar o IRPF com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Redução de erros e multas:</strong> Garantimos que sua declaração seja precisa, evitando problemas com a Receita.</li>
            <li style={{ marginBottom: '10px' }}><strong>Otimização fiscal:</strong> Identificamos todas as deduções e isenções para que você pague o mínimo de imposto possível.</li>
            <li style={{ marginBottom: '10px' }}><strong>Segurança no processo:</strong> Evite cair na malha fina com uma declaração feita por especialistas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria tributária contínua:</strong> Além da declaração, oferecemos suporte contínuo para ajudá-lo a organizar suas finanças ao longo do ano.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Precisa de Ajuda com o Imposto de Renda em Pouso Alegre?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            Deixe a complexidade do Imposto de Renda Pessoa Física (IRPF) com os especialistas da <strong>Nova Era Assessoria Contábil</strong>. Entre em contato hoje mesmo e assegure que sua declaração seja feita de forma correta e otimizada, garantindo sua tranquilidade e segurança fiscal.
          </p>
        </div>
      );
    } else if (rawName === 'planejamento-sucessorio') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Planejamento Sucessório em Pouso Alegre: Proteja Seu Patrimônio e Facilite a Sucessão
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            O planejamento sucessório é a melhor maneira de garantir que a transferência de bens entre gerações ocorra de forma eficiente e sem complicações jurídicas. Na <strong>Nova Era Assessoria Contábil</strong>, trabalhamos com um planejamento personalizado para atender as necessidades da sua família, cuidando de todos os aspectos legais e tributários, sempre com foco na preservação do patrimônio.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de planejamento sucessório incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria completa:</strong> Avaliamos todo o seu patrimônio e identificamos a melhor estrutura para a sucessão, garantindo segurança e eficiência.</li>
            <li style={{ marginBottom: '10px' }}><strong>Estruturação de holding familiar:</strong> Para famílias que desejam uma sucessão planejada, ajudamos na constituição de holdings, que facilitam a gestão e a transferência de bens.</li>
            <li style={{ marginBottom: '10px' }}><strong>Testamentos e doações:</strong> Orientamos sobre a melhor forma de realizar testamentos ou doações em vida, reduzindo riscos de disputas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Otimização tributária:</strong> Estruturamos a sucessão de forma a minimizar impostos e evitar custos excessivos para os herdeiros.</li>
            <li style={{ marginBottom: '10px' }}><strong>Prevenção de conflitos familiares:</strong> Um planejamento sucessório bem feito ajuda a evitar disputas judiciais entre os herdeiros, garantindo que sua vontade seja respeitada.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para seu Planejamento Sucessório em Pouso Alegre e região?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Segurança Jurídica e Tributária</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com nossa experiência em Pouso Alegre e região, oferecemos segurança jurídica em todo o processo de planejamento sucessório, evitando problemas futuros. Garantimos que todos os aspectos legais e fiscais sejam cuidadosamente avaliados, proporcionando uma sucessão tranquila e eficiente.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Personalização e Cuidado</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Cada família tem uma estrutura patrimonial e necessidades específicas. Na Nova Era, oferecemos um planejamento sucessório personalizado, que respeita seus objetivos e garante a preservação do patrimônio, evitando complicações legais e financeiras para os herdeiros.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Prevenção de Custos e Conflitos</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Nosso planejamento sucessório tem como objetivo reduzir custos com impostos e taxas, além de evitar que a sucessão gere conflitos entre herdeiros, garantindo uma transição pacífica e bem organizada.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Vantagens do planejamento sucessório com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Redução de impostos:</strong> Planejamos a sucessão para minimizar a carga tributária, facilitando a transição de bens.</li>
            <li style={{ marginBottom: '10px' }}><strong>Prevenção de conflitos familiares:</strong> Evite disputas judiciais com um planejamento claro e detalhado.</li>
            <li style={{ marginBottom: '10px' }}><strong>Tranquilidade para o futuro:</strong> Garanta que sua vontade seja cumprida e seu patrimônio seja preservado.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria completa:</strong> Acompanhamos todo o processo de sucessão, oferecendo segurança jurídica e fiscal.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Quer Garantir um Futuro Tranquilo para Sua Família?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> oferece o suporte ideal para realizar um planejamento sucessório em Pouso Alegre eficiente, garantindo que seu patrimônio seja transmitido da melhor forma possível. Entre em contato conosco agora mesmo e comece a planejar o futuro da sua família com segurança e tranquilidade.
          </p>
        </div>
      );
    } else if (rawName === 'recuperacao-tributaria') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Recuperação Tributária em Pouso Alegre: Recuperando o que é Seu por Direito
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            O processo de recuperação tributária envolve a análise detalhada de tributos pagos pela sua empresa, com o objetivo de identificar valores pagos indevidamente ou a maior. Na <strong>Nova Era Assessoria Contábil</strong>, nossa equipe especializada realiza uma auditoria minuciosa em sua contabilidade para garantir que sua empresa recupere todos os créditos fiscais devidos, seguindo todas as exigências legais.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de recuperação tributária incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Análise fiscal detalhada:</strong> Verificamos todos os tributos pagos para identificar possíveis créditos tributários e valores pagos indevidamente.</li>
            <li style={{ marginBottom: '10px' }}><strong>Levantamento de créditos fiscais:</strong> Identificamos impostos que podem ser recuperados e preparamos toda a documentação necessária para a restituição.</li>
            <li style={{ marginBottom: '10px' }}><strong>Revisão de obrigações acessórias:</strong> Garantimos que sua empresa esteja cumprindo corretamente todas as obrigações fiscais, evitando pagamentos desnecessários.</li>
            <li style={{ marginBottom: '10px' }}><strong>Acompanhamento de processos:</strong> Monitoramos todo o processo de recuperação, desde a identificação dos créditos até o recebimento pela sua empresa.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que confiar na Nova Era para a Recuperação Tributária em Pouso Alegre e região?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Especialização em Recuperação Tributária</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com experiência em Pouso Alegre e região, nossa equipe possui o conhecimento necessário para identificar oportunidades de recuperação tributária em diferentes setores e garantir que sua empresa recupere o máximo de valores possíveis, sempre dentro da legalidade.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Economia e Eficiência</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            A recuperação de tributos pagos indevidamente pode representar uma economia significativa para sua empresa. Na Nova Era, trabalhamos com eficiência para que sua empresa recupere o que tem direito sem complicações, garantindo um processo ágil e seguro.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Conformidade Legal</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Garantimos que todo o processo de recuperação tributária esteja 100% de acordo com a legislação vigente, evitando problemas futuros com o fisco e proporcionando segurança para sua empresa.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios de realizar a recuperação tributária com o escritório Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Recuperação de valores pagos indevidamente:</strong> Identificamos créditos fiscais para sua empresa, garantindo o retorno financeiro.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade fiscal:</strong> Todos os processos são realizados de acordo com as exigências da Receita Federal e demais órgãos competentes.</li>
            <li style={{ marginBottom: '10px' }}><strong>Economia para a sua empresa:</strong> A recuperação tributária pode gerar uma economia significativa para o seu negócio.</li>
            <li style={{ marginBottom: '10px' }}><strong>Acompanhamento integral:</strong> Do início ao fim, monitoramos o processo para garantir que os créditos sejam restituídos de forma correta e rápida.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Quer Recuperar Impostos Pagos Indevidamente?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            Não deixe dinheiro parado! A <strong>Nova Era Assessoria Contábil</strong> está pronta para ajudar sua empresa a realizar uma recuperação tributária em Pouso Alegre eficiente, identificando e recuperando tributos pagos indevidamente. Entre em contato agora mesmo e descubra o quanto sua empresa pode economizar com nossos serviços especializados!
          </p>
        </div>
      );
    } else if (rawName === 'bpo-outsourcing') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            BPO Outsourcing em Pouso Alegre: Otimize Seus Processos e Aumente Sua Eficiência
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com o BPO Outsourcing, sua empresa pode delegar tarefas contábeis e financeiras a especialistas, garantindo que todas as atividades sejam realizadas com precisão e eficiência. Na <strong>Nova Era Assessoria Contábil</strong>, cuidamos de toda a sua contabilidade, desde a emissão de notas fiscais até a análise de resultados, permitindo que você se concentre no crescimento do seu negócio.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de BPO Outsourcing incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Gestão contábil completa:</strong> Cuidamos de todas as operações contábeis, garantindo que sua empresa esteja sempre em conformidade com a legislação.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de notas fiscais:</strong> Gerenciamos a emissão de notas fiscais eletrônicas, evitando erros e garantindo que todas as obrigações sejam cumpridas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Controle financeiro:</strong> Monitoramos as finanças da sua empresa, proporcionando relatórios detalhados para que você tome decisões informadas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário:</strong> Auxiliamos na elaboração de um planejamento tributário eficiente, visando a redução da carga tributária.</li>
            <li style={{ marginBottom: '10px' }}><strong>Suporte contínuo:</strong> Nossa equipe está sempre disponível para fornecer orientações e esclarecer dúvidas, garantindo que você tenha o suporte necessário para o sucesso do seu negócio.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para o BPO Outsourcing em Pouso Alegre e região?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Expertise e Profissionalismo</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            No escritório Nova Era, contamos com uma equipe altamente qualificada e experiente em BPO Outsourcing. Nossa expertise garante que sua empresa receba um serviço de qualidade, com foco na eficiência e na conformidade legal.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Redução de Custos e Aumento de Eficiência</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com a terceirização das atividades contábeis e financeiras, sua empresa pode reduzir custos operacionais e aumentar a eficiência, permitindo que você direcione recursos para áreas estratégicas e de maior impacto.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Foco no Core Business</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Ao optar pelo BPO Outsourcing, você pode concentrar suas energias e esforços nas atividades principais da sua empresa, enquanto nós cuidamos da parte contábil. Isso se traduz em mais tempo para inovar e crescer.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios do BPO Outsourcing com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Economia de tempo e recursos:</strong> Liberte-se das tarefas contábeis e financeiras, permitindo que sua equipe foque em atividades estratégicas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Maior precisão e conformidade:</strong> Nossa equipe garante que todos os processos sejam realizados com precisão e em conformidade com as normas fiscais.</li>
            <li style={{ marginBottom: '10px' }}><strong>Relatórios claros e detalhados:</strong> Fornecemos informações financeiras que ajudam na tomada de decisões estratégicas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Suporte contínuo:</strong> Estamos sempre disponíveis para esclarecer dúvidas e fornecer orientações necessárias.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Está Pronto para Otimizar Seus Processos com BPO Outsourcing?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            Maximize a eficiência do seu negócio com o BPO Outsourcing em Pouso Alegre da <strong>Nova Era Assessoria Contábil</strong>. Deixe a gestão contábil e financeira conosco e foque no crescimento da sua empresa. Entre em contato agora mesmo e descubra como podemos ajudar você a alcançar novos patamares de sucesso.
          </p>
        </div>
      );
    } else if (rawName === 'mei') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para MEI em Pouso Alegre: Suporte Completo para o Seu Negócio
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Na <strong>Nova Era Assessoria Contábil</strong>, entendemos os desafios que um MEI enfrenta. Nosso serviço de Contabilidade para MEI em Pouso Alegre foi projetado para simplificar sua rotina financeira e cuidar das obrigações fiscais, facilitando o dia a dia do empreendedor e oferecendo mais segurança e controle sobre o seu negócio.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de contabilidade para MEI incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Orientação sobre obrigações fiscais:</strong> Auxiliamos você a compreender e cumprir todas as obrigações fiscais e tributárias exigidas para MEIs.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de guias e declarações:</strong> Cuidamos da emissão de guias e declarações obrigatórias, evitando multas e mantendo seu negócio regularizado.</li>
            <li style={{ marginBottom: '10px' }}><strong>Organização contábil:</strong> Garantimos uma organização financeira eficiente, registrando todas as movimentações e simplificando a gestão financeira.</li>
            <li style={{ marginBottom: '10px' }}><strong>Assessoria contínua:</strong> Oferecemos suporte para esclarecer dúvidas e fornecer orientações sobre finanças e tributos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento e crescimento:</strong> Auxiliamos no planejamento financeiro, ajudando o MEI a visualizar novas oportunidades de expansão.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para a Contabilidade da sua empresa MEI em Pouso Alegre?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Atendimento Personalizado e Simplicidade</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            A Nova Era sabe que cada MEI tem necessidades específicas, e nosso atendimento é personalizado para cada cliente. Nossa equipe facilita a gestão contábil, trazendo simplicidade e eficiência para a sua rotina.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Conformidade e Tranquilidade</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Ao contar com nossos serviços, você garante que seu negócio esteja sempre em conformidade com a legislação, evitando multas e possíveis complicações legais.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Foco em Crescimento</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Oferecemos mais que serviços contábeis. Com nossa consultoria, ajudamos o MEI a identificar oportunidades de crescimento e a se preparar para futuros investimentos.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para MEI com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Regularização e conformidade fiscal:</strong> Cuidamos de todas as obrigações fiscais e tributárias, mantendo seu MEI sempre em dia.</li>
            <li style={{ marginBottom: '10px' }}><strong>Economia de tempo:</strong> Deixe a parte contábil conosco e foque no que realmente importa: o sucesso do seu negócio.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria para expansão:</strong> Nossa equipe ajuda você a traçar planos para expandir e investir no seu negócio.</li>
            <li style={{ marginBottom: '10px' }}><strong>Suporte contínuo:</strong> Estamos sempre disponíveis para orientações e esclarecimentos, garantindo uma gestão contábil eficiente.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Quer Simplificar a Contabilidade do Seu MEI?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            Deixe que a <strong>Nova Era Assessoria Contábil</strong> cuide de toda a Contabilidade do seu MEI, facilitando seu dia a dia e permitindo que você foque no crescimento do seu negócio. Entre em contato agora e aproveite um serviço contábil completo e simplificado, feito para o microempreendedor!
          </p>
        </div>
      );
    } else if (rawName === 'pequenas-empresas') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Pequenas Empresas em Pouso Alegre: Cuidado Profissional para Seu Negócio
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            A contabilidade é fundamental para a saúde financeira de qualquer empresa, e para as pequenas empresas, contar com o suporte adequado pode fazer toda a diferença. Na <strong>Nova Era Assessoria Contábil</strong>, oferecemos uma gestão contábil ágil e personalizada, cuidando das obrigações fiscais e financeiras da sua empresa.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de contabilidade para pequenas empresas incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário:</strong> Identificamos as melhores estratégias para reduzir a carga tributária e aumentar a eficiência fiscal.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de guias e declarações fiscais:</strong> Garantimos que todas as obrigações fiscais sejam cumpridas, evitando multas e imprevistos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de fluxo de caixa:</strong> Monitoramos as movimentações financeiras para proporcionar mais clareza e controle ao empresário.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria financeira e contábil:</strong> Oferecemos orientações para uma gestão financeira mais estratégica e eficiente.</li>
            <li style={{ marginBottom: '10px' }}><strong>Suporte contínuo:</strong> Nossa equipe está sempre à disposição para esclarecer dúvidas e auxiliar nas tomadas de decisão.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para a Contabilidade da Sua Pequena Empresa?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Experiência e Profissionalismo</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com anos de atuação, a Nova Era possui o conhecimento e a expertise necessários para oferecer uma contabilidade precisa e segura, sempre em conformidade com as normas legais.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Gestão Personalizada</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Sabemos que cada pequena empresa tem suas próprias necessidades, e é por isso que nossos serviços são ajustados conforme a realidade do seu negócio, trazendo flexibilidade e eficiência.
          </p>

          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Suporte Estratégico</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Nossa equipe também fornece consultoria estratégica para o crescimento da sua empresa, ajudando na tomada de decisões com base em dados financeiros precisos.
          </p>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para pequenas empresas com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Redução de custos fiscais:</strong> Planejamento tributário eficaz que gera economia.</li>
            <li style={{ marginBottom: '10px' }}><strong>Maior controle financeiro:</strong> Com a gestão de fluxo de caixa e relatórios detalhados, você toma decisões informadas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade garantida:</strong> Evite multas e complicações com o cumprimento de todas as obrigações fiscais.</li>
            <li style={{ marginBottom: '10px' }}><strong>Suporte constante:</strong> Estamos sempre disponíveis para esclarecer dúvidas e oferecer orientações estratégicas.</li>
          </ul>

          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Quer uma Gestão Contábil que Impulsione o Crescimento da Sua Pequena Empresa?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            Deixe a contabilidade da sua pequena empresa nas mãos da <strong>Nova Era Assessoria Contábil</strong> e foque no que realmente importa: o sucesso do seu negócio. Entre em contato agora e descubra como nossos serviços podem ajudar a sua empresa a crescer com segurança e eficiência!
          </p>
        </div>
      );
    } else if (rawName === 'prestadores-de-servicos') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Prestadores de Serviços em Pouso Alegre: Suporte Completo para seu Negócio
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso serviço de contabilidade para prestadores de serviços é focado em simplificar a rotina contábil e fiscal, proporcionando segurança e organização. Na <strong>Nova Era Assessoria Contábil</strong>, entendemos as necessidades específicas do setor de serviços e estamos preparados para atender com precisão e eficiência.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de contabilidade para prestadores de serviços incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário personalizado:</strong> Avaliamos o melhor regime tributário para reduzir os custos fiscais e aumentar a lucratividade.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de guias e notas fiscais:</strong> Cuidamos da emissão de documentos fiscais de maneira correta e dentro dos prazos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Organização e gestão financeira:</strong> Monitoramos o fluxo de caixa e organizamos a contabilidade de maneira estratégica.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria e suporte financeiro:</strong> Orientamos em relação às melhores práticas financeiras e no planejamento para crescimento.</li>
            <li style={{ marginBottom: '10px' }}><strong>Suporte contínuo e ágil:</strong> Nossa equipe está sempre à disposição para esclarecer dúvidas e auxiliar na tomada de decisões.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para a Contabilidade de Prestadores de Serviços?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Experiência no Setor de Serviços</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com anos de experiência na contabilidade para prestadores de serviços, oferecemos um atendimento especializado e flexível, adaptado às particularidades do setor.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Conformidade Fiscal e Tranquilidade</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Cuidamos de todas as obrigações fiscais para você, garantindo conformidade com a legislação e evitando complicações com o fisco.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Consultoria Estratégica para o Crescimento</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Além do serviço contábil, oferecemos consultoria financeira para ajudar no planejamento e no desenvolvimento sustentável do seu negócio.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para prestadores de serviços com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Redução de custos fiscais:</strong> Planejamento tributário que permite economia no pagamento de impostos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade garantida:</strong> Evite multas e penalidades com a organização de todas as obrigações fiscais.</li>
            <li style={{ marginBottom: '10px' }}><strong>Controle financeiro aprimorado:</strong> Organização financeira que proporciona mais clareza para a tomada de decisões.</li>
            <li style={{ marginBottom: '10px' }}><strong>Apoio estratégico:</strong> Orientações e suporte contínuo para o desenvolvimento do seu negócio.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Precisa de Contabilidade Especializada para Prestadores de Serviços?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> oferece contabilidade para prestadores de serviços em Pouso Alegre com uma abordagem personalizada e estratégica. Entre em contato agora e veja como podemos ajudar seu negócio a alcançar mais eficiência financeira e tranquilidade na gestão contábil!
          </p>
        </div>
      );
    } else if (rawName === 'comercios') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Comércios em Pouso Alegre: Gestão Eficiente e Segurança Fiscal
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso serviço de contabilidade para comércios é voltado para atender às demandas específicas do varejo, proporcionando organização e suporte estratégico. Na <strong>Nova Era Assessoria Contábil</strong>, cuidamos de toda a parte contábil e fiscal para que você possa se concentrar no que realmente importa: o sucesso do seu negócio.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de contabilidade para comércios incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário e redução de impostos:</strong> Analisamos o regime tributário mais vantajoso para diminuir a carga fiscal.</li>
            <li style={{ marginBottom: '10px' }}><strong>Controle de fluxo de caixa:</strong> Monitoramos as entradas e saídas para manter uma visão clara e organizada das finanças.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de guias e notas fiscais:</strong> Garantimos que todas as obrigações fiscais sejam cumpridas corretamente e nos prazos certos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Análise de desempenho financeiro:</strong> Oferecemos relatórios financeiros que ajudam a entender a saúde financeira do seu comércio.</li>
            <li style={{ marginBottom: '10px' }}><strong>Suporte contínuo e personalizado:</strong> Nossa equipe está à disposição para atender às suas necessidades contábeis e fiscais.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para a Contabilidade do seu Comércio?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Especialização no Setor de Varejo</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com experiência em contabilidade para o setor comercial, oferecemos uma abordagem adaptada às particularidades de lojas e comércios.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Conformidade Fiscal e Redução de Custos</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso serviço garante que todas as obrigações fiscais sejam cumpridas com precisão, evitando multas e otimizando a carga tributária.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Consultoria Estratégica para o Crescimento</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Além dos serviços contábeis, proporcionamos consultoria financeira que apoia o crescimento e o desenvolvimento do seu comércio.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para comércios com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Eficiência tributária:</strong> Planejamento que reduz os custos com impostos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade garantida:</strong> Organização de todas as obrigações fiscais para evitar problemas com o fisco.</li>
            <li style={{ marginBottom: '10px' }}><strong>Maior controle financeiro:</strong> Gestão do fluxo de caixa e relatórios financeiros detalhados.</li>
            <li style={{ marginBottom: '10px' }}><strong>Apoio estratégico contínuo:</strong> Orientações e suporte para o crescimento e sucesso do seu comércio.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Quer Simplificar a Contabilidade do Seu Comércio?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            Com a contabilidade para comércios em Pouso Alegre da <strong>Nova Era Assessoria Contábil</strong>, você tem a segurança de uma gestão financeira organizada e eficiente. Entre em contato agora e descubra como podemos ajudar seu comércio a prosperar com uma contabilidade especializada e alinhada às suas necessidades!
          </p>
        </div>
      );
    } else if (rawName === 'industrias') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Indústrias em Pouso Alegre: Gestão Especializada e Redução de Custos
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso serviço de contabilidade para indústrias é ideal para negócios que precisam de uma estrutura contábil precisa, voltada para a gestão de custos e para o cumprimento de obrigações fiscais e tributárias. Com a <strong>Nova Era Assessoria Contábil</strong>, você garante segurança e organização para a sua operação industrial.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de contabilidade para indústrias incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de custos e análise de rentabilidade:</strong> Avaliamos os custos de produção para uma visão mais clara dos lucros.</li>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário industrial:</strong> Realizamos o planejamento para reduzir a carga tributária de acordo com o regime mais vantajoso.</li>
            <li style={{ marginBottom: '10px' }}><strong>Controle de estoques e inventário:</strong> Organizamos o estoque e o inventário, fundamental para a contabilidade de custos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de guias e cumprimento de obrigações fiscais:</strong> Garantimos que todas as obrigações sejam cumpridas no prazo correto.</li>
            <li style={{ marginBottom: '10px' }}><strong>Relatórios gerenciais e análise financeira:</strong> Fornecemos relatórios detalhados para uma visão abrangente da saúde financeira do negócio.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para a Contabilidade da sua Indústria?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Especialização no Setor Industrial</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com experiência em contabilidade para o setor industrial, nossa equipe entende as particularidades da indústria e está preparada para atender às suas necessidades.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Redução de Custos e Conformidade Fiscal</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso planejamento tributário visa minimizar a carga fiscal, mantendo o seu negócio em conformidade com a legislação e evitando multas.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Consultoria Financeira Estratégica</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Oferecemos suporte e consultoria para ajudar sua indústria a tomar decisões estratégicas baseadas em dados financeiros concretos.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para indústrias com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Eficiência na gestão de custos:</strong> Controle detalhado dos custos de produção para aumentar a lucratividade.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade e segurança fiscal:</strong> Garantia de que todas as obrigações fiscais são cumpridas corretamente.</li>
            <li style={{ marginBottom: '10px' }}><strong>Visão financeira completa:</strong> Relatórios e análises que auxiliam na tomada de decisões.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria especializada:</strong> Suporte contínuo e estratégico para o desenvolvimento do seu negócio industrial.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Precisa de Contabilidade Especializada para Indústrias?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> está pronta para oferecer contabilidade para indústrias em Pouso Alegre com uma abordagem profissional e estratégica. Entre em contato agora e descubra como podemos ajudar sua indústria a reduzir custos e garantir uma gestão contábil eficiente e organizada!
          </p>
        </div>
      );
    } else if (rawName === 'medicos') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Médicos em Pouso Alegre: Soluções Financeiras e Fiscais Sob Medida
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso serviço de contabilidade para médicos é projetado para atender tanto profissionais autônomos quanto clínicas, com foco em eficiência fiscal e gestão financeira personalizada. Cuidamos de toda a parte burocrática para que você tenha mais tempo e tranquilidade no exercício da sua profissão.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de contabilidade para médicos incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário personalizado:</strong> Identificação do melhor regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real) para redução de impostos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de rendimentos e despesas:</strong> Controle preciso das receitas, despesas e lucros, garantindo um fluxo de caixa saudável.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão e acompanhamento de notas fiscais:</strong> Orientação e suporte na emissão de notas fiscais de serviços médicos, evitando erros e multas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Contabilidade para clínicas e consultórios:</strong> Suporte contábil completo para quem atua em sociedade ou administra uma clínica médica.</li>
            <li style={{ marginBottom: '10px' }}><strong>Relatórios gerenciais e financeiros:</strong> Fornecemos dados claros e objetivos para apoiar decisões estratégicas.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para a Contabilidade Médica?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Experiência no Setor da Saúde</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com anos de experiência atendendo profissionais da área médica, compreendemos as nuances do mercado e as particularidades fiscais e financeiras da sua profissão.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Redução de Impostos e Maximização de Lucros</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso planejamento tributário visa diminuir a carga fiscal, garantindo que você aproveite ao máximo seus rendimentos.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Gestão Simplificada e Segurança Fiscal</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Assumimos toda a parte burocrática, desde a emissão de documentos fiscais até o cumprimento das obrigações legais, para que você não precise se preocupar com questões administrativas.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para médicos com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Otimização fiscal estratégica:</strong> Redução de impostos com base em regimes tributários personalizados.</li>
            <li style={{ marginBottom: '10px' }}><strong>Controle financeiro eficaz:</strong> Gestão organizada de todas as receitas e despesas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade legal garantida:</strong> Evite multas e complicações com uma contabilidade sempre em dia.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria financeira:</strong> Orientação para decisões que maximizem sua rentabilidade e crescimento profissional.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Precisa de Suporte Contábil Especializado?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> oferece contabilidade para médicos em Pouso Alegre com serviços personalizados e foco em resultados. Entre em contato agora e descubra como podemos ajudar você a otimizar suas finanças, reduzir impostos e garantir segurança fiscal para sua carreira ou clínica.
          </p>
        </div>
      );
    } else if (rawName === 'advogados') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Advogados em Pouso Alegre: Gestão Financeira e Fiscal Sob Medida
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso serviço de contabilidade para advogados é desenvolvido para atender às demandas específicas da advocacia. Cuidamos de todas as obrigações fiscais e financeiras, oferecendo suporte estratégico para que você concentre seus esforços no crescimento de sua prática jurídica.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de contabilidade para advogados incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário personalizado:</strong> Identificação do regime tributário mais vantajoso (Simples Nacional, Lucro Presumido ou Lucro Real) para minimizar a carga tributária.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de honorários e despesas:</strong> Controle detalhado de recebimentos e gastos para uma visão clara do fluxo de caixa.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão e organização de notas fiscais:</strong> Suporte na emissão de notas fiscais de serviços advocatícios, evitando inconsistências.</li>
            <li style={{ marginBottom: '10px' }}><strong>Contabilidade para sociedades de advogados:</strong> Serviços completos para escritórios, com gestão financeira centralizada e relatórios detalhados.</li>
            <li style={{ marginBottom: '10px' }}><strong>Relatórios gerenciais:</strong> Informações financeiras claras para auxiliar na tomada de decisões estratégicas.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para sua Contabilidade Jurídica?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Especialização no Setor Jurídico</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Entendemos as especificidades da profissão de advogado e oferecemos soluções contábeis que atendem às suas necessidades únicas.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Otimização Tributária e Maior Rentabilidade</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso planejamento tributário é desenhado para reduzir impostos e maximizar os ganhos com honorários advocatícios.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Gestão Simplificada e Conformidade Fiscal</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Assumimos a responsabilidade pela parte burocrática, garantindo que todas as suas obrigações fiscais sejam cumpridas sem atrasos ou complicações.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para advogados com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Redução da carga tributária:</strong> Economize com estratégias fiscais específicas para o setor jurídico.</li>
            <li style={{ marginBottom: '10px' }}><strong>Organização financeira:</strong> Controle eficiente de receitas e despesas para um fluxo de caixa saudável.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade legal garantida:</strong> Evite multas e problemas fiscais com uma contabilidade sempre em dia.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria para crescimento profissional:</strong> Suporte estratégico para expandir sua prática com segurança financeira.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Deixe a Nova Era Cuidar da Sua Contabilidade
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> oferece contabilidade para advogados em Pouso Alegre, com serviços personalizados e foco em resultados. Entre em contato agora e descubra como podemos ajudar você a otimizar suas finanças, reduzir impostos e garantir a segurança fiscal necessária para o sucesso da sua carreira ou escritório.
          </p>
        </div>
      );
    } else if (rawName === 'arquitetos') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Arquitetos em Pouso Alegre: Soluções Fiscais Personalizadas
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso serviço de contabilidade para arquitetos é desenvolvido para atender às necessidades específicas do setor, permitindo que você se concentre em seus projetos enquanto cuidamos das suas finanças e tributos.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de contabilidade para arquitetos incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário estratégico:</strong> Identificação do regime tributário mais vantajoso, como Simples Nacional ou Lucro Presumido, para maximizar seus ganhos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de honorários e despesas:</strong> Controle eficiente de receitas e despesas para um fluxo de caixa equilibrado.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de notas fiscais:</strong> Suporte na emissão de notas fiscais de serviços arquitetônicos, garantindo conformidade com as normas legais.</li>
            <li style={{ marginBottom: '10px' }}><strong>Contabilidade para escritórios de arquitetura:</strong> Serviços completos para sociedades e escritórios, com foco na eficiência fiscal e financeira.</li>
            <li style={{ marginBottom: '10px' }}><strong>Relatórios gerenciais personalizados:</strong> Informações detalhadas para ajudar na tomada de decisões estratégicas.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para sua Contabilidade Arquitetônica?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Expertise no Setor de Arquitetura</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com vasta experiência no atendimento a arquitetos, entendemos as particularidades fiscais e financeiras da sua profissão.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Otimização Tributária e Financeira</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso planejamento tributário visa reduzir a carga fiscal, permitindo que você maximize seus rendimentos.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Gestão Simples e Eficiência Fiscal</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Cuidamos de todas as obrigações contábeis e fiscais, liberando você para focar no que faz de melhor: criar e executar projetos inovadores.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para arquitetos com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Redução de impostos:</strong> Economize com estratégias fiscais personalizadas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Controle financeiro eficaz:</strong> Gestão clara de receitas e despesas, garantindo maior previsibilidade.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade legal total:</strong> Evite problemas fiscais com uma contabilidade sempre em dia.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria financeira estratégica:</strong> Suporte para decisões que impulsionem seu crescimento.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Transforme Sua Gestão Financeira
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> é referência em contabilidade para arquitetos em Pouso Alegre, oferecendo serviços personalizados e focados em resultados. Entre em contato agora e descubra como podemos ajudar a otimizar suas finanças, reduzir impostos e proporcionar a segurança fiscal que você precisa.
          </p>
        </div>
      );
    } else if (rawName === 'engenheiros') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Engenheiros em Pouso Alegre: Soluções Focadas em Resultados
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso serviço é personalizado para atender às demandas específicas da sua área de atuação, permitindo que você se concentre no que realmente importa: seus projetos e clientes.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de contabilidade para engenheiros incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário estratégico:</strong> Escolha do regime tributário ideal (Simples Nacional, Lucro Presumido ou Lucro Real) para maximizar a eficiência tributária.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de receitas e despesas:</strong> Controle detalhado de entrada e saída de recursos para um fluxo de caixa saudável.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de notas fiscais:</strong> Suporte na emissão de notas fiscais de serviços de engenharia, garantindo conformidade legal.</li>
            <li style={{ marginBottom: '10px' }}><strong>Contabilidade para escritórios de engenharia:</strong> Serviços completos para empresas de engenharia, com relatórios gerenciais e consultoria financeira.</li>
            <li style={{ marginBottom: '10px' }}><strong>Relatórios financeiros detalhados:</strong> Dados claros e precisos para embasar suas decisões estratégicas.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para sua Contabilidade em Engenharia?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Expertise no Setor de Engenharia</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com experiência em atender engenheiros, conhecemos as particularidades fiscais e contábeis do setor, oferecendo soluções sob medida.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Redução de Custos Tributários</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nossas estratégias de planejamento tributário visam minimizar os custos fiscais, otimizando sua rentabilidade.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Gestão Simplificada e Conformidade Total</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Assumimos a responsabilidade pelas obrigações fiscais, liberando você das burocracias e garantindo conformidade com a legislação.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para engenheiros com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Economia de impostos:</strong> Aproveite regimes tributários mais vantajosos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Organização financeira:</strong> Tenha total controle das suas finanças, com relatórios claros e acessíveis.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade fiscal:</strong> Evite multas e problemas com o Fisco, mantendo todas as obrigações em dia.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria especializada:</strong> Orientação estratégica para impulsionar o crescimento do seu negócio.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Deixe a Nova Era Otimizar Suas Finanças
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> oferece serviços completos de contabilidade para engenheiros em Pouso Alegre, focados em eficiência, economia e segurança fiscal. Fale conosco hoje mesmo e descubra como podemos transformar a gestão financeira do seu negócio de engenharia.
          </p>
        </div>
      );
    } else if (rawName === 'youtubers') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para YouTubers em Pouso Alegre: Transforme Seus Ganhos em Resultados Sustentáveis
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Compreendemos as especificidades da profissão de YouTuber e oferecemos soluções contábeis personalizadas, garantindo que você possa se concentrar na produção de conteúdo enquanto cuidamos da sua saúde financeira.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário:</strong> Identificação do regime tributário mais vantajoso, como Simples Nacional ou MEI, dependendo da sua receita.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de receitas e despesas:</strong> Controle eficiente das suas finanças, incluindo ganhos com monetização, patrocínios e parcerias.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de notas fiscais:</strong> Regularização de serviços prestados para marcas e anunciantes.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria financeira personalizada:</strong> Orientação estratégica para otimizar seus rendimentos e investir no crescimento do seu canal.</li>
            <li style={{ marginBottom: '10px' }}><strong>Relatórios financeiros detalhados:</strong> Informações claras sobre o desempenho financeiro do seu negócio digital.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para sua contabilidade?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Experiência no Mercado Digital</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Trabalhamos com criadores de conteúdo digital, compreendendo as particularidades da carreira de YouTuber, desde a monetização até parcerias comerciais.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Redução de Impostos</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Através de um planejamento tributário eficiente, ajudamos você a economizar e investir mais no seu canal.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Conformidade e Tranquilidade</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Cuidamos de todas as obrigações fiscais, garantindo que você esteja sempre em dia com o Fisco.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para YouTubers com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Economia fiscal:</strong> Pague apenas o necessário com um regime tributário ideal.</li>
            <li style={{ marginBottom: '10px' }}><strong>Organização financeira:</strong> Controle financeiro claro e eficaz.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade fiscal total:</strong> Evite problemas legais e multas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria especializada:</strong> Maximize seus lucros e expanda seu canal com segurança financeira.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Eleve Seu Canal com a Gestão Financeira da Nova Era
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> é a escolha certa para YouTubers que desejam uma gestão financeira sólida e segura. Entre em contato hoje mesmo e descubra como podemos ajudar você a crescer com tranquilidade.
          </p>
        </div>
      );
    } else if (rawName === 'produtores-afiliados') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Produtores e Afiliados em Pouso Alegre: Gestão Eficiente para Negócios Digitais
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Compreendemos as particularidades do mercado digital e criamos soluções contábeis que atendem às necessidades exclusivas desse segmento, ajudando você a focar no crescimento do seu negócio.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário personalizado:</strong> Identificação do melhor regime tributário para produtores e afiliados digitais, como Simples Nacional ou Lucro Presumido.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de fluxo de caixa:</strong> Controle preciso de receitas e despesas para uma gestão financeira saudável.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de notas fiscais:</strong> Suporte na emissão de notas fiscais de vendas e comissões, garantindo conformidade com a legislação.</li>
            <li style={{ marginBottom: '10px' }}><strong>Contabilidade específica para o mercado digital:</strong> Relatórios financeiros detalhados para monitorar o desempenho do seu negócio.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria fiscal e financeira:</strong> Orientação estratégica para maximizar lucros e evitar problemas fiscais.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para sua contabilidade digital?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Experiência no Setor Digital</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Atuamos diretamente com profissionais do mercado digital, entendendo as especificidades de produtores de conteúdo, afiliados e empreendedores online.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Otimização Tributária</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Garantimos que você pague apenas o necessário em impostos, utilizando estratégias de planejamento tributário sob medida.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Gestão Simplificada</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Assumimos todas as obrigações fiscais e contábeis, liberando você para focar na produção de conteúdo e crescimento do seu negócio.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para produtores e afiliados com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Redução de impostos:</strong> Economize com um planejamento tributário eficiente.</li>
            <li style={{ marginBottom: '10px' }}><strong>Organização financeira:</strong> Controle claro e eficaz das finanças do seu negócio digital.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade fiscal total:</strong> Evite multas e complicações com o Fisco.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria estratégica:</strong> Aumente a lucratividade do seu negócio com decisões financeiras embasadas.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Amplie Seu Sucesso no Mercado Digital com a Nova Era
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> é a parceira ideal para produtores e afiliados digitais que buscam uma gestão financeira eficiente e resultados concretos. Entre em contato agora e descubra como podemos transformar a contabilidade do seu negócio digital em uma ferramenta estratégica para o seu crescimento.
          </p>
        </div>
      );
    } else if (rawName === 'desenvolvedores') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Desenvolvedores em Pouso Alegre: Gestão Financeira Sob Medida
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Entendemos as necessidades exclusivas dos desenvolvedores e oferecemos soluções contábeis personalizadas, permitindo que você foque no que faz de melhor: desenvolver tecnologias inovadoras.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário estratégico:</strong> Escolha do regime tributário mais vantajoso, como Simples Nacional, Lucro Presumido ou MEI.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de contas a pagar e a receber:</strong> Controle de fluxo de caixa para uma saúde financeira sólida.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de notas fiscais:</strong> Regularização de serviços prestados para empresas nacionais e internacionais.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria financeira:</strong> Estratégias para investimento e crescimento sustentável.</li>
            <li style={{ marginBottom: '10px' }}><strong>Relatórios gerenciais detalhados:</strong> Visão clara do desempenho financeiro do seu negócio.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para sua contabilidade?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Especialização no Setor de Tecnologia</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Atendemos diversos profissionais da área de TI, incluindo desenvolvedores, compreendendo os desafios e oportunidades específicos do setor.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Redução de Custos Tributários</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com um planejamento eficiente, ajudamos você a economizar em impostos, maximizando seus lucros.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Gestão Simplificada</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Cuidamos de todas as obrigações contábeis e fiscais, garantindo que você esteja sempre em conformidade com a legislação.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para desenvolvedores com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Economia fiscal:</strong> Reduza sua carga tributária de forma estratégica.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade garantida:</strong> Evite multas e complicações com o Fisco.</li>
            <li style={{ marginBottom: '10px' }}><strong>Visão financeira clara:</strong> Relatórios e análises que ajudam na tomada de decisão.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria especializada:</strong> Cresça com segurança e planejamento.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Foco na Inovação, Nós Cuidamos da Gestão Financeira
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> é a parceira ideal para desenvolvedores que buscam excelência na gestão financeira. Entre em contato hoje mesmo e descubra como podemos ajudar você a focar na inovação enquanto cuidamos do seu sucesso financeiro.
          </p>
        </div>
      );
    } else if (rawName === 'e-commerce') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para E-commerce em Pouso Alegre: Suporte Completo para Lojas Virtuais
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Gerenciar um e-commerce envolve desafios específicos, desde a gestão de estoques até a tributação de vendas interestaduais. Nossa equipe de especialistas entende essas particularidades e oferece suporte contábil completo para seu negócio online.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário eficiente:</strong> Escolha do regime tributário ideal, como Simples Nacional, Lucro Presumido ou Lucro Real.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de fluxo de caixa:</strong> Controle detalhado de receitas, despesas e lucros.</li>
            <li style={{ marginBottom: '10px' }}><strong>Apuração de impostos:</strong> Regularização de ICMS, ISS e outros tributos específicos de vendas online.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de notas fiscais eletrônicas:</strong> Garantia de conformidade nas operações de venda.</li>
            <li style={{ marginBottom: '10px' }}><strong>Relatórios gerenciais:</strong> Análise de desempenho financeiro e auxílio na tomada de decisões estratégicas.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para sua contabilidade?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Especialização em Negócios Digitais</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Temos ampla experiência no setor de e-commerce, entendendo os desafios e oportunidades desse modelo de negócio.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Redução de Custos Tributários</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Identificamos oportunidades para minimizar impostos e maximizar os lucros do seu e-commerce.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Gestão Prática e Confiável</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Nosso time cuida de todas as obrigações fiscais e contábeis, permitindo que você foque em oferecer uma experiência de compra excepcional para seus clientes.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para e-commerce com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Redução de impostos:</strong> Otimize sua carga tributária.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade total:</strong> Evite problemas fiscais com a regularização de documentos e tributos.</li>
            <li style={{ marginBottom: '10px' }}><strong>Análises financeiras:</strong> Relatórios detalhados para decisões estratégicas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria personalizada:</strong> Cresça com segurança e planejamento financeiro.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Escale Seu E-commerce com a Gestão Financeira da Nova Era
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> é a parceira ideal para quem busca uma gestão financeira eficiente e segura. Entre em contato agora mesmo e descubra como podemos ajudar seu e-commerce a crescer de forma sustentável.
          </p>
        </div>
      );
    } else if (rawName === 'empresas-de-tecnologia') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Empresas de Tecnologia em Pouso Alegre: Suporte Especializado e Estratégico
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso serviço de contabilidade para empresas de tecnologia é desenvolvido para atender às demandas específicas do setor, como gestão de custos com pesquisa e desenvolvimento (P&D), tributação sobre serviços digitais e compliance regulatório. Com a <strong>Nova Era Assessoria Contábil</strong>, você conta com um suporte contábil avançado para atingir suas metas de inovação e crescimento.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de contabilidade para empresas de tecnologia incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário para empresas de tecnologia:</strong> Avaliamos o regime tributário mais adequado, visando a redução da carga fiscal sem comprometer o compliance.</li>
            <li style={{ marginBottom: '10px' }}><strong>Controle de fluxo de caixa e análise de capital de giro:</strong> Gerenciamos o fluxo financeiro para garantir a estabilidade de caixa e o investimento contínuo em inovação.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de investimentos em P&D:</strong> Auxiliamos na contabilização e planejamento de investimentos em pesquisa e desenvolvimento.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão de notas fiscais para serviços digitais:</strong> Orientamos quanto à emissão correta de notas fiscais para serviços e produtos digitais, garantindo conformidade com a legislação.</li>
            <li style={{ marginBottom: '10px' }}><strong>Relatórios gerenciais e indicadores de desempenho:</strong> Fornecemos insights financeiros para apoiar decisões estratégicas e melhorar a rentabilidade.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para a Contabilidade da sua Empresa de Tecnologia?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Conhecimento no Setor de Tecnologia</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nossa equipe possui experiência no setor de tecnologia e compreende as especificidades contábeis e fiscais desse mercado em constante evolução.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Redução de Custos com Otimização Tributária</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso planejamento tributário é projetado para maximizar a economia fiscal da sua empresa, permitindo que você invista mais em inovação e desenvolvimento.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Consultoria para Crescimento e Escalabilidade</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Além da contabilidade, oferecemos consultoria financeira para apoiar o crescimento sustentável e escalável do seu negócio, garantindo que suas finanças estejam preparadas para a expansão.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para empresas de tecnologia com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Economia fiscal estratégica:</strong> Redução de impostos com base em um planejamento especializado para o setor de tecnologia.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão financeira precisa e organizada:</strong> Controle rigoroso do fluxo de caixa e dos investimentos em P&D.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade fiscal e regulamentar:</strong> Segurança e tranquilidade para focar no crescimento do negócio.</li>
            <li style={{ marginBottom: '10px' }}><strong>Suporte consultivo para expansão:</strong> Estratégias financeiras que facilitam a escalabilidade e a competitividade no mercado de tecnologia.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Precisa de uma Contabilidade Eficiente para sua Empresa de Tecnologia?
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> oferece contabilidade para empresas de tecnologia em Pouso Alegre com uma abordagem personalizada e inovadora. Entre em contato agora para saber como podemos ajudar sua empresa de tecnologia a crescer com segurança, organização e economia fiscal.
          </p>
        </div>
      );
    } else if (rawName === 'corretores-de-imoveis') {
      return (
        <div className="service-text-content">
          <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>
            Contabilidade para Corretores de Imóveis em Pouso Alegre: Soluções Fiscais e Financeiras Sob Medida
          </h2>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nosso serviço de contabilidade para corretores de imóveis é estruturado para atender às necessidades do mercado imobiliário, com foco em planejamento tributário, controle de comissões e acompanhamento de receitas e despesas. Com a <strong>Nova Era Assessoria Contábil</strong>, você conta com um suporte contábil confiável, permitindo que você foque no seu negócio sem preocupações financeiras.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Nossos serviços de contabilidade para corretores de imóveis incluem:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Planejamento tributário para corretores de imóveis:</strong> Avaliamos o melhor regime tributário para reduzir a carga fiscal e maximizar os ganhos de comissões.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão de comissões e rendimentos:</strong> Controlamos e registramos as comissões, assegurando clareza e precisão nos relatórios financeiros.</li>
            <li style={{ marginBottom: '10px' }}><strong>Emissão e acompanhamento de notas fiscais:</strong> Orientamos sobre a correta emissão de notas fiscais para serviços imobiliários, garantindo conformidade com a legislação.</li>
            <li style={{ marginBottom: '10px' }}><strong>Controle de despesas e fluxo de caixa:</strong> Acompanhamos suas despesas para que você mantenha uma saúde financeira equilibrada.</li>
            <li style={{ marginBottom: '10px' }}><strong>Relatórios de desempenho financeiro:</strong> Fornecemos relatórios claros e objetivos para facilitar a visualização dos resultados e auxiliar na tomada de decisões.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Por que escolher a Nova Era para a Contabilidade do seu Negócio Imobiliário?
          </h3>
          <h4 style={{ fontSize: '18px', color: '#333', marginTop: '20px', marginBottom: '10px' }}>Experiência no Setor Imobiliário</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Nossa equipe entende as particularidades do mercado imobiliário e oferece um serviço especializado para atender corretores de imóveis e imobiliárias.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Redução de Impostos e Maior Lucratividade</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '20px' }}>
            Com um planejamento tributário eficiente, ajudamos você a pagar menos impostos e a garantir mais lucro nas suas transações imobiliárias.
          </p>
  
          <h4 style={{ fontSize: '18px', color: '#333', marginBottom: '10px' }}>Acompanhamento Financeiro e Segurança Fiscal</h4>
          <p style={{ lineHeight: 1.6, color: '#555', marginBottom: '30px' }}>
            Cuidamos da gestão financeira completa, assegurando que todas as suas operações estejam organizadas e em conformidade com as exigências fiscais.
          </p>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Benefícios da contabilidade para corretores de imóveis com a Nova Era:
          </h3>
          <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.6, marginBottom: '30px' }}>
            <li style={{ marginBottom: '10px' }}><strong>Otimização tributária:</strong> Redução de impostos por meio de estratégias fiscais voltadas para o setor imobiliário.</li>
            <li style={{ marginBottom: '10px' }}><strong>Gestão precisa de comissões:</strong> Controle detalhado dos rendimentos provenientes das comissões de vendas.</li>
            <li style={{ marginBottom: '10px' }}><strong>Conformidade com as exigências fiscais:</strong> Segurança e tranquilidade ao lidar com questões tributárias.</li>
            <li style={{ marginBottom: '10px' }}><strong>Consultoria financeira para crescimento:</strong> Apoio estratégico para aumentar sua rentabilidade e competitividade no mercado.</li>
          </ul>
  
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '15px' }}>
            Maximize sua Lucratividade com a Contabilidade Especializada da Nova Era
          </h3>
          <p style={{ lineHeight: 1.6, color: '#555' }}>
            A <strong>Nova Era Assessoria Contábil</strong> oferece contabilidade para corretores de imóveis em Pouso Alegre com foco em eficiência e resultados. Entre em contato agora para saber como podemos ajudar você a organizar suas finanças, reduzir impostos e garantir o crescimento do seu negócio no mercado imobiliário!
          </p>
        </div>
      );
    }
  
    return (
      <div className="service-main-col">
        <h2>{serviceName} em Pouso Alegre: Solução Completa Para Você</h2>
        <br/>
        <p style={{fontSize: '18px', color: '#666', borderLeft: '4px solid var(--primary)', paddingLeft: '15px'}}>
          Página de: <strong>"{serviceName}"</strong> em andamento.
        </p>
      </div>
    );
  };

  return (
    <div className="service-page">
      {/* Dark Banner */}
      <div className="service-banner" style={isAssessoria ? { backgroundColor: 'var(--primary)' } : {}}>
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
        <div className="service-main-col-wrapper" style={{ flex: '1', paddingRight: '40px' }}>
          {renderContent()}
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
      {/* Parallax Bottom Banner */}
      <section className="parallax-section" style={{ backgroundImage: `url(${parallaxImg})`, padding: '40px 0', marginTop: '60px' }}>
        <div className="parallax-overlay" style={{ padding: '80px 20px' }}>
          <div className="container parallax-container" style={{ justifyContent: 'center' }}>
            <div className="parallax-content" style={{ textAlign: 'center', maxWidth: '900px' }}>
              <h2 style={{ fontSize: '38px', fontWeight: 800, marginBottom: '25px', lineHeight: 1.2 }}>
                Suporte Especializado Para o Sucesso da Sua Empresa
              </h2>
              <p style={{ fontSize: '15.5px', margin: '0 auto 35px', lineHeight: 1.6, maxWidth: '100%', opacity: 0.9 }}>
                Com soluções personalizadas e um atendimento próximo e transparente, ajudamos você a navegar por todas as questões contábeis e fiscais, garantindo conformidade, economia e tranquilidade. Não perca a oportunidade de trabalhar com profissionais que colocam o sucesso da sua empresa em primeiro lugar. Entre em contato agora e veja como nossos serviços podem levar seu empreendimento a um novo patamar.
              </p>
              <a href="https://wa.me/553530251978" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <button className="btn-whatsapp">
                  ENTRE EM CONTATO
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
