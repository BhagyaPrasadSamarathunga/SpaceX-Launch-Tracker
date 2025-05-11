import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBanner from "./ErrorBanner.js";

describe('ErrorBanner Component', () => {

  test('renders the error banner component correctly', () => {
    render(<ErrorBanner message={'Something went wrong'}/>);
    const textElement = screen.getByText('Something went wrong');
    expect(textElement).toBeInTheDocument();
  });
});