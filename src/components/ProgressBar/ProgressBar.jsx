import styles from './ProgressBar.module.css';

export default function ProgressBar({ questaoAtual, totalQuestoes, questoesRespondidas }) {
  const percentual = Math.round((questoesRespondidas / totalQuestoes) * 100);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressInfo}>
        <span className={styles.progressText}>
          Questão {questaoAtual + 1} de {totalQuestoes}
        </span>
        <span className={styles.progressText}>
          {questoesRespondidas} respondidas ({percentual}%)
        </span>
      </div>
      <div className={styles.progressBarBg}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${percentual}%` }}
        />
      </div>
    </div>
  );
}
