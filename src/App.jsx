import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' Component={MainLayout}>
          <Route index Component={Home} />
        </Route>
      </Routes>
    </>
  )
}

export default App
