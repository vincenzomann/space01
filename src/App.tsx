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
		if (filter) {
			const filtered = data.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
			setItems(filtered);
			setOrder(ToggleValues.ALL);
			return;
		}
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
	}, [order, filter]);

	return (
		<div className="App">
			<span className="space-logo-wrapper">
				<span className="space-logo space-logo-white"></span>
				<span className="s-logo s-logo-white"></span>
				<span className="space-logo-box-right space-logo-white-box-right"></span>
			</span>
			<ListActions setFilter={setFilter} order={order} setOrder={setOrder} />
			<ListItems data={items} />
		</div>
	);
}

export default App;
