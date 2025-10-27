
"use client";

// Embora os ícones inline funcionem, usar uma biblioteca como lucide-react 
// pode ser mais consistente se já estiver em uso no projeto.
const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const WhatsAppBrandIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);


const LeafIcon = () => (
    <svg className="logo-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
       <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z"/>
        <path d="M12 6v12M6 12h12"/>
    </svg>
)

export function FinalCall() {
  const whatsappUrl = "https://wa.me/message/LYE53KRZF34SE1";

  return (
    <footer className="footer-section">
      <div className="footer-container">

        <div className="footer-content">
          
          <div className="footer-column footer-about">
            <div className="footer-logo">
               <LeafIcon/>
              <h3>Skincare Natural</h3>
            </div>
            <p className="footer-description">
              Transforme sua pele com o poder dos ingredientes naturais. 
              Receitas caseiras, eficazes e sustentáveis para uma beleza autêntica.
            </p>
            <div className="footer-badges">
              <span className="badge">🔒 100% Seguro</span>
              <span className="badge">✓ Garantia 30 Dias</span>
              <span className="badge">🌱 Natural</span>
            </div>
          </div>
          
          <div className="footer-column footer-links">
            <h4>Links Úteis</h4>
            <ul>
              <li><a href="#hero">Sobre o Método</a></li>
              <li><a href="#benefits">Benefícios</a></li>
              <li><a href="#target-audience">Depoimentos</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
              <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-column footer-security">
            <h4>Compra Segura</h4>
            <div className="security-items">
              <div className="security-item">
                <ShieldIcon/>
                <div>
                  <strong>Pagamento Seguro</strong>
                  <p>Criptografia SSL</p>
                </div>
              </div>
              <div className="security-item">
                <CheckCircleIcon/>
                <div>
                  <strong>Acesso Imediato</strong>
                  <p>Após aprovação do pagamento</p>
                </div>
              </div>
              <div className="security-item">
                <ShieldCheckIcon/>
                <div>
                  <strong>Garantia 30 Dias</strong>
                  <p>Risco zero para você</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="footer-whatsapp">
          <div className="whatsapp-card">
            <div className="whatsapp-content">
              <WhatsAppBrandIcon />
              <div className="whatsapp-text">
                <h4>Ainda com Dúvidas? Fale Conosco!</h4>
                <p>Nossa equipe está pronta para responder qualquer pergunta</p>
              </div>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="whatsapp-button">
                <WhatsAppIcon />
                CONVERSAR NO WHATSAPP
              </button>
            </a>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="copyright">© 2025 Protocolo Anti-Indústria. Todos os direitos reservados.</p>
            <div className="legal-links">
              <a href="#privacidade">Política de Privacidade</a>
              <span>•</span>
              <a href="#termos">Termos de Uso</a>
              <span>•</span>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
          
          <div className="footer-disclaimer">
            <p className="disclaimer-text">
              <strong>Aviso legal:</strong> Este site não é afiliado ao Meta ou a qualquer entidade do Meta. 
              Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. 
              Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e 
              usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. 
              Jamais fazemos nenhum tipo de spam.
            </p>
          </div>
        </div>
        
      </div>
      
      <div className="footer-decoration footer-leaf-1"></div>
      <div className="footer-decoration footer-leaf-2"></div>
      <div className="footer-decoration footer-leaf-3"></div>
    </footer>
  );
}
