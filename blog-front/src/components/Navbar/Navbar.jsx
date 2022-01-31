import {NavLink} from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {
    return (
        <div className="nav">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/logout'>Logout</NavLink>
            <NavLink to='/signup'>SignUp</NavLink>
            <NavLink to='/createblog'>Create Blog</NavLink>
            <NavLink to='/user/:id'>User</NavLink>
        </div>
    )
}

//Navbar for users that are signed in?

//route for displaying all blogs?