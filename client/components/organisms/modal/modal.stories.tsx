import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal, ModalProps } from './modal.component';
import color from '../../../styles/color.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';

export default {
  title: 'Design System/Organisms/Modal',
  component: Modal,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

const ModalTemplate: Story<ModalProps> = (args) => <Modal {...args} />;

export const privacy = ModalTemplate.bind({});
privacy.args = {
  extendsTo: [
    color['bg--white'],
    layout['fb--0'],
    layout['z--9999'],
    layout['block'],
    space['m--20'],
    shape['br--8'],
  ].join(' '),
  type: 'privacy',
};
