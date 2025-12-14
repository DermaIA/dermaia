import React, { useState } from "react";
import "./DicaSol.css";

export default function SolResumo() {
  const faq = [
    {
      q: "A falta de sol causa deficiência de vitamina D? Como equilibrar isso sem aumentar o risco de câncer de pele?",
      a: "Sim, mas não é necessário tomar sol forte. A exposição antes das 10h e após as 16h já é suficiente para estimular vitamina D com baixo risco.",
    },
    {
      q: "Por que gestantes precisam ter mais cuidado com o sol?",
      a: "Os hormônios aumentam a atividade dos melanócitos, favorecendo o surgimento de manchas e pintas. Isso pode permitir evolução de lesões pré-malignas. Gestantes devem reforçar o protetor a cada 2 horas.",
    },
    {
      q: "Sol no couro cabeludo pode causar câncer de pele?",
      a: "Sim. A região é muito esquecida no protetor e recebe forte radiação, especialmente em pessoas com calvície.",
    },
    {
      q: "Loções pós-sol previnem câncer de pele?",
      a: "Não. Elas aliviam o desconforto, mas não revertem danos ao DNA causados pelos raios UV.",
    },
    {
      q: "Por que sentimos 'arrepio' no fim do dia após muito sol?",
      a: "Quando a pele superaquece e encontra vento ou sombra, as terminações nervosas detectam a mudança brusca — causando calafrios.",
    },
    {
      q: "Entrar na água reduz ou aumenta o risco de insolação?",
      a: "Reduz o risco de insolação porque resfria o corpo, mas NÃO reduz o risco de câncer de pele, pois a água reflete UV. Mesmo dentro da água, evite o sol das 9/10h às 16/17h.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <div className="pele-container">

      {/* HEADER PREMIUM */}
      <div className="prev-card">
        <div className="prev-header">
          <div className="prev-header-icon">🌞</div>

          <div>
            <h1>O Sol — Riscos, Benefícios e Radiação</h1>
            <p className="subtitle">
              Entenda como a radiação UV afeta sua pele e como se proteger
            </p>
          </div>

          <div className="prev-tags">
            <span className="tag-green">Saúde</span>
            <span className="tag-blue">Prevenção</span>
          </div>
        </div>

        {/* CORPO */}
        <div className="prev-body">

          {/* Seção: Tipos de Radiação */}
          <section>
            <h2>🌤 Tipos de Radiação Ultravioleta</h2>

            <div className="prev-grid">

              <div className="prev-box">
                <strong>UVA (320–400 nm)</strong>
                <ul>
                  <li>Presente o dia inteiro, mesmo com nublado.</li>
                  <li>Penetra profundamente na pele.</li>
                  <li>Danifica colágeno e elastina → envelhecimento.</li>
                  <li>Contribui para o câncer de pele.</li>
                </ul>
              </div>

              <div className="prev-box">
                <strong>UVB (280–320 nm)</strong>
                <ul>
                  <li>Filtrado parcialmente pela camada de ozônio.</li>
                  <li>Mais forte das 10h às 16h.</li>
                  <li>Provoca queimaduras, vermelhidão e sardas.</li>
                  <li>Principal responsável por câncer de pele.</li>
                </ul>
              </div>

              <div className="prev-box">
                <strong>UVC</strong>
                <p>Totalmente bloqueado pela camada de ozônio.</p>
              </div>

            </div>
          </section>

          {/* Seção: Sol faz bem */}
          <section>
            <h2>🌿 Quando o Sol Faz Bem</h2>
            <p>De 15 a 30 minutos/dia, antes das 10h e após as 16h:</p>

            <ul>
              <li>Estimula produção de vitamina D;</li>
              <li>Fortalece o sistema imunológico;</li>
              <li>Ajuda no tratamento de psoríase;</li>
              <li>Melhora humor e depressão leve.</li>
            </ul>
          </section>

          {/* Seção: Sol faz mal */}
          <section>
            <h2>⚠️ Quando o Sol Faz Mal</h2>
            <ul>
              <li>UVA + UVB danificam o DNA das células.</li>
              <li>Mutações podem evoluir para câncer de pele.</li>
              <li>O dano é acumulativo ao longo da vida.</li>
              <li>A destruição da camada de ozônio aumenta o risco.</li>
            </ul>
          </section>

          {/* Seção: Horários de risco */}
          <section>
            <h2>🕒 Horários de Maior Risco</h2>

            <ul>
              <li>Regra geral: das 10h às 16h;</li>
              <li>No Nordeste: evitar já a partir das 9h;</li>
              <li>Em alguns locais, o sol segue forte até 17h;</li>
              <li>Índice UV acima de 11 = extremo.</li>
            </ul>
          </section>

          {/* Seção: Ambientes */}
          <section>
            <h2>🌎 Radiação em Diferentes Ambientes</h2>

            <ul>
              <li>Cidade, campo e praia têm radiação elevada.</li>
              <li>Areia, água e neve refletem UV → mais queimaduras.</li>
              <li>Sal do mar aumenta irritação: enxágue a pele.</li>
            </ul>
          </section>

          {/* Seção: Insolação */}
          <section>
            <h2>🌡️ Banho de Sol x Insolação</h2>

            <ul>
              <li>Pele vermelha = queimadura por UVB;</li>
              <li>Insolação = aumento extremo da temperatura corporal;</li>
              <li>Sintomas: febre, dor de cabeça, tontura, risco de desmaio.</li>
            </ul>
            <p><em>Em caso de suspeita, procure atendimento.</em></p>
          </section>

          {/* Seção: Curiosidades */}
          <section>
            <h2>⭐ Curiosidades</h2>

            <ul>
              <li>UVA atravessa nuvens.</li>
              <li>UVB causa queimaduras.</li>
              <li>Mesmo dentro da água, o UV continua forte.</li>
              <li>Dias poluídos não reduzem a radiação solar.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="faq-section">
            <h2>❓ Dúvidas Frequentes sobre Sol e Pele</h2>

            {faq.map((item, index) => (
              <div
                key={index}
                className={`faq-card ${open === index ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span>{item.q}</span>
                  <span className={`arrow ${open === index ? "open" : ""}`}>▼</span>
                </button>

                <div
                  className={`faq-content ${open === index ? "open" : ""}`}
                  style={{ maxHeight: open === index ? "200px" : "0px" }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </section>

        </div>
      </div>
                  {/* BOTÕES FINAIS */}
      <div className="pele-buttons">
        <a href="/Blog" className="btn-voltar">⬅ Voltar para o Blog</a>
        <a href="/" className="btn-home">🏠 Ir para Home</a>
      </div>
    </div>
  );
}
