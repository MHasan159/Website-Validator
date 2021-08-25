import { useState, useEffect } from 'react';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import WebsiteList from "./Components/WebsiteList";
// import WebsiteDetails from "./Components/WebsiteDetails";
// import RequestForm from "./Components/RequestForm"

function App() {
  const [ websites, setWebsites ] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/websites')
    .then(resp => resp.json())
    .then(webData => setWebsites(webData))
  }, []);

  console.log(websites);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
      
    <div div className={isDarkMode ? "App" : "App light"}>
      <Header
       isDarkMode={isDarkMode}
       onDarkModeClick={handleDarkModeClick}
       />
       
       <Home />

       <WebsiteList websites={websites}/>
      
    </div>
  );
}

export default App;
