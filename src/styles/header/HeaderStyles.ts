import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Colors } from '../Colors';

const HeaderStyles = StyleSheet.create({
  header: {
    backgroundColor: Colors.teaRose
  },
  headerTitle: {
    paddingLeft: 0
  }
});

export const NavigationHeaderStyles: NativeStackNavigationOptions = {
  headerStyle: HeaderStyles.header
};
