import { useState } from 'react'
import './Editor.css'

export default function Editor({ onSave, onBack }) {
  const [testName, setTestName] = useState('')
  const [questions, setQuestions] = useState([
    { q: '', opts: ['', '', '', ''], ans: 0 }
  ])

  const addQuestion = () => {
    setQuestions([...questions, { q: '', opts: ['', '', '', ''], ans: 0 }])
  }

  const removeQuestion = (idx) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((_, i) => i !== idx))
    }
  }

  const updateQuestion = (idx, field, value) => {
    const updated = [...questions]
    if (field === 'q') {
      updated[idx].q = value
    } else if (field.startsWith('opt-')) {
      const optIdx = parseInt(field.split('-')[1])
      updated[idx].opts[optIdx] = value
    } else if (field === 'ans') {
      updated[idx].ans = parseInt(value)
    }
    setQuestions(updated)
  }

  const handleSave = () => {
    if (!testName.trim()) {
      alert('Por favor, dale un nombre al test')
      return
    }

    const allValid = questions.every(q => 
      q.q.trim() && q.opts.every(o => o.trim())
    )

    if (!allValid) {
      alert('Por favor, completa todas las preguntas y opciones')
      return
    }

    onSave({
      name: testName,
      questions: questions
    })
  }

  return (
    <div>
      <div className="topbar">
        <button className="back-btn" onClick={onBack}>←</button>
        <span className="topbar-title">Crear test</span>
      </div>

      <div className="editor-screen">
        <div className="form-group">
          <label>Nombre del test</label>
          <input
            type="text"
            placeholder="Ej: Fundamentos de Economía"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
          />
        </div>

        <div className="section-title">Preguntas</div>

        {questions.map((q, idx) => (
          <div key={idx} className="question-card">
            <div className="question-header">
              <span className="q-num">Pregunta {idx + 1}</span>
              {questions.length > 1 && (
                <button
                  className="remove-btn"
                  onClick={() => removeQuestion(idx)}
                  title="Eliminar pregunta"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="form-group">
              <label>Enunciado</label>
              <textarea
                placeholder="Escribe la pregunta..."
                value={q.q}
                onChange={(e) => updateQuestion(idx, 'q', e.target.value)}
              ></textarea>
            </div>

            <div className="options-group">
              <label>Opciones</label>
              {q.opts.map((opt, optIdx) => (
                <div key={optIdx} className="option-input">
                  <input
                    type="text"
                    placeholder={`Opción ${String.fromCharCode(65 + optIdx)}`}
                    value={opt}
                    onChange={(e) => updateQuestion(idx, `opt-${optIdx}`, e.target.value)}
                  />
                  <input
                    type="radio"
                    name={`ans-${idx}`}
                    checked={q.ans === optIdx}
                    onChange={() => updateQuestion(idx, 'ans', optIdx)}
                    title="Respuesta correcta"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <button className="btn btn-secondary" onClick={addQuestion} style={{ marginBottom: '1.25rem' }}>
          + Añadir pregunta
        </button>

        <div className="button-group">
          <button className="btn" onClick={handleSave}>
            Guardar test
          </button>
          <button className="btn btn-secondary" onClick={onBack}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
