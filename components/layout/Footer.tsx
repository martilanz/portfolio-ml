import styles from "./FooterServer.module.css";

export default function FooterServer() {
 
  return (
    <footer className={styles.footer}>
      <div className={styles.texture} aria-hidden />
      <div className={styles.blob} aria-hidden />

      <div className={styles.container}>
        <div className={styles.brand}>Martina Lanzillo · Software Developer</div>

        {/* <nav className={styles.social} aria-label="Social links">
          <a className={styles.iconBtn} href="https://github.com/tuo-username" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className={styles.iconBtn} href="https://linkedin.com/in/tuo-profilo" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className={styles.iconBtn} href=",artimal@email.com">
            Email
          </a>
        </nav> */}

        <div className={styles.divider} aria-hidden />

        <div className={styles.copy}>
          © 2026 Martina Lanzillo. Built with ♥ using Next.js, React and Material UI.
        </div>
      </div>
    </footer>
  );
}
