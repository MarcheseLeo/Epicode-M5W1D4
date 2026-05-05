import { MyFooter } from "./components/myFooter/MyFooter";
import { MyMain } from "./components/myMain/MyMain";
import { MyNav } from "./components/myNav/MyNav"
import { ThemeProvider } from "./contexts/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { useState } from "react";

const App = () => {


  const [input, setInput] = useState('')

  const clearInput = () => {
    setInput('')
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  

  return (
    <ThemeProvider>
      <MyNav 
        handleInputChange={handleInputChange}
        input={input}
      />
      <MyMain 
        input= {input}
        clearInput = {clearInput}
      />
      <MyFooter />
    </ThemeProvider>
  )
}

export default App
