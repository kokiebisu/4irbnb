import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Box } from 'atoms';
import { Notification } from 'organisms/Notification';
import { cookie } from 'organisms/Notification/stories/notification.cookie.stories';

describe('Cookie Notification', () => {
  it('renders text correctly', () => {
    const { getByText } = render(
      <Box>
        <Notification {...cookie.args} />
      </Box>
    );
    expect(getByText('Your Privacy')).toBeInTheDocument();
  });
});
