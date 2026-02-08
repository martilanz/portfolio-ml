"use client";

import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 14,
        position: "relative",
        overflow: "hidden",

        // background soft coerente con le sezioni precedenti
        backgroundColor: "#fff",
        backgroundImage: `
          radial-gradient(ellipse 70% 40% at 50% 120%,
            hsl(215, 100%, 94%),
            hsl(260, 100%, 96%) 40%,
            hsl(330, 100%, 97%) 65%,
            transparent 80%
          )
        `,
        borderTop: "1px solid rgba(15,23,42,0.08)",
      }}
    >
      {/* Texture overlay */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.25,
          backgroundImage:
            "radial-gradient(rgba(15,23,42,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage:
            "linear-gradient(to top, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 40%, transparent 100%)",
        }}
      />

      {/* Blob decorativo */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: "-40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(109,76,246,0.18), rgba(236,72,153,0.12), transparent 70%)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 6, sm: 8 },
        }}
      >
        <Stack spacing={3} alignItems="center" textAlign="center">
          {/* Brand */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              letterSpacing: 1,
              background:
                "linear-gradient(90deg, #3B82F6, #6D4CF6, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Martina · Software Developer
          </Typography>

          {/* Social icons */}
          <Stack direction="row" spacing={1.5}>
            {[
              {
                label: "GitHub",
                href: "https://github.com/tuo-username",
                icon: <GitHubIcon />,
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/tuo-profilo",
                icon: <LinkedInIcon />,
              },
              {
                label: "Email",
                href: "mailto:tuamail@email.com",
                icon: <EmailIcon />,
              },
            ].map((item) => (
              <IconButton
                key={item.label}
                aria-label={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  border: "1px solid rgba(15,23,42,0.08)",
                  backgroundColor: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(8px)",
                  color: "text.secondary",
                  transition:
                    "transform 150ms ease, color 150ms ease, box-shadow 150ms ease, border-color 150ms ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    color: "primary.main",
                    borderColor: "rgba(109,76,246,0.35)",
                    boxShadow: "0 12px 30px rgba(109,76,246,0.18)",
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>

          {/* Divider gradient */}
          <Box
            aria-hidden
            sx={{
              width: 160,
              height: 3,
              borderRadius: 99,
              background:
                "linear-gradient(90deg, rgba(59,130,246,0.75), rgba(109,76,246,0.75), rgba(236,72,153,0.75))",
              boxShadow: "0 8px 22px rgba(109,76,246,0.12)",
            }}
          />

          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            © {new Date().getFullYear()} Martina. Built with
            <FavoriteIcon
              sx={{
                fontSize: 16,
                color: "error.main",
                mx: 0.5,
              }}
            />
            using Next.js, React, Material UI.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
