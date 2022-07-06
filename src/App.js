import Routeing from './routeing';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from '@mui/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

function App() {
  const theme = responsiveFontSizes(createTheme());
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routeing />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
