import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import styles from './Results.module.css';

export default function Results({ resultados }) {
  // Yellow gradient from light to dark (0 to 7)
  const NORMAL_COLORS = ['#fef9c3', '#fef08a', '#fde047', '#facc15', '#eab308', '#ca8a04', '#a16207'];
  // Red color for high attention
  const HIGH_ATTENTION_COLOR = '#ef4444';
  
  const dados = Object.entries(resultados).map(([key, value], index) => ({
    name: `${value.title}`,
    vector: `${index + 1}`,
    value: value.total
  }));

  // Find the highest score
  const maxScore = Math.max(...dados.map(d => d.value));
  
  // Function to get color based on whether section needs attention
  const getColor = (index, value) => {
    return value === maxScore ? HIGH_ATTENTION_COLOR : NORMAL_COLORS[index % NORMAL_COLORS.length];
  };
  
  // Separate sections into high attention and others
  const highAttentionSections = Object.entries(resultados)
    .map(([key, value], index) => ({ key, value, index }))
    .filter(item => item.value.total === maxScore);
  
  const otherSections = Object.entries(resultados)
    .map(([key, value], index) => ({ key, value, index }))
    .filter(item => item.value.total < maxScore);

  return (
    <div className={styles.resultsContainer}>
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={dados}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={(props) => {
                const { cx, cy, midAngle, innerRadius, outerRadius, percent, payload } = props;
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text 
                    x={x} 
                    y={y} 
                    fill="black" 
                    textAnchor="middle" 
                    dominantBaseline="central"
                    fontSize={14}
                    fontWeight="bold"
                  >
                    {`V${payload.vector}`}
                  </text>
                );
              }}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {dados.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(index, entry.value)} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.subtitles}>
        {dados.map((item, index) => (
          <div key={index} className={styles.subtitleItem}>
            V{item.vector}: {item.name}
          </div>
        ))}
      </div>

      {highAttentionSections.length > 0 && (
        <div className={styles.attentionBox}>
          <h3 className={styles.boxTitle}>Esse é seu vetor crítico.</h3>
          <div className={styles.scoresList}>
            {highAttentionSections.map((item) => (
              <div key={item.key} className={styles.scoreItem}>
                <span className={styles.scoreName}>Vetor {item.index + 1} - {item.value.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
