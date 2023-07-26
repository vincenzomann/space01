import React from 'react';
import { render, screen } from '@testing-library/react';
import ListItems from '.';
import { data } from '../../data';

test('renders table header', () => {
	render(<ListItems data={data} />);
	const linkElement = screen.getByText(/Item name/i);
	expect(linkElement).toBeInTheDocument();
});
