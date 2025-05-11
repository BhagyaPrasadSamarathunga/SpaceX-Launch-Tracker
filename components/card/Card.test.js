import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from "./Card.js";

describe('Card Component', () => {

  test('renders the card children correctly', () => {
    render(<Card><div><p>Space X</p></div> </Card>);
    const textElement = screen.getByText('Space X');
    expect(textElement).toBeInTheDocument();
  });
});