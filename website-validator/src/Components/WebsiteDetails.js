import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

//Main details about the site
    //name, img, url, description
    //likes, category, verified
export default function WebsiteDetails() {

    const [sites, setSites] = useState(null);
    const [comment, setComment] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [commentView, setCommentView] = useState(false);

    const id = useParams().id;

    useEffect(() => {
        fetch(`http://localhost:8000/websites/${id}`)
        .then(resp => resp.json())
        .then(websites => {
            setSites(websites);
            setComment(websites.comments);
            setIsLoaded(true);
        });
    }, [id]);

    // console.log(comment)

    if (!isLoaded) return <h2>Loading...</h2>;

    const { name, image, description, url } = sites;

    
    function handleCommentToggle() {
        setCommentView(!commentView);
      }

    function handleAddComment(newComment) {
        const newCommentArray = [newComment, ...comment];
        setComment(newCommentArray);
    }

    return (
        <section>
            <div className="detailBox">

                <div className="site-image" className="details-image">
                    <img src={image} alt={name} />
                </div>
                <div className="details">

                    <p>{description}</p>
                    {url ? (
                        <p>
                        <a target="_blank" rel="noreferrer" href={url}>
                            Website Homepage
                        </a>
                        </p>
                    ) : null}
                    
                </div>
                <div className="App">
                    <button onClick={handleCommentToggle}>Hide Comments</button>
                    <> 
                       { commentView ? null : <Comments 
                       comments={comment} 
                       addComment={handleAddComment}
                       id={id}
                       /> }
                       </>
                </div>
                    

            </div>
        </section>
    )
}
