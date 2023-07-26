import React, { useState } from 'react';
import './App.css';
import { Items } from './data';
import ListActions from './components/ListActions';
import ListItems from './components/ListItems';

function App() {
	const [items, setItems] = useState<Items[]>([]);
	const [filter, setFilter] = useState('');

	return (
		<div className="App">
			<ListActions setItems={setItems} setFilter={setFilter} />
			<ListItems data={items} />
		</div>
	);
}

export default App;
