import { useEffect, useRef } from 'react';
import styles from "./AltaSugestao.module.css";
import L from 'leaflet'; // vamos usar Leaflet (leve e lindo)
import 'leaflet/dist/leaflet.css';

// Corrige ícones do Leaflet (bug comum no React)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function AltaSugestao() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    // Só roda no cliente
    if (!mapRef.current || mapInstance.current) return;

    // Tenta pegar localização do usuário
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        // Cria o mapa centralizado na localização do usuário
        const map = L.map(mapRef.current).setView([latitude, longitude], 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap',
          maxZoom: 19,
        }).addTo(map);

        // Marcador do usuário
        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup('<strong>Você está aqui</strong>')
          .openPopup();

        // Marcadores de clínicas (exemplo)
        const clinicas = [
          { nome: "Clínica A", lat: latitude + 0.005, lng: longitude +0.008, tel: "(11) 9999-0000" },
          { nome: "Hospital B", lat: latitude - 0.01, lng: longitude - 0.006, tel: "(11) 9888-1111" },
          { nome: "Dermato Center", lat: latitude + 0.012, lng: longitude + 0.004, tel: "(11) 9777-2222" },
        ];

        clinicas.forEach(c => {
          L.marker([c.lat, c.lng])
            .addTo(map)
            .bindPopup(`<strong>${c.nome}</strong><br>${c.tel}`);
        });

        mapInstance.current = map;
      },
      () => {
        // Se negar localização, usa São Paulo como padrão
        const map = L.map(mapRef.current).setView([-23.5505, -46.6333], 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker([-23.5505, -46.6333]).addTo(map).bindPopup("São Paulo").openPopup();
        mapInstance.current = map;
      }
    );

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <main className={styles.wrapper} role="main" aria-labelledby="title">
      
      {/* Coluna esquerda */}
      <section className={styles.left}>
        <h1 className="title">Atenção — Alta sugestão de investigação</h1>
        <p className={styles.intro}>A nossa triagem identificou características que merecem revisão por um profissional...</p>
        <h2>Orientações imediatas</h2>
        <ul className={styles.list}>
          <li><span>1</span> Mantenha a calma — a ferramenta apenas sinaliza a necessidade de avaliação.</li>
          <li><span>2</span> Evite manipular a área: não cutuque, não aplique pomadas sem orientação.</li>
          <li><span>3</span> Registre: salve a foto original e tire mais duas em boa iluminação.</li>
          <li><span>4</span> Agende uma consulta com dermatologista ou serviço de saúde.</li>
          <li><span>5</span> Se houver sangramento, dor intensa ou mudança rápida, procure urgência.</li>
        </ul>

        <div className={styles.note}>
          <strong>Nota de empatia:</strong> sabemos que essa indicação pode gerar preocupação...
        </div>

        <div className={styles.buttonsLeft}>
          <button className={styles.btnSecondary}>Enviar outra foto</button>
          <a href="/" className={styles.btnGhost}>🏠 Ir para Home</a>
        </div>
      </section>

      {/* Coluna direita */}
      <section className={styles.right} aria-label="Mapa e clínicas recomendadas">
        <h2>Mapa e contatos recomendados</h2>

        {/* MAPA */}
        <div ref={mapRef} className={styles.map}></div>
        <a href="/MapaHospitais">
        <button className={styles.btnPrimary}>
          Ver mapa de hospitais e clínicas
        </button>
        </a>
      </section>

       {/* Guia final */}
      <div className={styles.guide}>
        <h3>Roteiro de conversa para a consulta</h3>
        <ol>
          <li>Explique quando notou a mancha e quaisquer mudanças percebidas.</li>
          <li>Mostre as fotos (a original e as mais recentes).</li>
          <li>Pergunte sobre exames, opções de atendimento e tempo de espera.</li>
        </ol>
      </div>

      {/* Rodapé de alerta */}
      <footer className={styles.alertFooter}>
        ⚠️ <strong>Lembre-se:</strong> o Derma IA facilita a triagem,
        mas somente um médico pode confirmar qualquer hipótese.  
        Se precisar, procure ajuda imediatamente.
      </footer>
    </main>
  );
}
