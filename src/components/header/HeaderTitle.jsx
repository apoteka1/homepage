import { useNavigate } from "react-router-dom";

const HeaderTitle = () => {

    const navigate = useNavigate();
	return <h1 id="header__main-title" onClick={() => navigate('/')}>Apoteka</h1>;
};
export default HeaderTitle