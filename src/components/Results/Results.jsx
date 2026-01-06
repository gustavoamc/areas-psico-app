import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import styles from './Results.module.css';

export default function Results({ resultados, onReiniciar }) {
  const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#c20d0dff', '#ec4899', '#101091'];
  
  const dados = Object.entries(resultados).map(([key, value], index) => ({
    name: `${value.title}`,
    section: `Seção ${index + 1}`,
    value: value.total
  }));

  // Find the highest score
  const maxScore = Math.max(...dados.map(d => d.value));
  
  // Separate sections into high attention and others
  const highAttentionSections = Object.entries(resultados)
    .map(([key, value], index) => ({ key, value, index }))
    .filter(item => item.value.total === maxScore);
  
  const otherSections = Object.entries(resultados)
    .map(([key, value], index) => ({ key, value, index }))
    .filter(item => item.value.total < maxScore);

  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.resultsTitle}>Resultados Finais</h2>
      
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={dados}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ section, percent }) => `${section}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {dados.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {highAttentionSections.length > 0 && (
        <div className={styles.attentionBox}>
          <h3 className={styles.boxTitle}>Esse vetor precisa de sua atenção</h3>
          <div className={styles.scoresList}>
            {highAttentionSections.map((item) => (
              <div key={item.key} className={styles.scoreItem}>
                <span className={styles.scoreName}>Seção {item.index + 1} - {item.value.title}</span>
                <span className={styles.scoreValue}>{item.value.total} pontos</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {otherSections.length > 0 && (
        <div className={styles.othersBox}>
          <h3 className={styles.boxTitle}>Outros</h3>
          <p className={styles.othersText}>
            {otherSections.map((item, idx) => (
              `Seção ${item.index + 1}: ${item.value.total} pontos${idx < otherSections.length - 1 ? ', ' : ''}`
            )).join('')}
          </p>
        </div>
      )}

      <button
        onClick={onReiniciar}
        className={styles.restartButton}
      >
        Reiniciar Questionário
      </button>
    </div>
  );
}
