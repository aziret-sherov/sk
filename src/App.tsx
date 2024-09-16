import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Main from "./pages/Main.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ObjectDetails from "./pages/ObjectDetails/ObjectDetails.tsx";
import About from "./pages/About/About.tsx";
import NewsList from "./pages/NewsList/NewsList.tsx";
import NewsDetails from "./pages/NewsDetails/NewsDetails.tsx";
import ConstructionObjectDetails from "./pages/ConstructionObjectDetails/ConstructionObjectDetails.tsx";

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
                  <Route path="/construction_projects" element={<ConstructionObjectDetails />} />
                  <Route path="/construction_projects/:id" element={<ConstructionObjectDetails />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/news" element={<NewsList />} />
                  <Route path="/news/:id" element={<NewsDetails />} />
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
