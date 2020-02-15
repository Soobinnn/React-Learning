import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import './App.css';
import SingleTarget from './Components/Dustbin/SingleTarget';
import MultiTarget from './Components/Dustbin/MutiTarget';

function App() {
	return (
		<div className='App'>
			<DndProvider backend={Backend}>
				<SingleTarget />
				<MultiTarget/>
			</DndProvider>
		</div>
	);
}

export default App;
