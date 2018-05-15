import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App />, document.getElementById('root')
	);
if (module.hot) { //this makes the content refresh without reloading the whole page
	module.hot.accept();
}
registerServiceWorker();
