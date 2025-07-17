import { StyleSheet } from 'react-native';
import { Theme } from './types';

export const globalStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.Colors.background,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.Colors.primary,
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      color: theme.Colors.text,
      marginBottom: 20,
    },
  });
