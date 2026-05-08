import './Home.css'

export default function Home({ tests, stats, userName, setUserName, onStartTest, onCreateTest, onDeleteTest }) {
  return (
    <div>
      <div className="topbar">
        <span className="topbar-title">Mis Tests</span>
      </div>
      
      <div className="home-screen">
        <div className="home-header">
          <h1 className="home-title">Hola, estudiante</h1>
          <p className="home-sub">Elige un test para practicar</p>
        </div>

        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', marginBottom: '6px', color: 'var(--text-primary)' }}>
            Tu nombre
          </label>
          <input
            type="text"
            placeholder="Escribe tu nombre..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-label">Tests hechos</div>
            <div className="stat-value">{stats.testsDone}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Mejor nota</div>
            <div className="stat-value">{stats.bestScore !== null ? `${stats.bestScore}/5` : '—'}</div>
          </div>
        </div>

        <div className="section-title">Tests disponibles</div>
        <div className="test-list">
          {tests.length > 0 ? (
            tests.map((test) => (
              <div key={test.id} className="test-card">
                <div className="test-content" onClick={() => onStartTest(test.id)}>
                  <div className="test-icon">📘</div>
                  <div className="test-info">
                    <div className="test-name">{test.name}</div>
                    <div className="test-meta">{test.questions.length} preguntas · tipo test</div>
                  </div>
                  <span className="pill">
                    {test.questions.length <= 3 ? 'Fácil' : test.questions.length <= 6 ? 'Media' : 'Difícil'}
                  </span>
                </div>
                
              </div>
            ))
          ) : (
            <p className="empty-msg">No tienes tests aún. ¡Crea uno!</p>
          )}
        </div>

      {/* <button className="btn" onClick={onCreateTest}>+ Crear test nuevo</button> */}
      </div>
    </div>
  )
}
