import "../styles/Nav.scss"
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <Link to="html" className="bluebutton">HTML</Link>
            <Link to="css" className="bluebutton">CSS</Link>
            <Link to="javascript" className="bluebutton">JAVASCRIPT</Link>
            <Link to="react" className="bluebutton">REACT</Link>
            <Link to="sanity" className="bluebutton">SANITY</Link>
        </nav>
    );
}