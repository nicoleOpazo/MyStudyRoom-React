import React from "react";
import './Blog.css'

import Posts from '../../components/BlogComponents/Posts/Posts'


const BlogPage =()=> {
    return (
        <div className="blog-container">
            <h1 className="main-heading">
                Blog App using react js. 
            </h1>
            <Posts/>
            
        </div>

    );
};

export default BlogPage;