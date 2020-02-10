import React from 'react';
import Main from './View/Main/Main';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from './View/Header/Header';

function App() {
	return (
		<div className='App'>
			<Layout style={{ minHeight: '100vh' }}>
				<Header />
				<Main />
			</Layout>
		</div>
	);
}

export default App;
