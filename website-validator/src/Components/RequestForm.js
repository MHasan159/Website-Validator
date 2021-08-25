import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Form and input,
    //input labels as Website name, logo-img, url, 
    //span/toggle verified, category option
export default function RequestForm({addWebsites}) {

    const[catagory, setCatagory] = useState("");
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");
    
    
    let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      catagory,  
      name,
      link,
      image
    };

    fetch("http://localhost:8000/websites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newWebsite) => {
        addWebsites(newWebsite);
        history.push("/RequestForm");
      });
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Request Form</h3>
        <select class="ui dropdown">
        <option value="">All Catagories</option>
        <option value="0">Clothing</option>
        <option value="1">Skincare</option>
        <option value="2">Pet</option>
        </select><br></br><br></br>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder = 'name of the site'
          value={name}
          onChange={(event) => setName(event.target.value)}
        /><br></br><br></br>
        {/* {name.length === 0 ? (
          <p style={{ color: "red" }}> *You must provide a name</p>
        ) : null} */}
         <label htmlFor="url"> Link: </label>
        <input
          type="text"
          id="url"
          name="url"
          placeholder = 'site link'
          value={link}
          onChange={(event) => setLink(event.target.value)}
        /><br></br><br></br>
        <label htmlFor="image">Image: </label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder = 'Image link'
          value={image}
          onChange={(event) => setImage(event.target.value)}
        /><br></br><br></br>
        
        <button type="submit"> Submit</button>
      </form>
    </section>
  );
}


