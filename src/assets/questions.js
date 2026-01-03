
const sectionsData = {
    section1: {
        title: "Equilíbrio Emocional e Psicológico",
        subtitle: "Este pilar avalia ansiedade, ruminação, pensamento automático negativo, estresse emocional e regulação psicológica.",
        questions: [
            { id: 's1q1', text: 'Tenho dificuldade de controlar pensamentos negativos que surgem automaticamente.' },
            { id: 's1q2', text: 'Sinto ansiedade ou preocupação excessiva mesmo quando nada grave está acontecendo.' },
            { id: 's1q3', text: 'Minha mente entra em ruminação e fico repetindo os mesmos pensamentos por muito tempo.' },
            { id: 's1q4', text: 'Minhas emoções oscilam de forma intensa e às vezes sinto que perco o controle delas.' }
        ]
    },
    section2: {
        title: "Traumas e Superação",
        subtitle: " Este pilar avalia feridas do passado: rejeição, abusos, perdas, bullying e eventos traumáticos.",
        questions: [
            { id: 's2q1', text: 'Sinto que experiências difíceis do meu passado ainda influenciam minhas emoções hoje.' },
            { id: 's2q2', text: 'Tenho medo de reviver situações que me machucaram anteriormente.' },
            { id: 's2q3', text: 'Às vezes me pego reagindo como se estivesse sendo ferido novamente, mesmo quando não estou.' },
            { id: 's2q4', text: 'Tenho dificuldade de ressignificar acontecimentos traumáticos ou dolorosos que vivi.' }
        ]
    },
    section3: {
        title: "Relacionamentos e Vínculos",
        subtitle: "Avalia dependência emocional, vínculos instáveis, solidão e padrões tóxicos.",
        questions: [
            { id: 's3q1', text: 'Tenho dificuldade em construir ou manter relações saudáveis.' },
            { id: 's3q2', text: 'Sinto medo de ser abandonado ou rejeitado em relacionamentos importantes.' },
            { id: 's3q3', text: 'Fico preso(a) em relações que me fazem mal ou que já deveriam ter terminado.' },
            { id: 's3q4', text: 'Eu me sinto sozinho(a) mesmo quando estou rodeado(a) de pessoas.' }
        ]
    },
    section4: {
        title: "Habilidades Sociais e Posicionamento",
        subtitle: "Avalia timidez, vergonha social, opinião própria, limites e assertividade.",
        questions: [
            { id: 's4q1', text: 'Evito situações sociais por medo de ser julgado(a) ou criticado(a).' },
            { id: 's4q2', text: 'Tenho dificuldade de dizer “não” e estabelecer limites claros.' },
            { id: 's4q3', text: 'Muitas vezes deixo de expressar minha opinião por insegurança.' },
            { id: 's4q4', text: 'Sinto desconforto excessivo em falar em público ou ser o centro das atenções.' }
        ]
    },
    section5: {
        title: "Comportamento, Hábito e Ação",
        subtitle: "Avalia procrastinação, rotina, impulsividade, organização e hábitos de vida.",
        questions: [
            { id: 's5q1', text: 'Tenho dificuldade de manter uma rotina organizada e consistente.' },
            { id: 's5q2', text: 'Procrastino tarefas importantes mesmo sabendo que isso me prejudica.' },
            { id: 's5q3', text: 'Entro em ciclos de autosabotagem que atrapalham meus objetivos.' },
            { id: 's5q4', text: 'Eu me sinto preso(a) em comportamentos que não consigo mudar (como compulsões, impulsos ou vícios).' }
        ]
    },
    section6: {
        title: "Trabalho, Carreira e Realização",
        subtitle: "Avalia insatisfação profissional, burnout, estagnação e foco na carreira.",
        questions: [
            { id: 's6q1', text: 'Me sinto insatisfeito(a) ou desmotivado(a) com meu trabalho atual.' },
            { id: 's6q2', text: 'Tenho a sensação de estar estagnado(a) profissionalmente.' },
            { id: 's6q3', text: 'Sinto sobrecarga ou esgotamento ao tentar conciliar minhas responsabilidades.' },
            { id: 's6q4', text: 'Tenho dificuldade de tomar decisões que poderiam melhorar minha carreira.' }
        ]
    },
    section7: {
        title: "Propósito e Existência",
        subtitle: "Avalia vazio existencial, sentido de vida, valores, direção e coerência.",
        questions: [
            { id: 's7q1', text: 'Sinto um vazio ou a sensação de que falta algo importante na minha vida.' },
            { id: 's7q2', text: 'Tenho dificuldade em identificar meu propósito ou direção de vida.' },
            { id: 's7q3', text: 'Muitas vezes percebo que minhas ações não estão alinhadas com meus valores.' },
            { id: 's7q4', text: 'Eu me sinto perdido(a) em relação ao futuro e às escolhas existenciais que preciso fazer.' }
        ]
    },
}

export { sectionsData };