import React, { useState } from 'react';
import '../assets/css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'antd';
import Details from '../components/Details';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Router>
		<div className="App">
			<header className="App-header">
				<p>{count}</p>
				<Button type="primary" onClick={() => setCount(count + 1)}>Button</Button>
			</header>
		</div>
			<Route path="/details" component={Details} />
		</Router>
	);
}

export default App;
