import React from 'react'
import { useState } from 'react'
export const Uppercase = (props) => {
    const [text, settext] = useState("")

    // CHNAGING THE VALUE OF TEXTAREA  BY USING ONCHANGE FUNCTION
    const changetext = (event) => {
        // console.log("on change")
        settext(event.target.value)
    }

    //CHANGING TEXT TO UPPERCASE

    const handleclick = () => {
        if(text){
        // console.log("upper case was clicked" + text);
        let newtxt = text.toUpperCase()
        settext(newtxt)
        props.showalert(":Converted to Uppercase","success")
    }
    else{
        props.showalert(": Unsuccesfull to Uppercase!","warning")
    }
   
  
    }

    // CHANGING TEXT TO LOWERCASE
    const handleclick1 = () => {
        if(text){
        let lowcase = text.toLowerCase()
        settext(lowcase)
        props.showalert(":Converted to lowercase!","success")
    }
    else{
        props.showalert(": Unsuccesfull to Lowercase!","warning")

    }

    }

    // CLEARING THE TEXT
    const handleclearclick1 = () => {
        if(text){
        let cleartxt = ""
        settext(cleartxt)
        props.showalert(":Text Cleared!","success")
    }
    else{
        props.showalert(": No Text to clear!","warning")
    }
    }

    // COPY THE TEXT ON CLIPBOARD
    const handlecopyclick1 = async () => {
        if (text) {  //asyn is a keyword that use await keyword to 
            await navigator.clipboard.writeText(text)
            // alert("SUCCESSEFULLY COPIED :-" + text)
            props.showalert(":Copied Text!","success")

        }
        else {
            props.showalert(":Copied Unsuccesfull Text!","warning")
        }
        // simple way to have copy function by getting id
        // var text = document.getElementById('txt-area')
        // text.select()
        // navigator.clipboard.writeText(text.value)
    }

    // CHANGING TEXT TO TITLE CASE
    const handletitleclick1 = () => {
        if(text){
        let sen = text.split(' ').map((text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()).join(' ')
        settext(sen)
        props.showalert(":Converted to Titlecase","success")
    }
    else{
        props.showalert(": Unsuccesfull to TittleCase!","warning")
    }

    }

    // REMOVING EXTRA SPACES BETWEEN TEXT
    const handleextraclick1 = () => {
        if(text){
        let space = text.split(/[ ]+/);
        settext(space.join(' '))
        props.showalert(":Removed Extra Spaces","success")
    }
    else{
        props.showalert(": Plzz enter the text to remove space","warning")
    }

    }


    return (
        <div style={{ color: props.mode ==='light'? 'black' : 'white' }}>
            <div className="container my-4" >
                <div className="mb-3">
                    <h2>ENTER THE TEXT </h2>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#011e48', color: props.mode === 'light' ? 'black' : 'white'}} onChange={changetext} id="txt-area" rows="6" ></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'light'? "danger":"primary"} btn-sm mx-2`} onClick={handleclearclick1}>CLEAR TEXT</button>
                <button className={`btn btn-${props.mode === 'light'? "info":"primary"} btn-sm mx-2`}onClick={handleclick}>TEXT UPPERCASE</button>
                <button className={`btn btn-${props.mode === 'light'? "dark":"primary"} btn-sm mx-2`} onClick={handlecopyclick1}>COPY TEXT</button>
                <button className={`btn btn-${props.mode === 'light'? "warning":"primary"} btn-sm mx-2`} onClick={handletitleclick1}>TITLE CASE</button>
                <button className={`btn btn-${props.mode === 'light'? "success":"primary"} btn-sm mx-2`} onClick={handleclick1}>TEXT LOWERCASE</button>
                <button className={`btn btn-${props.mode === 'light'? "secondary":"primary"} btn-sm mx-2`} onClick={handleextraclick1}>REMOVE EXTRA SPACE</button>


                <p></p>
            </div>
            <div className="container">
                <div className="mb-3">
                    <h2>TEXT DATA</h2>
                    <p>WORDS:- {text.split(" ").length-1} CHARACTERS:- {text.length}</p>
                    <p>MINTUES FOR READING THE CONTENT:-{0.008 * text.split(" ").length}min</p>
                    <h2>PREVIEW</h2>
                    <p>{text.length > 0 ? text : "Plz enter the text to preview it here"}</p>
                </div>
            </div>
        </div>
    )
}

