import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

/**
 * Separator between data
 */
export default function DataSpeparator() {
  return (
    <Text variant="bodySmall" style={styles.headerSeparator}>
      -
    </Text>
  );
}

const styles = StyleSheet.create({
  headerSeparator: {
    marginLeft: 5,
    marginRight: 5
  }
});
