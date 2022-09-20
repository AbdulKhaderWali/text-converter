import React from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }
  let styles = {}
  if(darkMode){

      styles = {
          backgroundColor:"black",
          color:"white"
          
      }
  }
  else{
      styles = {

      }
  }
  return (
    <div className="App" style={styles}>
      <Navbar title = "TextUtils" about = "About us" darkmode = {darkMode}/>
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze" darkmode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
      </div>
    </div>
  );
}

export default App;
