import { createGlobalStyle } from 'styled-components';

import AirbnbCerealBlack from '../assets/fonts/AirbnbCerealBlack.woff';
import AirbnbCerealExtraBold from '../assets/fonts/AirbnbCerealExtraBold.woff';
import AirbnbCerealBold from '../assets/fonts/AirbnbCerealBold.woff';
import AirbnbCerealMedium from '../assets/fonts/AirbnbCerealMedium.woff';
import AirbnbCerealBook from '../assets/fonts/AirbnbCerealBook.woff';
import AirbnbCerealLight from '../assets/fonts/AirbnbCerealLight.woff';

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 900;
        src: url(${AirbnbCerealBlack});
    }

    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 800;
        src: url(${AirbnbCerealExtraBold})
    }

    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 700;
        src: url(${AirbnbCerealBold})
    }

    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 500;
        src: url(${AirbnbCerealMedium})
    }

    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 400;
        src: url(${AirbnbCerealBook})
    }

    @font-face {
        font-family: 'Airbnb-Cereal';
        font-weight: 200;
        src: url(${AirbnbCerealLight})
    }
`;
