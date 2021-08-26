import { useState, useEffect } from 'react';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
// import WebsiteList from "./Components/WebsiteList";
// import WebsiteDetails from "./Components/WebsiteDetails";
// import RequestForm from "./Components/RequestForm"

function App() {
const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/websites')
    .then(resp => resp.json())
    .then(webData => console.log(webData))
  }, [])

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div div className={isDarkMode ? "App" : "App light"}>
      <Header
       isDarkMode={isDarkMode}
       onDarkModeClick={handleDarkModeClick}
      />
      <Home/>
      
      
    </div>
  );
}

export default App;
