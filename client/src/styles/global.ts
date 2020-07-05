import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
    ${normalize}
    
    html {
        box-sizing: border-box;
    }

    body {
        font-family: 'Airbnb-Cereal';
        font-weight: 500;
        font-size: 16px;
    }
`;
