// useColors.js
import { useColorScheme } from 'react-native';
import { darkModeColors, lightModeColors } from "./colors";

export const useColors = (isDarkMode) => {
    const colorScheme = useColorScheme();
    const colors = colorScheme === 'dark' ? darkModeColors : lightModeColors;

    const backgroundColor = isDarkMode ? darkModeColors.background : lightModeColors.background;

    const textColor = isDarkMode ? darkModeColors.text : lightModeColors.text;
  
    return { ...colors, background: backgroundColor, text: textColor };
  };