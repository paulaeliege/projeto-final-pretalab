import styles from '../styles/components/footer.module.css'

export function Footer() {
    return (
        <>
        <footer className={styles.footerContainer}>
            <p className={styles.footerText}> Feito com ♡ por Paula Eliege, durante o projeto guiado no módulo de ReactJS da Pretalab!</p>
            <div className={styles.containerFooter}>
                <ul className={styles.listaFooter}>
                    <li>
                        <i class="fas fa-envelope-square estilo-icon"></i>
                        <a href="mailto:paulaeliegeferreira@gmail.com" target="_blank" className={styles.links}>Email</a>
                    </li>
                    <li>
                        <i class="fab fa-linkedin estilo-icon"></i>
                        <a href="https://www.linkedin.com/in/paula-ferreira-ti/" target="_blank"
                            className={styles.links}>Linkedin</a>
                    </li>
                    <li>
                        <i class="fab fa-github-square estilo-icon"></i>
                        <a href="https://github.com/paulaeliege" target="_blank" className={styles.links}>GitHub</a>
                    </li>
                </ul>
            </div>
        </footer>
        </>
    )
}