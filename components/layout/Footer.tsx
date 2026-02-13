import styles from "./FooterServer.module.css";

export default function FooterServer() {
  const year = new Date().getFullYear(); // qui è ok: viene calcolato sul server
  return (
    <footer className={styles.footer}>
      <div className={styles.texture} aria-hidden />
      <div className={styles.blob} aria-hidden />

      <div className={styles.container}>
        <div className={styles.brand}>Martina · Software Developer</div>

        <nav className={styles.social} aria-label="Social links">
          <a className={styles.iconBtn} href="https://github.com/tuo-username" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className={styles.iconBtn} href="https://linkedin.com/in/tuo-profilo" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className={styles.iconBtn} href="mailto:tuamail@email.com">
            Email
          </a>
        </nav>

        <div className={styles.divider} aria-hidden />

        <div className={styles.copy}>
          © {year} Martina. Built with ♥ using Next.js, React, Material UI.
        </div>
      </div>
    </footer>
  );
}
