import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'expo-status-bar';
import { Groups } from './src/screens/Groups';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

