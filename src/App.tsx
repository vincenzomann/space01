import React, { useEffect, useState } from 'react';
import './App.css';
import { Item, data } from './data';
import ListActions from './components/ListActions';
import ListItems from './components/ListItems';
import { ToggleValues } from './components/Toggle';

function App() {
	const [items, setItems] = useState<Item[]>([]);
	const [filter, setFilter] = useState('');
	const [order, setOrder] = useState<ToggleValues>(ToggleValues.CHEAPEST);

	useEffect(() => {
		let items: Item[] = [];
		switch (order) {
			case ToggleValues.ALL:
				items = data;
				break;
			case ToggleValues.CHEAPEST:
			default:
				// default order is 'cheapest', so on initial render show 5 cheapest items
				items = [...data].sort((a, b) => a.price - b.price).slice(0, 5);
				break;
		}
		setItems(items);
	}, [order]);

	useEffect(() => {
		if (filter) {
			const filtered = data.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
			setItems(filtered);
			setOrder(ToggleValues.ALL);
		}
	}, [filter]);


	return (
		<div className="App">
			<ListActions setFilter={setFilter} order={order} setOrder={setOrder} />
			<ListItems data={items} />
		</div>
	);
}

export default App;
