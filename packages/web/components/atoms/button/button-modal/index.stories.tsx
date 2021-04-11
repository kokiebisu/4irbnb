import { Story, Meta } from '@storybook/react';
import { ModalButton, ModalButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: ModalButton,
} as Meta;

const ButtonStory: Story<ModalButtonProps> = (args) => (
  <ModalButton {...args} />
);

export const Modal = ButtonStory.bind({});
Modal.args = {
  modalType: 'close',
};
