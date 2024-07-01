import Image from 'next/image';
import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound(){
    return(
        <main className={styles.NotFound}>
            <h1 className={styles.NotFound__title}>404</h1>
            <Image
            src='/images/404.png'
            width={500}
            height={300}
            alt='404'
            />
            <h2 className={styles.NotFound__subtitle}>la gallina no encontró  su gallinero</h2>
            <p className={styles.NotFound__description} >¡No  te preocupes, proximamentes esta función estará disponible!</p>
            <Link className={styles.NotFound__link} href='/store'>
             ¡volver a la sección de produtos aquí!
            
            </Link>
        </main>
    )

}