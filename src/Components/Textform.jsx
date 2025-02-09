import React from "react";
import { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("upperCase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","Success")
  }
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","Success");
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!","Success")
  }
  const handleCopy = () => {
    var text = document.getElementById("my box")
    text.select();
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied!","Success")
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed!","Success")
  }
  const handleOnChange = (event) => {
    // console.log("on changed");
    setText(event.target.value);
  }

  const [text, setText] = useState('')
  
//   setText("new text");
  return (
    <>
    <div className="container" style={{color : props.mode === 'dark'? 'white':'black'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="my box" rows="8" style={{backgroundColor : props.mode === 'dark'? '#1F1F1F':'white',color : props.mode === 'dark'? 'white':'black'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleDownClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleClearClick}>Clear text</button>
      <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0? text:"Nothing to preview!"}</p>
      </div>
    </div>

    </>
  );
}