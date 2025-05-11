import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from "./Pagination.js";
import styles from "./Pagination.module.css";

describe('Pagination Component', () => {

  test('renders the pagination component correctly', () => {
    const mockFn = jest.mock();
    render(<Pagination
      currentPage={10}
      setCurrentPage={mockFn}
      pages={50}      
      hasNextPage={true}
      />);
    const textElement = screen.getByText('10');
    expect(textElement).toBeInTheDocument();
  });

  test('highlights the matching text', () => {
    const mockFn = jest.mock();
    render(<Pagination
      currentPage={10}
      setCurrentPage={mockFn}
      pages={50}      
      hasNextPage={true}
      />);
  
    const pageButton = screen.getByText('10').parentElement;
    expect(pageButton).toHaveClass(styles.active);
  });
});