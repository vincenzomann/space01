import React, { Dispatch, SetStateAction } from 'react';
import { Items } from '../../data';

interface ListActionProps {
	setItems: Dispatch<SetStateAction<Items[]>>;
	setFilter: Dispatch<SetStateAction<string>>;
}

const ListActions = ({ setItems, setFilter }: ListActionProps) => {
	return (
		<div>ListActions</div>
	);
};

export default ListActions;
