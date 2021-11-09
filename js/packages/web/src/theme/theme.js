import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import components from './components';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, colors, components });
