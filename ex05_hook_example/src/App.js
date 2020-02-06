import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Info from './components/Info';
import InfoUseEffect from './components/InfoUseEffect';

function App() {
	return (
		<div className='App'>
			{/* useState Example */}
			<Counter />
			{/* useState Example2 */}
			{/* 하나의 useState함수는 하나의 상태 값만 관리할 수 있기 때문에, 컴포넌트에서 관리해야할 상태가 여러개라면 useState를 여러개 사용하면된다. */}
			<Info />
			{/* useEffect Example */}
			<InfoUseEffect />
		</div>
	);
}

export default App;
