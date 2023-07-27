import { Dispatch, SetStateAction } from 'react';
import Toggle, { ToggleValues } from '../Toggle';
import { Stack, TextField, styled } from '@mui/material';

const CssTextField = styled(TextField)({
	'& label': {
		color: '#fff',
	},
	'& label.Mui-focused': {
		color: '#fff',
	},
	'& .MuiOutlinedInput-root': {
		color: '#fff',
		'& fieldset': {
			borderColor: '#fff',
		},
		'&:hover fieldset': {
			borderColor: '#fff',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#fff',
		},
	},
});

interface ListActionProps {
	setFilter: Dispatch<SetStateAction<string>>;
	order: ToggleValues;
	setOrder: Dispatch<SetStateAction<ToggleValues>>;
}

const ListActions = ({ setFilter, order, setOrder }: ListActionProps) => {
	return (
		<Stack sx={{ maxWidth: '300px', margin: 'auto' }}>
			<Toggle order={order} setOrder={setOrder} />
			<CssTextField id="filter" label="filter by name" variant="outlined" onChange={(e) => setFilter(e.target.value)} />
		</Stack>
	);
};

export default ListActions;
