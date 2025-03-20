import React from 'react'
import { useState ,useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const{Data, Load, Error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className='Home'>
      {Error && <div>There is a console.error --- Error </div>}
      {Load && <div>Loading.......</div>}
      { Data && <BlogList blogs={Data} title="All Blogs"/> }
      {/* <BlogList blogs={blogs.filter((blog)=> blog.author  === "Pankaj")} title="Pankaj's Blog"/> */}
    </div>
  );
}

export default Home