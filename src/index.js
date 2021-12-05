import ReactDOM from 'react-dom';
import LayeredProvider from './providers/layered-provider.provider';

import './index.css';
import App from './App';

ReactDOM.render(
	<LayeredProvider>
		<App />
	</LayeredProvider>,
	document.getElementById('root')
);
