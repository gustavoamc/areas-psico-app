import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import styles from './Results.module.css';

export default function Results({ resultados, onReiniciar }) {
  const dados = Object.entries(resultados).map(([key, value], index) => ({
    nome: `Seção ${index + 1}`,
    titulo: value.title,
    total: value.total
  }));

  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.resultsTitle}>Resultados Finais</h2>
      
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dados}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nome" />
            <YAxis />
            <Legend />
            <Bar dataKey="total" fill="#3b82f6" name="Pontuação" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.scoresList}>
        {dados.map((item) => (
          <div key={item.nome} className={styles.scoreItem}>
            <span className={styles.scoreName}>{item.nome} - {item.titulo}</span>
            <span className={styles.scoreValue}>{item.total} pontos</span>
          </div>
        ))}
      </div>

      <button
        onClick={onReiniciar}
        className={styles.restartButton}
      >
        Reiniciar Questionário
      </button>
    </div>
  );
}
