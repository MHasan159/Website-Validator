import { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./Components/Header";
import Home from "./Components/Home";
import WebsiteList from "./Components/WebsiteList";
import RequestForm from "./Components/RequestForm";
import Guidelines from"./Components/Guidelines";
import WebsiteDetails from "./Components/WebsiteDetails";




function App() {
  const [ websites, setWebsites ] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/websites')
    .then(resp => resp.json())
    .then(webData => setWebsites(webData))
  }, []);

  // console.log(websites);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }
  function handleAddWebsites(newWebsite) {
    const newWebsiteArray = [newWebsite, ...websites];
    setWebsites(newWebsiteArray);
  }

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
      
    <div div className={isDarkMode ? "App" : "App light"}>
      <Header
       isDarkMode={isDarkMode}
       onDarkModeClick={handleDarkModeClick}
       />
      
      <Switch>
      <Route path="/SiteList/Guidelines/RequestForm" component = {() => <RequestForm addWebsites={handleAddWebsites}/>} />
      <Route path="/SiteList/Guidelines" component={Guidelines} />

        

        <Route path="/SiteList/:id" component={() => <WebsiteDetails />} />

        <Route path="/SiteList" component={() => <WebsiteList websites={websites}/>} />

        <Route path="/" component={Home} />
        
       </Switch>
      
    </div>
  );
}

export default App;
