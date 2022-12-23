import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

export const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      'chakra-body-text': 'blue', // Text color of context menu
    },
  },
  colors: {
    gray: {
      600: 'orange', // Secondary background of context menu
      700: 'green', // Hover color of context menu
      800: 'red', // Main background of context menu
    },
    "chakra-body-text": "blue",
  },
});
