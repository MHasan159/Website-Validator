import React, { useState } from "react";
import CommentItem from "./CommentItem";

const Comments = ({ comments }) => {

    const [comment, setComment] = useState("");

    return (

       
    <body>
        <hr></hr>

        
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

    </body>

    )
}

export default Comments;