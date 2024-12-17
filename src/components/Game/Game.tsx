import { useNavigation } from '@react-navigation/native';
import { Colors } from '@styles/Colors';
import { Fonts } from '@styles/Fonts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type TGameProps = {
  title: string;
};

export default function Game({ title }: TGameProps) {
  const navigation = useNavigation();
  return (
    <View
      style={
        navigation.canGoBack() ? [styles.headerContainer, styles.headerContainerWithPadding] : styles.headerContainer
      }
    >
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.teaRose
  },
  headerText: {
    fontSize: 20,
    fontFamily: Fonts.bold
  },
  headerContainerWithPadding: {
    paddingRight: 80
  }
});
