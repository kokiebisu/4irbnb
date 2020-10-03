import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal, ModalProps } from './modal.component';

export default {
  title: 'Design System/Organisms/Modal',
  component: Modal,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const ModalTemplate: Story<ModalProps> = (args) => <Modal {...args} />;

export const privacy = ModalTemplate.bind({});
privacy.args = {
  type: 'privacy',
};
