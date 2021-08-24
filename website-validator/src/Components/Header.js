import styled from "styled-components";

// Contains our buttons on the top to navigate around app
    //Home, SiteList, SiteRequest, Guidelines, dark/light mode
const Header = () => {

    const Button = styled.button`
    background: pink;
    width: 100px;
    height: 50px;
    border-radius: 10px;
    `;
    
    return(
        <header>
            <Button>Home</Button>
        </header>
    )
}

export default Header;