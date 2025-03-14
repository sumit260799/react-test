import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <header>
        <div className='logo-container'>
          <a href='https://vite.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
      </header>

      <main>
        <div className='card'>
          <button onClick={() => setCount(count => count + 1)}>
            Count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        {/* Dummy Content */}
        <section className='dummy-content'>
          <h2>Welcome to My React App</h2>
        </section>
      </main>

      <footer>
        <p>Created by Sumit Das</p>
      </footer>
    </div>
  )
}

export default App
