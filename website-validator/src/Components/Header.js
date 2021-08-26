

// Contains our buttons on the top to navigate around app

//Home, SiteList, SiteRequest, Guidelines, dark/light mode
import React from "react";
// import 'semantic-ui-css/semantic.min.css'
// import { Button, Header } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


const Header = ({isDarkMode, onDarkModeClick}) => {
  
    return(
        <div className = 'Header'>
          <nav>
            <NavLink className="button" exact to="/">
              Home
            </NavLink>
            <NavLink className="button" exact to="/SiteList">
              SiteList
              </NavLink>
             <NavLink className="button" exact to="/SiteList/Guidelines/RequestForm">
                RequestForm
              </NavLink>
              <NavLink className="button" exact to="/SiteList/Guidelines">
                Guidelines
              </NavLink>

            
            
            <button onClick={onDarkModeClick}>
              {isDarkMode ? (
                <span role="img" label="sun">
                  ☀️
                </span>
              ) : (
                <span role="img" label="moon">
                  🌙
                </span>
              )}
            </button>
           
            <h1>Website Validator</h1> 
            </nav>
        </div>
    )

    
   
}


export default Header;
