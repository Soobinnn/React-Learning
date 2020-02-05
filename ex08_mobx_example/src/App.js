import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import SuperMarket from './Components/SuperMarket';
import DevTools from 'mobx-react-devtools';

function App() {
	return (
		<div>
			<Counter />
			<hr />
			<SuperMarket />
			{/* {process.env.NODE_ENV === 'development' && <DevTools />} */}
		</div>
	);
}

export default App;
