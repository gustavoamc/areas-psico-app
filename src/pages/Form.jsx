import { useState } from 'react';
import { sectionsData } from '../assets/questions';
import Section from '../components/Section/Section';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Results from '../components/Results/Results';
import NavigationButtons from '../components/NavigationButtons/NavigationButtons';
import styles from './Form.module.css';

export default function Form() {
  // Inicializa estado para todas as seções
  const keysSecoes = Object.keys(sectionsData);
  
  const initialState = keysSecoes.reduce((acc, key) => {
    const numQuestions = sectionsData[key].questions.length;
    acc[key] = {
      respostas: Array(numQuestions).fill(-1),
      total: 0
    };
    return acc;
  }, {});

  const [secoes, setSecoes] = useState(initialState);
  const [secaoAtual, setSecaoAtual] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const keySecaoAtual = keysSecoes[secaoAtual];

  // Atualiza respostas de uma seção
  const handleRespostasChange = (keySecao, novasRespostas) => {
    const total = novasRespostas.reduce((acc, val) => acc + val, 0);
    
    setSecoes(prev => ({
      ...prev,
      [keySecao]: {
        respostas: novasRespostas,
        total: total
      }
    }));
  };

  // Verifica se todas as questões da seção atual foram respondidas
  const secaoAtualCompleta = () => {
    return secoes[keySecaoAtual].respostas.every(r => r >= 0);
  };

  // Navegação
  const proximaSecao = () => {
    if (secaoAtual < keysSecoes.length - 1) {
      setSecaoAtual(prev => prev + 1);
    } else {
      setFinalizado(true);
    }
  };

  const secaoAnterior = () => {
    if (secaoAtual > 0) {
      setSecaoAtual(prev => prev - 1);
    }
  };

  const reiniciar = () => {
    setSecoes(initialState);
    setSecaoAtual(0);
    setFinalizado(false);
  };

  // Prepara dados para os resultados
  const resultados = keysSecoes.reduce((acc, key) => {
    acc[key] = {
      title: sectionsData[key].title,
      total: secoes[key].total
    };
    return acc;
  }, {});

  return (
    <div className={styles.formContainer}>
      <div className={styles.formContent}>
        <h1 className={styles.formTitle}>
          Formulário de Avaliação Psicológica
        </h1>

        {!finalizado ? (
          <>
            <ProgressBar 
              secaoAtual={secaoAtual} 
              totalSecoes={keysSecoes.length} 
            />

            <Section
              secao={sectionsData[keySecaoAtual]}
              respostas={secoes[keySecaoAtual].respostas}
              onRespostasChange={(respostas) => handleRespostasChange(keySecaoAtual, respostas)}
            />

            <NavigationButtons
              secaoAtual={secaoAtual}
              totalSecoes={keysSecoes.length}
              onAnterior={secaoAnterior}
              onProxima={proximaSecao}
              secaoCompleta={secaoAtualCompleta()}
            />
          </>
        ) : (
          <Results 
            resultados={resultados} 
            onReiniciar={reiniciar}
          />
        )}
      </div>
    </div>
  );
}
