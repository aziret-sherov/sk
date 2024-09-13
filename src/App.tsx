import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Main from "./pages/Main.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ObjectDetails from "./components/ObjectDetails/ObjectDetails.tsx";

const theme = createTheme({
  typography: {
    fontFamily: 'Geologica, Arial, sans-serif',
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Router>
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/object" element={<ObjectDetails />} />
                  <Route path="/object/:id" element={<ObjectDetails />} />
                  {/*<Route path="/about" element={<About />} />*/}
                  {/*<Route path="/services" element={<Services />} />*/}
                  {/*<Route path="/contact" element={<Contact />} />*/}
                  {/*<Route path="/profile" element={<Profile />} />*/}
              </Routes>
          </Router>
      </ThemeProvider>
  );
}

export default App;
