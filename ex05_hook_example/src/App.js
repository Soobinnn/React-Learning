import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Info from './components/Info';
import InfoUseEffect from './components/InfoUseEffect';
import InfoDidMount from './components/InfoDidMount';
import InfoDidUpdate from './components/InfoDidUpdate';
import InfoWillUnmount from './components/InfoWillUnmount';
import ContextSample from './components/ContextSample';
import CounterUseReducer from './components/CounterUseReducer';
import InfoUseReducer from './components/InfoUseReducer';
import Average from './components/Average';
import AverageUseCallback from './components/AverageUseCallback';
import AverageUseRef from './components/AverageUseRef';
import InfoCustomHooks from './components/InfoCustomHooks';
import UsePromiseSample from './components/UsePromiseSample';

const App = () => {
	const [visible, setVisible] = useState(false);
	return (
		<div className='App'>
			{/* useState Example */}
			<Counter />

			{/* useState Example2 */}
			{/* 하나의 useState함수는 하나의 상태 값만 관리할 수 있기 때문에, 컴포넌트에서 관리해야할 상태가 여러개라면 useState를 여러개 사용하면된다. */}
			<Info />

			{/* useEffect Example */}
			<InfoUseEffect />

			{/* ComponentDidMount Example */}
			<InfoDidMount />

			{/* ComponentDidUpdate Example */}
			<InfoDidUpdate />

			{/* ComponentWillUnmount Example */}
			{/* Unmount될떄만 호출 하고 싶을 경우 useEffect 두번째 파라미터에 []를 추가한다. */}
			<button
				onClick={() => {
					setVisible(!visible);
				}}>
				{visible ? '숨기기' : '보이기'}
			</button>
			{visible && <InfoWillUnmount />}

			{/* useContext Example */}
			<ContextSample />

			{/* useReducer Example */}
			<CounterUseReducer />

			{/* useReducer Example2 */}
			<InfoUseReducer />

			{/* useMemo Example */}
			<Average />

			{/* useCallback */}
			<AverageUseCallback />

			{/* AverageUseRef Example */}
			<AverageUseRef />

			{/* Custom Hooks Example */}
			<InfoCustomHooks />

			{/* usePromise Example */}
			<UsePromiseSample />
		</div>
	);
};

export default App;
