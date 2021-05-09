import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import { Button } from '@button';
import '@testing-library/jest-dom/extend-expect';

describe('back button', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Button variant="back" onClick={() => console.log('clicked')} />
    );
    expect(getByTestId('back-button')).toHaveTextContent('Back');
  });
  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} variant="back" />);
    fireEvent.click(screen.getByText(/Back/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
