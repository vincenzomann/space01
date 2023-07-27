import React, { Dispatch, SetStateAction } from 'react';
import { ToggleButtonGroup, ToggleButton, styled } from '@mui/material';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
	margin: '2rem 0 1rem',
	'& .MuiToggleButtonGroup-grouped': {
		color: '#fff',
		borderColor: '#fff',
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.2)',
		},
		'&.Mui-selected': {
			backgroundColor: 'rgba(255, 255, 255, 0.2)',
		},
	},
}));

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
		if (newOrder !== null) {
			setOrder(newOrder);
		}
	};

	return (
		<StyledToggleButtonGroup
			value={order}
			exclusive
			onChange={handleChange}
			aria-label="Platform"
		>
			<ToggleButton value={ToggleValues.CHEAPEST}>Cheapest</ToggleButton>
			<ToggleButton value={ToggleValues.ALL}>All</ToggleButton>
		</StyledToggleButtonGroup>
	);
};

export default Toggle;
