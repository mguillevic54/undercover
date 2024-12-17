import { useFocusEffect } from '@react-navigation/native';
import { Colors } from '@styles/Colors';
import { useRef } from 'react';
import { Animated, SafeAreaView, StyleSheet } from 'react-native';

type TScreenLayoutProps = {
  children: React.ReactNode;
};
export default function ScreenLayout({ children }: TScreenLayoutProps) {
  const fadeInAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(() => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();

    return () => {
      fadeInAnim.setValue(0);
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ opacity: fadeInAnim }}>{children}</Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mistyRose
  }
});
