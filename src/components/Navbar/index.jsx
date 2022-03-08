import { Navigation } from "./style"
import { NavLink } from 'react-router-dom';

export const Navbar = () =>{
    return(
        <Navigation>
            <ul>
                <li><NavLink to="/" >All Posts</NavLink></li>
                <li><NavLink to="/post/new" >Create Post</NavLink></li>
            </ul>
        </Navigation>
    )
}