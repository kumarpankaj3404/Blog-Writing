import {Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>The Dojo-Blog</h1>
        <div className="links">
            <Link to='/Dojo-blog/'>Home</Link>
            <Link to="/Dojo-blog/create">New Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar;
