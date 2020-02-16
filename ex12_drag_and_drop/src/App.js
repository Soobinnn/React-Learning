import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import './App.css';
import SingleTarget from './Components/Dustbin/SingleTarget';
import MultiTarget from './Components/Dustbin/MutiTarget';
import Naive from './Components/DragAround/Naive';
import Container from './Components/ChainConnector/Container';
import DragContainer from './Components/Example/DragContainer';

function App() {
	return (
		<div className='App'>
			<DndProvider backend={Backend}>
				<SingleTarget />
				<MultiTarget/>
				<Naive/>
				<Container/>
				<DragContainer/>
			</DndProvider>
		</div>
	);
}

export default App;
