import 'styled-components';
import { DefaultTheme as Theme } from '@microfrontend-react-app/ui/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
