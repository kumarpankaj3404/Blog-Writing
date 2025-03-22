import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notFound'>
        <h2>Sorry</h2>
        <p>The page does't exist</p>
        <Link to='/Dojo-blog/'>Go back to home page</Link>
    </div>
  )
}

export default NotFound