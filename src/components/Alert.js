import React from 'react'

function Alert(props) {
const capital=(word)=>{
    const newtext= word.toLowerCase()
    return newtext.charAt(0).toUpperCase()+newtext.slice(1)
}

    return (
     //  the and operator is use if the 1condition is satisfied then it will go with second one but if 1st condition didnt satisfied then the another condition will also not work
     //here the 1 conditon is props.alert if it is null then it will not execute the second part also and if it is true then the error will display
     props.alert &&<div>    
            <div className={`alert alert-${props.alert.type} alert-dismissible fade-in-down`} role="alert">
                <strong>{capital(props.alert.type)}</strong> {props.alert.msg} 
            </div>
        </div>
    )
}

export default Alert
