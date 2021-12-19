
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";





function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode= ()=>{
    if (mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40'
      showAlert("Dark mode is enabled.","success"); 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white' 
      showAlert("Light mode is enabled.","success"); 
    }
  }

  const desertMode= ()=>{
    setMode('Light');
    document.body.style.backgroundColor='#faf1d4'
    showAlert("Desert mode is enabled.","success"); 
    
  }

  const redMode= ()=>{
    setMode('Light');
    document.body.style.backgroundColor='#f2cfc7'
    showAlert("Desert mode is enabled.","success"); 
  
  }
  
  


  return (
    <>
    {/* <Router> */}
    <div>
       
      
       <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode}  desertMode={desertMode} redMode={redMode}/>
       <Alert alert={alert}/>
       <TextForm title="Enter text to analyze"  mode={mode} showAlert={showAlert} />
     {/* <div className="container">
     
         <Routes>
           <Route path="/about" element={<About />}>
           </Route>
           <Route path="/" element={<TextForm title="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
           </Route>
         </Routes>
       </div>
     */}
     
     

   </div> 

    {/* </Router> */}
   
    
    </>
  );
}


export default App;
