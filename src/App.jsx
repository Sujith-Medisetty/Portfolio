import { ThemeProvider } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Introduction from "./screens/Introduction";
import About from "./screens/About";
import Profile from "./screens/Profile";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [colorModeValue, theme] = useMode();

  return (
    <ColorModeContext.Provider value={colorModeValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router basename={import.meta.env.BASE_URL}>
          <Header />
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
