import React, { useState } from "react";
import CommentItem from "./CommentItem";
import { useHistory } from "react-router-dom";


const Comments = ({ comments, addComment, id }) => {

    const [userId, setUserId] = useState(comments.length + 1);
    const [comment, setComment] = useState("");
    const [user, setUser] = useState("")

    let history = useHistory();

  // console.log(userId)
  

  function handleSubmit() {


    const newComment = {
          id: userId,
          user: user,
          comment: comment
    }

    const commentData = [
        ...comments,
        newComment

    ];

    

    fetch(`http://localhost:8000/websites/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({comments: commentData}),
    })
      .then((r) => r.json())
      .then((newComment) => {
        addComment(newComment);
        history.push(`/SiteList/${id}`);
      }
    );}

    return (

       
    <section>
        <hr></hr>
        <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <label htmlFor="user"></label>
        <input
          type="text"
          id="user"
          name="user"
          placeholder ='username'
          value={user}
          required
          onChange={(event) => setUser(event.target.value)}
          />
        <label htmlFor="comment"> </label>
          <input
          type="text"
          id="comment"
          name="comment"
          placeholder = 'comment'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          />
          <button className = 'submit'type="submit" > Submit</button>
        </form>

        <h2 className="title">Comments</h2>
        <div className="comments">
            {comments.map((com) => 
            <CommentItem
            key={com.id}
            user={com.user}
            comment={com.comment}
            />
        )}
        </div>

    </section>

    )
}

export default Comments;