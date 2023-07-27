import React, { Dispatch, SetStateAction } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export enum ToggleValues {
	CHEAPEST = 'cheapest',
	ALL = 'all'
}

interface ListActionProps {
	order: ToggleValues;
	setOrder: Dispatch<SetStateAction<ToggleValues>>;
}

const Toggle = ({ order, setOrder }: ListActionProps) => {

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newOrder: ToggleValues,
	) => {
		setOrder(newOrder);
	};

	return (
		<ToggleButtonGroup
			color="primary"
			value={order}
			exclusive
			onChange={handleChange}
			aria-label="Platform"
			sx={{ margin: '2rem 0 1rem' }}
		>
			<ToggleButton value={ToggleValues.CHEAPEST}>Cheapest</ToggleButton>
			<ToggleButton value={ToggleValues.ALL}>All</ToggleButton>
		</ToggleButtonGroup>
	);
};

export default Toggle;
