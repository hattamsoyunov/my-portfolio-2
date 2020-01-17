import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';

import { Provider } from 'react-redux';

// import Counter from './components/Counter.js';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
