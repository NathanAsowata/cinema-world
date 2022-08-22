import Link from 'next/link'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>Designed and built by <Link href={'http://www.nathanasowata.com'}>
                <a target={'_blank'}>Nathan Asowata</a></Link>.
             Data provided by <Link href={'https://www.themoviedb.org/'}>
                <a target={'_blank'}>TheMovieDB</a></Link>
        </p>
    </footer>
  )
}

export default Footer