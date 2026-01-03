import Question from '../Question/Question';
import styles from './Section.module.css';

export default function Section({ secao, respostas, onRespostasChange }) {
  const handleRespostaChange = (indexQuestao, valor) => {
    const novasRespostas = [...respostas];
    novasRespostas[indexQuestao] = valor;
    onRespostasChange(novasRespostas);
  };

  const total = respostas.reduce((acc, val) => val >= 0 ? acc + val : acc, 0);
  const todasRespondidas = respostas.every(r => r >= 0);

  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>{secao.title}</h2>
      <p className={styles.sectionSubtitle}>{secao.subtitle}</p>
      
      {secao.questions.map((questao, index) => (
        <Question
          key={questao.id}
          questao={questao}
          valor={respostas[index]}
          onChange={(valor) => handleRespostaChange(index, valor)}
        />
      ))}

      <div className={styles.totalContainer}>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>
            Total da Seção:
          </span>
          <span className={styles.totalValue}>
            {total}
          </span>
        </div>
        {!todasRespondidas && (
          <p className={styles.warningText}>
            * Responda todas as questões para continuar
          </p>
        )}
      </div>
    </div>
  );
}
