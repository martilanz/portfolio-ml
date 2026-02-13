// "use client";

// import * as React from "react";
// import {
//     Box,
//     Button,
//     Container,
//     Divider,
//     Paper,
//     Stack,
//     Typography,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
// import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
// import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
// import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
// import StarRoundedIcon from "@mui/icons-material/StarRounded";

// const RESUME_PDF_URL = "/resume.pdf"; // metti il tuo pdf in /public
// const EMAIL = "tuamail@email.com";
// const LOCATION = "Italy"; // opzionale

// const GlassCard = styled(Paper)(({ theme }) => ({
//     position: "relative",
//     overflow: "hidden",
//     borderRadius: 24,
//     border: "1px solid rgba(15,23,42,0.08)",
//     background: "rgba(255,255,255,0.65)",
//     backdropFilter: "blur(4px)",
//     boxShadow: "0 12px 40px rgba(15,23,42,0.08)",
//     padding: theme.spacing(3),

//     "&::before": {
//         content: '""',
//         position: "absolute",
//         top: 0,
//         left: 0,
//         right: 0,
//         height: 4,
//         background:
//             "linear-gradient(90deg, rgba(59,130,246,0.85), rgba(109,76,246,0.85), rgba(236,72,153,0.85))",
//         opacity: 0.9,
//     },

//     "&::after": {
//         content: '""',
//         position: "absolute",
//         inset: -120,
//         background:
//             "radial-gradient(circle at 15% 15%, rgba(59,130,246,0.12), transparent 55%)," +
//             "radial-gradient(circle at 85% 25%, rgba(236,72,153,0.10), transparent 60%)",
//         filter: "blur(24px)",
//         pointerEvents: "none",
//     },
// }));

// function Chip({
//     label,
//     tone = "default",
// }: {
//     label: string;
//     tone?: "default" | "accent";
// }) {
//     return (
//         <Box
//             sx={{
//                 px: 1.2,
//                 py: 0.65,
//                 borderRadius: 999,
//                 fontSize: 13,
//                 fontWeight: 700,
//                 letterSpacing: 0.2,
//                 border: "1px solid rgba(15,23,42,0.08)",
//                 color: "rgba(15,23,42,0.72)",
//                 background:
//                     tone === "accent"
//                         ? "linear-gradient(90deg, rgba(59,130,246,0.10), rgba(109,76,246,0.10), rgba(236,72,153,0.10))"
//                         : "rgba(255,255,255,0.6)",
//                 backdropFilter: "blur(8px)",
//             }}
//         >
//             {label}
//         </Box>
//     );
// }

// function SectionTitle({
//     icon,
//     title,
//     subtitle,
// }: {
//     icon: React.ReactNode;
//     title: string;
//     subtitle?: string;
// }) {
//     return (
//         <Stack spacing={0.5}>
//             <Stack direction="row" spacing={1.2} alignItems="center">
//                 <Box
//                     sx={{
//                         width: 40,
//                         height: 40,
//                         borderRadius: 14,
//                         display: "grid",
//                         placeItems: "center",
//                         border: "1px solid rgba(109,76,246,0.14)",
//                         background:
//                             "linear-gradient(90deg, rgba(59,130,246,0.10), rgba(109,76,246,0.10), rgba(236,72,153,0.10))",
//                     }}
//                 >
//                     <Box sx={{ color: "rgba(109,76,246,0.9)" }}>{icon}</Box>
//                 </Box>

//                 <Box>
//                     <Typography sx={{ fontWeight: 900, letterSpacing: 0.2 }}>
//                         {title}
//                     </Typography>
//                     {subtitle ? (
//                         <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                             {subtitle}
//                         </Typography>
//                     ) : null}
//                 </Box>
//             </Stack>

//             <Box
//                 aria-hidden
//                 sx={{
//                     mt: 1,
//                     width: 120,
//                     height: 3,
//                     borderRadius: 999,
//                     background:
//                         "linear-gradient(90deg, rgba(59,130,246,0.75), rgba(109,76,246,0.75), rgba(236,72,153,0.75))",
//                     boxShadow: "0 8px 22px rgba(109,76,246,0.12)",
//                 }}
//             />
//         </Stack>
//     );
// }

