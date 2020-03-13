import React,{ useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

const Home = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<h1>主页11111</h1>
			<Button type="primary">Button</Button>
			<Link to='/about'>关于</Link>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
			</button>
		</div>
	);
}

export default Home;
