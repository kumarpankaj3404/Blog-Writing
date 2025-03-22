import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blogs = props.blogs;
  return (
    <div className="blog-list" >
        <h1>{props.title}</h1>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to = {`/Dojo-blog/blogs/${blog.id}`}>
              <h2>Title : {blog.title}</h2>
              <p >Author : {blog.author}</p>
            </Link>
          </div>
      ))}
    </div>
  )
}

export default BlogList