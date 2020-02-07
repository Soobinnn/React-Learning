import { Layout, Breadcrumb } from 'antd';
import React from 'react';
import Header from '../Header/Header';

function Main() {
	const { Content } = Layout;

	return (
		<Layout>
			<Header />
			<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<Content
					style={{
						background: '#fff',
						padding: 24,
						margin: 0,
						minHeight: 280
					}}>
					Content
				</Content>
			</Layout>
		</Layout>
	);
}

export default Main;
