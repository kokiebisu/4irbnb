import { createGlobalStyle } from 'styled-components';

// import AirbnbCerealBlack from '../../public/assets/fonts/AirbnbCerealBlack.woff';
// import AirbnbCerealExtraBold from '../../public/assets/fonts/AirbnbCerealExtraBold.woff';
// import AirbnbCerealBold from '../../public/assets/fonts/AirbnbCerealBold.woff';
// import AirbnbCerealMedium from '../../public/assets/fonts/AirbnbCerealMedium.woff';
// import AirbnbCerealBook from '../../public/assets/fonts/AirbnbCerealBook.woff';
// import AirbnbCerealLight from '../../public/assets/fonts/AirbnbCerealLight.woff';
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
