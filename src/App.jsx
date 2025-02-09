import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
import About from './Components/About';
import Alert from './Components/Alert'
import Contact from './Components/Contact';
import {Route, Routes} from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#121212';
      showAlert("Dark mode is enabled","Success");
      document.title = "TextUtils-dark mode";
      // setInterval(() =>{
      //   document.title = "TextUtils-best for you"
      // },2000);
      // setInterval(() =>{
      //   document.title = "TextUtils-welcome"
      // },1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","Success")
    }
  }

  return (
    <>
  <Navbar title="TextUtils-Ry" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <Routes>
  
    <Route path='/' element={<div className='container my-3'><Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}></Textform></div>}/>
  
  <Route path='/about' element={<div className='container my-3'><About mode={mode}/></div>}/>
  <Route path='/contact' element={<div><Contact mode={mode}/></div>}/>
  </Routes>
    </>
  )
}

export default App

//website for converting text to upperCase or LowerCase