// function Entry({
//     title,
//     org,
//     meta,
//     bullets,
// }: {
//     title: string;
//     org: string;
//     meta: string;
//     bullets: string[];
// }) {
//     return (
//         <Box
//             sx={{
//                 p: 2.25,
//                 borderRadius: 18,
//                 border: "1px solid rgba(15,23,42,0.08)",
//                 background: "rgba(255,255,255,0.55)",
//                 backdropFilter: "blur(8px)",
//             }}
//         >
//             <Stack
//                 direction={{ xs: "column", sm: "row" }}
//                 spacing={1.5}
//                 justifyContent="space-between"
//                 alignItems={{ xs: "flex-start", sm: "center" }}
//             >
//                 <Box>
//                     <Typography sx={{ fontWeight: 900 }}>{title}</Typography>
//                     <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                         {org}
//                     </Typography>
//                 </Box>
//                 <Chip label={meta} />
//             </Stack>

//             <Box component="ul" sx={{ mt: 1.5, mb: 0, pl: 2.4, color: "text.secondary" }}>
//                 {bullets.map((b) => (
//                     <Box component="li" key={b} sx={{ lineHeight: 1.7 }}>
//                         {b}
//                     </Box>
//                 ))}
//             </Box>
//         </Box>
//     );
// }

// export default function ResumeSection() {
//     // ✅ Personalizza qui i contenuti
//     const highlights = ["Frontend-focused", "React • TypeScript", "Design-minded"];

//     const skills = [
//         "React",
//         "Next.js",
//         "TypeScript",
//         "Material UI",
//         "HTML/CSS",
//         "Node.js",
//         ".NET",
//         "Git",
//         "Figma",
//     ];

//     const experience = [
//         {
//             title: "Core Tech Frontend Developer",
//             org: "Irion",
//             meta: "SETT 2025 — NOW",
//             bullets: [
//                 "Built modern UI components with React and Material UI.",
//                 "Collaborated with product/design to deliver user-centered features.",
//                 "Developed APIs and business logic with clean, maintainable code.",
//             ],
//         },
//         {
//             title: "Full Stack Developer",
//             org: "Betacom",
//             meta: "FEBB 2023 — SETT 2025",
//             bullets: [
//                 "Development and maintenance of the company’s internal employee portal, including the implementation of new features.",
//                 "Evolutionary and corrective maintenance of a multi-tenant SaaS platform for appraisal firms, with development of new frontend features (Angular 14+) and backend services (.NET Core 7+). Additional activities included bug fixing, testing, and product optimization.",
//                 "Bug fixing team lead, responsible for ticket lifecycle management and monitoring, task assignment, and operational coordination and support of the team.",
//             ],
//         },
//     ];

//     const education = [
//         {
//             title: "ITS ICT Piemonte – Backend System Integrator",
//             org: "ITS ICT Piemonte",
//             image: "https://www.its-ictpiemonte.it/wp-content/uploads/2020/03/logo-its-ict-piemonte.svg",
//             meta: "2021 — 2023",
//             bullets: [
//                 "Specialized in backend development, system integration, and software architecture.",
//                 "Worked with databases, APIs, and server-side technologies to design scalable applications.",
//                 "Developed real-world projects involving RESTful services and system interoperability.",
//             ],
//         },
//         {
//             title: "Master’s Degree in ICT, Communication and Media",
//             org: "University of Turin",
//             image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Universit%C3%A0_degli_Studi_di_Torino_logo.svg",
//             meta: "2020 — 2021",
//             bullets: [
//                 "Focused on digital technologies, media systems, and communication strategies.",
//                 "Explored human-computer interaction, digital platforms, and emerging media.",
//                 "Completed academic projects combining technology, UX, and communication design.",
//             ],
//         },
//         {
//             title: "Bachelor’s Degree in Communication Science",
//             org: "University of Turin",
//             image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Universit%C3%A0_degli_Studi_di_Torino_logo.svg",
//             meta: "2017 — 2020",
//             bullets: [
//                 "Studied communication theory, media studies, and digital culture.",
//                 "Developed analytical and research skills applied to digital and technological contexts.",
//                 "Completed interdisciplinary projects focused on media analysis and communication strategy.",
//             ],
//         },
//     ];


