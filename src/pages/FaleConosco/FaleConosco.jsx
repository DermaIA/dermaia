import React from "react";
import styles from "./FaleConosco.module.css";
import AiSection from "../../components/AiSection";


const FaleConosco = () => {
  return (
    <div className={styles.wrapper}>
      {/* SEÇÃO CONTATO */}
      <section className={`${styles.contatoSection} ${styles.fadeIn}`}>
        <div className={styles.contatoContainer}>
          {/* Coluna esquerda */}
          <div className={styles.contatoInfo}>
            <h2>Fale Conosco</h2>
            <p>
              Na DermaIA, acreditamos que todo cuidado começa com uma boa conversa.<br />
              Se você tem dúvidas, sugestões ou quer saber mais sobre como podemos te ajudar,
              nossa equipe está pronta para ouvir e responder com atenção e carinho.
            </p>

            <div className={styles.contatoIcones}>
              <div className={styles.iconItem}>
                <a
                  href="https://wa.me/5511962998392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.icon} ${styles.whatsapp}`}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                    alt="WhatsApp"
                  />
                </a>
                <span>+55 11 96299-8392</span>
              </div>

              <div className={styles.iconItem}>
                <a
                  href="https://www.instagram.com/derma_ia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.icon} ${styles.instagram}`}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                  />
                </a>
                <span>@derma_ia</span>
              </div>

              <div className={styles.iconItem}>
                <a
                  href="mailto:dermaia2907@gmail.com"
                  className={`${styles.icon} ${styles.gmail}`}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                    alt="Gmail"
                  />
                </a>
                <span>dermaia2907@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className={styles.contatoForm}>
            <p className={styles.formTitle}>Envie uma mensagem para nós:</p>
            <form>
              <input type="text" placeholder="Seu nome:" />
              <input type="email" placeholder="Email:" />
              <input type="tel" placeholder="Telefone:" />
              <textarea placeholder="Escreva aqui sua dúvida:"></textarea>
              <button type="submit" className={styles.enviarBtn}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.faqSection} ${styles.fadeIn}`}>
        <h2>Perguntas Frequentes – FAQ</h2>

        <div className={styles.faqItem}>
          <details>
            <summary> 🧠 O que é a DermaIA?</summary>
            <p>
              A DermaIA é uma plataforma que utiliza inteligência artificial para auxiliar na prevenção e identificação precoce de possíveis lesões de pele. Ela oferece orientações e informações que ajudam o usuário a cuidar melhor da própria saúde.
            </p>
          </details>
        </div>

        <div className={styles.faqItem}>
          <details>
            <summary> 📷 Como funciona a análise de imagem?</summary>
            <p>
              O usuário envia uma foto da pele, e a IA realiza uma leitura inteligente, identificando possíveis sinais suspeitos.<br />
              <strong>Importante:</strong> a DermaIA não fornece diagnóstico médico, apenas orientações iniciais para incentivar a busca por um profissional.
            </p>
          </details>
        </div>

        <div className={styles.faqItem}>
          <details>
            <summary>💰 A DermaIA é gratuita?</summary>
            <p>
              Sim! A plataforma oferece um plano gratuito, ideal para uso pessoal. Para clínicas e profissionais da saúde, há também um plano profissional pago, com relatórios detalhados, histórico de análises e suporte especializado.
            </p>
          </details>
        </div>

        <div className={styles.faqItem}>
          <details>
            <summary> 🔒 Meus dados e fotos são seguros?</summary>
            <p>
              Sim. A DermaIA segue rigorosamente a Lei Geral de Proteção de Dados (LGPD). Todas as informações e imagens são criptografadas e utilizadas apenas para fins de análise e melhoria da plataforma.
            </p>
          </details>
        </div>

        <div className={styles.faqItem}>
          <details>
            <summary> ☀️ A DermaIA também ajuda na prevenção?</summary>
            <p>
              Sim! Além das análises, a plataforma envia dicas de proteção solar, alertas personalizados e orientações de cuidados com a pele no dia a dia.
            </p>
          </details>
        </div>

        <div className={styles.faqItem}>
          <details>
            <summary> 🏥 A DermaIA substitui uma consulta médica?</summary>
            <p>
              De forma alguma. A DermaIA não substitui o dermatologista. É uma ferramenta de apoio, criada para conscientizar, orientar e ajudar as pessoas a procurarem ajuda médica no momento certo.
            </p>
          </details>
        </div>
      </section>

      <AiSection/>
    </div>
  );
};

export default FaleConosco;
