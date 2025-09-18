import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked!");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  const handleChange = (event) => {
    console.log("Changing");
    setText(event.target.value)
  }
  // const handleClick=(event)=>{
  //   console.log(event.type);
  //   console.log(event.target);
  // }
  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success")
  }
  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text board has been cleared!","success");
  }
  const handleSpaceClick = () =>{
    let newText=text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Space has been removed!","success")
  }
  const handleCopyClick =() =>{
    // console.log("I am copy");
    //var text = document.getElementById("myBox");
    //text.select();
    //text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text);
    //document.getSelection().removeAllRanges();  //---> for deselect
    props.showAlert("Copied to Clipboard!","success");

  }
  const [text,setText] = useState('');
  // text = "new text";  wrong way to change the state
  //setText("new text"); correct way to change the state
 
  return (
    <>
    <div className ="container" style={{color:props.mode === "light" ? "black" : "white"}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control my-4" id ="myBox" value={text} style={{color: props.mode=== "light"?"black" : "white",backgroundColor : props.mode === "light"? "white" : "#285c75"}} onChange={handleChange} rows="9"></textarea>
        </div>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1 mb-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1 mb-3" onClick= {handleLoClick}>Convert to Lowercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1 mb-3" onClick={handleClearClick}>Clear text</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1 mb-3" onClick={handleSpaceClick}>Remove spaces</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1 mb-3" onClick={handleCopyClick}>Copy</button>
    </div>
    <div className="container my-3" style = {{color : props.mode === "light" ? "black" : "white"}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter(word => word.length>0).length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").filter(word => word.length>0).length} minutes required to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Nothing to preview!"}</p>
    </div>
    </>
  );
}
