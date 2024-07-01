import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/store">
              ¡Oprime acá para explorar nuestros productos!
            </Link>
          </li>
          <li>
            <Link href="/contact">
              !Contáctanos!
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
