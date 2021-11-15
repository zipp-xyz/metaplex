import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import components from './components';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, colors, components });
