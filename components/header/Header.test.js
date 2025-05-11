import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from "./Header.js";

describe('Header Component', () => {

  test('renders the header component correctly', () => {
    render(<Header/>);
    const textElement = screen.getByText('Space X Launch Tracker');
    expect(textElement).toBeInTheDocument();
  });
});