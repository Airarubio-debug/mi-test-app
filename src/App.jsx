import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'
import Editor from './components/Editor'
// Importamos el archivo central de la carpeta data
import { initialTests } from '../data/banco';

function App() {
  const [screen, setScreen] = useState('home')
  const [tests, setTests] = useState([])
  const [currentTest, setCurrentTest] = useState(null)
  const [quizResult, setQuizResult] = useState(null)
  const [stats, setStats] = useState({ testsDone: 0, bestScore: null })

  useEffect(() => {
    // 1. Cargamos los tests desde el archivo central de datos
    setTests(initialTests);
    
    // 2. Cargamos las estadísticas guardadas en el navegador
    const savedStats = localStorage.getItem('stats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  const startTest = (testId) => {
    const test = tests.find(t => t.id === testId)
    if (test) {
      setCurrentTest(test)
      setScreen('quiz')
    }
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

  const goToEditor = () => setScreen('editor')

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
      {/* Pantalla de Inicio */}
      {screen === 'home' && (
        <Home 
          tests={tests} 
          stats={stats} 
          onStartTest={startTest} 
          onCreateTest={goToEditor} 
          onDeleteTest={deleteTest} 
        />
      )}

      {/* Pantalla del Test */}
      {screen === 'quiz' && (
        <Quiz 
          test={currentTest} 
          onFinish={finishQuiz} 
          onBack={goHome} 
        />
      )}

      {/* Pantalla de Resultados */}
      {screen === 'results' && (
        <Results 
          result={quizResult} 
          test={currentTest} 
          onBack={goHome} 
        />
      )}

      {/* Pantalla del Editor (para crear tests a mano) */}
      {screen === 'editor' && (
        <Editor 
          onSave={saveTest} 
          onBack={goHome} 
        />
      )}
    </div>
  )
}

export default App
// Intento final de despliegue