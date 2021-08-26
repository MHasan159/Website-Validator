
// Contains our buttons on the top to navigate around app

//Home, SiteList, SiteRequest, Guidelines, dark/light mode
import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'


const Header = ({isDarkMode, onDarkModeClick}) => {
    return(
        <div>
        <Button color = 'blue'>Home</Button>
        <Button color = 'blue'>SiteList</Button>
        <Button color = 'blue'>Guidelines</Button>
        
        <Button onClick={onDarkModeClick}>
          {isDarkMode ? (
            <span role="img" label="sun">
              ☀️
            </span>
          ) : (
            <span role="img" label="moon">
              🌙
            </span>
          )}
        </Button>
        <Header color = 'green' as='h1'>Website Validator</Header> 


        </div>
    )

}


export default Header;