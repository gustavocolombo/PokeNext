import styles from './styles.module.scss';

export default function Footer(){
  return(
    <footer className={styles.footer}>
      <p>
        <span>PokeNext</span> &copy; 2021
      </p>
    </footer>
  )
}