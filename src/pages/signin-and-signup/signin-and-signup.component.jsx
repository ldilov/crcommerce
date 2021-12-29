import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { SignInSignUpContainer } from './signin-and-signup.styles';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectSignInError } from '../../redux/user/user.selectors';

const SignInAndSignUpPage = ({ error, currentUser }) => {
  const toastify = useCallback((message, type) => {
    toast[type](message, { theme: 'colored' });
  }, []);

  useEffect(() => {
    if (error) {
      toastify(`Failed to sign in!`, 'error');
    } else if (currentUser) {
      toastify(`Successfully logged in!`, 'success');
    }
  }, [error, currentUser, toastify]);

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
      <SignIn />
      <SignUp />
    </SignInSignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectSignInError,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(SignInAndSignUpPage);
