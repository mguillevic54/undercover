import Header from '@components/Header/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from '@screens/GameScreen/GameScreen';
import HomeScreen from '@screens/HomeSreen/HomeScreen';
import { NavigationHeaderStyles } from '@styles/header/HeaderStyles';
import { useTranslation } from 'react-i18next';

export type HomeStackParamList = {
  Home: undefined;
  Game: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

/**
 * Used to navigate betwee, home subsreens
 */
export default function HomeNavScreen() {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={NavigationHeaderStyles}>
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ headerTitle: () => <Header title={t('game.title')} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
