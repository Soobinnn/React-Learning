import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import './App.css';
import SingleTarget from './Components/Dustbin/SingleTarget';

function App() {
	return (
		<div className='App'>
			<DndProvider backend={Backend}>
				<SingleTarget />
			</DndProvider>
		</div>
	);
}

export default App;
