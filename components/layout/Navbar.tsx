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
import { Avatar, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import Link from "next/link";


// NAV helpers
const NAVBAR_HEIGHT = 88;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: 999,
  backdropFilter: "blur(18px)",
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

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  const handleScrollTo = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    setOpen(false);

    const el = document.querySelector(id);
    if (!el) return;

    // offset per navbar
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
                // borderRadius: 3,
                border: "1px solid rgba(15,23,42,0.10)",
                background:
                  "linear-gradient(90deg, rgba(59,130,246,0.10), rgba(109,76,246,0.10), rgba(236,72,153,0.10))",
              }}
            />

          </Box>

          {/* CENTER/RIGHT: links desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <NavLink label="Home" href="#hero" onClick={handleScrollTo("#hero")} />
            <NavLink
              label="About"
              href="#whatIDo"
              onClick={handleScrollTo("#whatIDo")}
            />
            <NavLink
              label="Projects"
              href="#projects"
              onClick={handleScrollTo("#projects")}
            />
            <Button
              href="/resume"
              // component={Link}
              // target="_blank"
              variant="contained"
              size="small"
              sx={{
                ml: 1,
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
                backdropFilter: "blur(10px)",
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
                    onClick={handleScrollTo("#whatIDo")}
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
                    About
                  </Button>

                  <Button
                    onClick={handleScrollTo("#projects")}
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
                    Projects
                  </Button>

                  <Button
                    href="/resume.pdf"
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
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
