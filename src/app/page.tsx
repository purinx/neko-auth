import Image from 'next/image';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className="container">
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.grid}>
        <a
          href="/auth/register"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Register<span>-&gt;</span>
          </h2>
        </a>
        <a
          href="Sign In"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Sign In <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="Dashboard"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Dashboard <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://github.com/caburchin/neko-auth"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github<span>-&gt;</span>
          </h2>
        </a>
      </div>
    </main>
  );
}
