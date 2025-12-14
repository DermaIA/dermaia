import React from "react";
import styles from "./BaixaSugestao.module.css";


export default function BaixaSugestao() {
  return (
    <>
    <main className={styles.pageWrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Baixa sugestão de investigação!</h1>

        <p className={styles.intro}>
          Nossa análise automática não identificou sinais típicos de alerta nesta imagem.
          Isso é uma boa notícia — continue monitorando a região regularmente.
        </p>

        <div className={styles.columns}>
          {/* Coluna esquerda */}
          <section className={styles.left}>
            <h2 className={styles.sectionTitle}>O que você pode fazer agora</h2>

            <ul className={styles.list}>
              <li>
                Mantenha um registro fotográfico: tire uma nova foto em 1 mês para comparar.
              </li>
              <li>
                Se notar mudanças rápidas (aumento de tamanho, sangramento, mudança de cor),
                procure um médico.
              </li>
              <li>
                Siga práticas de prevenção: proteção solar, autoexame mensal.
              </li>
            </ul>
          </section>

          {/* Coluna direita */}
          <section className={styles.right}>
            <h2 className={styles.sectionTitle}>Quer falar com um especialista?</h2>

            <p className={styles.rightText}>
              Se preferir, encontre clínicas e dermatologistas próximos — mesmo sem sinal de
              alerta, a consulta pode trazer tranquilidade.
            </p>

            <a href="/MapaHospitais" className={styles.btnPrimary}>
              Ver mapa de clínicas
            </a>
          </section>
        </div>

        {/* Rodapé interno */}
        <div className={styles.bottomArea}>
          <p className={styles.warning}>
            Lembrete sensível: o Derma IA não substitui o diagnóstico médico. Caso se sinta
            inseguro, agende uma consulta.
          </p>

          <div className={styles.actions}>
            <a href="/EnviarFoto" className={styles.btnOutline}>
              Enviar outra foto
            </a>

            <button
              className={styles.btnGray}
              onClick={() => (window.location.href = "/")}
            >
              🏠 Ir para Home
            </button>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
