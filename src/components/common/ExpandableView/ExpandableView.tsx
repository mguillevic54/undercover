import { Colors } from '@styles/Colors';
import { ReactNode, useEffect, useState } from 'react';
import { Animated, LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

type ExpandableViewProps = {
  minHeight: number;
  children: ReactNode;
};

/**
 * Expandable view if content is too big
 */
export default function ExpandableView({ minHeight, children }: ExpandableViewProps) {
  const [maxHeight, setMaxHeight] = useState(0);
  const [height] = useState(new Animated.Value(minHeight));
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? minHeight : maxHeight,
      duration: 150,
      useNativeDriver: false
    }).start();
  }, [expanded, height]);

  const handleLayout = (event: LayoutChangeEvent) => {
    setMaxHeight(event.nativeEvent.layout.height);
  };

  return (
    <Animated.View style={[{ height }, styles.view]}>
      <View style={styles.children} onLayout={(event) => handleLayout(event)}>
        {children}
      </View>
      <IconButton
        style={styles.expandIcon}
        icon={!expanded ? 'chevron-down' : 'chevron-up'}
        size={20}
        onPress={() => setExpanded(!expanded)}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  view: {
    position: 'relative',
    overflow: 'hidden'
  },
  children: {
    position: 'absolute'
  },
  expandIcon: {
    position: 'absolute',
    backgroundColor: Colors.mistyRose,
    bottom: -7,
    right: 0,
    zIndex: 20,
    margin: 0,
    padding: 0
  }
});
