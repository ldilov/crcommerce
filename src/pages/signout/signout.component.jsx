import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Services
import AuthService from '../../data/services/auth.service';

const SignOut = () => {
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			await AuthService.signOut();
			navigate('/');
		})();
	}, [navigate]);

	return <span>Loading...</span>;
};

export default SignOut;
