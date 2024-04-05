import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Main from "./pages/Main.tsx";

const theme = createTheme({
  typography: {
    fontFamily: 'Geologica, Arial, sans-serif',
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main/>
      </ThemeProvider>
  );
}

export default App;
