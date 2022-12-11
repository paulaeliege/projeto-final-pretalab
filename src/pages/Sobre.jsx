import { Header } from '../components/Header'
import sobreimage from '../assets/sobre.svg'
import Home from '../assets/sobreperf.jpeg'

import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
    return (
        <>
            <Header text="Minha Trajetória" image={sobreimage} />
            <dev className={styles.sobreContainer}>
                <img className={styles.bioImage} src={Home} />
                <div className={styles.bioContainer}>
                    <h2 className={styles.bioTitle}>Um pouco da minha história!</h2>
                    <p className={styles.bioDescricao}>
                        Olá! Meu nome é Paula Eliege,
                        nasci na cidade de São Paulo, hoje moro em São Bernardo do Campo,
                        tenho 47 anos sou mãe e apaixonada por tecnologia. Ainda não tenho formação superior, mais pretendo fazer.
                        Desenvolvedora Front-End na PretaLab, onde aprendi bastante, e através deste curso consegui desenvolver minhas hard skills e aperfeiçoar as soft skills.
                        Quero ser uma grande programadora! Gosto de gatos e peixes, eu amo o que faço, e gosto muito de crochetar.
                    </p>
                </div>
            </dev>

        </>
    )
}