import styles from './ProgressBar.module.css';

export default function ProgressBar({ secaoAtual, totalSecoes }) {
  const percentual = Math.round(((secaoAtual + 1) / totalSecoes) * 100);

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressInfo}>
        <span className={styles.progressText}>
          Seção {secaoAtual + 1} de {totalSecoes}
        </span>
        <span className={styles.progressText}>
          {percentual}%
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
