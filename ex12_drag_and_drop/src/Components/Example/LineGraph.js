import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
	labels: ['1', '2', '3', '4', '5', '6', '7'],
	datasets: [
		{
			label: 'hotping.com/',
			fill: false,
			lineTension: 0,
			backgroundColor: 'red',
			borderColor: 'red',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'red',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 5,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 5,
			data: [65, 59, 80, 81, 56, 55, 40]
		},
		{
			label: 'hotping.com/test',
			fill: false,
			lineTension: 0,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 5,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 5,
			data: [45, 19, 70, 61, 46],
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								// Include a dollar sign in the ticks
								callback: function(value, index, values) {
									return '$' + value;
								}
							}
						}
					]
				}
			}
		}
	]
};

const LineDemo = () => {
	const chart = useRef('chart');

	useEffect(() => {
		//const { datasets } = refs.chart.chartInstance.data;
		console.log(chart.current.props);
	}, []);
	return (
		<div>
			<h2>Line Example</h2>
			<Line
				ref={chart}
				data={data}
				options={{
					scales: {
						xAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: '회차'
								}
							}
						],
						yAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: 'Timing Total'
								}
							}
						]
					}
				}}
			/>
		</div>
	);
};

export default LineDemo;
