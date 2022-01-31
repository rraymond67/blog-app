import Navbar from '../components/Navbar/Navbar'
import './Layout.css'

export const Layout = (props) => {
    return (
        <div className = "body-container">
            <Navbar classname="navbar" />
            <div>{props.children}</div>
        </div>
    );
};