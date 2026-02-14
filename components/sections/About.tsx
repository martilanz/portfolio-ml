"use client";

import {
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import DevicesIcon from "@mui/icons-material/Devices";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiFigma,
  SiDotnet,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BsFiletypeSql } from "react-icons/bs";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  borderRadius: 24,
  height: "100%",
  position: "relative",
  overflow: "hidden",

  // glassy surface coerente con la hero
  background: "rgba(255,255,255,0.65)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(15,23,42,0.08)",

  boxShadow: "0 12px 40px rgba(15,23,42,0.08)",

  transition: theme.transitions.create(
    ["transform", "box-shadow", "border-color"],
    {
      duration: theme.transitions.duration.shortest,
    }
  ),

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 18px 55px rgba(15,23,42,0.12)",
    borderColor: "rgba(109,76,246,0.35)",
  },

  // accent line top (gradient soft)
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background:
      "linear-gradient(90deg, rgba(59,130,246,0.9), rgba(109,76,246,0.9), rgba(236,72,153,0.9))",
    opacity: 0.9,
  },

  // subtle glow in background
  "&::after": {
    content: '""',
    position: "absolute",
    inset: -80,
    background:
      "radial-gradient(circle at 20% 10%, rgba(59,130,246,0.10), transparent 55%)," +
      "radial-gradient(circle at 80% 30%, rgba(236,72,153,0.08), transparent 60%)",
    filter: "blur(20px)",
    pointerEvents: "none",
  },
}));

export default function WhatIDo() {
  const aboutMe = [
    {
      title: "UX/UI",
      icon: <DevicesIcon />,
      descr:
        "I design intuitive and user-centered digital experiences, focusing on structure, usability, and visual consistency.",
      tools: [
        { icon: SiFigma, label: "Figma" },
      ],
    },
    {
      title: "Frontend",
      icon: <CodeIcon />,
      descr:
        "I design and develop modern, responsive, and accessible user interfaces using current frontend technologies.",
      tools: [
        { icon: SiReact, label: "React" },
        { icon: SiTypescript, label: "TypeScript" },
        { icon: SiJavascript, label: "JavaScript" },
        { icon: SiAngular, label: "Angular" },
      ],
    },
    {
      title: "Backend",
      icon: <TerminalIcon />,
      descr:
        "I develop reliable, scalable, and well-structured application logic and APIs.",
      tools: [
        { icon: SiDotnet, label: ".NET" },
        { icon: TbBrandCSharp, label: "C#" },
        {icon: BsFiletypeSql , label: "SQL"}
      ],
    },
  ];


  return (
    <Box
      id="whatIDo"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        // overflow: "hidden",
        // scrollMarginTop: "96px",

        // background coerente con hero (più leggero per sezione)
        backgroundColor: "#fff",
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -10%,
            hsl(215, 100%, 95%),
            hsl(260, 100%, 97%) 45%,
            hsl(330, 100%, 98%) 70%,
            transparent 85%
          )
        `,
      }}
    >
      {/* Texture overlay leggerissima */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.22,
          backgroundImage:
            "radial-gradient(rgba(15,23,42,0.08) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 30%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 30%, black 55%, transparent 100%)",
        }}
      />

      {/* Blob soft (decorativo) */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: { xs: "10%", md: "15%" },
          left: { xs: "-20%", md: "-10%" },
          width: { xs: 320, md: 420 },
          height: { xs: 320, md: 420 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.14), rgba(109,76,246,0.10), transparent 65%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: { xs: "-10%", md: "-18%" },
          right: { xs: "-25%", md: "-10%" },
          width: { xs: 360, md: 520 },
          height: { xs: 360, md: 520 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(236,72,153,0.12), rgba(109,76,246,0.10), transparent 70%)",
          filter: "blur(110px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          // py: { xs: 8, sm: 10 },
        }}
      >
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography
            variant="overline"
            sx={{ letterSpacing: 2, color: "text.secondary" }}
          >
            About me
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: "clamp(2rem, 5vw, 2.6rem)",
              lineHeight: 1.1,
              fontWeight: 800,
            }}
          >
            What I do
          </Typography>

          {/* divider gradient */}
          <Box
            aria-hidden
            sx={{
              width: { xs: 120, sm: 160 },
              height: 4,
              borderRadius: 99,
              mt: 1,
              background:
                "linear-gradient(90deg, rgba(59,130,246,0.75), rgba(109,76,246,0.75), rgba(236,72,153,0.75))",
              boxShadow: "0 10px 25px rgba(109,76,246,0.12)",
            }}
          />

          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "text.secondary",
              maxWidth: 820,
            }}
          >
            I enjoy building clean, fast and user-friendly products — from
            interface design to solid application logic.
          </Typography>

          {/* Cards */}
          <Box
            sx={{
              mt: { xs: 4, sm: 5 },
              width: "100%",
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, minmax(0, 1fr))",
              },
              alignItems: "stretch",
            }}
          >
            {aboutMe.map((i) => (
              <Item key={i.title} elevation={0}>
                {/* content sopra ::after */}
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 18,
                      mx: "auto",
                      mb: 1.5,
                      display: "grid",
                      placeItems: "center",
                      background:
                        "linear-gradient(90deg, rgba(59,130,246,0.12), rgba(109,76,246,0.12), rgba(236,72,153,0.12))",
                      border: "1px solid rgba(109,76,246,0.14)",
                      color: "rgba(15,23,42,0.85)",
                    }}
                  >
                    {/* icon MUI con tinta coerente */}
                    <Box
                      sx={{
                        "& svg": { fontSize: 28, color: "rgba(109,76,246,0.9)" },
                      }}
                    >
                      {i.icon}
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ letterSpacing: 1, fontWeight: 800 }}>
                    {i.title}
                  </Typography>

                  <Divider sx={{ my: 2, opacity: 0.5 }} />

                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {i.descr}
                  </Typography>

               <Box
  sx={{
    mt: 3,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 1,
  }}
>
  {i.tools.map(({ icon: ToolIcon, label }) => (
    <Tooltip
      key={label}
      title={label}
      arrow
      enterDelay={300}
      placement="top"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 32,
          borderRadius: 99,
          border: "1px solid rgba(109,76,246,0.18)",
          background:
            "linear-gradient(90deg, rgba(59,130,246,0.10), rgba(109,76,246,0.10), rgba(236,72,153,0.10))",
          color: "rgba(15,23,42,0.65)",
          transition: "transform 150ms ease, box-shadow 150ms ease",
          cursor: "default",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 6px 18px rgba(109,76,246,0.18)",
          },
        }}
      >
        <ToolIcon size={18} />
      </Box>
    </Tooltip>
  ))}
</Box>

                </Box>
              </Item>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
