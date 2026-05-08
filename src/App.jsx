import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'
import Editor from './components/Editor'

function App() {
  const [screen, setScreen] = useState('home')
  const [tests, setTests] = useState([])
  const [currentTest, setCurrentTest] = useState(null)
  const [quizResult, setQuizResult] = useState(null)
  const [stats, setStats] = useState({ testsDone: 0, bestScore: null })

  useEffect(() => {
  // 1. Definimos tus tests actuales (los que quieres que se vean)
  const currentCodeTests = [
    {
      id: 1,
      name: 'Sostenibilidad (ASIR)',
      questions: [ /* ... tus preguntas ... */ ]
    }
    // Añade aquí los nuevos que hayas creado en VS Code
  ];

  const savedTests = localStorage.getItem('tests');

  if (!savedTests) {
    // Si no hay nada, guardamos los del código
    setTests(currentCodeTests);
    localStorage.setItem('tests', JSON.stringify(currentCodeTests));
  } else {
    // OPCIONAL: Si quieres que SIEMPRE mande el código sobre el localStorage
    // mientras estás desarrollando, usa:
    setTests(currentCodeTests);
  }
  
  // Ojo: Asegúrate de que 'savedStats' esté definido, 
  // en tu código falta la línea: const savedStats = localStorage.getItem('stats');
}, []);

  const startTest = (testId) => {
    const test = tests.find(t => t.id === testId)
    setCurrentTest(test)
    setScreen('quiz')
  }

  const finishQuiz = (score, userAnswers) => {
    const newStats = {
      testsDone: stats.testsDone + 1,
      bestScore: stats.bestScore === null ? score : Math.max(stats.bestScore, score)
    }
    setStats(newStats)
    localStorage.setItem('stats', JSON.stringify(newStats))
    setQuizResult({ score, userAnswers, testName: currentTest.name })
    setScreen('results')
  }

  const goHome = () => {
    setScreen('home')
    setCurrentTest(null)
    setQuizResult(null)
  }

  const goToEditor = () => {
    setScreen('editor')
  }

  const saveTest = (newTest) => {
    const testWithId = { ...newTest, id: Date.now() }
    const updatedTests = [...tests, testWithId]
    setTests(updatedTests)
    localStorage.setItem('tests', JSON.stringify(updatedTests))
    goHome()
  }

  const deleteTest = (testId) => {
    const updatedTests = tests.filter(t => t.id !== testId)
    setTests(updatedTests)
    localStorage.setItem('tests', JSON.stringify(updatedTests))
  }

  return (
    <div className="app">
      {screen === 'home' && <Home tests={tests} stats={stats} onStartTest={startTest} onCreateTest={goToEditor} onDeleteTest={deleteTest} />}
      {screen === 'quiz' && <Quiz test={currentTest} onFinish={finishQuiz} onBack={goHome} />}
      {screen === 'results' && <Results result={quizResult} test={currentTest} onBack={goHome} />}
      {screen === 'editor' && <Editor onSave={saveTest} onBack={goHome} />}
    </div>
  )
}

export default App