import { createGlobalStyle } from 'styled-components';

import AirbnbCerealBold from '../assets/fonts/AirbnbCereal-Bold.woff2';
import AirbnbCerealMedium from '../assets/fonts/AirbnbCereal-Medium.woff2';
import AirbnbCerealBook from '../assets/fonts/AirbnbCereal-Book.woff2';

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 700;
        src: url(${AirbnbCerealBold}) format("woff2");
    }

    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 500;
        src: url(${AirbnbCerealMedium}) format("woff2");
    }

    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 300;
        src: url(${AirbnbCerealBook}) format("woff2");
    }
`;
