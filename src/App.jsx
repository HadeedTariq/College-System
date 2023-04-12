import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components'
import { Budget, Home, SignUp } from './pages'
import { useStore } from './context/store'
function App() {
  const [{mode}]=useStore()
  return (
    <>
      <div className="app" style={mode}>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signIn' element={<SignUp />} />
            <Route path='/budget' element={<Budget />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
