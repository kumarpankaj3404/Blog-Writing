import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const {Data : blog, Load , Error} = useFetch('http://localhost:8000/blogs/'+ id)
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method : "DELETE"
        }).then(() => {
            history.push('/Dojo-blog/');
        })
    }

    return ( 
        <div className="blog-details">
        {Load && <div>Loading....</div>}
        {Error && <div>Error....</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Author is {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>DELETE</button>
            </article>
        )}    
        </div>
     );
}
 
export default BlogDetails;