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
    const [description, setDescription] = useState("");
    const [verified, setVerified] = useState("");
    const [comment, setComment] = useState("");
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState("Anonymous");
    
    
    let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      category: catagory,  
      name: name,
      url: link,
      image: image,
      description: description,
      verified: verified,
      comments: [
        {
          id: userId,
          user: user,
          comment: comment
        }
      ]
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
        <select className="ui dropdown"
        type="text"
        id="catagory"
        name="catagory"
        value={catagory}
        onChange={(event) => setCatagory(event.target.value)}
        >
        <option value="all">All Categories</option>
        <option value="fashion">Fashion</option>
        <option value="skincare">Skincare</option>
        <option value="petsupplies">Pet</option>
        </select>

        <br></br><br></br>

        <select className="ui dropdown"
        type="text"
        id="verified"
        name="verified"
        value={verified}
        onChange={(event) => setVerified(event.target.value)}
        >
        <option value="❔">Not Verified</option>
        <option value="✔">Verified</option>
        <option value="❌">Invalid</option>
        </select>

        <br></br><br></br>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder = 'name of the site'
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
        <br></br><br></br>
        <label htmlFor="name">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder = 'description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          />
        <br></br><br></br>
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
          placeholder = 'image link'
          value={image}
          onChange={(event) => setImage(event.target.value)}
          />

          <br></br><br></br>
          <label htmlFor="name">Comment: </label>
          <input
          type="text"
          id="comment"
          name="comment"
          placeholder = 'comment'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          />
          <br></br><br></br>
        
        <button type="submit"> Submit</button>
      </form>
    </section>
  );
}


