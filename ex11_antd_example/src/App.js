import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from './View/Header/Header';
import TestResult from './View/Main/Testresult';

function App() {
	return (
		<div className='App'>
			<Layout style={{ minHeight: '100vh' }}>
				<Header />
				<TestResult />
			</Layout>
		</div>
	);
}

export default App;
