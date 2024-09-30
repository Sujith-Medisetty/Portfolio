import { ThemeProvider } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Introduction from "./screens/Introduction";
import About from "./screens/About";
import Profile from "./screens/Profile";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

const App = () => {
  const [colorModeValue, theme] = useMode();

  return (
    <ColorModeContext.Provider value={colorModeValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Introduction />
        <About />
        <Profile />
        <Projects />
        <Contact />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
