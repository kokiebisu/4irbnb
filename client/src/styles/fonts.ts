import { createGlobalStyle } from 'styled-components';

import AirbnbCerealBlack from '../assets/fonts/AirbnbCerealBlack.woff';
import AirbnbCerealBold from '../assets/fonts/AirbnbCerealBold.woff';

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Airbnb-Cereal';
        src: url(${AirbnbCerealBlack});
    }
`;
