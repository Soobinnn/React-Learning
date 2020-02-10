import React from 'react';
import { Table, DatePicker, Tag, Input } from 'antd';

const { Search } = Input;

const columns = [
	{
		title: 'URL',
		dataIndex: 'url',
		key: 'url',
		render: text => <a>{text}</a>
	},
	{
		title: 'RESULT',
		key: 'result',
		dataIndex: 'result',
		render: tags => (
			<span>
				{tags.map(tag => {
					let color = tag.length > 5 ? 'geekblue' : 'green';
					if (tag === 'loser') {
						color = 'volcano';
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</span>
		)
	},
	{
		title: 'VERSION',
		dataIndex: 'version',
		key: 'version'
	},
	{
		title: 'REPORT',
		dataIndex: 'report',
		key: 'report'
	},
	{
		title: 'AUTHOR',
		dataIndex: 'author',
		key: 'author'
	},
	{
		title: 'DATE',
		dataIndex: 'date',
		key: 'date'
	},
	{
		title: 'LOG',
		dataIndex: 'log',
		key: 'log'
	}
];

const data = [
	{
		key: '1',
		url: '/product/detail.html?product_no=9927&cate_no=39&display_group=1&tester=rendering',
		author: 'sbim',
		result: ['nice', 'developer'],
		version: 2,
		report: 3,
		date: '2020.02.10 13:22:42',
		log: '[T]'
	},
	{
		key: '2',
		url: '/order/basket.html?tester=randering',
		author: 'hslim02',
		result: ['loser'],
		version: 1,
		report: 2,
		date: '2020.02.10 13:21:42',
		log: '[T]'
	},
	{
		key: '3',
		url: '/order',
		author: 'sbim',
		result: ['cool', 'teacher'],
		version: 2,
		report: 1,
		date: '2020.02.10 13:12:42',
		log: '[T]'
	}
];

function onChange(date, dateString) {
	console.log(date, dateString);
}

function Board() {
	return (
		<div>
			<DatePicker onChange={onChange} />
			<DatePicker onChange={onChange} />
			<Search placeholder='input search text' onSearch={value => console.log(value)} style={{ width: 200 }} />
			<Table columns={columns} dataSource={data} />
		</div>
	);
}

export default Board;
