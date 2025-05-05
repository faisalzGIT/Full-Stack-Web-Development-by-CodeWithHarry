import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        alert('Hello World!')
    }, [])

    // case 1: Runs on every render
    useEffect(() => {
        alert("hey i will run on every render");
    })

    // case 2: Runs only on first render
    useEffect(() => {
        alert("hey i will run only on first render, this is the first render");
    }, [])

    // case 3: Runs only when certain values change
    useEffect(() => {
        alert("hey i will run only when certain values change (here count), this is the first render");
    }, [count])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
