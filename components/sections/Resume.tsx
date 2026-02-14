import Image from "next/image";
import styles from "./ResumeServer.module.css";

const experience = [
  {
    title: "Core Tech Frontend Developer",
    org: "Irion",
    meta: "SEPT 2025 — NOW",
    bullets: [
      "Development and maintenance of Irion EDM, a data manangement platform",
      "End-to-end testing with Playwright",
      "Cross team collaboration to deliver new features",
    ],
  },
  {
    title: "Full Stack Developer",
    org: "Betacom",
    meta: "2023 — SEPT 2025",
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
      "/its.png",
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
      "/university.jpg",
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
      "/university.jpg",
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
