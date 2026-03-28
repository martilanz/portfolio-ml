import Image from "next/image";
import "./ResumeServer.css"


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
    <div className={"sectionTitle"}>
      <div className={"sectionTitleTop"}>
        <div className={"sectionIcon"} aria-hidden>
          {icon}
        </div>
        <div>
          <div className={"sectionTitleText"}>{title}</div>
          {subtitle ? <div className={"sectionSubtitle"}>{subtitle}</div> : null}
        </div>
      </div>
      <div className={"sectionUnderline"} aria-hidden />
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
    <article className={"timelineItem"}>
      <span className={"timelineDot"} aria-hidden />

      <header className={"itemHeader"}>
        <div className={"itemLeft"}>
          {leading ? <div className={"leading"}>{leading}</div> : null}
          <div>
            <div className={"itemTitle"}>{title}</div>
            <div className={"itemOrg"}>{org}</div>
          </div>
        </div>
        <div className={"itemMeta"}>{meta}</div>
      </header>

      <div className={"itemDivider"} aria-hidden />

      <ul className={"bullets"}>
        {bullets.map((b) => (
          <li key={b} className={"bullet"}>
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ResumeServer() {
  return (
    <section id="resume" className={"root"}>
      <div className={"texture"} aria-hidden />
      <div className={"blobLeft"} aria-hidden />
      <div className={"blobRight"} aria-hidden />

      <div className={"container"}>
        <div className={"header"}>
          <div className={"overline"}>Resume</div>

          <h1 className={"h1"}>
            Martina <span className={"gradientText"}>Lanzillo</span>
          </h1>

        </div>

        <div className={"glassCard"}>
          <div className={"cardInner"}>
            <div>
              <SectionTitle icon="★" title="Summary" subtitle="A quick overview" />
              <p className={"paragraph"}>
                Full Stack Developer with a strong focus on frontend development and the
                creation of modern, intuitive, and user-centered interfaces. I enjoy building
                high-quality products, continuously learning, and turning ideas into concrete,
                functional solutions.
              </p>
            </div>

          <hr className={"hr"} />

            <div>
              <SectionTitle icon="💼" title="Experience" subtitle="Recent roles and responsibilities" />
              <div className={"timeline"}>
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

            <hr className={"hr"} />

            <div>
              <SectionTitle icon="🎓" title="Education" subtitle="Academic background" />
              <div className={"timeline"}>
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
                        className={"logo"}
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
