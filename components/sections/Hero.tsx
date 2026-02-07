"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Hero() {
  const handleGoNext = () => {
    document.querySelector("#whatIDo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        scrollMarginTop: "96px",

        backgroundColor: "#fff",
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -20%,
            hsl(215, 100%, 92%),
            hsl(260, 100%, 94%) 40%,
            hsl(330, 100%, 96%) 65%,
            transparent 80%
          ),
          radial-gradient(circle at 10% 20%,
            rgba(59,130,246,0.12),
            transparent 55%
          ),
          radial-gradient(circle at 90% 30%,
            rgba(236,72,153,0.10),
            transparent 55%
          )
        `,
      }}
    >
      {/* Texture overlay */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.35,
          backgroundImage:
            "radial-gradient(rgba(15,23,42,0.08) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 20%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 20%, black 60%, transparent 100%)",
        }}
      />

      {/* Blob centrale */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: 280, sm: 360 },
          height: { xs: 280, sm: 360 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.18), rgba(109,76,246,0.14), rgba(236,72,153,0.10))",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "blobMove 12s ease-in-out infinite",
          "@keyframes blobMove": {
            "0%": { transform: "translate(-50%, 0) scale(1)" },
            "50%": { transform: "translate(-50%, -18px) scale(1.08)" },
            "100%": { transform: "translate(-50%, 0) scale(1)" },
          },
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing={4}
          alignItems="center"
          textAlign="center"
          sx={{ maxWidth: 820 }}
        >
          {/* Intro */}
          <Typography
            variant="overline"
            component="span"
            sx={{ letterSpacing: 2, color: "text.secondary" }}
          >
            Hello, I&apos;m
          </Typography>

          {/* Nome */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: "clamp(3rem, 10vw, 3.6rem)",
              lineHeight: 1.1,
            }}
          >
            Martina{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #3B82F6, #6D4CF6, #EC4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Lanzillo
            </Box>
          </Typography>

          {/* Ruolo */}
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{
              textTransform: "uppercase",
              letterSpacing: 2,
              fontWeight: 600,
            }}
          >
            Software Developer
          </Typography>

          {/* Descrizione */}
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: "text.secondary",
              maxWidth: 700,
            }}
          >
            Full Stack Developer specialized in frontend development, focused on building modern, scalable, and user-friendly interfaces. I’m driven by continuous learning and enjoy transforming ideas into reliable, well-crafted digital products.
          </Typography>

          {/* CTA */}
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{
                px: 3,
                borderRadius: 999,
                background:
                  "linear-gradient(90deg, rgba(59,130,246,0.95), rgba(109,76,246,0.95), rgba(236,72,153,0.95))",
                boxShadow: "0 12px 30px rgba(109,76,246,0.18)",
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Resume
            </Button>

            <Button
              variant="outlined"
              sx={{
                px: 3,
                borderRadius: 999,
                textTransform: "none",
                fontWeight: 600,
                borderColor: "rgba(109,76,246,0.35)",
                backgroundColor: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(8px)",
              }}
            >
              Contact
            </Button>
          </Stack>

          {/* Card tech stack */}
          <Box
            sx={{
              mt: 2,
              width: "100%",
              maxWidth: 520,
              p: 3,
              borderRadius: 4,
              border: "1px solid rgba(15,23,42,0.08)",
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 12px 40px rgba(15,23,42,0.08)",
            }}
          >
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2, color: "text.secondary" }}
            >
              Tech Stack
            </Typography>

            <Stack
              direction="row"
              flexWrap="wrap"
              gap={1}
              justifyContent="center"
              sx={{ mt: 1 }}
            >
              {["React", "Next.js", "TypeScript", "Node", "MUI"].map((t) => (
                <Box
                  key={t}
                  sx={{
                    px: 1.2,
                    py: 0.6,
                    borderRadius: 99,
                    fontSize: 13,
                    border: "1px solid rgba(109,76,246,0.18)",
                    background:
                      "linear-gradient(90deg, rgba(59,130,246,0.10), rgba(109,76,246,0.10), rgba(236,72,153,0.10))",
                  }}
                >
                  {t}
                </Box>
              ))}
            </Stack>

            <Box
              sx={{
                mt: 2.5,
                p: 2,
                borderRadius: 3,
                background: "rgba(15,23,42,0.04)",
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 13,
                lineHeight: 1.6,
                textAlign: "left",
              }}
            >
              <Box component="span" sx={{ color: "#6D4CF6" }}>
                $
              </Box>{" "}
              Currently building UI that feels fast, clean and human.
            </Box>
          </Box>
        </Stack>

        {/* Freccia */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 16, sm: 24 },
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={handleGoNext}
            aria-label="Go to next section"
            sx={{
              animation: "bounceSoft 2.2s ease-in-out infinite",
              "@keyframes bounceSoft": {
                "0%, 100%": { transform: "translateY(0)", opacity: 0.6 },
                "50%": { transform: "translateY(10px)", opacity: 1 },
              },
            }}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
