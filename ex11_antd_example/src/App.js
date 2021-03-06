import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from './View/Header/Header';
import TableSearch from './Components/Table/TableSearch';

function App() {
	return (
		<div className='App'>
			<Layout style={{ minHeight: '100vh' }}>
				<Header />
				{/* <TestResult /> */}
				<TableSearch/>
			</Layout>
		</div>
	);
}

export default App;
