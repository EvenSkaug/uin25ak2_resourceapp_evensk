import "../styles/Nav.scss"
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        
        //Navigasjons lenker som sørger for at riktig slug blir plassert i søkevindu på nettsiden når man klikker på de ulike linkene. 
        //disse slugene blir hentet i variablen "category" i resources og brukes videre til å filtrere arrayen.
        <nav>
            <Link to="html" className="bluebutton">HTML</Link>
            <Link to="css" className="bluebutton">CSS</Link>
            <Link to="javascript" className="bluebutton">JAVASCRIPT</Link>
            <Link to="react" className="bluebutton">REACT</Link>
            <Link to="headless-cms" className="bluebutton">HEADLESS-CMS</Link>
        </nav>
    );
}