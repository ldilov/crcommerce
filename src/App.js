import './App.css';

import { Component, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Selectors
import { selectCurrentUser } from './redux/user/user.selectors';

// Components
import Header from './components/header/header.component';

// Actions
import { googleSignInStart } from './redux/user/user.actions';

// Services
const AuthService = () => import('./data/services/auth.service');
const UserService = () => import('./data/services/user.service');
const Services = {
  AuthService,
  UserService
};

// Lazy loaded components
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignOutPage = lazy(() => import('./pages/signout/signout.component'));
const SignInSignUpPage = lazy(() =>
  import('./pages/signin-and-signup/signin-and-signup.component')
);

class App extends Component {
  handleSetCurrentUser = async (payload) => {
    let user = payload.currentUser;

    try {
      if (typeof Services.UserService === 'function') {
        Services.UserService = (await UserService()).default;
      }
      await Services.UserService.saveAuthUser(user);
    } catch (error) {
      if (error.innerError.snapshot) {
        user = error.innerError.snapshot.data();
      }
    }

    this.props.setCurrentUser(user);
  };

  componentWillUnmount() {
    // if (typeof Services.AuthService === 'function') {
    //   AuthService().then((module) => {
    //     Services.AuthService = module.default;
    //     module.default.destroyAuthHandler();
    //   });
    // }
  }

  componentDidMount() {
    // AuthService().then((module) => {
    //   Services.AuthService = module.default;
    //   module.default.setAuthHandler(this.handleSetCurrentUser);
    // });
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            exact
            path='/shop/*'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ShopPage />
              </Suspense>
            }
          />
          <Route
            exact
            path='/checkout'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CheckoutPage />
              </Suspense>
            }
          />
          <Route
            exact
            path='/signin'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {this.props.currentUser ? <Navigate to='/' /> : <SignInSignUpPage />}
              </Suspense>
            }
          />
          <Route
            exact
            path='/signout'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignOutPage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  onGoogleSingInStart: () => dispatch(googleSignInStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
