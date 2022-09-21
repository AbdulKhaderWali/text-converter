import React from 'react'

export default function TextForm(props) {
    let styles = {}
    if(props.darkmode){

        styles = {
            backgroundColor:"black",
            color:"white"
            
        }
    }
    else{
        styles = {

        }
    }
    const [text, setText] = React.useState("This is some text")
    function handleUp(){
        const newText = text.toUpperCase()
        setText(newText)

    }

    function handleLow(){
        const newText = text.toLowerCase()
        setText(newText)
    }

    function handleClear(){
        setText("")
    }

    function handleOnChange(event){
        setText(event.target.value)
    }
  return (
        <div>
        <div className="mb-3">
        <h1>{props.heading} </h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="" style={styles} rows="8"></textarea>
        </div>
        <button className= {`btn btn-${props.darkmode? "dark" : "primary"} mx-1`} onClick={handleUp}>Convert to Uppercase</button>
        <button className= {`btn btn-${props.darkmode? "dark" : "primary"} mx-1`} onClick={handleLow}>Convert to Lowercase</button>
        <button className= {`btn btn-${props.darkmode? "dark" : "primary"} mx-1`} onClick={handleClear}>Clear</button>
        <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
        <p>{text.split(" ").length * 0.008} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </div>
  )
}
