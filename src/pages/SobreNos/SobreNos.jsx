import React, { useEffect } from "react";
import styles from "./SobreNos.module.css";
import AiSection from "../../components/AiSection";
import { FaLinkedin, FaGithub } from "react-icons/fa";


// helper para combinar classes (usa o nome do módulo se existir, senão mantém classe global)
function c(...names) {
  return names.map((n) => (styles[n] ? styles[n] : n)).join(" ");
}

export default function SobreNos() {
  // ============================
  // EQUIPES + LINKS
  // ============================
  const equipe = [
    {
      img: "gustavo.png",
      nome: "Gustavo Costa",
      cargo: "Product Owner",
      github: "https://github.com/GustavoMiec",
      linkedin: "https://www.linkedin.com/in/gustavo-costa-mieczkowsky-56b210255/",
    },
    {
      img: "luiz.png",
      nome: "Luiz Osaki",
      cargo: "Scrum Master",
      github: "https://github.com/LuizOsaki",
      linkedin: "https://www.linkedin.com/in/luizosaki",
    },
    {
      img: "wilson.png",
      nome: "Wilson Carlos",
      cargo: "Front-end/QA",
      github: "https://github.com/wilsondays",
      linkedin: "https://www.linkedin.com/in/wilsoncarlosfmdias/",
    },
    {
      img: "marilia.png",
      nome: "Marilia Santos",
      cargo: "UX Design / Financeiro",
      github: "https://github.com/mariliasantoss",
      linkedin: "https://www.linkedin.com/in/xxxxx",
    },
    {
      img: "eduarda.png",
      nome: "Eduarda Coelho",
      cargo: "Full-Stack",
      github: "https://github.com/dudacoelho177",
      linkedin: "https://www.linkedin.com/in/eduarda-coelho-047a91322/",
    },
    {
      img: "fernanda.png",
      nome: "Maria Fernanda",
      cargo: "Marketing",
      github: "https://github.com/fernandamartiins",
      linkedin: "https://www.linkedin.com/in/fernandamartinsvaz/",
    },
    {
      img: "camilo.png",
      nome: "Camilo Neves",
      cargo: "Back-end/Marketing",
      github: "https://github.com/camiloneves2005",
      linkedin: "https://www.linkedin.com/in/camilo-muller-8b5675329/",
    },
  ];
 
  useEffect(() => {
    // VLibras script
    const vl = document.createElement("script");
    vl.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    vl.onload = () => {
      if (window && window.VLibras)
        new window.VLibras.Widget("https://vlibras.gov.br/app");
    };
    document.body.appendChild(vl);

    // Accessibility widget
    const acc = document.createElement("script");
    acc.src = "https://accessibility-widget.pages.dev/dist/sienna.min.js";
    acc.defer = true;
    document.body.appendChild(acc);

    // Cleanup quando o componente desmontar
    return () => {
      document.body.removeChild(vl);
      document.body.removeChild(acc);
    };
  }, []);

  return (
    <>
      {/* BANNER */}
      <section className={c("banner", "fade-in")}>
        <img
          src="/assets/img_grupo2.png"
          alt="Equipe DermaIA"
          className={c("banner-img")}
        />
        <div className={c("banner-overlay", "container")}>
          <h1 className={c("sobre-banner-title")}>QUEM SOMOS?</h1>
          <p className={c("banner-text")}>
            A Equipe DermaIA é composta por sete integrantes comprometidos com a
            inovação tecnológica e o avanço da saúde digital. Nosso grupo reúne
            profissionais e estudantes das áreas de tecnologia da informação,
            design, análise de dados e gestão, unidos por um propósito comum:
            desenvolver soluções que promovam acessibilidade, prevenção e
            qualidade de vida por meio da tecnologia.
          </p>
        </div>
      </section>

      {/* MISSÃO / VISÃO / VALORES */}
      <section className={c("mission-vision-section", "fade-in")}>
        <div className={c("container")}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.4rem",
              fontWeight: "700",
              margin: "0 0 56px 0",
              color: "#ffffff",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
              letterSpacing: "1px",
            }}
          >
            Missão, Visão e Valores
          </h2>

          <div className={c("cards-row")}>
            {[
              {
                img: "/assets/missao.png",
                title: "Missão",
                text: "Nossa missão é usar a inteligência artificial para prevenir o câncer de pele, identificando sinais precoces e protegendo vidas.",
              },
              {
                img: "/assets/visao.png",
                title: "Visão",
                text: "Ter reconhecimento nacional como uma plataforma que transforma o cuidado da pele em um hábito.",
              },
              {
                img: "/assets/valores (2).png",
                title: "Valores",
                text: "Proteger a privacidade e os dados pessoais dos usuários, e atuar com foco na prevenção, evitando que o pior aconteça.",
              },
            ].map((card, i) => (
              <div className={c("info-card")} key={i}>
                <div className={c("card-inner")}>
                  <div className={c("card-front1")}>
                    <img src={card.img} alt={card.title} />
                    <h3>{card.title}</h3>
                  </div>
                  <div className={c("card-back1")}>
                    <p>{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ODS */}
      <section className={c("ods-section", "fade-in")}>
        <div className={c("container")}>
          <h2 className={c("section-heading")}>ODS que seguimos</h2>
          <div className={c("ods-grid")}>
            {["ods3.webp", "ods10.jpg", "ods17.png", "ods18.png"].map(
              (img, i) => (
                <div className={c("ods-item")} key={i}>
                  <img src={`/assets/${img}`} alt={`ODS ${i}`} />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className={c("team-section", "fade-in")} id="equipe">
        <div className={c("container")}>
          <h2>Conheça nosso time</h2>

          <div className={c("team-container-vertical")}>
            {equipe.map(
              ({ img, nome, cargo, github, linkedin }, i) => (
                <div className={c("team-card-horizontal")} key={i}>
                  <div className={c("left-side")}>
                    <div className={c("photo-circle")}>
                      <img src={`/assets/${img}`} alt={nome} />
                    </div>
                  </div>

                  <div className={c("right-side")}>
                    <h3 className={c("name")}>{nome}</h3>
                    <p className={c("role")}>{cargo}</p>

                    <div className={c("icons")}>
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub />
                      </a>

                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Seções externas */}
      <AiSection />
    </>
  );
}
