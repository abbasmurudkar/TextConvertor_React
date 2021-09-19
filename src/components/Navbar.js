import React from 'react'
// import { Link } from 'react-router-dom'
export const Navbar = (props) => {
let  mystyle ={
  cursor:"pointer"
}
  return (
    <div>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.nav}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <href className="nav-link active" aria-current="page" ="/about">About</href>
              </li> */}
            </ul>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input style={mystyle}className="form-check-input " onClick={props.changemode}type="checkbox" id="flexSwitchCheckDefault" />
              <label style={mystyle}className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.mode} mode</label>
            </div>
           
        </div>
        
      </nav>
    </div>
  )
}
