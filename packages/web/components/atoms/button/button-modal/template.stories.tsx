import { Story, Meta } from '@storybook/react';
import { ModalButtonTemplate, ModalButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: ModalButtonTemplate,
} as Meta;

const ButtonStory: Story<ModalButtonTemplateProps> = (args) => (
  <ModalButtonTemplate {...args} />
);

export const Modal = ButtonStory.bind({});
Modal.args = {
  modalType: 'close',
};
