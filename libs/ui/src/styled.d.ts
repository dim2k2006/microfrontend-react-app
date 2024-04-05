import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      alabaster: string;
      iron: string;
      shuttleGray: string;
      roseWhite: string;
      promo: string;
      error: string;
    };

    transition: string;

    breakpoints: {
      S: string;
      L: string;
      XL: string;
    };
  }
}
