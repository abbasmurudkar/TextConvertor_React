import './App.css';
// import About from './components/About';
import { Navbar } from './components/Navbar';
import { Uppercase } from './components/Uppercase';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState("light")
  const modes = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#011e48"
      showalert(":DARK MODE ENABLE", "success")
      document.title = "TEXT-CONVERTOR Dark-mode"
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      showalert(":LIGHT MODE ENABLE", "success")
      document.title = "TEXT-CONVERTOR"
    }
  }
  const [alert, setalert] = useState(null)
  const showalert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  return (
    <>
      {/* <Router>
      <Switch>
        <Route exact path="/" render={() => {
          return (
       <>  */}
      <Navbar nav="TEXT CONVERTOR" about="About" mode={mode} changemode={modes} />
      <Alert alert={alert} />
      <Uppercase mode={mode} showalert={showalert} />
      {/* </> */}
      {/* // )  */}
      {/* //  }}> */}

      {/* //   </Route> */}
      {/* // </Switch>  */}

      {/* // <Switch>
      //   <Route exact path="/about">
      //     <About mode={mode} nav={"TEXT CONVERTOR"} />
      //   </Route> 
      //  </Switch> 
      //  </Router> */}

    </>
  )
}


export default App;
