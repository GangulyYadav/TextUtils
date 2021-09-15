import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React, { useState } from 'react';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');  //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =() => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      //change title
      // document.title = "CodeBuddies_ - Dark Mode";

      // change title at an interval 
      // setInterval(() => {
      //   document.title = "Good";
      // }, 700);
      
      // setInterval(() => {
      //   document.title = "Night";
      // }, 1250);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      // document.title = "CodeBuddies_ - Light Mode";

    }
  }
  return (
    <>
      <Navbar title="CodeBuddies" aboutText="About" mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Try our Word & Character Counter, Remove extra spaces" mode={mode} />
        {/* /users --> Component 1
        /users/home -->Component 2 */}
     {/* <Router>
        <Switch>
      <div className="container my-3">
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          </Route>
        </Switch>
        
      </div>
    </Router>  */}
        {/* <About/> */}

    </>
  );
}

export default App;
