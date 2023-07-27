import React from 'react';
import { Item } from '../../data';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

interface ListItemsProps {
	data: Item[];
}

const ListItems = ({ data }: ListItemsProps) => {

	return (
		<TableContainer component={Paper} sx={{ width: '300px', margin: '1rem auto' }}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow >
						<TableCell sx={{ fontWeight: '700' }}>Item name</TableCell>
						<TableCell sx={{ fontWeight: '700' }}>Price</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow
							key={row.name}
							data-testid='list-row'
						>
							<TableCell>
								{row.name}
							</TableCell>
							<TableCell >{row.price}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ListItems;
