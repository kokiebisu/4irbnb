import { createGlobalStyle } from 'styled-components';

import AirbnbCerealExtraBold from 'assets/fonts/AirbnbCereal-ExtraBold.woff';
import AirbnbCerealLight from 'assets/fonts/AirbnbCereal-Light.woff';
import AirbnbCerealBold from 'assets/fonts/AirbnbCereal-Bold.woff2';
import AirbnbCerealMedium from 'assets/fonts/AirbnbCereal-Medium.woff2';
import AirbnbCerealBook from 'assets/fonts/AirbnbCereal-Book.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 900;
        src: url(${AirbnbCerealExtraBold}) format("truetype");
        font-style: normal;
    }
    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 700;
        src: url(${AirbnbCerealBold}) format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 500;
        src: url(${AirbnbCerealMedium}) format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 300;
        src: url(${AirbnbCerealBook}) format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: 'Airbnb-Cereal';
        src: url(${AirbnbCerealLight}) format("woff");
        font-style: normal;
        font-weight: 100;
    }

`;
