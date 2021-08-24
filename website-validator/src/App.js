import { useState, useEffect } from 'react';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import WebsiteList from "./Components/WebsiteList";
import WebsiteDetails from "./Components/WebsiteDetails";
import RequestForm from "./Components/RequestForm"

function App() {

  useEffect(() => {
    fetch('http://localhost:8000/websites')
    .then(resp => resp.json())
    .then(webData => console.log(webData))
  }, [])

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
