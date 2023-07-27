import { render, screen } from '@testing-library/react';
import ListActions from '.';
import { ToggleValues } from '../Toggle';

test('renders input field', () => {
	render(<ListActions setFilter={() => { }} order={ToggleValues.ALL} setOrder={() => { }} />);
	const input = screen.getByLabelText('filter by name');
	expect(input).toBeInTheDocument();
});
