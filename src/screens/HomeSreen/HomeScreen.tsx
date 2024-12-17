import Home from '@components/Home/Home';
import ScreenLayout from '@components/common/ScreenLayout/ScreenLayout';
import { StatusBar } from 'expo-status-bar';

/**
 * Home screen displaying all types of media lists
 */
export default function HomeScreen() {
  return (
    <ScreenLayout>
      <StatusBar style="auto" />
      <Home></Home>
    </ScreenLayout>
  );
}
