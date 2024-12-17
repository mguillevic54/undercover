import CustomBottomNavigation from '@components/common/CustomBottomNavigation/CustomBottomNavigation';
import { Play_400Regular, Play_700Bold, useFonts } from '@expo-google-fonts/play';
import { theme } from '@styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider } from 'react-native-paper';
import './src/translations/i18n';

// Create a client
const queryClient = new QueryClient();

/**
 * Main App screen
 */
export default function App() {
  const [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CustomBottomNavigation />
      </QueryClientProvider>
    </PaperProvider>
  );
}
