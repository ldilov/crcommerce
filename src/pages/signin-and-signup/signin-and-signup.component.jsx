import { useCallback } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { SignInSignUpContainer } from './signin-and-signup.styles';

const SignInAndSignUpPage = () => {
  const toastify = useCallback((message, type) => {
    toast[type](message, { theme: 'colored' });
  }, []);

  return (
    <SignInSignUpContainer>
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
    </SignInSignUpContainer>
  );
};

export default SignInAndSignUpPage;
