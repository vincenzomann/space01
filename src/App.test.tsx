import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { data } from './data';

test('renders cheapest items by default', () => {
	render(<App />);
	const listRows = screen.getAllByTestId('list-row');
	expect(listRows).toHaveLength(5);
});

test('toggle button changes list items', async () => {
	render(<App />);
	const allButton = screen.getByText('All');
	await fireEvent.click(allButton);
	const listRows = screen.getAllByTestId('list-row');
	expect(listRows).toHaveLength(data.length);
});


