import styled from "styled-components";

// Contains our buttons on the top to navigate around app

//Home, SiteList, SiteRequest, Guidelines, dark/light mode
import React from "react";
// import 'semantic-ui-css/semantic.min.css'
// import { Button, Header } from 'semantic-ui-react'


const Header = ({isDarkMode, onDarkModeClick}) => {
    return(
        <div className = 'Header'>
        <button >Home</button>
        <button >SiteList</button>
        <button >Guidelines</button>
        
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


        </div>
    )

    
    return(
        <header>
            
        </header>
    )
}


export default Header;
