import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <div className="card">
      </div>
      <p className="read-the-docs">
        Please wait patiently, the website is being deployed on March
         ...
      </p>
      <p className='mt-8 text-center text-sm tracking-wide text-gray-400'> 
        &copy; saabiresh. all rights reserved.
      </p>
    </>
  )
}

export default App
