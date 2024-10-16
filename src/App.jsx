import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './componentes/Form'
import State from './componentes/State'
import UseEffect from './componentes/UseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hola mundo</h1>
      
      <State/>
      <UseEffect/>
    </>
  )
}

export default App
