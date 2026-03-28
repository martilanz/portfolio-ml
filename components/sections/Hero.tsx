"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SiAngular, SiDotnet, SiReact, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BsFiletypeSql } from "react-icons/bs";
import { useTranslations } from "next-intl";
import "./Hero.css";

export default function Hero() {
  const handleGoNext = () => {
    document.querySelector("#whatIDo")?.scrollIntoView({ behavior: "smooth" });
  };

  const t = useTranslations("Hero");

  const techStack = [
    { label: "React", icon: SiReact },
    { label: "TypeScript", icon: SiTypescript },
    { label: "Angular", icon: SiAngular },
    { label: ".NET", icon: SiDotnet },
    { label: "C#", icon: TbBrandCSharp },
    { label: "SQL", icon: BsFiletypeSql },
  ];

  return (
    <Box id="hero" className="heroBox">
      {/* Texture overlay */}
      <Box aria-hidden className="heroTextureOverlay" />

      {/* Blob centrale */}
      <Box aria-hidden className="heroBlob" />

      <Container className="heroContainer">
        <Stack className="heroContent" alignItems="center" textAlign="center">
          {/* Intro */}
          <Typography variant="overline" component="span" className="heroOverline">
            Hello, I&apos;m
          </Typography>

          {/* Nome */}
          <Typography variant="h2" component="h1" className="heroTitle">
            Martina{" "}
            <Box component="span" className="heroTitleGradient">
              Lanzillo
            </Box>
          </Typography>

          {/* Ruolo */}
          <Typography variant="subtitle1" component="h2" className="heroRole">
            Software Developer
          </Typography>

          {/* Descrizione */}
          <Typography variant="body1" component="p" className="heroDescription">
            {t("descr")}
          </Typography>

          {/* CTA */}
          <Stack direction="row" className="heroCtaRow">
            <Button variant="contained" href="/resume" className="heroCtaButton">
              Resume
            </Button>
          </Stack>

          {/* Card tech stack */}
          <Box className="techCard">
            <Typography variant="overline" className="techCardTitle">
              Tech Stack
            </Typography>

            <Stack direction="row" className="techPills" justifyContent="center">
              {techStack.map(({ label, icon: Icon }) => (
                <Box key={label} className="techPill">
                  <Icon size={14} />
                  <Typography variant="body2" className="techPillText">
                    {label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>

        {/* Freccia */}
        <Box className="heroArrowWrap">
          <IconButton
            onClick={handleGoNext}
            aria-label="Go to next section"
            className="heroArrowButton"
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}