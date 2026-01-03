import styles from './NavigationButtons.module.css';

export default function NavigationButtons({ 
  secaoAtual, 
  totalSecoes, 
  onAnterior, 
  onProxima, 
  secaoCompleta 
}) {
  const isFirstSection = secaoAtual === 0;
  const isLastSection = secaoAtual === totalSecoes - 1;

  return (
    <div className={styles.navigationContainer}>
      <button
        onClick={onAnterior}
        disabled={isFirstSection}
        className={`${styles.button} ${styles.buttonSecondary}`}
      >
        Anterior
      </button>
      
      <button
        onClick={onProxima}
        disabled={!secaoCompleta}
        className={`${styles.button} ${styles.buttonPrimary}`}
      >
        {isLastSection ? 'Finalizar' : 'Próxima'}
      </button>
    </div>
  );
}
