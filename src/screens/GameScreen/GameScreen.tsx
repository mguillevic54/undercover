import Game from '@components/Game/Game';
import Home from '@components/Home/Home';
import ScreenLayout from '@components/common/ScreenLayout/ScreenLayout';
import { StatusBar } from 'expo-status-bar';

/**
 * Game screen so we can play
 */
export default function GameScreen() {
  return (
    <ScreenLayout>
      <StatusBar style="auto" />
      <Game></Game>
    </ScreenLayout>
  );
}