//     return (
//         <Box
//             id="resume"
//             sx={{
//                 width: "100%",
//                 py: { xs: 10, sm: 12 },
//                 position: "relative",
//                 overflow: "hidden",
//                 scrollMarginTop: "96px",
//                 backgroundColor: "#fff",
//                 backgroundImage: `
//           radial-gradient(ellipse 80% 50% at 50% -10%,
//             hsl(215, 100%, 95%),
//             hsl(260, 100%, 97%) 45%,
//             hsl(330, 100%, 98%) 70%,
//             transparent 85%
//           )
//         `,
//             }}
//         >
//             {/* texture */}
//             <Box
//                 aria-hidden
//                 sx={{
//                     position: "absolute",
//                     inset: 0,
//                     pointerEvents: "none",
//                     zIndex: 0,
//                     opacity: 0.22,
//                     backgroundImage:
//                         "radial-gradient(rgba(15,23,42,0.08) 1px, transparent 1px)",
//                     backgroundSize: "20px 20px",
//                     maskImage:
//                         "radial-gradient(ellipse 70% 70% at 50% 30%, black 55%, transparent 100%)",
//                     WebkitMaskImage:
//                         "radial-gradient(ellipse 70% 70% at 50% 30%, black 55%, transparent 100%)",
//                 }}
//             />

//             {/* blob */}
//             <Box
//                 aria-hidden
//                 sx={{
//                     position: "absolute",
//                     top: { xs: "10%", md: "14%" },
//                     left: { xs: "-20%", md: "-10%" },
//                     width: { xs: 320, md: 420 },
//                     height: { xs: 320, md: 420 },
//                     borderRadius: "50%",
//                     background:
//                         "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.14), rgba(109,76,246,0.10), transparent 65%)",
//                     filter: "blur(90px)",
//                     zIndex: 0,
//                     pointerEvents: "none",
//                 }}
//             />
//             <Box
//                 aria-hidden
//                 sx={{
//                     position: "absolute",
//                     bottom: { xs: "-10%", md: "-18%" },
//                     right: { xs: "-25%", md: "-10%" },
//                     width: { xs: 360, md: 520 },
//                     height: { xs: 360, md: 520 },
//                     borderRadius: "50%",
//                     background:
//                         "radial-gradient(circle at 30% 30%, rgba(236,72,153,0.12), rgba(109,76,246,0.10), transparent 70%)",
//                     filter: "blur(110px)",
//                     zIndex: 0,
//                     pointerEvents: "none",
//                 }}
//             />

//             <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
//                 <Stack spacing={4} alignItems="center" textAlign="center">
//                     <Typography
//                         variant="overline"
//                         sx={{ letterSpacing: 2, color: "text.secondary" }}
//                     >
//                         Resume
//                     </Typography>

//                     <Typography
//                         variant="h3"
//                         sx={{
//                             fontSize: "clamp(2rem, 5vw, 2.6rem)",
//                             lineHeight: 1.1,
//                             fontWeight: 900,
//                         }}
//                     >
//                         Martina{" "}
//                         <Box
//                             component="span"
//                             sx={{
//                                 background: "linear-gradient(90deg, #3B82F6, #6D4CF6, #EC4899)",
//                                 WebkitBackgroundClip: "text",
//                                 WebkitTextFillColor: "transparent",
//                             }}
//                         >
//                             Lanzillo
//                         </Box>
//                     </Typography>
//                     {/* 
//                     <Stack
//                         direction="row"
//                         spacing={1}
//                         useFlexGap
//                         flexWrap="wrap"
//                         justifyContent="center"
//                     >
//                         <Chip label={LOCATION} />
//                         <Chip label={EMAIL} />
//                         {highlights.map((h) => (
//                             <Chip key={h} label={h} tone="accent" />
//                         ))}
//                     </Stack> */}
//                     {/* 
//                     <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                         <Button
//                             href={RESUME_PDF_URL}
//                             target="_blank"
//                             variant="contained"
//                             startIcon={<OpenInNewRoundedIcon />}
//                             sx={{
//                                 px: 3,
//                                 borderRadius: 999,
//                                 textTransform: "none",
//                                 fontWeight: 900,
//                                 background:
//                                     "linear-gradient(90deg, rgba(59,130,246,0.95), rgba(109,76,246,0.95), rgba(236,72,153,0.95))",
//                                 boxShadow: "0 12px 30px rgba(109,76,246,0.18)",
//                                 "&:hover": {
//                                     background:
//                                         "linear-gradient(90deg, rgba(59,130,246,1), rgba(109,76,246,1), rgba(236,72,153,1))",
//                                 },
//                             }}
//                         >
//                             View PDF
//                         </Button>

