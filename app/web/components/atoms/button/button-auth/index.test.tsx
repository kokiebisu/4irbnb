import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '@button';
import '@testing-library/jest-dom/extend-expect';

describe('auth button', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <Button variant="auth" onClick={() => console.log('clicked')} />
    );
    expect(getByTestId('auth-button')).toHaveTextContent('Continue with Email');
  });
  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button variant="auth" onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Continue with Email/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
