import React from 'react';
import { Items } from '../../data';

interface ListItemsProps {
	data: Items[];
}

const ListItems = ({ data }: ListItemsProps) => {
	return (
		<div>ListItems</div>
	);
};

export default ListItems;
