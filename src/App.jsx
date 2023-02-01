import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import MainTitle from './components/MainTitle/MainTitle'
import TaskDisplay from './components/TaskDisplay/TaskDisplay'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

import { english, español } from './languages'

import './App.css'

function App() {
  const [language, setLanguage] = useState(english)

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage} />
      <MainTitle />
      <main className='main'>
        <Routes>
          <Route path='/' element={<TaskDisplay language={language} />} />
          <Route path='/about' element={<About language={language} />} />
        </Routes>
      </main>
      <Footer language={language} />
    </div>
  )
}

export default App
