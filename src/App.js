import './App.css';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header.component';

// Lazy laoded components
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));

function App() {
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
			</Routes>
		</div>
	);
}

export default App;
