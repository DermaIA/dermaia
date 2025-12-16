import React, { useState } from "react";
import styles from "./EnviarFoto.module.css";


export default function EnviarFoto() {
  const [fileName, setFileName] = useState("Nenhum arquivo selecionado");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);

    setFileName(
      selected
        ? `${selected.name} (${Math.round(selected.size / 1024)} KB)`
        : "Nenhum arquivo selecionado"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Selecione uma foto antes de enviar.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Arquivo muito grande (máx. 10 MB).");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem("foto_enviada", reader.result);
      window.location.href = "/analise";
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
    <main className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Envie a foto da mancha</h1>

        <p className={styles.lead}>
          Siga estas instruções cuidadosas para obter uma imagem útil — isso melhora a
          qualidade da análise e ajuda na prevenção.
        </p>

        {/* --- DICAS --- */}
        <div className={styles.tips}>
          <div className={styles.tip}>📷 Limpe a lente antes de fotografar.</div>

          <div className={styles.tip}>
            💡 Utilize luz natural indireta. Evite sombras sobre a mancha.
          </div>

          <div className={styles.tip}>
            📏 Coloque um objeto de escala ao lado da mancha (régua/moeda).
          </div>

          <div className={styles.tip}>
            🎯 Mantenha o telefone estável e tire 2–3 fotos com diferentes distâncias.
          </div>

          <div className={styles.tip}>
            🧼 Se possível, lave suavemente a área antes de fotografar.
          </div>

          <div className={styles.tip}>
            🚫 Não use filtros ou edições — envie exatamente a foto original.
          </div>
        </div>

        {/* --- UPLOAD --- */}
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

          <button type="submit" className={styles.submit}>
            Enviar e Analisar
          </button>

          <p className={styles.note}>
            Nota: O Derma IA é uma ferramenta de triagem preventiva — <strong>não fornece diagnóstico médico.</strong> Em caso de dúvida, consulte um profissional de saúde.
          </p>
        </form>
      </div>
    </main>
    </>
  );
}
