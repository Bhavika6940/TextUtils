import './App.css';
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import React,{useState} from 'react';
import Alert from "./components/Alert.js"
import About from "./components/About.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light'); // whether dark mode is enabled or not 
  const [myBtnText,setText]= useState('Enable light mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
         setAlert({
          msg: message,
          type: type
         });
         setTimeout(() =>{
          setAlert(null);
         },1000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setText('Enable light mode');
      document.body.style.backgroundColor = "#131343";
      showAlert("Dark mode has been enabled!","success");
      // document.title = "TextUtils Dark Mode"
      // setInterval(()=> {
      //   document.title= 'Install TextUtils Now';
      // },1500);
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing mode'
      // },2000);
    }
    else{
      setMode('light');
      setText('Enable dark mode');
      document.body.style.backgroundColor = 'ivory';
      showAlert("Light mode has been enabled!","success");
    }
  }
  return (
    <>
    <Router>
      <div>
        <Navbar title = "TextUtils"  aboutText="About Us" mode={mode} toggleMode={toggleMode} btnText={myBtnText}/>
        {/* <Navbar title={3}/> */}
        <Alert alert={alert} />
      </div>
      <div className="container my-5 ">
        <Routes>
            <Route exact path="/" element = {<TextForm heading =" Try TextUtils - Word counter, character counter, remove extra spaces" mode={mode} showAlert = {showAlert}/>}/>
            <Route exact path="/about" element={<About mode={mode}/>}/>
          </Routes>
          </div>
     </Router> 
    
    </>
  );
}

export default App;
