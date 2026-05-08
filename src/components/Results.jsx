import './Results.css'

export default function Results({ result, test, onBack }) {
  const { score, userAnswers } = result
  const total = test.questions.length
  const percentage = Math.round((score / total) * 100)
  
  const titles = [
    'Sigue practicando 💪',
    'Casi lo tienes 📚',
    'Buen trabajo 👍',
    'Excelente 🎉',
    'Perfecto ⭐'
  ]
  
  const resultTitle = titles[Math.min(score, 4)]
  const correct = score
  const wrong = total - score

  return (
    <div>
      <div className="topbar">
        <span className="topbar-title">Resultado</span>
      </div>

      <div className="results-screen">
        <div className="score-circle">
          <span className="score-num">{score}</span>
          <span className="score-lbl">/ {total}</span>
        </div>

        <div className="results-title">{resultTitle} · {percentage}%</div>

        <div className="section-title">Desglose por pregunta</div>
        <div className="detail-list">
          {test.questions.map((q, i) => {
            const ok = userAnswers[i] === q.ans
            return (
              <div key={i} className="detail-row">
                <span className={`dot ${ok ? 'ok' : 'fail'}`}></span>
                <span className="detail-q">{q.q.substring(0, 38)}{q.q.length > 38 ? '...' : ''}</span>
                <span className={`detail-badge ${ok ? 'ok' : 'fail'}`}>{ok ? '✓' : '✗'}</span>
              </div>
            )
          })}
        </div>

        <div className="section-title">Estadísticas globales</div>
        <div className="bar-chart">
          <div className="bar-row">
            <span className="bar-label">Correctas</span>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${Math.round((correct / total) * 100)}%`, background: '#639922' }}></div>
            </div>
            <span className="bar-val">{correct}</span>
          </div>
          <div className="bar-row">
            <span className="bar-label">Incorrectas</span>
            <div className="bar-track">
              <div className="bar-fill" style={{ width: `${Math.round((wrong / total) * 100)}%`, background: '#E24B4A' }}></div>
            </div>
            <span className="bar-val">{wrong}</span>
          </div>
        </div>

        <button className="btn" onClick={onBack} style={{ marginTop: '1rem' }}>
          Volver al inicio
        </button>
      </div>
    </div>
  )
}
