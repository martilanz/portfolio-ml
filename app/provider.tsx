"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider, createTheme, GlobalStyles } from "@mui/material";

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });

function bodyBackground(mode: "light" | "dark") {
  return mode === "dark"
    ? {
        backgroundColor: "#0b0f17",
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -20%, hsl(215 60% 22%), transparent 70%),
          linear-gradient(90deg, hsl(260 45% 14%), hsl(330 45% 14%))
        `,
      }
    : {
        backgroundColor: "#ffffff",
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -20%, hsl(215 100% 92%), transparent 70%),
          linear-gradient(90deg, hsl(260 100% 96%), hsl(330 100% 97%))
        `,
      };
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  // init (sempre deps [])
  React.useEffect(() => {
    const saved = localStorage.getItem("theme-mode") as "light" | "dark" | null;
    if (saved === "light" || saved === "dark") {
      setMode(saved);
      document.documentElement.dataset.theme = saved;
      return;
    }
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    const initial = prefersDark ? "dark" : "light";
    setMode(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  // sync html attr (sempre deps [mode])
  React.useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  // expose setter (sempre deps [])
  React.useEffect(() => {
    (window as any).__setThemeMode = (next: "light" | "dark") => {
      setMode(next);
      localStorage.setItem("theme-mode", next);
      document.documentElement.dataset.theme = next;
    };
  }, []);

  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            html: { scrollBehavior: "smooth", overflowX: "hidden" },
            body: { margin: 0, backgroundRepeat: "no-repeat", ...bodyBackground(mode) },
          }}
        />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}