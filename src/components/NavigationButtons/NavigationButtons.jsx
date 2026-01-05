import styles from './NavigationButtons.module.css';

export default function NavigationButtons({ 
  questaoAtual, 
  totalQuestoes, 
  onAnterior, 
  onProxima, 
  questaoCompleta 
}) {
  const isFirstQuestion = questaoAtual === 0;
  const isLastQuestion = questaoAtual === totalQuestoes - 1;

  return (
    <div className={styles.navigationContainer}>
      <button
        onClick={onAnterior}
        disabled={isFirstQuestion}
        className={`${styles.button} ${styles.buttonSecondary}`}
      >
        Anterior
      </button>
      
      <button
        onClick={onProxima}
        disabled={!questaoCompleta}
        className={`${styles.button} ${styles.buttonPrimary}`}
      >
        {isLastQuestion ? 'Finalizar' : 'Próxima'}
      </button>
    </div>
  );
}
