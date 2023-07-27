import React, { Dispatch, SetStateAction } from 'react';
import { Item } from '../../data';
import Toggle, { ToggleValues } from '../Toggle';

interface ListActionProps {
	setItems: Dispatch<SetStateAction<Item[]>>;
	setFilter: Dispatch<SetStateAction<string>>;
	order: ToggleValues;
	setOrder: Dispatch<SetStateAction<ToggleValues>>;
}

const ListActions = ({ setItems, setFilter, order, setOrder }: ListActionProps) => {
	return (
		<div>
			<Toggle order={order} setOrder={setOrder} />
		</div>
	);
};

export default ListActions;
