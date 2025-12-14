import React, { useEffect, useState } from "react";
import styles from "./ReenviarFoto.module.css";

export default function ErroAnalise() {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const foto = localStorage.getItem("foto_enviada");
    if (foto) setPreview(foto);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.container}>
        {/* Grid de duas colunas */}
        <div className={styles.contentGrid}>
          
          {/* COLUNA ESQUERDA — FOTO */}
          <section className={styles.leftColumn}>
            <h2 className={styles.photoTitle}>Foto enviada</h2>

            <div className={styles.photoWrapper}>
              {preview ? (
                <img
                  src={preview}
                  alt="Foto analisada"
                  className={styles.photo}
                />
              ) : (
                <div className={styles.placeholder}>Carregando imagem...</div>
              )}
            </div>
          </section>

          {/* COLUNA DIREITA — TEXTO + BOTÕES */}
          <section className={styles.rightColumn}>
            {/* Cabeçalho */}
            <div className={styles.header}>
              <span className={styles.alertIcon}>⚠️</span>
              <h1 className={styles.title}>Erro na Análise</h1>
            </div>

            <p className={styles.message}>
              Não foi possível processar a imagem enviada.
              <br />
              Isso pode ocorrer por <strong>baixa qualidade, desfoque, pouca luz</strong> ou falha no envio.
            </p>

            <p className={styles.helpText}>
              Por favor, tente novamente enviando outra foto ou retorne ao início para revisar as instruções.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.btnBack}>🏠 Ir para Home</a>
              <a href="/EnviarFoto" className={styles.btnRetry}>Enviar Outra Foto</a>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
