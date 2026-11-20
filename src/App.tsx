
import { useState } from 'react'
import './App.css'

type Tab = 'home' | 'calendar' | 'progress' | 'profile'

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'home', label: 'Главная', icon: '⌂' },
  { id: 'calendar', label: 'Календарь', icon: '▦' },
  { id: 'progress', label: 'Прогресс', icon: '▥' },
  { id: 'profile', label: 'Профиль', icon: '◉' },
]

const titles: Record<Tab, string> = {
  home: 'Твои тренировки',
  calendar: 'Календарь тренировок',
  progress: 'Твой прогресс',
  profile: 'Твой профиль',
}

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home')

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>🦈 SharkTracker</h1>
      </header>

      <main className="app-content">
        <p className="section-label">{activeTab.toUpperCase()}</p>
        <h2>{titles[activeTab]}</h2>
        <div className="content-card">
          Здесь скоро появится содержимое раздела.
        </div>
      </main>

      <nav className="bottom-nav" aria-label="Навигация">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'nav-item active' : 'nav-item'}
            onClick={() => setActiveTab(tab.id)}
            type="button"
          >
            <span className="nav-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
