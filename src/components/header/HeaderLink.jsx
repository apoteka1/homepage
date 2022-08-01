import { useNavigate } from "react-router-dom";
const HeaderLink = ({ path, label }) => {
	const navigate = useNavigate();
	return (
		<div>
			<h2 onClick={() => navigate(path)} className="custom-link">
				{label}
			</h2>
		</div>
	);
};

export default HeaderLink;
