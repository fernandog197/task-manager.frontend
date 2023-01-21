import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import MainTitle from './components/MainTitle/MainTitle'
import TaskDisplay from './components/TaskDisplay/TaskDisplay'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <MainTitle />
      <main className='main'>
        <Routes>
          <Route path='/' element={<TaskDisplay />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
