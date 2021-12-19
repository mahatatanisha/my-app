import React, { useState } from 'react';




export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");

    }

    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");

    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is Cleared!","success");


    }    
    
    const handleCopy =()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied!","success");


    }


    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
        <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
            
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" >{props.title}</label>
            <textarea className="form-control" value={text}  onChange={ handleOnChange}  id="exampleFormControlTextarea1"  rows="8" 
            style={{backgroundColor : props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerClick} >Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >CLear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy to clipboard</button>





        </div>

        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 *text.split(" ").length} minutes to read</p>
        </div>
        <h2 style={{color: props.mode==='dark'?'white':'black'}}>Preview: </h2>
        <p style={{color: props.mode==='dark'?'white':'black'}} >{text.length>0 ? text:"Enter Something to see the preview."}</p>

        </>
        
    )

}
