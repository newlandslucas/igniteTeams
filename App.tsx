import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'expo-status-bar';
import { Groups } from './src/screens/Groups';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import theme from './src/theme';
import { Loading } from './src/components/Loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })


  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups /> : <Loading /> }
      <StatusBar style='light' backgroundColor='transparent' translucent />
    </ThemeProvider>
  );
}

