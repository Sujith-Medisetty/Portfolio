import { createTheme } from "@mui/material";
import { createContext, useEffect, useMemo, useState } from "react";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        background: "#081b29",
        secondary: "#112e42",
        text: "#ededed",
        main: "#00abf0",
      }
    : {
        background: "#ffffff",
        secondary: "#D0E1EC",
        text: "#1a1a1a",
        main: "#1171ba",
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      primary: {
        main: colors.main,
      },
      secondary: {
        main: colors.secondary,
      },
      background: {
        default: colors.background,
      },
      text: {
        primary: colors.text,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: ["Poppins"].join(","),
      fontSize: 12,
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorModeValue = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [colorModeValue, theme];
};