//                         <Button
//                             href={RESUME_PDF_URL}
//                             download
//                             variant="outlined"
//                             startIcon={<DownloadRoundedIcon />}
//                             sx={{
//                                 px: 3,
//                                 borderRadius: 999,
//                                 textTransform: "none",
//                                 fontWeight: 800,
//                                 borderColor: "rgba(109,76,246,0.35)",
//                                 backgroundColor: "rgba(255,255,255,0.6)",
//                                 backdropFilter: "blur(8px)",
//                                 "&:hover": {
//                                     borderColor: "rgba(236,72,153,0.5)",
//                                     backgroundColor: "rgba(255,255,255,0.75)",
//                                 },
//                             }}
//                         >
//                             Download
//                         </Button>
//                     </Stack> */}

//                     {/* Main card */}
//                     <GlassCard elevation={0} sx={{ width: "100%", maxWidth: 980, textAlign: "left" }}>
//                         <Stack spacing={4} sx={{ position: "relative", zIndex: 1 }}>
//                             {/* Summary */}
//                             <Box>
//                                 <SectionTitle
//                                     icon={<StarRoundedIcon />}
//                                     title="Summary"
//                                     subtitle="A quick overview"
//                                 />
//                                 <Typography sx={{ mt: 2, color: "text.secondary", lineHeight: 1.8 }}>
//                                     Full Stack Developer with a strong focus on frontend development and the
//                                     creation of modern, intuitive, and user-centered interfaces. I enjoy building
//                                     high-quality products, continuously learning, and turning ideas into concrete,
//                                     functional solutions.
//                                 </Typography>
//                             </Box>

//                             <Divider sx={{ opacity: 0.6 }} />

//                             {/* Skills */}
//                             <Box>
//                                 <SectionTitle
//                                     icon={<StarRoundedIcon />}
//                                     title="Skills"
//                                     subtitle="Technologies I use"
//                                 />
//                                 <Stack
//                                     direction="row"
//                                     useFlexGap
//                                     flexWrap="wrap"
//                                     gap={1}
//                                     sx={{ mt: 2 }}
//                                 >
//                                     {skills.map((s) => (
//                                         <Chip key={s} label={s} tone="accent" />
//                                     ))}
//                                 </Stack>
//                             </Box>

//                             <Divider sx={{ opacity: 0.6 }} />

//                             {/* Experience */}
//                             <Box>
//                                 <SectionTitle
//                                     icon={<WorkRoundedIcon />}
//                                     title="Experience"
//                                     subtitle="Recent roles and responsibilities"
//                                 />

//                                 <Stack spacing={2} sx={{ mt: 2 }}>
//                                     {experience.map((e, idx) => (
//                                         <Box
//                                             key={e.title + e.org}
//                                             sx={{
//                                                 position: "relative",
//                                                 pl: 3,
//                                                 py: 2.25,

//                                                 // timeline line (continua)
//                                                 borderLeft: "2px solid rgba(109,76,246,0.28)",

//                                                 // shape più "pro": meno rotondo, più editoriale
//                                                 borderRadius: 2, // ~16px -> puoi scendere a 1.5 se la vuoi ancora più squadrata

