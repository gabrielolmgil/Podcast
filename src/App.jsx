import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Header } from './components/header/header'
import { Episodios } from './components/episodios/episodios'
import { Contacto } from './components/contacto/contacto'
import { Footer } from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <Episodios/>
        <Contacto/>
        <Footer/>
      </div>
    </>
  )
}

export default App
