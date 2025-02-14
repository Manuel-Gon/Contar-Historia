import { useState } from 'react'
import './App.css'
import TelaInicial from './components/TelaInicial'
import NavBar from './components/Navbar/NavBar'


function App() {
  const [count, setCount] = useState(0)
 
    
    
  return (
    <>
      <NavBar/>
      <TelaInicial/>
     
    </>
  )
}
export default App
