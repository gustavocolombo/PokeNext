import styles from './styles.module.scss';
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Header(){
  return(
    <header className={styles.headerContent}>
      <div className={styles.hero}>
        <img src="/images/pokeball.png" alt="logo" width={30} height={30} />
        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </header>
  )
}