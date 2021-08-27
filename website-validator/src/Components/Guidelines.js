import React from 'react'
import ReactPlayer from "react-player"


export default function Guidelines() {
    return (
       
        <div>
             <h3>Checkout this wonderful blog and the video to learn more about how to Check Whether the E-commerce Website is Genuine or not.</h3>
             <div id = 'Blog'>
             <a  href = {"https://www.beautiart.in/blogs/read/8-ways-to-check-whether-the-e-commerce-website-is-genuine" }>Blog</a>
             </div>
             <div id ='video'>
            <ReactPlayer
            url="https://www.youtube.com/watch?v=2NtKbxwCSUQ&t=6s"
      />
        </div>
             </div>
       
        
       
    )
}
