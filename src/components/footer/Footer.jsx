import './Footer.css'
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate();
	return <footer id="footer__container"><p>site built by&nbsp;</p><p onClick={()=>navigate('/contact')} className="custom-link" >Apoteka</p></footer>;
};

export default Footer;
