import './App.css'
import Login from './routes/login'
import ReleaseNote from './routes/releaseNote'
import { Routes, Route } from 'react-router-dom'
import NoMatch from './routes/nomatch'

function App() {
  return (
    <div>
      <header>
        <h1 className="flex items-center justify-center bg-cyan-300 text-5xl h-16 align-middle">
          kamorin's サイト
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/releaseNote" element={<ReleaseNote />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <footer>
        <h2 className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-cyan-300 text-3xl h-12">
          kamorin 2022
        </h2>
      </footer>
    </div>
  )
}

export default App



