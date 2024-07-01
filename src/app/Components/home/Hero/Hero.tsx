import styles from '../../../Hero.module.scss'

export const Hero=()=>{
    console.log(styles)
    return(
        <section className={styles.Hero}>
            <h1>Pollos El Trofeo</h1>
            <h2>¡Bienvenidos a nuestra página!</h2>
        </section>
    )
}
