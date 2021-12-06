import './App.css';

import { Component, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';

// Actions
import { setCurrentUser } from './redux/user/user.actions';

// Services
import AuthService from './data/services/auth.service';
import UserService from './data/services/user.service';

// Lazy loaded components
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
      await UserService.saveAuthUser(user);
    } catch (error) {
      if (error.innerError.snapshot) {
        user = error.innerError.snapshot.data();
      }
    }

    this.props.setCurrentUser(user);
  };

  componentWillUnmount() {
    AuthService.destroyAuthHandler();
  }

  componentDidMount() {
    AuthService.setAuthHandler(this.handleSetCurrentUser);
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
            path='/shop'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ShopPage />
              </Suspense>
            }
          />
          <Route
            exact
            path='/signin'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {this.props.currentUser ? (
                  <Navigate to='/' />
                ) : (
                  <SignInSignUpPage />
                )}
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
