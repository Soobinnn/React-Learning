import React from 'react';
import { Layout, Tabs } from 'antd';
import Sidebar from '../Side/Sidebar';
import LineChart from '../../Components/LineChart';
import BarChart from '../../Components/BarChart';
import DoughnutChart from '../../Components/DoughnutChart';
import Board from '../../Components/TestResult/Board';
const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

// Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif';

// Data generation
function getRandomArray(numItems) {
	// Create random array of objects
	let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let data = [];
	for (var i = 0; i < numItems; i++) {
		data.push({
			label: names[i],
			value: Math.round(20 + 80 * Math.random())
		});
	}
	return data;
}

function getRandomDateArray(numItems) {
	// Create random array of objects (with date)
	let data = [];
	let baseTime = new Date('2018-05-01T00:00:00').getTime();
	let dayMs = 24 * 60 * 60 * 1000;
	for (var i = 0; i < numItems; i++) {
		data.push({
			time: new Date(baseTime + i * dayMs),
			value: Math.round(20 + 80 * Math.random())
		});
	}
	return data;
}

function getData() {
	let data = [];

	data.push({
		title: 'Visits',
		data: getRandomDateArray(150)
	});

	data.push({
		title: 'Categories',
		data: getRandomArray(20)
	});

	data.push({
		title: 'Categories',
		data: getRandomArray(10)
	});

	data.push({
		title: 'Data 4',
		data: getRandomArray(6)
	});

	return data;
}

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: getData()
		};
	}

	componentDidMount() {
		window.setInterval(() => {
			this.setState({
				data: getData()
			});
		}, 5000);
	}

	render() {
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
						<Tabs onChange={callback} type='card' style={{ minHeight: 600 }}>
							<TabPane tab='TestResult' key='1'>
								<div>
									<LineChart data={this.state.data[0].data} title={this.state.data[0].title} color='#3E517A' />
								</div>
								<div>
									<BarChart data={this.state.data[1].data} title={this.state.data[1].title} color='#70CAD1' />
								</div>
								<div className='sub chart-wrapper'>
									<DoughnutChart data={this.state.data[3].data} title={this.state.data[3].title} colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']} />
								</div>
							</TabPane>
							<TabPane tab='sbim' key='2'>
								<BarChart data={this.state.data[2].data} title={this.state.data[2].title} color='#B08EA2' />
							</TabPane>
						</Tabs>
						<Board />
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default Main;
