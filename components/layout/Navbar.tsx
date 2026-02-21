"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Avatar, Typography, Tooltip } from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

// Se usi MUI CssVarsProvider, abilita questa import:
// import { useColorScheme } from "@mui/material/styles";

// Se usi Next locale routing / next-intl, qui puoi importare router:
// import { usePathname, useRouter } from "next/navigation";

const NAVBAR_HEIGHT = 88;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: 999,
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(15,23,42,0.10)",
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.55)`
    : alpha(theme.palette.background.default, 0.55),
  boxShadow: "0 12px 40px rgba(15,23,42,0.08)",
  padding: "10px 14px",
}));

function NavLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      href={href}
      variant="text"
      size="small"
      sx={{
        textTransform: "none",
        fontWeight: 700,
        letterSpacing: 0.2,
        color: "rgba(15,23,42,0.72)",
        borderRadius: 999,
        px: 1.4,
        py: 0.9,
        transition: "all 150ms ease",
        "&:hover": {
          background:
            "linear-gradient(90deg, rgba(59,130,246,0.10), rgba(109,76,246,0.10), rgba(236,72,153,0.10))",
          color: "rgba(15,23,42,0.92)",
          transform: "translateY(-1px)",
        },
      }}
    >
      {label}
    </Button>
  );
}

function LanguageToggle({
  value,
  onChange,
  dense,
}: {
  value: "it" | "en";
  onChange: (next: "it" | "en") => void;
  dense?: boolean;
}) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={(_, next) => {
        if (!next) return;
        onChange(next);
      }}
      size={dense ? "small" : "medium"}
      sx={{
        borderRadius: 999,
        overflow: "hidden",
        border: "1px solid rgba(15,23,42,0.12)",
        backgroundColor: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(8px)",
        "& .MuiToggleButton-root": {
          textTransform: "uppercase",
          fontWeight: 900,
          letterSpacing: 0.6,
          px: dense ? 1.0 : 1.2,
          py: dense ? 0.6 : 0.8,
          border: 0,
          color: "rgba(15,23,42,0.70)",
        },
        "& .MuiToggleButton-root.Mui-selected": {
          color: "rgba(15,23,42,0.92)",
          background:
            "linear-gradient(90deg, rgba(59,130,246,0.14), rgba(109,76,246,0.14), rgba(236,72,153,0.14))",
        },
      }}
    >
      <ToggleButton value="it">IT</ToggleButton>
      <ToggleButton value="en">EN</ToggleButton>
    </ToggleButtonGroup>
  );
}

function ThemeModeButton({
  mode,
  onToggle,
}: {
  mode: "light" | "dark";
  onToggle: () => void;
}) {
  return (
    <Tooltip title={mode === "dark" ? "Passa a Light" : "Passa a Dark"}>
      <IconButton
        aria-label="Toggle theme mode"
        onClick={onToggle}
        sx={{
          width: 44,
          height: 44,
          borderRadius: 14,
          border: "1px solid rgba(15,23,42,0.10)",
          backgroundColor: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(8px)",
          transition: "all 150ms ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 12px 30px rgba(109,76,246,0.16)",
          },
        }}
      >
        {mode === "dark" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  // ====== LANGUAGE STATE (predisposizione) ======
  const [lang, setLang] = React.useState<"it" | "en">("it");

  const handleLanguageChange = (next: "it" | "en") => {
    setLang(next);

    // TODO (Next i18n routing): se usi /it e /en o next-intl,
    // qui fai router.push(...) mantenendo path/query.
    //
    // Esempio (pseudo):
    // const router = useRouter();
    // const pathname = usePathname();
    // router.push(`/${next}${pathname.replace(/^\/(it|en)/, "")}`);
  };

  // ====== THEME MODE (predisposizione) ======
  // Se usi CssVarsProvider + useColorScheme, decommenta questo e rimuovi lo state locale:
  // const { mode = "light", setMode } = useColorScheme();
  // const handleToggleMode = () => setMode(mode === "dark" ? "light" : "dark");

  // Fallback “locale” (UI pronta: poi la colleghi al tuo ThemeProvider):
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const handleToggleMode = () => {
    setMode((m) => (m === "dark" ? "light" : "dark"));
    // TODO: collega al tuo theme provider / store (context, redux, zustand, etc.)
  };

  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  const handleScrollTo = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    setOpen(false);

    const el = document.querySelector(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - (NAVBAR_HEIGHT + 12);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "calc(var(--template-frame-height, 0px) + 18px)",
        height: NAVBAR_HEIGHT,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <Avatar
              src="/logo-2.png"
              alt="ML logo"
              sx={{
                width: 44,
                height: 44,
                border: "1px solid rgba(15,23,42,0.10)",
                background:
                  "linear-gradient(90deg, rgba(59,130,246,0.10), rgba(109,76,246,0.10), rgba(236,72,153,0.10))",
              }}
            />
          </Box>

          {/* DESKTOP: links + switch */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <NavLink label="Home" href="/home" />

            {/* Language switch */}
            <LanguageToggle value={lang} onChange={handleLanguageChange} />

            {/* Theme mode button */}
            <ThemeModeButton mode={mode} onToggle={handleToggleMode} />

            <Button
              href="/resume"
              variant="contained"
              size="small"
              sx={{
                ml: 0.5,
                textTransform: "none",
                fontWeight: 800,
                borderRadius: 999,
                px: 1.6,
                py: 0.9,
                background:
                  "linear-gradient(90deg, rgba(59,130,246,0.95), rgba(109,76,246,0.95), rgba(236,72,153,0.95))",
                boxShadow: "0 12px 30px rgba(109,76,246,0.18)",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, rgba(59,130,246,1), rgba(109,76,246,1), rgba(236,72,153,1))",
                },
              }}
            >
              Resume
            </Button>
          </Box>

          {/* MOBILE: menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-label="Open menu"
              onClick={toggleDrawer(true)}
              sx={{
                width: 44,
                height: 44,
                borderRadius: 14,
                border: "1px solid rgba(15,23,42,0.10)",
                backgroundColor: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(8px)",
                transition: "all 150ms ease",
                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: "0 12px 30px rgba(109,76,246,0.16)",
                },
              }}
            >
              <MenuRoundedIcon />
            </IconButton>

            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: "var(--template-frame-height, 0px)",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                },
              }}
            >
              <Box
                sx={{
                  px: 2,
                  pt: 2,
                  pb: 3,
                  backgroundColor: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(18px)",
                  borderBottom: "1px solid rgba(15,23,42,0.10)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                    <Avatar
                      src="/logo-2.png"
                      alt="ML logo"
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 3,
                        border: "1px solid rgba(15,23,42,0.10)",
                      }}
                    />
                    <Typography sx={{ fontWeight: 900 }}>Menu</Typography>
                  </Box>

                  <IconButton
                    aria-label="Close menu"
                    onClick={toggleDrawer(false)}
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      border: "1px solid rgba(15,23,42,0.10)",
                      backgroundColor: "rgba(255,255,255,0.6)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <Divider sx={{ my: 2, opacity: 0.6 }} />

                {/* Switches row */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <LanguageToggle
                    value={lang}
                    onChange={handleLanguageChange}
                    dense
                  />

                  <ThemeModeButton mode={mode} onToggle={handleToggleMode} />
                </Box>

                <Stack spacing={1}>
                  <Button
                    onClick={handleScrollTo("#hero")}
                    sx={{
                      justifyContent: "flex-start",
                      textTransform: "none",
                      fontWeight: 800,
                      borderRadius: 3,
                      py: 1.2,
                      px: 1.4,
                      color: "rgba(15,23,42,0.85)",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, rgba(59,130,246,0.10), rgba(109,76,246,0.10), rgba(236,72,153,0.10))",
                      },
                    }}
                  >
                    Home
                  </Button>

                  <Button
                    href="/resume"
                    target="_blank"
                    variant="contained"
                    sx={{
                      mt: 1,
                      textTransform: "none",
                      fontWeight: 900,
                      borderRadius: 3,
                      py: 1.2,
                      background:
                        "linear-gradient(90deg, rgba(59,130,246,0.95), rgba(109,76,246,0.95), rgba(236,72,153,0.95))",
                      boxShadow: "0 12px 30px rgba(109,76,246,0.18)",
                    }}
                  >
                    Resume
                  </Button>
                </Stack>

                {/* opzionale: switch “testuale” per tema invece del bottone */}
                {/* 
                <Divider sx={{ my: 2, opacity: 0.6 }} />
                <FormControlLabel
                  control={
                    <Switch
                      checked={mode === "dark"}
                      onChange={handleToggleMode}
                    />
                  }
                  label={mode === "dark" ? "Dark mode" : "Light mode"}
                />
                */}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}  