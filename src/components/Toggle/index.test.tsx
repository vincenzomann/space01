import React from 'react';
import { render, screen } from '@testing-library/react';
import Toggle, { ToggleValues } from '.';
import { data } from '../../data';

test('renders toggle buttons', () => {
	render(<Toggle order={ToggleValues.CHEAPEST} setOrder={() => { }} />);
	const elements = screen.getAllByRole('button');
	expect(elements).toHaveLength(2);
});
