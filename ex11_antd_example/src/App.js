import React from 'react';
import Main from './View/Main/Main';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Sidebar from './View/Side/Sidebar';

function App() {
	return (
		<div className='App'>
			<Layout>
				<Sidebar />
				<Main />
			</Layout>
		</div>
	);
}

export default App;
