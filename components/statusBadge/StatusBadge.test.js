import React from 'react';
import { render, screen } from '@testing-library/react';
import StatusBadge from "./StatusBadge.js";

describe('StatusBadge Component', () => {

  test('renders the status badge component correctly', () => {
    render(<StatusBadge status={"success"}/>);
    const textElement = screen.getByText('Success');
    expect(textElement).toBeInTheDocument();
  });

  test('applies correct background color for success', () => {
    render(<StatusBadge status="success" />);
    const badge = screen.getByText('Success');
    expect(badge).toHaveStyle('background-color: #d1f5a8');
  });

  test('applies correct background color for failure', () => {
    render(<StatusBadge status="failure" />);
    const badge = screen.getByText('Failure');
    expect(badge).toHaveStyle('background-color: #f5b0a8');
  });

});