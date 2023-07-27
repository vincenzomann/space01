import React, { Dispatch, SetStateAction } from 'react';
import Toggle, { ToggleValues } from '../Toggle';
import { Stack, TextField } from '@mui/material';

interface ListActionProps {
	setFilter: Dispatch<SetStateAction<string>>;
	order: ToggleValues;
	setOrder: Dispatch<SetStateAction<ToggleValues>>;
}

const ListActions = ({ setFilter, order, setOrder }: ListActionProps) => {
	return (
		<Stack sx={{ maxWidth: '300px', margin: 'auto' }}>
			<Toggle order={order} setOrder={setOrder} />
			<TextField id="filter" label="filter by name" variant="outlined" onChange={(e) => setFilter(e.target.value)} />
		</Stack>
	);
};

export default ListActions;
