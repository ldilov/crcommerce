import { useCallback } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { ToastContainer, toast } from 'react-toastify';

import './signin-and-signup.styles.scss';
import 'react-toastify/dist/ReactToastify.css';

const SignInAndSignUpPage = () => {
	const toastify = useCallback((message, type) => {
		toast[type](message, { theme: 'colored' });
	}, []);

	return (
		<div className='sign-in-and-sign-up'>
			<ToastContainer
				position='top-left'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<SignIn notify={toastify} />
			<SignUp />
		</div>
	);
};

export default SignInAndSignUpPage;
