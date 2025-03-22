import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title , setTitle] = useState('');
  const [body , setBody] = useState('');
  const [author , setAuthor] = useState('Mario');
  const[isloading , setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = {title ,body,author};
    setLoading(true);

    fetch('http://localhost:8000/blogs',{
      method: "POST",
      headers:{"Content-type":"application/json"},
      body : JSON.stringify(blog)
    }).then(()=>{
      setLoading(false);
      // history.go(-1); // To go one page back
      history.push('/Dojo-blog/');
    })
  }
  

  return (
    <div className='create'>
        <h1>Add a new blog!</h1>
        <form onSubmit={handleSubmit}>
          <label >Blog title: </label>
          <input
            type="text"
            required
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label >Blog Body: </label>
          <textarea
            required
            value = {body}
            onChange={(e) => setBody(e.target.value)}
          >
          </textarea>

          <label >Author</label>
          <select
            value={author}
            onChange={(e) => {setAuthor(e.target.value)}}
          >
            <option value="mario">Mario</option>
            <option value="yoshi">Yoshi</option>
          </select>
          {!isloading &&<button >Add Blog</button>}
          {isloading && <button >Adding Blog...</button>}
        </form>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
    </div>
  )
}

export default Create