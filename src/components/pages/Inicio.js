import styles from '../styles/Home.module.css'
import energy from '../../img/energy_icon.svg'
import LinkButton from '../layout/LinkButton'

function Inicio() {
    return (
        <section className={styles.home_container}>
            <div className={styles.home_container_div}>
                <h1>Bem-vindo a <span>Energia Limpa</span></h1>
                <p>Comece a economizar agora mesmo! </p>
                <LinkButton to="/novo-cliente" text="Fazer Cotação" />
            </div>

            <img src={energy} alt="Economizar" />
        </section>
    )
}
export default Inicio