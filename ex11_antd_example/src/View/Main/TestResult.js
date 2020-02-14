import React from 'react';
import { Layout, Tabs } from 'antd';
import Sidebar from '../Side/Sidebar';
import Board from '../../Components/TestResult/Board';
const { TabPane } = Tabs;


function TestResult {
		const { Content } = Layout;
		return (
			<Layout>
				<Sidebar />
				<Layout style={{ padding: '0 24px 24px' }}>
					<Content
						style={{
							background: '#fff',
							padding: 24,
							margin: 0,
							minHeight: 280
						}}>
						<Board />
					</Content>
				</Layout>
			</Layout>
		);
}

export default TestResult;