//                                                 // superficie più solida e coerente (meno glass)
//                                                 backgroundColor: "rgba(255,255,255,0.45)",
//                                                 border: "1px solid rgba(15,23,42,0.08)",

//                                                 // micro-shadow molto soft
//                                                 boxShadow: "0 10px 30px rgba(15,23,42,0.06)",

//                                                 // hover super discreto
//                                                 transition: "transform 150ms ease, border-color 150ms ease, box-shadow 150ms ease",
//                                                 "&:hover": {
//                                                     borderColor: "rgba(109,76,246,0.26)",
//                                                     boxShadow: "0 16px 45px rgba(15,23,42,0.08)",
//                                                     transform: "translateY(-2px)",
//                                                 },
//                                             }}
//                                         >
//                                             {/* Dot timeline */}
//                                             <Box
//                                                 aria-hidden
//                                                 sx={{
//                                                     position: "absolute",
//                                                     left: -7,
//                                                     top: 22,
//                                                     width: 12,
//                                                     height: 12,
//                                                     borderRadius: "50%",
//                                                     background: "linear-gradient(90deg, #3B82F6, #6D4CF6, #EC4899)",
//                                                     boxShadow: "0 0 0 5px rgba(109,76,246,0.14)",
//                                                 }}
//                                             />

//                                             {/* Header */}
//                                             <Stack
//                                                 direction={{ xs: "column", sm: "row" }}
//                                                 justifyContent="space-between"
//                                                 alignItems={{ xs: "flex-start", sm: "center" }}
//                                                 spacing={0.75}
//                                             >
//                                                 <Box>
//                                                     <Typography
//                                                         sx={{
//                                                             fontWeight: 900,
//                                                             letterSpacing: 0.2,
//                                                             lineHeight: 1.2,
//                                                             color: "rgba(15,23,42,0.92)",
//                                                         }}
//                                                     >
//                                                         {e.title}
//                                                     </Typography>

//                                                     <Typography
//                                                         variant="body2"
//                                                         sx={{
//                                                             color: "text.secondary",
//                                                             mt: 0.25,
//                                                         }}
//                                                     >
//                                                         {e.org}
//                                                     </Typography>
//                                                 </Box>

//                                                 <Typography
//                                                     variant="caption"
//                                                     sx={{
//                                                         fontWeight: 700,
//                                                         letterSpacing: 0.4,
//                                                         color: "rgba(15,23,42,0.55)",
//                                                         textTransform: "uppercase",
//                                                         mt: { xs: 1, sm: 1 },
//                                                         mr: { sm: 2 },

//                                                     }}
//                                                 >
//                                                     {e.meta}
//                                                 </Typography>
//                                             </Stack>

//                                             {/* Divider sottile */}
//                                             <Divider sx={{ my: 1.75, opacity: 0.55 }} />

//                                             <Stack spacing={0.75} sx={{ mt: 1.5 }}>
//                                                 {e.bullets.map((b: string) => (
//                                                     <Typography
//                                                         key={b}
//                                                         variant="body2"
//                                                         sx={{
//                                                             color: "text.secondary",
//                                                             lineHeight: 1.7,
//                                                             position: "relative",
//                                                             pl: 2,
//                                                             "&::before": {
//                                                                 content: '"–"',
//                                                                 position: "absolute",
//                                                                 left: 0,
//                                                                 color: "rgba(109,76,246,0.7)",
//                                                             },
//                                                         }}
//                                                     >
//                                                         {b}
//                                                     </Typography>
//                                                 ))}
//                                             </Stack>
//                                         </Box>
//                                     ))}
//                                 </Stack>
//                             </Box>


//                             <Divider sx={{ opacity: 0.6 }} />

//                             {/* Education */}
//                             <Box>
//                                 <SectionTitle
//                                     icon={<SchoolRoundedIcon />}
//                                     title="Education"
//                                     subtitle="Academic background"
//                                 />
//                                 {/* <Stack spacing={2} sx={{ mt: 2 }}>
//                                     {education.map((e) => (
//                                         <Entry
//                                             key={e.title + e.org}
//                                             title={e.title}
//                                             org={e.org}
//                                             meta={e.meta}
//                                             bullets={e.bullets}
//                                         />
//                                     ))}

                                    
//                                 </Stack> */}



