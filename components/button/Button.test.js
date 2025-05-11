import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from "./Button.js";

describe('Button Component', () => {
    test('renders the button with the correct text', () => {
      const mockFn = jest.fn();
      render(<Button title={'Next'} onClick={mockFn} isDisable={false} status={''}/>);
      const textElement = screen.getByText('Next');
      expect(textElement).toBeInTheDocument();
    });
    test("button is disabled and does not call the onClick function", () => {
        const mockFn = jest.fn();
        render(<Button title={'Previous'} onClick={mockFn} isDisable={true} status={''}/>);
        fireEvent.click(screen.getByText('Previous'));
        expect(mockFn).toHaveBeenCalledTimes(0);
    });
    test("button is enabled and calls the onclick function", () => {
        const mockFn = jest.fn();
        render(<Button title={'Next'} onClick={mockFn} isDisable={false} status={''}/>);
        fireEvent.click(screen.getByText('Next'));
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });