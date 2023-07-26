import React, { useEffect, useState } from 'react';
import './App.css';
import { Item, data } from './data';
import ListActions from './components/ListActions';
import ListItems from './components/ListItems';

function App() {
	const [items, setItems] = useState<Item[]>([]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		setItems(data);
	}, []);

	return (
		<div className="App">
			<ListActions setItems={setItems} setFilter={setFilter} />
			<ListItems data={items} />
		</div>
	);
}

export default App;
