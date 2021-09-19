import React from 'react'
import { Navbar } from './Navbar'
import { useState } from 'react'
export default function About({mode,nav}) {



    const [mystyle, setmystyle] = useState({
        color:"black",
        backgroundColor:"white",
        transition:"0.6s all ease-in-out"
    })
const [btntext, setbtntext] = useState("Enabl Dark mode")

    const darkmode= () =>{
        if(mystyle.color==='black')
        {
           setmystyle({
               color:"white",
               backgroundColor:"black",
               transition: "0.3s all ease-in-out"
           })
           setbtntext("Enable Light mode")
        }
        else{
            setmystyle({
                color:"black",
                backgroundColor:"white",
                transition: "0.3s all ease-in-out"
            })
            setbtntext("Enable Dark mode")
        }
    }
   
    return (
        <>
            <Navbar mode={mode} nav={nav}/>
            <div className="container my-4" style={mystyle}>
                <h2>About Us</h2>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div style={mystyle} id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div style={mystyle} id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div style={mystyle} id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <button onClick={darkmode} className="btn btn-primary btn-sm my-3">{btntext}</button>
            </div>
            </div>
          
        </>
    )
}
