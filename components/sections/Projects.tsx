"use client";

import {
    Box,
    Container,
    Divider,
    Paper,
    Stack,
    styled,
    Typography,
    Link,
} from "@mui/material";
import { SiReact, } from "react-icons/si"
import { FaNode } from "react-icons/fa";
import "./Projects.css";


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2.5),
    borderRadius: 24,
    height: "100%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",

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

export default function Projects() {
    const projects = [
        {
            name: "Obd Sim",
            descr:
                "OBD Simulator App is a web application that simulates vehicle diagnostic data collected through an OBD-II system. The backend generates realistic live telemetry (RPM, speed, throttle position, fuel level, battery voltage, engine load etc..) and diagnostic trouble codes (DTCs). These values are broadcast in real time through WebSockets and also exposed through REST API endpoints. The frontend displays the simulated vehicle data in a responsive dashboard UI. ",
            url: "https://martilanz.github.io/obd-sim/",
            imgUrl: "/image.png",
            techStack: [
                { label: "React", icon: SiReact },
                { label: "Node", icon: FaNode }
            ]
        },
        {
            name: "AB Immobiliare",
            descr:
                "",
            url: "",
            imgUrl: "/ab-image.png",
        },
    ];

    return (
        <Box
            id="projects"
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                backgroundColor: "#fff",
                backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -10%,
            hsl(215, 100%, 95%),
            hsl(260, 100%, 97%) 45%,
            hsl(330, 100%, 98%) 70%,
            transparent 85%
          )
        `,
                py: { xs: 8, md: 12 },
            }}
        >
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
                }}
            >
                <Stack spacing={2} alignItems="center" textAlign="center">
                    <Typography
                        variant="overline"
                        sx={{ letterSpacing: 2, color: "text.secondary" }}
                    >
                        Projects
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "clamp(2rem, 5vw, 2.6rem)",
                            lineHeight: 1.1,
                            fontWeight: 800,
                        }}
                    >
                        My projects
                    </Typography>

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
                    <Box
                        sx={{
                            mt: { xs: 4, sm: 5 },
                            width: "100%",
                            display: "grid",
                            gap: 3,
                            gridTemplateColumns: {
                                xs: "1fr",
                                md: "repeat(2, minmax(0, 1fr))",
                            },
                            alignItems: "stretch",
                        }}
                    >
                        {projects.map((p) => (
                            <Item key={p.name} elevation={0}>
                                <Box
                                    sx={{
                                        position: "relative",
                                        zIndex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={p.imgUrl}
                                        alt={p.name}
                                        sx={{
                                            width: "100%",
                                            height: 350,
                                            objectFit: "cover",
                                            borderRadius: 3,
                                            border: "1px solid rgba(15,23,42,0.08)",
                                        }}
                                    />

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            mt: 2,
                                            fontWeight: 800,
                                            textAlign: "left",
                                        }}
                                    >
                                        {p.name}
                                    </Typography>

                                    <Divider sx={{ my: 2, opacity: 0.5 }} />

                                    <Typography
                                        color="text.secondary"
                                        sx={{
                                            lineHeight: 1.7,
                                            textAlign: "left",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 6,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            minHeight: "6.5rem",
                                        }}
                                    >
                                        {p.descr || "Project description coming soon."}
                                    </Typography>

                                    <Box sx={{ mt: "auto", pt: 3,pb: 3, textAlign: "left" }}>
                                        <Link
                                            href={p.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            underline="hover"
                                            sx={{ fontWeight: 700 }}
                                        >
                                            View project
                                        </Link>
                                    </Box>
                                    <Stack direction="row" className="techPills" justifyContent="left">
                                        {p.techStack?.map(({ label, icon: Icon }) => (
                                            <Box key={label} className="techPill">
                                                <Icon size={14} />
                                                <Typography variant="body2" className="techPillText">
                                                    {label}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>

                                </Box>
                            </Item>
                        ))}
                    </Box>
                </Stack>
            </Container>
        </Box >
    );
}