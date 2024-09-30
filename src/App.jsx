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

// steps followed to deploy (Note)
// first step is to install npm install gh-pages --save-dev
// 1. in vite.config.js file added "  base: "/portfolio/"
// 2. in package.json added  -> "predeploy": "npm run build", ->"deploy": "gh-pages -d dist"
// 3. npm run deploy
// make sure to add your git remote set-url origin https://github.com/Sujith-Medisetty/portfolio.git beofe the above deploy command...
