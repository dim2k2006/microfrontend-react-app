import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    main: '#333333',
    secondary: '#FFFFFF',
    alabaster: '#F8F8F8',
    iron: '#DEE1E5',
    shuttleGray: '#5C6B7E',
    roseWhite: '#FFFBFB',
    promo: '#6941c6',
    error: '#FF5453',
  },

  transition: '0.3s ease',

  breakpoints: {
    S: 'max-width: 767px',
    L: 'max-width: 1024px',
    XL: 'max-width: 1200px',
  },
};

export default theme;
