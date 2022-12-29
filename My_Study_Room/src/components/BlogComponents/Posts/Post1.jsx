import React from "react";
import Post from "../Post/Post";
import './Posts.css'
const Post1 = () => {
    const blogPosts = [
        {
            title: "JAVASCRIPT",
      body: `JavaScript is the world most popular 
      lightweight, interpreted compiled programming 
      language. It is also known as scripting 
      language for web pages. It is well-known for 
      the development of web pages, many non-browser 
      environments also use it. JavaScript can be 
      used for Client-side developments as well as 
      Server-side developments`,
      author: "Nishant Singh ",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
        href:'',
      
    },
]
return(
    <div className="posts-container">
        <div className="post2">
        {blogPosts.map((post,index) => (
                <Post key={index} index={index} post={post} />
                
            ))}
        </div>

        </div>
)
}

export default Post1;