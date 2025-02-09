import React from "react";
// import { useState } from "react";

export default function (props) {
  // const [myStyle, setMyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  let myStyle = {
    backgroundColor : props.mode === 'dark'? '#1F1F1F':'white',
    color : props.mode === 'dark'? 'white':'black' 
  }
  return (
    <div className="container" style={myStyle}>
      <h2 style={{textAlign:"center"}}>About us</h2>
      <div className="accordion" id="accordionExample"style={{marginTop:"20px"}} >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>Analyze your text</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            "This app provides a variety of text analysis and transformation tools. 
            You can modify your text by converting it to uppercase, lowercase, removing extra spaces,
             copying it, and clearing it effortlessly."
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b>Free to use</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            "TextUtils-Ry is a completely free-to-use application. No sign-ups, 
            no fees—just a simple and efficient tool to enhance your text processing experience."
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b>Browser compatible</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            "This app works seamlessly across different browsers like Chrome, 
            Firefox, Edge, and Safari. Whether you're on a desktop or mobile device, 
            you can easily access and use TextUtils-Ry."
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b>Contact Us*</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
            "Have questions or suggestions? Now you can reach out to us directly through the Contact Us section.
             Simply fill out the form with your name, email, and message, and we'll get back to you as soon as 
             possible!"
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
