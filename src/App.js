import './App.css';

import { Component, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header.component';

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
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
		};
	}

	handleSetCurrentUser = async (payload) => {
		try {
			await UserService.saveAuthUser(payload.currentUser);
		} catch (error) {
			if (error.innerError.snapshot) {
				payload = { currentUser: error.innerError.snapshot.data() };
			}
		}
		this.setState(payload);
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
				<Header currentUser={this.state.currentUser} />
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
								<SignInSignUpPage />
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

export default App;