//                                 <Stack spacing={2} sx={{ mt: 2 }}>
//                                     {education.map((e, idx) => (
//                                         <Box
//                                             key={e.title + e.org}
//                                             sx={{
//                                                 position: "relative",
//                                                 pl: 3,
//                                                 py: 2.25,

//                                                 // timeline line (continua)
//                                                 borderLeft: "2px solid rgba(109,76,246,0.28)",

//                                                 // shape più "pro": meno rotondo, più editoriale
//                                                 borderRadius: 2, // ~16px -> puoi scendere a 1.5 se la vuoi ancora più squadrata

//                                                 // superficie più solida e coerente (meno glass)
//                                                 backgroundColor: "rgba(255,255,255,0.45)",
//                                                 border: "1px solid rgba(15,23,42,0.08)",

//                                                 // micro-shadow molto soft
//                                                 boxShadow: "0 10px 30px rgba(15,23,42,0.06)",

//                                                 // hover super discreto
//                                                 transition: "transform 150ms ease, border-color 150ms ease, box-shadow 150ms ease",
//                                                 "&:hover": {
//                                                     borderColor: "rgba(109,76,246,0.26)",
//                                                     boxShadow: "0 16px 45px rgba(15,23,42,0.08)",
//                                                     transform: "translateY(-2px)",
//                                                 },
//                                             }}
//                                         >
//                                             {/* Dot timeline */}
//                                             <Box
//                                                 aria-hidden
//                                                 sx={{
//                                                     position: "absolute",
//                                                     left: -7,
//                                                     top: 22,
//                                                     width: 12,
//                                                     height: 12,
//                                                     borderRadius: "50%",
//                                                     background: "linear-gradient(90deg, #3B82F6, #6D4CF6, #EC4899)",
//                                                     boxShadow: "0 0 0 5px rgba(109,76,246,0.14)",
//                                                 }}
//                                             />

//                                             {/* Header */}
//                                             <Stack
//                                                 direction={{ xs: "column", sm: "row" }}
//                                                 justifyContent="space-between"
//                                                 alignItems={{ xs: "flex-start", sm: "center" }}
//                                                 spacing={0.75}
//                                             >
//                                                 {/* Left side: Logo + Text */}
//                                                 <Stack direction="row" spacing={1.5} alignItems="center">
//                                                     {/* Round Logo */}
//                                                     <Box
//                                                         component="img"
//                                                         src={e.image}
//                                                         alt={e.org}
//                                                         sx={{
//                                                             width: 44,
//                                                             height: 44,
//                                                             borderRadius: "50%",
//                                                             objectFit: "contain",
//                                                             backgroundColor: "#fff",
//                                                             padding: 0.75,
//                                                             border: "1px solid rgba(15,23,42,0.08)",
//                                                             boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
//                                                             flexShrink: 0,
//                                                         }}
//                                                     />

//                                                     {/* Title + Org */}
//                                                     <Box>
//                                                         <Typography
//                                                             sx={{
//                                                                 fontWeight: 900,
//                                                                 letterSpacing: 0.2,
//                                                                 lineHeight: 1.2,
//                                                                 color: "rgba(15,23,42,0.92)",
//                                                             }}
//                                                         >
//                                                             {e.title}
//                                                         </Typography>

//                                                         <Typography
//                                                             variant="body2"
//                                                             sx={{
//                                                                 color: "text.secondary",
//                                                                 mt: 0.25,
//                                                             }}
//                                                         >
//                                                             {e.org}
//                                                         </Typography>
//                                                     </Box>
//                                                 </Stack>

//                                                 {/* Date */}
//                                                 <Typography
//                                                     variant="caption"
//                                                     sx={{
//                                                         fontWeight: 700,
//                                                         letterSpacing: 0.4,
//                                                         color: "rgba(15,23,42,0.55)",
//                                                         textTransform: "uppercase",
//                                                         mt: { xs: 1, sm: 0 },
//                                                         mr: { sm: 2 },
//                                                     }}
//                                                 >
//                                                     {e.meta}
//                                                 </Typography>
//                                             </Stack>

