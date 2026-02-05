import styles from './Question.module.css';

export default function Question({ questao, valor, onChange }) {
  const options = [
    { value: 0, label: "Nunca" },
    { value: 1, label: "Quase nunca" },
    { value: 2, label: "Às vezes" },
    { value: 3, label: "Frequentemente" }
  ];

  return (
    <div className={styles.questionContainer}>
      <h3 className={styles.questionLabel}>
        {questao.text}
      </h3>
      <div className={styles.optionsContainer}>
        {options.map((option) => (
          <label key={option.value} className={styles.optionLabel}>
            <input
              type="radio"
              name={questao.id}
              value={option.value}
              checked={valor === option.value}
              onChange={(e) => onChange(parseInt(e.target.value))}
              className={styles.radioInput}
            />
            <span className={styles.optionText}>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
