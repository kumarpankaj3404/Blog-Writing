const BlogList = (props) => {
    const blogs = props.blogs;
  return (
    <div class="blog-list" >
        <h1>{props.title}</h1>
        {blogs.map((blog) => (
        <div className="blog-preview">
        <h2>Title : {blog.title}</h2>
        <p>Body : {blog.body}</p>
        <p className="author">Author : {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList