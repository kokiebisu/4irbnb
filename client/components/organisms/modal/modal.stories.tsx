import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal, ModalProps } from './modal.component';
import { ContextProvider } from '../../../context/provider';

export default {
  title: 'Design System/Organisms/Modal',
  component: Modal,
  argTypes: { onPress: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const ModalTemplate: Story<ModalProps> = (args) => <Modal {...args} />;

export const privacy = ModalTemplate.bind({});
privacy.args = {
  type: 'privacy',
};

export const menu = ModalTemplate.bind({});
menu.args = {
  type: 'menu',
};

export const register = ModalTemplate.bind({});
register.args = {
  type: 'register',
};
