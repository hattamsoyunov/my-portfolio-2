import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import { Provider } from 'react-redux';

// import Counter from './components/Counter.js';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
