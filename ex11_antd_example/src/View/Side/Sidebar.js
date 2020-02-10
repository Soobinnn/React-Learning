import React, { useState, useEffect } from 'react';
import { Layout, Menu, Icon } from 'antd';

function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapse = collapsed => {
		setCollapsed(collapsed);
	};

	console.log(collapsed);
	const { SubMenu } = Menu;
	const { Sider } = Layout;
	return (
		<Sider collapsible width={200} collapsed={collapsed} onCollapse={onCollapse}>
			<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
				<Menu.Item key='1'>
					<Icon type='desktop' />
					<span>Test Result</span>
				</Menu.Item>
				<SubMenu
					key='sub1'
					title={
						<span>
							<Icon type='pie-chart' />
							<span>Dash Board</span>
						</span>
					}>
					<Menu.Item key='3'>Tom</Menu.Item>
					<Menu.Item key='4'>Bill</Menu.Item>
					<Menu.Item key='5'>Alex</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
	);
}

export default Sidebar;
