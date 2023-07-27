import { Item } from '../../data';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	fontWeight: '700'
}));

interface ListItemsProps {
	data: Item[];
}

const ListItems = ({ data }: ListItemsProps) => {

	return (
		<TableContainer component={Paper} sx={{ maxWidth: '300px', margin: '1rem auto' }}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow >
						<StyledTableCell>Item name</StyledTableCell>
						<StyledTableCell>Price (£)</StyledTableCell>
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
