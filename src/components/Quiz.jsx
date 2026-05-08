import { useState } from 'react'
import './Quiz.css'

export default function Quiz({ test, onFinish, onBack }) {
  const [curQ, setCurQ] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const q = test.questions[curQ]
  const total = test.questions.length
  const progress = ((curQ + 1) / total) * 100

  const checkAnswer = (i) => {
    if (answered) return
    setAnswered(true)
    setSelectedAnswer(i)
    setUserAnswers([...userAnswers, i])
    
    if (i === q.ans) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (curQ < total - 1) {
      setCurQ(curQ + 1)
      setAnswered(false)
      setSelectedAnswer(null)
    } else {
      onFinish(score + (selectedAnswer === q.ans ? 1 : 0), userAnswers)
    }
  }

  const letters = ['A', 'B', 'C', 'D']
  const isCorrect = selectedAnswer === q.ans

  return (
    <div>
      <div className="topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="topbar-title">{test.name}</span>
      </div>

      <div className="quiz-screen">
        <div className="quiz-header">
          <div className="question-num">Pregunta {curQ + 1} de {total}</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="question-text">{q.q}</div>

        <div className="options">
          {q.opts.map((opt, i) => (
            <button
              key={i}
              className={`option-btn ${answered ? (i === q.ans ? 'correct' : i === selectedAnswer ? 'wrong' : '') : ''}`}
              onClick={() => checkAnswer(i)}
              disabled={answered}
            >
              <span className={`option-letter ${answered ? (i === q.ans ? 'correct' : i === selectedAnswer ? 'wrong' : '') : ''}`}>
                {letters[i]}
              </span>
              {opt}
            </button>
          ))}
        </div>

        {answered && (
          <div className={`feedback-msg ${isCorrect ? 'ok' : 'fail'}`}>
            {isCorrect ? '¡Correcto!' : `Incorrecto. La respuesta es ${letters[q.ans]}.`}
          </div>
        )}

        {answered && (
          <button className="btn" onClick={nextQuestion}>
            {curQ === total - 1 ? 'Ver resultados' : 'Siguiente'}
          </button>
        )}
      </div>
    </div>
  )
}