//                                             {/* Divider sottile */}
//                                             <Divider sx={{ my: 1.75, opacity: 0.55 }} />

//                                             <Stack spacing={0.75} sx={{ mt: 1.5 }}>
//                                                 {e.bullets.map((b: string) => (
//                                                     <Typography
//                                                         key={b}
//                                                         variant="body2"
//                                                         sx={{
//                                                             color: "text.secondary",
//                                                             lineHeight: 1.7,
//                                                             position: "relative",
//                                                             pl: 2,
//                                                             "&::before": {
//                                                                 content: '"–"',
//                                                                 position: "absolute",
//                                                                 left: 0,
//                                                                 color: "rgba(109,76,246,0.7)",
//                                                             },
//                                                         }}
//                                                     >
//                                                         {b}
//                                                     </Typography>
//                                                 ))}
//                                             </Stack>
//                                         </Box>
//                                     ))}
//                                 </Stack>
//                             </Box>
//                         </Stack>
//                     </GlassCard>
//                 </Stack>
//             </Container>
//         </Box>
//     );
// }
import Image from "next/image";
import styles from "./ResumeServer.module.css";

const RESUME_PDF_URL = "/resume.pdf";
const EMAIL = "tuamail@email.com";
const LOCATION = "Italy";

const highlights = ["Frontend-focused", "React • TypeScript", "Design-minded"];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Material UI",
  "HTML/CSS",
  "Node.js",
  ".NET",
  "Git",
  "Figma",
];

const experience = [
  {
    title: "Core Tech Frontend Developer",
    org: "Irion",
    meta: "SETT 2025 — NOW",
    bullets: [
      "Built modern UI components with React and Material UI.",
      "Collaborated with product/design to deliver user-centered features.",
      "Developed APIs and business logic with clean, maintainable code.",
    ],
  },
  {
    title: "Full Stack Developer",
    org: "Betacom",
    meta: "FEBB 2023 — SETT 2025",
    bullets: [
      "Development and maintenance of the company’s internal employee portal, including the implementation of new features.",
      "Evolutionary and corrective maintenance of a multi-tenant SaaS platform for appraisal firms, with development of new frontend features (Angular 14+) and backend services (.NET Core 7+). Additional activities included bug fixing, testing, and product optimization.",
      "Bug fixing team lead, responsible for ticket lifecycle management and monitoring, task assignment, and operational coordination and support of the team.",
    ],
  },
];

const education = [
  {
    title: "ITS ICT Piemonte – Backend System Integrator",
    org: "ITS ICT Piemonte",
    image:
      "https://www.its-ictpiemonte.it/wp-content/uploads/2020/03/logo-its-ict-piemonte.svg",
    meta: "2021 — 2023",
    bullets: [
      "Specialized in backend development, system integration, and software architecture.",
      "Worked with databases, APIs, and server-side technologies to design scalable applications.",
      "Developed real-world projects involving RESTful services and system interoperability.",
    ],
  },
  {
    title: "Master’s Degree in ICT, Communication and Media",
    org: "University of Turin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Universit%C3%A0_degli_Studi_di_Torino_logo.svg",
    meta: "2020 — 2021",
    bullets: [
      "Focused on digital technologies, media systems, and communication strategies.",
      "Explored human-computer interaction, digital platforms, and emerging media.",
      "Completed academic projects combining technology, UX, and communication design.",
    ],
  },
  {
    title: "Bachelor’s Degree in Communication Science",
    org: "University of Turin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Universit%C3%A0_degli_Studi_di_Torino_logo.svg",
    meta: "2017 — 2020",
    bullets: [
      "Studied communication theory, media studies, and digital culture.",
      "Developed analytical and research skills applied to digital and technological contexts.",
      "Completed interdisciplinary projects focused on media analysis and communication strategy.",
    ],
  },
];

