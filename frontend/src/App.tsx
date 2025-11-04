import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import MovieDatabase from './components/MovieDatabase'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/movies" element={<MovieDatabase />} />
      </Routes>
    </Router>
  )
}

export default App
