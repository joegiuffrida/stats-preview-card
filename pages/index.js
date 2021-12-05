import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Stats Preview Card</title>
        <link rel="icon" href="favicon-32x32.jpg" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.card}>
        <header className={styles.cardImage}>
          <Image src="/image-header-mobile.jpg" width="654" height="480" />
          <div className={styles.overlay} />
        </header>

        <section className={styles.cardContent}>
          <h2>
            Get <span>insights</span> that help your business grow.
          </h2>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <ul>
            <li>
              <h3>10k+</h3>
              <p>COMPANIES</p>
            </li>
            <li>
              <h3>314</h3>
              <p>TEMPLATES</p>
            </li>
            <li>
              <h3>12M+</h3>
              <p>QUERIES</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
