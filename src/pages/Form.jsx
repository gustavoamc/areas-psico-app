import { useState } from 'react';
import { questionsData } from '../assets/questions';
import Question from '../components/Question/Question';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Results from '../components/Results/Results';
import NavigationButtons from '../components/NavigationButtons/NavigationButtons';
import styles from './Form.module.css';

export default function Form() {
  // Initialize answers for all questions (indexed by question id)
  const initialAnswers = questionsData.reduce((acc, q) => {
    acc[q.id] = -1; // -1 means not answered
    return acc;
  }, {});

  const [answers, setAnswers] = useState(initialAnswers);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [comecado, setComecado] = useState(false);

  const currentQuestion = questionsData[currentQuestionIndex];
  const totalQuestions = questionsData.length;

  // Handle answer change for current question
  const handleAnswerChange = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
    
    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setFinalizado(true);
      }
    }, 300);
  };

  // Check if current question is answered
  const isCurrentQuestionAnswered = () => {
    return answers[currentQuestion.id] >= 0;
  };

  // Count how many questions have been answered
  const countAnsweredQuestions = () => {
    return Object.values(answers).filter(a => a >= 0).length;
  };

  // Navigation
  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setFinalizado(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Prepare results grouped by section
  const prepareResults = () => {
    const sectionTitles = {
      1: 'Equilíbrio Emocional e Psicológico',
      2: 'Traumas e Superação',
      3: 'Relacionamentos e Vínculos',
      4: 'Habilidades Sociais e Posicionamento',
      5: 'Comportamento, Hábito e Ação',
      6: 'Trabalho, Carreira e Realização',
      7: 'Propósito e Existência'
    };

    const sections = {};
    
    questionsData.forEach(q => {
      if (!sections[q.section]) {
        sections[q.section] = {
          title: sectionTitles[q.section],
          total: 0
        };
      }
      
      const answer = answers[q.id];
      if (answer >= 0) {
        sections[q.section].total += answer;
      }
    });

    return sections;
  };

  const resultados = prepareResults();

  return (
    <div className={styles.formContainer}>
      <div className={styles.formContent}>

        {!comecado && (
          <div className={styles.opening}>
            <h1 className={styles.mainTitle}>Diagnóstico dos 7 vetores</h1>
            <h3>Este questionário serve para oriento ficar quais áreas da sua vida necessitam de maior atenção para que você tenha uma vida plena</h3>
            <h3>Responda a todas as perguntas com sinceridade</h3>

            <button onClick={() => setComecado(true)} className={styles.startButton}>Começar questionário</button>
          </div>
        )}

        {(!finalizado && comecado) && (
          <>
            <ProgressBar 
              questaoAtual={currentQuestionIndex} 
              totalQuestoes={totalQuestions}
              questoesRespondidas={countAnsweredQuestions()}
            />

            <div className={styles.questionWrapper}>
              <p className={styles.sectionLabel}>
                Seção {currentQuestion.section} - Questão {currentQuestionIndex + 1} de {totalQuestions}
              </p>
              <Question
                questao={{ id: currentQuestion.id, text: currentQuestion.question }}
                valor={answers[currentQuestion.id]}
                onChange={handleAnswerChange}
              />
            </div>

            <NavigationButtons
              questaoAtual={currentQuestionIndex}
              totalQuestoes={totalQuestions}
              onAnterior={previousQuestion}
              onProxima={nextQuestion}
              questaoCompleta={isCurrentQuestionAnswered()}
            />
          </>
        )}

        {(comecado && finalizado) && (
          <Results 
            resultados={resultados}
          />
        )}
      </div>
    </div>
  );
}
