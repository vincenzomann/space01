import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { data } from './data';

test('renders cheapest items by default', async () => {
	render(<App />);
	const listRows = await screen.findAllByTestId('list-row');
	expect(listRows).toHaveLength(5);
});

test('toggle button changes list items', async () => {
	render(<App />);
	const allButton = screen.getByText('All');
	fireEvent.click(allButton);
	const listRows = await screen.findAllByTestId('list-row');
	expect(listRows).toHaveLength(data.length);
});

test('input filters the list items', async () => {
	render(<App />);
	const input = screen.getByLabelText('filter by name');
	fireEvent.change(input, { target: { value: 'h' } });
	const listRows = await screen.findAllByTestId('list-row');
	expect(listRows).toHaveLength(1);
});
