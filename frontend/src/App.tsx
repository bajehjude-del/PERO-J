import { useState } from 'react';
import './App.css';
import EventTable from './components/EventTable';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-brand">Soroban Smart Block Explorer</div>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
        <nav className={`app-nav${navOpen ? ' app-nav--open' : ''}`}>
          <a href="#events">Events</a>
          <a href="#contracts">Contracts</a>
          <a href="#ledgers">Ledgers</a>
        </nav>
      </header>
      <main className="app-main">
        <EventTable />
      </main>
    </div>
  );
}

export default App;
