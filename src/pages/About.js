import React, { useState } from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'antd';
import Home from './home/Home';
import About from './about/About';
import Topics from './topics/Topics';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Router>
			<div>
				<ul>
					<li><Link to='/'>首页</Link></li>
					<li><Link to='/about'>关于</Link></li>
					<li><Link to='/topics'>主题列表</Link></li>
				</ul>
				<hr/>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/topics" component={Topics} />
			</div>
		</Router>
	);
}

export default App;
