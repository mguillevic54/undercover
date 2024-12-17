import { Colors } from '@styles/Colors';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

/**
 * Loader
 */
export default function Loader() {
  const color = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(color, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(color, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(color, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        })
      ])
    ).start();
  }, []);

  const backgroundColor = color.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.mistyRose, Colors.teaRose]
  });

  return (
    <View style={styles.animationContainer}>
      <Animated.View style={[styles.animation, { backgroundColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    width: '100%',
    height: '100%'
  }
});
