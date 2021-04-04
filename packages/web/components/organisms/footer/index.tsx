import Router from 'next/router';

import color from '@styles/color.module.scss';
import space from '@styles/space.module.scss';
import styles from '@styles/index.module.scss';
import font from '@styles/font.module.scss';
import layout from '@styles/layout.module.scss';

import { Globe } from '@svg/original';

import { useFooter } from './logic';
import { FooterTemplate } from './template';

export interface FooterProps {
  spread?: boolean;
}

/**
 * Renders the footer
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const Footer: React.FC<FooterProps> = () => {
  const data = useFooter();
  return <FooterTemplate {...data} />;
};
