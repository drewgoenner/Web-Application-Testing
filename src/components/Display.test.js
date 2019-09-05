import React from 'react';
import Display from './Display'
import { render } from '@testing-library/react';


test('Should find the word Strikes on screen', () => {
    const { getByText } = render(<Display />)
    getByText(/strikes/i);
    getByText(/balls/i);
})