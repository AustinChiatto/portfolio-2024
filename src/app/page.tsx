import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="visuallyHidden">Austin Chiatto - Full Stack developer based in Vancouver</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.largeSpacing}>
          <h3>Nice to meet you.</h3>
        </div>
        <section className={styles.storytelling}>
          <p className="font-size-xl">
            I design and develop full-stack products for the web, utilizing the JavaScript ecosystem
            to create efficient and intuitive ways to interact with data in a browser.
          </p>
          <p className="font-size-xl">
            I am driven by curiosity, enjoy solving problems, and love engaging with projects that
            teach me something new.
          </p>
          <p className="font-size-xl">
            I&apos;m currently working on implementing new features for Apogee and developing a
            small repo of flexible UI.
          </p>
          <p className="font-size-xl">
            I live on the rainy west coast of Canada, where you can find me immersed in a project,
            tinkering with retro games, or hanging out with my cat, Max.
          </p>
          <p className="font-size-xl">I would love to start a conversation.</p>
          <a href="#">hey@austinchiatto.com</a>
        </section>
      </div>
    </main>
  );
}
