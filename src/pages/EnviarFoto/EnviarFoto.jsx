import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import styles from "./EnviarFoto.module.css";

export default function EnviarFoto() {
  const [fileName, setFileName] = useState("Nenhum arquivo selecionado");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    setFileName(
      `${selected.name} (${Math.round(selected.size / 1024)} KB)`
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Selecione uma foto antes de enviar.");
      return;
    }

    setLoading(true);

    try {
      const options = {
        maxSizeMB: 2,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(file, options);

      console.log(
        "Imagem pronta para análise:",
        Math.round(compressedFile.size / 1024),
        "KB"
      );

      // 👉 AQUI você chamaria a API de análise
      // await analisarImagem(compressedFile);

      // Redireciona sem salvar imagem
      window.location.href = "/analise";
    } catch (err) {
      console.error("Erro ao processar imagem:", err);
      alert("Erro ao processar a imagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Envie a foto da mancha</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.fileInput}>
            <span className={styles.fileLabel}>Escolher foto</span>
            <span className={styles.fileName}>{fileName}</span>

            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileChange}
            />
          </label>

          <button type="submit" className={styles.submit} disabled={loading}>
            {loading ? "Processando..." : "Enviar e Analisar"}
          </button>
        </form>
      </div>
    </main>
  );
}
