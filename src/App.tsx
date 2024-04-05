import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Navigation from "./components/Navigation/Navigation.tsx";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Geologica, Arial, sans-serif',
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* This helps to reset browser default styles */}
        <Navigation /> {/* Your Navigation component */}
        {/* rest of your app */}
      </ThemeProvider>
  );
}

export default App;