function SectionTitle({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle?: string;
  icon: string;
}) {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.sectionTitleTop}>
        <div className={styles.sectionIcon} aria-hidden>
          {icon}
        </div>
        <div>
          <div className={styles.sectionTitleText}>{title}</div>
          {subtitle ? <div className={styles.sectionSubtitle}>{subtitle}</div> : null}
        </div>
      </div>
      <div className={styles.sectionUnderline} aria-hidden />
    </div>
  );
}

function Chip({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span className={`${styles.chip} ${accent ? styles.chipAccent : ""}`}>
      {children}
    </span>
  );
}

function TimelineItem({
  title,
  org,
  meta,
  bullets,
  leading,
}: {
  title: string;
  org: string;
  meta: string;
  bullets: string[];
  leading?: React.ReactNode;
}) {
  return (
    <article className={styles.timelineItem}>
      <span className={styles.timelineDot} aria-hidden />

      <header className={styles.itemHeader}>
        <div className={styles.itemLeft}>
          {leading ? <div className={styles.leading}>{leading}</div> : null}
          <div>
            <div className={styles.itemTitle}>{title}</div>
            <div className={styles.itemOrg}>{org}</div>
          </div>
        </div>
        <div className={styles.itemMeta}>{meta}</div>
      </header>

      <div className={styles.itemDivider} aria-hidden />

      <ul className={styles.bullets}>
        {bullets.map((b) => (
          <li key={b} className={styles.bullet}>
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ResumeServer() {
  return (
    <section id="resume" className={styles.root}>
      <div className={styles.texture} aria-hidden />
      <div className={styles.blobLeft} aria-hidden />
      <div className={styles.blobRight} aria-hidden />

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.overline}>Resume</div>

          <h1 className={styles.h1}>
            Martina <span className={styles.gradientText}>Lanzillo</span>
          </h1>

          {/* se vuoi riattivare chips / bottoni, sono già server-safe */}
          {/* <div className={styles.chipsRow}>
            <Chip>{LOCATION}</Chip>
            <Chip>{EMAIL}</Chip>
            {highlights.map((h) => (
              <Chip key={h} accent>{h}</Chip>
            ))}
          </div>

          <div className={styles.actions}>
            <a className={styles.primaryBtn} href={RESUME_PDF_URL} target="_blank" rel="noreferrer">
              View PDF
            </a>
            <a className={styles.secondaryBtn} href={RESUME_PDF_URL} download>
              Download
            </a>
          </div> */}
        </div>

        <div className={styles.glassCard}>
          <div className={styles.cardInner}>
            <div>
              <SectionTitle icon="★" title="Summary" subtitle="A quick overview" />
              <p className={styles.paragraph}>
                Full Stack Developer with a strong focus on frontend development and the
                creation of modern, intuitive, and user-centered interfaces. I enjoy building
                high-quality products, continuously learning, and turning ideas into concrete,
                functional solutions.
              </p>
            </div>

            <hr className={styles.hr} />

            <div>
              <SectionTitle icon="★" title="Skills" subtitle="Technologies I use" />
              <div className={styles.skillsGrid}>
                {skills.map((s) => (
                  <Chip key={s} accent>
                    {s}
                  </Chip>
                ))}
              </div>
            </div>

            <hr className={styles.hr} />

            <div>
              <SectionTitle icon="💼" title="Experience" subtitle="Recent roles and responsibilities" />
              <div className={styles.timeline}>
                {experience.map((e) => (
                  <TimelineItem
                    key={e.title + e.org}
                    title={e.title}
                    org={e.org}
                    meta={e.meta}
                    bullets={e.bullets}
                  />
                ))}
              </div>
            </div>

            <hr className={styles.hr} />

            <div>
              <SectionTitle icon="🎓" title="Education" subtitle="Academic background" />
              <div className={styles.timeline}>
                {education.map((e) => (
                  <TimelineItem
                    key={e.title + e.org}
                    title={e.title}
                    org={e.org}
                    meta={e.meta}
                    bullets={e.bullets}
                    leading={
                      <Image
                        src={e.image}
                        alt={e.org}
                        width={44}
                        height={44}
                        className={styles.logo}
                      />
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
