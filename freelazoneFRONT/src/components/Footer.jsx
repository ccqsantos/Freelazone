import '../css/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <div className="footer-container">
        <div className='left-side'>
            <Link to="/about">About</Link>
        </div>
        <div className='right-side'>
           <Link to="/help">Help</Link>
        </div>
    </div>
    )
}

export default Footer;
