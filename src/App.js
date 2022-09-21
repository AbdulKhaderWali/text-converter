import React from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }
  if(darkMode){
    document.body.style.backgroundColor = "grey"
    document.body.style.color = "white"
  }
  else{
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
  return (
    <div className="App">
      <Navbar title = "TextUtils" about = "About us" darkmode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze" darkmode = {darkMode} />
      </div>
    </div>
  );
}

export default App;
