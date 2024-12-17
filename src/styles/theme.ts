import { DefaultTheme, configureFonts } from 'react-native-paper';
import { MD3Type } from 'react-native-paper/lib/typescript/types';
import { Colors } from './Colors';
import { Fonts } from './Fonts';

const fontConfig: Record<string, MD3Type> = {
  titleLarge: {
    ...DefaultTheme.fonts.titleLarge,
    fontFamily: Fonts.bold
  },
  titleMedium: {
    ...DefaultTheme.fonts.titleMedium,
    fontFamily: Fonts.regular
  },
  labelLarge: {
    ...DefaultTheme.fonts.labelLarge,
    fontFamily: Fonts.bold
  },
  bodyLarge: {
    ...DefaultTheme.fonts.bodyLarge,
    fontFamily: Fonts.regular
  },
  bodySmall: {
    ...DefaultTheme.fonts.bodySmall,
    fontFamily: Fonts.regular
  }
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.black,
    background: Colors.mistyRose,
    secondaryContainer: 'transparent'
  },
  fonts: configureFonts({ config: fontConfig })
};
