import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

type GridProps = {
  nbCol: number;
};

type RowProps = {
  children: ReactNode;
};

export default function Grid({ nbCol }: GridProps) {
  return <View style={{ flex: nbCol }}>...</View>;
}

const Row = ({ children }: RowProps) => <View style={styles.row}>{children}</View>;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  }
});
