import HomeNavScreen from '@screens/NavScreens/HomeNavScreen';
import { Colors } from '@styles/Colors';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, Icon, Text } from 'react-native-paper';

export default function CustomBottomNavigation() {
  const { t } = useTranslation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: t('home.title'), focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'test', title: 'test', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'test2', title: 'test2', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'test3', title: 'test3', focusedIcon: 'home', unfocusedIcon: 'home-outline' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeNavScreen />,
    test: () => <HomeNavScreen />,
    test2: () => <HomeNavScreen />,
    test3: () => <HomeNavScreen />
  });

  return (
    <BottomNavigation
      barStyle={styles.bar}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderLabel={(props) => (
        <Text variant="bodyLarge" style={styles.label}>
          {props.route.title}
        </Text>
      )}
      renderIcon={({ route, focused }) => (
        <View style={styles.icon}>
          <Icon source={focused ? route.focusedIcon : route.unfocusedIcon} size={30} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: Colors.teaRose,
    height: 70
  },
  label: {
    lineHeight: 16,
    textAlign: 'center',
    marginTop: -6
  },
  icon: {
    padding: 0,
    marginTop: -6
  }
});
