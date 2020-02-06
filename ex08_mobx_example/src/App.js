import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import SuperMarket from './Components/SuperMarket';

function App() {
	console.log(process.env.NODE_ENV);
	return (
		<div>
			<Counter />
			<hr />
			<SuperMarket />
		</div>
	);
}

export default App;
