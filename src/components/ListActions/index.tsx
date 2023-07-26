import React, { Dispatch, SetStateAction } from 'react';
import { Item } from '../../data';

interface ListActionProps {
	setItems: Dispatch<SetStateAction<Item[]>>;
	setFilter: Dispatch<SetStateAction<string>>;
}

const ListActions = ({ setItems, setFilter }: ListActionProps) => {
	return (
		<div>ListActions</div>
	);
};

export default ListActions;
