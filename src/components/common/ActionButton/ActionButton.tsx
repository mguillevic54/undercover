import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-paper';

type TActionButtonProp = {
  title: string;
  icon: string;
};

/**
 * Action button like add to list, evaluate...
 */
export default function ActionButton({ title, icon }: TActionButtonProp) {
  return (
    <TouchableOpacity style={styles.actionButton}>
      <Icon source={icon} size={26} />
      <Text style={styles.actionText} variant="bodyLarge">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  actionText: {
    lineHeight: 18
  }
});
